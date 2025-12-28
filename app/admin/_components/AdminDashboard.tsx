"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase";
import { Download, LogOut, Calendar, Users, Trash2, RefreshCw, X, Sun, Moon, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

interface Booking {
    id: string;
    eventId: string;
    date: string;
    time: string;
    service: string;
    platform?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    notes: string;
    whoAreYou: string;
    companyName: string;
    createdAt: string;
}

const TIME_SLOTS = [
    "09:00", "11:00",
    "13:00", "15:00", "16:00"
];

const PLATFORM_OPTIONS = ["Google Meet", "Zoom", "Microsoft Teams"];

const AdminDashboard = () => {
    const { logout, user } = useAuth();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<"upcoming" | "clients">("upcoming");

    // Reschedule Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
    const [newDate, setNewDate] = useState("");
    const [newTime, setNewTime] = useState("");
    const [newPlatform, setNewPlatform] = useState("");
    const [processing, setProcessing] = useState(false);

    // Calendar Logic State
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [monthlyBookedSlots, setMonthlyBookedSlots] = useState<Set<string>>(new Set());

    useEffect(() => {
        setMounted(true);
        fetchBookings();
    }, []);

    // Fetch Monthly Availability when modal is open
    useEffect(() => {
        if (!isModalOpen) return;

        const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
        const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 2, 1);

        const fetchMonthlySlots = async () => {
            try {
                const response = await fetch('/api/monthly-availability', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        startDate: formatDate(startOfMonth),
                        endDate: formatDate(endOfMonth)
                    }),
                });

                if (response.ok) {
                    const { bookedMap } = await response.json();
                    const newSet = new Set<string>();
                    Object.entries(bookedMap as Record<string, string[]>).forEach(([dateStr, times]) => {
                        if (times.includes("ALL")) {
                            newSet.add(`${dateStr}TALL`);
                        } else {
                            times.forEach(t => newSet.add(`${dateStr}T${t}`));
                        }
                    });
                    setMonthlyBookedSlots(newSet);
                }
            } catch (e) {
                console.error("Error fetching monthly slots:", e);
            }
        };

        fetchMonthlySlots();
    }, [currentMonth, isModalOpen]);

    // Calendar Helpers
    const calendarDays = useMemo(() => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const firstDay = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const startingDayOfWeek = firstDay.getDay();

        const days: (Date | null)[] = [];
        const adjustedStart = startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1;

        for (let i = 0; i < adjustedStart; i++) days.push(null);
        for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));

        return days;
    }, [currentMonth]);

    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const formatTime12h = (time24: string) => {
        const [h, m] = time24.split(":").map(Number);
        const h12 = ((h + 11) % 12) + 1;
        const ampm = h < 12 ? "AM" : "PM";
        return `${h12}:${String(m).padStart(2, "0")} ${ampm}`;
    };

    const isDayFull = (d: Date) => {
        const dateStr = formatDate(d);
        if (monthlyBookedSlots.has(`${dateStr}TALL`)) return true;
        return TIME_SLOTS.every(time => monthlyBookedSlots.has(`${dateStr}T${time}`));
    };

    const isDateDisabled = (date: Date | null) => {
        if (!date) return true;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        date.setHours(0, 0, 0, 0);
        if (date < today) return true;
        return isDayFull(date);
    };

    const isTimeDisabled = (time: string) => {
        if (!newDate) return true;
        if (monthlyBookedSlots.has(`${newDate}TALL`)) return true;
        if (monthlyBookedSlots.has(`${newDate}T${time}`)) return true;

        const now = new Date();
        const [hours, minutes] = time.split(':').map(Number);
        const localSlotDate = new Date(newDate + 'T' + time);
        // Simple check
        const d = new Date(newDate);
        d.setHours(hours, minutes, 0, 0);
        return d < now;
    };

    const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    const previousMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));

    const fetchBookings = async () => {
        try {
            const q = query(collection(db, "bookingSlots"), orderBy("date", "desc"));
            const snapshot = await getDocs(q);
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Booking[];
            setBookings(data);
        } catch (error) {
            console.error("Error fetching bookings:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (booking: Booking) => {
        if (!confirm(`Are you sure you want to cancel the booking for ${booking.firstName} ${booking.lastName}? This action cannot be undone.`)) return;

        setProcessing(true);
        try {
            const res = await fetch(`/api/manage-booking?bookingId=${booking.id}&eventId=${booking.eventId}`, {
                method: "DELETE",
            });
            if (!res.ok) throw new Error("Failed to delete confirmation");

            await fetchBookings();
            alert("Booking cancelled successfully.");
        } catch (error: any) {
            alert("Error cancelling booking: " + error.message);
        } finally {
            setProcessing(false);
        }
    };

    const openRescheduleModal = (booking: Booking) => {
        setSelectedBooking(booking);
        setNewDate(booking.date);
        setNewTime(booking.time);
        setNewPlatform(booking.platform || "");
        setIsModalOpen(true);
        // Reset calendar view to booking date
        setCurrentMonth(new Date(booking.date));
    };

    const handleReschedule = async () => {
        if (!selectedBooking || !newDate || !newTime) return;

        setProcessing(true);
        try {
            const res = await fetch("/api/manage-booking", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    bookingId: selectedBooking.id,
                    eventId: selectedBooking.eventId,
                    date: newDate,
                    time: newTime,
                    platform: newPlatform
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to reschedule");

            await fetchBookings();
            setIsModalOpen(false);
            alert("Booking rescheduled successfully.");
        } catch (error: any) {
            alert("Error rescheduling: " + error.message);
        } finally {
            setProcessing(false);
        }
    };

    const handleExportCSV = () => {
        if (bookings.length === 0) return;

        const headers = [
            "Date", "Time", "Service", "Platform", "First Name", "Last Name",
            "Email", "Phone", "Company Name", "Identity", "Notes", "Created At"
        ];

        const rows = bookings.map(b => [
            b.date,
            b.time,
            `"${b.service}"`,
            `"${b.platform || ""}"`,
            b.firstName,
            b.lastName,
            b.email,
            b.phone,
            `"${b.companyName || ""}"`,
            `"${b.whoAreYou || ""}"`,
            `"${b.notes?.replace(/"/g, '""') || ""}"`,
            b.createdAt
        ]);

        const csvContent = [
            headers.join(","),
            ...rows.map(r => r.join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `bookings_export_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const upcomingBookings = bookings.filter(b => {
        const bookingDate = new Date(b.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return bookingDate >= today;
    }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const displayData = activeTab === "upcoming" ? upcomingBookings : bookings;

    if (loading) {
        return <div className="flex items-center justify-center min-h-[60vh]"><div className="animate-spin rounded-full h-10 w-10 border-t-2 border-indigo-600"></div></div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans relative">
            {/* Navbar */}
            <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex flex-col md:flex-row justify-between items-center sticky top-0 z-10 gap-4">

                {/* Logo Area */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/Web Assets/Logo Design/07DB2623-BB8E-4BE0-A1F0-919309538C75.png"
                        alt="AALI Consulting"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        AALI Consulting <span className="text-indigo-600 text-sm bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800">Admin</span>
                    </h1>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                            aria-label="Toggle Theme"
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    )}

                    <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 hidden md:block"></div>

                    <span className="text-sm text-gray-500 hidden md:block font-medium">{user?.email}</span>

                    <button
                        onClick={logout}
                        className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 px-4 py-2 rounded-full transition-colors"
                    >
                        <LogOut size={16} /> Logout
                    </button>
                </div>
            </div>

            <div className="max-w-[95%] mx-auto p-4 md:p-8">

                {/* Stats / Controls */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
                        <button
                            onClick={() => setActiveTab("upcoming")}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === "upcoming"
                                    ? "bg-white dark:bg-gray-700 text-indigo-600 shadow-sm"
                                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400"
                                }`}
                        >
                            <Calendar size={16} /> Booked Dates ({upcomingBookings.length})
                        </button>
                        <button
                            onClick={() => setActiveTab("clients")}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === "clients"
                                    ? "bg-white dark:bg-gray-700 text-indigo-600 shadow-sm"
                                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400"
                                }`}
                        >
                            <Users size={16} /> Clients ({bookings.length})
                        </button>
                    </div>

                    <button
                        onClick={handleExportCSV}
                        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl font-semibold shadow-lg hover:shadow-indigo-500/30 transition-all active:scale-95"
                    >
                        <Download size={18} /> Export CSV
                    </button>
                </div>

                {/* Data Table */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-100 dark:border-gray-700">
                                <tr>
                                    <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">Date & Time</th>
                                    <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">First Name</th>
                                    <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">Last Name</th>
                                    <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">Email</th>
                                    <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">Phone</th>
                                    <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">Service</th>
                                    <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">Platform</th>
                                    <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">Company</th>
                                    <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">Identity</th>
                                    <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">Notes</th>
                                    <th className="px-6 py-4 font-semibold text-right text-gray-700 dark:text-gray-300 sticky right-0 bg-gray-50 dark:bg-gray-800 shadow-none md:shadow-[-4px_0_8px_-4px_rgba(0,0,0,0.1)]">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                {displayData.length === 0 ? (
                                    <tr>
                                        <td colSpan={11} className="px-6 py-10 text-center text-gray-500">
                                            No bookings found.
                                        </td>
                                    </tr>
                                ) : (
                                    displayData.map((booking) => (
                                        <tr key={booking.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-gray-900 dark:text-white">
                                                    {new Date(booking.date + 'T00:00:00').toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </div>
                                                <div className="text-gray-500 text-xs mt-1 font-mono bg-gray-100 dark:bg-gray-900 inline-block px-2 py-0.5 rounded">
                                                    {booking.time}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{booking.firstName || "---"}</td>
                                            <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{booking.lastName || "---"}</td>
                                            <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{booking.email || "---"}</td>
                                            <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{booking.phone || "---"}</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                                                    {booking.service || "---"}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{booking.platform || "---"}</td>
                                            <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{booking.companyName || "---"}</td>
                                            <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{booking.whoAreYou || "---"}</td>
                                            <td className="px-6 py-4 text-gray-500 dark:text-gray-400 max-w-xs truncate" title={booking.notes}>
                                                {booking.notes || "---"}
                                            </td>
                                            <td className="px-6 py-4 text-right sticky right-0 bg-white dark:bg-gray-900 md:bg-transparent">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        onClick={() => openRescheduleModal(booking)}
                                                        className="p-2 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors"
                                                        title="Reschedule"
                                                    >
                                                        <RefreshCw size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(booking)}
                                                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                                                        title="Cancel Booking"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Reschedule Modal */}
            {isModalOpen && selectedBooking && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
                    <div className="bg-white dark:bg-gray-800 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden scale-100 animate-fadeIn my-auto">
                        <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <RefreshCw size={20} className="text-indigo-600" />
                                Reschedule Booking
                            </h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6 flex flex-col gap-6">

                            {/* Current Booking Info */}
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl text-sm border border-indigo-100 dark:border-indigo-800/50">
                                <p className="font-semibold text-gray-900 dark:text-white mb-1 uppercase tracking-wide text-xs">Current Slot</p>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                                    <p className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                        <Calendar size={16} className="text-indigo-500" />
                                        {new Date(selectedBooking.date + 'T00:00:00').toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                        <Clock size={16} className="text-indigo-500" />
                                        {selectedBooking.time}
                                    </p>
                                </div>
                            </div>

                            {/* CALENDAR UI */}
                            <div className="flex flex-col xl:flex-row gap-8">
                                {/* Calendar Input */}
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-4">
                                        <button onClick={previousMonth} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"><ChevronLeft size={20} /></button>
                                        <span className="font-bold text-lg text-gray-900 dark:text-white">
                                            {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                        </span>
                                        <button onClick={nextMonth} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"><ChevronRight size={20} /></button>
                                    </div>

                                    <div className="grid grid-cols-7 gap-1 mb-2 text-center text-xs font-semibold text-gray-400 uppercase tracking-widest">
                                        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => <div key={d}>{d}</div>)}
                                    </div>

                                    <div className="grid grid-cols-7 gap-2">
                                        {calendarDays.map((date, i) => {
                                            if (!date) return <div key={i} />;
                                            const disabled = isDateDisabled(date);
                                            const isSel = newDate === formatDate(date);

                                            return (
                                                <button
                                                    key={i}
                                                    disabled={disabled}
                                                    onClick={() => {
                                                        setNewDate(formatDate(date));
                                                        setNewTime(""); // Reset time on date change
                                                    }}
                                                    className={`aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-all
                                ${isSel ? 'bg-indigo-600 text-white shadow-lg scale-105' :
                                                            disabled ? 'bg-gray-100 dark:bg-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed' :
                                                                'text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-700'}
                              `}
                                                >
                                                    {date.getDate()}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Time Slots */}
                                <div className="w-full xl:w-[240px] border-l border-gray-100 dark:border-gray-700 pl-0 xl:pl-8 pt-6 xl:pt-0">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">
                                        Available Times
                                    </h3>

                                    {newDate ? (
                                        <div className="grid grid-cols-2 xl:grid-cols-1 gap-2 max-h-[300px] overflow-y-auto pr-1">
                                            {TIME_SLOTS.map(t => {
                                                const disabled = isTimeDisabled(t);
                                                return (
                                                    <button
                                                        key={t}
                                                        disabled={disabled}
                                                        onClick={() => setNewTime(t)}
                                                        className={`py-2 px-3 rounded-lg border text-sm font-medium transition-all flex justify-between items-center group
                                  ${newTime === t
                                                                ? 'border-indigo-600 bg-indigo-600 text-white shadow-md'
                                                                : disabled
                                                                    ? 'border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed'
                                                                    : 'border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-indigo-500 hover:text-indigo-600'}
                                `}
                                                    >
                                                        {formatTime12h(t)}
                                                        {newTime === t && <CheckCircle size={14} />}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center h-[150px] text-gray-400 text-center text-xs">
                                            <Calendar size={24} className="mb-2 opacity-50" />
                                            <p>Select a date first</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="h-px bg-gray-100 dark:bg-gray-700"></div>

                            {/* Platform Selection */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Meeting Platform</label>
                                <div className="flex flex-wrap gap-2">
                                    {PLATFORM_OPTIONS.map(opt => (
                                        <button
                                            key={opt}
                                            onClick={() => setNewPlatform(opt)}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${newPlatform === opt
                                                    ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                                                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-indigo-300 hover:bg-indigo-50 dark:hover:bg-gray-600"
                                                }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <div className="p-6 bg-gray-50 dark:bg-gray-800/50 flex gap-3 justify-end border-t border-gray-100 dark:border-gray-700">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="py-2.5 px-5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-xl transition-colors min-w-[100px]"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleReschedule}
                                disabled={processing || !newDate || !newTime}
                                className="py-2.5 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors disabled:opacity-70 disabled:grayscale shadow-lg shadow-indigo-200 dark:shadow-none min-w-[140px] flex justify-center items-center gap-2"
                            >
                                {processing ? "Updating..." : "Confirm Change"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};
// Add Clock component safely if needed or reuse Lucide
function Clock({ size, className }: { size: number, className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
    )
}

export default AdminDashboard;

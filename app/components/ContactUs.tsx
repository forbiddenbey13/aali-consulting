"use client";
import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Video, CheckCircle, X } from "lucide-react";
import Image from "next/image";

// ---------- Config ----------
const SERVICES = [
  "Personal tax",
  "Corporate tax",
  "Strategic Financial Planning",
  "Accounting",
  "Bookkeeping",
  "System Implementation",
];

const TIME_SLOTS = [
  "09:00", "11:00",
  "13:00", "15:00", "16:00"
];

type FormData = {
  service: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
};

const BookingFlowCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [showContactForm, setShowContactForm] = useState(false);
  const [data, setData] = useState<FormData>({
    service: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bookedSlots, setBookedSlots] = useState<Set<string>>(new Set());
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Fetch booked slots from Google Calendar via API
  useEffect(() => {
    const fetchBookedSlots = async () => {
      const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
      const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

      const startStr = formatDate(startOfMonth);
      const endStr = formatDate(endOfMonth);

      try {
        const response = await fetch('/api/check-availability', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ startDate: startStr, endDate: endStr }),
        });

        if (response.ok) {
          const data = await response.json();
          const slots = new Set<string>();
          data.bookedSlots.forEach((slot: any) => {
            slots.add(`${slot.date}T${slot.time}`);
          });
          setBookedSlots(slots);
        }
      } catch (error) {
        console.error('Error fetching booked slots:', error);
      }
    };

    fetchBookedSlots();
  }, [currentMonth]);

  // Generate calendar days for current month
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];

    // Adjust for Monday start (0 = Sunday, 1 = Monday, etc.)
    const adjustedStart = startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1;

    for (let i = 0; i < adjustedStart; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

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

  const isDateDisabled = (date: Date | null) => {
    if (!date) return true;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isTimeDisabled = (time: string) => {
    if (!selectedDate) return true;
    const slotKey = `${selectedDate}T${time}`;
    const now = new Date();

    // Parse the selected date and time properly
    const [hours, minutes] = time.split(':').map(Number);
    const slotDate = new Date(selectedDate);
    slotDate.setHours(hours, minutes, 0, 0);

    return slotDate < now || bookedSlots.has(slotKey);
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateSelect = (date: Date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
    setSelectedTime("");
    setSelectedService("");
  };

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
  };

  const handleTimeSelect = (time: string) => {
    if (!selectedService) {
      alert('Please select a service first');
      return;
    }
    setSelectedTime(time);
    setShowContactForm(true);
    setData((d) => ({ ...d, date: selectedDate, time, service: selectedService }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const e2: typeof errors = {};
    if (!data.firstName.trim()) e2.firstName = "First name is required.";
    if (!data.lastName.trim()) e2.lastName = "Last name is required.";
    if (!data.email.trim()) e2.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e2.email = "Enter a valid email.";

    setErrors(e2);
    if (Object.keys(e2).length) return;

    setSubmitting(true);

    try {
      const response = await fetch('/api/create-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: selectedDate,
          time: selectedTime,
          service: selectedService,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          notes: data.notes,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to create booking');
      }

      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        setShowContactForm(false);
        setSelectedDate("");
        setSelectedTime("");
        setSelectedService("");
        setData({
          service: "",
          date: "",
          time: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          notes: "",
        });
      }, 3000);

    } catch (error) {
      console.error("Booking error:", error);
      alert("Failed to create booking. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 font-sans p-5 lg:p-10 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 lg:gap-[60px]">
        {/* Left Side - Company Info */}
        <div className="h-fit lg:sticky lg:top-10">
          <div className="mb-6">
            <Image
              src="/Web Assets/Logo Design/07DB2623-BB8E-4BE0-A1F0-919309538C75-removebg-preview.png"
              alt="AALI Consulting"
              width={75}
              height={75}
              className="object-contain"
            />
          </div>
          <h1 className="text-[13px] text-gray-500 dark:text-gray-400 mb-1 font-medium uppercase tracking-wider">AALI Consulting Inc.</h1>
          <h2 className="text-[32px] text-gray-900 dark:text-white mb-8 font-bold leading-tight">Book a Consultation</h2>

          <div className="flex flex-col gap-4 mb-8 p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 text-[15px] text-gray-700 dark:text-gray-200 font-medium">
              <Clock size={20} className="text-indigo-600 dark:text-indigo-400" />
              <span>1 Hour Session</span>
            </div>
            <div className="flex items-center gap-3 text-[15px] text-gray-700 dark:text-gray-200 font-medium">
              <Video size={20} className="text-indigo-600 dark:text-indigo-400" />
              <span>Via Google Meet</span>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200 dark:border-gray-700 mb-6">
            <h3 className="text-[15px] text-gray-900 dark:text-white mb-3 font-semibold">What to expect:</h3>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed m-0">
              A complimentary consultation designed to explore your goals, challenges, and opportunities. We'll discuss your specific needs and how we can help you achieve your objectives.
            </p>
          </div>

          {selectedDate && (
            <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-5 border-2 border-indigo-600 dark:border-indigo-400">
              <h4 className="text-[14px] text-indigo-600 dark:text-indigo-300 mb-4 font-semibold uppercase tracking-wider">Your Selection</h4>
              <div className="flex justify-between mb-3">
                <span className="text-[14px] text-gray-500 dark:text-gray-400 font-medium">Date:</span>
                <span className="text-[14px] text-gray-900 dark:text-white font-semibold">
                  {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
              {selectedService && (
                <div className="flex justify-between mb-3">
                  <span className="text-[14px] text-gray-500 dark:text-gray-400 font-medium">Service:</span>
                  <span className="text-[14px] text-gray-900 dark:text-white font-semibold text-right max-w-[60%]">{selectedService}</span>
                </div>
              )}
              {selectedTime && (
                <div className="flex justify-between mb-3">
                  <span className="text-[14px] text-gray-500 dark:text-gray-400 font-medium">Time:</span>
                  <span className="text-[14px] text-gray-900 dark:text-white font-semibold">{formatTime12h(selectedTime)} EST</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Side - Calendar & Booking */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-10 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-10 px-5 relative">
            <div className="absolute left-5 right-5 top-1/2 h-[2px] bg-gray-200 dark:bg-gray-700 -z-0"></div>

            <div className={`relative z-10 flex flex-col items-center gap-2 text-[13px] font-medium bg-white dark:bg-gray-800 px-2 ${selectedDate ? 'text-emerald-500' : 'text-indigo-600 dark:text-indigo-400'}`}>
              {selectedDate ? <CheckCircle size={20} /> : <span className="w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 text-xs">1</span>}
              <span className="hidden sm:inline">Select Date</span>
            </div>

            <div className={`relative z-10 flex flex-col items-center gap-2 text-[13px] font-medium bg-white dark:bg-gray-800 px-2 ${selectedService ? 'text-emerald-500' : selectedDate ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400'}`}>
              {selectedService ? <CheckCircle size={20} /> : <span className={`w-5 h-5 flex items-center justify-center rounded-full text-xs ${selectedDate ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400' : 'bg-gray-100 dark:bg-gray-700'}`}>2</span>}
              <span className="hidden sm:inline">Choose Service</span>
            </div>

            <div className={`relative z-10 flex flex-col items-center gap-2 text-[13px] font-medium bg-white dark:bg-gray-800 px-2 ${selectedTime ? 'text-emerald-500' : selectedService ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400'}`}>
              {selectedTime ? <CheckCircle size={20} /> : <span className={`w-5 h-5 flex items-center justify-center rounded-full text-xs ${selectedService ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400' : 'bg-gray-100 dark:bg-gray-700'}`}>3</span>}
              <span className="hidden sm:inline">Pick Time</span>
            </div>
          </div>

          {/* Calendar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <button className="w-10 h-10 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all" onClick={previousMonth}>
                <ChevronLeft size={20} />
              </button>
              <div className="text-[18px] font-bold text-gray-900 dark:text-white">
                {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </div>
              <button className="w-10 h-10 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all" onClick={nextMonth}>
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-2">
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                <div key={day} className="text-center text-[12px] font-semibold text-gray-500 dark:text-gray-400 py-2">{day}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((date, index) => {
                const isDisabled = isDateDisabled(date);
                const isSelected = date && formatDate(date) === selectedDate;
                const todayDate = new Date();
                todayDate.setHours(0, 0, 0, 0);
                const compareDate = date ? new Date(date) : null;
                if (compareDate) compareDate.setHours(0, 0, 0, 0);
                const isToday = compareDate && compareDate.getTime() === todayDate.getTime();

                return (
                  <button
                    key={index}
                    className={`aspect-square border-2 rounded-xl text-[15px] font-medium transition-all flex items-center justify-center
                      ${isDisabled
                        ? 'border-transparent text-gray-300 dark:text-gray-600 bg-transparent cursor-not-allowed'
                        : isSelected
                          ? 'bg-indigo-600 text-white border-indigo-600 font-bold'
                          : isToday
                            ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700 font-semibold'
                            : 'bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border-transparent hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer'
                      }
                    `}
                    onClick={() => date && !isDisabled && handleDateSelect(date)}
                    disabled={isDisabled}
                  >
                    {date ? date.getDate() : ''}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Service Selection */}
          {selectedDate && (
            <div className="mb-8 animate-fadeIn">
              <h3 className="text-[18px] font-semibold text-gray-900 dark:text-white mb-4">Select a Service</h3>
              <select
                className="w-full p-3.5 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-[15px] text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-medium transition-all focus:border-indigo-500 focus:outline-none"
                value={selectedService}
                onChange={(e) => handleServiceSelect(e.target.value)}
              >
                <option value="">Choose a service...</option>
                {SERVICES.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
          )}

          {/* Time Slots */}
          {selectedDate && selectedService && (
            <div className="mt-8 animate-fadeIn">
              <h3 className="text-[18px] font-semibold text-gray-900 dark:text-white mb-4">
                Available Times - {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric'
                })}
              </h3>
              <div className="flex items-center gap-2 text-[13px] text-gray-500 dark:text-gray-400 mb-4">
                <Clock size={16} />
                <span>Eastern Standard Time (EST)</span>
              </div>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-3">
                {TIME_SLOTS.map((time) => {
                  const disabled = isTimeDisabled(time);
                  const selected = selectedTime === time;

                  return (
                    <button
                      key={time}
                      className={`p-3.5 border-2 rounded-xl text-[14px] font-semibold transition-all
                        ${disabled
                          ? 'border-gray-100 dark:border-gray-700 text-gray-300 dark:text-gray-600 bg-gray-50 dark:bg-gray-800/50 cursor-not-allowed'
                          : selected
                            ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 cursor-pointer'
                            : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:border-gray-300 dark:hover:border-gray-500 cursor-pointer'
                        }
                      `}
                      onClick={() => !disabled && handleTimeSelect(time)}
                      disabled={disabled}
                    >
                      {formatTime12h(time)}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Contact Form Modal */}
          {showContactForm && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000] p-5 backdrop-blur-sm">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-10 max-w-[550px] w-full max-h-[90vh] overflow-auto relative shadow-2xl animate-scaleIn">
                <button className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors" onClick={() => setShowContactForm(false)}>
                  <X size={24} />
                </button>
                <h3 className="text-[24px] text-gray-900 dark:text-white mb-2 font-bold">Complete Your Booking</h3>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-6 border-l-4 border-indigo-600 dark:border-indigo-500">
                  <p className="font-bold text-gray-900 dark:text-white mb-1">{selectedService}</p>
                  <p className="text-gray-600 dark:text-gray-300">{new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })} at {formatTime12h(selectedTime)} EST</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-[14px] text-gray-700 dark:text-gray-300 mb-2 font-semibold">First Name *</label>
                      <input
                        className="p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-[15px] text-gray-900 dark:text-white bg-white dark:bg-gray-700 outline-none focus:border-indigo-500 transition-all"
                        type="text"
                        placeholder="John"
                        value={data.firstName}
                        onChange={(e) => setData((d) => ({ ...d, firstName: e.target.value }))}
                      />
                      {errors.firstName && <p className="text-red-500 text-[13px] mt-1.5 font-medium">{errors.firstName}</p>}
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[14px] text-gray-700 dark:text-gray-300 mb-2 font-semibold">Last Name *</label>
                      <input
                        className="p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-[15px] text-gray-900 dark:text-white bg-white dark:bg-gray-700 outline-none focus:border-indigo-500 transition-all"
                        type="text"
                        placeholder="Doe"
                        value={data.lastName}
                        onChange={(e) => setData((d) => ({ ...d, lastName: e.target.value }))}
                      />
                      {errors.lastName && <p className="text-red-500 text-[13px] mt-1.5 font-medium">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[14px] text-gray-700 dark:text-gray-300 mb-2 font-semibold">Email *</label>
                    <input
                      className="p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-[15px] text-gray-900 dark:text-white bg-white dark:bg-gray-700 outline-none focus:border-indigo-500 transition-all"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={data.email}
                      onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
                    />
                    {errors.email && <p className="text-red-500 text-[13px] mt-1.5 font-medium">{errors.email}</p>}
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[14px] text-gray-700 dark:text-gray-300 mb-2 font-semibold">Phone</label>
                    <input
                      className="p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-[15px] text-gray-900 dark:text-white bg-white dark:bg-gray-700 outline-none focus:border-indigo-500 transition-all"
                      type="tel"
                      placeholder="(123) 456-7890"
                      value={data.phone}
                      onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[14px] text-gray-700 dark:text-gray-300 mb-2 font-semibold">Additional Notes</label>
                    <textarea
                      className="p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-[15px] text-gray-900 dark:text-white bg-white dark:bg-gray-700 outline-none focus:border-indigo-500 transition-all min-h-[100px] resize-y font-sans"
                      placeholder="Tell us about your needs or any specific topics you'd like to discuss..."
                      rows={4}
                      value={data.notes}
                      onChange={(e) => setData((d) => ({ ...d, notes: e.target.value }))}
                    />
                  </div>

                  <button
                    type="submit"
                    className="p-4 bg-indigo-600 hover:bg-indigo-700 text-white border-none rounded-xl text-[16px] font-semibold cursor-pointer mt-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={submitting}
                  >
                    {submitting ? "Confirming..." : "Confirm Booking"}
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Success Message */}
          {showSuccess && (
            <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-[1001] backdrop-blur-sm p-4">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 max-w-[500px] text-center shadow-2xl animate-scaleIn">
                <div className="mb-6 flex justify-center">
                  <CheckCircle size={64} className="text-emerald-500" />
                </div>
                <h2 className="text-[28px] text-gray-900 dark:text-white mb-4 font-bold">Booking Confirmed!</h2>
                <p className="text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed m-0">
                  Your consultation has been scheduled. You'll receive a confirmation email with the Google Meet link shortly.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingFlowCalendar;
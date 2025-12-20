"use client";
import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, Clock, Calendar, User, Briefcase, Check } from "lucide-react";
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

type Step = 1 | 2 | 3;

const ContactUs: React.FC = () => {
  // State
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");

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

  // ---------- Effects & Logic ----------

  // Fetch booked slots
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
          const resData = await response.json();
          const slots = new Set<string>();
          resData.bookedSlots.forEach((slot: any) => {
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

  // Calendar Logic
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];
    // Adjust for Monday start (0 = Sunday, 1 = Monday...)
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

  const isDateDisabled = (date: Date | null) => {
    if (!date) return true;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    // Disable weekends? Assuming yes based on typical business hours, or keep open if previously open.
    // Keeping logic simple: past dates disabled.
    return date < today;
  };

  const isTimeDisabled = (time: string) => {
    if (!selectedDate) return true;
    const slotKey = `${selectedDate}T${time}`;
    const now = new Date();
    const [hours, minutes] = time.split(':').map(Number);
    const slotDate = new Date(selectedDate);
    slotDate.setHours(hours, minutes, 0, 0);
    return slotDate < now || bookedSlots.has(slotKey);
  };

  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  const previousMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));

  // Handlers
  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setData(prev => ({ ...prev, service }));
    setTimeout(() => setCurrentStep(2), 300); // Auto-advance
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(formatDate(date));
    setSelectedTime(""); // Reset time when date changes
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setData(prev => ({ ...prev, date: selectedDate, time }));
    // Auto-scroll or something? Maybe just let user click Next or auto-advance
    // Let's auto-advance to step 3 for smooth UX
    setTimeout(() => setCurrentStep(3), 300);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(prev => (prev - 1) as Step);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const e2: typeof errors = {};
    if (!data.firstName.trim()) e2.firstName = "First name is required.";
    if (!data.lastName.trim()) e2.lastName = "Last name is required.";
    if (!data.email.trim()) e2.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e2.email = "Enter a valid email.";

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

      if (!response.ok) throw new Error('Failed to create booking');

      setShowSuccess(true);
    } catch (error) {
      console.error("Booking error:", error);
      alert("Failed to create booking. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Render Helpers
  const renderStepIndicator = (step: number, label: string, icon: React.ReactNode) => {
    const isActive = currentStep === step;
    const isCompleted = currentStep > step;

    return (
      <div className={`relative flex flex-col items-start gap-2 pl-8 pb-10 border-l-2 last:border-0 ${isCompleted ? 'border-indigo-600 dark:border-indigo-400' : 'border-gray-200 dark:border-gray-700'}`}>
        <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 transition-all duration-300 bg-white dark:bg-gray-900 
          ${isActive ? 'border-indigo-600 scale-125' : isCompleted ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300 dark:border-gray-600'}`}>
          {isCompleted && <div className="w-full h-full bg-indigo-600 rounded-full" />}
        </div>

        <div className={`transition-all duration-300 ${isActive ? 'opacity-100 translate-x-1' : 'opacity-60'}`}>
          <h4 className={`text-sm font-bold uppercase tracking-wider mb-1 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400'}`}>
            Step {step}
          </h4>
          <div className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            {icon}
            <span>{label}</span>
          </div>
          {isCompleted && step === 1 && <div className="text-sm text-indigo-600 dark:text-indigo-400 mt-1 font-medium">{selectedService}</div>}
          {isCompleted && step === 2 && selectedDate && selectedTime && (
            <div className="text-sm text-indigo-600 dark:text-indigo-400 mt-1 font-medium">
              {new Date(selectedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}, {formatTime12h(selectedTime)}
            </div>
          )}
        </div>
      </div>
    );
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-6">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 max-w-lg w-full text-center shadow-2xl animate-scaleIn">
          <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Booking Confirmed!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Thank you, {data.firstName}. Your consultation for <span className="font-semibold text-indigo-600 dark:text-indigo-400">{selectedService}</span> is scheduled for <span className="font-semibold">{formatDate(new Date(selectedDate))}</span> at <span className="font-semibold">{formatTime12h(selectedTime)}</span>.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
            Check your email for the Google Meet link.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition shadow-lg"
          >
            Start New Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8 lg:p-12 font-sans flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 w-full max-w-6xl rounded-[32px] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[700px]">

        {/* LEFT SIDEBAR */}
        <div className="w-full lg:w-[320px] bg-gray-50 dark:bg-gray-800/50 border-r border-gray-100 dark:border-gray-700 p-8 flex flex-col">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/Web Assets/Logo Design/07DB2623-BB8E-4BE0-A1F0-919309538C75-removebg-preview.png"
                alt="AALI Consulting"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="font-bold text-lg text-gray-900 dark:text-white tracking-tight">AALI Consulting</span>
            </div>
          </div>

          <div className="flex-1">
            {renderStepIndicator(1, "Service", <Briefcase size={18} />)}
            {renderStepIndicator(2, "Date & Time", <Calendar size={18} />)}
            {renderStepIndicator(3, "Details", <User size={18} />)}
          </div>

          <div className="mt-auto pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                {/* Placeholder avatar or generic icon */}
                <User className="w-full h-full p-2 text-gray-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Need help?</p>
                <p>info@aaliconsulting.ca</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 p-6 md:p-10 lg:p-14 overflow-y-auto relative">

          {/* Header Navigation for Mobile / History */}
          {currentStep > 1 && (
            <button onClick={handleBack} className="absolute top-8 left-8 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-500">
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="max-w-3xl mx-auto pt-8">

            {/* STEP 1: SERVICE */}
            {currentStep === 1 && (
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Select a Service</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8">What can we help you with today?</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SERVICES.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleServiceSelect(s)}
                      className={`p-6 rounded-2xl border-2 text-left transition-all duration-200 hover:shadow-md group
                         ${selectedService === s
                          ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                          : 'border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800 bg-white dark:bg-gray-800'}`}
                    >
                      <div className="flex justify-between items-center">
                        <span className={`font-semibold text-lg ${selectedService === s ? 'text-indigo-700 dark:text-indigo-300' : 'text-gray-700 dark:text-gray-200 group-hover:text-indigo-600'}`}>
                          {s}
                        </span>
                        {selectedService === s && <CheckCircle className="text-indigo-600" size={20} />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: DATE & TIME */}
            {currentStep === 2 && (
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Select Date & Time</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8">When would you like to meet?</p>

                <div className="flex flex-col xl:flex-row gap-10">
                  {/* Calendar */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-6">
                      <button onClick={previousMonth} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"><ChevronLeft /></button>
                      <span className="font-bold text-lg text-gray-900 dark:text-white">
                        {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </span>
                      <button onClick={nextMonth} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"><ChevronRight /></button>
                    </div>

                    <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-semibold text-gray-400 uppercase tracking-widest">
                      {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => <div key={d}>{d}</div>)}
                    </div>

                    <div className="grid grid-cols-7 gap-2">
                      {calendarDays.map((date, i) => {
                        if (!date) return <div key={i} />;
                        const disabled = isDateDisabled(date);
                        const isSel = selectedDate === formatDate(date);

                        return (
                          <button
                            key={i}
                            disabled={disabled}
                            onClick={() => handleDateSelect(date)}
                            className={`aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-all
                                ${isSel ? 'bg-indigo-600 text-white shadow-lg scale-105' :
                                disabled ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' :
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
                  <div className="w-full xl:w-[280px] border-l border-gray-100 dark:border-gray-700 pl-0 xl:pl-10 pt-8 xl:pt-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                      {selectedDate
                        ? new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
                        : "Select a date first"}
                    </h3>

                    {selectedDate ? (
                      <div className="flex flex-col gap-3 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                        {TIME_SLOTS.map(t => {
                          const disabled = isTimeDisabled(t);
                          return (
                            <button
                              key={t}
                              disabled={disabled}
                              onClick={() => handleTimeSelect(t)}
                              className={`w-full py-3 px-4 rounded-xl border text-sm font-semibold transition-all
                                  ${selectedTime === t
                                  ? 'border-indigo-600 bg-indigo-600 text-white shadow-md'
                                  : disabled
                                    ? 'border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed'
                                    : 'border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-indigo-500 hover:text-indigo-600'}
                                `}
                            >
                              {formatTime12h(t)}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-[200px] text-gray-400 text-center text-sm">
                        <Calendar size={32} className="mb-2 opacity-50" />
                        <p>Please select a date to view available times.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: DETAILS */}
            {currentStep === 3 && (
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Your Details</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8">Please provide your contact information.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-2xl flex items-center justify-between border border-indigo-100 dark:border-indigo-800/50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-600 shadow-sm">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-indigo-300 font-medium uppercase tracking-wide">Selected Slot</p>
                        <p className="font-bold text-gray-900 dark:text-white">
                          {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} • {formatTime12h(selectedTime)}
                        </p>
                      </div>
                    </div>
                    <button type="button" onClick={() => setCurrentStep(2)} className="text-sm font-semibold text-indigo-600 hover:underline">Change</button>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">First Name</label>
                      <input
                        type="text"
                        value={data.firstName}
                        onChange={e => setData(d => ({ ...d, firstName: e.target.value }))}
                        className="p-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                        placeholder="John"
                      />
                      {errors.firstName && <span className="text-red-500 text-xs font-medium">{errors.firstName}</span>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Last Name</label>
                      <input
                        type="text"
                        value={data.lastName}
                        onChange={e => setData(d => ({ ...d, lastName: e.target.value }))}
                        className="p-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                        placeholder="Doe"
                      />
                      {errors.lastName && <span className="text-red-500 text-xs font-medium">{errors.lastName}</span>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
                    <input
                      type="email"
                      value={data.email}
                      onChange={e => setData(d => ({ ...d, email: e.target.value }))}
                      className="p-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs font-medium">{errors.email}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      value={data.phone}
                      onChange={e => setData(d => ({ ...d, phone: e.target.value }))}
                      className="p-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Additional Notes</label>
                    <textarea
                      rows={3}
                      value={data.notes}
                      onChange={e => setData(d => ({ ...d, notes: e.target.value }))}
                      className="p-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                      placeholder="Anything else we should know?"
                    />
                  </div>

                  <div className="pt-4 flex gap-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                    >
                      {submitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>Confirm Booking</span>
                          <CheckCircle size={20} />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
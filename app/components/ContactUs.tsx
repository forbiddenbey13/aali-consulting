"use client";
import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Video, CheckCircle } from "lucide-react";
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
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Left Side - Company Info */}
        <div style={styles.leftPanel}>
          <div style={styles.logoSection}>

              <Image
                            src="/Web Assets/Logo Design/07DB2623-BB8E-4BE0-A1F0-919309538C75-removebg-preview.png"
                            alt="AALI Consulting"
                            width={75}
                            height={75}
                            className="object-contain"
                          />
     
          </div>
          <h1 style={styles.companyName}>AALI Consulting Inc.</h1>
          <h2 style={styles.pageTitle}>Book a Consultation</h2>
          
          <div style={styles.meetingInfo}>
            <div style={styles.infoItem}>
              <Clock size={20} color="#4F46E5" />
              <span>1 Hour Session</span>
            </div>
            <div style={styles.infoItem}>
              <Video size={20} color="#4F46E5" />
              <span>Via Google Meet</span>
            </div>
          </div>

          <div style={styles.aboutSection}>
            <h3 style={styles.aboutTitle}>What to expect:</h3>
            <p style={styles.aboutText}>
              A complimentary consultation designed to explore your goals, challenges, and opportunities. We'll discuss your specific needs and how we can help you achieve your objectives.
            </p>
          </div>

          {selectedDate && (
            <div style={styles.selectionSummary}>
              <h4 style={styles.summaryTitle}>Your Selection</h4>
              <div style={styles.summaryItem}>
                <span style={styles.summaryLabel}>Date:</span>
                <span style={styles.summaryValue}>
                  {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { 
                    weekday: 'short',
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
              {selectedService && (
                <div style={styles.summaryItem}>
                  <span style={styles.summaryLabel}>Service:</span>
                  <span style={styles.summaryValue}>{selectedService}</span>
                </div>
              )}
              {selectedTime && (
                <div style={styles.summaryItem}>
                  <span style={styles.summaryLabel}>Time:</span>
                  <span style={styles.summaryValue}>{formatTime12h(selectedTime)} EST</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Side - Calendar & Booking */}
        <div style={styles.rightPanel}>
          <div style={styles.stepIndicator}>
            <div style={{...styles.step, ...(selectedDate ? styles.stepComplete : styles.stepActive)}}>
              {selectedDate ? <CheckCircle size={20} /> : <span>1</span>}
              <span>Select Date</span>
            </div>
            <div style={styles.stepLine}></div>
            <div style={{...styles.step, ...(selectedService ? styles.stepComplete : selectedDate ? styles.stepActive : {})}}>
              {selectedService ? <CheckCircle size={20} /> : <span>2</span>}
              <span>Choose Service</span>
            </div>
            <div style={styles.stepLine}></div>
            <div style={{...styles.step, ...(selectedTime ? styles.stepComplete : selectedService ? styles.stepActive : {})}}>
              {selectedTime ? <CheckCircle size={20} /> : <span>3</span>}
              <span>Pick Time</span>
            </div>
          </div>

          {/* Calendar */}
          <div style={styles.calendarSection}>
            <div style={styles.calendarHeader}>
              <button style={styles.navButton} onClick={previousMonth}>
                <ChevronLeft size={20} />
              </button>
              <div style={styles.monthYear}>
                {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </div>
              <button style={styles.navButton} onClick={nextMonth}>
                <ChevronRight size={20} />
              </button>
            </div>

            <div style={styles.weekdays}>
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                <div key={day} style={styles.weekday}>{day}</div>
              ))}
            </div>

            <div style={styles.daysGrid}>
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
                    style={{
                      ...styles.dayButton,
                      ...(isDisabled ? styles.dayButtonDisabled : {}),
                      ...(isSelected ? styles.dayButtonSelected : {}),
                      ...(isToday && !isSelected ? styles.dayButtonToday : {}),
                    }}
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
            <div style={styles.serviceSection}>
              <h3 style={styles.sectionTitle}>Select a Service</h3>
              <select 
                style={styles.serviceDropdown}
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
            <div style={styles.timeSlotsSection}>
              <h3 style={styles.sectionTitle}>
                Available Times - {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </h3>
              <div style={styles.timeZoneNote}>
                <Clock size={16} />
                <span>Eastern Standard Time (EST)</span>
              </div>
              <div style={styles.timeSlots}>
                {TIME_SLOTS.map((time) => {
                  const disabled = isTimeDisabled(time);
                  const selected = selectedTime === time;
                  
                  return (
                    <button
                      key={time}
                      style={{
                        ...styles.timeSlot,
                        ...(disabled ? styles.timeSlotDisabled : {}),
                        ...(selected ? styles.timeSlotSelected : {}),
                      }}
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
            <div style={styles.modal}>
              <div style={styles.modalContent}>
                <button style={styles.closeButton} onClick={() => setShowContactForm(false)}>×</button>
                <h3 style={styles.modalTitle}>Complete Your Booking</h3>
                <div style={styles.modalSummary}>
                  <p><strong>{selectedService}</strong></p>
                  <p>{new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric',
                    year: 'numeric'
                  })} at {formatTime12h(selectedTime)} EST</p>
                </div>
                
                <form onSubmit={handleSubmit} style={styles.form}>
                  <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>First Name *</label>
                      <input
                        style={styles.input}
                        type="text"
                        placeholder="John"
                        value={data.firstName}
                        onChange={(e) => setData((d) => ({ ...d, firstName: e.target.value }))}
                      />
                      {errors.firstName && <p style={styles.error}>{errors.firstName}</p>}
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Last Name *</label>
                      <input
                        style={styles.input}
                        type="text"
                        placeholder="Doe"
                        value={data.lastName}
                        onChange={(e) => setData((d) => ({ ...d, lastName: e.target.value }))}
                      />
                      {errors.lastName && <p style={styles.error}>{errors.lastName}</p>}
                    </div>
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Email *</label>
                    <input
                      style={styles.input}
                      type="email"
                      placeholder="john.doe@example.com"
                      value={data.email}
                      onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
                    />
                    {errors.email && <p style={styles.error}>{errors.email}</p>}
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Phone</label>
                    <input
                      style={styles.input}
                      type="tel"
                      placeholder="(123) 456-7890"
                      value={data.phone}
                      onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Additional Notes</label>
                    <textarea
                      style={{ ...styles.input, ...styles.textarea }}
                      placeholder="Tell us about your needs or any specific topics you'd like to discuss..."
                      rows={4}
                      value={data.notes}
                      onChange={(e) => setData((d) => ({ ...d, notes: e.target.value }))}
                    />
                  </div>

                  <button
                    type="submit"
                    style={styles.submitButton}
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
            <div style={styles.successOverlay}>
              <div style={styles.successCard}>
                <div style={styles.successIcon}>
                  <CheckCircle size={64} color="#10b981" />
                </div>
                <h2 style={styles.successTitle}>Booking Confirmed!</h2>
                <p style={styles.successText}>
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

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #f9fafb 0%, #ffffff 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    padding: '40px 20px',
  },
  wrapper: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '380px 1fr',
    gap: '60px',
  },
  leftPanel: {
    position: 'sticky' as const,
    top: '40px',
    height: 'fit-content',
  },
  logoSection: {
    marginBottom: '24px',
  },
  companyName: {
    fontSize: '13px',
    color: '#6b7280',
    margin: '0 0 4px 0',
    fontWeight: 500,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  },
  pageTitle: {
    fontSize: '32px',
    color: '#111827',
    margin: '0 0 32px 0',
    fontWeight: 700,
    lineHeight: '1.2',
  },
  meetingInfo: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
    marginBottom: '32px',
    padding: '20px',
    background: '#f9fafb',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '15px',
    color: '#374151',
    fontWeight: 500,
  },
  aboutSection: {
    paddingTop: '24px',
    borderTop: '1px solid #e5e7eb',
    marginBottom: '24px',
  },
  aboutTitle: {
    fontSize: '15px',
    color: '#111827',
    margin: '0 0 12px 0',
    fontWeight: 600,
  },
  aboutText: {
    fontSize: '14px',
    color: '#6b7280',
    lineHeight: '1.7',
    margin: 0,
  },
  selectionSummary: {
    background: '#EEF2FF',
    borderRadius: '12px',
    padding: '20px',
    border: '2px solid #4F46E5',
  },
  summaryTitle: {
    fontSize: '14px',
    color: '#4F46E5',
    margin: '0 0 16px 0',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  },
  summaryItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  summaryLabel: {
    fontSize: '14px',
    color: '#6b7280',
    fontWeight: 500,
  },
  summaryValue: {
    fontSize: '14px',
    color: '#111827',
    fontWeight: 600,
  },
  rightPanel: {
    background: 'white',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  stepIndicator: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '40px',
    padding: '0 20px',
  },
  step: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    color: '#9ca3af',
    fontWeight: 500,
  },
  stepActive: {
    color: '#4F46E5',
  },
  stepComplete: {
    color: '#10b981',
  },
  stepLine: {
    flex: 1,
    height: '2px',
    background: '#e5e7eb',
    margin: '0 16px',
  },
  calendarSection: {
    marginBottom: '32px',
  },
  calendarHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '24px',
  },
  monthYear: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#111827',
  },
  navButton: {
    width: '40px',
    height: '40px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    background: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6b7280',
    transition: 'all 0.2s',
  },
  weekdays: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '8px',
    marginBottom: '8px',
  },
  weekday: {
    textAlign: 'center' as const,
    fontSize: '12px',
    fontWeight: 600,
    color: '#6b7280',
    padding: '8px 0',
  },
  daysGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '8px',
  },
  dayButton: {
    aspectRatio: '1',
    border: '2px solid transparent',
    borderRadius: '12px',
    background: '#f9fafb',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: 500,
    color: '#111827',
    transition: 'all 0.2s',
  },
  dayButtonDisabled: {
    color: '#d1d5db',
    cursor: 'not-allowed',
    background: 'transparent',
  },
  dayButtonSelected: {
    background: '#4F46E5',
    color: 'white',
    fontWeight: 700,
    borderColor: '#4F46E5',
  },
  dayButtonToday: {
    borderColor: '#4F46E5',
    fontWeight: 600,
  },
  serviceSection: {
    marginBottom: '32px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#111827',
    marginBottom: '16px',
  },
  serviceDropdown: {
    width: '100%',
    padding: '14px 16px',
    border: '2px solid #e5e7eb',
    borderRadius: '10px',
    fontSize: '15px',
    color: '#111827',
    background: 'white',
    cursor: 'pointer',
    fontWeight: 500,
    transition: 'all 0.2s',
  },
  timeSlotsSection: {
    marginTop: '32px',
  },
  timeZoneNote: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    color: '#6b7280',
    marginBottom: '16px',
  },
  timeSlots: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: '12px',
  },
  timeSlot: {
    padding: '14px',
    border: '2px solid #e5e7eb',
    borderRadius: '10px',
    background: 'white',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 600,
    color: '#374151',
    transition: 'all 0.2s',
  },
  timeSlotDisabled: {
    opacity: 0.3,
    cursor: 'not-allowed',
  },
  timeSlotSelected: {
    borderColor: '#4F46E5',
    background: '#EEF2FF',
    color: '#4F46E5',
  },
  modal: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px',
  },
  modalContent: {
    background: 'white',
    borderRadius: '16px',
    padding: '40px',
    maxWidth: '550px',
    width: '100%',
    maxHeight: '90vh',
    overflow: 'auto',
    position: 'relative' as const,
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
  },
  closeButton: {
    position: 'absolute' as const,
    top: '20px',
    right: '20px',
    background: 'none',
    border: 'none',
    fontSize: '32px',
    color: '#9ca3af',
    cursor: 'pointer',
    lineHeight: 1,
    width: '32px',
    height: '32px',
  },
  modalTitle: {
    fontSize: '24px',
    color: '#111827',
    margin: '0 0 8px 0',
    fontWeight: 700,
  },
  modalSummary: {
    background: '#f9fafb',
    borderRadius: '10px',
    padding: '16px',
    marginBottom: '24px',
    borderLeft: '4px solid #4F46E5',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  label: {
    fontSize: '14px',
    color: '#374151',
    marginBottom: '8px',
    fontWeight: 600,
  },
  input: {
    padding: '12px 16px',
    border: '2px solid #e5e7eb',
    borderRadius: '10px',
    fontSize: '15px',
    color: '#111827',
    outline: 'none',
    transition: 'all 0.2s',
  },
  textarea: {
    resize: 'vertical' as const,
    fontFamily: 'inherit',
    minHeight: '100px',
  },
  submitButton: {
    padding: '16px 32px',
    background: '#4F46E5',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: '8px',
    transition: 'all 0.2s',
  },
  error: {
    color: '#ef4444',
    fontSize: '13px',
    marginTop: '6px',
    fontWeight: 500,
  },
  successOverlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1001,
  },
  successCard: {
    background: 'white',
    borderRadius: '20px',
    padding: '48px',
    maxWidth: '500px',
    textAlign: 'center' as const,
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
  },
  successIcon: {
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'center',
  },
  successTitle: {
    fontSize: '28px',
    color: '#111827',
    margin: '0 0 16px 0',
    fontWeight: 700,
  },
  successText: {
    fontSize: '16px',
    color: '#6b7280',
    lineHeight: '1.6',
    margin: 0,
  },
};

export default BookingFlowCalendar;
'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone, 
  FileText, 
  Sparkles, 
  MapPin, 
  AlertCircle,
  Smile
} from 'lucide-react';
import { DOCTOR_INFO, CLINIC_SERVICES } from '@/lib/data';

function BookingForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: preselectedService || CLINIC_SERVICES[0].title,
    preferredDate: '',
    preferredTime: '10:00 AM',
    isFirstVisit: true,
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [dateWarning, setDateWarning] = useState('');

  // Update service if query param changes
  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  // Set minimum date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
  ];

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.value;
    setFormData(prev => ({ ...prev, preferredDate: selected }));

    if (selected) {
      const dateObj = new Date(selected);
      const day = dateObj.getDay(); // 3 is Wednesday
      setDateWarning(
        day === 3
          ? 'Note: The clinic is closed every Wednesday. Please select another date for your appointment.'
          : ''
      );
    } else {
      setDateWarning('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit booking request.');
      }

      setConfirmationCode(data.appointmentId || 'SDH-' + Math.floor(100000 + Math.random() * 900000));
      setSubmitSuccess(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong. Please call us directly at 09067915425.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="max-w-2xl mx-auto rounded-3xl bg-white border border-slate-100 p-8 sm:p-12 text-center space-y-6 shadow-chic">
        <div className="w-16 h-16 rounded-full bg-[#ecfeff] border border-[#a5f3fc] mx-auto flex items-center justify-center text-[#06b6d4]">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#0891b2] font-bold">
            Appointment Request Submitted
          </span>
          <h2 className="text-3xl font-extrabold text-black">
            Hello po, {formData.fullName}!
          </h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Your consultation request with <strong className="text-black">Dr. Jowela Elaine E. Roxas, DMD</strong> (Denteetha) has been safely received.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#f8fcff] border border-cyan-100 text-left text-xs sm:text-sm space-y-2.5 max-w-md mx-auto shadow-sm">
          <div className="flex justify-between py-1 border-b border-slate-100">
            <span className="text-slate-500">Reference ID:</span>
            <span className="font-mono font-bold text-[#0891b2]">{confirmationCode}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-100">
            <span className="text-slate-500">Service:</span>
            <span className="font-semibold text-black">{formData.service}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-100">
            <span className="text-slate-500">Preferred Date & Time:</span>
            <span className="font-semibold text-black">{formData.preferredDate} at {formData.preferredTime}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-100">
            <span className="text-slate-500">Location:</span>
            <span className="font-semibold text-black">147 Malipampang, San Ildefonso</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-slate-500">Contact Number:</span>
            <span className="font-semibold text-black">{formData.phone}</span>
          </div>
        </div>

        <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
          Our clinic receptionist at <strong className="text-black font-semibold">Smiles Dental Hub</strong> will call or send an SMS to your mobile phone shortly to finalize your schedule.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`tel:${DOCTOR_INFO.contacts.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-chic transition-all"
          >
            <Phone className="w-4 h-4 text-[#06b6d4]" />
            <span>Call Clinic: {DOCTOR_INFO.contacts.phone}</span>
          </a>
          <button
            onClick={() => {
              setSubmitSuccess(false);
              setFormData({
                fullName: '',
                email: '',
                phone: '',
                service: CLINIC_SERVICES[0].title,
                preferredDate: '',
                preferredTime: '10:00 AM',
                isFirstVisit: true,
                notes: '',
              });
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-white text-slate-700 hover:text-black border border-slate-200 text-xs font-semibold transition-all shadow-sm"
          >
            Book Another Visit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Left Column: Interactive Booking Form */}
      <div className="lg:col-span-7">
        <div className="chic-card rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-1 pb-4 border-b border-slate-100">
            <h2 className="text-2xl font-black text-black">
              Reserve Your Dental Appointment
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Fill in your details below. Slots are confirmed based on chairside availability.
            </p>
          </div>

          {errorMessage && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#06b6d4]" />
                <span>Patient Full Name *</span>
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Maria Santos"
                className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-200 text-black placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4] text-sm transition-all shadow-sm"
              />
            </div>

            {/* Email & Phone grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#06b6d4]" />
                  <span>Mobile Phone Number *</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="0917-xxx-xxxx"
                  className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-200 text-black placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4] text-sm transition-all shadow-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#06b6d4]" />
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="patient@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-200 text-black placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4] text-sm transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Smile className="w-3.5 h-3.5 text-[#06b6d4]" />
                <span>Select Service or Treatment *</span>
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-200 text-black focus:outline-none focus:bg-white focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4] text-sm transition-all shadow-sm"
              >
                {CLINIC_SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title} ({s.category})
                  </option>
                ))}
                <option value="General Checkup & Consultation">General Dental Checkup & Consultation</option>
                <option value="Emergency Toothache Care">Emergency Dental Pain Relief</option>
              </select>
            </div>

            {/* Date & Time Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#06b6d4]" />
                  <span>Preferred Date *</span>
                </label>
                <input
                  type="date"
                  required
                  min={minDateString}
                  value={formData.preferredDate}
                  onChange={handleDateChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-200 text-black focus:outline-none focus:bg-white focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4] text-sm transition-all shadow-sm [color-scheme:light]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#06b6d4]" />
                  <span>Preferred Time Slot *</span>
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-200 text-black focus:outline-none focus:bg-white focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4] text-sm transition-all shadow-sm"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {dateWarning && (
              <div className="p-3.5 rounded-2xl bg-[#ecfeff] border border-[#67e8f9] text-xs text-[#0e7490] flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#06b6d4] shrink-0 mt-0.5" />
                <span>{dateWarning}</span>
              </div>
            )}

            {/* Patient Type Buttons */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                Have you visited Dr. Ella Roxas before?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, isFirstVisit: true })}
                  className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                    formData.isFirstVisit
                      ? 'bg-black text-white border-black shadow-sm'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-black'
                  }`}
                >
                  Yes, New Patient
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, isFirstVisit: false })}
                  className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                    !formData.isFirstVisit
                      ? 'bg-black text-white border-black shadow-sm'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-black'
                  }`}
                >
                  Returning Patient
                </button>
              </div>
            </div>

            {/* Notes / Chief Complaint */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#06b6d4]" />
                <span>Tell Us About Your Concern (Optional)</span>
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention any symptoms, teeth sensitivity, previous dental experiences, or specific smile makeover goals..."
                className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-200 text-black placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4] text-sm transition-all resize-none shadow-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-full bg-black hover:bg-[#18181b] text-white font-black text-sm uppercase tracking-wider shadow-chic hover:shadow-chic-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Transmitting Booking Request...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4 text-[#06b6d4]" />
                    <span>Confirm & Book Appointment</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-slate-500 text-center">
              By submitting, your request is safely stored in the Smiles Dental Hub system and Dr. Ella Roxas&apos;s email. We respect your medical privacy.
            </p>
          </form>
        </div>
      </div>

      {/* Right Column: Doctor & Clinic Summary Card */}
      <div className="lg:col-span-5 space-y-6">
        <div className="chic-card rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#ecfeff] border border-[#a5f3fc] flex items-center justify-center text-[#06b6d4]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-black text-base">Dr. Jowela Elaine E. Roxas, DMD</h3>
              <p className="text-xs text-[#0891b2] font-semibold">CEO of Hello po! • Denteetha</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#f8fcff] border border-slate-100 space-y-3 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#06b6d4] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-black">Clinic Location</p>
                <p className="text-slate-600">147 Malipampang, San Ildefonso, Bulacan, Philippines</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#06b6d4] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-black">Regular Clinic Days</p>
                <p className="text-[#0891b2] font-semibold">Daily except Wednesday (9 AM - 6 PM)</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#06b6d4] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-black">Mobile Hotline</p>
                <a href={`tel:${DOCTOR_INFO.contacts.phone}`} className="text-black font-bold hover:text-[#06b6d4]">
                  {DOCTOR_INFO.contacts.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Why Patients Love Smiles Dental Hub:
            </h4>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#06b6d4] shrink-0" />
                <span>Zero dental judgment or fear</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#06b6d4] shrink-0" />
                <span>Hospital-grade autoclave sterilization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#06b6d4] shrink-0" />
                <span>Gentle, pain-managed procedures</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#06b6d4] shrink-0" />
                <span>Transparent fees with zero hidden charges</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#ecfeff] border border-[#a5f3fc] text-center">
            <p className="text-xs text-slate-600 mb-2 font-medium">Need immediate assistance or emergency slot?</p>
            <a
              href={`tel:${DOCTOR_INFO.contacts.phone}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-black hover:text-[#06b6d4] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#06b6d4]" />
              <span>Tap to call 09067915425 directly</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <div className="space-y-16 pb-24 bg-white">
      {/* Header Banner */}
      <section className="relative pt-16 sm:pt-20 pb-12 overflow-hidden border-b border-slate-100 bg-[#fbfdfd]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#a5f3fc]/40 blur-[130px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ecfeff] border border-[#67e8f9] text-xs font-semibold text-[#0e7490]">
            <Calendar className="w-3.5 h-3.5 text-[#06b6d4]" />
            <span>Online Appointment Reservation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
            Book Your <span className="cyan-gradient-text">Visit</span>
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            Schedule your appointment with Dr. Jowela Elaine E. Roxas, DMD. Experience gentle, chic, and state-of-the-art dental care at Smiles Dental Hub.
          </p>
        </div>
      </section>

      {/* Main Content with Suspense */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={
          <div className="text-center py-20 text-[#06b6d4]">
            <div className="w-8 h-8 border-2 border-[#06b6d4] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm">Loading appointment form...</p>
          </div>
        }>
          <BookingForm />
        </Suspense>
      </section>
    </div>
  );
}

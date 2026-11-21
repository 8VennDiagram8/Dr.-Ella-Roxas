'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Clock, 
  MapPin, 
  Calendar, 
  Phone, 
  Mail, 
  Car, 
  Navigation, 
  Sparkles, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import BookingButton from '@/components/BookingButton';
import { DOCTOR_INFO } from '@/lib/data';

export default function ScheduleAndClinicsPage() {
  const scheduleDays = [
    { day: "Monday", hours: "9:00 AM – 6:00 PM", status: "Open Clinic Hours", active: true },
    { day: "Tuesday", hours: "9:00 AM – 6:00 PM", status: "Open Clinic Hours", active: true },
    { day: "Wednesday", hours: "Closed", status: "Clinic Closed", active: false },
    { day: "Thursday", hours: "9:00 AM – 6:00 PM", status: "Open Clinic Hours", active: true },
    { day: "Friday", hours: "9:00 AM – 6:00 PM", status: "Open Clinic Hours", active: true },
    { day: "Saturday", hours: "9:00 AM – 6:00 PM", status: "Open Clinic Hours", active: true },
    { day: "Sunday", hours: "9:00 AM – 6:00 PM", status: "Open Clinic Hours", active: true },
  ];

  const directions = [
    {
      mode: "From Plaridel / Pulilan / Baliuag",
      route: "Take Pan-Philippine Highway (AH26) northward towards San Ildefonso. Upon reaching Malipampang, look for Smiles Dental Hub at #147 along the main commercial strip.",
      icon: Car
    },
    {
      mode: "From San Miguel / Gapan / Nueva Ecija",
      route: "Travel south along AH26 through San Ildefonso poblacion. Continue straight towards Malipampang.",
      icon: Navigation
    },
    {
      mode: "Public Transport (Jeepney / Bus)",
      route: "Board any jeepney or bus bound for San Miguel, Cabanatuan, or Baliuag passing via Malipampang highway. Request the conductor to drop you off at 147 Malipampang near Smiles Dental Hub.",
      icon: MapPin
    }
  ];

  return (
    <div className="space-y-20 pb-24 bg-white">
      {/* Header Header */}
      <section className="relative pt-16 sm:pt-20 pb-12 overflow-hidden border-b border-slate-100 bg-[#fbfdfd]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#a5f3fc]/40 blur-[130px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ecfeff] border border-[#67e8f9] text-xs font-semibold text-[#0e7490]">
            <Clock className="w-3.5 h-3.5 text-[#06b6d4]" />
            <span>Clinic Timings & Location</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
            Schedule & <span className="cyan-gradient-text">Clinics</span>
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            Visit Smiles Dental Hub at 147 Malipampang, San Ildefonso, Bulacan. We are ready to make your dental visit seamless, chic, and comforting.
          </p>

          <div className="pt-2 flex justify-center">
            <BookingButton variant="chic-black" size="md" />
          </div>
        </div>
      </section>

      {/* Main Schedule & Location Two-Column Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Weekly Operating Hours */}
          <div className="lg:col-span-6 space-y-6">
            <div className="chic-card rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-bold text-black flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#06b6d4]" />
                    Weekly Clinic Hours
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Regular chairside consultation hours with Dr. Ella Roxas
                  </p>
                </div>
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#ecfeff] text-[#0e7490] border border-[#a5f3fc]">
                  Daily except Wed
                </span>
              </div>

              {/* Day-by-Day List */}
              <div className="space-y-3">
                {scheduleDays.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-all ${
                      item.active
                        ? 'bg-[#ecfeff] border-[#67e8f9] text-black shadow-sm'
                        : 'bg-white border-slate-100 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-2.5 h-2.5 rounded-full ${item.active ? 'bg-[#06b6d4] animate-pulse' : 'bg-slate-300'}`} />
                      <div>
                        <p className={`font-bold text-sm ${item.active ? 'text-black' : 'text-slate-500'}`}>
                          {item.day}
                        </p>
                        <p className="text-xs text-slate-500">{item.status}</p>
                      </div>
                    </div>
                    <div className="text-right sm:text-right">
                      <span className={`text-xs font-semibold ${item.active ? 'text-[#0891b2]' : 'text-slate-400'}`}>
                        {item.hours}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Advisory note */}
              <div className="p-4 rounded-2xl bg-[#f8fcff] border border-cyan-100 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#06b6d4] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600 leading-relaxed">
                  <p className="font-semibold text-black mb-0.5">Special Appointments & Emergencies</p>
                  <p>
                    The clinic is closed every Wednesday. For urgent concerns, please contact us to arrange the next available appointment.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <BookingButton variant="chic-black" size="md" className="w-full" />
              </div>
            </div>
          </div>

          {/* Right Column: Location, Map & Directions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="chic-card rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-bold text-black flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#06b6d4]" />
                    Smiles Dental Hub
                  </h2>
                  <p className="text-xs text-[#0891b2] font-semibold mt-0.5">
                    147 Malipampang, San Ildefonso, Bulacan, Philippines
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=147+Malipampang+San+Ildefonso+Bulacan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-black text-white hover:bg-[#18181b] text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#06b6d4]" />
                </a>
              </div>

              {/* Interactive Visual Map Card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-100 bg-[#f8fcff] p-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#ecfeff] border border-[#a5f3fc] mx-auto flex items-center justify-center text-[#06b6d4]">
                  <MapPin className="w-7 h-7 animate-bounce" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">Central Malipampang Location</h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                    Conveniently situated along the main commercial strip of San Ildefonso, Bulacan, easily accessible by car or public transport.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-100 text-left text-xs space-y-2 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Barangay:</span>
                    <span className="text-black font-semibold">Malipampang</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Municipality:</span>
                    <span className="text-black font-semibold">San Ildefonso</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Province:</span>
                    <span className="text-[#0891b2] font-bold">Bulacan, Philippines</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Unit Number:</span>
                    <span className="text-black font-semibold">#147</span>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=147+Malipampang+San+Ildefonso+Bulacan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white hover:bg-[#ecfeff] text-black text-xs font-bold border border-slate-200 hover:border-[#67e8f9] transition-all shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#06b6d4]" />
                  <span>Get Turn-by-Turn GPS Directions</span>
                </a>
              </div>

              {/* Commute & Driving Guide */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  How to Get Here:
                </h4>
                {directions.map((dir, dIdx) => {
                  const Icon = dir.icon;
                  return (
                    <div key={dIdx} className="p-3.5 rounded-2xl bg-white border border-slate-100 space-y-1 shadow-sm">
                      <div className="flex items-center gap-2 text-xs font-bold text-black">
                        <Icon className="w-3.5 h-3.5 text-[#06b6d4]" />
                        <span>{dir.mode}</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed pl-5">
                        {dir.route}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Direct Contact Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="chic-card rounded-3xl p-8 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ecfeff] border border-[#a5f3fc] flex items-center justify-center text-[#06b6d4] shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Mobile Hotline</p>
                <a href={`tel:${DOCTOR_INFO.contacts.phone}`} className="text-base font-bold text-black hover:text-[#06b6d4] transition-colors">
                  {DOCTOR_INFO.contacts.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ecfeff] border border-[#a5f3fc] flex items-center justify-center text-[#06b6d4] shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Clinic Email</p>
                <a href={`mailto:${DOCTOR_INFO.contacts.clinicEmail}`} className="text-xs sm:text-sm font-semibold text-black hover:text-[#06b6d4] break-all transition-colors">
                  {DOCTOR_INFO.contacts.clinicEmail}
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-end">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black hover:bg-[#18181b] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-chic transition-all"
              >
                <Calendar className="w-4 h-4 text-[#06b6d4]" />
                <span>Book This Week&apos;s Slot</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

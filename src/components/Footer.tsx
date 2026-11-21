import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { DOCTOR_INFO } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-[#fafcfc] border-t border-slate-100 text-slate-600 pt-16 pb-12 relative overflow-hidden">
      {/* Soft chic ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-[#06b6d4]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-200/80">
          
          {/* Column 1: Brand & Doctor Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-100 shadow-sm">
                <Image
                  src="/images/SDH%20Logo.jpg"
                  alt="Smiles Dental Hub logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-black text-lg">Smiles Dental Hub</h3>
                <p className="text-xs text-[#0891b2] font-semibold">Dr. Jowela Elaine E. Roxas, DMD</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 italic">
              &ldquo;{DOCTOR_INFO.tagline}&rdquo;
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#ecfeff] text-[#0e7490] border border-[#a5f3fc] text-xs font-semibold">
                <Sparkles className="w-3 h-3 text-[#06b6d4]" />
                AKA Denteetha
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black text-white text-xs font-semibold">
                CEO of Hello po!
              </span>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Boutique, compassionate, and chic dental medicine in San Ildefonso, Bulacan. Providing lifelong smiles for children, teens, and adults.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-black font-bold text-xs uppercase tracking-widest text-[#0891b2]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-black transition-colors flex items-center gap-2">
                  <span>Home & Philosophy</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-black transition-colors flex items-center gap-2">
                  <span>Dental Treatments & Specialties</span>
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-black transition-colors flex items-center gap-2">
                  <span>Clinic Schedule & Directions</span>
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-[#0891b2] transition-colors flex items-center gap-2 font-semibold text-black">
                  <span>Online Appointment Reservation</span>
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white hover:bg-[#18181b] transition-all text-xs font-bold shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-[#06b6d4]" />
                Reserve Slot
              </Link>
            </div>
          </div>

          {/* Column 3: Hours & Contact */}
          <div className="space-y-4">
            <h4 className="text-black font-bold text-xs uppercase tracking-widest text-[#0891b2]">
              Clinic Hours & Visit
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#06b6d4] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-black">Chairside Schedule:</p>
                  <p className="text-xs text-slate-600">Daily except Wednesday</p>
                  <p className="text-xs text-[#0891b2] font-bold">9:00 AM – 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#06b6d4] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-black">Location:</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    147 Malipampang, San Ildefonso, Bulacan, Philippines
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#06b6d4] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-black">Hotline:</p>
                  <a href={`tel:${DOCTOR_INFO.contacts.phone}`} className="text-xs text-black font-bold hover:text-[#06b6d4]">
                    {DOCTOR_INFO.contacts.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#06b6d4] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-black">Emails:</p>
                  <a href={`mailto:${DOCTOR_INFO.contacts.clinicEmail}`} className="text-xs text-slate-600 block hover:text-black">
                    {DOCTOR_INFO.contacts.clinicEmail}
                  </a>
                  <a href={`mailto:${DOCTOR_INFO.contacts.email}`} className="text-xs text-slate-500 block hover:text-black">
                    {DOCTOR_INFO.contacts.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Social Connect */}
          <div className="space-y-4">
            <h4 className="text-black font-bold text-xs uppercase tracking-widest text-[#0891b2]">
              Connect With Dr. Ella
            </h4>
            <p className="text-xs text-slate-500">
              Follow Dr. Ella Roxas (Denteetha) for aesthetic smile transformations, oral hygiene tips, and daily clinic vibes:
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={DOCTOR_INFO.contacts.facebookDoctor}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 p-2 rounded-xl bg-white hover:bg-[#ecfeff] border border-slate-200 text-slate-700 hover:text-black transition-all shadow-sm"
              >
                <span>Dr. Ella FB</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-40" />
              </a>
              <a
                href={DOCTOR_INFO.contacts.facebookClinic}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 p-2 rounded-xl bg-white hover:bg-[#ecfeff] border border-slate-200 text-slate-700 hover:text-black transition-all shadow-sm"
              >
                <span>Clinic FB</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-40" />
              </a>
              <a
                href={DOCTOR_INFO.contacts.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 p-2 rounded-xl bg-white hover:bg-[#ecfeff] border border-slate-200 text-slate-700 hover:text-black transition-all shadow-sm"
              >
                <span>TikTok</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-40" />
              </a>
              <a
                href={DOCTOR_INFO.contacts.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 p-2 rounded-xl bg-white hover:bg-[#ecfeff] border border-slate-200 text-slate-700 hover:text-black transition-all shadow-sm"
              >
                <span>YouTube</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-40" />
              </a>
              <a
                href={DOCTOR_INFO.contacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 flex items-center gap-1.5 p-2 rounded-xl bg-white hover:bg-[#ecfeff] border border-slate-200 text-slate-700 hover:text-black transition-all shadow-sm"
              >
                <span>Instagram (@ellaroxasdmd)</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-40" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Smiles Dental Hub. Dr. Jowela Elaine E. Roxas, DMD. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-600 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#06b6d4]" />
              Licensed Dental Healthcare Facility
            </span>
            <span>San Ildefonso, Bulacan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Phone,
  MapPin,
  Calendar,
  Clock,
  Menu,
  X,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { DOCTOR_INFO } from '@/lib/data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Schedule & Clinics', href: '/schedule' },
    { name: 'Book Appointment', href: '/booking' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Main Clean Floating Navbar (Top bar removed per user request) */}
      <nav
        className={`w-full transition-all duration-300 px-4 sm:px-6 lg:px-8 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_1px_4px_rgba(0,0,0,0.04)] py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100/70 py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Doctor Identity */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-slate-100 shadow-sm group-hover:shadow transition-all duration-300">
              <Image
                src="/images/SDH%20Logo.jpg"
                alt="Smiles Dental Hub logo"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-black group-hover:text-[#06b6d4] transition-colors">
                  Smiles Dental Hub
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium tracking-wide">
                Dr. Jowela Elaine E. Roxas, DMD
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isBooking = link.href === '/booking';

              if (isBooking) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="ml-3 group relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs uppercase font-bold tracking-wider bg-black hover:bg-[#18181b] text-white shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#06b6d4] group-hover:rotate-12 transition-transform" />
                      Book Visit
                    </span>
                  </Link>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                    ? 'text-black bg-[#ecfeff] border border-[#cffafe] font-semibold'
                    : 'text-slate-600 hover:text-black hover:bg-slate-50'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/booking"
              className="px-3.5 py-1.5 rounded-full bg-black text-white font-bold text-xs flex items-center gap-1 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#06b6d4]" />
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-black hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-100 px-3 space-y-2 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-sm animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isBooking = link.href === '/booking';

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${isBooking
                    ? 'bg-black text-white font-bold shadow-sm'
                    : isActive
                      ? 'bg-[#ecfeff] text-black font-semibold border border-[#cffafe]'
                      : 'text-slate-700 hover:bg-slate-50'
                    }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}

            <div className="pt-3 border-t border-slate-100 px-3 space-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#06b6d4]" />
                <span>147 Malipampang, San Ildefonso, Bulacan</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#06b6d4]" />
                <span>Daily except Wed: 9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-black font-semibold">
                <Phone className="w-4 h-4 text-[#06b6d4]" />
                <a href={`tel:${DOCTOR_INFO.contacts.phone}`} className="hover:underline">
                  Hotline: {DOCTOR_INFO.contacts.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

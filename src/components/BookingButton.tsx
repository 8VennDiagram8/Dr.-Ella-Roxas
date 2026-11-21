import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface BookingButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'chic-black';
  size?: 'sm' | 'md' | 'lg';
  service?: string;
  className?: string;
}

export default function BookingButton({
  variant = 'primary',
  size = 'md',
  service,
  className = '',
}: BookingButtonProps) {
  const url = service ? `/booking?service=${encodeURIComponent(service)}` : '/booking';

  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs rounded-full gap-1.5 font-medium',
    md: 'px-5 py-2.5 text-sm rounded-full gap-2 font-semibold',
    lg: 'px-7 py-3.5 text-base rounded-full gap-2.5 font-bold tracking-tight',
  };

  if (variant === 'chic-black') {
    return (
      <Link
        href={url}
        className={`group inline-flex items-center justify-center bg-black hover:bg-[#18181b] text-white transition-all duration-300 shadow-chic hover:shadow-chic-lg hover:-translate-y-0.5 active:translate-y-0 ${sizeClasses[size]} ${className}`}
      >
        <Sparkles className="w-4 h-4 text-[#06b6d4] group-hover:rotate-12 transition-transform duration-300" />
        <span>Book Appointment</span>
        <ArrowRight className="w-4 h-4 ml-0.5 text-[#06b6d4] group-hover:translate-x-1 transition-transform" />
      </Link>
    );
  }

  if (variant === 'outline') {
    return (
      <Link
        href={url}
        className={`group inline-flex items-center justify-center bg-white hover:bg-[#ecfeff] border border-[#06b6d4]/40 hover:border-[#06b6d4] text-slate-800 hover:text-[#0891b2] transition-all duration-300 shadow-sm hover:shadow-chic-sm ${sizeClasses[size]} ${className}`}
      >
        <Calendar className="w-4 h-4 text-[#06b6d4]" />
        <span>Book Consultation</span>
        <ArrowRight className="w-4 h-4 ml-0.5 opacity-60 group-hover:translate-x-1 transition-transform" />
      </Link>
    );
  }

  if (variant === 'secondary') {
    return (
      <Link
        href={url}
        className={`inline-flex items-center justify-center bg-[#ecfeff] text-[#0891b2] hover:bg-[#a5f3fc] border border-[#67e8f9] transition-all duration-300 ${sizeClasses[size]} ${className}`}
      >
        <Calendar className="w-4 h-4 text-[#06b6d4]" />
        <span>Schedule Visit</span>
      </Link>
    );
  }

  // Primary: Chic cyan gradient with black text or crisp white text
  return (
    <Link
      href={url}
      className={`group inline-flex items-center justify-center bg-gradient-to-r from-[#06b6d4] via-[#0891b2] to-[#083344] hover:from-[#22d3ee] hover:via-[#06b6d4] hover:to-[#0891b2] text-white shadow-chic hover:shadow-chic-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ${sizeClasses[size]} ${className}`}
    >
      <Calendar className="w-4 h-4 shrink-0 text-white/90" />
      <span>Book Appointment</span>
      <ArrowRight className="w-4 h-4 shrink-0 text-white/80 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}

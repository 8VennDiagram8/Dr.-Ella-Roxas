'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Clock,
  CheckCircle2,
  HelpCircle,
  Calendar,
  ArrowRight,
  Filter
} from 'lucide-react';
import BookingButton from '@/components/BookingButton';
import { CLINIC_SERVICES, DOCTOR_INFO } from '@/lib/data';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Preventive Care',
    'Smile Alignment',
    'Cosmetic Makeover',
    'Restorative Dentistry',
    'Surgical Care',
    'Family Care',
    'Prosthodontics'
  ];

  const filteredServices = selectedCategory === 'All'
    ? CLINIC_SERVICES
    : CLINIC_SERVICES.filter(s => s.category === selectedCategory);

  const faqs = [
    {
      q: "How often should I get an Oral Prophylaxis (Teeth Cleaning)?",
      a: "Dr. Ella recommends professional teeth cleaning every 6 months to prevent periodontal disease, tartar build-up, and maintain a fresh, dazzling smile. For orthodontic patients, visits every 3 to 4 months are recommended."
    },
    {
      q: "Is wisdom tooth extraction painful at Smiles Dental Hub?",
      a: "Not at all. Dr. Ella utilizes modern local anesthetics and gentle atraumatic techniques. You will feel pressure, but zero sharp pain. We also provide comprehensive aftercare medication and recovery guidelines."
    },
    {
      q: "Can children undergo dental procedures without crying or fear?",
      a: "Yes! As the CEO of 'Hello po!', Dr. Ella specializes in child-friendly dental psychology. We introduce instruments gently ('tell-show-do' method), creating an engaging, fun, and trauma-free dental experience for kids."
    },
    {
      q: "How do I choose between dental veneers and teeth whitening?",
      a: "If your teeth are well-aligned and shaped but naturally stained, professional whitening is ideal. If you also have chips, gaps, or uneven sizes, handcrafted veneers provide the total smile transformation."
    },
    {
      q: "Are walk-in consultations allowed?",
      a: "While we do accommodate walk-ins when chairside schedule permits, we strongly encourage reserving an appointment online or calling 09067915425 in advance to guarantee zero waiting time."
    }
  ];

  return (
    <div className="space-y-20 pb-24 bg-white">
      {/* Page Header Header */}
      <section className="relative pt-16 sm:pt-20 pb-12 overflow-hidden border-b border-slate-100 bg-[#fbfdfd]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#cffafe]/30 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ecfeff] border border-[#a5f3fc] text-xs font-semibold text-[#0e7490]">
            <Sparkles className="w-3.5 h-3.5 text-[#06b6d4]" />
            <span>Boutique Dental Specialties</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
            Our Dental <span className="cyan-gradient-text">Services</span>
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            Every procedure at Smiles Dental Hub is delivered with hospital-grade sterility, gentle precision, and Dr. Ella Roxas&apos;s signature feminine aesthetic touch.
          </p>

          <div className="pt-2 flex justify-center">
            <BookingButton variant="chic-black" size="md" />
          </div>
        </div>
      </section>

      {/* Category Filter & Service Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Pills with Minimal Shadows */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#06b6d4]" />
            <span className="font-semibold text-slate-600">Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shadow-sm ${selectedCategory === cat
                ? 'bg-black text-white shadow'
                : 'bg-white text-slate-600 hover:text-black border border-slate-200 hover:border-[#a5f3fc]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services List Grid with Minimal Shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="chic-card rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#ecfeff] text-[#0e7490] border border-[#cffafe]">
                    {service.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-[#06b6d4]" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-black group-hover:text-[#06b6d4] transition-colors mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#0891b2] font-semibold">
                    {service.tagline}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Procedure Highlights:
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#06b6d4] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 mt-6 flex items-center justify-between">
                <Link
                  href={`/booking?service=${encodeURIComponent(service.title)}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-black hover:bg-[#18181b] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#06b6d4]" />
                  <span>Book {service.title.split(' ')[0]} Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#06b6d4]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Process Walkthrough */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#f8fcff] border border-cyan-100/70 p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#0891b2] font-bold">
              Simple 3-Step Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-black">
              What to Expect at Smiles Dental Hub
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-black text-white font-black flex items-center justify-center text-sm mb-4">
                1
              </span>
              <h3 className="text-base font-bold text-black mb-2">Warm Welcome & Digital Exam</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Experience our signature &ldquo;Hello po!&rdquo; hospitality. Dr. Ella reviews your dental history, conducts gentle intraoral inspection, and listens to your goals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-black text-white font-black flex items-center justify-center text-sm mb-4">
                2
              </span>
              <h3 className="text-base font-bold text-black mb-2">Transparent Personalized Plan</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No surprises. You receive clear visual recommendations, honest options, treatment timeframes, and transparent fee estimates before starting any procedure.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-black text-white font-black flex items-center justify-center text-sm mb-4">
                3
              </span>
              <h3 className="text-base font-bold text-black mb-2">Gentle Treatment & Lifetime Care</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Relax in our ergonomic chair while receiving gentle, precision dentistry with post-care follow-up to safeguard your lifetime smile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#0891b2] font-bold">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need to know about our dental treatments and booking policies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-2 hover:shadow transition-shadow"
            >
              <h3 className="text-base font-bold text-black flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#06b6d4] shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 rounded-3xl bg-[#ecfeff] border border-[#cffafe] shadow-sm">
          <p className="text-black font-bold text-base mb-1">
            Have a specific tooth question or emergency?
          </p>
          <p className="text-xs text-slate-600 mb-4">
            Dr. Ella Roxas and our clinic team are just a phone call away.
          </p>
          <a
            href={`tel:${DOCTOR_INFO.contacts.phone}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all"
          >
            <span>Call Hotline: {DOCTOR_INFO.contacts.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Heart, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Smile, 
  ChevronRight
} from 'lucide-react';
import BookingButton from '@/components/BookingButton';
import { DOCTOR_INFO, CLINIC_SERVICES, TESTIMONIALS, CLINIC_AMENITIES } from '@/lib/data';

export default function HomePage() {
  const featuredServices = CLINIC_SERVICES.slice(0, 4);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24 pb-16 overflow-hidden">
        {/* Soft feminine cyan & mint ambient gradients */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[650px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-[#a5f3fc]/50 via-[#cffafe]/40 to-transparent blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#67e8f9]/20 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading & Doctor Info */}
            <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
              {/* Main Headline */}
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.25em] text-[#0891b2] font-bold">
                  Doctor of Dental Medicine
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                  Dr. Jowela Elaine E. Roxas, <span className="cyan-gradient-text">DMD</span>
                </h1>
                <p className="text-xl sm:text-2xl font-light text-slate-600 italic font-serif">
                  &ldquo;{DOCTOR_INFO.tagline}&rdquo;
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Welcome to <strong className="text-black font-semibold">Smiles Dental Hub</strong> in San Ildefonso, Bulacan. 
                Experience a chic, boutique atmosphere where gentle dentistry, aesthetic perfection, and our signature 
                caring warmth make every dental visit a pleasure.
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-left">
                <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-chic-sm">
                  <div className="flex items-center gap-2 text-[#0891b2] text-xs font-bold mb-1">
                    <Clock className="w-4 h-4 text-[#06b6d4]" />
                    <span>Clinic Days</span>
                  </div>
                  <p className="text-xs text-black font-semibold">Daily except Wed</p>
                  <p className="text-[11px] text-[#0891b2]">9:00 AM – 6:00 PM</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-chic-sm">
                  <div className="flex items-center gap-2 text-[#0891b2] text-xs font-bold mb-1">
                    <MapPin className="w-4 h-4 text-[#06b6d4]" />
                    <span>Location</span>
                  </div>
                  <p className="text-xs text-black font-semibold">147 Malipampang</p>
                  <p className="text-[11px] text-slate-500">San Ildefonso, Bulacan</p>
                </div>

                <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-white border border-slate-100 shadow-chic-sm">
                  <div className="flex items-center gap-2 text-[#0891b2] text-xs font-bold mb-1">
                    <Phone className="w-4 h-4 text-[#06b6d4]" />
                    <span>Direct Hotline</span>
                  </div>
                  <p className="text-xs text-black font-bold">{DOCTOR_INFO.contacts.phone}</p>
                  <p className="text-[11px] text-slate-500">SMS / Call / Viber</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <BookingButton variant="chic-black" size="lg" className="w-full sm:w-auto" />
                
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white hover:bg-[#ecfeff] text-slate-800 hover:text-[#0891b2] border border-slate-200 hover:border-[#67e8f9] font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-chic-sm"
                >
                  Explore Dental Services
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 pt-1 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#06b6d4]" />
                  Accepting New Patients
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#06b6d4]" />
                  Zero-Anxiety Gentle Care
                </span>
              </div>
            </div>

            {/* Right Column: Chic Doctor Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                {/* Soft glow background */}
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#67e8f9]/40 via-[#a5f3fc]/20 to-transparent blur-xl opacity-75" />

                <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-chic">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/images/Dr.Ella.jpg"
                      alt="Dr. Jowela Elaine E. Roxas, DMD"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 448px"
                      className="object-cover object-top"
                    />

                    {/* Gradient overlay for name card legibility */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                    {/* Name card */}
                    <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 shadow-lg">
                      <div>
                        <h3 className="font-bold text-white text-base leading-tight">
                          Dr. Jowela Elaine E. Roxas
                        </h3>
                        <p className="text-xs text-[#67e8f9] font-semibold">
                          DMD • CEO of Hello po!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Signature Dental Services */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#0891b2] font-bold">
                Specialized Care
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
                Signature Dental Treatments
              </h2>
              <p className="text-slate-600 max-w-xl text-base">
                From preventive oral prophylaxis to complete aesthetic smile makeovers and gentle orthodontics.
              </p>
            </div>
            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#06b6d4] transition-colors group"
              >
                <span>View All 9 Specialties</span>
                <ChevronRight className="w-4 h-4 text-[#06b6d4] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="chic-card rounded-3xl p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#ecfeff] text-[#0e7490] border border-[#a5f3fc]">
                      {service.category}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#06b6d4]" />
                      {service.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-black group-hover:text-[#06b6d4] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 pt-2">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="text-xs text-slate-700 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#06b6d4] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <Link
                    href={`/booking?service=${encodeURIComponent(service.title)}`}
                    className="text-xs font-bold text-black hover:text-[#06b6d4] flex items-center gap-1 transition-colors"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3 h-3 text-[#06b6d4]" />
                  </Link>
                  <Link
                    href="/services"
                    className="text-xs text-slate-400 hover:text-black transition-colors"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Doctor & "Hello po!" Philosophy */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#f8fcff] via-white to-[#ecfeff] border border-cyan-100/80 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-chic">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-12 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#cffafe] border border-[#67e8f9] text-xs font-semibold text-[#0e7490]">
                  <Sparkles className="w-3.5 h-3.5 text-[#06b6d4]" />
                  <span>The Face of Smiles Dental Hub</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
                  Meet Dr. Jowela Elaine E. Roxas, DMD
                </h2>

                <p className="text-base text-slate-600 leading-relaxed">
                  Known fondly to hundreds of patients as <strong className="text-black">Denteetha</strong>, 
                  Dr. Ella Roxas combines clinical precision with genuine feminine warmth. As the CEO of <strong className="text-black">&ldquo;Hello po!&rdquo;</strong>, 
                  she champions a boutique atmosphere that eliminates dental phobia through empathy, crystal-clear explanation, 
                  and gentle pain-free techniques.
                </p>

                <p className="text-base text-slate-600 leading-relaxed">
                  Whether caring for a first-time toddler or crafting a transformative aesthetic veneer smile makeover 
                  for young professionals, Dr. Ella ensures every patient feels listened to, respected, and radiant.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-[#ecfeff] border border-[#a5f3fc] flex items-center justify-center text-[#06b6d4]">
                      <Smile className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-black">Zero Dental Anxiety</p>
                      <p className="text-xs text-slate-500">Gentle touch & friendly environment</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-[#ecfeff] border border-[#a5f3fc] flex items-center justify-center text-[#06b6d4]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-black">Patient-First Ethics</p>
                      <p className="text-xs text-slate-500">Conservative, honest treatment plans</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <BookingButton variant="chic-black" size="md" />
                  <Link
                    href="/schedule"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-800 hover:text-black border border-slate-200 text-sm font-semibold transition-all shadow-sm"
                  >
                    <MapPin className="w-4 h-4 text-[#06b6d4]" />
                    Find Clinic in San Ildefonso
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Clinic Amenities & Standards */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#0891b2] font-bold">
              Facility & Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
              A Clinic Designed for Comfort & Safety
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Step into a spotless, tranquil aesthetic dental clinic equipped with modern technology and sterile cleanliness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLINIC_AMENITIES.map((amenity, idx) => (
              <div
                key={idx}
                className="chic-card p-6 rounded-3xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#ecfeff] border border-[#a5f3fc] flex items-center justify-center text-[#06b6d4] mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-black mb-2">{amenity.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Reviews / Testimonials */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#0891b2] font-bold">
              Patient Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
              Real Smiles, Real Confidence
            </h2>
            <p className="text-slate-600 text-sm">
              See what Bulacan patients love about their experience with Dr. Ella Roxas (Denteetha).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testi, idx) => (
              <div
                key={idx}
                className="chic-card p-7 rounded-3xl flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#06b6d4]">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#06b6d4]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;{testi.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-black">{testi.name}</h4>
                    <p className="text-[11px] text-slate-500">{testi.role}</p>
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#ecfeff] text-[#0e7490] border border-[#a5f3fc]">
                    {testi.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-black text-white p-8 sm:p-14 text-center relative overflow-hidden shadow-chic-lg">
            {/* Subtle cyan glow orb inside black card */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#06b6d4]/20 blur-[100px] pointer-events-none rounded-full" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#06b6d4]/15 blur-[100px] pointer-events-none rounded-full" />

            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <span className="text-xs uppercase tracking-widest text-[#22d3ee] font-bold">
                Lifetime Smile Guarantee
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Ready to Experience Chic, World-Class Dentistry?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Book your appointment today with <strong className="text-white">Dr. Jowela Elaine E. Roxas, DMD</strong>. 
                Appointments are available daily except Wednesday.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <BookingButton size="lg" className="w-full sm:w-auto" />
                <a
                  href={`tel:${DOCTOR_INFO.contacts.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-[#22d3ee]" />
                  <span>Call {DOCTOR_INFO.contacts.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

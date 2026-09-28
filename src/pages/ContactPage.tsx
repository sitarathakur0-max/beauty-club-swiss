import React from 'react';
import { Phone, MapPin, Sparkles, Navigation, Clock, ShieldCheck, Star } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';
import { ConsultationForm } from '../components/ConsultationForm';
import { RatingBadge } from '../components/RatingBadge';

export const ContactPage: React.FC = () => {
  return (
    <div id="contact-page-container" className="py-12 md:py-20 bg-[#FAF7F2] space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0A1931] text-[#E8DCC4] text-[11px] uppercase tracking-[0.25em] font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Salon Location & Telephone Inquiries</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#0A1931] font-normal tracking-tight">
            Contact Beauty Club Swiss
          </h1>
          <div className="w-20 h-[2px] bg-[#C2AA80]" />
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
            Reach out to our beauty salon in Zürich to discuss personal-care treatments, request a consultation, or arrange your visit to Leonhardstrasse 4.
          </p>
        </div>
      </section>

      {/* Primary Contact Cards & Address */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Telephone */}
          <div className="p-8 bg-[#F4EDE2] border border-[#D9C7A7] space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#0A1931] text-[#E8DCC4] flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#8E5B5B] font-semibold block">
              Direct Telephone
            </span>
            <h3 className="font-serif text-2xl text-[#0A1931]">
              <a
                href={`tel:${SALON_DATA.phoneRaw}`}
                id="contact-page-tel-link"
                className="hover:text-[#8E5B5B] transition-colors"
              >
                {SALON_DATA.phone}
              </a>
            </h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Click to dial directly. Our salon team is happy to answer inquiries, review treatment options, and schedule personal consultations.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${SALON_DATA.phoneRaw}`}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#0A1931] underline underline-offset-4"
              >
                <span>Call Beauty Club Swiss</span>
              </a>
            </div>
          </div>

          {/* Card 2: Physical Address */}
          <div className="p-8 bg-[#F4EDE2] border border-[#D9C7A7] space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#0A1931] text-[#E8DCC4] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#8E5B5B] font-semibold block">
              Salon Address
            </span>
            <h3 className="font-serif text-2xl text-[#0A1931]">
              {SALON_DATA.street}
            </h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              {SALON_DATA.postalCode} {SALON_DATA.city}, {SALON_DATA.country}. Centrally situated in Zürich district 1 proximity near Central and Neumarkt.
            </p>
            <div className="pt-2">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(SALON_DATA.name + ' ' + SALON_DATA.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#0A1931] underline underline-offset-4"
              >
                <Navigation className="w-3.5 h-3.5 text-[#8E5B5B]" />
                <span>Open in Maps</span>
              </a>
            </div>
          </div>

          {/* Card 3: Rating & Standards */}
          <div className="p-8 bg-[#F4EDE2] border border-[#D9C7A7] space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#0A1931] text-[#E8DCC4] flex items-center justify-center">
              <Star className="w-5 h-5 fill-[#E8DCC4]" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#8E5B5B] font-semibold block">
              Verified Evaluation
            </span>
            <h3 className="font-serif text-2xl text-[#0A1931]">
              {SALON_DATA.rating} / {SALON_DATA.maxRating} Rating
            </h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Documented across {SALON_DATA.reviewCount} client evaluations reflecting consistent dedication to personal-care excellence in Zürich.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#64748B]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0A1931]" />
                <span>Verified Client Standing</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Location Guidance Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            <ConsultationForm
              title="Request an Appointment or Consultation"
              subtitle="Submit your inquiry below. Our team coordinates appointments directly with each client to ensure dedicated treatment time."
            />
          </div>

          {/* Side Guidance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#0A1931] text-[#FAF7F2] border border-[#1E3E72] space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D9C7A7] font-semibold block">
                Appointment Policy
              </span>
              <h3 className="font-serif text-2xl text-[#F4EDE2]">
                Personalized Scheduling
              </h3>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                To preserve a quiet and unhurried salon atmosphere, visits are arranged through direct dialogue or consultation inquiries. We do not operate an automated turnstile; every guest receives dedicated attention.
              </p>
              <div className="pt-2 border-t border-[#233554] space-y-2 text-xs text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#D9C7A7]" />
                  <span>Call to arrange times that suit your schedule</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D9C7A7]" />
                  <span>Telephone: {SALON_DATA.phone}</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#FAF7F2] border border-[#D9C7A7] space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8E5B5B] font-semibold block">
                Getting Here in Zürich
              </span>
              <h4 className="font-serif text-xl text-[#0A1931]">
                Finding Leonhardstrasse 4
              </h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Our salon is conveniently situated on Leonhardstrasse in 8001 Zürich. It is readily accessible by public transit via the Central interchange or ETH / Universitätsspital tram lines, or by a short walk from Zürich Hauptbahnhof.
              </p>
              <div className="pt-2">
                <RatingBadge variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

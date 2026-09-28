import React from 'react';
import { Phone, MapPin, Sparkles, ArrowRight, Star, Shield, Heart } from 'lucide-react';
import { SALON_DATA, SALON_IMAGES } from '../data/salonData';
import { RatingBadge } from '../components/RatingBadge';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div id="about-page-container" className="py-12 md:py-20 bg-[#FAF7F2] space-y-16">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0A1931] text-[#E8DCC4] text-[11px] uppercase tracking-[0.25em] font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Salon Narrative & Standards</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#0A1931] font-normal tracking-tight">
            About Beauty Club Swiss
          </h1>
          <div className="w-20 h-[2px] bg-[#C2AA80]" />
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
            Situated at Leonhardstrasse 4 in central 8001 Zürich, Beauty Club Swiss is a beauty salon dedicated to personal-care and beauty treatments.
          </p>
        </div>
      </section>

      {/* Main Narrative with Framed Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Framed AI Generated Interior Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#D9C7A7] bg-[#0A1931] p-2 shadow-xl">
              <img
                src={SALON_IMAGES.interior}
                alt="Beauty Club Swiss refined lounge and consultation atmosphere in Zürich"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-4 bg-[#0A1931] text-[#FAF7F2]">
                <p className="text-xs uppercase tracking-widest text-[#E8DCC4]">Leonhardstrasse 4 Interior</p>
                <p className="text-xs text-[#CBD5E1] mt-0.5">
                  Private treatment space designed for calm and uninterrupted care.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#334155] text-sm sm:text-base leading-relaxed">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0A1931] font-normal">
              A Dedicated Approach to Beauty & Personal Care
            </h2>
            <p>
              At Beauty Club Swiss, our practice centers on the fundamental belief that personal care is both a necessary discipline and a restorative pleasure. In a fast-paced metropolitan environment like Zürich, having a dedicated space where you are treated with patience, courtesy, and undivided focus is essential.
            </p>
            <p>
              Our salon at Leonhardstrasse 4 was created to offer an antidote to impersonal, hurried service. We operate without noise or chaotic turnover. Each appointment is scheduled to allow ample time for an initial consultation, careful aesthetic work, and personalized guidance for maintaining skin vitality at home.
            </p>
            <div className="p-6 bg-[#F4EDE2] border-l-4 border-[#0A1931] space-y-2">
              <h3 className="font-serif text-xl text-[#0A1931]">Our Guiding Standard</h3>
              <p className="text-xs sm:text-sm text-[#475569] italic leading-relaxed">
                “To provide personal-care and beauty treatments with meticulous attention to detail, hygienic excellence, and a peaceful Swiss salon experience.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Salon Pillars */}
      <section className="bg-[#0A1931] text-[#FAF7F2] py-20 border-y border-[#1E3E72]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#D9C7A7] font-semibold block">
              Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4EDE2] font-normal">
              Standards of Beauty Club Swiss
            </h2>
            <p className="text-sm text-[#CBD5E1] leading-relaxed">
              Every appointment at our Leonhardstrasse salon is guided by four foundational commitments to quality and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#0E2242] border border-[#233554] space-y-3">
              <div className="w-9 h-9 rounded-full bg-[#1E3E72] text-[#E8DCC4] flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-xl text-[#F4EDE2]">Hygienic Rigor</h3>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                Immaculate cleanliness protocols and sanitized equipment for every individual appointment.
              </p>
            </div>

            <div className="p-6 bg-[#0E2242] border border-[#233554] space-y-3">
              <div className="w-9 h-9 rounded-full bg-[#1E3E72] text-[#E8DCC4] flex items-center justify-center">
                <Heart className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-xl text-[#F4EDE2]">Individual Focus</h3>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                Unrushed sessions tailored around your specific comfort, skin characteristics, and aesthetic preferences.
              </p>
            </div>

            <div className="p-6 bg-[#0E2242] border border-[#233554] space-y-3">
              <div className="w-9 h-9 rounded-full bg-[#1E3E72] text-[#E8DCC4] flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-xl text-[#F4EDE2]">Quiet Serenity</h3>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                A calm, respectful environment free from urban agitation, allowing complete relaxation during treatment.
              </p>
            </div>

            <div className="p-6 bg-[#0E2242] border border-[#233554] space-y-3">
              <div className="w-9 h-9 rounded-full bg-[#1E3E72] text-[#E8DCC4] flex items-center justify-center">
                <Star className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-xl text-[#F4EDE2]">Client Appreciation</h3>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                Validated by a factual rating of 4.9 / 5 across 48 client evaluations in Zürich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Rating & Location Context */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8E5B5B] font-semibold block">
              Zürich Presence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0A1931]">
              Centrally Positioned in Zürich (8001)
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Situated on Leonhardstrasse, our salon sits conveniently close to Zürich’s central transport hubs, university precincts, and downtown districts, making it an accessible sanctuary for both residents and visitors seeking dependable personal-care services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={`tel:${SALON_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0A1931] text-[#FAF7F2] hover:bg-[#142850] text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Beauty Club Swiss</span>
              </a>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#0A1931] text-[#0A1931] hover:bg-[#F4EDE2] text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
              >
                <span>Book a Consultation</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <RatingBadge variant="champagne" />
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { Phone, MapPin, ArrowRight, Compass, Sparkles, Check, Heart, Shield, Navigation } from 'lucide-react';
import { SALON_DATA, SALON_IMAGES, TREATMENT_CATEGORIES } from '../data/salonData';
import { RatingBadge } from '../components/RatingBadge';
import { ConsultationForm } from '../components/ConsultationForm';
import { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div id="home-page-container" className="space-y-0">
      {/* =========================================================================
          SECTION 1: STRIKING HERO
          ========================================================================= */}
      <section
        id="home-hero-section"
        className="relative bg-[#FAF7F2] border-b border-[#E8DCC4] overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Top Label & Verification */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0A1931] text-[#E8DCC4] text-[11px] uppercase tracking-[0.25em] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Zürich Luxury Beauty Club · Leonhardstrasse 4</span>
            </div>
            <RatingBadge variant="compact" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Typography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-[#8E5B5B] font-semibold block">
                  A Sanctuary of Personal Care & Refinement
                </span>
                <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl text-[#0A1931] font-normal tracking-tight leading-[1.08]">
                  Beauty Club Swiss in Zürich.
                </h1>
              </div>

              <div className="w-24 h-[2px] bg-[#C2AA80]" />

              <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-xl font-normal">
                Welcome to {SALON_DATA.name}, an intimate beauty salon at Leonhardstrasse 4, 8001 Zürich. Dedicated entirely to personal-care and beauty treatments, our salon offers a serene private atmosphere designed for personalized rejuvenation.
              </p>

              {/* Primary Call to Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  id="hero-book-consultation-btn"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#0A1931] text-[#FAF7F2] hover:bg-[#142850] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md cursor-pointer"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${SALON_DATA.phoneRaw}`}
                  id="hero-call-salon-btn"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-[#0A1931] text-[#0A1931] hover:bg-[#FAF7F2] hover:border-[#8E5B5B] text-xs uppercase tracking-[0.2em] font-semibold transition-all"
                >
                  <Phone className="w-4 h-4 text-[#8E5B5B]" />
                  <span>Call Beauty Club Swiss</span>
                </a>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-[#64748B]">
                <button
                  type="button"
                  onClick={() => onNavigate('treatments')}
                  className="inline-flex items-center gap-1.5 text-[#0A1931] hover:text-[#8E5B5B] font-semibold uppercase tracking-wider underline underline-offset-4 cursor-pointer"
                >
                  <span>Discover Our Treatments</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C2AA80]" /> Leonhardstrasse 4, 8001 Zürich
                </span>
              </div>
            </div>

            {/* Framed Editorial AI-Generated Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="absolute -top-3 -left-3 w-full h-full border border-[#D9C7A7] pointer-events-none hidden sm:block" />
                
                <div className="relative overflow-hidden bg-[#0A1931] shadow-2xl">
                  <img
                    src={SALON_IMAGES.hero}
                    alt="Beauty Club Swiss high-fashion aesthetic personal care in Zürich"
                    referrerPolicy="no-referrer"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0A1931]/90 backdrop-blur-md border border-[#233554] text-[#FAF7F2]">
                    <p className="text-[11px] uppercase tracking-widest text-[#E8DCC4] font-semibold">
                      Leonhardstrasse 4 · 8001 Zürich
                    </p>
                    <p className="font-serif text-lg text-[#F4EDE2] mt-0.5">
                      Tailored Personal-Care & Beauty Treatments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: DETAILED INTRODUCTION TO THE SALON & ZÜRICH LOCATION
          ========================================================================= */}
      <section id="home-zurich-intro-section" className="py-20 bg-[#F4EDE2] border-b border-[#E8DCC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8E5B5B] font-semibold block">
                Zürich Urban Presence
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0A1931] font-normal leading-tight">
                An Urban Sanctuary in Central Zürich
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                Located at Leonhardstrasse 4 within the 8001 postal district of Zürich, Beauty Club Swiss provides a discreet destination where clients can pause from the bustling city rhythm and invest in purposeful personal care.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${SALON_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#0A1931] hover:text-[#8E5B5B]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call to Inquire: {SALON_DATA.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#FAF7F2] p-8 sm:p-10 border border-[#D9C7A7] space-y-6">
              <h3 className="font-serif text-2xl text-[#0A1931]">
                Thoughtful Atmosphere on Leonhardstrasse
              </h3>
              <p className="text-sm text-[#334155] leading-relaxed">
                Zürich is renowned internationally for precision, balance, and quiet refinement. Beauty Club Swiss reflects these same foundational values inside our beauty salon. Our Leonhardstrasse setting allows guests easy access from the central city while maintaining a tranquil, private haven once inside.
              </p>
              <p className="text-sm text-[#334155] leading-relaxed">
                Whether you live in Zürich or are visiting the city, taking time for professional personal-care treatments supports physical refreshment and mental stillness. Every visit is structured around calm pacing and focused attention.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E8DCC4]">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#64748B]">Location</span>
                  <span className="font-semibold text-sm text-[#0A1931]">8001 Zürich</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#64748B]">Atmosphere</span>
                  <span className="font-semibold text-sm text-[#0A1931]">Quiet Luxury</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#64748B]">Client Rating</span>
                  <span className="font-semibold text-sm text-[#0A1931]">4.9 / 5 Stars</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SUBSTANTIAL ABOUT BEAUTY CLUB SWISS (FACTUAL)
          ========================================================================= */}
      <section id="home-about-factual-section" className="py-24 bg-[#FAF7F2] border-b border-[#E8DCC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8E5B5B] font-semibold block mb-2">
              Our Professional Foundation
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#0A1931] font-normal tracking-tight">
              About Beauty Club Swiss
            </h2>
            <p className="mt-4 text-base text-[#475569] leading-relaxed">
              Operating as a dedicated beauty salon in Zürich, Beauty Club Swiss focuses on individualized personal-care and beauty treatments. We believe in providing an attentive, respectful salon experience built around clean aesthetics and genuine client consideration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Fact-based descriptive columns */}
            <div className="lg:col-span-7 space-y-6 text-[#334155] text-sm sm:text-base leading-relaxed">
              <p>
                At Beauty Club Swiss, personal care is treated as an essential component of individual wellbeing rather than a hasty cosmetic ritual. Clients visit our Leonhardstrasse address for skin-focused consultations, refreshing facial appointments, and tailored aesthetic treatments.
              </p>
              <p>
                We maintain an unhurried, comfortable environment where each client receives our full concentration. Rather than relying on rigid or impersonal service menus, our philosophy emphasizes understanding client preferences during an individualized consultation before any treatment begins.
              </p>
              <div className="p-6 bg-[#F4EDE2] border-l-4 border-[#0A1931] space-y-2">
                <p className="font-serif text-lg text-[#0A1931] italic">
                  “A quiet commitment to individual care, mindful pacing, and consistent quality in the center of Zürich.”
                </p>
                <span className="text-xs uppercase tracking-widest text-[#8E5B5B] font-semibold block">
                  Beauty Club Swiss · Leonhardstrasse 4, 8001 Zürich
                </span>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A1931] text-[#FAF7F2] hover:bg-[#142850] text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                >
                  <span>Read More About Our Salon</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Strategic Framed AI Image */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden bg-[#0A1931] shadow-xl border border-[#D9C7A7]">
                <img
                  src={SALON_IMAGES.ambiance}
                  alt="Beauty Club Swiss refined consultation suite ambiance in Zürich"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="p-5 bg-[#0A1931] text-[#FAF7F2]">
                  <p className="text-xs uppercase tracking-widest text-[#E8DCC4]">Leonhardstrasse 4 Suite</p>
                  <p className="text-sm text-[#CBD5E1] mt-1">
                    An elegant environment curated for private beauty consultations and personal care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PERSONAL CARE AND BEAUTY TREATMENTS (GENERAL COPY)
          ========================================================================= */}
      <section id="home-treatments-overview-section" className="py-24 bg-[#0A1931] text-[#FAF7F2] border-b border-[#1E3E72]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-[#D9C7A7] font-semibold block">
                Treatment Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F4EDE2] font-normal tracking-tight">
                Personal-Care & Beauty Treatments
              </h2>
              <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                Our treatments span essential skincare, facial wellness, and aesthetic grooming. Every session is adapted directly to the client's current skin condition and personal aspirations.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => onNavigate('treatments')}
                id="discover-treatments-cta-btn"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#D9C7A7] text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#0A1931] text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer"
              >
                <span>Discover Our Treatments</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TREATMENT_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 border border-[#233554] bg-[#0E2242] hover:border-[#D9C7A7]/70 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#D9C7A7] font-semibold">
                    Category {idx + 1} · {cat.category}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#D9C7A7]" />
                </div>
                <h3 className="font-serif text-2xl text-[#F4EDE2]">
                  {cat.title}
                </h3>
                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  {cat.summary}
                </p>
                <ul className="space-y-2 pt-2 border-t border-[#233554]">
                  {cat.focusPoints.map((point, pIdx) => (
                    <li key={pIdx} className="text-xs text-[#E2E8F0] flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#D9C7A7] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 text-xs text-[#94A3B8] italic">
                  {cat.editorialNote}
                </div>
              </div>
            ))}
          </div>

          {/* Banner within Section */}
          <div className="mt-12 p-6 sm:p-8 border border-[#233554] bg-[#0A1931] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-serif text-xl text-[#F4EDE2]">
                Need guidance selecting an appropriate personal-care treatment?
              </p>
              <p className="text-xs text-[#CBD5E1]">
                Call Beauty Club Swiss directly at {SALON_DATA.phone} to discuss your preferences.
              </p>
            </div>
            <a
              href={`tel:${SALON_DATA.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8DCC4] text-[#0A1931] hover:bg-[#F4EDE2] text-xs uppercase tracking-widest font-semibold transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Beauty Club Swiss</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: BEAUTY CONSULTATION & CLIENT EXPERIENCE
          ========================================================================= */}
      <section id="home-consultation-experience-section" className="py-24 bg-[#FAF7F2] border-b border-[#E8DCC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image & Atmosphere */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative border border-[#D9C7A7] bg-white p-3 shadow-lg">
                <img
                  src={SALON_IMAGES.care}
                  alt="Personalized aesthetic care and beauty consultation at Beauty Club Swiss"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="pt-4 pb-2 px-2 text-center">
                  <p className="font-serif text-lg text-[#0A1931]">
                    The Art of Attentive Consultation
                  </p>
                  <p className="text-xs text-[#64748B] mt-1">
                    Careful observation and personal dialogue precede every treatment.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Consultation Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8E5B5B] font-semibold block">
                Client Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#0A1931] font-normal leading-tight">
                The Consultation & Client Experience
              </h2>
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                A fulfilling salon experience begins with understanding. At Beauty Club Swiss, our consultation is an open exchange where you are listened to with patience and discretion. We take time to discuss what your skin feels like, how your daily routine affects you, and which aesthetic outcomes you prioritize.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-4 items-start p-4 bg-[#F4EDE2] border border-[#E8DCC4]">
                  <span className="font-serif text-2xl text-[#0A1931] font-semibold shrink-0">01</span>
                  <div>
                    <h4 className="font-serif text-lg text-[#0A1931] font-medium">Individual Dialogue & Skin Review</h4>
                    <p className="text-xs text-[#475569] leading-relaxed mt-1">
                      Discuss your skin sensitivities, past treatments, and lifestyle factors to establish a harmonious baseline.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 bg-[#F4EDE2] border border-[#E8DCC4]">
                  <span className="font-serif text-2xl text-[#0A1931] font-semibold shrink-0">02</span>
                  <div>
                    <h4 className="font-serif text-lg text-[#0A1931] font-medium">Tailored Treatment Recommendation</h4>
                    <p className="text-xs text-[#475569] leading-relaxed mt-1">
                      Receive clear, grounded recommendations for personal-care procedures aligned directly with your comfort level.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 bg-[#F4EDE2] border border-[#E8DCC4]">
                  <span className="font-serif text-2xl text-[#0A1931] font-semibold shrink-0">03</span>
                  <div>
                    <h4 className="font-serif text-lg text-[#0A1931] font-medium">Tranquil Care & Practical Home Guidance</h4>
                    <p className="text-xs text-[#475569] leading-relaxed mt-1">
                      Enjoy an unrushed treatment session followed by honest, practical advice for maintaining vitality at home.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  id="experience-consultation-btn"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0A1931] text-[#FAF7F2] hover:bg-[#142850] text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: VALUE OF PROFESSIONAL PERSONAL-CARE SERVICES
          ========================================================================= */}
      <section id="home-value-section" className="py-24 bg-[#F4EDE2] border-b border-[#E8DCC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8E5B5B] font-semibold block">
              Informational Perspective
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#0A1931] font-normal tracking-tight">
              The Value of Professional Personal Care
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Why regular personal-care appointments are an enduring investment in personal vitality, poise, and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#FAF7F2] border border-[#D9C7A7] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#0A1931] text-[#E8DCC4] flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#0A1931]">Expert Assessment</h3>
              <p className="text-sm text-[#334155] leading-relaxed">
                Skincare and aesthetic needs change across the seasons and during demanding periods. Professional personal-care provides an informed perspective to adjust and calibrate your regimen effectively.
              </p>
            </div>

            <div className="p-8 bg-[#FAF7F2] border border-[#D9C7A7] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#0A1931] text-[#E8DCC4] flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#0A1931]">Dedicated Self-Time</h3>
              <p className="text-sm text-[#334155] leading-relaxed">
                Modern life in Zürich is fast and connected. Stepping into a quiet beauty salon creates intentional space where digital distractions pause, allowing the nervous system and body to relax.
              </p>
            </div>

            <div className="p-8 bg-[#FAF7F2] border border-[#D9C7A7] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#0A1931] text-[#E8DCC4] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#0A1931]">Consistent Maintenance</h3>
              <p className="text-sm text-[#334155] leading-relaxed">
                Aesthetic vitality thrives on continuity. Regular, measured treatments assist your skin’s natural renewal processes and keep personal presentation effortless and polished over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: DEDICATED FACTUAL 4.9 / 5 RATING FROM 48 REVIEWS
          ========================================================================= */}
      <section id="home-rating-section" className="py-24 bg-[#FAF7F2] border-b border-[#E8DCC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8E5B5B] font-semibold block">
                Factual Quality Metric
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#0A1931] font-normal leading-tight">
                4.9 / 5 from 48 Client Reviews
              </h2>
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                Client feedback is the most direct indicator of dedication. Beauty Club Swiss has earned a verified score of <strong>4.9 out of 5 stars</strong> across <strong>48 reviews</strong>, reflecting genuine client appreciation for our personal-care approach in Zürich.
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                We present this metric plainly as a reflection of sustained consistency, hygienic diligence, and respectful client relationships. We do not invent fabricated quotes or exaggerated endorsements—the documented score speaks for itself.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${SALON_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A1931] text-[#FAF7F2] hover:bg-[#142850] text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Beauty Club Swiss: {SALON_DATA.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <RatingBadge variant="champagne" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: PRACTICAL "VISIT THE SALON" SECTION
          ========================================================================= */}
      <section id="home-visit-salon-section" className="py-24 bg-[#FAF7F2] border-b border-[#E8DCC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Interior image */}
            <div className="lg:col-span-5">
              <div className="relative border border-[#D9C7A7] overflow-hidden shadow-xl">
                <img
                  src={SALON_IMAGES.interior}
                  alt="Beauty Club Swiss interior lounge and reception at Leonhardstrasse 4, Zürich"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-4 bg-[#0A1931] text-[#FAF7F2]">
                  <p className="text-xs uppercase tracking-widest text-[#E8DCC4]">Leonhardstrasse 4 Lounge</p>
                  <p className="text-xs text-[#CBD5E1] mt-0.5">Welcome reception and consultation space in Zürich</p>
                </div>
              </div>
            </div>

            {/* Visit details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8E5B5B] font-semibold block">
                Location & Accessibility
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#0A1931] font-normal leading-tight">
                Visit the Salon on Leonhardstrasse
              </h2>
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                Beauty Club Swiss is situated at <strong>Leonhardstrasse 4, 8001 Zürich</strong>. This address offers convenient connectivity whether you are coming from Zürich Hauptbahnhof, Central, Bellevue, or the surrounding university quarter.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-[#F4EDE2] border border-[#E8DCC4] space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#8E5B5B] font-semibold block">
                    Exact Address
                  </span>
                  <p className="font-serif text-lg text-[#0A1931] font-medium">
                    {SALON_DATA.street}
                  </p>
                  <p className="text-xs text-[#475569]">
                    {SALON_DATA.postalCode} {SALON_DATA.city}, {SALON_DATA.country}
                  </p>
                </div>

                <div className="p-5 bg-[#F4EDE2] border border-[#E8DCC4] space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#8E5B5B] font-semibold block">
                    Telephone Contact
                  </span>
                  <p className="font-serif text-lg text-[#0A1931] font-medium">
                    <a href={`tel:${SALON_DATA.phoneRaw}`} className="hover:text-[#8E5B5B]">
                      {SALON_DATA.phone}
                    </a>
                  </p>
                  <p className="text-xs text-[#475569]">
                    Click to dial directly for consultations
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  type="button"
                  id="visit-the-salon-cta-btn"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0A1931] text-[#FAF7F2] hover:bg-[#142850] text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#E8DCC4]" />
                  <span>Visit the Salon & Directions</span>
                </button>

                <a
                  href={`tel:${SALON_DATA.phoneRaw}`}
                  id="visit-call-btn"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#0A1931] text-[#0A1931] hover:bg-[#F4EDE2] text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Beauty Club Swiss</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: APPOINTMENT INVITATION & CLEAR DIRECT CONTACT
          ========================================================================= */}
      <section id="home-appointment-invitation-section" className="py-20 bg-[#0A1931] text-[#FAF7F2] border-b border-[#1E3E72]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#D9C7A7] font-semibold block">
              Personalized Arrangement
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4EDE2] font-normal leading-tight">
              Begin Your Beauty Care Journey
            </h2>
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
              Appointments at Beauty Club Swiss are scheduled directly to ensure personalized attention and adequate treatment time. We invite you to call us directly or submit your consultation request below.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${SALON_DATA.phoneRaw}`}
                id="invitation-call-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E8DCC4] text-[#0A1931] hover:bg-[#F4EDE2] text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Beauty Club Swiss: {SALON_DATA.phone}</span>
              </a>

              <button
                type="button"
                id="invitation-consultation-btn"
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#D9C7A7] text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#0A1931] text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer"
              >
                <span>Book a Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: SUBSTANTIAL FINAL CONTACT & CONSULTATION INQUIRY
          ========================================================================= */}
      <section id="home-final-contact-section" className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8E5B5B] font-semibold block">
              Direct Inquiries & Bookings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0A1931] font-normal">
              Contact Beauty Club Swiss
            </h2>
            <p className="text-sm text-[#475569]">
              Reach our salon at Leonhardstrasse 4, Zürich for personal-care and beauty treatment consultations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ConsultationForm
              theme="light"
              title="Request Your Consultation"
              subtitle="Submit your preferences, and our team will contact you directly to arrange your visit."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

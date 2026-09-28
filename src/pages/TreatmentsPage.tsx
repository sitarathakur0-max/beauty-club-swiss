import React from 'react';
import { Phone, Check, Sparkles, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SALON_DATA, SALON_IMAGES, TREATMENT_CATEGORIES } from '../data/salonData';
import { ConsultationForm } from '../components/ConsultationForm';
import { PageId } from '../types';

interface TreatmentsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({ onOpenConsultation }) => {
  return (
    <div id="treatments-page-container" className="py-12 md:py-20 bg-[#FAF7F2] space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0A1931] text-[#E8DCC4] text-[11px] uppercase tracking-[0.25em] font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Personal-Care & Beauty Treatments</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#0A1931] font-normal tracking-tight">
            Our Treatment Disciplines
          </h1>
          <div className="w-20 h-[2px] bg-[#C2AA80]" />
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
            At Beauty Club Swiss, our personal-care and beauty treatments are customized through consultation to respect your individual skin profile and aesthetic goals.
          </p>
        </div>
      </section>

      {/* Philosophy Banner with Framed Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#F4EDE2] border border-[#D9C7A7] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8E5B5B] font-semibold block">
                The Consultation-Led Standard
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0A1931]">
                Tailored Rather Than Standardized
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                We believe beauty and personal-care treatments must be as unique as the individuals who receive them. Instead of selecting pre-packaged, rigid formulas, your time at Beauty Club Swiss begins with a one-on-one assessment of your skin's immediate condition, seasonal influences, and personal comfort.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={`tel:${SALON_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A1931] text-[#FAF7F2] hover:bg-[#142850] text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call to Inquire: {SALON_DATA.phone}</span>
                </a>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#0A1931] text-[#0A1931] hover:bg-[#FAF7F2] text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-[#D9C7A7] bg-[#0A1931] p-2 shadow-lg">
                <img
                  src={SALON_IMAGES.care}
                  alt="Aesthetic beauty treatment care at Beauty Club Swiss"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Categories List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-10 space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8E5B5B] font-semibold block">
            Comprehensive Care Areas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A1931]">
            Treatment Areas & Focus
          </h2>
          <p className="text-sm text-[#475569] max-w-2xl leading-relaxed">
            Explore the core personal-care areas available at our Leonhardstrasse salon. Specific protocols are personalized during your direct appointment dialogue.
          </p>
        </div>

        <div className="space-y-8">
          {TREATMENT_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 border border-[#E8DCC4] bg-[#FAF7F2] hover:border-[#C2AA80] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-4 space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#8E5B5B] font-bold">
                  0{idx + 1} · {cat.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#0A1931]">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#64748B] italic pt-2">
                  {cat.editorialNote}
                </p>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <p className="text-sm text-[#334155] leading-relaxed">
                  {cat.summary}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#0A1931] mb-3">
                    Care Highlights & Focus:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.focusPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#475569] bg-[#F4EDE2] p-3 border border-[#E8DCC4]">
                        <Check className="w-3.5 h-3.5 text-[#8E5B5B] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-[#E8DCC4]">
                  <span className="text-xs text-[#64748B]">
                    Leonhardstrasse 4, 8001 Zürich
                  </span>
                  <a
                    href={`tel:${SALON_DATA.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#0A1931] hover:text-[#8E5B5B]"
                  >
                    <span>Inquire via Phone</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Care Reassurance */}
      <section className="bg-[#0A1931] text-[#FAF7F2] py-16 border-y border-[#1E3E72]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D9C7A7]">
            <ShieldCheck className="w-4 h-4" />
            <span>Dedicated Quality Assurance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F4EDE2]">
            Hygienic Standards & Respectful Timing
          </h2>
          <p className="text-sm text-[#CBD5E1] leading-relaxed">
            All personal-care appointments at Beauty Club Swiss are scheduled to ensure strict sanitation of treatment stations and private suites between every client. We uphold Swiss standards of cleanliness and personal discretion at all times.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${SALON_DATA.phoneRaw}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E8DCC4] text-[#0A1931] hover:bg-[#F4EDE2] text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Salon: {SALON_DATA.phone}</span>
            </a>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#D9C7A7] text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#0A1931] text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer"
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Book a Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Embedded Inquiry Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <ConsultationForm
          title="Arrange a Personal Treatment Consultation"
          subtitle="Tell us which beauty or skincare area you are interested in discussing."
        />
      </section>
    </div>
  );
};

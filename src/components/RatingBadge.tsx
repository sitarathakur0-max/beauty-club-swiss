import React from 'react';
import { Star, Award } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface RatingBadgeProps {
  variant?: 'light' | 'dark' | 'champagne' | 'compact';
  className?: string;
  id?: string;
}

export const RatingBadge: React.FC<RatingBadgeProps> = ({
  variant = 'champagne',
  className = '',
  id = 'salon-rating-badge',
}) => {
  if (variant === 'compact') {
    return (
      <div
        id={id}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D9C7A7]/50 bg-[#FAF7F2] text-[#0A1931] text-xs font-medium tracking-wide ${className}`}
      >
        <div className="flex items-center text-[#C2AA80]" aria-hidden="true">
          <Star className="w-3.5 h-3.5 fill-[#C2AA80] stroke-none" />
        </div>
        <span className="font-semibold text-[#0A1931]">{SALON_DATA.rating} / {SALON_DATA.maxRating}</span>
        <span className="text-[#64748B]">·</span>
        <span className="text-[#475569]">{SALON_DATA.reviewCount} client reviews</span>
      </div>
    );
  }

  if (variant === 'dark') {
    return (
      <div
        id={id}
        className={`p-6 border border-[#233554] bg-[#0D2140] text-[#FAF7F2] relative ${className}`}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#233554]">
          <div className="flex items-center gap-1.5 text-[#E8DCC4]">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 fill-[#E8DCC4] stroke-[#E8DCC4]" />
            ))}
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-widest text-[#E8DCC4] font-medium">
            <Award className="w-3.5 h-3.5 text-[#E8DCC4]" /> Verified Salon Rating
          </span>
        </div>
        <div className="pt-4 flex items-baseline gap-3">
          <span className="font-serif text-4xl text-[#F4EDE2] font-normal tracking-tight">
            {SALON_DATA.rating}
          </span>
          <span className="text-[#94A3B8] text-sm">out of {SALON_DATA.maxRating}</span>
          <span className="text-[#E8DCC4] text-sm ml-auto font-medium">
            Based on {SALON_DATA.reviewCount} reviews
          </span>
        </div>
        <p className="mt-2 text-xs text-[#CBD5E1] leading-relaxed">
          Reflecting consistent client appreciation for attentive personal-care and professional beauty treatments in Zürich.
        </p>
      </div>
    );
  }

  // Champagne variant
  return (
    <div
      id={id}
      className={`p-6 md:p-8 border border-[#D9C7A7] bg-[#F7F2E9] text-[#0A1931] relative shadow-sm ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#D9C7A7]/60">
        <div className="flex items-center gap-1 text-[#0A1931]">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-4 h-4 fill-[#0A1931] stroke-[#0A1931]" />
          ))}
        </div>
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#8E5B5B]">
          <Award className="w-3.5 h-3.5" />
          <span>Verified Client Evaluation</span>
        </div>
      </div>
      <div className="pt-4 flex items-baseline gap-3">
        <span className="font-serif text-5xl md:text-6xl text-[#0A1931] font-light tracking-tight">
          {SALON_DATA.rating}
        </span>
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-widest text-[#64748B] font-medium">
            Scale 1.0 – {SALON_DATA.maxRating}
          </span>
          <span className="text-sm font-medium text-[#0A1931]">
            Documented from {SALON_DATA.reviewCount} reviews
          </span>
        </div>
      </div>
      <p className="mt-3 text-sm text-[#334155] leading-relaxed">
        A distinguished benchmark of excellence in Zürich for tailored beauty care, tranquil ambiance, and dedicated individual attention.
      </p>
    </div>
  );
};

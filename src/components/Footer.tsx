import React from 'react';
import { Phone, MapPin, Star, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="salon-main-footer" className="bg-[#0A1931] text-[#FAF7F2] border-t border-[#1E3E72] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#233554]">
          {/* Brand & Purpose Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D9C7A7] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#E8DCC4]" />
              <span>Zürich Luxury Beauty Club</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-[#F4EDE2]">
              {SALON_DATA.name}
            </h2>
            <p className="text-sm text-[#CBD5E1] leading-relaxed max-w-md">
              {SALON_DATA.description}. Located in central Zürich at Leonhardstrasse 4, providing an elevated, tranquil atmosphere for personalized skincare and aesthetic refinement.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-[#0E2242] border border-[#233554] text-xs">
                <div className="flex items-center text-[#E8DCC4]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#E8DCC4] stroke-none" />
                  ))}
                </div>
                <span className="text-[#F4EDE2] font-semibold">{SALON_DATA.rating} / {SALON_DATA.maxRating}</span>
                <span className="text-[#64748B]">·</span>
                <span className="text-[#CBD5E1]">{SALON_DATA.reviewCount} client evaluations</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#D9C7A7] font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home')}
                  id="footer-nav-home"
                  className="hover:text-[#F4EDE2] transition-colors cursor-pointer text-left"
                >
                  Home Page Overview
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  id="footer-nav-about"
                  className="hover:text-[#F4EDE2] transition-colors cursor-pointer text-left"
                >
                  About Beauty Club Swiss
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('treatments')}
                  id="footer-nav-treatments"
                  className="hover:text-[#F4EDE2] transition-colors cursor-pointer text-left"
                >
                  Personal Care & Treatments
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  id="footer-nav-contact"
                  className="hover:text-[#F4EDE2] transition-colors cursor-pointer text-left"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Visit */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#D9C7A7] font-semibold">
              Contact & Location
            </h3>
            <div className="space-y-3 text-sm text-[#CBD5E1]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D9C7A7] mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-[#F4EDE2]">{SALON_DATA.street}</p>
                  <p>{SALON_DATA.postalCode} {SALON_DATA.city}, {SALON_DATA.country}</p>
                  <p className="text-xs text-[#94A3B8] mt-0.5">Central Zürich · District 1 proximity</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <Phone className="w-4 h-4 text-[#D9C7A7] mt-1 shrink-0" />
                <div>
                  <a
                    href={`tel:${SALON_DATA.phoneRaw}`}
                    id="footer-phone-cta"
                    className="font-medium text-[#F4EDE2] hover:text-[#FFFFFF] underline decoration-[#D9C7A7] underline-offset-4 transition-colors text-base"
                  >
                    {SALON_DATA.phone}
                  </a>
                  <p className="text-xs text-[#94A3B8] mt-0.5">
                    Direct salon telephone inquiries & consultation requests
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${SALON_DATA.phoneRaw}`}
                id="footer-call-action-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E8DCC4] text-[#0A1931] hover:bg-[#F4EDE2] text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                <span>Call Beauty Club Swiss</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Identity Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D9C7A7]" />
            <span>
              © {new Date().getFullYear()} {SALON_DATA.name} · {SALON_DATA.address}. All rights reserved.
            </span>
          </div>

          <div className="text-center sm:text-right text-[11px] text-[#CBD5E1]">
            <span>Category: {SALON_DATA.category}</span>
            <span className="mx-2">·</span>
            <span>English Edition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

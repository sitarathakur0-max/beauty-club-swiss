import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, Star } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'contact', label: 'Contact & Visit' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DCC4] transition-all">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#0A1931] text-[#E8DCC4] text-[11px] uppercase tracking-widest py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#D9C7A7]" />
              {SALON_DATA.address}
            </span>
            <span className="hidden md:inline text-[#233554]">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-[#F4EDE2]">
              <Star className="w-3 h-3 fill-[#E8DCC4] stroke-none" />
              {SALON_DATA.rating} / {SALON_DATA.maxRating} ({SALON_DATA.reviewCount} client reviews)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SALON_DATA.phoneRaw}`}
              id="top-bar-phone-link"
              className="inline-flex items-center gap-1.5 text-[#F4EDE2] hover:text-[#FFFFFF] transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-[#D9C7A7]" />
              <span>{SALON_DATA.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
        {/* Brand Name / Logo */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          id="nav-logo-btn"
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-serif text-2xl sm:text-3xl tracking-wider text-[#0A1931] uppercase block leading-none font-medium">
            Beauty Club Swiss
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#8E5B5B] uppercase block mt-1 font-sans font-medium">
            Zürich · Leonhardstrasse
          </span>
        </button>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`desktop-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-all py-1 relative cursor-pointer ${
                  isActive
                    ? 'text-[#0A1931] font-semibold'
                    : 'text-[#475569] hover:text-[#0A1931]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8E5B5B]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${SALON_DATA.phoneRaw}`}
            id="nav-call-cta-btn"
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#0A1931] text-[#0A1931] hover:bg-[#0A1931] hover:text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Salon</span>
          </a>

          <button
            type="button"
            id="nav-book-consultation-btn"
            onClick={onOpenConsultation || (() => handleNavClick('contact'))}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A1931] text-[#F4EDE2] hover:bg-[#142850] text-xs uppercase tracking-wider font-semibold transition-all shadow-sm cursor-pointer"
          >
            <span>Book a Consultation</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={`tel:${SALON_DATA.phoneRaw}`}
            id="mobile-quick-call-icon"
            className="p-2 text-[#0A1931] border border-[#D9C7A7] rounded-sm hover:bg-[#E8DCC4]/20"
            aria-label={`Call ${SALON_DATA.name}`}
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            type="button"
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0A1931] hover:bg-[#E8DCC4]/20 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden border-t border-[#E8DCC4] bg-[#FAF7F2] px-6 py-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2"
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-sm uppercase tracking-widest py-2 border-b border-[#E8DCC4]/40 flex items-center justify-between ${
                    isActive ? 'text-[#0A1931] font-bold' : 'text-[#475569]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs text-[#8E5B5B]">Active</span>}
                </button>
              );
            })}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href={`tel:${SALON_DATA.phoneRaw}`}
              id="mobile-call-cta-btn"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#0A1931] text-[#0A1931] text-xs uppercase tracking-widest font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Beauty Club Swiss
            </a>
            <button
              type="button"
              id="mobile-consultation-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenConsultation) {
                  onOpenConsultation();
                } else {
                  handleNavClick('contact');
                }
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0A1931] text-[#F4EDE2] text-xs uppercase tracking-widest font-semibold"
            >
              Book a Consultation
            </button>
          </div>

          <div className="pt-2 text-xs text-[#64748B] text-center">
            {SALON_DATA.address}
          </div>
        </div>
      )}
    </header>
  );
};

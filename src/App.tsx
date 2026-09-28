import { useState, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';
import { PageId } from './types';
import { SALON_DATA } from './data/salonData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  // Sync with URL hash if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'about' || hash === 'treatments' || hash === 'contact' || hash === 'home') {
        setCurrentPage(hash as PageId);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openConsultation = () => {
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A202C] font-sans selection:bg-[#E8DCC4] selection:text-[#0A1931]">
      {/* Top Navbar with Luxury Styling */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={openConsultation}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={openConsultation}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={openConsultation}
          />
        )}
        {currentPage === 'treatments' && (
          <TreatmentsPage
            onNavigate={handleNavigate}
            onOpenConsultation={openConsultation}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Editorial Luxury Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />

      {/* Mobile Sticky Action Bar */}
      <div
        id="mobile-sticky-action-bar"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A1931] border-t border-[#1E3E72] p-3 shadow-2xl flex items-center gap-3"
      >
        <a
          href={`tel:${SALON_DATA.phoneRaw}`}
          id="mobile-sticky-call-btn"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#E8DCC4] text-[#0A1931] text-xs uppercase tracking-wider font-bold rounded-none active:scale-[0.98] transition-transform"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Salon</span>
        </a>
        <button
          type="button"
          id="mobile-sticky-consultation-btn"
          onClick={openConsultation}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 border border-[#E8DCC4] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold rounded-none active:scale-[0.98] transition-transform cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-[#E8DCC4]" />
          <span>Consultation</span>
        </button>
      </div>
    </div>
  );
}

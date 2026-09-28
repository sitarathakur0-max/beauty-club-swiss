import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ConsultationForm } from './ConsultationForm';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="consultation-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1931]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="consultation-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Book a Beauty Consultation at Beauty Club Swiss"
        className="relative w-full max-w-2xl bg-[#FAF7F2] border border-[#D9C7A7] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        <button
          type="button"
          id="close-consultation-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#0A1931] hover:bg-[#E8DCC4]/30 rounded-full transition-colors cursor-pointer"
          aria-label="Close consultation modal"
        >
          <X className="w-5 h-5" />
        </button>

        <ConsultationForm
          onSuccess={() => {
            // keep open to let user see confirmation
          }}
        />
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Phone, CheckCircle2, Send, AlertCircle, Clock, Sparkles } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';
import { ConsultationInquiry } from '../types';

interface ConsultationFormProps {
  id?: string;
  className?: string;
  theme?: 'light' | 'dark';
  title?: string;
  subtitle?: string;
  onSuccess?: () => void;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  id = 'consultation-form-section',
  className = '',
  theme = 'light',
  title = 'Request a Beauty Consultation',
  subtitle = 'Arrange your visit or consultation at Leonhardstrasse 4, Zürich with our personal-care specialists.',
  onSuccess,
}) => {
  const [formData, setFormData] = useState<ConsultationInquiry>({
    fullName: '',
    phone: '',
    email: '',
    preferredTreatmentArea: 'Facial & Skin Wellness',
    preferredTimeOfDay: 'Morning or Afternoon',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your telephone number.';
    } else if (!/^[+0-9\s().-]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid telephone number (e.g. +41 77 495 89 83).';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend validation & transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      preferredTreatmentArea: 'Facial & Skin Wellness',
      preferredTimeOfDay: 'Morning or Afternoon',
      notes: '',
    });
    setIsSubmitted(false);
    setErrors({});
  };

  const isDark = theme === 'dark';

  return (
    <div
      id={id}
      className={`p-6 sm:p-8 md:p-10 transition-colors ${
        isDark
          ? 'bg-[#0A1931] text-[#FAF7F2] border border-[#1E3E72]'
          : 'bg-[#FAF7F2] text-[#0A1931] border border-[#E8DCC4]'
      } ${className}`}
    >
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-2 text-xs uppercase tracking-widest font-semibold text-[#8E5B5B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Personalized Care Inquiry</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight mb-2">
            {title}
          </h3>
          <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-[#CBD5E1]' : 'text-[#475569]'}`}>
            {subtitle}
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center border border-[#8E5B5B]/30 bg-[#FAF7F2]/10 rounded-sm">
            <CheckCircle2 className="w-12 h-12 text-[#C2AA80] mx-auto mb-4" />
            <h4 className="font-serif text-2xl mb-2">Consultation Request Received</h4>
            <p className="text-sm text-[#475569] dark:text-[#CBD5E1] max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, <strong className="font-semibold">{formData.fullName}</strong>. We have received your consultation inquiry for Beauty Club Swiss. Our team will contact you via telephone or email to confirm your personalized appointment at Leonhardstrasse 4, Zürich.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${SALON_DATA.phoneRaw}`}
                id="form-success-call-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0A1931] text-[#F4EDE2] hover:bg-[#142850] text-xs uppercase tracking-widest font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Directly: {SALON_DATA.phone}
              </a>
              <button
                type="button"
                onClick={handleReset}
                id="form-reset-btn"
                className="w-full sm:w-auto px-6 py-3 border border-[#D9C7A7] text-xs uppercase tracking-widest hover:bg-[#E8DCC4]/20 transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="consultation-fullname"
                  className={`block text-xs uppercase tracking-wider font-medium mb-1.5 ${
                    isDark ? 'text-[#E8DCC4]' : 'text-[#1E293B]'
                  }`}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="consultation-fullname"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Helena Meier"
                  className={`w-full px-3.5 py-2.5 text-sm transition-colors border ${
                    errors.fullName
                      ? 'border-red-500 ring-1 ring-red-500'
                      : isDark
                      ? 'border-[#233554] bg-[#0E2242] text-[#FAF7F2] focus:border-[#E8DCC4]'
                      : 'border-[#D9C7A7] bg-white text-[#0A1931] focus:border-[#0A1931]'
                  } focus:outline-none`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="consultation-phone"
                  className={`block text-xs uppercase tracking-wider font-medium mb-1.5 ${
                    isDark ? 'text-[#E8DCC4]' : 'text-[#1E293B]'
                  }`}
                >
                  Telephone Number *
                </label>
                <input
                  type="tel"
                  id="consultation-phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+41 77 495 89 83"
                  className={`w-full px-3.5 py-2.5 text-sm transition-colors border ${
                    errors.phone
                      ? 'border-red-500 ring-1 ring-red-500'
                      : isDark
                      ? 'border-[#233554] bg-[#0E2242] text-[#FAF7F2] focus:border-[#E8DCC4]'
                      : 'border-[#D9C7A7] bg-white text-[#0A1931] focus:border-[#0A1931]'
                  } focus:outline-none`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="consultation-email"
                  className={`block text-xs uppercase tracking-wider font-medium mb-1.5 ${
                    isDark ? 'text-[#E8DCC4]' : 'text-[#1E293B]'
                  }`}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="consultation-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.ch"
                  className={`w-full px-3.5 py-2.5 text-sm transition-colors border ${
                    errors.email
                      ? 'border-red-500 ring-1 ring-red-500'
                      : isDark
                      ? 'border-[#233554] bg-[#0E2242] text-[#FAF7F2] focus:border-[#E8DCC4]'
                      : 'border-[#D9C7A7] bg-white text-[#0A1931] focus:border-[#0A1931]'
                  } focus:outline-none`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="consultation-treatment-area"
                  className={`block text-xs uppercase tracking-wider font-medium mb-1.5 ${
                    isDark ? 'text-[#E8DCC4]' : 'text-[#1E293B]'
                  }`}
                >
                  Interest Area
                </label>
                <select
                  id="consultation-treatment-area"
                  value={formData.preferredTreatmentArea}
                  onChange={(e) => setFormData({ ...formData, preferredTreatmentArea: e.target.value })}
                  className={`w-full px-3.5 py-2.5 text-sm transition-colors border ${
                    isDark
                      ? 'border-[#233554] bg-[#0E2242] text-[#FAF7F2] focus:border-[#E8DCC4]'
                      : 'border-[#D9C7A7] bg-white text-[#0A1931] focus:border-[#0A1931]'
                  } focus:outline-none`}
                >
                  <option value="Facial & Skin Wellness">Facial & Skin Wellness</option>
                  <option value="Aesthetic Refinement & Glow">Aesthetic Refinement & Glow</option>
                  <option value="Personal Rejuvenation & Care">Personal Rejuvenation & Care</option>
                  <option value="Hands, Nails & Detail Care">Hands, Nails & Detail Care</option>
                  <option value="Comprehensive Consultation">Comprehensive Consultation</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="consultation-notes"
                className={`block text-xs uppercase tracking-wider font-medium mb-1.5 ${
                  isDark ? 'text-[#E8DCC4]' : 'text-[#1E293B]'
                }`}
              >
                Inquiry Details or Questions (Optional)
              </label>
              <textarea
                id="consultation-notes"
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Share your personal-care preferences, desired appointment timing, or any questions about visiting Beauty Club Swiss..."
                className={`w-full px-3.5 py-2.5 text-sm transition-colors border ${
                  isDark
                    ? 'border-[#233554] bg-[#0E2242] text-[#FAF7F2] focus:border-[#E8DCC4]'
                    : 'border-[#D9C7A7] bg-white text-[#0A1931] focus:border-[#0A1931]'
                } focus:outline-none`}
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className={`text-xs flex items-center gap-1.5 ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                <Clock className="w-3.5 h-3.5" />
                Appointments arranged by telephone or direct salon confirmation
              </p>

              <button
                type="submit"
                id="submit-consultation-btn"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0A1931] text-[#FAF7F2] hover:bg-[#142850] dark:bg-[#E8DCC4] dark:text-[#0A1931] dark:hover:bg-[#F4EDE2] transition-colors text-xs uppercase tracking-widest font-semibold cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    Submit Consultation Request
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

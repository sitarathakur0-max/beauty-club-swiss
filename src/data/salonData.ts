import { SalonInfo } from '../types';

export const SALON_DATA: SalonInfo = {
  name: 'Beauty Club Swiss',
  category: 'Beauty Salon',
  address: 'Leonhardstrasse 4, 8001 Zürich, Switzerland',
  street: 'Leonhardstrasse 4',
  postalCode: '8001',
  city: 'Zürich',
  country: 'Switzerland',
  phone: '+41 77 495 89 83',
  phoneRaw: '+41774958983',
  rating: 4.9,
  maxRating: 5.0,
  reviewCount: 48,
  description: 'Beauty salon offering personal-care and beauty treatments',
};

// Strategic AI-generated imagery tailored to the royal blue & champagne luxury club aesthetic
export const SALON_IMAGES = {
  hero: '/src/assets/images/hero_beauty_salon_1789905951537.jpg',
  interior: '/src/assets/images/salon_interior_lounge_1789905971996.jpg',
  care: '/src/assets/images/beauty_consultation_care_1789905986374.jpg',
  ambiance: '/src/assets/images/zurich_salon_ambiance_1789905999138.jpg',
};

export const TREATMENT_CATEGORIES = [
  {
    title: 'Facial & Skin Wellness',
    category: 'Skincare',
    summary:
      'Targeted personal-care routines designed to refresh, hydrate, and maintain the natural vitality of your skin.',
    focusPoints: [
      'Gentle epidermal cleansing and botanical hydration',
      'Personalized skin moisture barrier support',
      'Revitalizing and restorative facial touchpoints',
      'Consultation-focused recommendations for daily skin balance'
    ],
    editorialNote:
      'Every appointment begins with a dedicated aesthetic consultation to understand your skin’s unique condition and personal-care goals.'
  },
  {
    title: 'Aesthetic Refinement & Glow',
    category: 'Beauty Care',
    summary:
      'Harmonious personal treatments that accentuate your natural features with subtle precision and mindful care.',
    focusPoints: [
      'Subtle complexion balancing and radiance revival',
      'Carefully calibrated aesthetic application',
      'Calming post-treatment soothing techniques',
      'Meticulous hygiene standards and tranquil pacing'
    ],
    editorialNote:
      'We focus on enhancing individual radiance in an undisturbed, private salon setting in central Zürich.'
  },
  {
    title: 'Personal Rejuvenation & Care',
    category: 'Restorative Care',
    summary:
      'Dedicated personal-care sessions providing a calm sanctuary from the fast tempo of city life.',
    focusPoints: [
      'Unrushed appointments dedicated entirely to your comfort',
      'Acoustic and atmospheric serenity in our private suites',
      'Sensory relaxation through gentle touch and quietude',
      'Holistic approach to beauty as an integral part of self-care'
    ],
    editorialNote:
      'Experience the calm of our Leonhardstrasse salon, where each visit is scheduled to afford you undivided personal attention.'
  },
  {
    title: 'Hands, Nails & Detail Care',
    category: 'Aesthetic Details',
    summary:
      'Refined grooming and personal-care details executed with steady precision and high cleanliness standards.',
    focusPoints: [
      'Careful nail shaping, gentle cuticle care, and conditioning',
      'Nourishing hand and skin moisturizing applications',
      'Elegant, timeless finishes suited for everyday sophistication',
      'Attentive consultation on home maintenance routines'
    ],
    editorialNote:
      'Polished simplicity and immaculate detail care tailored to your lifestyle and aesthetic preferences.'
  }
];

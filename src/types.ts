export type PageId = 'home' | 'about' | 'treatments' | 'contact';

export interface SalonInfo {
  name: string;
  category: string;
  address: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  phoneRaw: string;
  rating: number;
  maxRating: number;
  reviewCount: number;
  description: string;
}

export interface ConsultationInquiry {
  fullName: string;
  phone: string;
  email: string;
  preferredTreatmentArea: string;
  preferredTimeOfDay: string;
  notes: string;
}

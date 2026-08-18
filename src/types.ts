export interface User {
  email: string;
  name: string;
  isGuest: boolean;
  avatar?: string;
}

export interface DurationTier {
  id: '1mo' | '3mo' | '6mo' | '12mo' | 'custom';
  label: string;
  durationName: string;
  months: number;
  price: number;
  originalPrice: number;
  monthlyEquivalent: number;
  savingsBadge?: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  originalPrice: string;
  badge?: string;
  popular?: boolean;
  icon: string;
  category: 'web' | 'ai' | 'social' | 'seo' | 'reviews' | 'ads';
  features: string[];
  durationTiers?: DurationTier[];
  isNegotiable?: boolean;
  negotiationNote?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  growthMetric: string;
  serviceUsed: string;
}

export interface FeatureHighlight {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
  stat: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

import { Service, DurationTier } from '../types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    subtitle: 'High-Converting Responsive Websites',
    description: 'Custom, blazing-fast, mobile-ready business websites crafted to convert visitors into loyal paying customers.',
    price: '₹1,100',
    originalPrice: '₹4,999',
    popular: true,
    badge: 'MOST POPULAR',
    icon: 'Globe',
    category: 'web',
    features: [
      'Responsive Mobile & Desktop Design',
      'Ultra-Fast Loading & Modern 3D Layout',
      'Free SSL & Custom Domain Setup',
      'WhatsApp Live Chat Integration',
      'SEO Friendly Architecture'
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    subtitle: 'Smart Business Process Automation',
    description: 'Automate customer support, lead capture, and CRM workflows 24/7 with custom intelligent AI agents.',
    price: '₹1,100',
    originalPrice: '₹5,999',
    popular: false,
    badge: 'FUTURE TECH',
    icon: 'Bot',
    category: 'ai',
    features: [
      '24/7 Smart Customer Chatbot',
      'Instant Lead Capture & Email Alerts',
      'Automated Appointment Booking',
      'WhatsApp Auto-Responder Bot',
      'Custom Workflow Integration'
    ]
  },
  {
    id: 'social-management',
    title: 'Social Media Management',
    subtitle: 'Organic Growth & Content Strategy',
    description: 'Boost brand awareness and engagement across Instagram, Facebook & LinkedIn with stunning visual content.',
    price: '₹1,100',
    originalPrice: '₹3,999',
    popular: false,
    badge: 'VIRAL REACH',
    icon: 'Share2',
    category: 'social',
    features: [
      'High-Quality Post & Reel Graphics',
      'Targeted Content Strategy & Captions',
      'Hashtag Research & Audience Growth',
      'Regular Posting & Page Optimization',
      'Monthly Analytics & Reach Reports'
    ]
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimisation Service',
    subtitle: 'Rank #1 on Google Search',
    description: 'Dominate organic search results, attract high-intent local buyers, and generate consistent free traffic.',
    price: '₹1,100',
    originalPrice: '₹6,499',
    popular: true,
    badge: 'HIGH ROI',
    icon: 'TrendingUp',
    category: 'seo',
    features: [
      'On-Page & Technical SEO Audit',
      'High-Intent Keyword Targeting',
      'Google Search Console Setup',
      'High Authority Backlinks Strategy',
      'Speed & Performance Optimization'
    ]
  },
  {
    id: 'google-review',
    title: 'Google Top Review Service',
    subtitle: '5-Star Google Maps Reputation',
    description: 'Enhance your local credibility with genuine 5-star Google reviews and dominate your local market competitors.',
    price: '₹1,100',
    originalPrice: '₹2,999',
    popular: false,
    badge: 'TRUST BUILDER',
    icon: 'Star',
    category: 'reviews',
    features: [
      'Google Business Profile Optimization',
      'Verified 5-Star Customer Reviews',
      'Map Pack Local Ranking Boost',
      'Review Management & QR Flyers',
      'Increased Phone Call Inquiries'
    ]
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads',
    subtitle: 'High-ROI Facebook & Instagram Ads',
    description: 'Laser-targeted Facebook and Instagram ad campaigns engineered to generate qualified buyer leads, store visits, and explosive sales.',
    price: '₹300',
    originalPrice: '₹1,999',
    popular: true,
    badge: 'STARTER PRICE',
    icon: 'Target',
    category: 'ads',
    features: [
      'Pixel & Conversions API (CAPI) Setup',
      'Laser-Focused Audience & Geo-Targeting',
      'High-Converting Ad Creatives & Copy',
      'Instant WhatsApp Lead Routing',
      'A/B Split Testing & Budget Optimization'
    ]
  }
];

export const META_ADS_DURATION_TIERS: DurationTier[] = [];
export const DEFAULT_DURATION_TIERS = META_ADS_DURATION_TIERS;

import { Shield, Home, Car, Briefcase, User, LifeBuoy, Phone, Mail, MapPin } from 'lucide-react';

export const COMPANY_NAME = "Garriock Insurance";
export const PHONE_NUMBER = "(204) 123-4567"; // Placeholder
export const EMAIL_ADDRESS = "info@garriock.ca";
export const ADDRESS = "396 Main St, Winnipeg, MB"; // Placeholder based on typical location data

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES = [
  {
    id: 'home-insurance',
    title: 'Home Insurance',
    description: 'Protect your biggest investment with comprehensive coverage tailored to your property.',
    icon: Home,
    color: 'bg-blue-100 text-blue-700'
  },
  {
    id: 'auto-insurance',
    title: 'Auto Insurance',
    description: 'Get the right coverage for your vehicle with competitive rates and reliable claims support.',
    icon: Car,
    color: 'bg-indigo-100 text-indigo-700'
  },
  {
    id: 'commercial-insurance',
    title: 'Commercial Insurance',
    description: 'Safeguard your business operations with liability, property, and fleet insurance solutions.',
    icon: Briefcase,
    color: 'bg-slate-100 text-slate-700'
  },
  {
    id: 'life-insurance',
    title: 'Life & Wealth',
    description: 'Plan for the future with life insurance, critical illness coverage, and wealth management.',
    icon: LifeBuoy,
    color: 'bg-green-100 text-green-700'
  }
];

export const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner",
    content: "Garriock Insurance found us a better rate than our bank offered, with way better coverage. Highly recommended!",
    rating: 5
  },
  {
    name: "Mike Thompson",
    role: "Small Business Owner",
    content: "Professional, knowledgeable, and always quick to respond. They truly understand commercial insurance needs.",
    rating: 5
  },
  {
    name: "Emily Chen",
    role: "Auto Client",
    content: "Switching my auto insurance was painless. The team explained everything clearly and saved me money.",
    rating: 5
  }
];
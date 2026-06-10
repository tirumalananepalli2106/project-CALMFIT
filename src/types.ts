export interface Service {
  id: string;
  title: string;
  icon: string; // The Lucide icon string identifier
  description: string;
  detailedDescription: string;
  benefits: string[];
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'all' | 'coaching' | 'nutrition' | 'corporate' | 'mindfulness';
  clientName: string;
  timeframe: string;
  metric: string;
  beforeState: string;
  afterState: string;
  story: string;
  image: string;
}

export interface Testimonial {
  id: string;
  rating: number;
  text: string;
  userName: string;
  userRole: string;
  companyName?: string;
  avatar: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

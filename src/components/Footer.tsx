import React, { useState } from 'react';
import { Dumbbell, Send, CheckCircle2, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg('Please enter a valid email format.');
      return;
    }

    setErrorMsg('');
    setSubscribed(true);
    setEmail('');
    
    // Clear toast message after a small interval
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  const quickLinks = [
    { name: 'Back to Top', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services Suite', href: '#services' },
    { name: 'Why Calm Fit', href: '#why-us' },
    { name: 'Success Stories', href: '#portfolio' },
    { name: 'Expert Team', href: '#team' },
    { name: 'Health Blog', href: '#blog' },
  ];

  const servicesLinks = [
    { name: 'Personal Training', href: '#services' },
    { name: 'Nutrition Guidance', href: '#services' },
    { name: 'Corporate Programs', href: '#services' },
    { name: 'Online Portal Coaching', href: '#services' },
    { name: 'Group Fitness & Yoga', href: '#services' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-primary-dark text-slate-300 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Mesh dots overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10" id="footer-directory">
        
        {/* Bio segment */}
        <div className="lg:col-span-4 space-y-6">
          <a href="#home" id="footer-logo" className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-secondary-teal text-white shadow-lg">
              <Dumbbell className="h-5 w-5" />
            </div>
            <span className="font-heading font-extrabold text-2xl text-white tracking-wider">
              CALM<span className="text-secondary-teal">FIT</span>
            </span>
          </a>
          <p className="text-slate-400 text-sm leading-relaxed font-light">
            Calm Fit provides premium highly-integrated strength, structural mobility, clinical nutrition guidance, and corporate retreats designed around actual kinetic chemistry.
          </p>

          <div className="space-y-2.5 text-xs text-slate-400 font-light pr-4">
            <div className="flex gap-2 items-center"><MapPin className="h-3.5 w-3.5 text-secondary-teal" /> 555 Market St, San Francisco, CA</div>
            <div className="flex gap-2 items-center"><Phone className="h-3.5 w-3.5 text-secondary-teal" /> +1 (415) 350-9880</div>
            <div className="flex gap-2 items-center"><Mail className="h-3.5 w-3.5 text-secondary-teal" /> support@calmfitcoach.com</div>
          </div>
        </div>

        {/* Directory paths */}
        <div className="lg:col-span-2 space-y-5 block">
          <h4 className="text-white font-heading font-bold text-sm uppercase tracking-widest border-l-2 border-secondary-teal pl-2.5">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm" id="footer-quick-links">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-secondary-teal transition-colors flex items-center gap-1 group"
                >
                  <ChevronRight className="h-3 w-3 text-slate-600 group-hover:text-secondary-teal transition-colors" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our offerings directory */}
        <div className="lg:col-span-3 space-y-5 block">
          <h4 className="text-white font-heading font-bold text-sm uppercase tracking-widest border-l-2 border-secondary-teal pl-2.5">
            Services
          </h4>
          <ul className="space-y-2.5 text-sm" id="footer-services-links">
            {servicesLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-secondary-teal transition-colors flex items-center gap-1 group"
                >
                  <ChevronRight className="h-3 w-3 text-slate-600 group-hover:text-secondary-teal transition-colors" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter submit segment */}
        <div className="lg:col-span-3 space-y-5" id="footer-subscription">
          <h4 className="text-white font-heading font-bold text-sm uppercase tracking-widest border-l-2 border-secondary-teal pl-2.5">
            Newsletter
          </h4>
          <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
            Register your email to receive weekly metabolic nutrition charts and ergonomics stretch worksheets.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-2 text-left" noValidate>
            <div className="relative">
              <input
                type="email"
                placeholder="Name your email..."
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMsg('');
                }}
                className={`w-full px-5 py-3.5 bg-white/5 border text-xs sm:text-sm text-white rounded-full placeholder-slate-500 outline-none pr-14 focus:border-secondary-teal focus:bg-white/10 transition-colors ${
                  errorMsg ? 'border-rose-500' : 'border-white/10'
                }`}
              />
              <button
                type="submit"
                aria-label="Submit newsletter"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-secondary-teal hover:opacity-90 rounded-full text-white transition-all outline-none"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>

            {errorMsg && (
              <span className="text-rose-500 text-[10px] font-semibold block">{errorMsg}</span>
            )}

            {subscribed && (
              <div className="flex items-center gap-1.5 text-accent-green text-xs font-semibold" id="footer-toast">
                <CheckCircle2 className="h-4 w-4 shake" /> Weekly newsletter registered!
              </div>
            )}
          </form>
        </div>

      </div>

      {/* Policies & general legal indices */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-light" id="footer-policies">
        <div>
          © {currentYear} Calm Fit. All rights reserved globally.
        </div>
        
        {/* Support legal buttons */}
        <div className="flex flex-wrap gap-6 justify-center">
          <a href="#" className="hover:text-secondary-teal transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-secondary-teal transition-colors">Terms & Conditions</a>
          <a href="#" className="hover:text-secondary-teal transition-colors">Calm Fit Licensing</a>
          <a href="#" className="hover:text-secondary-teal transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Success Stories', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-900 border-b border-slate-100'
          : 'bg-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" id="nav-logo" className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                isScrolled ? 'bg-primary-dark text-white' : 'bg-white text-primary-dark shadow-lg shadow-black/10'
              }`}>
                <div className="w-5 h-5 border-3 border-accent-green rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div>
                </div>
              </div>
              <span className={`font-heading font-extrabold text-2xl tracking-tight transition-colors ${
                isScrolled ? 'text-primary-dark' : 'text-white'
              }`}>
                CALM<span className="text-secondary-teal">FIT</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => {
              const cleanedId = link.href.substring(1);
              const isActive = activeSection === cleanedId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${cleanedId}`}
                  className={`px-3 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 outline-none ${
                    isActive
                      ? isScrolled
                        ? 'bg-primary-dark/10 text-primary-dark'
                        : 'bg-white/20 text-white'
                      : isScrolled
                      ? 'text-primary-dark hover:text-secondary-teal hover:bg-slate-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#contact"
              id="nav-consultation-btn"
              className={`ml-4 px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-widest transition-all active:scale-95 duration-200 ${
                isScrolled
                  ? 'bg-secondary-teal text-white hover:opacity-95 shadow-md shadow-secondary-teal/15'
                  : 'bg-white text-primary-dark hover:bg-[#7ED957] hover:text-primary-dark hover:shadow-lg'
              }`}
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-nav-toggle"
              aria-label="Toggle menu"
              className={`p-2.5 rounded-lg transition-colors focus:outline-none ${
                isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 max-h-screen overflow-hidden ${
          isOpen ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 -translate-y-2'
        }`}
      >
        <div className="px-3 pt-2 pb-6 space-y-1 bg-white border-b border-slate-200 shadow-xl">
          {navLinks.map((link) => {
            const cleanedId = link.href.substring(1);
            const isActive = activeSection === cleanedId;
            return (
              <a
                key={link.name}
                href={link.href}
                id={`mobile-nav-link-${cleanedId}`}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-primary-dark/10 text-primary-dark'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-primary-dark'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-4 px-4">
            <a
              href="#contact"
              id="mobile-nav-consult-btn"
              onClick={() => setIsOpen(false)}
              className="block w-full py-3.5 px-4 rounded-full bg-secondary-teal text-center text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-secondary-teal/20 transition-all"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

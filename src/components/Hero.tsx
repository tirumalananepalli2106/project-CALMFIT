import { motion } from 'motion/react';
import { HERO_CONTENT } from '../data';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-dark pt-20"
    >
      {/* Background Animated Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-radial-[circle_at_top_right] from-primary-light/50 via-primary-dark/95 to-primary-dark/100" />

      {/* Decorative Floating Blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary-teal/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl wave-animation" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Text Area */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent-green text-xs font-extrabold uppercase tracking-widest backdrop-blur-md"
            id="hero-badge"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent-green" /> Premium Wellness Excellence
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            id="hero-headline"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {HERO_CONTENT.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            id="hero-subheadline"
            className="text-lg text-slate-350 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            {HERO_CONTENT.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            id="hero-ctas"
          >
            <a
              href="#services"
              id="hero-get-started-btn"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent-green hover:brightness-105 text-primary-dark font-extrabold uppercase tracking-wider text-xs transition-all active:scale-95 duration-200"
            >
              Get Started Today <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a
              href="#contact"
              id="hero-consult-btn"
              className="flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all active:scale-95 duration-200"
            >
              View Programs
            </a>
          </motion.div>

          {/* Core highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10"
            id="hero-bullets"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">1,000+</div>
              <div className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-semibold">Clients Trained</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">98%</div>
              <div className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-semibold">Success Rate</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Elite</div>
              <div className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-semibold">Coaching Staff</div>
            </div>
          </motion.div>
        </div>

        {/* Brand Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-5 relative"
          id="hero-image-wrapper"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary-teal/30 to-accent-green/10 rounded-2xl blur-2xl transform scale-95" />
          <div className="relative border-4 border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-slate-900/40">
            <img
              src={HERO_CONTENT.heroImage}
              alt="Calm Fit Coach Session"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-750"
              id="hero-main-img"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

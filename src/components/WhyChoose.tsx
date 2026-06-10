import { motion } from 'motion/react';
import { FEATURES } from '../data';
import { Award, Sliders, HeartPulse, Clock, LineChart, Heart } from 'lucide-react';

export default function WhyChoose() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="h-6 w-6" />;
      case 'Sliders':
        return <Sliders className="h-6 w-6" />;
      case 'HeartPulse':
        return <HeartPulse className="h-6 w-6" />;
      case 'Clock':
        return <Clock className="h-6 w-6" />;
      case 'LineChart':
        return <LineChart className="h-6 w-6" />;
      case 'Heart':
        return <Heart className="h-6 w-6" />;
      default:
        return <Award className="h-6 w-6" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-secondary-teal tracking-widest uppercase block mb-3">Our Competitive Edge</span>
          <h2 id="why-choose-title" className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight mb-4">
            Why Hundreds Choose Calm Fit
          </h2>
          <div className="h-1 w-16 bg-secondary-teal mx-auto mb-6 rounded-full" />
          <p className="text-slate-500 max-w-xl mx-auto">
            We reject standard cookie-cutter routines. We construct calculated lifestyle programs focusing on real biological advancement.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          id="features-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURES.map((feat) => (
            <motion.div
              key={feat.id}
              variants={itemVariants}
              whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
              className="relative p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all group overflow-hidden"
              id={`feature-card-${feat.id}`}
            >
              {/* Highlight Hover Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/[0.015] to-secondary-teal/[0.015] group-hover:from-primary-dark/[0.03] group-hover:to-secondary-teal/[0.03] transition-colors" />

              {/* Icon Container */}
              <div className="relative h-11 w-11 rounded-xl bg-teal-50 text-secondary-teal flex items-center justify-center mb-6 group-hover:bg-primary-dark group-hover:text-white transition-all shadow-sm">
                {getIcon(feat.icon)}
              </div>

              {/* Text info */}
              <h3 className="relative font-heading font-extrabold text-lg text-slate-800 mb-3 tracking-tight">
                {feat.title}
              </h3>
              <p className="relative text-slate-500 text-sm leading-relaxed">
                {feat.description}
              </p>
              
              {/* Bottom decorative accents */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-secondary-teal group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Promotional Banner Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-primary-dark rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
          id="why-choose-banner"
        >
          {/* Blur circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent-green/5 rounded-full blur-2xl" />

          <div className="space-y-3 relative z-10">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Ready to claim your peak physical state?
            </h3>
            <p className="text-slate-300 max-w-xl text-sm sm:text-base font-light">
              Connect with Alexander and our team of clinical nutrition specialists for a custom metabolic physical review.
            </p>
          </div>

          <a
            href="#contact"
            id="banner-cta-btn"
            className="relative z-10 px-8 py-4 bg-accent-green hover:brightness-105 text-primary-dark font-extrabold uppercase tracking-widest text-xs rounded-xl shadow-lg shadow-accent-green/10 active:scale-95 transition-all shrink-0 whitespace-nowrap"
          >
            Claim Your Assessment Now
          </a>
        </motion.div>

      </div>
    </section>
  );
}

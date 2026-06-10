import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { Service } from '../types';
import { Dumbbell, Utensils, Briefcase, Smartphone, Sparkles, CheckCircle2, X } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return <Dumbbell className="h-6 w-6" />;
      case 'Utensils':
        return <Utensils className="h-6 w-6" />;
      case 'Briefcase':
        return <Briefcase className="h-6 w-6" />;
      case 'Smartphone':
        return <Smartphone className="h-6 w-6" />;
      case 'Sparkles':
        return <Sparkles className="h-6 w-6" />;
      default:
        return <Dumbbell className="h-6 w-6" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-secondary-teal tracking-widest uppercase block mb-3">Our Core Expertise</span>
          <h2 id="services-title" className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight mb-4">
            Custom-Forged Performance Solutions
          </h2>
          <div className="h-1 w-16 bg-secondary-teal mx-auto mb-6 rounded-full" />
          <p className="text-slate-500 max-w-xl mx-auto">
            Explore our specialized suites designed to transition you from where you are to your absolute physiological peak.
          </p>
        </div>

        {/* Services Grid */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, index) => {
            // Pick a clean background accent color based on service index
            const bgAccents = [
              'bg-teal-50 text-secondary-teal',
              'bg-green-50 text-accent-green',
              'bg-blue-50 text-[#1E3A5F]',
              'bg-orange-50 text-orange-500',
              'bg-purple-50 text-purple-500'
            ];
            const accentClass = bgAccents[index % bgAccents.length];

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col justify-between bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300"
                id={`service-card-${srv.id}`}
              >
                <div>
                  {/* Icon Square with Pastel Background */}
                  <div className={`h-11 w-11 rounded-xl ${accentClass} flex items-center justify-center mb-6 transition-all group-hover:scale-105 shadow-sm`}>
                    {getIcon(srv.icon)}
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-primary-dark mb-2 tracking-tight">
                    {srv.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedService(srv)}
                  id={`learn-more-btn-${srv.id}`}
                  className="mt-4 text-secondary-teal text-xs font-extrabold uppercase tracking-widest text-left hover:text-primary-dark transition-colors flex items-center gap-1.5 outline-none cursor-pointer"
                >
                  Learn More <span className="transition-transform group-hover:translate-x-1 duration-200">&#8594;</span>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Learn More Overlay Modal */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6" id="service-modal-overlay">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-primary-dark/80 backdrop-blur-sm"
              />

              {/* Modal Content Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[85vh] overflow-y-auto"
                id="service-modal"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-black transition-colors"
                  id="close-service-modal-btn"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Left Side: Illustration / Image representative */}
                <div className="md:col-span-5 h-48 md:h-full relative bg-slate-950">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-90"
                    id="modal-service-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary-teal flex items-center gap-1.5">
                      {getIcon(selectedService.icon)} Calm Fit Premium
                    </span>
                  </div>
                </div>

                {/* Right Side: Detailed copy text and list */}
                <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-primary-dark mb-1">
                        {selectedService.title}
                      </h3>
                      <p className="text-secondary-teal font-medium text-sm">Professional Wellness Solutions</p>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                      {selectedService.detailedDescription}
                    </p>

                    <div>
                      <h4 className="font-bold text-slate-800 text-sm uppercase tracking-widest mb-3">Key Solutions Included:</h4>
                      <ul className="space-y-2.5">
                        {selectedService.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-slate-600 text-sm">
                            <CheckCircle2 className="h-5 w-5 text-accent-green flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Immediate Action CTAs */}
                  <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4 mt-8">
                    <a
                      href="#contact"
                      onClick={() => {
                        setSelectedService(null);
                        // We can set a custom global element action to autofill or select.
                        const selectEl = document.getElementById('contact-interest') as HTMLSelectElement;
                        if (selectEl) {
                          selectEl.value = selectedService.title;
                        }
                      }}
                      className="flex-1 text-center py-3.5 bg-secondary-teal hover:bg-secondary-teal/90 text-white font-bold rounded-xl shadow-lg shadow-secondary-teal/15 transition-all text-sm tracking-wide"
                      id="modal-book-consult-btn"
                    >
                      Book Free Consultation
                    </a>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-sm transition-colors"
                      id="modal-close-body-btn"
                    >
                      Back to Services
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

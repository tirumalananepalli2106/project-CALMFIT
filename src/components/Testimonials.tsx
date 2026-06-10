import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Autoplay intervals to keep it active
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000);
    return () => clearInterval(slideInterval);
  }, []);

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden relative">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-secondary-teal/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-60 h-60 bg-accent-green/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-secondary-teal tracking-widest uppercase block mb-3">Client Backing</span>
          <h2 id="testimonials-title" className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight mb-4">
            Hear From Our Community
          </h2>
          <div className="h-1 w-16 bg-secondary-teal mx-auto mb-4 rounded-full" />
          <p className="text-slate-500 text-sm sm:text-base">
            Verified accounts from people and teams who completely rebuilt their structural endurance levels under our care.
          </p>
        </div>

        {/* Carousel Block */}
        <div className="relative min-h-[360px] sm:min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.4 }}
              className="w-full bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-8 items-center"
              id={`testimonial-slide-${currentIndex}`}
            >
              {/* Reviewer Profile Photo */}
              <div className="relative shrink-0" id={`testimonial-author-${currentIndex}`}>
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-secondary-teal text-white flex items-center justify-center shadow-md">
                  <Quote className="h-4 w-4" />
                </div>
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.userName}
                  referrerPolicy="no-referrer"
                  className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl object-cover ring-4 ring-slate-100 shadow-md"
                />
              </div>

              {/* Review details */}
              <div className="space-y-4 text-center md:text-left flex-1">
                {/* 5 Stars */}
                <div className="flex items-center justify-center md:justify-start gap-1">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent-green fill-accent-green" />
                  ))}
                </div>

                {/* Narrative text */}
                <p className="text-slate-600 text-base sm:text-lg italic font-light leading-relaxed">
                  "{activeTestimonial.text}"
                </p>

                {/* Reviewer signature */}
                <div>
                  <h4 className="font-heading font-extrabold text-slate-800 text-base sm:text-lg">
                    {activeTestimonial.userName}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    {activeTestimonial.userRole}
                    {activeTestimonial.companyName && (
                      <span className="text-secondary-teal font-semibold"> @ {activeTestimonial.companyName}</span>
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            id="testimonial-prev-arrow"
            className="absolute left-[-20px] md:left-[-32px] top-1/2 -translate-y-1/2 p-3 bg-white hover:bg-slate-50 text-slate-700 hover:text-black rounded-full shadow-lg border border-slate-100 z-20 outline-none hover:scale-105 active:scale-95 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            id="testimonial-next-arrow"
            className="absolute right-[-20px] md:right-[-32px] top-1/2 -translate-y-1/2 p-3 bg-white hover:bg-slate-50 text-slate-700 hover:text-black rounded-full shadow-lg border border-slate-100 z-20 outline-none hover:scale-105 active:scale-95 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots Navigator */}
        <div className="flex justify-center gap-2 mt-8" id="testimonial-dots">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              id={`testimonial-dot-${idx}`}
              className={`h-2.5 transition-all duration-300 rounded-full outline-none ${
                currentIndex === idx ? 'w-8 bg-secondary-teal' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

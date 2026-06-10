import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../data';
import { PortfolioItem } from '../types';
import { TrendingUp, Clock, User, ArrowRight, Compass } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState<'all' | 'coaching' | 'nutrition' | 'corporate' | 'mindfulness'>('all');

  const categories = [
    { name: 'All Case Studies', id: 'all' as const },
    { name: '1-on-1 Coaching', id: 'coaching' as const },
    { name: 'Nutrition Plans', id: 'nutrition' as const },
    { name: 'Corporate Wellness', id: 'corporate' as const },
    { name: 'Mindfulness & Yoga', id: 'mindfulness' as const },
  ];

  const filteredItems = filter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-secondary-teal tracking-widest uppercase block mb-3">Proven Impact</span>
          <h2 id="portfolio-title" className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight mb-4">
            Transformation Portfolio & Case Studies
          </h2>
          <div className="h-1 w-16 bg-secondary-teal mx-auto mb-6 rounded-full" />
          <p className="text-slate-500 max-w-xl mx-auto">
            Direct, data-driven proofs of health and metabolic elevation recorded across diverse body types and stress conditions.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="portfolio-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              id={`portfolio-tab-btn-${cat.id}`}
              className={`px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all outline-none ${
                filter === cat.id
                  ? 'bg-secondary-teal text-white shadow-md shadow-secondary-teal/15'
                  : 'bg-slate-50 text-slate-650 hover:bg-slate-100 hover:text-primary-dark'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Portfolio Dynamic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="portfolio-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: PortfolioItem) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col justify-between"
                id={`portfolio-card-${item.id}`}
              >
                <div>
                  {/* Top image/hero header */}
                  <div className="h-56 relative bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-80"
                      id={`portfolio-img-${item.id}`}
                    />
                    {/* Diagnostic Metric Badge */}
                    <div className="absolute top-4 left-4 bg-secondary-teal text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <TrendingUp className="h-3.5 w-3.5" /> {item.metric}
                    </div>

                    {/* Category Label bottom */}
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-md border border-white/10">
                      {item.category === 'coaching' && '1-on-1 Workout'}
                      {item.category === 'nutrition' && 'Metabolic Nutrition'}
                      {item.category === 'corporate' && 'Corporate Team'}
                      {item.category === 'mindfulness' && 'Vagal Restoration'}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <div>
                      <h3 className="font-heading font-extrabold text-xl text-primary-dark mb-1">
                        {item.title}
                      </h3>
                      {/* Meta pills */}
                      <div className="flex flex-wrap gap-4 items-center text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1"><User className="h-3.5 w-3.5 text-slate-400" /> {item.clientName}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-slate-400" /> {item.timeframe} Duration</span>
                      </div>
                    </div>

                    {/* Comparative State Boxes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-inner">
                      <div className="space-y-1">
                        <span className="text-[10px] font-extrabold text-rose-500 uppercase tracking-widest block">Before Program:</span>
                        <p className="text-xs text-slate-600 font-light leading-relaxed">{item.beforeState}</p>
                      </div>
                      <div className="space-y-1 sm:border-l sm:border-slate-100 sm:pl-4">
                        <span className="text-[10px] font-extrabold text-emerald-500 uppercase tracking-widest block">After Program:</span>
                        <p className="text-xs text-slate-700 font-medium leading-relaxed">{item.afterState}</p>
                      </div>
                    </div>

                    {/* Detailed Case narrative */}
                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                      {item.story}
                    </p>
                  </div>
                </div>

                {/* Footer action shortcut */}
                <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-slate-100 flex items-center justify-between font-sans">
                  <span className="text-[10px] font-extrabold text-primary-dark uppercase tracking-wider">Successful Case Study</span>
                  <a
                    href="#contact"
                    id={`portfolio-work-btn-${item.id}`}
                    className="flex items-center gap-1 text-xs font-extrabold uppercase tracking-widest text-secondary-teal hover:text-primary-dark transition-colors"
                  >
                    Discuss similar plan <span className="text-[13px]">&#8594;</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

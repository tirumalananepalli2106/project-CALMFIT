import { useEffect, useState, useRef } from 'react';
import { STATISTICS } from '../data';

export default function Statistics() {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  // Setup counting logic on load / when in viewport
  useEffect(() => {
    // Initial setup
    const initialCounts: Record<string, number> = {};
    STATISTICS.forEach((s) => {
      initialCounts[s.id] = 0;
    });
    setCounts(initialCounts);

    // Simple observer
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setHasStarted(true);
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 1500; // 1.5 seconds counting
    const steps = 40;
    const stepTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const nextCounts: Record<string, number> = {};

      STATISTICS.forEach((s) => {
        const target = s.value;
        const incremental = Math.floor((target / steps) * stepCount);
        if (incremental >= target || stepCount >= steps) {
          nextCounts[s.id] = target;
        } else {
          nextCounts[s.id] = incremental;
        }
      });

      setCounts(nextCounts);

      if (stepCount >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted]);

  return (
    <section
      id="statistics"
      ref={sectionRef}
      className="py-20 bg-primary-dark text-white relative overflow-hidden"
    >
      {/* Wave mesh overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

      {/* Radial ambient shine */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary-teal/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="stats-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {STATISTICS.map((stat) => (
            <div key={stat.id} className="space-y-4" id={`stat-item-${stat.id}`}>
              {/* Display metric raw value */}
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-secondary-teal">
                {(counts[stat.id] !== undefined ? counts[stat.id] : 0).toLocaleString()}
                <span className="text-accent-green text-3xl sm:text-4xl ml-0.5">{stat.suffix}</span>
              </div>
              
              {/* Labels info */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
                  {stat.label}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xs mx-auto font-light leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

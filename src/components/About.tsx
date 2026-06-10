import React from 'react';
import { motion } from 'motion/react';
import { ABOUT_CONTENT } from '../data';
import { Target, Eye, ShieldCheck, Heart, Sparkles, Trophy } from 'lucide-react';

export default function About() {
  const iconMap: Record<string, React.ReactNode> = {
    "Holistic Integrity": <ShieldCheck className="h-6 w-6 text-secondary-teal" />,
    "Empowered Autonomy": <Heart className="h-6 w-6 text-secondary-teal" />,
    "Science-Backed Innovation": <Sparkles className="h-6 w-6 text-secondary-teal" />,
    "Unyielding Inclusivity": <Trophy className="h-6 w-6 text-secondary-teal" />
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-secondary-teal tracking-widest uppercase block mb-3">Who We Are</span>
          <h2 id="about-title" className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight mb-6">
            Empowering Your True Physical and Mental Potential
          </h2>
          <div className="h-1 w-16 bg-secondary-teal mx-auto mb-6 rounded-full" />
          <p id="about-intro" className="text-slate-600 text-lg sm:text-xl leading-relaxed font-light">
            {ABOUT_CONTENT.introduction}
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start"
            id="about-mission-card"
          >
            <div className="p-4 bg-primary-dark/5 rounded-xl text-primary-dark flex-shrink-0">
              <Target className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">Our Mission Statement</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {ABOUT_CONTENT.mission}
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start"
            id="about-vision-card"
          >
            <div className="p-4 bg-secondary-teal/5 rounded-xl text-secondary-teal flex-shrink-0">
              <Eye className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">Our Vision Statement</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {ABOUT_CONTENT.vision}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary-dark">Our Unyielding Core Values</h3>
            <p className="text-slate-550 text-sm mt-2">The four pillars of excellence steering our daily training and behavior.</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            id="values-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {ABOUT_CONTENT.coreValues.map((val, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300"
                id={`core-value-${idx}`}
              >
                <div className="h-10 h-10 w-10 bg-teal-50 text-secondary-teal rounded-lg flex items-center justify-center mb-4">
                  {iconMap[val.title] || <Sparkles className="h-6 w-6 text-secondary-teal" />}
                </div>
                <h4 className="font-heading font-bold text-slate-800 text-lg mb-2">{val.title}</h4>
                <p className="text-slate-550 text-sm leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

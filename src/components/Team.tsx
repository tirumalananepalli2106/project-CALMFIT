import { motion } from 'motion/react';
import { TEAM } from '../data';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Team() {
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
    <section id="team" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-secondary-teal tracking-widest uppercase block mb-3">Our Core Experts</span>
          <h2 id="team-title" className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight mb-4">
            Meet Our Elite Coaching Staff
          </h2>
          <div className="h-1 w-16 bg-secondary-teal mx-auto mb-4 rounded-full" />
          <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
            Guiding you are specialists with advanced scientific degrees, clinical practice records, and absolute zeal for sustainable human potential.
          </p>
        </div>

        {/* Members Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          id="team-members-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
              id={`team-member-card-${member.id}`}
            >
              <div>
                {/* Image Section */}
                <div className="h-72 w-full overflow-hidden relative bg-slate-900 group">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-106 transition-transform duration-500"
                    id={`team-member-img-${member.id}`}
                  />
                  {/* Floating Social Media card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex gap-4">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          id={`${member.id}-social-linkedin`}
                          className="h-10 w-10 rounded-full bg-white text-primary-dark hover:bg-secondary-teal hover:text-white flex items-center justify-center shadow-md transition-colors"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          id={`${member.id}-social-twitter`}
                          className="h-10 w-10 rounded-full bg-white text-primary-dark hover:bg-secondary-teal hover:text-white flex items-center justify-center shadow-md transition-colors"
                          aria-label={`${member.name} Twitter`}
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                      {member.socials.instagram && (
                        <a
                          href={member.socials.instagram}
                          id={`${member.id}-social-instagram`}
                          className="h-10 w-10 rounded-full bg-white text-primary-dark hover:bg-secondary-teal hover:text-white flex items-center justify-center shadow-md transition-colors"
                          aria-label={`${member.name} Instagram`}
                        >
                          <Instagram className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Profile detail tags */}
                <div className="p-6">
                  <span className="text-[10px] font-bold tracking-widest text-secondary-teal uppercase block mb-1">
                    {member.position}
                  </span>
                  <h3 className="font-heading font-extrabold text-lg text-primary-dark mb-3">
                    {member.name}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Decorative base row */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>Calm Fit Certified Staff</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

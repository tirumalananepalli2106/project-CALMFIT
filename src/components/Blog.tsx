import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';
import { Clock, Calendar, ArrowRight, X, Heart, Award } from 'lucide-react';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-secondary-teal tracking-widest uppercase block mb-3">Health Insights</span>
          <h2 id="blog-title" className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight mb-4">
            Recent Articles & Expert Guides
          </h2>
          <div className="h-1 w-16 bg-secondary-teal mx-auto mb-4 rounded-full" />
          <p className="text-slate-500 text-sm sm:text-base">
            Stay up to date with clinically backed fitness, nutrition, and metabolic recovery blueprints curated directly by our coaching panel.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div id="blog-posts-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
              id={`blog-card-${post.id}`}
            >
              <div>
                {/* Image */}
                <div className="h-52 w-full relative bg-slate-900 overflow-hidden group">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-104 transition-transform duration-500"
                    id={`blog-card-img-${post.id}`}
                  />
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 bg-secondary-teal text-white text-[10px] uppercase tracking-wider font-extrabold px-3 py-1.5 rounded-full shadow-md">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  {/* Date & Time raw */}
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-primary-dark hover:text-secondary-teal transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Action row at bottom */}
              <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                {/* Author profile review */}
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    referrerPolicy="no-referrer"
                    className="h-8 w-8 rounded-full border border-slate-100 object-cover shadow-sm"
                  />
                  <span className="text-xs text-slate-600 font-medium">{post.author.name}</span>
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  id={`blog-read-more-btn-${post.id}`}
                  className="flex items-center gap-1 text-xs font-extrabold uppercase tracking-widest text-secondary-teal hover:text-primary-dark transition-colors cursor-pointer outline-none"
                >
                  Read More <span className="text-[13px]">&#8594;</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Dynamic Blog Overlay Reading Modal */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6" id="blog-modal-overlay">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPost(null)}
                className="absolute inset-0 bg-primary-dark/80 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                id="blog-modal"
              >
                {/* Title Close Bar sticky */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-100 sticky top-0 bg-white z-20">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary-teal">
                    {selectedPost.category} — Published Paper
                  </span>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-black transition-colors"
                    id="close-blog-modal-btn"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Main scrollable area */}
                <div className="overflow-y-auto p-4 sm:p-8 space-y-6 flex-1">
                  {/* Big Hero Banner */}
                  <div className="h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-slate-900">
                    <img
                      src={selectedPost.image}
                      alt={selectedPost.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Header Detail */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> Published {selectedPost.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {selectedPost.readTime}</span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-primary-dark leading-tight">
                      {selectedPost.title}
                    </h3>

                    {/* Author Stamp */}
                    <div className="flex items-center gap-3 py-3 border-y border-slate-100">
                      <img
                        src={selectedPost.author.avatar}
                        alt={selectedPost.author.name}
                        referrerPolicy="no-referrer"
                        className="h-10 w-10 rounded-full border border-slate-200 object-cover"
                      />
                      <div>
                        <div className="text-sm font-bold text-slate-800">{selectedPost.author.name}</div>
                        <div className="text-[10px] font-bold text-slate-400 capitalize">Calm Fit Contributor</div>
                      </div>
                    </div>
                  </div>

                  {/* Real, highly exhaustive reading materials */}
                  <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-light">
                    <p className="font-medium text-slate-800 text-base">
                      {selectedPost.excerpt}
                    </p>
                    <p>
                      {selectedPost.content}
                    </p>
                    <p>
                      Modern fast-paced work calendars place intense chronic adrenaline demands on the deep human core, often mimicking mild continuous survival threats. Metabolic performance is not merely about lifting heavier plates or starving cells on low calorie diets—it is purely about nervous rhythm, deep posture stability, bio-feedback, and intentional nutrient timing.
                    </p>
                    <blockquote className="bg-slate-50 border-l-4 border-secondary-teal p-4 rounded-r-xl my-6 text-sm italic font-light text-slate-700">
                      "True structural resilience requires synchronous training. Align your biomechanics physically, and feed your gut with clean whole-food formulas to optimize hormone responses naturally."
                    </blockquote>
                    <p>
                      We recommend incorporating structured daily walks, hydration milestones, and short movement routines into your workday block. If you are struggling, reach out to physical and nutritional coaches who understand the scientific connection of food, breath, and loading parameters.
                    </p>
                  </div>
                </div>

                {/* Footer bar */}
                <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3.5">
                  <button
                    onClick={() => {
                      setSelectedPost(null);
                      // Scroll to contact
                      document.getElementById('contact')?.scrollIntoView();
                    }}
                    className="px-6 py-2.5 bg-primary-dark text-white text-xs font-bold rounded-lg hover:bg-primary-light transition-colors"
                  >
                    Discuss With Author
                  </button>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Close Article
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

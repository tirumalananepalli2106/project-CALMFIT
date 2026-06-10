import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, Linkedin, Twitter, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    interest: 'Personal Training',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = 'Please provide your full name.';
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = 'An email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email format.';
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = 'Please provide your phone number.';
    } else if (!/^[+]?[0-9\s-]{7,15}$/.test(formData.phone)) {
      tempErrors.phone = 'Please enter a valid phone number format.';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Please write a short initial message explaining your constraints.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error as typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API storage call lag
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'Personal Training',
        message: '',
      });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-secondary-teal tracking-widest uppercase block mb-3">Get Started Today</span>
          <h2 id="contact-title" className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight mb-4">
            Book Your Free Consultation
          </h2>
          <div className="h-1 w-16 bg-secondary-teal mx-auto mb-4 rounded-full" />
          <p className="text-slate-500 max-w-lg mx-auto">
            Our specialists respond to custom training and dietary reviews within 24 business hours max.
          </p>
        </div>

        {/* Info & Form Flexboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-outer-board">
          
          {/* Left Block: Business details & Google Map */}
          <div className="lg:col-span-5 space-y-8" id="contact-business-info">
            
            <div className="bg-primary-dark text-white p-8 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden shadow-xl shadow-primary-dark/15">
              {/* Subtle background circles for depth */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-teal/5 rounded-full -mr-10 -mt-10" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-green/5 rounded-full -ml-8 -mb-8" />

              <h3 className="relative z-10 font-heading font-extrabold text-xl border-b border-white/10 pb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Calm Fit Offices
              </h3>

              <ul className="space-y-5 relative z-10">
                <li className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 bg-white/10 text-accent-green rounded-xl flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">Main Headquarters:</h4>
                    <p className="text-slate-300 text-sm mt-0.5 leading-relaxed">
                      555 Market Street, Suite 400, San Francisco, CA 94105
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 bg-white/10 text-accent-green rounded-xl flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">Customer Hotline:</h4>
                    <p className="text-slate-300 text-sm mt-0.5 leading-relaxed">
                      +1 (415) 350-9880
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 bg-white/10 text-accent-green rounded-xl flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">Direct Support Email:</h4>
                    <p className="text-slate-300 text-sm mt-0.5 leading-relaxed">
                      hello@calmfitcoach.com
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 bg-white/10 text-accent-green rounded-xl flex items-center justify-center">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">Operating Business Hours:</h4>
                    <p className="text-slate-300 text-sm mt-0.5 leading-mono text-[13px]">
                      Mon - Fri: 6:00 AM - 8:00 PM PST<br />
                      Sat: 8:00 AM - 4:00 PM PST
                    </p>
                  </div>
                </li>
              </ul>

              {/* Social Channels inside card */}
              <div className="pt-4 border-t border-white/10 relative z-10">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3.5">Sync Social Paths:</h4>
                <div className="flex gap-3">
                  <a href="#" className="h-9 w-9 bg-white/10 hover:bg-secondary-teal text-white flex items-center justify-center rounded-xl transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="h-9 w-9 bg-white/10 hover:bg-secondary-teal text-white flex items-center justify-center rounded-xl transition-colors" aria-label="Twitter">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href="#" className="h-9 w-9 bg-white/10 hover:bg-secondary-teal text-white flex items-center justify-center rounded-xl transition-colors" aria-label="Instagram">
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Box Embedded */}
            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-md h-64 relative bg-slate-100" id="contact-map-wrapper">
              <iframe
                title="Calm Fit Physical Google Map HQ Pin"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.181816551801!2d-122.4194155!3d37.7749293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807bedb1124f%3A0xe6bf44b4458f338!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                id="contact-map-iframe"
              />
              {/* Interactive badge overlay */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-100 flex items-center gap-2 text-xs font-semibold text-primary-dark shadow-md">
                <MapPin className="h-3.5 w-3.5 text-secondary-teal" /> Silicon Valley, CA
              </div>
            </div>

          </div>

          {/* Right Block: Comprehensive Form validation widget */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-slate-100 shadow-xl rounded-3xl" id="contact-form-widget">
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 space-y-5"
                id="contact-submitted-box"
              >
                <div className="h-16 w-16 bg-accent-green/10 text-accent-green rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="h-10 w-10 animate-bounce" />
                </div>
                <h3 className="font-heading text-2xl font-extrabold text-primary-dark">
                  Consultation Request Sent!
                </h3>
                <p className="text-slate-500 max-w-md mx-auto text-sm sm:text-base leading-relaxed font-light">
                  Thank you for taking action toward custom peak performance. Alexander Chase's physical coordination associate has received your parameters and will trigger a custom response over phone and email within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 bg-primary-dark hover:bg-primary-light text-white font-bold rounded-xl transition-colors text-sm shadow-md"
                  id="reset-form-btn"
                >
                  Submit Another Consultation
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="consult-lead-form" noValidate>
                <div className="space-y-1">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary-dark">
                    Tell Us Your Core Objectives
                  </h3>
                  <p className="text-xs text-slate-400">Share your details and training goals; our physical specialists map out your program.</p>
                </div>

                {/* Name field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-bold text-slate-700 uppercase tracking-widest">Full Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. David Jenkins"
                    className={`px-4 py-3.5 rounded-xl border bg-slate-50 text-sm outline-none transition-all ${
                      errors.name ? 'border-rose-500 focus:ring-1 focus:ring-rose-500 focus:bg-white' : 'border-slate-200 focus:border-secondary-teal focus:ring-1 focus:ring-secondary-teal focus:bg-white'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-rose-500 text-[11px] font-semibold flex items-center gap-1 mt-0.5"><AlertCircle className="h-3 w-3" /> {errors.name}</span>
                  )}
                </div>

                {/* Email / Phone grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex flex-col gap-1.5 block">
                    <label htmlFor="contact-email" className="text-xs font-bold text-slate-700 uppercase tracking-widest">Email Address *</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. jenkins@techmail.com"
                      className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50 text-sm outline-none transition-all ${
                        errors.email ? 'border-rose-500 focus:ring-1 focus:ring-rose-500 focus:bg-white' : 'border-slate-200 focus:border-secondary-teal focus:ring-1 focus:ring-secondary-teal focus:bg-white'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-rose-500 text-[11px] font-semibold flex items-center gap-1 mt-0.5"><AlertCircle className="h-3 w-3" /> {errors.email}</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5 block">
                    <label htmlFor="contact-phone" className="text-xs font-bold text-slate-700 uppercase tracking-widest">Phone Number *</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +1 415-555-0925"
                      className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50 text-sm outline-none transition-all ${
                        errors.phone ? 'border-rose-500 focus:ring-1 focus:ring-rose-500 focus:bg-white' : 'border-slate-200 focus:border-secondary-teal focus:ring-1 focus:ring-secondary-teal focus:bg-white'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-rose-500 text-[11px] font-semibold flex items-center gap-1 mt-0.5"><AlertCircle className="h-3 w-3" /> {errors.phone}</span>
                    )}
                  </div>
                </div>

                {/* Interest Service Dropdown selector */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-interest" className="text-xs font-bold text-slate-700 uppercase tracking-widest">Core Interest Area</label>
                  <select
                    id="contact-interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm outline-none focus:border-secondary-teal focus:ring-1 focus:ring-secondary-teal font-medium"
                  >
                    <option value="Personal Training">Personal Training (1-on-1 Specialist)</option>
                    <option value="Nutrition Guidance">Nutrition Guidance (Metabolic Alignment)</option>
                    <option value="Corporate Wellness Programs">Corporate Wellness Programs (High Morale Team)</option>
                    <option value="Online Coaching">Online Coaching (Digital Portal)</option>
                    <option value="Group Fitness Programs">Group Fitness & Yoga Flows (Communal Restorative)</option>
                  </select>
                </div>

                {/* Message block */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-xs font-bold text-slate-700 uppercase tracking-widest">Notes & Health Constraints *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us briefly about your current health standing, physical limitations, injury timeline, or corporate department team scale."
                    className={`px-4 py-3.5 rounded-xl border bg-slate-50 text-sm outline-none transition-all resize-none ${
                      errors.message ? 'border-rose-500 focus:ring-1 focus:ring-rose-500 focus:bg-white' : 'border-slate-200 focus:border-secondary-teal focus:ring-1 focus:ring-secondary-teal focus:bg-white'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-rose-500 text-[11px] font-semibold flex items-center gap-1 mt-0.5"><AlertCircle className="h-3 w-3" /> {errors.message}</span>
                  )}
                </div>

                {/* Active submit key trigger */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="contact-submit-btn"
                  className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-sm transition-all focus:outline-none shadow-md ${
                    isSubmitting
                      ? 'bg-primary-dark/65 text-slate-300 cursor-not-allowed'
                      : 'bg-primary-dark hover:bg-primary-light text-white active:scale-99'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-slate-400 border-t-white rounded-full animate-spin" />
                      Securing Submission Details...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Trigger Clinical Assessment
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

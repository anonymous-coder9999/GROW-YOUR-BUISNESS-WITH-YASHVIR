import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, Sparkles, CheckCircle2, ShieldCheck, Zap, Globe2 } from 'lucide-react';
import { ThreeDHeroGraphic } from './ThreeDHeroGraphic';

interface HeroSectionProps {
  onExploreServices: () => void;
  onOpenOrderModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
  onOpenOrderModal
}) => {
  const whatsappUrl = "https://wa.me/919394389413?text=Hi%20GROWUP!%20I'm%20ready%20to%20grow%20my%20business.";

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-white">
      {/* Background Soft Ambient Spotlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-100/60 via-blue-100/40 to-indigo-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Top Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-900 mb-6 shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-cyan-600 animate-pulse" />
              <span>Digital Growth Engine</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-emerald-700 font-black">Meta Ads from ₹300 • Services at ₹1,100</span>
            </motion.div>

            {/* Main Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-zinc-900 tracking-tight leading-[1.15]"
            >
              We Help Small Businesses{' '}
              <span className="text-cyan-700 underline decoration-cyan-400/60 underline-offset-8">
                Grow Globally.
              </span>
            </motion.h1>

            {/* Subheading Value Prop */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Get high-converting websites, Meta & Instagram ads, 24/7 AI automation bots, Google #1 search SEO, and 5-star review acceleration — with Meta Ads starting at <strong className="text-indigo-700 font-bold">₹300 Starter Price</strong> and flat <strong className="text-emerald-700 font-bold">₹1,100</strong> for core growth services.
            </motion.p>

            {/* Key Value Points Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-bold"
            >
              <div className="flex items-center gap-1.5 text-cyan-700">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>24-48h Delivery</span>
              </div>
              <div className="flex items-center gap-1.5 text-indigo-700">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span>₹300 Meta Ads Starter</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Direct WhatsApp Support</span>
              </div>
            </motion.div>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#services"
                onClick={onExploreServices}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-sm bg-black hover:bg-zinc-800 text-white shadow-lg transform hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span className="tracking-wide">Explore Services & Plans</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Order Now (9394389413)</span>
              </button>
            </motion.div>

            {/* Social Proof / Metrics Stats Ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-zinc-200 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-black font-heading text-zinc-900">500+</p>
                <p className="text-xs text-cyan-700 font-semibold mt-0.5">Businesses Scaled</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black font-heading text-indigo-700">₹300</p>
                <p className="text-xs text-indigo-700 font-semibold mt-0.5">Meta Ads Starter</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black font-heading text-emerald-700">₹1,100</p>
                <p className="text-xs text-emerald-700 font-semibold mt-0.5">Standard Services</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Clean Studio Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <ThreeDHeroGraphic />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

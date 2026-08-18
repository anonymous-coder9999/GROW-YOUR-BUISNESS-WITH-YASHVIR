import React from 'react';
import { motion } from 'motion/react';
import { Globe, TrendingUp, Bot, Star, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ThreeDHeroGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center py-4">
      
      {/* Main Studio Preview Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md bg-white rounded-3xl p-7 border border-zinc-200 shadow-xl flex flex-col justify-between text-zinc-900"
      >
        {/* Top Decorative Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-black rounded-t-3xl" />

        {/* Card Header */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
              DIGITAL SCALE STUDIO
            </span>
            <span className="text-[11px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              ₹300 STARTER
            </span>
          </div>

          <h3 className="text-2xl font-black text-zinc-900 font-heading tracking-tight">
            Small Business Growth Engine
          </h3>
          <p className="text-xs text-cyan-800 mt-1 font-semibold">
            Websites, Meta Ads, 24/7 AI Automation & Local SEO Systems
          </p>
        </div>

        {/* Central Metric Spotlight */}
        <div className="my-6 p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between shadow-xs">
          <div>
            <span className="text-[10px] uppercase font-bold text-zinc-500 block tracking-wider">
              Transparent Pricing
            </span>
            <span className="text-xl font-black text-cyan-800">
              Starts From ₹300
            </span>
          </div>
          <div className="w-11 h-11 rounded-xl bg-cyan-100 border border-cyan-200 flex items-center justify-center text-cyan-800">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>

        {/* Live Service Suite Summary */}
        <div className="space-y-2.5 text-xs text-zinc-700 font-semibold pt-2 border-t border-zinc-200">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
            <span>High-Speed Website Development (<strong className="text-emerald-700 font-black">₹1,100</strong>)</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Meta & Instagram Ads (<strong className="text-indigo-700 font-black">₹300 Starter Price</strong>)</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
            <span>24/7 AI Lead & Chatbot Automation (<strong className="text-emerald-700 font-black">₹1,100</strong>)</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Google #1 Ranking & 5-Star Reviews (<strong className="text-emerald-700 font-black">₹1,100</strong>)</span>
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center justify-between text-[11px] text-zinc-600 font-bold">
          <div className="flex items-center gap-1.5 text-cyan-800">
            <ShieldCheck className="w-4 h-4 text-cyan-700" />
            <span>100% Guaranteed Delivery</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-800">
            <Star className="w-3.5 h-3.5 text-yellow-500 fill-current" />
            <span>4.9/5 Rating</span>
          </div>
        </div>

      </motion.div>

    </div>
  );
};

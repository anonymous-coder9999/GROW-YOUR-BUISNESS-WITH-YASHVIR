import React from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, MessageCircle, Globe2, Sparkles, ArrowUpRight } from 'lucide-react';
import { WHY_CHOOSE_DATA } from '../data/whyChooseData';
import { TiltCard } from './TiltCard';

export const WhyChooseSection: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-6 h-6 text-cyan-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-purple-600" />;
      case 'MessageCircle': return <MessageCircle className="w-6 h-6 text-emerald-600" />;
      case 'Globe2': return <Globe2 className="w-6 h-6 text-blue-600" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-900 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 animate-pulse" />
            <span>Built For Small Business Success</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-zinc-900 tracking-tight">
            Why Choose{' '}
            <span className="text-cyan-700">
              GROW BUISNESS?
            </span>
          </h2>

          <p className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed font-medium">
            We eliminate complexity and high agency retainers. Get global-grade digital tools built rapidly by <strong className="text-zinc-900">Yashvir Paul</strong> at a fraction of standard cost.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_DATA.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className="bg-white h-full rounded-3xl p-6 border border-zinc-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative group overflow-hidden">
                  
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                        {getFeatureIcon(feature.icon)}
                      </div>
                      <span className="text-xl font-black font-heading text-purple-600">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black bg-cyan-100 text-cyan-800 border border-cyan-300 mb-3">
                      {feature.badge}
                    </span>

                    <h3 className="text-lg font-bold font-heading text-zinc-900 mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-500">Key Metric:</span>
                    <span className="text-xs font-black font-heading text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md border border-emerald-300">
                      {feature.stat}
                    </span>
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

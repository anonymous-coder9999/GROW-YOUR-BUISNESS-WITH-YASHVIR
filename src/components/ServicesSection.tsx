import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Bot, Share2, TrendingUp, Star, Target, CheckCircle2, ArrowUpRight, Sparkles, ShoppingBag } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { Service } from '../types';
import { TiltCard } from './TiltCard';

interface ServicesSectionProps {
  onSelectServiceForModal: (service: Service) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-600" />;
      case 'Bot': return <Bot className="w-6 h-6 text-purple-600" />;
      case 'Share2': return <Share2 className="w-6 h-6 text-blue-600" />;
      case 'Target': return <Target className="w-6 h-6 text-indigo-600" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      case 'Star': return <Star className="w-6 h-6 text-amber-500 fill-current" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-600" />;
    }
  };

  const createWhatsAppUrl = (service: Service) => {
    if (service.id === 'meta-ads') {
      const text = encodeURIComponent(
        `Hi GROWUP! I want to order Meta Ads (₹300 Starter Price). Please guide me on getting started.`
      );
      return `https://wa.me/919394389413?text=${text}`;
    }
    const text = encodeURIComponent(
      `Hi GROWUP! I want to order ${service.title} for ${service.price}.`
    );
    return `https://wa.me/919394389413?text=${text}`;
  };

  return (
    <section id="services" className="py-20 relative bg-white">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-900 mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-cyan-600 animate-pulse" />
            <span>Digital Growth Suite • Unbeatable Prices</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-zinc-900 tracking-tight">
            High-Impact Services for{' '}
            <span className="text-cyan-700">
              Modern Businesses
            </span>
          </h2>

          <p className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed font-medium">
            Everything you need to launch, automate, market, and dominate your local and global market at transparent flat rates.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All 6 Services' },
              { id: 'web', label: 'Website Dev' },
              { id: 'ai', label: 'AI Automation' },
              { id: 'social', label: 'Social Media' },
              { id: 'ads', label: 'Meta Ads' },
              { id: 'seo', label: 'SEO Boost' },
              { id: 'reviews', label: 'Google Reviews' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-black text-white shadow-md border border-black'
                    : 'bg-zinc-100 text-zinc-700 hover:text-black border border-zinc-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const isMetaAds = service.id === 'meta-ads';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard className="h-full">
                  <div className={`bg-white h-full rounded-3xl p-7 flex flex-col justify-between relative group overflow-hidden border shadow-md hover:shadow-xl transition-all ${
                    isMetaAds ? 'border-indigo-300 ring-1 ring-indigo-200' : 'border-zinc-200'
                  }`}>
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5">
                      {service.badge && (
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border shadow-xs ${
                          isMetaAds
                            ? 'bg-indigo-100 text-indigo-900 border-indigo-300'
                            : service.popular
                              ? 'bg-cyan-100 text-cyan-800 border-cyan-300'
                              : 'bg-purple-100 text-purple-800 border-purple-300'
                        }`}>
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <div>
                      {/* Icon & Category Header */}
                      <div className="w-12 h-12 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 transition-transform duration-300">
                        {getServiceIcon(service.icon)}
                      </div>

                      <h3 className="text-xl font-bold font-heading text-zinc-900 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs font-bold text-cyan-800 mt-0.5">
                        {service.subtitle}
                      </p>

                      <p className="mt-3 text-xs text-zinc-600 leading-relaxed font-medium">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="mt-5 space-y-2.5 pt-4 border-t border-zinc-100">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs font-semibold text-zinc-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing & CTA Buttons */}
                    <div className="mt-8 pt-5 border-t border-zinc-100">
                      
                      {/* Price Section */}
                      {isMetaAds ? (
                        <div className="flex items-baseline justify-between mb-4">
                          <div>
                            <div className="flex items-baseline gap-2">
                              <span className="text-3xl font-black font-heading text-emerald-700">
                                ₹300
                              </span>
                              <span className="text-xs text-zinc-400 line-through font-bold">
                                {service.originalPrice}
                              </span>
                            </div>
                            <span className="text-xs font-black text-indigo-700 uppercase tracking-wider block mt-0.5">
                              Starter Price
                            </span>
                          </div>
                          <span className="text-[10px] font-black text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
                            ₹300 STARTER
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-baseline justify-between mb-4">
                          <div>
                            <span className="text-3xl font-black font-heading text-emerald-700">
                              {service.price}
                            </span>
                            <span className="text-xs text-zinc-400 line-through font-bold ml-2">
                              {service.originalPrice}
                            </span>
                          </div>
                          <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-300">
                            SAVE 78%
                          </span>
                        </div>
                      )}

                      {/* Same standard Buttons for all services with 'Order' */}
                      <div className="grid grid-cols-2 gap-2">
                        {/* Direct Order Link */}
                        <a
                          href={createWhatsAppUrl(service)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-3 px-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-xs flex items-center justify-center gap-1 text-center cursor-pointer"
                        >
                          <span>Order</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>

                        {/* Customize Modal Launcher */}
                        <button
                          onClick={() => onSelectServiceForModal(service)}
                          className="py-3 px-3 rounded-xl text-xs font-bold bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 text-zinc-800 transition-all shadow-xs flex items-center justify-center gap-1 text-center cursor-pointer"
                        >
                          <ShoppingBag className="w-3.5 h-3.5 text-zinc-600" />
                          <span>Customize</span>
                        </button>
                      </div>

                    </div>

                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

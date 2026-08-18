import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { TiltCard } from './TiltCard';

export const GrowthCalculator: React.FC = () => {
  const [monthlyLeads, setMonthlyLeads] = useState(25);
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([
    'web-dev',
    'meta-ads',
    'seo-optimization'
  ]);

  const toggleService = (id: string) => {
    if (selectedServiceIds.includes(id)) {
      if (selectedServiceIds.length > 1) {
        setSelectedServiceIds(selectedServiceIds.filter((s) => s !== id));
      }
    } else {
      setSelectedServiceIds([...selectedServiceIds, id]);
    }
  };

  const isMetaIncluded = selectedServiceIds.includes('meta-ads');

  // Calculations: other services are ₹1,100 flat each. Meta Ads is ₹300 starter price.
  const standardServicesCount = selectedServiceIds.filter((id) => id !== 'meta-ads').length;
  const metaPrice = isMetaIncluded ? 300 : 0;
  const rawTotal = (standardServicesCount * 1100) + metaPrice;
  
  // Bundle multi-service discount: 10% off if 3+ services
  const bundleDiscountPercentage = selectedServiceIds.length >= 3 ? 10 : 0;
  const packageTotal = Math.round(rawTotal * (1 - bundleDiscountPercentage / 100));

  const multiplier = 1 + selectedServiceIds.length * 0.75;
  const projectedLeads = Math.round(monthlyLeads * multiplier);
  const growthPercentage = Math.round(((projectedLeads - monthlyLeads) / monthlyLeads) * 100);

  const handleOrderBundle = () => {
    const titles = SERVICES_DATA
      .filter((s) => selectedServiceIds.includes(s.id))
      .map((s) => {
        if (s.id === 'meta-ads') {
          return `${s.title} (₹300 Starter Price)`;
        }
        return `${s.title} (₹1,100)`;
      })
      .join(' + ');

    const text = encodeURIComponent(
      `Hi GROWUP! I calculated my business growth projection on your website.\nI want to order the bundle: ${titles}\nCalculated Total: ₹${packageTotal.toLocaleString('en-IN')}\n\nPlease confirm my order!`
    );

    window.open(`https://wa.me/919394389413?text=${text}`, '_blank');
  };

  return (
    <section id="growth-calculator" className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-900 mb-4 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-purple-600" />
            <span>Interactive ROI & Growth Estimator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-zinc-900 tracking-tight">
            Calculate Your Custom{' '}
            <span className="text-purple-700">
              Growth Plan & Pricing
            </span>
          </h2>

          <p className="mt-4 text-zinc-600 text-sm sm:text-base font-medium">
            Mix and match services starting at flat ₹1,100 and Meta Ads at ₹300 Starter Price to accelerate your business.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold font-heading text-zinc-900 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-600" />
                <span>Configure Your Growth Engine</span>
              </h3>

              {/* Slider Input */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-zinc-700">
                    1. Current Monthly Inquiries:
                  </label>
                  <span className="text-base font-black font-heading text-cyan-700">
                    {monthlyLeads} / month
                  </span>
                </div>

                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
                <div className="flex justify-between text-[10px] font-bold text-zinc-500 mt-1.5">
                  <span>5 Leads</span>
                  <span>100 Leads</span>
                  <span>200 Leads</span>
                </div>
              </div>

              {/* Service Toggles */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-black uppercase text-purple-800 tracking-wider">
                    2. Select Services to Bundle:
                  </label>
                  {bundleDiscountPercentage > 0 && (
                    <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                      10% Multi-Service Bundle Bonus!
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICES_DATA.map((srv) => {
                    const active = selectedServiceIds.includes(srv.id);
                    const isMeta = srv.id === 'meta-ads';
                    return (
                      <button
                        key={srv.id}
                        onClick={() => toggleService(srv.id)}
                        className={`p-3 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                          active
                            ? 'bg-purple-50 border-purple-300 text-zinc-900 shadow-xs'
                            : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:text-black'
                        }`}
                      >
                        <div>
                          <p className="text-xs font-bold text-zinc-900">{srv.title}</p>
                          <p className="text-[10px] text-emerald-700 font-bold">
                            {isMeta ? '₹300 Starter Price' : '₹1,100 Flat'}
                          </p>
                        </div>
                        <div className={`w-5 h-5 rounded-lg flex items-center justify-center border ${
                          active ? 'bg-purple-600 border-purple-600 text-white' : 'border-zinc-300'
                        }`}>
                          {active && <CheckCircle2 className="w-4 h-4 fill-current text-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500 font-semibold">
              <span>{selectedServiceIds.length} service(s) selected</span>
              <span className="text-emerald-700 font-bold">Transparent pricing</span>
            </div>
          </div>

          {/* Results Projection Card */}
          <div className="lg:col-span-5">
            <TiltCard className="h-full">
              <div className="h-full rounded-3xl p-7 border border-zinc-200 flex flex-col justify-between relative overflow-hidden bg-white shadow-xl">
                
                <div>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black bg-cyan-100 text-cyan-800 border border-cyan-300">
                      ESTIMATED ROI RESULTS
                    </span>
                    <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                      HIGH IMPACT
                    </span>
                  </div>

                  <div className="mt-5">
                    <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider block">
                      Projected Monthly Inquiries
                    </span>
                    <div className="flex items-baseline gap-3 mt-1">
                      <span className="text-4xl sm:text-5xl font-black font-heading text-zinc-900">
                        ~{projectedLeads}
                      </span>
                      <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-lg border border-emerald-300">
                        +{growthPercentage}% Growth
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar Visualization */}
                  <div className="mt-5 space-y-2.5">
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-zinc-600 mb-1">
                        <span>Current Baseline</span>
                        <span className="font-bold text-zinc-900">{monthlyLeads} leads</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-zinc-400 transition-all duration-500"
                          style={{ width: `${Math.min(100, (monthlyLeads / projectedLeads) * 100)}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-cyan-800 font-bold mb-1">
                        <span>GROWUP Accelerated Target</span>
                        <span>{projectedLeads} leads</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-cyan-600 transition-all duration-500"
                          style={{ width: '100%' }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold text-zinc-600">
                      <span>Selected Services:</span>
                      <span className="font-extrabold text-zinc-900">{selectedServiceIds.length} Combined</span>
                    </div>
                    <div className="flex justify-between text-xs font-semibold text-zinc-600 pt-1 border-t border-zinc-200">
                      <span>Estimated Investment:</span>
                      <span className="font-black text-emerald-700 text-sm">₹{packageTotal.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <button
                    onClick={handleOrderBundle}
                    className="w-full py-3.5 rounded-2xl font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="tracking-wide">Order</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>

                  <p className="text-[10px] text-center text-zinc-500 font-semibold">
                    💬 Direct WhatsApp Support: Yashvir Paul (9394389413)
                  </p>
                </div>

              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};

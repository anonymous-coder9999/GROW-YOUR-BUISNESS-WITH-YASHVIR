import React from 'react';
import { Phone, Mail, MapPin, Heart, ArrowUpRight, Globe, TrendingUp, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappUrl = "https://wa.me/919394389413";

  return (
    <footer className="relative pt-16 pb-12 border-t border-zinc-200 bg-white text-zinc-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-200">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-300 p-0.5 flex items-center justify-center shadow-xs">
                <div className="w-full h-full bg-zinc-100 rounded-[8px] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-zinc-900" />
                </div>
              </div>
              <span className="text-xl sm:text-2xl font-black font-heading text-zinc-900 tracking-wider">
                GROW BUISNESS
              </span>
            </div>

            <p className="text-zinc-600 font-medium leading-relaxed max-w-sm mb-6 text-xs">
              Empowering small local businesses across the globe with high-speed websites, 24/7 AI automation, viral social media management, Google top review strategies, and SEO growth — starting at ₹1,100.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-800 border border-emerald-300 transition-all flex items-center gap-1.5 font-bold text-[11px] shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                <span>WhatsApp: 9394389413</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-black uppercase text-zinc-900 tracking-wider mb-4 font-heading">
              Services (₹1,100)
            </h4>
            <ul className="space-y-2.5 font-semibold text-zinc-600">
              <li><a href="#services" className="hover:text-zinc-900 transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-zinc-900 transition-colors">AI Automation</a></li>
              <li><a href="#services" className="hover:text-zinc-900 transition-colors">Social Media Management</a></li>
              <li><a href="#services" className="hover:text-zinc-900 transition-colors">SEO Optimisation Service</a></li>
              <li><a href="#services" className="hover:text-zinc-900 transition-colors">Google Top Review Service</a></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-black uppercase text-zinc-900 tracking-wider mb-4 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-semibold text-zinc-600">
              <li><a href="#why-us" className="hover:text-zinc-900 transition-colors">Why Choose Us</a></li>
              <li><a href="#growth-calculator" className="hover:text-zinc-900 transition-colors">Growth Calculator</a></li>
              <li><a href="#testimonials" className="hover:text-zinc-900 transition-colors">Client Reviews</a></li>
              <li><a href="#faq" className="hover:text-zinc-900 transition-colors">FAQ & Support</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Credit */}
          <div>
            <h4 className="text-xs font-black uppercase text-zinc-900 tracking-wider mb-4 font-heading">
              Contact & Support
            </h4>
            <ul className="space-y-2.5 font-semibold">
              <li className="flex items-center gap-2 text-zinc-600">
                <Phone className="w-3.5 h-3.5 text-zinc-900" />
                <span className="text-zinc-900 font-bold">+91 9394389413</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-600">
                <Mail className="w-3.5 h-3.5 text-zinc-900" />
                <span>support@growbusinessonline.biz</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-600">
                <Globe className="w-3.5 h-3.5 text-zinc-900" />
                <span className="text-zinc-900 font-bold">Global Digital Support</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Security & SSL Certificate Badges */}
        <div className="py-6 border-b border-zinc-200 flex flex-wrap items-center justify-between gap-4 bg-zinc-50/80 rounded-2xl px-6 my-6 border">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-black text-zinc-900 text-xs">
                <span>256-BIT SSL CERTIFICATE ENCRYPTED</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
              </div>
              <p className="text-[11px] text-zinc-500 font-medium">All data transfer, client requests & connections are 100% HTTPS secure.</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl bg-white border border-zinc-300 text-zinc-700 font-extrabold text-[11px] flex items-center gap-1.5 shadow-xs">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span>HTTPS Verified</span>
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white border border-zinc-300 text-zinc-700 font-extrabold text-[11px] flex items-center gap-1.5 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
              <span>Identity Protected</span>
            </span>
          </div>
        </div>

        {/* Bottom Bar with Mandatory Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px] font-bold">
          <p>© {new Date().getFullYear()} GROW BUISNESS. All rights reserved.</p>

          {/* Prominent Mandatory Credit */}
          <div className="px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-900 font-bold flex items-center gap-1.5 shadow-xs">
            <span className="text-zinc-600">Built by</span>
            <strong className="text-zinc-900 font-black">Yashvir Paul</strong>
          </div>
        </div>

      </div>
    </footer>
  );
};


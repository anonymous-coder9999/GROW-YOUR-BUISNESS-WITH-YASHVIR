import React, { useState } from 'react';
import { MessageSquareText, X, Sparkles, Phone, ArrowUpRight } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = "https://wa.me/919394389413?text=Hi%20GROW%20BUISNESS!%20I'm%20interested%20in%20scaling%20my%20business.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="mb-3 bg-white rounded-2xl p-4 shadow-xl border border-zinc-200 max-w-xs animate-in fade-in slide-in-from-bottom-3 duration-200 text-zinc-900">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-black text-zinc-900 uppercase tracking-wider">GROW BUISNESS Live Support</span>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-zinc-400 hover:text-zinc-800 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-zinc-600 mb-3 font-semibold leading-relaxed">
            Need a Website, AI Bot, SEO or Reviews at <strong className="text-emerald-700 font-extrabold">₹1,100</strong>? Chat directly with Yashvir Paul&apos;s team now!
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 text-white" />
            <span className="tracking-wide">Chat on WhatsApp (+91 9394389413)</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <div className="relative group">
        {/* Pulse Ring Animation */}
        <div className="absolute -inset-2 rounded-full bg-emerald-500/30 animate-pulse-ring pointer-events-none" />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-teal-300 text-white shadow-xl shadow-emerald-500/30 transform hover:scale-110 active:scale-95 transition-all animate-float-slow cursor-pointer"
          aria-label="Contact GROW BUISNESS on WhatsApp"
        >
          {/* Custom WhatsApp Icon */}
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>

          {/* Quick Notification Counter Badge */}
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400 text-slate-950 font-black text-[10px] shadow-sm">
            1
          </span>
        </a>
      </div>
    </div>
  );
};

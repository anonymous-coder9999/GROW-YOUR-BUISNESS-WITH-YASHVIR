import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Phone, CheckCircle2, Sparkles, Send, Building, MapPin, User as UserIcon, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Service, User } from '../types';
import { SERVICES_DATA } from '../data/servicesData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: Service | null;
  user: User | null;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  selectedService,
  user
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [businessName, setBusinessName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [city, setCity] = useState('');
  const [requirements, setRequirements] = useState('');

  useEffect(() => {
    if (selectedService) {
      setSelectedServices([selectedService.id]);
    } else if (isOpen && selectedServices.length === 0) {
      setSelectedServices(['web-dev']);
    }
  }, [selectedService, isOpen]);

  useEffect(() => {
    if (user && user.name && !user.isGuest) {
      setBusinessName(user.name);
    }
  }, [user]);

  if (!isOpen) return null;

  const toggleServiceSelection = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const isMetaSelected = selectedServices.includes('meta-ads');

  // Calculate total: ₹1,100 for each standard service + ₹300 for Meta Ads
  const standardServicesCount = selectedServices.filter((id) => id !== 'meta-ads').length;
  const metaAdsPrice = isMetaSelected ? 300 : 0;
  const totalPrice = (standardServicesCount * 1100) + metaAdsPrice;

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback
    }

    const chosenTitles = SERVICES_DATA
      .filter((s) => selectedServices.includes(s.id))
      .map((s) => {
        if (s.id === 'meta-ads') {
          return `${s.title} (₹300 Starter Price)`;
        }
        return `${s.title} (₹1,100)`;
      })
      .join(', ');

    const messageParts = [
      `*NEW GROW BUISNESS ORDER INQUIRY* 🚀`,
      `*Services Requested:* ${chosenTitles}`,
      `*Calculated Estimated Total:* ₹${totalPrice.toLocaleString('en-IN')}`,
      businessName ? `*Business Name:* ${businessName}` : '',
      contactPhone ? `*Phone/WhatsApp:* ${contactPhone}` : '',
      city ? `*Location:* ${city}` : '',
      requirements ? `*Specific Notes:* ${requirements}` : '',
      `---\nPlease confirm my order package and next steps!`
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/919394389413?text=${encodeURIComponent(messageParts)}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/40 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-2xl overflow-hidden my-auto text-zinc-900 max-h-[92vh] overflow-y-auto"
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-300 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-zinc-100 border border-zinc-300 text-zinc-900 shadow-xs">
              <ShoppingBag className="w-6 h-6 text-zinc-900" />
            </div>
            <div>
              <h3 className="text-2xl font-black font-heading text-zinc-900">
                Customize GROW BUISNESS Order
              </h3>
              <p className="text-xs font-semibold text-zinc-600">
                Direct instant order dispatch to WhatsApp: <strong className="text-zinc-900">9394389413</strong>
              </p>
            </div>
          </div>

          <form onSubmit={handleLaunchWhatsApp} className="space-y-5">
            
            {/* 1. Service Selection Checklist */}
            <div>
              <label className="block text-xs font-extrabold text-zinc-900 uppercase tracking-wider mb-2">
                Select Service(s) to Include:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SERVICES_DATA.map((srv) => {
                  const isChecked = selectedServices.includes(srv.id);
                  const isMeta = srv.id === 'meta-ads';
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => toggleServiceSelection(srv.id)}
                      className={`p-3 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        isChecked
                          ? 'bg-cyan-50 border-cyan-300 text-zinc-900 shadow-xs'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:text-black'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-bold text-zinc-900">{srv.title}</p>
                        <p className="text-[10px] text-emerald-700 font-bold">
                          {isMeta ? '₹300 Starter Price' : '₹1,100'}
                        </p>
                      </div>
                      <div className={`w-5 h-5 rounded-lg flex items-center justify-center border ${
                        isChecked ? 'bg-cyan-600 border-cyan-600 text-white' : 'border-zinc-300'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-4 h-4 fill-current text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Business Contact Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Business / Brand Name
                </label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Yashvir Paul Agency"
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl pl-10 pr-3 py-2 text-xs text-zinc-900 font-semibold placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  WhatsApp Contact Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="e.g. 9394389413"
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl pl-10 pr-3 py-2 text-xs text-zinc-900 font-semibold placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1">
                Project Notes / Custom Requirements
              </label>
              <textarea
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                rows={2}
                placeholder="Mention any specific features, ad goals, or timeline requirements."
                className="w-full bg-zinc-50 border border-zinc-300 rounded-xl p-2.5 text-xs text-zinc-900 font-semibold placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* SSL Security Guarantee */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-[11px] font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>256-Bit Secure Inquiry • Direct WhatsApp Support (9394389413)</span>
            </div>

            {/* Total Price Summary & Submit */}
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] text-zinc-500 uppercase font-black block">
                  Total Investment:
                </span>
                <div className="text-xl sm:text-2xl font-black font-heading text-zinc-900">
                  ₹{totalPrice.toLocaleString('en-IN')}{' '}
                  <span className="text-xs font-bold text-zinc-600">
                    ({selectedServices.length} service{selectedServices.length > 1 ? 's' : ''})
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="py-3 px-6 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4 text-white" />
                <span className="tracking-wide">Order</span>
              </button>
            </div>

          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

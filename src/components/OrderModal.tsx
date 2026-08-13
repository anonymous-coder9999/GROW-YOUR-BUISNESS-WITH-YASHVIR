import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Phone, CheckCircle2, Sparkles, Send, Building, MapPin, User as UserIcon, ShieldCheck, Lock } from 'lucide-react';
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

  const totalPrice = selectedServices.length * 1100;

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
      .map((s) => s.title)
      .join(', ');

    const messageParts = [
      `*NEW GROW BUISNESS ORDER INQUIRY* 🚀`,
      `*Services Requested:* ${chosenTitles}`,
      `*Total Price:* ₹${totalPrice} (₹1,100/service)`,
      businessName ? `*Business Name:* ${businessName}` : '',
      contactPhone ? `*Phone/WhatsApp:* ${contactPhone}` : '',
      city ? `*Location:* ${city}` : '',
      requirements ? `*Specific Notes:* ${requirements}` : '',
      `---\nPlease confirm my order setup!`
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
          className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-2xl overflow-hidden my-auto text-zinc-900"
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-300 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-zinc-100 border border-zinc-300 text-zinc-900 shadow-xs">
              <ShoppingBag className="w-6 h-6 text-zinc-900 animate-pulse" />
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

          <form onSubmit={handleLaunchWhatsApp} className="space-y-6">
            
            {/* Service Selection Checklist */}
            <div>
              <label className="block text-xs font-extrabold text-zinc-900 uppercase tracking-wider mb-3">
                Select Service(s) — ₹1,100 Each
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICES_DATA.map((srv) => {
                  const isChecked = selectedServices.includes(srv.id);
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => toggleServiceSelection(srv.id)}
                      className={`p-3 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-cyan-50 border-cyan-300 text-zinc-900 shadow-xs'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:text-black'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-bold text-zinc-900">{srv.title}</p>
                        <p className="text-[10px] text-emerald-700 font-bold">₹1,100 Starter</p>
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

            {/* Business Contact Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Business Name
                </label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Yashvir Paul Agency"
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl pl-10 pr-3 py-2.5 text-xs text-zinc-900 font-semibold placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  WhatsApp Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="e.g. 9394389413"
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl pl-10 pr-3 py-2.5 text-xs text-zinc-900 font-semibold placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-black"
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
                placeholder="Mention any specific features or goal (e.g., 'Need e-commerce website and 50 Google reviews')."
                className="w-full bg-zinc-50 border border-zinc-300 rounded-xl p-3 text-xs text-zinc-900 font-semibold placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* SSL Security Guarantee */}
            <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-[11px] font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>256-Bit SSL Encrypted & Secure Checkout • Direct WhatsApp Support</span>
            </div>

            {/* Total Price Summary & Submit */}
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-zinc-500 uppercase font-black block">Total Investment</span>
                <span className="text-2xl font-black font-heading text-zinc-900">
                  ₹{totalPrice} <span className="text-xs font-bold text-zinc-600">({selectedServices.length} service{selectedServices.length > 1 ? 's' : ''})</span>
                </span>
              </div>

              <button
                type="submit"
                className="py-3 px-6 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4 text-white" />
                <span className="tracking-wide">Send Order via WhatsApp</span>
              </button>
            </div>

          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

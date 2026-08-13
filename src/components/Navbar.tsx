import React, { useState } from 'react';
import { Phone, User as UserIcon, LogOut, Sparkles, ChevronDown, Menu, X, ArrowUpRight, TrendingUp, ShieldCheck } from 'lucide-react';
import { User } from '../types';

interface NavbarProps {
  user: User | null;
  onOpenAuth: () => void;
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ user, onOpenAuth, onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const whatsappUrl = "https://wa.me/919394389413?text=Hi%20GROW%20BUISNESS!%20I'd%20like%20to%20discuss%20services.";

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 border-b border-zinc-200 backdrop-blur-xl shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-zinc-100 border border-zinc-300 p-0.5 shadow-xs group-hover:border-zinc-400 transition-all">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-cyan-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black font-heading text-zinc-900 tracking-wider">
                GROW BUISNESS
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-cyan-100 text-cyan-800 border border-cyan-300">
                PRO
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>SSL SECURED</span>
              </span>
            </div>
            <span className="text-[10px] font-semibold text-zinc-500 block tracking-tight">
              Scale Small Business Globally
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-600">
          <a href="#services" className="hover:text-black transition-colors flex items-center gap-1.5">
            <span>Services</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-cyan-100 text-cyan-800 border border-cyan-200 font-extrabold">₹1,100</span>
          </a>
          <a href="#why-us" className="hover:text-black transition-colors">
            Why Us
          </a>
          <a href="#growth-calculator" className="hover:text-black transition-colors flex items-center gap-1">
            <span>Calculator</span>
            <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
          </a>
          <a href="#testimonials" className="hover:text-black transition-colors">
            Reviews
          </a>
          <a href="#faq" className="hover:text-black transition-colors">
            FAQ
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Quick Order Button */}
          <button
            onClick={onOpenOrderModal}
            className="py-2.5 px-4 rounded-xl text-xs font-bold bg-zinc-900 hover:bg-zinc-800 text-white transition-all shadow-xs flex items-center gap-1.5"
          >
            <span>Custom Order</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          </button>

          {/* WhatsApp Direct */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-4 rounded-xl text-xs font-extrabold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-xs flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="tracking-wide">9394389413</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* User Profile Pill */}
          <div className="relative">
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="flex items-center gap-2 py-2 px-3 rounded-xl bg-zinc-100 border border-zinc-300 hover:bg-zinc-200 text-xs font-bold text-zinc-800 transition-all shadow-xs"
            >
              <div className="w-6 h-6 rounded-lg bg-zinc-200 border border-zinc-300 flex items-center justify-center text-zinc-700">
                <UserIcon className="w-3.5 h-3.5" />
              </div>
              <span className="max-w-[100px] truncate">{user ? user.name : 'Account'}</span>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
            </button>

            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl p-2 shadow-2xl border border-zinc-200 z-50">
                <div className="px-3 py-2 border-b border-zinc-100 mb-1">
                  <p className="text-xs font-bold text-zinc-900 truncate">{user?.name || 'Visitor'}</p>
                  <p className="text-[11px] text-zinc-500 truncate">{user?.email || 'Not logged in'}</p>
                </div>
                <button
                  onClick={() => {
                    setUserDropdownOpen(false);
                    onOpenAuth();
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs text-zinc-700 hover:text-black hover:bg-zinc-100 rounded-xl transition-colors font-medium"
                >
                  <LogOut className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Switch / Login Account</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-zinc-100 border border-zinc-300 text-zinc-700 hover:text-black"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-zinc-200 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-zinc-800 hover:text-cyan-600"
          >
            Services (₹1,100)
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-zinc-800 hover:text-cyan-600"
          >
            Why Choose GROW BUISNESS
          </a>
          <a
            href="#growth-calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-zinc-800 hover:text-cyan-600"
          >
            Growth Calculator
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-zinc-800 hover:text-cyan-600"
          >
            Client Reviews
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-zinc-800 hover:text-cyan-600"
          >
            FAQ
          </a>

          <div className="pt-4 border-t border-zinc-200 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full py-3 rounded-xl text-xs font-bold bg-zinc-900 border border-zinc-800 text-white text-center"
            >
              Custom Order Builder
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl text-xs font-bold bg-emerald-600 text-white text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp: 9394389413</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="w-full py-2.5 rounded-xl text-xs font-medium text-zinc-600 hover:text-black border border-zinc-200"
            >
              Account / Switch User ({user?.name || 'Guest'})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


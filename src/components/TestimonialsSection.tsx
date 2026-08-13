import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Plus, MessageSquarePlus, Sparkles, CheckCircle2, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { Testimonial } from '../types';
import { TiltCard } from './TiltCard';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS_DATA);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newText.trim()) return;

    const newRev: Testimonial = {
      id: Date.now().toString(),
      name: newAuthor.trim(),
      role: 'Business Owner',
      company: newCompany.trim() || 'Small Business',
      avatar: `https://images.unsplash.com/photo-${1535713875002 + Math.floor(Math.random() * 100)}?w=150&auto=format&fit=crop&q=80`,
      rating: newRating,
      text: newText.trim(),
      growthMetric: 'Verified Buyer',
      serviceUsed: 'GROW BUSINESS ONLINE ₹1,100 Growth Service'
    };

    setReviews([newRev, ...reviews]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowReviewModal(false);
      setNewAuthor('');
      setNewCompany('');
      setNewText('');
    }, 1500);
  };

  return (
    <section id="testimonials" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900 mb-3 shadow-xs">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-current animate-pulse" />
              <span>Real Client Reviews • 5-Star Reputation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-zinc-900 tracking-tight">
              Trusted by 500+ Small Businesses{' '}
              <span className="text-amber-600">
                Worldwide
              </span>
            </h2>
          </div>

          <button
            onClick={() => setShowReviewModal(true)}
            className="py-3 px-5 rounded-2xl text-xs font-bold bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 text-zinc-800 transition-all flex items-center gap-2 shadow-xs"
          >
            <MessageSquarePlus className="w-4 h-4 text-zinc-700" />
            <span>Leave a Review</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <TiltCard key={rev.id} className="h-full">
              <div className="bg-white h-full rounded-3xl p-6 border border-zinc-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative group">
                
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-zinc-300 transition-colors" />
                  </div>

                  <p className="text-xs text-zinc-700 leading-relaxed font-medium italic mb-6">
                    &quot;{rev.text}&quot;
                  </p>
                </div>

                <div>
                  {/* Metric Tag */}
                  <div className="mb-4 inline-block px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    ⚡ {rev.growthMetric}
                  </div>

                  {/* Author Meta */}
                  <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-10 h-10 rounded-full object-cover border border-zinc-300 shadow-xs"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80';
                      }}
                    />
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900">{rev.name}</h4>
                      <p className="text-[11px] font-semibold text-cyan-800">{rev.company}</p>
                    </div>
                  </div>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

        {/* Leave Review Modal */}
        {showReviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/40 backdrop-blur-md">
            <div className="w-full max-w-md bg-white rounded-3xl p-6 border border-zinc-200 shadow-2xl relative text-zinc-900">
              <h3 className="text-xl font-bold font-heading text-zinc-900 mb-4">
                Share Your GROW BUSINESS ONLINE Review
              </h3>

              {submittedMessage ? (
                <div className="p-6 text-center text-emerald-600 space-y-2">
                  <CheckCircle2 className="w-12 h-12 mx-auto animate-bounce" />
                  <p className="text-sm font-bold">Thank you! Your review has been added.</p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      placeholder="e.g. Rahul Verma"
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-xl p-2.5 text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Business Name</label>
                    <input
                      type="text"
                      value={newCompany}
                      onChange={(e) => setNewCompany(e.target.value)}
                      placeholder="e.g. Verma Mart"
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-xl p-2.5 text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Rating</label>
                    <select
                      value={newRating}
                      onChange={(e) => setNewRating(Number(e.target.value))}
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-xl p-2.5 text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5 Stars - Exceptional)</option>
                      <option value={4}>⭐⭐⭐⭐ (4 Stars - Great)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Your Review</label>
                    <textarea
                      required
                      rows={3}
                      value={newText}
                      onChange={(e) => setNewText(e.target.value)}
                      placeholder="How did GROW BUSINESS ONLINE help your small business grow?"
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-xl p-2.5 text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowReviewModal(false)}
                      className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-black text-white hover:bg-zinc-800"
                    >
                      Publish Review
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

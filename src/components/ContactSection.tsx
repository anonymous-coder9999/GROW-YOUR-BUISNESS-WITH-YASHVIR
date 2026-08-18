import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, ShieldCheck, Sparkles, User as UserIcon, Building, Phone, MessageSquare, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  userEmail?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ userEmail }) => {
  const targetEmail = "yashvirpaul999@gmail.com";
  const [formData, setFormData] = useState({
    name: '',
    email: userEmail || '',
    phone: '',
    businessName: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const handleAjaxSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionError('Please fill in your Name, Email, and Message.');
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      // Send directly to FormSubmit.co endpoint via AJAX JSON
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New GROW BUISNESS Contact Message from ${formData.name}`,
          _captcha: 'false',
          _template: 'table',
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone || 'N/A',
          BusinessName: formData.businessName || 'N/A',
          Message: formData.message,
          SubmittedAt: new Date().toLocaleString()
        })
      });

      const data = await response.json();

      if (response.ok || data.success === 'true') {
        setIsSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        // Fallback: trigger standard form POST submit
        (e.target as HTMLFormElement).submit();
      }
    } catch {
      // If AJAX is blocked by CORS/adblocker, fallback submit form directly
      (e.target as HTMLFormElement).submit();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white via-zinc-50 to-white relative overflow-hidden border-t border-zinc-200">
      {/* Decorative ambient blurred blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-black tracking-wide uppercase mb-4 shadow-2xs">
            <Mail className="w-3.5 h-3.5 text-cyan-600" />
            <span>FormSubmit.co Integrated Backend</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-zinc-900 tracking-tight">
            Get In Touch With <span className="text-cyan-700">GROW BUISNESS</span>
          </h2>
          <p className="mt-4 text-zinc-600 text-base sm:text-lg font-medium leading-relaxed">
            Have questions or custom requirements? Send us a direct inquiry powered by <strong className="text-zinc-900">FormSubmit</strong> email service to <span className="underline decoration-cyan-400 font-bold">{targetEmail}</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & FormSubmit Badge */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-zinc-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden border border-zinc-800">
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black font-heading text-white">Direct Email Dispatch</h3>
                  <p className="text-xs text-zinc-400 font-medium">FormSubmit.co API Integration</p>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed mb-8 font-medium">
                Every submission sends a structured email alert directly to <strong className="text-white bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700">{targetEmail}</strong>.
              </p>

              <div className="space-y-4 pt-4 border-t border-zinc-800">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-xl bg-zinc-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-xs">256-Bit SSL Encrypted</p>
                    <p className="text-[11px] text-zinc-400">No passwords or sensitive tokens stored</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-xl bg-zinc-800 flex items-center justify-center text-cyan-400 shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-xs">Spam Protected & Verified</p>
                    <p className="text-[11px] text-zinc-400">Integrated FormSubmit endpoints</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-xl bg-zinc-800 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-xs">Direct Call / WhatsApp</p>
                    <p className="text-[11px] text-zinc-400">+91 9394389413 (Yashvir Paul)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Banner */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-extrabold text-emerald-900 text-sm">Prefer Instant Chat?</h4>
                <p className="text-xs text-emerald-700 font-medium">Connect with Yashvir Paul directly on WhatsApp.</p>
              </div>
              <a
                href="https://wa.me/919394389413?text=Hi%20GROW%20BUISNESS!%20I%20have%20a%20question%20from%20the%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md shrink-0 transition-all flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: FormSubmit HTML Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-zinc-200 relative">
            
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-emerald-100 border border-emerald-300 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black font-heading text-zinc-900">Message Sent Successfully!</h3>
                <p className="text-sm text-zinc-600 max-w-md mx-auto font-medium">
                  Thank you, <strong className="text-zinc-900">{formData.name}</strong>. Your message has been sent via FormSubmit to <strong className="text-zinc-900">{targetEmail}</strong>. We will get back to you shortly!
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: userEmail || '', phone: '', businessName: '', message: '' });
                  }}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs shadow-md transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                action={`https://formsubmit.co/${targetEmail}`}
                method="POST"
                target="_blank"
                onSubmit={handleAjaxSubmit}
                className="space-y-6"
              >
                {/* FormSubmit Configuration Hidden Fields */}
                <input type="hidden" name="_subject" value={`New GROW BUISNESS Website Form Submission from ${formData.name || 'Client'}`} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-cyan-600" />
                    <h3 className="text-lg font-black font-heading text-zinc-900">Send Direct Inquiry</h3>
                  </div>
                  <span className="text-[11px] font-extrabold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-200">
                    FormSubmit Backend Active
                  </span>
                </div>

                {submissionError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-bold rounded-xl">
                    {submissionError}
                  </div>
                )}

                {/* Form Row: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-zinc-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <UserIcon className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all text-sm font-medium bg-zinc-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-zinc-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all text-sm font-medium bg-zinc-50/50"
                    />
                  </div>
                </div>

                {/* Form Row: Phone & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-zinc-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Mobile / WhatsApp</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all text-sm font-medium bg-zinc-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-zinc-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Business Name</span>
                    </label>
                    <input
                      type="text"
                      name="business_name"
                      placeholder="e.g. Sharma Traders"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all text-sm font-medium bg-zinc-50/50"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-extrabold text-zinc-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Your Message / Requirements *</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe how GROW BUISNESS can help your business grow online (e.g. Website creation, Google Reviews, SEO)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all text-sm font-medium bg-zinc-50/50 resize-y"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-black to-zinc-900 hover:from-cyan-900 hover:to-zinc-900 text-white font-extrabold text-sm shadow-xl hover:shadow-cyan-500/10 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending via FormSubmit...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-cyan-400" />
                        <span>Submit Form via FormSubmit.co</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-zinc-500 text-center font-medium">
                  🔒 Submissions are delivered securely to <strong className="text-zinc-800">{targetEmail}</strong> via FormSubmit email API.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

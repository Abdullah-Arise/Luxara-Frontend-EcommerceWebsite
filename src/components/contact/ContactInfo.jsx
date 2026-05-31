import React, { useState } from 'react';
import { Instagram, MessageCircle, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const WHATSAPP_NUMBER = "923147253080";

// ── Threads icon
const ThreadsIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 192 192" fill="currentColor" width={size} height={size}>
    <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.372 61.7381 111.428 64.1255 115.565 68.7984C118.574 72.2014 120.596 76.8505 121.62 82.6937C114.969 81.6067 107.758 81.2886 100.098 81.7496C76.8283 83.1192 62.2198 96.6738 63.0934 115.027C63.5367 124.348 68.2826 132.329 76.4536 137.609C83.3303 142.085 92.1252 144.27 101.254 143.787C113.392 143.141 122.893 138.35 129.474 129.542C134.479 122.789 137.587 114.061 138.769 103.113C144.152 106.329 148.137 110.704 150.39 116.146C154.28 125.603 154.531 141.035 142.998 152.509C133.003 162.449 121.002 166.637 103.028 166.761C83.0842 166.621 67.7672 160.481 57.5278 148.513C47.9395 137.26 42.9926 120.975 42.8244 100.163C42.9926 79.3506 47.9395 63.0655 57.5278 51.8124C67.7666 39.8444 83.0836 33.7038 103.028 33.5645C123.095 33.7054 138.557 39.8707 149.02 52.0193C154.166 57.9829 157.966 65.3498 160.376 73.8608L176.053 69.4686C173.088 58.4982 168.175 49.0313 161.334 41.1416C148.268 26.0239 129.36 18.2093 103.083 18.0005C76.7257 18.2093 57.9565 26.0763 45.0623 41.3042C33.5438 54.9536 27.6038 74.2699 27.4172 99.9887L27.4166 100.163L27.4172 100.337C27.6038 126.056 33.5438 145.372 45.0623 158.022C57.9565 173.25 76.7257 181.117 103.083 181.326C122.906 181.183 138.558 175.953 150.051 164.52C166.377 148.267 165.762 127.535 160.177 113.708C156.22 103.677 148.849 95.5857 141.537 88.9883ZM100.35 126.783C89.2423 127.388 77.7271 122.383 77.1964 112.072C76.8058 104.348 82.6158 95.5909 101.287 94.4928C103.655 94.3527 105.979 94.2853 108.261 94.2853C114.68 94.2853 120.724 94.9181 126.287 96.1452C124.214 120.438 111.429 126.174 100.35 126.783Z"/>
  </svg>
);

const ContactInfo = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors]     = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim())    newErrors.name    = 'Name is required';
    if (!formData.email.trim())   newErrors.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const data = new FormData();
      data.append('name',       formData.name);
      data.append('email',      formData.email);
      data.append('subject',    formData.subject);
      data.append('message',    formData.message);
      // ── Web3Forms access key — abdullahuser052@gmail.com ke liye
      // https://web3forms.com se apna key lo aur yahan lagao
      data.append('access_key', 'b3f645d2-ba0d-485e-b33b-5d21f8c4b76b');

      const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Something went wrong. Please try WhatsApp instead.');
      }
    } catch {
      alert('Network error. Please try WhatsApp instead.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LEFT — Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10 md:p-12 backdrop-blur-md">
            <p className="text-amber-300 text-[10px] uppercase tracking-[0.3em] font-medium mb-3">
              Send a Message
            </p>
            <h2 className="font-serif text-4xl text-white font-light mb-10">
              We're always <span className="italic text-amber-300">here.</span>
            </h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h3 className="font-serif text-2xl text-white mb-2">Message Sent!</h3>
                <p className="text-neutral-400 text-sm">We'll get back to you within a few hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[11px] uppercase tracking-widest border-b border-white/20 pb-0.5 hover:text-amber-300 hover:border-amber-300 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <div className="space-y-6">

                {/* Name */}
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block">Your Name</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange}
                    placeholder="e.g. Fatima Khan"
                    className={`w-full border px-4 py-3.5 text-sm focus:outline-none focus:border-amber-400 transition-colors bg-black/40 text-white placeholder:text-neutral-500 ${errors.name ? 'border-red-400' : 'border-white/10'}`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block">Email Address</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full border px-4 py-3.5 text-sm focus:outline-none focus:border-amber-400 transition-colors bg-black/40 text-white placeholder:text-neutral-500 ${errors.email ? 'border-red-400' : 'border-white/10'}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block">Subject</label>
                  <input
                    type="text" name="subject" value={formData.subject} onChange={handleChange}
                    placeholder="How can we help?"
                    className={`w-full border px-4 py-3.5 text-sm focus:outline-none focus:border-amber-400 transition-colors bg-black/40 text-white placeholder:text-neutral-500 ${errors.subject ? 'border-red-400' : 'border-white/10'}`}
                  />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block">Message</label>
                  <textarea
                    name="message" rows="4" value={formData.message} onChange={handleChange}
                    placeholder="Your message..."
                    className={`w-full border px-4 py-3.5 text-sm focus:outline-none focus:border-amber-400 transition-colors bg-black/40 text-white placeholder:text-neutral-500 resize-none ${errors.message ? 'border-red-400' : 'border-white/10'}`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-[#d6b46a] text-black py-4 text-[11px] uppercase tracking-widest hover:bg-[#e0c07a] transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? 'Sending...' : (<><Send size={13} /> Send Message</>)}
                </button>
              </div>
            )}
          </div>

          {/* RIGHT — Info + Policies */}
          <div className="rounded-3xl border border-white/10 bg-black/60 p-6 sm:p-10 md:p-12 space-y-8 backdrop-blur-md">
            <div>
              <p className="text-amber-400 text-[10px] uppercase tracking-[0.3em] font-medium mb-3">
                Get in Touch
              </p>
              <h2 className="font-serif text-3xl text-white font-light">
                Other ways to reach us.
              </h2>
            </div>

            {/* WhatsApp */}
            <div
              className="flex items-start gap-5 cursor-pointer group"
              onClick={() => {
                const msg = encodeURIComponent("Hi Luxara! I have a question.");
                window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
              }}
            >
              <div className="w-12 h-12 bg-green-900/30 flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-colors">
                <MessageCircle size={20} className="text-green-400 group-hover:text-white transition-colors" />
              </div>
              <div className="min-w-0">
                <h3 className="font-medium text-white mb-1">WhatsApp</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">Fastest way. Order, ask questions, or get help.</p>
                <p className="text-[11px] uppercase tracking-widest text-amber-400 mt-2 font-medium">Chat Now →</p>
              </div>
            </div>

            {/* Instagram */}
            <div
              className="flex items-start gap-5 cursor-pointer group"
              onClick={() => window.open('https://www.instagram.com/luxaraa.pk', '_blank')}
            >
              <div className="w-12 h-12 bg-pink-900/20 flex items-center justify-center shrink-0 group-hover:bg-pink-500 transition-colors">
                <Instagram size={20} className="text-pink-400 group-hover:text-white transition-colors" />
              </div>
              <div className="min-w-0">
                <h3 className="font-medium text-white mb-1">Instagram</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">DM us for order updates or collabs.</p>
                <p className="text-[11px] uppercase tracking-widest text-amber-400 mt-2 font-medium">@luxaraa.pk →</p>
              </div>
            </div>

            {/* Threads */}
            <div
              className="flex items-start gap-5 cursor-pointer group"
              onClick={() => window.open('https://www.threads.com/@luxaraa.pk', '_blank')}
            >
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-amber-400 transition-colors">
                <span className="text-neutral-300 group-hover:text-black transition-colors">
                  <ThreadsIcon size={20} />
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="font-medium text-white mb-1">Threads</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">Follow us on Threads for updates.</p>
                <p className="text-[11px] uppercase tracking-widest text-amber-400 mt-2 font-medium">@luxaraa.pk →</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-blue-900/20 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-blue-400" />
              </div>
              <div className="min-w-0">
                <h3 className="font-medium text-white mb-1">Email</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">For wholesale or formal queries.</p>
                <p className="break-all text-[11px] uppercase tracking-widest text-amber-400 mt-2 font-medium">abdullahuser052@gmail.com</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-yellow-900/20 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-yellow-600" />
              </div>
              <div className="min-w-0">
                <h3 className="font-medium text-white mb-1">Response Time</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Mon–Sat: 10 AM – 9 PM<br />
                  Replies within a few hours.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Policies */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Shipping", desc: "Nationwide via TCS / Leopard. 3–5 days. Fixed Rs. 200 charge." },
            { title: "Cash on Delivery", desc: "COD available all over Pakistan. Pay when it arrives." },
            { title: "Exchange Policy", desc: "7-day exchange for damaged or incorrect items. Unused & original pack." },
            { title: "Cuff Shine Promise", desc: "Stainless steel cuff finish changes in 6 months? We replace it. No questions." },
          ].map((policy, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h3 className="font-serif text-lg text-white mb-3">{policy.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{policy.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;

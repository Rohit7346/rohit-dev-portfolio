import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Github, Linkedin, MessageSquare, MapPin, Phone } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Formulate mailto link fallback
    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40 px-3 py-1 rounded-full">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Have a project in mind, an opportunity to discuss, or just want to say hi? My inbox is always open!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Let's talk code & opportunities</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Whether you have an interesting job opportunity, need a high-performance software engineering solution, or want to collaborate on open-source, feel free to reach out.
              </p>

              {/* Email One-click Copy Card */}
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-mono text-slate-500 block">Direct Email</span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-mono text-cyan-700 dark:text-cyan-300 truncate">
                    {profileData.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-transparent transition-colors shrink-0 shadow-sm"
                    title="Copy Email to Clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Phone Info */}
              <div className="space-y-3 pt-2 text-sm">
                {profileData.phone && (
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-cyan-600 dark:text-cyan-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Phone</span>
                      <a
                        href={`tel:${profileData.phone.replace(/[^0-9+]/g, '')}`}
                        className="font-medium font-mono text-xs sm:text-sm text-cyan-700 dark:text-cyan-300 hover:underline"
                      >
                        {profileData.phone}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-cyan-600 dark:text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Location</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">{profileData.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-3">
                  Find me online
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500/40 text-slate-700 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 shadow-sm dark:shadow-none transition-all"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500/40 text-slate-700 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 shadow-sm dark:shadow-none transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500/40 text-slate-700 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 shadow-sm dark:shadow-none transition-all"
                    aria-label="Send direct email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span>Send a Message</span>
              </h3>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800/50 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Thank You!</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Your email client should have opened to dispatch the message. I will respond to your email as soon as possible!
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-slate-700 dark:text-slate-300 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-slate-700 dark:text-slate-300 block">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono text-slate-700 dark:text-slate-300 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-slate-700 dark:text-slate-300 block">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Rohit, I'd like to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all duration-300 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

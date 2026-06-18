import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ─────────────────────────────────────────────────
const EJ_SERVICE_ID = 'service_p5ymk9f';   
const EJ_PUBLIC_KEY = 'F-iyxL2osQWl7Y_vC';
const EJ_TEMPLATE_CONTACT = 'template_vesdb2r'; 
const EJ_TEMPLATE_AUTOREPLY = 'template_2z5ztxr'; 

// ─── Reusable Glassmorphic Label ───────────────────────────────────────────
const GlassLabel = ({ text }) => (
  <label className="block mb-2 text-xs tracking-widest text-gray-400 uppercase font-[anzo2]">
    {text}
  </label>
);

// ─── Shared Glassmorphic Input Styles ──────────────────────────────────────
const glassInputBase = {
  background: 'rgba(0, 0, 0, 0.25)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.3)',
  color: '#f8fafc',
  backdropFilter: 'blur(10px)',
  fontFamily: "'Inter', sans-serif",
  transition: 'all 0.3s ease',
  width: '100%',
  borderRadius: '0.75rem',
  padding: '0.875rem 1.25rem',
  outline: 'none',
};

const glassInputFocus = {
  borderColor: 'rgba(212, 175, 55, 0.4)', // Subtle gold edge
  boxShadow: '0 0 20px rgba(212, 175, 55, 0.1), inset 0 2px 10px rgba(0,0,0,0.3)',
  background: 'rgba(0, 0, 0, 0.4)',
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errMsg, setErrMsg] = useState('');
  const [focusedField, setFocusedField] = useState(null);

  const handleInput = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = form;

    if (!name || !email || !subject || !message) {
      setStatus('error');
      setErrMsg('Error: All required fields must be filled to establish a connection.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrMsg('Error: Invalid email format detected.');
      return;
    }

    setStatus('loading');
    
    try {
      // 1. Send primary message to YOU (template_vesdb2r)
      await emailjs.send(
        EJ_SERVICE_ID,
        EJ_TEMPLATE_CONTACT,
        {
          name: name,          // ✅ Matches {{name}} in Dashboard Image 1
          from_name: name,     // ✅ Matches {{from_name}} in your Contact HTML
          email: email,        // ✅ Matches {{email}} in Dashboard Image 1
          from_email: email,   // ✅ Matches {{from_email}} in your Contact HTML
          reply_to: email, 
          subject: subject,
          message: message,
          phone: phone.trim() !== '' ? phone : "Not Provided", // ✅ Matches {{phone}} in your Contact HTML
        },
        { publicKey: EJ_PUBLIC_KEY }
      );

      // 2. Send auto-reply confirmation to the USER (template_2z5ztxr)
      await emailjs.send(
        EJ_SERVICE_ID,
        EJ_TEMPLATE_AUTOREPLY,
        {
          email: email,        // 💥 FIXES THE 422 ERROR! Matches {{email}} in Dashboard Image 2
          to_email: email,     
          reply_to: email,
          name: name,
          from_name: name,     // ✅ Matches {{from_name}} in your Auto-Reply HTML
          to_name: name,
          subject: subject,    // ✅ Matches {{subject}} in your Auto-Reply HTML
          message: message,    // ✅ Matches {{message}} in your Auto-Reply HTML
        },
        { publicKey: EJ_PUBLIC_KEY }
      );

      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrMsg('System failure: Unable to route messages securely.');
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden"
      style={{ backgroundColor: '#0a0a0c', fontFamily: "'Inter', sans-serif" }}
    >
      {/* ─── Luxury 3D Background Orbs ─── */}
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-60 animate-pulse"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #eab308,  #15803d,  #020617)',
          filter: 'blur(40px)',
          transform: 'translate(-50%, -50%)',
          animationDuration: '8s'
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #ffffff, #64748b, #000)',
          filter: 'blur(50px)',
          transform: 'translate(20%, 20%)',
          animation: 'float 10s infinite ease-in-out'
        }}
      />

      {/* ─── Main Glassmorphic Container ─── */}
      <div
        className="relative z-10 w-full max-w-3xl rounded-[2rem] p-8 sm:p-12 overflow-hidden"
        style={{
          background: 'rgba(20, 20, 25, 0.4)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)',
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200/30 to-transparent" />

        {/* ─── Header Section ─── */}
        <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-800 to-green-400 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Initialize Contact
            </h1>
            <p className="text-gray-400 font-mono text-sm tracking-wide">
              Secure transmission protocol engaged.
            </p>
          </div>
          
          <div className="flex gap-2">
            <span className="px-3 py-1 text-xs font-mono rounded-full border border-white/10 bg-black/30 text-gray-300">
              v3.0.1
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-full border border-green-400/30 bg-green-400/10 text-green-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available
            </span>
          </div>
        </div>

        {/* ─── Form Section ─── */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="font-[anzo2]">
              <GlassLabel text="Name" />
              <input
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={handleInput('name')}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                style={{ ...glassInputBase, ...(focusedField === 'name' ? glassInputFocus : {}) }}
              />
            </div>

            {/* Email */}
            <div>
              <GlassLabel text="Email Address" />
              <input
                type="email"
                placeholder="architect@domain.com"
                value={form.email}
                onChange={handleInput('email')}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                style={{ ...glassInputBase, ...(focusedField === 'email' ? glassInputFocus : {}) }}
              />
            </div>
          </div>

          {/* Row 2: Subject & Phone (Side by Side) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Subject */}
            <div>
              <GlassLabel text="Subject" />
              <select
                value={form.subject}
                onChange={handleInput('subject')}
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField(null)}
                className="appearance-none"
                style={{
                  ...glassInputBase,
                  ...(focusedField === 'subject' ? glassInputFocus : {}),
                  cursor: 'pointer',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                }}
              >
                <option value="" disabled style={{ background: '#1a1a24' }}>Select an engagement type</option>
                <option value="Enterprise Solution" style={{ background: '#1a1a24' }}>Web Development Project</option>
                <option value="SaaS Application" style={{ background: '#1a1a24' }}>SaaS Application</option>
                <option value="AI / LLM Integration" style={{ background: '#1a1a24' }}>AI / LLM Integration</option>
                <option value="Mobile App Development" style={{ background: '#1a1a24' }}>Mobile App Development</option>
                <option value="Portfolio / Personal Website" style={{ background: '#1a1a24' }}>Portfolio / Personal Website</option>
                <option value="UI/UX Implementation" style={{ background: '#1a1a24' }}>UI/UX Implementation</option>
                <option value="UI/UX Implementation" style={{ background: '#1a1a24' }}>Bug Fixes & Maintenance</option>
                <option value="Performance Optimization" style={{ background: '#1a1a24' }}>Performance Optimization</option>
                <option value="Other Inquiry" style={{ background: '#1a1a24' }}>Other Inquiry</option>
              </select>
            </div>

            {/* Phone (Optional) */}
            <div>
              <GlassLabel text="Phone Number (Optional)" />
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={form.phone}
                onChange={handleInput('phone')}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                style={{ ...glassInputBase, ...(focusedField === 'phone' ? glassInputFocus : {}) }}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <GlassLabel text="Message" />
            <textarea
              rows={4}
              placeholder="Detail your requirements here..."
              value={form.message}
              onChange={handleInput('message')}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              style={{
                ...glassInputBase,
                ...(focusedField === 'message' ? glassInputFocus : {}),
                resize: 'none',
              }}
            />
          </div>

          {/* ─── Footer & Submit ─── */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5">
            <div className="text-xs font-mono text-gray-500" />
            
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto relative group overflow-hidden rounded-xl px-8 py-3.5 text-sm font-semibold tracking-wide text-black transition-all duration-300 disabled:opacity-50"
              style={{
                background: status === 'success' 
                  ? 'linear-gradient(135deg, #10b981, #059669)' 
                  : 'linear-gradient(135deg, #fcd34d, #d4af37, #b48608)',
                boxShadow: status === 'success'
                  ? '0 0 20px rgba(16, 185, 129, 0.4)'
                  : '0 0 20px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(255,255,255,0.4)',
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {status === 'loading' ? (
                  <>
                    <svg className="w-4 h-4 animate-spin text-black" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="12 6" />
                    </svg>
                    Transmitting...
                  </>
                ) : status === 'success' ? (
                  'Payload Delivered'
                ) : (
                  <>
                    Send
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* ─── Feedback State ─── */}
          {(status === 'error' || status === 'success') && (
            <div
              className="mt-4 p-4 rounded-xl border font-mono text-xs backdrop-blur-md"
              style={{
                background: status === 'error' ? 'rgba(220, 38, 38, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                borderColor: status === 'error' ? 'rgba(220, 38, 38, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                color: status === 'error' ? '#fca5a5' : '#6ee7b7'
              }}
            >
              {status === 'error' 
                ? errMsg 
                : '> Process finished with exit code 0. Auto-reply confirmation dispatched.'}
            </div>
          )}
        </form>
      </div>

      {/* Global Styles for Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(20%, 20%) translateY(0); }
          50% { transform: translate(20%, 20%) translateY(-20px); }
        }
        ::placeholder { color: #64748b !important; }
      `}</style>
    </div>
  );
};

export default Contact;
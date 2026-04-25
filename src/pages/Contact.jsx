import { useState } from "react";
import { Mail, CalendarClock, ArrowRight, HelpCircle, Plus, Minus } from "lucide-react";
import Footer from "../components/layout/Footer";
import "./Contact.css";

const SOCIALS = [
  {
    label: "X (Twitter)", count: "12.6K", href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: "Instagram", count: "8.3K", href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn", count: "2.5K", href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Dribbble", count: "3.2K", href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72" />
        <path d="M10.16 21.97c4.5-5.1 7.56-10.74 5.04-17.57" />
        <path d="M2.17 14.12c4.16.87 8.07.49 12.06-1.9" />
      </svg>
    ),
  },
];

const FAQS = [
  { q: "Can you work with clients remotely?", a: "Absolutely! I work with clients across the globe fully remotely. I use tools like Figma, Notion, and Slack to ensure smooth collaboration regardless of time zone." },
  { q: "Will my website be mobile-friendly?", a: "Yes, every project I deliver is fully responsive and optimized for all screen sizes — from mobile phones to large desktop displays." },
  { q: "How long does it typically take to complete a project?", a: "Timelines vary by scope. A landing page typically takes 1–2 weeks, while a full product design can range from 4–8 weeks. I provide a detailed timeline at the start of each project." },
  { q: "Can you integrate third-party tools into my website?", a: "Yes, I have experience integrating tools such as analytics platforms, CRMs, payment gateways, and marketing tools into web projects." },
  { q: "Do you offer website maintenance?", a: "I offer post-launch support and maintenance packages to keep your project up-to-date, secure, and performing at its best." },
  { q: "How do you handle website revisions?", a: "Each project includes a set number of revision rounds outlined in the contract. Additional revisions beyond that scope are billed at an hourly rate." },
  { q: "Can you optimize my website?", a: "Yes! I perform performance audits, accessibility reviews, and SEO-friendly structure improvements as part of my design and development process." },
  { q: "What are your payment terms?", a: "I typically require 50% upfront and 50% upon delivery. For larger projects, milestone-based payments can be arranged." },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={"faq-item" + (open ? " faq-item--open" : "")} onClick={() => setOpen(!open)}>
      <div className="faq-row">
        <span className="faq-question">{q}</span>
        <div className="faq-icon">
          {open ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
        </div>
      </div>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">

      {/* Header */}
      <div className="contact-header">
        <div className="contact-title-row">
          <Mail size={20} strokeWidth={2} className="contact-icon" />
          <h2 className="contact-title">I Love to hear from you.</h2>
        </div>
        <p className="contact-subtitle">
          Connect with Me Today. Let's Create Something Amazing Together!
        </p>
        <div className="contact-ctas">
          <a href="mailto:tolojanaharynatachanoeline@gmail.com" className="cta-btn">
            <Mail size={13} strokeWidth={2} />
            EMAIL ME
          </a>
          <a href="#" className="cta-btn">
            <CalendarClock size={13} strokeWidth={2} />
            SCHEDULE CALL
          </a>
        </div>
      </div>

      {/* Form + Socials */}
      <div className="contact-grid">
        <div className="contact-form-col">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <input className="form-input" type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} autoComplete="name" />
              <input className="form-input" type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} autoComplete="email" />
            </div>
            <textarea className="form-textarea" name="message" placeholder="Message" rows={7} value={form.message} onChange={handleChange} />
            <button className={"form-submit" + (sent ? " form-submit--sent" : "")} type="submit">
              {sent ? "Message Sent ✓" : "Send Your Message"}
            </button>
          </form>
        </div>

        <div className="contact-socials-col">
          {SOCIALS.map(({ label, count, href, icon }) => (
            <a key={label} href={href} className="social-stat-card" target="_blank" rel="noopener noreferrer">
              <div className="ssc-icon">{icon}</div>
              <div className="ssc-info">
                <span className="ssc-count">{count}</span>
                <span className="ssc-label">Followers</span>
              </div>
              <ArrowRight size={16} strokeWidth={1.8} className="ssc-arrow" />
            </a>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <section className="faq-section">
        <div className="contact-header faq-header">
          <div className="contact-title-row">
            <HelpCircle size={20} strokeWidth={2} className="contact-icon" />
            <h2 className="contact-title">Common Queries</h2>
          </div>
          <p className="contact-subtitle">
            Get Answers to Common Queries. Your Questions, Addressed Simply.
          </p>
        </div>

        <div className="faq-grid">
          {FAQS.map((faq, i) => (
            <FaqItem key={i} {...faq} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
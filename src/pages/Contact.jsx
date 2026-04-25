import { useState } from "react";
import { Mail, CalendarClock, ArrowRight, HelpCircle, Plus, Minus } from "lucide-react";
import Footer from "../components/layout/Footer";
import "./Contact.css";

const SOCIALS = [
  {
    label: "WhatsApp",
    count: "WhatsApp",
    href: "https://wa.me/2617274557",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: "Mail",
    count: "Mail",
    href: "mailto:tolojanaharynatachanoeline@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    count: "LinkedIn",
    href: "https://www.linkedin.com/in/tolojanahary-natacha-610b2a223/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    count: "GitHub",
    href: "https://github.com/TOLOJANAHAR",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
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
          {SOCIALS.map(({ label, href, icon }) => (
            <a key={label} href={href} className="social-stat-card" target="_blank" rel="noopener noreferrer">
              <div className="ssc-icon">{icon}</div>
              <div className="ssc-info">
                <span className="ssc-count">{label}</span>
                {/* <span className="ssc-label">Profil</span> */}
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
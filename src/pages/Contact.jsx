import { Mail } from "lucide-react";
import "./EmptyPage.css";

export default function Contact() {
  return (
    <div className="empty-page">
      <div className="empty-container">
        <div className="empty-icon-wrap">
          <Mail size={28} strokeWidth={1.5} />
        </div>
        <h2 className="empty-title">Contact</h2>
        <p className="empty-desc">
          Formulaire de contact en cours de construction. En attendant, écrivez-moi directement.
        </p>
        <a href="mailto:hello@natacha.design" className="contact-email-link">
          hello@natacha.design
        </a>
      </div>
    </div>
  );
}
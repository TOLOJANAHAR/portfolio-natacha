import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <span className="footer-copy">@{year}, All Rights Reserved</span>
      <span className="footer-code"> </span>
      <span className="footer-credit">Template by Praha</span>
    </footer>
  );
}
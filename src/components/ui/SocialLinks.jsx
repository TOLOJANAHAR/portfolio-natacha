import "./SocialLinks.css";

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
  </svg>
);

const DribbbleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72"/>
    <path d="M10.16 21.97c4.5-5.1 7.56-10.74 5.04-17.57"/>
    <path d="M2.17 14.12c4.16.87 8.07.49 12.06-1.9"/>
  </svg>
);

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);

export default function SocialLinks() {
  const socials = [
    { icon: <InstagramIcon />, label: "Instagram", href: "#" },
    { icon: <DribbbleIcon />, label: "Dribbble", href: "#" },
    { icon: <XIcon />, label: "Twitter / X", href: "#" },
  ];

  return (
    <div className="social-links">
      {socials.map(({ icon, label, href }) => (
        <a
          key={label}
          href={href}
          className="social-btn"
          aria-label={label}
          title={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
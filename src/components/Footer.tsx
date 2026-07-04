import Logo from "./Logo";
import BrandTagline from "./BrandTagline";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Live map", href: "#map" },
    { label: "Pulse Feed", href: "#pulse-feed" },
    { label: "Moments", href: "#moments" },
    { label: "Early access", href: "#beta" },
  ],
  "For venues": [
    { label: "Partner", href: "#venues" },
    { label: "Contact", href: "mailto:hello@pulsive.app" },
  ],
};

export default function Footer() {
  return (
    <footer id="venues" className="border-t border-border bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <BrandTagline size="sm" className="mt-3" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              The real-time layer for city discovery. Live pulse, live map,
              live conversations, and the moments that make the night.
            </p>
            <a
              href="mailto:hello@pulsive.app"
              className="mt-5 inline-flex text-sm font-medium text-primary transition-colors hover:text-primary-dark"
            >
              hello@pulsive.app
            </a>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-dark">{title}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} PULSIVE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Designs", href: "#designs" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-12 texture-concrete">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-heading text-3xl text-embossed">APS</span>
              <span className="font-heading text-xl text-accent ml-1">DECORATIVE</span>
            </div>
            <p className="text-primary-foreground/60 mb-4 max-w-md">
              Premium stamped concrete designs with 12+ years of expertise. 
              We provide execution services and material supply across India.
            </p>
            <p className="text-primary font-montserrat font-semibold">
              Design + Strength + Craftsmanship — Stamped to Last.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+917020999425"
                  className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  <Phone size={16} />
                  +91 7020999425
                </a>
              </li>
              <li>
                <a
                  href="mailto:apsdecorative@gmail.com"
                  className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  <Mail size={16} />
                  apsdecorative@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917020999425"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/gRnbAMrVbvk8Dr5ZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  <MapPin size={16} />
                  View Location
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-engraved opacity-20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/40 text-sm">
          <p>© {currentYear} APS DECORATIVE. All rights reserved.</p>
          <p>Led by Amol Sahane</p>
        </div>
      </div>
    </footer>
  );
}

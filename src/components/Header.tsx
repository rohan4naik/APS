import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "#home", isExternal: false },
  { name: "About", href: "#about", isExternal: false },
  { name: "Services", href: "#designs", isExternal: false },
  { name: "Product", href: "/product", isExternal: true },
  { name: "Why Choose Us", href: "#why-us", isExternal: false },
  { name: "Testimonials", href: "#testimonials", isExternal: false },
  { name: "Contact", href: "#contact", isExternal: false },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, isExternal: boolean) => {
    setIsMobileMenuOpen(false);
    if (isExternal) {
      navigate(href);
    } else {
      // If we're not on the home page, navigate there first
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage
        ? "bg-primary/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="relative">
              <span className="font-heading text-2xl md:text-3xl text-primary-foreground text-embossed tracking-wider">
                APS
              </span>
              <span className="font-heading text-lg md:text-xl text-accent ml-1 text-embossed">
                DECORATIVE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.isExternal)}
                className="text-primary-foreground/80 hover:text-accent transition-colors text-sm font-medium tracking-wide"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+917020999425"
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">+91 7020999425</span>
            </a>
            <a
              href="mailto:apsdecorative@gmail.com"
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors ml-2"
            >
              <Mail size={18} />
              <span className="font-medium">apsdecorative@gmail.com</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-primary-foreground p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href, link.isExternal)}
                  className="text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/5 transition-colors py-3 px-4 text-left font-medium"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex flex-col gap-2 py-3 px-4 mt-2 border-t border-primary-foreground/10">
                <a
                  href="tel:+917020999425"
                  className="flex items-center gap-2 text-accent"
                >
                  <Phone size={18} />
                  <span className="font-medium">+91 7020999425</span>
                </a>
                <a
                  href="mailto:apsdecorative@gmail.com"
                  className="flex items-center gap-2 text-accent"
                >
                  <Mail size={18} />
                  <span className="font-medium">apsdecorative@gmail.com</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

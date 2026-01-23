import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-copper rounded-lg flex items-center justify-center shadow-copper">
              <span className="text-2xl font-display font-bold text-primary-foreground">EM</span>
            </div>
            <div>
              <span className="text-xl font-display tracking-wider text-gradient-copper">EGYMETAL</span>
              <p className="text-xs text-muted-foreground -mt-1">Copper & Zinc Trading</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-copper text-primary-foreground px-6 py-2.5 rounded-lg font-semibold shadow-copper hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-up">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block mt-4 bg-gradient-copper text-primary-foreground px-6 py-2.5 rounded-lg font-semibold shadow-copper"
            >
              Get Quote
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-copper rounded-lg flex items-center justify-center shadow-copper">
              <span className="text-xl font-display font-bold text-primary-foreground">EM</span>
            </div>
            <div>
              <span className="text-lg font-display tracking-wider text-gradient-copper">EGYMETAL</span>
              <p className="text-xs text-muted-foreground -mt-1">Copper & Zinc Trading</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear} EgyMetal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

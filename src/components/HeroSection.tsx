import heroImage from "@/assets/hero-factory.jpg";
import { ArrowDown, Factory, Truck, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      aria-label="EgyMetal - Copper Factory in Egypt by Alfy Gerges"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <header className="max-w-4xl">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full border border-primary/50 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
              Egypt's Leading Copper Factory & Zinc Importer
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">EGYMETAL</span>
            <br />
            <span className="text-gradient-copper">COPPER</span>
            <span className="text-foreground"> & </span>
            <span className="text-zinc-light">ZINC</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <strong>EgyMetal</strong>, owned by <strong>Alfy Gerges</strong>, is Egypt's trusted copper factory manufacturing premium copper pipes, rods, sheets, and importing high-grade zinc ingots for industries across Egypt and the region.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-gradient-copper text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-copper hover:opacity-90 transition-all duration-300 hover:scale-105"
              aria-label="View EgyMetal copper and zinc products"
            >
              View Products
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Contact EgyMetal for quotes"
            >
              Contact Us
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-xl animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <article className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <Factory className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display text-2xl text-foreground">20+</p>
                <p className="text-sm text-muted-foreground">Years in Copper Manufacturing</p>
              </div>
            </article>
            <article className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display text-2xl text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Egyptian Clients</p>
              </div>
            </article>
            <article className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display text-2xl text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Quality Assured</p>
              </div>
            </article>
          </div>
        </header>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Scroll to about section">
          <ArrowDown className="w-6 h-6" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

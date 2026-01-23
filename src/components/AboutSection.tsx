import { CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    "Egyptian-owned copper factory",
    "Direct zinc ingot imports to Egypt",
    "Competitive wholesale pricing",
    "Nationwide delivery across Egypt",
    "Industry-certified copper quality",
    "Trusted by Egyptian manufacturers",
  ];

  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 bg-gradient-metal metal-texture">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <article>
            <span className="inline-block px-4 py-2 rounded-full border border-primary/50 text-primary text-sm font-medium mb-4">
              About EgyMetal - Copper Factory Egypt
            </span>
            <h2 id="about-heading" className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              ALFY GERGES
              <br />
              <span className="text-gradient-copper">COPPER FACTORY</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              <strong>EgyMetal</strong> is Egypt's premier copper factory, founded and led by Egyptian engineer <strong>Alfy Gerges</strong>. As one of Egypt's leading copper manufacturers and zinc importers, we have established ourselves as a trusted partner for businesses seeking quality metal products.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our copper manufacturing facility in Egypt produces high-grade copper pipes, rods, sheets, and custom fabrications. Our import division ensures a steady supply of premium zinc ingots from trusted global sources, making EgyMetal your one-stop solution for industrial metals in Egypt.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-8 rounded-2xl shadow-card border border-border shine-effect col-span-2 sm:col-span-1">
              <div className="font-display text-5xl md:text-6xl text-gradient-copper mb-2">20+</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Years of Excellence</h3>
              <p className="text-muted-foreground">Serving Egyptian industries with premium metals since establishment.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-card border border-border shine-effect col-span-2 sm:col-span-1">
              <div className="font-display text-5xl md:text-6xl text-zinc-light mb-2">1000+</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Tons Delivered</h3>
              <p className="text-muted-foreground">Monthly capacity of copper and zinc products.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-card border border-border shine-effect col-span-2">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-copper rounded-2xl flex items-center justify-center shadow-copper">
                  <span className="text-3xl font-display text-primary-foreground">AG</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Alfy Gerges</h3>
                  <p className="text-primary font-medium">Founder & CEO</p>
                  <p className="text-muted-foreground mt-1">Egyptian Engineer & Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

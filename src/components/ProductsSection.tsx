import copperProducts from "@/assets/copper-products.jpg";
import zincIngots from "@/assets/zinc-ingots.jpg";
import { ArrowRight } from "lucide-react";

const ProductsSection = () => {
  const copperItems = [
    "Copper Pipes & Tubes",
    "Copper Rods & Bars",
    "Copper Sheets & Plates",
    "Copper Wire",
    "Copper Fittings",
    "Custom Fabrication",
  ];

  const zincItems = [
    "High-Grade Zinc Ingots",
    "Special High Grade (SHG)",
    "Zinc Alloy Ingots",
    "Bulk Import Available",
    "Competitive Pricing",
    "Direct from Source",
  ];

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/50 text-primary text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            QUALITY <span className="text-gradient-copper">METALS</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            We manufacture premium copper products and import high-grade zinc ingots to meet your industrial needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Copper Products Card */}
          <div className="group relative bg-card rounded-3xl overflow-hidden shadow-card border border-border hover:border-primary/50 transition-all duration-500">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={copperProducts}
                alt="Copper Products"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                Manufacturing
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                <span className="text-gradient-copper">COPPER</span> PRODUCTS
              </h3>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {copperItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all"
              >
                Request Quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Zinc Products Card */}
          <div className="group relative bg-card rounded-3xl overflow-hidden shadow-card border border-border hover:border-zinc/50 transition-all duration-500">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={zincIngots}
                alt="Zinc Ingots"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-block px-3 py-1 rounded-full bg-zinc/20 text-zinc-light text-sm font-medium mb-4">
                Import
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                <span className="text-zinc-light">ZINC</span> INGOTS
              </h3>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {zincItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-light" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-zinc-light font-semibold group-hover:gap-4 transition-all"
              >
                Request Quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

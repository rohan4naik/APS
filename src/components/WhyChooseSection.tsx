import { Leaf, IndianRupee, Shield, Paintbrush, HardHat, Package } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Leaf,
    title: "Sustainable",
    description: "Eco-friendly materials and processes that minimize environmental impact",
  },
  {
    icon: IndianRupee,
    title: "Cost Efficient",
    description: "Premium quality at competitive prices with long-term value",
  },
  {
    icon: Shield,
    title: "Durable & Low Maintenance",
    description: "Built to withstand weather and heavy use with minimal upkeep",
  },
  {
    icon: Paintbrush,
    title: "Design Versatility",
    description: "30+ patterns available plus custom designs to match your vision",
  },
  {
    icon: HardHat,
    title: "Professional Execution",
    description: "Skilled craftsmen with 12+ years of hands-on experience",
  },
  {
    icon: Package,
    title: "End-to-End Delivery",
    description: "Complete project management from consultation to handover",
  },
];

export function WhyChooseSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <section id="why-us" className="py-20 bg-background texture-concrete">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-12 scroll-fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <p className="text-accent font-montserrat font-semibold tracking-widest text-sm uppercase mb-4">
            Our Advantages
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4 text-embossed">
            Why Choose APS DECORATIVE?
          </h2>
          <div className="divider-engraved max-w-24 mx-auto" />
        </div>

        <div 
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto stagger-children ${gridVisible ? 'visible' : ''}`}
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="card-concrete p-8 text-center group opacity-0"
            >
              {/* Icon pedestal */}
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center shadow-engraved group-hover:shadow-raised transition-shadow">
                  <benefit.icon className="text-primary group-hover:scale-110 transition-transform" size={36} />
                </div>
                {/* Pedestal base */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-secondary rounded-sm shadow-inner" />
              </div>

              <h3 className="font-heading text-xl text-foreground mb-3 text-embossed">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

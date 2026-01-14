import { Building, Building2, Factory, Home, Landmark, Store } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const clients = [
  { name: "Amanora", icon: Building },
  { name: "Kumar Pacific", icon: Building2 },
  { name: "BG Shirke", icon: Factory },
  { name: "Kolte Patil", icon: Home },
  { name: "PMC PCMC", icon: Landmark },
  { name: "Nikhil Construction", icon: Store },
];

export function ClientsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <section id="clients" className="py-20 bg-primary texture-concrete">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-12 scroll-fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <p className="text-accent font-montserrat font-semibold tracking-widest text-sm uppercase mb-4">
            Our Partners
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-4 text-embossed">
            Major Clients & Partners
          </h2>
          <div className="divider-engraved max-w-24 mx-auto mb-6 opacity-30" />
          <p className="text-primary-foreground/60 max-w-xl mx-auto">
            Trusted by builders, architects, and corporate sites across India.
          </p>
        </div>

        <div 
          ref={gridRef}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto stagger-children ${gridVisible ? 'visible' : ''}`}
        >
          {clients.map((client) => (
            <div
              key={client.name}
              className="group relative opacity-0"
            >
              {/* Stepping stone tile */}
              <div className="aspect-square bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg flex flex-col items-center justify-center p-4 transition-all duration-300 hover:bg-primary-foreground/10 hover:border-accent/30 shadow-engraved group-hover:shadow-raised">
                <client.icon className="text-primary-foreground/40 group-hover:text-accent transition-colors mb-2" size={32} />
                <p className="text-primary-foreground/50 text-xs text-center font-montserrat group-hover:text-primary-foreground/70 transition-colors">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

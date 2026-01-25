import { Building, Building2, Factory, Home, Landmark, Store } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Import client logos
import amanoraLogo from "@/assets/clients/amanora.png";
import kumarPacificLogo from "@/assets/clients/kumar-pacific.png";
import shirkeLogo from "@/assets/clients/shirke.jpg";
import koltePatilLogo from "@/assets/clients/kolte-patil.jpg";
import pmcLogo from "@/assets/clients/pmc.jpg";
import chowguleLogo from "@/assets/clients/chowgule.png";
import ajwaniLogo from "@/assets/clients/ajwani.jpg";
import bvgLogo from "@/assets/clients/bvg.jpg";

const clients = [
  { name: "Amanora", logo: amanoraLogo, icon: Building },
  { name: "Kumar Pacific", logo: kumarPacificLogo, icon: Building2 },
  { name: "BG Shirke", logo: shirkeLogo, icon: Factory },
  { name: "Kolte Patil", logo: koltePatilLogo, icon: Home },
  { name: "PMC / PCMC", logo: pmcLogo, icon: Landmark },
  { name: "BVG", logo: bvgLogo, icon: Store },
  { name: "Chowgule Industries", logo: chowguleLogo, icon: Factory },
  { name: "Ajwani Infrastructure", logo: ajwaniLogo, icon: Building2 },
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
          className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-7xl mx-auto stagger-children ${gridVisible ? 'visible' : ''}`}
        >
          {clients.map((client) => (
            <div
              key={client.name}
              className="group relative opacity-0"
            >
              {/* Stepping stone tile */}
              <div className="aspect-square bg-white border border-primary-foreground/10 rounded-lg flex flex-col items-center justify-center p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl shadow-lg group-hover:border-accent/40 overflow-hidden skeleton-loading">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <>
                    <client.icon className="text-primary-foreground/20 group-hover:text-accent transition-colors mb-3" size={40} />
                    <p className="text-primary-foreground/40 text-[10px] text-center font-montserrat font-bold group-hover:text-primary-foreground/60 transition-colors uppercase tracking-[0.2em]">
                      {client.name}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

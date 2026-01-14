import { ClipboardList, Palette, HardHat, Stamp, Droplets, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: ClipboardList,
    title: "Site Visit & Consultation",
    description: "We assess your space and understand your requirements",
  },
  {
    icon: Palette,
    title: "Pattern Selection",
    description: "Choose from 30+ designs or request a custom pattern",
  },
  {
    icon: HardHat,
    title: "Base Preparation",
    description: "Proper groundwork for long-lasting results",
  },
  {
    icon: Stamp,
    title: "Stamping & Coloring",
    description: "Expert application of patterns and color treatments",
  },
  {
    icon: Droplets,
    title: "Sealing",
    description: "Protective coating for durability and shine",
  },
  {
    icon: CheckCircle,
    title: "Handover",
    description: "Final inspection and project completion",
  },
];

export function ProcessSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background texture-concrete">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-12 scroll-fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <p className="text-accent font-montserrat font-semibold tracking-widest text-sm uppercase mb-4">
            Methodology
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4 text-embossed">
            Our Process
          </h2>
          <div className="divider-engraved max-w-24 mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div 
            ref={gridRef}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${gridVisible ? 'visible' : ''}`}
          >
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative group opacity-0"
              >
                {/* Concrete timeline block */}
                <div className="card-concrete p-6 h-full">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-heading text-lg shadow-lg">
                    {index + 1}
                  </div>

                  <div className="flex items-start gap-4 pt-2">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 shadow-engraved group-hover:shadow-raised transition-shadow">
                      <step.icon className="text-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connector line (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

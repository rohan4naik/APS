import { User, Building2, Hammer } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function AboutSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 bg-background texture-concrete overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ease-out ${
            sectionVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
        >
          <p className="text-accent font-montserrat font-semibold tracking-widest text-sm uppercase mb-4">
            About Us
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6 text-embossed">
            About APS DECORATIVE
          </h2>
          <div className="divider-engraved max-w-24 mx-auto mb-8" />
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Founded with a passion for transforming ordinary spaces into extraordinary outdoor experiences, 
            APS DECORATIVE has been at the forefront of stamped concrete innovation for over 12 years. 
            Our journey began with a simple vision: to combine the durability of concrete with the 
            artistry of decorative design.
          </p>

          <div 
            ref={cardsRef}
            className={`grid md:grid-cols-3 gap-6 mt-12 stagger-children ${cardsVisible ? 'visible' : ''}`}
          >
            <div className="card-concrete p-6 text-center opacity-0">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <User className="text-accent" size={28} />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">Led by Amol Sahane</h3>
              <p className="text-muted-foreground text-sm">
                Hands-on craftsman with expertise in decorative concrete techniques
              </p>
            </div>

            <div className="card-concrete p-6 text-center opacity-0">
              <div className="w-16 h-16 mx-auto bg-secondary/40 rounded-full flex items-center justify-center mb-4">
                <Building2 className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">Residential & Commercial</h3>
              <p className="text-muted-foreground text-sm">
                Premium outdoor flooring solutions for homes and businesses
              </p>
            </div>

            <div className="card-concrete p-6 text-center opacity-0">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Hammer className="text-accent" size={28} />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">Complete Solutions</h3>
              <p className="text-muted-foreground text-sm">
                From design to execution, we handle every aspect of your project
              </p>
            </div>
          </div>

          <p className="text-primary font-montserrat font-semibold mt-12 text-lg">
            Design + Strength + Craftsmanship — Stamped to Last.
          </p>
        </div>
      </div>
    </section>
  );
}

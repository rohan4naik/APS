import { Award, Users, Palette, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { icon: Award, value: "12+", label: "Years Experience" },
  { icon: Users, value: "3.5K+", label: "Happy Clients" },
  { icon: Palette, value: "30+", label: "Signature Designs" },
  { icon: MapPin, value: "Pan-India", label: "Projects" },
];

export function StatsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 bg-primary texture-concrete">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 stagger-children ${isVisible ? 'visible' : ''}`}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative group opacity-0"
            >
              <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6 text-center transition-all duration-300 hover:bg-primary-foreground/10 hover:border-accent/30 shadow-engraved">
                <stat.icon className="mx-auto text-accent mb-3 group-hover:scale-110 transition-transform" size={36} />
                <p className="font-heading text-3xl md:text-4xl text-primary-foreground text-embossed">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/60 text-sm mt-1 font-montserrat">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

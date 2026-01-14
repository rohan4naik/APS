import { useEffect, useState } from "react";
import { ArrowRight, Download, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

// Stamped Concrete Images
import spiralImg from "@/assets/designs/spiral.png";
import circleImg from "@/assets/designs/circle.jpg";
import verticalImg from "@/assets/designs/vertical.png";
import ashlarImg from "@/assets/designs/ashlar-english.jpg";
import europeanFanImg from "@/assets/designs/european-fan.jpg";

// Epoxy Images
import epoxy1 from "@/assets/designs/epoxy/epoxy-1.jpg";
import epoxy2 from "@/assets/designs/epoxy/epoxy-2.jpg";
import epoxy3 from "@/assets/designs/epoxy/epoxy-3.jpg";
import epoxy4 from "@/assets/designs/epoxy/epoxy-4.jpg";

const stampedConcreteImages = [
  { name: "Spiral", image: spiralImg },
  { name: "Circle", image: circleImg },
  { name: "Vertical", image: verticalImg },
  { name: "Ashlar English", image: ashlarImg },
  { name: "European Fan", image: europeanFanImg },
];

const epoxyImages = [
  { name: "Epoxy Marble", image: epoxy1 },
  { name: "Epoxy Flakes", image: epoxy2 },
  { name: "Metallic Epoxy", image: epoxy3 },
  { name: "3D Epoxy", image: epoxy4 },
];

const materialImages = [
  { name: "Colour Hardener", image: "/images/colour-hardener.jpg" },
  { name: "Release Agent", image: "/images/release-agent.jpg" },
  { name: "Lacquer", image: "/images/lacquer.jpg" },
];

const badges = [
  { icon: Award, label: "12+ Years", sublabel: "Experience" },
  { icon: Users, label: "3.5K+", sublabel: "Happy Customers" },
];

export function HeroSection() {
  const [indices, setIndices] = useState([0, 1, 0, 0]); // Independent indices for 4 blocks
  const [activeBlock, setActiveBlock] = useState(0); // Track which block is currently "active" / changing

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBlock((prevBlock) => {
        const nextBlock = (prevBlock + 1) % 4;

        // Update the image index ONLY for the new active block
        setIndices((prevIndices) => {
          const newIndices = [...prevIndices];

          if (nextBlock === 0) newIndices[0] = (newIndices[0] + 1) % stampedConcreteImages.length;
          if (nextBlock === 1) newIndices[1] = (newIndices[1] + 1) % stampedConcreteImages.length;
          if (nextBlock === 2) newIndices[2] = (newIndices[2] + 1) % epoxyImages.length;
          if (nextBlock === 3) newIndices[3] = (newIndices[3] + 1) % materialImages.length;

          return newIndices;
        });

        return nextBlock;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToDesigns = () => {
    document.querySelector("#designs")?.scrollIntoView({ behavior: "smooth" });
  };

  // Define the content for the 4 blocks based on current indices
  const blocks = [
    { ...stampedConcreteImages[indices[0]], type: "Stamped Concrete" },
    { ...stampedConcreteImages[indices[1]], type: "Stamped Concrete" },
    { ...epoxyImages[indices[2]], type: "Epoxy Flooring" },
    { ...materialImages[indices[3]], type: "Material" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute min-w-full min-h-full object-cover"
          poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />

      {/* Texture overlay */}
      <div className="absolute inset-0 texture-concrete opacity-30" />

      {/* Decorative stamped pattern elements */}
      <div className="absolute top-20 right-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-montserrat font-semibold tracking-widest text-sm uppercase animate-fade-in">
                Stamped Concrete & Materials
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight text-embossed animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
                Durable & Beautiful
                <span className="block text-accent">Concrete Surfaces</span>
              </h1>
              <p className="text-primary-foreground/70 text-lg max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
                APS DECORATIVE provides premium stamped concrete designs with strong build quality and elegant outdoor finish. We execute projects and supply stamped concrete materials across India.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-lg px-4 py-3"
                >
                  <badge.icon className="text-accent" size={24} />
                  <div>
                    <p className="font-heading text-xl text-primary-foreground">{badge.label}</p>
                    <p className="text-primary-foreground/60 text-xs">{badge.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <Button
                onClick={scrollToDesigns}
                className="btn-gold text-primary px-6 py-6 text-lg font-montserrat font-semibold w-full sm:w-auto"
              >
                Explore Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-accent/30 text-accent hover:bg-accent/10 hover:text-accent px-6 py-6 text-lg font-montserrat font-semibold bg-transparent w-full sm:w-auto"
              >
                <a href="/brochure.pdf" download="APS-Decorative-Brochure.pdf" className="flex items-center justify-center">
                  <Download className="mr-2" size={20} />
                  Download Brochure
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Featured Gallery */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              {/* Gallery Grid */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-2 p-4 w-full h-full">
                  {blocks.map((block, i) => (
                    <div
                      key={i}
                      className={`rounded-md overflow-hidden relative transition-all duration-500 shadow-lg group ${activeBlock === i
                        ? "ring-2 ring-accent scale-105 z-10 opacity-100"
                        : "opacity-60 scale-95"
                        }`}
                    >
                      {/* Image Layer with fade key for smooth transition */}
                      <div key={`${block.name}-${i}`} className="absolute inset-0 animate-in fade-in duration-700">
                        <img
                          src={block.image}
                          alt={block.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-3 py-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-accent text-[10px] font-semibold uppercase tracking-wider mb-0.5">
                          {block.type}
                        </p>
                        <p className="text-white text-xs font-montserrat truncate">
                          {block.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-4 left-4 bg-primary/80 backdrop-blur-sm px-4 py-2 rounded-md z-10">
                <p className="text-accent text-sm font-montserrat font-semibold">Featured Work</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-accent/20 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

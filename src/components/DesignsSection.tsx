import { useState, useRef } from "react";
import { ArrowRight, Sparkles, Upload, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";



// Import design images

// import square4x4Image from "@/assets/designs/square-4x4.webp";
// import textureImage from "@/assets/designs/texture.webp";
// import treeGratingImage from "@/assets/designs/tree-grating.webp";
// import verticalImage from "@/assets/designs/vertical.webp";
// import woodenImage from "@/assets/designs/wooden.webp";
// import ashlarEnglishImage from "@/assets/designs/ashlar-english.webp";
// import bigRandomStoneImage from "@/assets/designs/big-random-stone.webp";

// import europeanFanImage from "@/assets/designs/european-fan.webp";
// import footpathImage from "@/assets/designs/footpath.webp";
// import gameStampImage from "@/assets/designs/game-stamp.webp";
// import leafImage from "@/assets/designs/leaf.webp";
// import royalAshlarImage from "@/assets/designs/royal-ashlar.webp";
// import runningBondImage from "@/assets/designs/running-bond.webp";
// import circleImage from "@/assets/designs/circle.webp";


// import cycleTrackImage from "@/assets/designs/cycle-track.webp";
// import gardenStoneImage from "@/assets/designs/garden-stone.webp";

// import spiralImage from "@/assets/designs/spiral.webp";



import epoxy1 from "@/assets/designs/epoxy/epoxy-1.webp";
import epoxy2 from "@/assets/designs/epoxy/epoxy-2.webp";
import epoxy3 from "@/assets/designs/epoxy/epoxy-3.webp";
import epoxy4 from "@/assets/designs/epoxy/epoxy-4.webp";
import epoxy5 from "@/assets/designs/epoxy/epoxy-5.webp";
import epoxy6 from "@/assets/designs/epoxy/epoxy-6.webp";
import epoxy7 from "@/assets/designs/epoxy/epoxy-7.webp";
import epoxy8 from "@/assets/designs/epoxy/epoxy-8.webp";

interface Design {
  name: string;
  image?: string;
}

const designs: Design[] = [
  { name: "Square 1'×1'", image: "/images/projects/square-1x1/3.webp" },
  { name: "Square 4'×4'", image: "/images/designs/square-4x4.webp" },
  { name: "Texture", image: "/images/designs/texture.webp" },
  { name: "Tree Grating", image: "/images/designs/tree-grating.webp" },
  { name: "Vertical", image: "/images/designs/vertical.webp" },
  { name: "Wooden", image: "/images/designs/wooden.webp" },
  { name: "Ashlar English", image: "/images/designs/ashlar-english.webp" },
  { name: "Random Stone", image: "/images/designs/big-random-stone.webp" },
  { name: "Borders", image: "/images/projects/borders/2.webp" },
  { name: "European Fan", image: "/images/designs/european-fan.webp" },
  { name: "Footpath", image: "/images/designs/footpath.webp" },
  { name: "Game Stamp", image: "/images/designs/game-stamp.webp" },
  { name: "Leaf", image: "/images/projects/leaf/2.webp" },
  { name: "Royal Ashlar", image: "/images/designs/royal-ashlar.webp" },
  { name: "Running Bond", image: "/images/designs/running-bond.webp" },
  { name: "Circle", image: "/images/designs/circle.webp" },

  { name: "Compass", image: "/images/projects/compass/2.webp" },
  { name: "Cycle Track", image: "/images/designs/cycle-track.webp" },
  { name: "Garden Stone", image: "/images/designs/garden-stone.webp" },
  { name: "Groove Filling", image: "/images/projects/groove-filling/2.webp" },
  { name: "Spiral", image: "/images/projects/spiral/2.webp" },
  { name: "London Cobble", image: "/images/projects/london-cobble/2.webp" },
  { name: "Herring Bone", image: "/images/projects/herring-bone/2.webp" },
  { name: "Pebbles", image: "/images/projects/pebbles/1.webp" },

];

const epoxyDesigns: Design[] = [
  { name: "Epoxy Design 1", image: epoxy1 },
  { name: "Epoxy Design 2", image: epoxy2 },
  { name: "Epoxy Design 3", image: epoxy3 },
  { name: "Epoxy Design 4", image: epoxy4 },
  { name: "Epoxy Design 5", image: epoxy5 },
  { name: "Epoxy Design 6", image: epoxy6 },
  { name: "Epoxy Design 7", image: epoxy7 },
  { name: "Epoxy Design 8", image: epoxy8 },
];

const concretePolishingDesigns: Design[] = [
  { name: "Concrete Polishing 1", image: "/images/designs/concrete-polishing/cp-1.webp" },
  { name: "Concrete Polishing 2", image: "/images/designs/concrete-polishing/cp-2.webp" },
  { name: "Concrete Polishing 3", image: "/images/designs/concrete-polishing/cp-3.webp" },
  { name: "Concrete Polishing 4", image: "/images/designs/concrete-polishing/cp-4.webp" },
];

const exposeAggregateDesigns: Design[] = [
  { name: "Expose Aggregate 1", image: "/images/designs/expose-aggregate/ea-1.webp" },
  { name: "Expose Aggregate 2", image: "/images/designs/expose-aggregate/ea-2.webp" },
  { name: "Expose Aggregate 3", image: "/images/designs/expose-aggregate/ea-3.webp" },
  { name: "Expose Aggregate 4", image: "/images/designs/expose-aggregate/ea-4.webp" },
  { name: "Expose Aggregate 5", image: "/images/designs/expose-aggregate/ea-5.webp" },
  { name: "Expose Aggregate 6", image: "/images/designs/expose-aggregate/ea-6.webp" },
  { name: "Expose Aggregate 7", image: "/images/designs/expose-aggregate/ea-7.webp" },
  { name: "Expose Aggregate 8", image: "/images/designs/expose-aggregate/ea-8.webp" },
  { name: "Expose Aggregate 9", image: "/images/designs/expose-aggregate/ea-9.webp" },
];

const projectGalleries: Record<string, string[]> = {
  "Square 1'×1'": [
    "/images/projects/square-1x1/1.webp",
    "/images/projects/square-1x1/2.webp",
    "/images/projects/square-1x1/3.webp",
  ],
  "Square 4'×4'": [
    "/images/projects/square-4x4/1.webp",
    "/images/projects/square-4x4/2.webp",
    "/images/projects/square-4x4/3.webp",
  ],
  "Texture": [
    "/images/projects/texture/1.webp",
    "/images/projects/texture/2.webp",
  ],
  "Vertical": [
    "/images/projects/vertical/1.webp",
    "/images/projects/vertical/2.webp",
  ],
  "Tree Grating": [
    "/images/projects/tree-grating/1.webp",
    "/images/projects/tree-grating/2.webp",
  ],
  "Royal Ashlar": [
    "/images/projects/royal-ashlar/1.webp",
    "/images/projects/royal-ashlar/2.webp",
    "/images/projects/royal-ashlar/3.webp",
  ],
  "Wooden": [
    "/images/projects/wooden/1.webp",
    "/images/projects/wooden/2.webp",
  ],
  "Ashlar English": [
    "/images/projects/ashlar-english/1.webp",
    "/images/projects/ashlar-english/2.webp",
    "/images/projects/ashlar-english/3.webp",
  ],
  "Random Stone": [
    "/images/projects/big-random-stone/1.webp",
    "/images/projects/big-random-stone/2.webp",
    "/images/projects/big-random-stone/3.webp",
  ],
  "European Fan": [
    "/images/projects/european-fan/1.webp",
    "/images/projects/european-fan/2.webp",
    "/images/projects/european-fan/3.webp",
  ],
  "Footpath": [
    "/images/projects/footpath/1.webp",
    "/images/projects/footpath/2.webp",
    "/images/projects/footpath/3.webp",
  ],
  "Game Stamp": [
    "/images/projects/game-stamp/1.webp",
    "/images/projects/game-stamp/2.webp",
    "/images/projects/game-stamp/3.webp",
    "/images/projects/game-stamp/4.webp",
    "/images/projects/game-stamp/5.webp",
  ],
  "Running Bond": [
    "/images/projects/running-bond/1.webp",
    "/images/projects/running-bond/2.webp",
  ],
  "Leaf": [
    "/images/projects/leaf/1.webp",
    "/images/projects/leaf/2.webp",
    "/images/projects/leaf/3.webp",
  ],
  "Circle": [
    "/images/projects/circle/1.webp",
    "/images/projects/circle/2.webp",
    "/images/projects/circle/3.webp",
    "/images/projects/circle/4.webp",
  ],
  "Compass": [
    "/images/projects/compass/1.webp",
    "/images/projects/compass/2.webp",
    "/images/projects/compass/3.webp",
  ],
  "Cycle Track": [
    "/images/projects/cycle-track/1.webp",
    "/images/projects/cycle-track/2.webp",
    "/images/projects/cycle-track/3.webp",
  ],
  "Garden Stone": [
    "/images/projects/garden-stone/1.webp",
    "/images/projects/garden-stone/2.webp",
    "/images/projects/garden-stone/3.webp",
  ],
  "Groove Filling": [
    "/images/projects/groove-filling/1.webp",
    "/images/projects/groove-filling/2.webp",
    "/images/projects/groove-filling/3.webp",
  ],
  "Spiral": [
    "/images/projects/spiral/1.webp",
    "/images/projects/spiral/2.webp",
  ],
  "London Cobble": [
    "/images/projects/london-cobble/1.webp",
    "/images/projects/london-cobble/2.webp",
    "/images/projects/london-cobble/3.webp",
  ],
  "Herring Bone": [
    "/images/projects/herring-bone/1.webp",
    "/images/projects/herring-bone/2.webp",
  ],
  "Borders": [
    "/images/projects/borders/1.webp",
    "/images/projects/borders/2.webp",
    "/images/projects/borders/3.webp",
    "/images/projects/borders/4.webp",
  ],
  "Pebbles": [
    "/images/projects/pebbles/1.webp",
    "/images/projects/pebbles/2.webp",
    "/images/projects/pebbles/3.webp",
  ],
};

export function DesignsSection() {
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
  const [expandedProjectImage, setExpandedProjectImage] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: customRef, isVisible: customVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const isImagePreviewOnly = selectedDesign && (
    selectedDesign.startsWith("Epoxy Design") ||
    selectedDesign.startsWith("Concrete Polishing") ||
    selectedDesign.startsWith("Expose Aggregate")
  );

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        toast({
          title: "Design uploaded!",
          description: "We'll review your custom design and get back to you soon.",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToContact = (designName: string) => {
    setSelectedDesign(null);
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const designSelect = document.querySelector('select[name="design"]') as HTMLSelectElement;
        if (designSelect) {
          designSelect.value = designName;
        }
      }, 500);
    }
  };

  return (
    <section id="designs" className="py-20 bg-secondary/30 texture-concrete pattern-stamped">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`text-center mb-12 scroll-fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <p className="text-accent font-montserrat font-semibold tracking-widest text-sm uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4 text-embossed">
            Our Designs
          </h2>
          <div className="divider-engraved max-w-24 mx-auto mb-6" />

        </div>

        {/* Custom Design Highlight */}
        <div
          ref={customRef}
          className={`mb-10 scroll-scale ${customVisible ? 'visible' : ''}`}
        >
          <button
            onClick={() => setSelectedDesign("Custom Design")}
            className="w-full max-w-4xl mx-auto block group"
          >
            <div className="relative overflow-hidden bg-gradient-to-r from-accent/20 via-secondary/50 to-accent/20 rounded-xl p-4 md:p-6 border-2 border-accent/40 shadow-raised hover:shadow-hover transition-all duration-300 hover:scale-[1.02]">
              {/* Animated sparkle effects */}
              <div className="absolute top-4 left-4 animate-pulse">
                <Sparkles className="text-accent" size={24} />
              </div>
              <div className="absolute bottom-4 right-4 animate-pulse" style={{ animationDelay: "0.5s" }}>
                <Sparkles className="text-secondary" size={20} />
              </div>
              <div className="absolute top-1/2 right-8 -translate-y-1/2 animate-pulse hidden md:block" style={{ animationDelay: "1s" }}>
                <Sparkles className="text-accent/60" size={16} />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-2 text-embossed">
                  ✨ Custom Design ✨
                </h3>
                <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
                  Have a unique vision? We create patterns tailored to your imaginations.
                </p>
              </div>

              {/* Decorative border glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </button>
        </div>

        <Tabs defaultValue="stamp-concrete" className="w-full">
          <div className="relative mb-8">
            {/* Gradient indicators for scroll */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-secondary/30 to-transparent pointer-events-none z-10 lg:hidden" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-secondary/30 to-transparent pointer-events-none z-10 lg:hidden" />

            <TabsList className="flex flex-nowrap overflow-x-auto lg:grid w-full lg:grid-cols-4 max-w-3xl mx-auto h-auto gap-2 md:gap-0 pb-2 lg:pb-0">
              <TabsTrigger value="stamp-concrete" className="whitespace-nowrap px-1 py-1 text-sm min-w-[max-content]">Stamp Concrete</TabsTrigger>
              <TabsTrigger value="epoxy-flooring" className="whitespace-nowrap px-1 py-1 text-sm min-w-[max-content]">Epoxy Flooring</TabsTrigger>
              <TabsTrigger value="concrete-polishing" className="whitespace-nowrap px-1 py-1 text-sm min-w-[max-content]">Concrete Polishing</TabsTrigger>
              <TabsTrigger value="expose-aggregate" className="whitespace-nowrap px-1 py-1 text-sm min-w-[max-content]">Expose Aggregate</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="stamp-concrete" className="space-y-10 animate-in fade-in-50 duration-500">


            {/* Design Grid - 10 columns x 3 rows */}
            <div
              ref={gridRef}
              className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 scroll-fade-in ${gridVisible ? 'visible' : ''}`}
            >
              {designs.map((design, index) => (
                <button
                  key={design.name}
                  onClick={() => setSelectedDesign(design.name)}
                  className="group flex flex-col items-center"
                  style={{ animationDelay: `${index * 0.03}s` }}
                >
                  <style>{`
                    .image-loading {
                      position: relative;
                    }
                    .image-loading::before {
                      content: "";
                      position: absolute;
                      inset: 0;
                      z-index: 1;
                      background-color: hsl(var(--muted) / 0.3);
                      animation: skeleton-pulse 1.5s ease-in-out infinite;
                    }
                    .image-loaded::before {
                      display: none;
                    }
                  `}</style>
                  {/* Image */}
                  <div className="relative aspect-square w-full bg-card rounded-lg overflow-hidden stamp-hover shadow-raised mb-2 skeleton-loading">
                    {design.image ? (
                      <img
                        src={design.image}
                        alt={design.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <>
                        {/* Texture background for placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-secondary/20" />

                        {/* Pattern overlay */}
                        <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity">
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            <pattern id={`pattern-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                              <rect width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
                            </pattern>
                            <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                          </svg>
                        </div>
                      </>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                      <ArrowRight className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                    </div>
                  </div>

                  {/* Design name under image */}
                  <p className="font-montserrat text-xs md:text-sm text-foreground text-center leading-tight group-hover:text-accent transition-colors line-clamp-2">
                    {design.name}
                  </p>
                </button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="epoxy-flooring">
            <div className="space-y-10 animate-in fade-in-50 duration-500">
              <div
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4"
              >
                {epoxyDesigns.map((design, index) => (
                  <button
                    key={design.name}
                    onClick={() => setSelectedDesign(design.name)}
                    className="group flex flex-col items-center"
                  >
                    <div className="relative aspect-square w-full bg-card rounded-lg overflow-hidden stamp-hover shadow-raised mb-2 skeleton-loading">
                      <img
                        src={design.image}
                        alt={design.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                        <ArrowRight className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={() => scrollToContact("Epoxy Flooring")}
                  className="btn-gold text-primary px-8 py-6 text-lg"
                >
                  Enquire About Epoxy Flooring
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="concrete-polishing">
            <div className="space-y-10 animate-in fade-in-50 duration-500">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {concretePolishingDesigns.map((design, index) => (
                  <button
                    key={design.name}
                    onClick={() => setSelectedDesign(design.name)}
                    className="group flex flex-col items-center"
                  >
                    <div className="relative aspect-[3/4] w-full bg-card rounded-lg overflow-hidden stamp-hover shadow-raised skeleton-loading">
                      <img
                        src={design.image}
                        alt={design.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                        <ArrowRight className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={() => scrollToContact("Concrete Polishing")}
                  className="btn-gold text-primary px-8 py-6 text-lg"
                >
                  Enquire About Concrete Polishing
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="expose-aggregate">
            <div className="space-y-10 animate-in fade-in-50 duration-500">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
                {exposeAggregateDesigns.map((design, index) => (
                  <button
                    key={design.name}
                    onClick={() => setSelectedDesign(design.name)}
                    className="group flex flex-col items-center"
                  >
                    <div className="relative aspect-square w-full bg-card rounded-lg overflow-hidden stamp-hover shadow-raised mb-2">
                      <img
                        src={design.image}
                        alt={design.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                        <ArrowRight className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={() => scrollToContact("Expose Aggregate")}
                  className="btn-gold text-primary px-8 py-6 text-lg"
                >
                  Enquire About Expose Aggregate
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Design Modal */}
        <Dialog open={!!selectedDesign} onOpenChange={() => { setSelectedDesign(null); setUploadedImage(null); }}>
          <DialogContent className={isImagePreviewOnly ? "max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none" : "w-[90vw] max-w-3xl max-h-[90vh] overflow-y-auto"}>
            {isImagePreviewOnly ? (
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={
                    epoxyDesigns.find(d => d.name === selectedDesign)?.image ||
                    concretePolishingDesigns.find(d => d.name === selectedDesign)?.image ||
                    exposeAggregateDesigns.find(d => d.name === selectedDesign)?.image
                  }
                  alt={selectedDesign || ""}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
              </div>
            ) : (
              <>
                <DialogHeader>
                  <DialogTitle className="font-heading text-2xl text-embossed">
                    {selectedDesign}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  {selectedDesign === "Custom Design" ? (
                    /* Custom Design - Upload Option */
                    <>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        accept="image/*"
                        className="hidden"
                      />
                      {uploadedImage ? (
                        <div className="aspect-square bg-muted rounded-lg overflow-hidden max-w-[80%] mx-auto">
                          <img
                            src={uploadedImage}
                            alt="Uploaded design"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="aspect-square w-full bg-muted rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-accent/30 hover:border-accent/60 transition-colors cursor-pointer"
                        >
                          <Upload className="text-accent mb-2" size={40} />
                          <p className="text-muted-foreground font-montserrat">Click to upload your design</p>
                          <p className="text-muted-foreground/60 text-sm">PNG, JPG up to 10MB</p>
                        </button>
                      )}
                      <p className="text-muted-foreground">
                        Upload your custom design idea and our team will create a bespoke pattern tailored to your vision.
                      </p>
                      {uploadedImage && (
                        <Button
                          onClick={() => scrollToContact("Custom Design")}
                          className="w-full btn-gold text-primary"
                        >
                          Submit & Get Quote
                          <ArrowRight className="ml-2" size={18} />
                        </Button>
                      )}
                    </>
                  ) : (
                    /* Regular Design - Show design image and project gallery */
                    <>
                      {(designs.find(d => d.name === selectedDesign) || concretePolishingDesigns.find(d => d.name === selectedDesign) || exposeAggregateDesigns.find(d => d.name === selectedDesign))?.image ? (
                        <div className="aspect-square bg-muted rounded-lg overflow-hidden max-w-[80%] mx-auto skeleton-loading">
                          <img
                            src={(designs.find(d => d.name === selectedDesign) ||
                              epoxyDesigns.find(d => d.name === selectedDesign) ||
                              concretePolishingDesigns.find(d => d.name === selectedDesign) ||
                              exposeAggregateDesigns.find(d => d.name === selectedDesign))?.image}
                            alt={selectedDesign || ""}
                            className="w-full h-full object-contain" // Changed from object-cover to contain to see full image
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      ) : (
                        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center max-w-[80%] mx-auto">
                          <p className="text-muted-foreground">Design preview coming soon</p>
                        </div>
                      )}

                      {/* Project Images Section - Only for Stamp Concrete */}
                      {designs.some(d => d.name === selectedDesign) && (
                        <div className="space-y-2">
                          <p className="font-montserrat font-semibold text-foreground flex items-center gap-2">
                            <Image size={18} className="text-accent" />
                            Project Gallery
                          </p>
                          <div className="grid grid-cols-5 gap-2">
                            {(() => {
                              const projectImages = selectedDesign ? projectGalleries[selectedDesign] || [] : [];
                              const showPlaceholders = ["Borders"].includes(selectedDesign || "");
                              // distinct indices to render: if placeholders allowed, fixed 6 slots; otherwise just the available images
                              const indices = showPlaceholders
                                ? [0, 1, 2, 3, 4, 5]
                                : Array.from({ length: projectImages.length }, (_, i) => i);

                              return indices.map((i) => {
                                const hasImage = projectImages[i];
                                return (
                                  <div
                                    key={i}
                                    className={`aspect-square bg-muted/50 rounded-md flex items-center justify-center border border-dashed border-muted-foreground/20 overflow-hidden skeleton-loading ${hasImage ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}`}
                                    onClick={() => hasImage && setExpandedProjectImage(hasImage)}
                                  >
                                    {hasImage ? (
                                      <img
                                        src={hasImage}
                                        alt={`${selectedDesign} project ${i + 1}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                    ) : (
                                      <p className="text-muted-foreground/50 text-xs text-center">Coming soon</p>
                                    )}
                                  </div>
                                );
                              });
                            })()}
                          </div>
                        </div>
                      )}

                      <p className="text-muted-foreground">
                        The {selectedDesign} pattern is perfect for driveways, patios, walkways, and commercial spaces.
                        This design offers a beautiful blend of durability and aesthetic appeal.
                      </p>
                      <Button
                        onClick={() => scrollToContact(selectedDesign!)}
                        className="w-full btn-gold text-primary"
                      >
                        Enquire About This Design
                        <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {/* Expanded Project Image Dialog */}
      <Dialog open={!!expandedProjectImage} onOpenChange={() => setExpandedProjectImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
          <div className="w-full h-full flex items-center justify-center pointer-events-none">
            <img
              src={expandedProjectImage || ""}
              alt="Expanded project view"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl pointer-events-auto"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

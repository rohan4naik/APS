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
import square1x1Image from "@/assets/designs/square-1x1.webp";
import square4x4Image from "@/assets/designs/square-4x4.webp";
import textureImage from "@/assets/designs/texture.webp";
import treeGratingImage from "@/assets/designs/tree-grating.webp";
import verticalImage from "@/assets/designs/vertical.webp";
import woodenImage from "@/assets/designs/wooden.webp";
import ashlarEnglishImage from "@/assets/designs/ashlar-english.jpg";
import bigRandomStoneImage from "@/assets/designs/big-random-stone.jpg";
import borderImage from "@/assets/designs/border.jpg";
import europeanFanImage from "@/assets/designs/european-fan.jpg";
import footpathImage from "@/assets/designs/footpath.jpg";
import gameStampImage from "@/assets/designs/game-stamp.jpg";
import leafImage from "@/assets/designs/leaf.jpg";
import royalAsklerImage from "@/assets/designs/royal-askler.jpg";
import runningBondImage from "@/assets/designs/running-bond.webp";
import circleImage from "@/assets/designs/circle.jpg";

import compassImage from "@/assets/designs/compass.jpg";
import cycleTrackImage from "@/assets/designs/cycle-track.jpg";
import gardenStoneImage from "@/assets/designs/garden-stone.jpg";
import groveFillingImage from "@/assets/designs/grove-filling.jpg";
import spiralImage from "@/assets/designs/spiral.webp";
import londonCobbleImage from "@/assets/designs/london-cobble.jpg";
import herringBoneImage from "@/assets/designs/herring-bone.jpg";

import epoxy1 from "@/assets/designs/epoxy/epoxy-1.jpg";
import epoxy2 from "@/assets/designs/epoxy/epoxy-2.jpg";
import epoxy3 from "@/assets/designs/epoxy/epoxy-3.jpg";
import epoxy4 from "@/assets/designs/epoxy/epoxy-4.jpg";
import epoxy5 from "@/assets/designs/epoxy/epoxy-5.jpg";
import epoxy6 from "@/assets/designs/epoxy/epoxy-6.jpg";
import epoxy7 from "@/assets/designs/epoxy/epoxy-7.jpg";
import epoxy8 from "@/assets/designs/epoxy/epoxy-8.jpg";

interface Design {
  name: string;
  image?: string;
}

const designs: Design[] = [
  { name: "Square 1×1", image: square1x1Image },
  { name: "Square 4×4", image: square4x4Image },
  { name: "Texture", image: textureImage },
  { name: "Tree Grating", image: treeGratingImage },
  { name: "Vertical", image: verticalImage },
  { name: "Wooden", image: woodenImage },
  { name: "Ashlar English", image: ashlarEnglishImage },
  { name: "Random Stone", image: bigRandomStoneImage },
  { name: "Borders", image: borderImage },
  { name: "European Fan", image: europeanFanImage },
  { name: "Footpath", image: footpathImage },
  { name: "Game Stamp", image: gameStampImage },
  { name: "Leaf", image: "/APS/images/projects/leaf/2.jpg" },
  { name: "Royal Askler", image: royalAsklerImage },
  { name: "Running Bond", image: runningBondImage },
  { name: "Circle", image: circleImage },

  { name: "Compass", image: compassImage },
  { name: "Cycle Track", image: cycleTrackImage },
  { name: "Garden Stone", image: gardenStoneImage },
  { name: "Grove Filling", image: groveFillingImage },
  { name: "Spiral", image: "/APS/images/projects/spiral/2.jpg" },
  { name: "London Cobble", image: londonCobbleImage },
  { name: "Herring Bone", image: herringBoneImage },
  { name: "Pebbles", image: "/APS/images/projects/pebbles/1.jpg" },

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
  { name: "Concrete Polishing 1", image: "/APS/images/designs/concrete-polishing/cp-1.jpg" },
  { name: "Concrete Polishing 2", image: "/APS/images/designs/concrete-polishing/cp-2.jpg" },
  { name: "Concrete Polishing 3", image: "/APS/images/designs/concrete-polishing/cp-3.jpg" },
  { name: "Concrete Polishing 4", image: "/APS/images/designs/concrete-polishing/cp-4.jpg" },
];

const exposeAggregateDesigns: Design[] = [
  { name: "Expose Aggregate 1", image: "/APS/images/designs/expose-aggregate/ea-1.jpg" },
  { name: "Expose Aggregate 2", image: "/APS/images/designs/expose-aggregate/ea-2.jpg" },
  { name: "Expose Aggregate 3", image: "/APS/images/designs/expose-aggregate/ea-3.jpg" },
  { name: "Expose Aggregate 4", image: "/APS/images/designs/expose-aggregate/ea-4.jpg" },
  { name: "Expose Aggregate 5", image: "/APS/images/designs/expose-aggregate/ea-5.jpg" },
  { name: "Expose Aggregate 6", image: "/APS/images/designs/expose-aggregate/ea-6.jpg" },
  { name: "Expose Aggregate 7", image: "/APS/images/designs/expose-aggregate/ea-7.jpg" },
  { name: "Expose Aggregate 8", image: "/APS/images/designs/expose-aggregate/ea-8.jpg" },
  { name: "Expose Aggregate 9", image: "/APS/images/designs/expose-aggregate/ea-9.jpg" },
];

const projectGalleries: Record<string, string[]> = {
  "Square 1×1": [
    "/APS/images/projects/square-1x1/1.jpg",
    "/APS/images/projects/square-1x1/2.jpg",
  ],
  "Square 4×4": [
    "/APS/images/projects/square-4x4/1.jpg",
    "/APS/images/projects/square-4x4/2.jpg",
    "/APS/images/projects/square-4x4/3.jpg",
  ],
  "Texture": [
    "/APS/images/projects/texture/1.jpg",
    "/APS/images/projects/texture/2.jpg",
  ],
  "Vertical": [
    "/APS/images/projects/vertical/1.jpg",
    "/APS/images/projects/vertical/2.jpg",
  ],
  "Tree Grating": [
    "/APS/images/projects/tree-grating/1.jpg",
    "/APS/images/projects/tree-grating/2.jpg",
  ],
  "Royal Askler": [
    "/APS/images/projects/royal-ashlar/1.jpg",
    "/APS/images/projects/royal-ashlar/2.jpg",
    "/APS/images/projects/royal-ashlar/3.jpg",
  ],
  "Wooden": [
    "/APS/images/projects/wooden/1.jpg",
    "/APS/images/projects/wooden/2.jpg",
  ],
  "Ashlar English": [
    "/APS/images/projects/ashlar-english/1.jpg",
    "/APS/images/projects/ashlar-english/2.jpg",
    "/APS/images/projects/ashlar-english/3.jpg",
  ],
  "Random Stone": [
    "/APS/images/projects/big-random-stone/1.jpg",
    "/APS/images/projects/big-random-stone/2.jpg",
    "/APS/images/projects/big-random-stone/3.jpg",
  ],
  "European Fan": [
    "/APS/images/projects/european-fan/1.jpg",
    "/APS/images/projects/european-fan/2.jpg",
    "/APS/images/projects/european-fan/3.jpg",
  ],
  "Footpath": [
    "/APS/images/projects/footpath/1.jpg",
    "/APS/images/projects/footpath/2.jpg",
    "/APS/images/projects/footpath/3.jpg",
  ],
  "Game Stamp": [
    "/APS/images/projects/game-stamp/1.jpg",
    "/APS/images/projects/game-stamp/2.jpg",
    "/APS/images/projects/game-stamp/3.jpg",
    "/APS/images/projects/game-stamp/4.jpg",
    "/APS/images/projects/game-stamp/5.png",
  ],
  "Running Bond": [
    "/APS/images/projects/running-bond/1.png",
    "/APS/images/projects/running-bond/2.png",
  ],
  "Leaf": [
    "/APS/images/projects/leaf/1.jpg",
    "/APS/images/projects/leaf/2.jpg",
    "/APS/images/projects/leaf/3.png",
  ],
  "Circle": [
    "/APS/images/projects/circle/1.jpg",
    "/APS/images/projects/circle/2.jpg",
    "/APS/images/projects/circle/3.jpg",
    "/APS/images/projects/circle/4.jpg",
  ],
  "Compass": [
    "/APS/images/projects/compass/1.jpg",
  ],
  "Cycle Track": [
    "/APS/images/projects/cycle-track/1.jpg",
    "/APS/images/projects/cycle-track/2.jpg",
    "/APS/images/projects/cycle-track/3.jpg",
  ],
  "Garden Stone": [
    "/APS/images/projects/garden-stone/1.jpg",
    "/APS/images/projects/garden-stone/2.jpg",
    "/APS/images/projects/garden-stone/3.jpg",
  ],
  "Grove Filling": [
    "/APS/images/projects/groove-filling/1.jpg",
    "/APS/images/projects/groove-filling/2.jpg",
    "/APS/images/projects/groove-filling/3.jpg",
  ],
  "Spiral": [
    "/APS/images/projects/spiral/1.jpg",
    "/APS/images/projects/spiral/2.jpg",
  ],
  "London Cobble": [
    "/APS/images/projects/london-cobble/1.jpg",
    "/APS/images/projects/london-cobble/2.jpg",
    "/APS/images/projects/london-cobble/3.jpg",
  ],
  "Herring Bone": [
    "/APS/images/projects/herring-bone/1.jpg",
  ],
  "Borders": [
    "/APS/images/projects/borders/1.jpg",
    "/APS/images/projects/borders/2.jpg",
    "/APS/images/projects/borders/3.jpg",
    "/APS/images/projects/borders/4.jpg",
  ],
  "Pebbles": [
    "/APS/images/projects/pebbles/1.jpg",
    "/APS/images/projects/pebbles/2.jpg",
    "/APS/images/projects/pebbles/3.jpg",
  ],
};

export function DesignsSection() {
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
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
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            <TabsTrigger value="stamp-concrete">Stamp Concrete</TabsTrigger>
            <TabsTrigger value="epoxy-flooring">Epoxy Flooring</TabsTrigger>
            <TabsTrigger value="concrete-polishing">Concrete Polishing</TabsTrigger>
            <TabsTrigger value="expose-aggregate">Expose Aggregate</TabsTrigger>
          </TabsList>

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
                  {/* Image */}
                  <div className="relative aspect-square w-full bg-card rounded-lg overflow-hidden stamp-hover shadow-raised mb-2">
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
                    <div className="relative aspect-[3/4] w-full bg-card rounded-lg overflow-hidden stamp-hover shadow-raised">
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
          <DialogContent className={isImagePreviewOnly ? "max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none" : "max-w-lg"}>
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
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                          <img
                            src={uploadedImage}
                            alt="Uploaded design"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="aspect-video w-full bg-muted rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-accent/30 hover:border-accent/60 transition-colors cursor-pointer"
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
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                          <img
                            src={(designs.find(d => d.name === selectedDesign) || concretePolishingDesigns.find(d => d.name === selectedDesign) || exposeAggregateDesigns.find(d => d.name === selectedDesign))?.image}
                            alt={selectedDesign || ""}
                            className="w-full h-full object-contain" // Changed from object-cover to contain to see full image
                          />
                        </div>
                      ) : (
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
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
                                    className="aspect-square bg-muted/50 rounded-md flex items-center justify-center border border-dashed border-muted-foreground/20 overflow-hidden"
                                  >
                                    {hasImage ? (
                                      <img
                                        src={hasImage}
                                        alt={`${selectedDesign} project ${i + 1}`}
                                        className="w-full h-full object-cover"
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
    </section>
  );
}

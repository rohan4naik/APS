import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";



export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      city: formData.get("city"),
      service: formData.get("design"),
      requirement: formData.get("requirement"),
      area: formData.get("area"),
      contactMethod: formData.get("contact_method"),
      message: formData.get("message"),
    };

    const whatsappMessage = `*New Enquiry from Website*
Name:- ${data.name}
Phone:- ${data.phone}
Email:- ${data.email}
City:- ${data.city || "Not specified"}
Service/Product:- ${data.service || "Not specified"}
Requirement:- ${data.requirement || "Not specified"}
Area:- ${data.area || "Not specified"} sq ft
Preferred Contact:- ${data.contactMethod}
Message:- ${data.message || "No message"}`;

    const whatsappUrl = `https://wa.me/917020999425?text=${encodeURIComponent(whatsappMessage)}`;

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Enquiry Submitted!",
        description: "Thank you for contacting APS DECORATIVE. Our team will reach out shortly.",
      });

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-primary texture-concrete">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-montserrat font-semibold tracking-widest text-sm uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-4 text-embossed">
            Contact & Enquiry
          </h2>
          <div className="divider-engraved max-w-24 mx-auto opacity-30" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div
            ref={leftRef}
            className={`space-y-8 scroll-fade-left ${leftVisible ? 'visible' : ''}`}
          >
            <div>
              <h3 className="font-heading text-2xl text-primary-foreground mb-6">
                Contact Details
              </h3>

              <div className="space-y-4">
                <a
                  href="tel:+917020999425"
                  className="flex items-center gap-4 text-primary-foreground/80 hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Phone className="text-accent" size={22} />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-sm">Call Us</p>
                    <p className="font-montserrat font-semibold">+91 7020999425</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/917020999425?text=Hi%20APS%20DECORATIVE,%20I%20am%20interested%20in%20stamped%20concrete."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-primary-foreground/80 hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <MessageCircle className="text-accent" size={22} />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-sm">WhatsApp</p>
                    <p className="font-montserrat font-semibold">+91 7020999425</p>
                  </div>
                </a>

                <a
                  href="mailto:apsdecorative@gmail.com"
                  className="flex items-center gap-4 text-primary-foreground/80 hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="text-accent" size={22} />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-sm">Email</p>
                    <p className="font-montserrat font-semibold">apsdecorative@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-primary-foreground/80">
                  <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent" size={22} />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-sm">Location</p>
                    <p className="font-montserrat font-semibold">Pan-India Services</p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="mt-6 btn-gold text-primary"
              >
                <a
                  href="https://maps.app.goo.gl/gRnbAMrVbvk8Dr5ZA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2" size={18} />
                  View on Map
                </a>
              </Button>
            </div>

            <div className="p-6 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
              <p className="text-accent font-montserrat font-semibold text-lg mb-2">
                Design + Strength + Craftsmanship
              </p>
              <p className="text-primary-foreground/60 text-sm">
                — Stamped to Last.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={rightRef}
            className={`bg-card rounded-xl p-8 shadow-raised scroll-fade-right ${rightVisible ? 'visible' : ''}`}
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="mx-auto text-accent mb-4" size={64} />
                <h3 className="font-heading text-2xl text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for contacting APS DECORATIVE. Our team will reach out shortly.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="mt-6"
                >
                  Submit Another Enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-foreground text-sm font-medium mb-1 block">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <Input required name="name" placeholder="Your name" className="bg-muted/50" />
                  </div>
                  <div>
                    <label className="text-foreground text-sm font-medium mb-1 block">
                      Phone <span className="text-accent">*</span>
                    </label>
                    <Input required name="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="bg-muted/50" />
                  </div>
                </div>

                <div>
                  <label className="text-foreground text-sm font-medium mb-1 block">
                    Email <span className="text-accent">*</span>
                  </label>
                  <Input required name="email" type="email" placeholder="your@email.com" className="bg-muted/50" />
                </div>

                <div>
                  <label className="text-foreground text-sm font-medium mb-1 block">
                    City / Location
                  </label>
                  <Input name="city" placeholder="Your city" className="bg-muted/50" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-foreground text-sm font-medium mb-1 block">
                      Select Services/Products
                    </label>
                    <select
                      name="design"
                      className="w-full h-10 px-3 rounded-md border border-input bg-muted/50 text-foreground text-sm"
                    >
                      <option value="">Choose a service/product</option>
                      <optgroup label="Stamp Concrete Designs">
                        {[
                          "Square 1×1", "Square 4×4", "Texture", "Tree Grating", "Vertical", "Wooden",
                          "Ashlar English", "Random Stone", "Borders", "European Fan", "Footpath",
                          "Game Stamp", "Leaf", "Royal Askler", "Running Bond", "Circle", "Compass",
                          "Cycle Track", "Garden Stone", "Grove Filling", "Spiral", "London Cobble", "Herring Bone", "Pebbles"
                        ].map(item => <option key={item} value={item}>{item}</option>)}
                      </optgroup>
                      <optgroup label="Other Services">
                        {[
                          "Epoxy Flooring",
                          "Concrete Polishing",
                          "Expose Aggregate"
                        ].map(item => <option key={item} value={item}>{item}</option>)}
                      </optgroup>
                      <optgroup label="Stamping Materials">
                        {[
                          "Colour Hardener",
                          "Release Agent",
                          "Lacquer",
                          "Chipping Stone"
                        ].map(item => <option key={item} value={item}>{item}</option>)}
                      </optgroup>
                      <optgroup label="Decorative Tools">
                        {[
                          "Aluminium Handle", "Hand Edger", "Mag Bull Float", "Steel Trowel Round",
                          "HandHeld Groover", "Mag Float", "Rock & Roll Bracket", "Round End Trowel",
                          "Worm Gear Bracket", "Impact Tool / Tamper"
                        ].map(item => <option key={item} value={item}>{item}</option>)}
                      </optgroup>
                      <optgroup label="Other Products">
                        <option value="Stamp Concrete Moulds">Stamp Concrete Moulds</option>
                      </optgroup>
                      <optgroup label="Custom">
                        <option value="Custom Design">Custom Design</option>
                      </optgroup>
                    </select>
                  </div>
                  <div>
                    <label className="text-foreground text-sm font-medium mb-1 block">
                      Requirement Type
                    </label>
                    <select
                      name="requirement"
                      className="w-full h-10 px-3 rounded-md border border-input bg-muted/50 text-foreground text-sm"
                    >
                      <option value="">Select type</option>
                      <option value="execution">Execution Only</option>
                      <option value="material">Material Only</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-foreground text-sm font-medium mb-1 block">
                      Area (sq ft)
                    </label>
                    <Input name="area" type="number" placeholder="e.g., 500" className="bg-muted/50" />
                  </div>
                  <div>
                    <label className="text-foreground text-sm font-medium mb-1 block">
                      Preferred Contact
                    </label>
                    <select
                      name="contact_method"
                      className="w-full h-10 px-3 rounded-md border border-input bg-muted/50 text-foreground text-sm"
                    >
                      <option value="phone">Phone Call</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-foreground text-sm font-medium mb-1 block">
                    Message / Project Details
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="bg-muted/50"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gold text-primary py-6 text-lg font-montserrat font-semibold"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Submit Enquiry
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

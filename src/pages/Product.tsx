import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Product = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
                Our Products
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore our range of stamped concrete products and solutions
              </p>
            </div>

            <Tabs defaultValue="stamping-material" className="w-full">
              <TabsList className="flex flex-wrap md:grid w-full md:grid-cols-3 mb-8 h-auto">
                <TabsTrigger value="stamping-material" className="flex-1 min-w-[150px]">Stamping Material</TabsTrigger>
                <TabsTrigger value="decorative-tools" className="flex-1 min-w-[150px]">Decorative Tools</TabsTrigger>
                <TabsTrigger value="stamp-concrete-mould" className="flex-1 min-w-[150px]">Stamp Concrete Mould</TabsTrigger>
              </TabsList>

              <TabsContent value="stamping-material" className="space-y-8 animate-in fade-in-50 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { name: "Colour Hardener", image: "/APS/images/colour-hardener.jpg" },
                    { name: "Release Agent", image: "/APS/images/release-agent.jpg" },
                    { name: "Lacquer", image: "/APS/images/lacquer.jpg" },
                    { name: "Chipping Stone", image: "/APS/images/chipping-stone.jpg" },
                  ].map((product) => (
                    <div key={product.name} className="flex flex-col bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-border group">
                      <div className="aspect-square bg-muted/30 overflow-hidden relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-heading text-xl text-foreground mb-4">{product.name}</h3>
                        <div className="mt-auto">
                          <a
                            href={`https://wa.me/917020999425?text=${encodeURIComponent(
                              `Hello, I would like to enquire about ${product.name}\n\nProduct Image: ${window.location.origin}${product.image}`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg transition-colors font-medium text-sm"
                          >
                            <span className="mr-2">Enquire</span>
                            <svg
                              viewBox="0 0 24 24"
                              width="16"
                              height="16"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="fill-current"
                            >
                              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="decorative-tools" className="space-y-8 animate-in fade-in-50 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { name: "Aluminium Handle", image: "/APS/images/tools/aluminium-swaged-handle.jpg" },
                    { name: "Hand Edger", image: "/APS/images/tools/hand-edger.jpg" },
                    { name: "Mag Bull Float", image: "/APS/images/tools/mag-bull-float.jpg" },
                    { name: "Steel Trowel Round", image: "/APS/images/tools/steel-fresno-trowel-round.jpg" },
                    { name: "HandHeld Groover", image: "/APS/images/tools/handheld-aluminium-groover.jpg" },
                    { name: "Mag Float", image: "/APS/images/tools/mag-float.jpg" },
                    { name: "Rock & Roll Bracket", image: "/APS/images/tools/rock-and-roll-bracket.jpg" },
                    { name: "Round End Trowel", image: "/APS/images/tools/round-end-trowel.jpg" },
                    { name: "Worm Gear Bracket", image: "/APS/images/tools/worm-gear-bracket.jpg" },
                    { name: "Impact Tool / Tamper", image: "/APS/images/tools/impact-tool-tamper.jpg" },
                  ].map((product) => (
                    <div key={product.name} className="flex flex-col bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-border group">
                      <div className="aspect-square bg-muted/30 overflow-hidden relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-heading text-xl text-foreground mb-4">{product.name}</h3>
                        <div className="mt-auto">
                          <a
                            href={`https://wa.me/917020999425?text=${encodeURIComponent(
                              `Hello, I would like to enquire about ${product.name}\n\nProduct Image: ${window.location.origin}${product.image}`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg transition-colors font-medium text-sm"
                          >
                            <span className="mr-2">Enquire</span>
                            <svg
                              viewBox="0 0 24 24"
                              width="16"
                              height="16"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="fill-current"
                            >
                              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>



              <TabsContent value="stamp-concrete-mould" className="space-y-8 animate-in fade-in-50 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "/APS/images/moulds/mould-1.jpg",
                    "/APS/images/moulds/mould-2.jpg",
                    "/APS/images/moulds/mould-3.jpg",
                    "/APS/images/moulds/mould-4.jpg",
                    "/APS/images/moulds/mould-5.jpg",
                    "/APS/images/moulds/mould-6.jpg",
                    "/APS/images/moulds/mould-7.jpg",
                    "/APS/images/moulds/mould-8.jpg",
                    "/APS/images/moulds/mould-9.jpg",
                    "/APS/images/moulds/mould-10.jpg",
                    "/APS/images/moulds/mould-11.jpg",
                    "/APS/images/moulds/mould-12.jpg",
                    "/APS/images/moulds/mould-13.jpg",
                    "/APS/images/moulds/mould-14.jpg",
                    "/APS/images/moulds/mould-15.jpg",
                    "/APS/images/moulds/mould-16.jpg",
                    "/APS/images/moulds/mould-17.jpg",
                    "/APS/images/moulds/mould-18.jpg",
                    "/APS/images/moulds/mould-19.jpg"
                  ].map((image, index) => (
                    <div key={index} className="flex flex-col bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-border group">
                      <div className="aspect-[3/1] bg-muted/30 overflow-hidden relative">
                        <img
                          src={image}
                          alt={`Stamp Concrete Mould ${index + 1}`}
                          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 flex flex-col items-center justify-center bg-card">
                        <a
                          href={`https://wa.me/917020999425?text=${encodeURIComponent(
                            `Hello, I would like to enquire about this stamp concrete mould.\n\nImage: ${window.location.origin}${image}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-full max-w-[200px] px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg transition-colors font-medium text-sm"
                        >
                          <span className="mr-2">Enquire</span>
                          <svg
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="fill-current"
                          >
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Product;

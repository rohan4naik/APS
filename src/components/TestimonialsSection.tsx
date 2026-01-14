import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner, Mumbai",
    rating: 5,
    text: "APS DECORATIVE transformed our backyard into a stunning outdoor living space. The stamped concrete patio looks exactly like natural stone but at a fraction of the cost. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    role: "Architect, Pune",
    rating: 5,
    text: "I've worked with many concrete contractors, but APS DECORATIVE stands out for their attention to detail and professional approach. The wooden plank pattern they installed for my client was flawless.",
  },
  {
    name: "Vikram Patel",
    role: "Builder, Nashik",
    rating: 5,
    text: "We've partnered with APS DECORATIVE for multiple residential projects. Their consistency in quality and timely delivery makes them our go-to stamped concrete supplier.",
  },
  {
    name: "Anita Desai",
    role: "Resort Owner, Lonavala",
    rating: 5,
    text: "The pool deck and pathways they created for our resort are not only beautiful but also slip-resistant and durable. Our guests always compliment the unique design.",
  },
  {
    name: "Suresh Mehta",
    role: "Factory Owner, Aurangabad",
    rating: 5,
    text: "Needed heavy-duty flooring for our industrial facility. APS DECORATIVE delivered a solution that's both functional and aesthetically pleasing. Excellent work!",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary/30 texture-concrete">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-12">
            <p className="text-accent font-montserrat font-semibold tracking-widest text-sm uppercase mb-4">
              Testimonials
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4 text-embossed">
              What Our Clients Say
            </h2>
            <div className="divider-engraved max-w-24 mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Navigation buttons */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 bg-card rounded-full shadow-raised flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 bg-card rounded-full shadow-raised flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Testimonial card - Stamped plaque design */}
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-raised relative overflow-hidden">
              {/* Decorative quote */}
              <Quote className="absolute top-4 right-4 text-accent/10" size={80} />
              
              {/* Engraved border effect */}
              <div className="absolute inset-4 border border-border rounded-lg pointer-events-none" />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-accent fill-accent" size={24} />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-foreground text-lg md:text-xl text-center leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-engraved">
                    <span className="font-heading text-xl text-foreground">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="font-montserrat font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-accent w-6"
                      : "bg-secondary hover:bg-accent/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

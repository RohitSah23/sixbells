import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Mitchell",
    text: "Absolutely wonderful experience. The Sunday roast was the best I've had in Oxford, and the atmosphere was so welcoming. We'll definitely be back!",
    rating: 5,
    date: "December 2024",
  },
  {
    name: "James Thompson",
    text: "A proper British pub with incredible food. The fish and chips were outstanding, and the staff made us feel right at home. Highly recommend for visitors and locals alike.",
    rating: 5,
    date: "November 2024",
  },
  {
    name: "Emma Richards",
    text: "We hosted our anniversary dinner here and it was perfect. The private dining area was elegant, and the food was superb. Thank you Six Bells!",
    rating: 5,
    date: "October 2024",
  },
  {
    name: "David Chen",
    text: "Great selection of craft beers and the beer garden is lovely. The burger was one of the best I've ever had. A hidden gem in Oxford!",
    rating: 5,
    date: "September 2024",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Guest Reviews
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
              What Our Guests Say
            </h2>
          </motion.div>

          {/* Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <Quote className="w-12 h-12 text-gold/60 mb-6" />

                <div className="min-h-[150px] flex items-center">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-6 italic">
                      "{testimonials[currentIndex].text}"
                    </p>
                  </motion.div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading text-lg font-semibold text-primary-foreground">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-primary-foreground/60 text-sm">
                      {testimonials[currentIndex].date}
                    </p>
                  </div>

                  {/* Navigation */}
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevTestimonial}
                      className="text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextTestimonial}
                      className="text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-gold w-6"
                          : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

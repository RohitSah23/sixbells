import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import galleryExterior from "@/assets/gallery-exterior.jpg";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl shadow-elevated z-10">
              <img
                src={galleryExterior}
                alt="Six Bells Oxford cozy interior"
                className="w-full h-87.5 sm:h-112.5 lg:h-137.5 object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-charcoal/40 to-transparent opacity-60" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-accent font-medium tracking-[0.3em] uppercase text-xs sm:text-sm">
                Our Story
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                A Tradition of Excellence <span className="block text-accent">Since 1820</span>
              </h2>
            </div>

            <div className="space-y-6 text-foreground/80 leading-relaxed text-base md:text-lg font-light">
              <p>
                Nestled in the historic streets of Oxford, Six Bells has been a
                cornerstone of refined hospitality for over two centuries. Our
                storied walls have witnessed countless celebrations, quiet
                conversations, and memorable evenings.
              </p>
              <p>
                Today, we honour this legacy while embracing contemporary
                culinary excellence. Our kitchen sources the finest local
                ingredients, crafting dishes that celebrate British tradition
                with modern flair.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
              <Card className="bg-white/50 backdrop-blur-sm border-accent/10 hover-lift group">
                <CardContent className="p-6 text-center">
                  <span className="font-heading text-3xl md:text-4xl font-bold text-accent group-hover:scale-110 transition-transform inline-block">
                    200+
                  </span>
                  <p className="text-foreground/60 mt-1 text-xs sm:text-sm uppercase tracking-wider font-medium">
                    Years of History
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 backdrop-blur-sm border-accent/10 hover-lift group">
                <CardContent className="p-6 text-center">
                  <span className="font-heading text-3xl md:text-4xl font-bold text-accent group-hover:scale-110 transition-transform inline-block">
                    100%
                  </span>
                  <p className="text-foreground/60 mt-1 text-xs sm:text-sm uppercase tracking-wider font-medium">
                    Local Ingredients
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

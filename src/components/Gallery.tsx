import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";
import galleryDrinks from "@/assets/gallery-drinks.jpg";
import galleryRoast from "@/assets/gallery-roast.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryGarden from "@/assets/gallery-garden.jpg";
import menuFish from "@/assets/menu-fish.jpg";
import menuDessert from "@/assets/menu-dessert.jpg";

const galleryImages = [
  { src: galleryInterior, alt: "Cozy pub interior" },
  { src: galleryDrinks, alt: "Craft drinks selection" },
  { src: galleryRoast, alt: "Sunday roast" },
  { src: galleryGarden, alt: "Beer garden" },
  { src: menuFish, alt: "Fish and chips" },
  { src: menuDessert, alt: "Sticky toffee pudding" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
            @sixbells_oxford
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Moments at Six Bells
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Follow us on Instagram for daily inspiration, behind-the-scenes
            moments, and special announcements.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                index === 0 || index === 3 ? "row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                  index === 0 || index === 3 ? "h-full" : "h-48 md:h-64"
                }`}
                style={
                  index === 0 || index === 3
                    ? { minHeight: "100%" }
                    : undefined
                }
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/sixbells_oxford/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-gold transition-colors font-medium"
          >
            <Instagram className="w-5 h-5" />
            Follow @sixbells_oxford
          </a>
        </motion.div>
      </div>
    </section>
  );
}

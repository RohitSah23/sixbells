import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import menuFish from "@/assets/menu-fish.jpg";
import menuBurger from "@/assets/menu-burger.jpg";
import menuDessert from "@/assets/menu-dessert.jpg";
import galleryRoast from "@/assets/gallery-roast.jpg";

const menuItems = [
  {
    name: "Beer Battered Fish & Chips",
    description:
      "Sustainably sourced cod in crispy batter, triple-cooked chips, mushy peas, tartare sauce",
    price: "£17.50",
    image: menuFish,
  },
  {
    name: "Six Bells Burger",
    description:
      "Dry-aged beef patty, smoked bacon, aged cheddar, brioche bun, hand-cut chips",
    price: "£16.00",
    image: menuBurger,
  },
  {
    name: "Sunday Roast",
    description:
      "Slow-roasted sirloin of beef, Yorkshire pudding, seasonal vegetables, rich gravy",
    price: "£22.00",
    image: galleryRoast,
  },
  {
    name: "Sticky Toffee Pudding",
    description:
      "Warm date sponge, butterscotch sauce, Cornish clotted cream ice cream",
    price: "£9.50",
    image: menuDessert,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function FeaturedMenu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="section-padding bg-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Culinary Excellence
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Featured Dishes
          </h2>
          <p className="text-cream/70 leading-relaxed">
            A taste of what awaits. Seasonal ingredients, traditional recipes,
            modern presentation.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12"
        >
          {menuItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <Card className="bg-charcoal-light border-charcoal-light overflow-hidden group hover-lift">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-40 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-heading text-lg font-semibold text-cream group-hover:text-gold transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-gold font-semibold text-lg ml-4">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-cream/60 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button variant="hero" size="lg">
            View Full Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

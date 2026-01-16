import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wine, UtensilsCrossed, Sun, PartyPopper } from "lucide-react";

const highlights = [
  {
    icon: Wine,
    title: "Craft Drinks",
    description:
      "Curated selection of local ales, fine wines, and expertly crafted cocktails.",
  },
  {
    icon: UtensilsCrossed,
    title: "Seasonal Food",
    description:
      "Fresh, locally-sourced ingredients prepared with passion and precision.",
  },
  {
    icon: Sun,
    title: "Sunday Roasts",
    description:
      "A British tradition perfected. Served with all the trimmings every Sunday.",
  },
  {
    icon: PartyPopper,
    title: "Private Events",
    description:
      "Elegant spaces for celebrations, corporate gatherings, and special occasions.",
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

export function Highlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">
            What We Offer
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            The Six Bells Experience
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-card border border-border rounded-lg p-8 text-center h-full hover-lift hover:border-accent/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

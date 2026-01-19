import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroPub from "@/assets/hero-pub.jpg";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroPub}
          alt="Six Bells Oxford Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Decorative Element */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-24 h-[2px] bg-accent mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            Est. 1820 • Oxford
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 leading-tight"
          >
            Six Bells Oxford
            <span className="block text-2xl sm:text-3xl md:text-4xl font-normal mt-3 text-cream/90">
              A Refined Pub Experience
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            Exceptional food, fine drinks, and timeless hospitality in the heart
            of Oxford.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="hero"
              size="xl"
              asChild
            >
              <a 
                href="https://widget.thefork.com/en/839e957f-1943-4ca7-b1b6-69a84769ab7a?origin=facebook&utm_medium=integration&utm_source=instagram&step=date&fbclid=PAVERFWAPXRORleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacCjEJM88WUJYICVydYDPqrphq6Ktg7_cPBe2MZXd4jmCjXxUeK0exrbXL9qw_aem_dfQm5Y1v28ITFdlinlwesA" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Book a Table
              </a>
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection("#menu")}
            >
              View Menu
            </Button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}

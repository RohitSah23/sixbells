import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

export function Reservations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const widgetUrl = "https://widget.thefork.com/en/839e957f-1943-4ca7-b1b6-69a84769ab7a?origin=facebook&utm_medium=integration&utm_source=instagram&step=date&fbclid=PAVERFWAPXRORleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacCjEJM88WUJYICVydYDPqrphq6Ktg7_cPBe2MZXd4jmCjXxUeK0exrbXL9qw_aem_dfQm5Y1v28ITFdlinlwesA";

  return (
    <section id="reservations" className="section-padding bg-background">
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
              Reserve Your Table
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Book Your Experience
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Secure your table for an unforgettable dining experience. For
              groups larger than 8, please call us directly.
            </p>
          </motion.div>

          {/* Reservation Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-card border-border shadow-elevated overflow-hidden">
              <CardContent className="p-0 h-[650px]">
                <iframe
                  src={widgetUrl}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  title="TheFork Booking Widget"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


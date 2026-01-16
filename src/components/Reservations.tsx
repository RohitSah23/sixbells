import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, Users, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Reservations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Request Received",
      description: "We'll confirm your booking shortly. Thank you!",
    });
    setFormData({
      date: "",
      time: "",
      guests: "",
      name: "",
      email: "",
      phone: "",
    });
  };

  const timeSlots = [
    "12:00", "12:30", "13:00", "13:30", "14:00",
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00",
  ];

  const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8+"];

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

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-card border-border shadow-elevated">
              <CardContent className="p-6 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Date, Time, Guests Row */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gold" />
                        Date
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        required
                        className="bg-background border-border focus:border-gold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time" className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gold" />
                        Time
                      </Label>
                      <Select
                        value={formData.time}
                        onValueChange={(value) =>
                          setFormData({ ...formData, time: value })
                        }
                        required
                      >
                        <SelectTrigger className="bg-background border-border focus:border-gold">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="guests"
                        className="flex items-center gap-2"
                      >
                        <Users className="w-4 h-4 text-gold" />
                        Guests
                      </Label>
                      <Select
                        value={formData.guests}
                        onValueChange={(value) =>
                          setFormData({ ...formData, guests: value })
                        }
                        required
                      >
                        <SelectTrigger className="bg-background border-border focus:border-gold">
                          <SelectValue placeholder="Number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          {guestOptions.map((num) => (
                            <SelectItem key={num} value={num}>
                              {num} {num === "1" ? "Guest" : "Guests"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="bg-background border-border focus:border-gold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="bg-background border-border focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+44 1234 567890"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="bg-background border-border focus:border-gold"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full"
                  >
                    <Check className="w-5 h-5 mr-2" />
                    Request Reservation
                  </Button>

                  <p className="text-center text-muted-foreground text-sm">
                    You will receive a confirmation email within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

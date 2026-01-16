import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Highlights } from "@/components/Highlights";
import { FeaturedMenu } from "@/components/FeaturedMenu";
import { Gallery } from "@/components/Gallery";
import { Reservations } from "@/components/Reservations";
import { Testimonials } from "../../../Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
    
      </main>
      <Footer />
    </div>
  );
};

export default Index;

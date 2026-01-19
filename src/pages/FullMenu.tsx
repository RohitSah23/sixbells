import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MENU_DATA = {
  starters: [
    {
      name: "Soup of the Day (V)",
      description: "Seasonal daily soup served with artisan bread",
      price: "£7.00",
    },
    {
      name: "Festive Sausage Roll",
      description: "Cumberland sausage, cranberry, chestnut, English mustard",
      price: "£8.50",
    },
    {
      name: "Oxford Rarebit",
      description: "Cheese sauce on toast, crispy shallot, garlic chilli oil, spring onion",
      price: "£8.00",
    },
    {
      name: "Little Fish Finger Butty",
      description: "Beer battered cod, tartare sauce, chicken stock, garden peas",
      price: "£9.00",
    },
    {
      name: "Buffalo Chicken Wings",
      description: "Buttermilk fried chicken wings, blue cheese dressing",
      price: "£8.50",
    },
  ],
  mains: [
    {
      name: "Stuffed Roast Turkey",
      description: "Traditional garnish, bread sauce, cranberry gravy, roast potatoes, bacon & sprouts, pigs 'n' blankets",
      price: "£18.50",
    },
    {
      name: "Steak Platter",
      description: "Onglet medium rare, triple-cooked chips, stuffed mushrooms, confit tomato, onion rings, bacon cabbage, house salad, peppercorn & Béarnaise sauce",
      price: "£28.00",
    },
    {
      name: "The Cluckin' G Burger",
      description: "Buttermilk fried chicken, hot honey, sriracha, aioli, pickles, lettuce",
      price: "£15.50",
    },
    {
      name: "Onion Burger",
      description: "Beef smash patties, caramelised onions, lettuce, ketchup and mustard",
      price: "£15.00",
    },
    {
      name: "Mushrooms on Toast (V)",
      description: "Garlic & herb mushrooms, aged parmesan (V)",
      price: "£12.00",
    },
    {
      name: "Sandwich of the Day",
      description: "Ask your server for today's special selection",
      price: "£11.00",
    },
  ],
  desserts: [
    {
      name: "Apple Crumble (V)",
      description: "Classic apple filling served with warm vanilla custard",
      price: "£8.00",
    },
    {
      name: "Sticky Toffee Pudding (V)",
      description: "Rich toffee sauce, honeycomb, vanilla ice cream",
      price: "£9.50",
    },
    {
      name: "Raspberry Sorbet (V)",
      description: "Fruit compote and dark chocolate soil",
      price: "£7.50",
    },
    {
      name: "Cheese Plate (V)",
      description: "Selection of house crackers and local chutney",
      price: "£11.50",
    },
  ],
};

const SIDES = [
  { name: "Roast Potatoes & Gravy", price: "£4.50" },
  { name: "Triple Cooked Chips (Vg)", price: "£4.50" },
  { name: "House Fries (Vg)", price: "£4.00" },
  { name: "Padrón Peppers (Vg)", price: "£5.00" },
  { name: "Mash (V)", price: "£4.00" },
  { name: "House Salad (Vg, GF)", price: "£4.00" },
  { name: "Peppercorn Sauce (GF)", price: "£2.50" },
  { name: "Béarnaise Sauce (V, GF)", price: "£2.50" },
];

const FullMenu = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      <Header />
      
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Lunch Menu (12 - 3pm)
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
              Seasonal Favourites
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              Explore our fresh, seasonal lunch offerings. From festive roasts to 
              our signature smash burgers, perfect for a midday treat.
            </p>
          </motion.div>

          <Tabs defaultValue="mains" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-charcoal-light border border-charcoal-light/50 p-1 h-auto flex flex-wrap justify-center gap-2">
                <TabsTrigger 
                  value="starters"
                  className="px-6 py-2.5 rounded-md data-[state=active]:bg-gold data-[state=active]:text-charcoal transition-all text-cream/70"
                >
                  Light Bites & Starters
                </TabsTrigger>
                <TabsTrigger 
                  value="mains"
                  className="px-6 py-2.5 rounded-md data-[state=active]:bg-gold data-[state=active]:text-charcoal transition-all text-cream/70"
                >
                  Mains & Classic Burgers
                </TabsTrigger>
                <TabsTrigger 
                  value="desserts"
                  className="px-6 py-2.5 rounded-md data-[state=active]:bg-gold data-[state=active]:text-charcoal transition-all text-cream/70"
                >
                  Desserts
                </TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(MENU_DATA).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <Card className="bg-charcoal-light/30 border-charcoal-light/50 hover:border-gold/30 transition-all group overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-2 text-wrap">
                            <h3 className="font-heading text-xl font-semibold text-cream group-hover:text-gold transition-colors pr-4">
                              {item.name}
                            </h3>
                          </div>
                          <p className="text-cream/60 leading-relaxed text-sm md:text-base">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-20 grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 p-8 rounded-2xl bg-charcoal-light/20 border border-charcoal-light/50"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-heading text-2xl text-gold">Sides & Extras</h2>
                <div className="h-px flex-1 bg-charcoal-light/30 mx-6 hidden sm:block"></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
                {SIDES.map((side) => (
                  <div key={side.name} className="flex justify-between items-center border-b border-charcoal-light/20 pb-2 group">
                    <span className="text-cream/80 group-hover:text-gold transition-colors">{side.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 rounded-2xl bg-linear-to-br from-charcoal-light to-charcoal border border-charcoal-light/50 text-center flex flex-col justify-center"
            >
              <h2 className="font-heading text-2xl text-cream mb-4">
                Daily Specials
              </h2>
              <p className="text-cream/70 text-sm leading-relaxed mb-6">
                See our specials board or ask a member of staff for today's unique creations.
              </p>
              <div className="pt-6 border-t border-charcoal-light/30">
                <p className="text-gold font-medium text-xs tracking-widest uppercase mb-2">Service Charge</p>
                <p className="text-cream/50 text-[10px] leading-tight">
                  A discretionary service charge of 10% is added to the bill.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FullMenu;

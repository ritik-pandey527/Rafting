import { motion } from "framer-motion";
import { CheckCircle2, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const PACKAGES = [
  {
    title: "White Water Rafting",
    price: "₹1,500",
    duration: "2.5 Hours",
    type: "Adventure",
    popular: false,
    description: "Conquer 12km of thrilling grade 2 & 3 rapids on the Kundalika river.",
    includes: [
      "12km River Rafting",
      "Safety Equipment & Briefing",
      "Certified River Guide",
      "Transport back to start point"
    ]
  },
  {
    title: "Rafting + Camping Combo",
    price: "₹3,200",
    duration: "1 Night / 2 Days",
    type: "Best Value",
    popular: true,
    description: "The ultimate weekend getaway. Raft by day, camp by the lake at night.",
    includes: [
      "Everything in Rafting package",
      "Lakeside Tent Stay (Twin sharing)",
      "Evening Snacks & BBQ",
      "Dinner & Breakfast",
      "Campfire with Music"
    ]
  },
  {
    title: "Lakeside Camping",
    price: "₹1,800",
    duration: "1 Night / 2 Days",
    type: "Relaxation",
    popular: false,
    description: "Peaceful lakeside stay surrounded by nature away from city noise.",
    includes: [
      "Lakeside Tent Stay",
      "Evening Snacks & BBQ",
      "Dinner & Breakfast",
      "Campfire with Music",
      "Indoor/Outdoor Games"
    ]
  }
];

export function Packages() {
  return (
    <section id="packages" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">Adventure Packages</h2>
          <p className="text-lg text-muted-foreground">
            Choose your perfect getaway. We offer flexible options for solo travelers, couples, and large corporate groups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 border ${
                pkg.popular ? 'border-primary shadow-xl scale-105 md:z-10' : 'border-border/50 shadow-lg'
              } hover:-translate-y-1 transition-all duration-300 flex flex-col`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold shadow-md uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <span className="text-primary font-medium text-sm">{pkg.type}</span>
                <h3 className="text-2xl font-display font-bold text-foreground mt-2">{pkg.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 min-h-[40px]">{pkg.description}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-border/50">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground">/person</span>
                </div>
                <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground font-medium">
                  <div className="flex items-center gap-1"><Clock className="w-4 h-4 text-primary" /> {pkg.duration}</div>
                  <div className="flex items-center gap-1"><Users className="w-4 h-4 text-primary" /> Min 2</div>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-6 text-lg rounded-xl ${pkg.popular ? 'bg-primary hover:bg-primary/90' : 'bg-slate-900 hover:bg-slate-800'}`}
                asChild
              >
                <a href="#contact">Book Now</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

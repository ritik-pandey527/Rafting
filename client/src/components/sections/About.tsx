import { motion } from "framer-motion";
import { Shield, Clock, MapPin, Award } from "lucide-react";

const FEATURES = [
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Located on the beautiful Kundalika River in Kolad, just a 2-hour drive from Mumbai and Pune."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "International safety standards with certified instructors and imported safety equipment."
  },
  {
    icon: Clock,
    title: "10+ Years Experience",
    description: "Over a decade of organizing successful adventure camps and rafting expeditions."
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Rated as the best adventure tourism operator in Maharashtra for 3 consecutive years."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Escape the City, <br/>
              <span className="text-secondary">Embrace the Wild</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At AquaQuest, we believe that nature is the ultimate playground. Situated in the lush green valleys of Kolad, we offer Maharashtra's only year-round white water rafting experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're an adrenaline junkie looking to conquer grade 3 rapids, or seeking a peaceful weekend camping under the stars, our experienced team ensures your getaway is safe, memorable, and absolutely thrilling.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* beautiful serene lakeside camping setup */}
            <img 
              src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80" 
              alt="Camping near the river" 
              className="rounded-2xl shadow-2xl object-cover h-[600px] w-full"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block border border-border/50">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold">50k+ Guests</div>
              </div>
              <p className="text-sm text-muted-foreground">Have trusted us with their weekend adventures.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

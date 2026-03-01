import { motion } from "framer-motion";
import { LifeBuoy, HeartPulse, UserCheck, ShieldAlert } from "lucide-react";

const SAFETY_FEATURES = [
  {
    icon: UserCheck,
    title: "Certified Instructors",
    desc: "Our river guides are certified in Swift Water Rescue and wilderness first aid."
  },
  {
    icon: LifeBuoy,
    title: "Premium Equipment",
    desc: "We use internationally approved life jackets, helmets, and self-bailing rafts."
  },
  {
    icon: HeartPulse,
    title: "First Aid Ready",
    desc: "Comprehensive first aid kits on all rafts and at the campsite with trained responders."
  },
  {
    icon: ShieldAlert,
    title: "Safety Briefing",
    desc: "Mandatory detailed safety and paddle instruction briefing before entering the water."
  }
];

export function Safety() {
  return (
    <section id="safety" className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold">Uncompromising on Safety</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Adventure is only fun when it's safe. We strictly adhere to international safety protocols. Your safety is our #1 priority from the moment you arrive until you depart.
              </p>
              <div className="p-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm mt-6">
                <p className="font-bold">Emergency Contact</p>
                <p className="text-2xl font-display mt-1">+91 99887 76655</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SAFETY_FEATURES.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-colors"
              >
                <feature.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

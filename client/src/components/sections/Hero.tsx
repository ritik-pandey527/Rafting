import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image - Action Rafting */}
      {/* landing page hero scenic mountain landscape and white water rafting action */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://pixabay.com/get/g2ca92a2da305ba7e81cb44e25f49fe5291a6d0b1009f47837247ce1dbee13293d523b7f9037ec4ca97ec31f851bbed4e051f8bfbd4328e39895497c0f5f7be8b_1280.jpg"
          alt="White water river rafting in Kolad"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark wash gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium tracking-wider uppercase">
            Maharashtra's Premier Adventure Destination
          </span>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold text-white leading-tight text-balance text-shadow-lg">
            Your Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-400">Adventure</span> Begins Here
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 font-medium max-w-2xl mx-auto">
            Experience the thrill of white water river rafting and serene lakeside camping near Mumbai. Disconnect from the city and dive into nature.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 rounded-full" asChild>
              <a href="#packages">
                View Packages <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm rounded-full" asChild>
              <a href="tel:+919876543210">
                <PhoneCall className="mr-2 w-5 h-5" /> Call Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Packages } from "@/components/sections/Packages";
import { Safety } from "@/components/sections/Safety";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <Helmet>
        <title>AquaQuest | Adventure Rafting Kolad & Weekend Camping Near Mumbai</title>
        <meta name="description" content="Experience the best white water river rafting in Maharashtra. Book your Kundalika river rafting and lakeside camping packages in Kolad today." />
        <meta name="keywords" content="river rafting Kolad, camping near Mumbai, weekend adventure getaway, rafting packages price, best rafting in Maharashtra" />
      </Helmet>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Packages />
        <Safety />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

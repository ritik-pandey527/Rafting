import { Anchor, Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-primary text-white">
                <Anchor className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                AquaQuest
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium river rafting and camping experiences in Kolad. Escape the city and find your next adventure with us.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#packages" className="text-slate-400 hover:text-white transition-colors">Our Packages</a></li>
              <li><a href="#safety" className="text-slate-400 hover:text-white transition-colors">Safety First</a></li>
              <li><a href="#gallery" className="text-slate-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Popular Packages</h4>
            <ul className="space-y-3">
              <li><a href="#packages" className="text-slate-400 hover:text-white transition-colors">Extreme Rafting</a></li>
              <li><a href="#packages" className="text-slate-400 hover:text-white transition-colors">Weekend Camping</a></li>
              <li><a href="#packages" className="text-slate-400 hover:text-white transition-colors">Corporate Retreats</a></li>
              <li><a href="#packages" className="text-slate-400 hover:text-white transition-colors">Couples Getaway</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Kundalika River, Kolad, Maharashtra 402304</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>bookings@aquaquest.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} AquaQuest Adventure Rafting Kolad. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

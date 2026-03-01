import { motion } from "framer-motion";

const IMAGES = [
  {
    // group of friends river rafting rapids action shot
    url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    // glowing tent at night campsite stars
    url: "https://images.unsplash.com/photo-1504280390226-9f826315ee54?w=600&q=80",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    // campfire at night glowing
    url: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    // serene lake morning mist nature
    url: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80",
    span: "md:col-span-2 md:row-span-1",
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">Moments of Adventure</h2>
          <p className="text-lg text-muted-foreground">
            Get a glimpse of the exhilarating experiences and peaceful retreats waiting for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${img.span} relative group overflow-hidden rounded-2xl h-64 md:h-auto`}
            >
              <img 
                src={img.url} 
                alt="Adventure moment" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

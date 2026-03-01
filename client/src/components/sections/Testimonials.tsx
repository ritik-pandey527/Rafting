import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const REVIEWS = [
  {
    name: "Rahul Sharma",
    date: "October 2023",
    rating: 5,
    text: "Absolutely phenomenal experience! The rapids were thrilling and the guides made us feel completely safe. The evening campsite setup by the river was magical."
  },
  {
    name: "Priya Menon",
    date: "September 2023",
    rating: 5,
    text: "Booked the combo package for our corporate retreat. Management was flawless, food was delicious, and the rafting was the highlight of our year!"
  },
  {
    name: "Amit Kumar",
    date: "November 2023",
    rating: 4,
    text: "Great weekend getaway from Mumbai. Reached in 2 hours. Tents were clean, washrooms well maintained. Will definitely visit again with family."
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">Don't Just Take Our Word</h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Thousands of happy adventurers have created unforgettable memories with us.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-border shadow-sm flex items-center gap-4">
            <div className="text-4xl font-display font-bold text-foreground">4.8</div>
            <div>
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm font-medium mt-1">Based on 850+ Google Reviews</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-white rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground/80 italic mb-6 text-lg">"{review.text}"</p>
                  <div className="mt-auto">
                    <p className="font-bold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

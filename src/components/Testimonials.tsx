import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Akosua M.',
    location: 'Accra, Ghana',
    text: 'The kente cloth I received was absolutely stunning. The quality and craftsmanship are unmatched. I wore it to my sister\'s wedding and received so many compliments!',
    rating: 5,
  },
  {
    name: 'David K.',
    location: 'London, UK',
    text: 'Obaatanpa Kente Hub delivers authentic Ghanaian kente to your doorstep. The colors are vibrant and the weave is tight and durable. Truly premium quality.',
    rating: 5,
  },
  {
    name: 'Ama S.',
    location: 'New York, USA',
    text: 'I\'ve been searching for authentic kente for years. Obaatanpa finally gave me the real deal. The customer service was excellent and delivery was fast.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 kente-pattern-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">
            What Our Customers Say
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Customer Testimonials
          </h2>
          <div className="w-20 h-[2px] bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-6 relative"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-display font-bold text-foreground text-sm">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-xs">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

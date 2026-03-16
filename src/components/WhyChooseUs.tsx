import { motion } from 'framer-motion';
import { Gem, HandMetal, ShieldCheck, Truck } from 'lucide-react';

const reasons = [
  {
    icon: HandMetal,
    title: 'Hand-Woven Artistry',
    description: 'Every piece is meticulously hand-woven by master artisans using centuries-old techniques passed down through generations.',
  },
  {
    icon: Gem,
    title: 'Premium Quality',
    description: 'We source only the finest threads and materials, ensuring each kente cloth meets the highest standards of craftsmanship.',
  },
  {
    icon: ShieldCheck,
    title: '100% Authentic',
    description: 'Direct from the weaving communities of Ghana. Every pattern carries cultural meaning and historical significance.',
  },
  {
    icon: Truck,
    title: 'Worldwide Delivery',
    description: 'We ship our kente cloth worldwide with secure packaging to ensure your order arrives in perfect condition.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">
            Our Promise
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Our Kente
          </h2>
          <div className="w-20 h-[2px] bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <reason.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

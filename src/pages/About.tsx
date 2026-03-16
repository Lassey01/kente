import { motion } from 'framer-motion';
import { Gem, Heart, Globe, Users } from 'lucide-react';
import heroImage from '@/assets/hero-kente.jpg';

const values = [
  { icon: Gem, title: 'Authenticity', description: 'Every kente cloth we sell is 100% authentic, hand-woven by skilled artisans in Ghana.' },
  { icon: Heart, title: 'Cultural Pride', description: 'We celebrate and preserve the rich heritage of kente weaving for future generations.' },
  { icon: Globe, title: 'Global Reach', description: 'Bringing the beauty of Ghanaian kente to fashion lovers around the world.' },
  { icon: Users, title: 'Community', description: 'Supporting local artisan communities and ensuring fair compensation for their craft.' },
];

const About = () => {
  return (
    <main className="kente-pattern-bg">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">Our Story</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">About Obaatanpa Kente Hub</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Rooted in Ghanaian tradition, Obaatanpa Kente Hub is dedicated to bringing authentic, hand-woven kente cloth to the world. We bridge the gap between master artisans and modern fashion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Heritage</h2>
            <div className="w-20 h-[2px] bg-primary mx-auto mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kente cloth is one of the most celebrated textiles in the world, originating from the Ashanti and Ewe people of Ghana. Each pattern tells a story — of royalty, spirituality, and cultural identity. At Obaatanpa Kente Hub, we work directly with weaving communities to bring these masterpieces to you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is simple: preserve the art of kente weaving while making it accessible to everyone. Whether you're looking for a statement piece for a special occasion or everyday African fashion, we have the perfect kente for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <div className="w-20 h-[2px] bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <val.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{val.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

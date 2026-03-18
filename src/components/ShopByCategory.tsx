import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import categoryMale from '@/assets/kente-male-1.jpg';
import categoryFemale from '@/assets/kente-female-1.jpg';
import categoryUnisex from '@/assets/category-unisex.jpg';

const categories = [
  {
    label: 'Male',
    slug: 'male',
    image: categoryMale,
    description: 'Bold & distinguished kente for men',
  },
  {
    label: 'Female',
    slug: 'female',
    image: categoryFemale,
    description: 'Elegant kente styles for women',
  },
  {
    label: 'Unisex',
    slug: 'unisex',
    image: categoryUnisex,
    description: 'Timeless kente for everyone',
  },
];

export function ShopByCategory() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">
            Find Your Style
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <div className="w-20 h-[2px] bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link
                to={`/shop?category=${cat.slug}`}
                className="group block relative aspect-[3/4] rounded-lg overflow-hidden"
              >
                <img
                  src={cat.image}
                  alt={`${cat.label} Kente`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {cat.label}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {cat.description}
                  </p>
                  <span className="inline-block text-primary text-sm font-medium tracking-wide group-hover:underline">
                    Shop Now →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

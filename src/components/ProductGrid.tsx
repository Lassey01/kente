import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { localProducts } from '@/data/products';
import { Category } from '@/types/product';
import { CategoryFilter } from './CategoryFilter';
import { ProductCard } from './ProductCard';

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return localProducts;
    return localProducts.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="py-20 kente-pattern-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">
            Browse Our Store
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Collection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-2">
            Browse our exquisite selection of authentic Ghanaian kente cloth. Each piece is handcrafted by skilled artisans.
          </p>
          <div className="w-20 h-[2px] bg-primary mx-auto mt-4" />
        </motion.div>

        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

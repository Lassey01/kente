import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { localProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowLeft, Check, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { Product } from '@/types/product';
import { ProductCard } from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = localProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-2xl text-foreground mb-4">Product Not Found</h2>
          <Button asChild variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10">
            <Link to="/shop"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop</Link>
          </Button>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    const cartProduct: Product = {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      category: product.category,
      description: product.description,
      created: product.created,
    };
    addToCart(cartProduct);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = localProducts.filter((p) => p.category === product.category && p.id !== product.id);

  return (
    <main className="py-8 kente-pattern-bg">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden border border-border"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover aspect-[3/4]"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-primary text-xs tracking-[0.3em] uppercase mb-2 font-sans">
              {product.category} Kente
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {product.name}
            </h1>
            <p className="text-3xl font-bold text-primary mb-6">GH₵{product.price}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            <Button
              size="lg"
              className={`w-full sm:w-auto px-10 py-6 text-base font-semibold ${
                added ? 'bg-kente-green hover:bg-kente-green/90' : 'bg-primary hover:bg-primary/90'
              } text-primary-foreground`}
              onClick={handleAddToCart}
            >
              {added ? (
                <><Check className="mr-2 h-5 w-5" /> Added to Cart</>
              ) : (
                <><ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart</>
              )}
            </Button>

            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-border">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: ShieldCheck, label: 'Authentic' },
                { icon: RefreshCw, label: 'Easy Returns' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="text-center">
                  <Icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground text-xs">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;

import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Check } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick add button overlay */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <Button 
            className={`w-full ${added ? 'bg-secondary' : 'bg-primary'} text-primary-foreground hover:bg-primary/90`}
            onClick={handleAddToCart}
          >
            {added ? (
              <>
                <Check className="h-4 w-4 mr-2" /> Added
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
              </>
            )}
          </Button>
        </div>

        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-medium px-2 py-1 rounded-full capitalize">
          {product.category}
        </span>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-display text-lg font-semibold text-card-foreground mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            ${product.price}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="text-foreground hover:text-primary hover:bg-primary/10"
            onClick={handleAddToCart}
          >
            {added ? <Check className="h-4 w-4" /> : <ShoppingCart className="h-4 w-4" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

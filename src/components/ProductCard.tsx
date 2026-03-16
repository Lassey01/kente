import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Check, Eye } from 'lucide-react';
import { useState } from 'react';
import { LocalProduct } from '@/data/products';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: LocalProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Overlay buttons */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Button
              size="sm"
              className={`flex-1 ${added ? 'bg-kente-green' : 'bg-primary'} text-primary-foreground text-xs`}
              onClick={handleAddToCart}
            >
              {added ? <Check className="h-3 w-3 mr-1" /> : <ShoppingCart className="h-3 w-3 mr-1" />}
              {added ? 'Added' : 'Add to Cart'}
            </Button>
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-foreground/30 text-foreground hover:bg-foreground/10 text-xs"
            >
              <Link to={`/product/${product.id}`} onClick={(e) => e.stopPropagation()}>
                <Eye className="h-3 w-3" />
              </Link>
            </Button>
          </div>

          {/* Category badge */}
          <span className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-foreground text-[10px] font-medium px-2.5 py-1 rounded-full capitalize tracking-wide">
            {product.category}
          </span>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display text-base font-bold text-card-foreground mb-1 line-clamp-1 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-muted-foreground text-xs mb-3 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            GH₵{product.price}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary hover:bg-primary/10"
            onClick={handleAddToCart}
          >
            {added ? <Check className="h-4 w-4" /> : <ShoppingCart className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}

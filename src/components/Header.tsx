import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

export function Header() {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Kente<span className="text-primary">Palace</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#shop" className="text-muted-foreground hover:text-foreground transition-colors">
            Shop
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <Button
          variant="outline"
          size="icon"
          className="relative border-primary/30 hover:bg-primary/10"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart className="h-5 w-5 text-foreground" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
}

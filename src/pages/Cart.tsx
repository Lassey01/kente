import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Plus, Minus, X, ShoppingBag, ArrowLeft, MessageCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    let msg = "Hello, I want to order the following Kente items:%0A%0A";
    let total = 0;
    items.forEach((item, i) => {
      msg += `${i + 1}. ${item.name} x${item.quantity} - GHS ${item.price * item.quantity}%0A`;
      total += item.price * item.quantity;
    });
    msg += `%0ATotal: GHS ${total}`;

    window.open(`https://wa.me/233260920305?text=${msg}`);
    clearCart();
  };

  return (
    <main className="py-12 kente-pattern-bg min-h-[60vh]">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="h-20 w-20 text-muted-foreground/20 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg mb-6">Your cart is empty</p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/shop"><ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-card p-4 rounded-lg border border-border">
                    <Link to={`/product/${item.id}`}>
                      <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-display font-bold text-card-foreground hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-primary font-bold mt-1">GH₵{item.price}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <Button variant="outline" size="icon" className="h-8 w-8 border-border"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium text-foreground w-8 text-center">{item.quantity}</span>
                        <Button variant="outline" size="icon" className="h-8 w-8 border-border"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive"
                        onClick={() => removeFromCart(item.id)}>
                        <X className="h-4 w-4" />
                      </Button>
                      <span className="text-foreground font-bold">GH₵{item.price * item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-6" />

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <Button asChild variant="outline" className="border-border text-muted-foreground hover:text-foreground">
                  <Link to="/shop"><ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping</Link>
                </Button>
                <div className="text-right">
                  <p className="text-muted-foreground text-sm">Total</p>
                  <p className="text-3xl font-bold text-primary">GH₵{totalPrice}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  className="flex-1 bg-kente-green hover:bg-kente-green/90 text-secondary-foreground font-semibold py-6 text-base gap-2"
                  onClick={handleWhatsAppCheckout}
                >
                  <MessageCircle className="h-5 w-5" /> Order via WhatsApp
                </Button>
                <Button asChild className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-base">
                  <Link to="/checkout">Proceed to Checkout</Link>
                </Button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </main>
  );
};

export default Cart;

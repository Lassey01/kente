import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { MessageCircle, ShoppingBag, ArrowLeft } from 'lucide-react';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    const orderItems = items
      .map(
        (item, i) =>
          `${i + 1}. ${item.name} (x${item.quantity}) - GH₵${item.price * item.quantity}`
      )
      .join('\n');

    const customerInfo = form.name ? `\n\n*Customer Details:*\nName: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}${form.notes ? `\nNotes: ${form.notes}` : ''}` : '';

    const message = `Hello, I want to order the following Kente items:\n\n${orderItems}\n\nTotal: GH₵${totalPrice}${customerInfo}\n\nPlease confirm this order.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/233260920305?text=${encodedMessage}`, '_blank');
    clearCart();
  };

  if (items.length === 0) {
    return (
      <main className="py-20 min-h-[60vh]">
        <div className="container mx-auto px-4 text-center">
          <ShoppingBag className="h-20 w-20 text-muted-foreground/20 mx-auto mb-4" />
          <p className="text-muted-foreground text-lg mb-6">Your cart is empty</p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/shop"><ArrowLeft className="mr-2 h-4 w-4" /> Browse Shop</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="py-12 kente-pattern-bg min-h-[60vh]">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-3xl font-bold text-foreground mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="font-display text-lg font-bold text-foreground mb-4">Your Details</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Full Name</Label>
                    <Input id="name" name="name" value={form.name} onChange={handleChange}
                      className="bg-muted border-border text-foreground" placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                    <Input id="phone" name="phone" value={form.phone} onChange={handleChange}
                      className="bg-muted border-border text-foreground" placeholder="+233 XXX XXX XXXX" />
                  </div>
                  <div>
                    <Label htmlFor="address" className="text-foreground">Delivery Address</Label>
                    <Input id="address" name="address" value={form.address} onChange={handleChange}
                      className="bg-muted border-border text-foreground" placeholder="Enter delivery address" />
                  </div>
                  <div>
                    <Label htmlFor="notes" className="text-foreground">Order Notes (optional)</Label>
                    <Textarea id="notes" name="notes" value={form.notes} onChange={handleChange}
                      className="bg-muted border-border text-foreground" placeholder="Any special requests..." />
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <h2 className="font-display text-lg font-bold text-foreground mb-4">Order Summary</h2>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.name} x{item.quantity}</span>
                      <span className="text-foreground font-medium">GH₵{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between">
                  <span className="font-display text-foreground">Total</span>
                  <span className="text-2xl font-bold text-primary">GH₵{totalPrice}</span>
                </div>

                <Button
                  className="w-full mt-6 bg-kente-green hover:bg-kente-green/90 text-secondary-foreground font-semibold py-6 text-base gap-2"
                  onClick={handleWhatsAppOrder}
                >
                  <MessageCircle className="h-5 w-5" /> Complete Order via WhatsApp
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Your order details will be sent via WhatsApp for confirmation
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Checkout;

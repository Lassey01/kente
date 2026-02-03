import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { X, Plus, Minus, MessageCircle, ShoppingBag } from 'lucide-react';

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalPrice,
    clearCart,
  } = useCart();

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    // Format the order message
    const orderItems = items
      .map(
        (item) =>
          `• ${item.name} (x${item.quantity}) - $${item.price * item.quantity}`
      )
      .join('\n');

    const message = `🛒 *New Kente Order*\n\n${orderItems}\n\n*Total: $${totalPrice}*\n\nPlease confirm this order.`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // Replace with your WhatsApp number (include country code without + or spaces)
    const whatsappNumber = '233000000000'; // Change this to your number
    
    // Open WhatsApp with the pre-filled message
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      '_blank'
    );

    // Clear the cart after sending
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg bg-background border-border">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl text-foreground flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 flex flex-col h-[calc(100vh-180px)]">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground text-lg">Your cart is empty</p>
              <p className="text-muted-foreground text-sm mt-1">
                Add some beautiful kente to get started!
              </p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 bg-card p-3 rounded-lg border border-border"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-semibold text-card-foreground truncate">
                        {item.name}
                      </h4>
                      <p className="text-primary font-bold">${item.price}</p>
                      
                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 border-border"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium text-foreground w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 border-border"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              {/* Cart Footer */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-display text-foreground">Total</span>
                  <span className="text-2xl font-bold text-primary">${totalPrice}</span>
                </div>
                
                <Button
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-6 text-lg gap-2"
                  onClick={handleWhatsAppCheckout}
                >
                  <MessageCircle className="h-5 w-5" />
                  Order via WhatsApp
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Your order will be sent to us via WhatsApp for confirmation
                </p>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

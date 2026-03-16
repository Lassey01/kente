import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send via WhatsApp
    const message = `*Contact Form - Obaatanpa Kente Hub*\n\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
    window.open(`https://wa.me/233260920305?text=${encodeURIComponent(message)}`, '_blank');
    toast({ title: 'Message sent!', description: 'We will get back to you soon.' });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <main className="py-12 kente-pattern-bg min-h-[60vh]">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <div className="w-20 h-[2px] bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Let's Connect</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Have a question about our kente cloth? Want to place a bulk order? We'd love to hear from you. Reach out through any of the channels below.
            </p>

            <div className="space-y-6">
              {[
                { icon: MapPin, label: 'Location', value: 'Accra, Ghana' },
                { icon: Phone, label: 'Phone', value: '+233 26 092 0305' },
                { icon: Mail, label: 'Email', value: 'info@obaatanpakentehub.com' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">{label}</p>
                    <p className="text-muted-foreground text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              className="mt-8 bg-kente-green hover:bg-kente-green/90 text-secondary-foreground gap-2"
              onClick={() => window.open('https://wa.me/233260920305', '_blank')}
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </Button>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 space-y-5">
              <div>
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <Input id="name" name="name" value={form.name} onChange={handleChange} required
                  className="bg-muted border-border text-foreground" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required
                  className="bg-muted border-border text-foreground" placeholder="your@email.com" />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea id="message" name="message" value={form.message} onChange={handleChange} required
                  className="bg-muted border-border text-foreground min-h-[120px]" placeholder="Tell us what you need..." />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-5">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

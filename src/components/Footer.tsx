import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="kente-stripe" />
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bringing authentic Ghanaian kente cloth to the world. Each piece is a masterpiece of African artistry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold text-foreground mb-4 tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Shop', path: '/shop' },
                { label: 'About Us', path: '/about' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-sm font-bold text-foreground mb-4 tracking-wider uppercase">
              Categories
            </h4>
            <ul className="space-y-3">
              {['Male Kente', 'Female Kente', 'Unisex Kente'].map((cat) => (
                <li key={cat}>
                  <Link
                    to="/shop"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold text-foreground mb-4 tracking-wider uppercase">
              Contact Us
            </h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>📍 Accra, Ghana</li>
              <li>📞 +233 26 092 0305</li>
              <li>✉️ info@obaatanpakentehub.com</li>
            </ul>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="kente-stripe mt-10 mb-6" />
        <p className="text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} Obaatanpa Kente Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

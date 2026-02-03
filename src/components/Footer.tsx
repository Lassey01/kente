export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Kente<span className="text-primary">Palace</span>
            </h3>
            <p className="text-background/70">
              Bringing authentic Ghanaian kente cloth to the world. Each piece is a work of art.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#shop" className="text-background/70 hover:text-primary transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-background/70">
              <li>📍 Accra, Ghana</li>
              <li>📞 +233 00 000 0000</li>
              <li>✉️ info@kentepalace.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/50">
          <p>© {new Date().getFullYear()} KentePalace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import { Plane, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-5">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Plane className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-background leading-tight">
                  Trip Mint
                </span>
                <span className="text-xs text-primary font-medium -mt-0.5">Travel</span>
              </div>
            </a>
            <p className="text-background/70 text-sm mb-6 max-w-sm">
              Your trusted partner for seamless travel experiences. Discover flights, cruises, hotels, and packages tailored to your dreams.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="cta" size="default">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column (Updated with your info) */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-xs text-background/50 uppercase">Email</span>
                  <a href="mailto:info@tripminttravel.com" className="text-background/70 hover:text-primary text-sm transition-colors">
                    info@tripminttravel.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-xs text-background/50 uppercase">Phone</span>
                  <span className="text-background/70 text-sm italic">Support launching shortly</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-xs text-background/50 uppercase">Support Hours</span>
                  <span className="text-background/70 text-sm">08:00 AM - 08:00 PM</span>
                  <span className="text-[10px] text-background/40">(Local Time)</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Trip Mint. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
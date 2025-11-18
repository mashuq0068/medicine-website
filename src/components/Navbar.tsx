import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "হোম" },
    { to: "/products", label: "পণ্য" },
    { to: "/about", label: "আমাদের সম্পর্কে" },
    { to: "/contact", label: "যোগাযোগ" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-medical-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">DR</span>
            </div>
            <span className="font-bold text-lg text-foreground">
              জার্মান হোমিওপ্যাথি
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-medical-green hover:bg-medical-green-dark">
              <a href="https://wa.me/8801XXXXXXXXX">
                অর্ডার করুন
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-2 text-base font-medium ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full bg-medical-green hover:bg-medical-green-dark">
              <a href="https://wa.me/8801XXXXXXXXX">
                অর্ডার করুন
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

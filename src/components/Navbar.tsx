import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()

  const navLinks = [
    { to: "/", label: "হোম" },
    { to: "/products", label: "পণ্য" },
    { to: "/about", label: "আমাদের সম্পর্কে" },
    { to: "/contact", label: "যোগাযোগ" }
  ];

  return (
    <nav className=" z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex lg:flex-col flex-row items-center lg:justify-center justify-between h-36 lg:h-64">
        <div onClick={() => navigate('/')}>
            <img src={logo} alt="" className="h-32 w-32 cursor-pointer lg:h-48 lg:w-48"/>
        </div>

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
              <a target="_blank" href="https://wa.me/8801806953677" rel="noopener noreferrer">
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
              <a href="https://wa.me/8801806953677">
                অর্ডার করুন
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

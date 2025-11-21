import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, MessageCircle } from "lucide-react";
import logo from "../assets/logo.png"
import { products } from "@/data/products";

export const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
             <img src={logo} className="w-32 h-32 object-cover" alt="" />
            </div>
            <p className="text-sm text-muted-foreground">
              প্রাকৃতিক, নিরাপদ, পার্শ্বপ্রতিক্রিয়াহীন চিকিৎসা সবার কাছে পৌঁছে দিতেই আমাদের উদ্যোগ।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">দ্রুত লিংক</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary">হোম</Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary">পণ্য</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">আমাদের সম্পর্কে</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">যোগাযোগ</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">জনপ্রিয় পণ্য</h3>
            <ul className="space-y-2 text-sm">
             {products?.map((product) => (
              <li key={product.id}>
                <Link to={`/products/${product.id}`} className="text-muted-foreground hover:text-primary">
                  {product.name}
                </Link>
              </li>
             ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">যোগাযোগ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-medical-green" />
                <a href="tel:+8801806953677" className="text-muted-foreground hover:text-primary">
                  +8801806953677
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle size={16} className="text-medical-green" />
                <a href="https://wa.me/8801806953677" className="text-muted-foreground hover:text-primary">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Facebook size={16} className="text-medical-green" />
                <a href="https://www.facebook.com/people/Authentic-German-Remedy/61583306746574/" className="text-muted-foreground hover:text-primary">
                  Facebook Page
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-medical-green" />
                <span className="text-muted-foreground">contractagr@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} জার্মান হোমিওপ্যাথিক ওষুধ। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
};

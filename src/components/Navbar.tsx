import { Button } from "@/components/ui/button";
import { Coffee, Menu, ShoppingCart, Package } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <Coffee className={`h-8 w-8 transition-colors ${isScrolled ? "text-primary" : "text-primary-foreground"}`} />
            <span className={`text-2xl font-bold transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
              Coffee House
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="/#home" 
              className={`font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Home
            </a>
            <a 
              href="/#products" 
              className={`font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Products
            </a>
            <a 
              href="/#about" 
              className={`font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              About
            </a>
            <a 
              href="/#contact" 
              className={`font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Contact
            </a>
            <button 
              onClick={() => navigate("/orders")}
              className={`font-medium transition-colors hover:text-accent flex items-center gap-2 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              <Package className="h-4 w-4" />
              Orders
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button 
              variant={isScrolled ? "ghost" : "outline"}
              size="icon"
              onClick={() => navigate("/cart")}
              className={`relative transition-all duration-300 hover:scale-110 ${!isScrolled && "text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"}`}
            >
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-[10px] font-bold text-accent-foreground flex items-center justify-center animate-bounce">
                  {getTotalItems()}
                </span>
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className={`md:hidden ${!isScrolled && "text-primary-foreground hover:bg-primary-foreground/10"}`}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

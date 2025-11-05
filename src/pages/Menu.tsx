import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Products } from "@/components/Products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Croissant, Cookie, Cake } from "lucide-react";

const Menu = () => {
  const categories = [
    {
      icon: Coffee,
      title: "Coffee & Beverages",
      description: "Handcrafted drinks made with premium beans",
      color: "text-amber-600 dark:text-amber-400"
    },
    {
      icon: Croissant,
      title: "Fresh Pastries",
      description: "Baked daily with love and finest ingredients",
      color: "text-orange-600 dark:text-orange-400"
    },
    {
      icon: Cookie,
      title: "Sweet Treats",
      description: "Delightful cookies and brownies",
      color: "text-red-600 dark:text-red-400"
    },
    {
      icon: Cake,
      title: "Special Desserts",
      description: "Seasonal cakes and signature creations",
      color: "text-pink-600 dark:text-pink-400"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 text-center animate-fade-in-up">
              Our Menu
            </h1>
            <p className="text-xl text-primary-foreground/90 text-center max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Explore our carefully curated selection of premium coffees, fresh pastries, and delicious treats
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card 
                  key={category.title}
                  className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <category.icon className={`h-16 w-16 mx-auto mb-4 ${category.color} group-hover:scale-110 transition-transform duration-300`} />
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <Products />

        {/* Special Offers */}
        <section className="py-20 bg-gradient-to-r from-accent/20 to-primary/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Daily Specials</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Check out our rotating selection of seasonal drinks and limited-time offers
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 animate-scale-in">
                <CardContent className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">Morning Special</h3>
                  <p className="text-muted-foreground mb-4">Any coffee + pastry combo</p>
                  <p className="text-3xl font-bold text-accent">$8.99</p>
                  <p className="text-sm text-muted-foreground mt-2">Available until 11 AM</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">Happy Hour</h3>
                  <p className="text-muted-foreground mb-4">50% off all iced beverages</p>
                  <p className="text-3xl font-bold text-accent">50% OFF</p>
                  <p className="text-sm text-muted-foreground mt-2">Daily 3-5 PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;

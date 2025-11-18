import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import r6Image from "@/assets/r6-influenza.jpg";
import r11Image from "@/assets/r11-rheuma.jpg";
import r41Image from "@/assets/r41-sexual.jpg";

const imageMap: Record<string, string> = {
  "r6-influenza.jpg": r6Image,
  "r11-rheuma.jpg": r11Image,
  "r41-sexual.jpg": r41Image,
};

const Products = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            আমাদের <span className="text-medical-green">পণ্য সমূহ</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dr. Reckeweg জার্মান হোমিওপ্যাথিক ওষুধ - প্রতিটি স্বাস্থ্য সমস্যার জন্য প্রাকৃতিক সমাধান
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square bg-gradient-to-br from-medical-green-light to-white p-8">
                <img 
                  src={imageMap[product.image]} 
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold mb-1">{product.name}</h2>
                  <p className="text-sm text-muted-foreground mb-2">{product.nameEnglish}</p>
                  <p className="text-medical-green font-semibold">{product.tagline}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">মূল উপকারিতা:</h4>
                    <ul className="space-y-1">
                      {product.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-medical-green mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <div>
                      <p className="text-xs text-muted-foreground">প্যাক সাইজ</p>
                      <p className="font-semibold">{product.packSize}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">মূল্য</p>
                      <p className="text-2xl font-bold text-medical-green">{product.price}</p>
                    </div>
                  </div>
                </div>

                <Button 
                  asChild 
                  className="w-full bg-medical-green hover:bg-medical-green-dark"
                >
                  <Link to={`/products/${product.id}`}>
                    বিস্তারিত দেখুন
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-medical-green-light border-medical-green/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">
                💚 সকল পণ্যের বিশেষত্ব
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">✓ ১০০% প্রাকৃতিক</h4>
                  <p className="text-sm text-muted-foreground">
                    কোনো ক্ষতিকর রাসায়নিক নেই
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">✓ পার্শ্বপ্রতিক্রিয়াহীন</h4>
                  <p className="text-sm text-muted-foreground">
                    নিরাপদ সকল বয়সের জন্য
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">✓ জার্মান মানসম্পন্ন</h4>
                  <p className="text-sm text-muted-foreground">
                    ১৮০+ বছরের বিশ্বস্ত ব্র্যান্ড
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">✓ দীর্ঘমেয়াদী ফলাফল</h4>
                  <p className="text-sm text-muted-foreground">
                    রোগের মূল কারণ নিরাময় করে
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Products;

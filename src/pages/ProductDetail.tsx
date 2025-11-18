import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import { MessageCircle, Phone, Facebook, ArrowLeft, CheckCircle2 } from "lucide-react";
import r6Image from "@/assets/r6-influenza.jpg";
import r11Image from "@/assets/r11-rheuma.jpg";
import r41Image from "@/assets/r41-sexual.jpg";

const imageMap: Record<string, string> = {
  "r6-influenza.jpg": r6Image,
  "r11-rheuma.jpg": r11Image,
  "r41-sexual.jpg": r41Image,
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">পণ্য খুঁজে পাওয়া যায়নি</h1>
          <Button asChild>
            <Link to="/products">পণ্য তালিকায় ফিরে যান</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          asChild 
          className="mb-6 hover:bg-medical-green-light"
        >
          <Link to="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            পণ্য তালিকায় ফিরে যান
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Image */}
          <div>
            <Card className="overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-medical-green-light to-white p-12">
                <img 
                  src={imageMap[product.image]} 
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </Card>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-3">{product.nameEnglish}</p>
              <p className="text-xl text-medical-green font-semibold">{product.tagline}</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-bold text-medical-green">{product.price}</span>
                <span className="text-muted-foreground">প্যাক সাইজ: {product.packSize}</span>
              </div>
            </div>

            {/* Order Buttons */}
            <Card className="mb-8 bg-medical-green-light border-medical-green/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">এখনই অর্ডার করুন:</h3>
                <div className="space-y-3">
                  <Button 
                    asChild 
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                    size="lg"
                  >
                    <a href={`https://wa.me/${product.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp এ অর্ডার করুন
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline"
                    className="w-full border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2]/10"
                    size="lg"
                  >
                    <a href={product.facebookPage} target="_blank" rel="noopener noreferrer">
                      <Facebook className="mr-2 h-5 w-5" />
                      Facebook এ অর্ডার করুন
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline"
                    className="w-full border-medical-green text-medical-green hover:bg-medical-green-light"
                    size="lg"
                  >
                    <a href={`tel:${product.phoneNumber}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      ফোনে অর্ডার করুন
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">উপকারিতা</h3>
              <div className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-medical-green flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">উপাদান সমূহ</h3>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.ingredients}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Dosage */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">সেবনবিধি</h3>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-medical-green">প্রাপ্তবয়স্কদের জন্য:</h4>
                    <p className="text-muted-foreground">{product.dosage.adult}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-medical-green">শিশুদের জন্য:</h4>
                    <p className="text-muted-foreground">{product.dosage.child}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Note */}
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-6">
                <p className="text-sm text-amber-800">
                  <strong>বিশেষ দ্রষ্টব্য:</strong> গর্ভবতী মা, স্তন্যদানকারী মা এবং দীর্ঘমেয়াদী রোগীদের ক্ষেত্রে 
                  চিকিৎসকের পরামর্শ নিয়ে ওষুধ সেবন করুন।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">অন্যান্য পণ্য</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .map((relatedProduct) => (
                <Card key={relatedProduct.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-medical-green-light to-white p-6">
                    <img 
                      src={imageMap[relatedProduct.image]} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{relatedProduct.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{relatedProduct.tagline}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-medical-green">{relatedProduct.price}</span>
                      <Button asChild size="sm" className="bg-medical-green hover:bg-medical-green-dark">
                        <Link to={`/products/${relatedProduct.id}`}>
                          দেখুন
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

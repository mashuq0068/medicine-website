import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { 
  Shield, 
  Leaf, 
  Award, 
  Users, 
  Clock, 
  CheckCircle2,
  Heart,
  TrendingUp,
  Phone
} from "lucide-react";
import heroImage from "@/assets/hero-homeopathy.jpg";
import { products } from "@/data/products";

const Home = () => {
  const navigate = useNavigate()
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-medical-green" />,
      title: "১০০% প্রাকৃতিক",
      description: "কোনো রাসায়নিক উপাদান নেই, সম্পূর্ণ প্রাকৃতিক হার্বাল ফর্মুলা"
    },
    {
      icon: <Shield className="w-8 h-8 text-medical-green" />,
      title: "পার্শ্বপ্রতিক্রিয়াহীন",
      description: "নিরাপদ চিকিৎসা, কোনো পার্শ্বপ্রতিক্রিয়া নেই"
    },
    {
      icon: <Award className="w-8 h-8 text-medical-green" />,
      title: "জার্মান মানসম্পন্ন",
      description: "Dr. Reckeweg - ১৮০ বছরের বিশ্বস্ত ব্র্যান্ড"
    },
    {
      icon: <Users className="w-8 h-8 text-medical-green" />,
      title: "লক্ষাধিক সন্তুষ্ট গ্রাহক",
      description: "বিশ্বব্যাপী মিলিয়ন মানুষের বিশ্বাস"
    }
  ];

  const benefits = [
    "সর্দি-জ্বর থেকে দ্রুত মুক্তি",
    "বাত ও মাংসপেশীর ব্যথা নিরাময়",
    "রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি",
    "শারীরিক দুর্বলতা দূরীকরণ",
    "দীর্ঘমেয়াদী স্বাস্থ্য সুরক্ষা",
    "মানসিক চাপ ও উদ্বেগ কমায়"
  ];



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-2 bg-medical-green-light rounded-full mb-6">
              <span className="text-medical-green font-semibold text-sm">
                জার্মানির বিশ্বস্ত হোমিওপ্যাথিক ওষুধ
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              প্রাকৃতিক চিকিৎসায়<br />
              <span className="text-medical-green">সুস্থ জীবন</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              ১০০% প্রাকৃতিক, পার্শ্বপ্রতিক্রিয়াহীন জার্মান হোমিওপ্যাথিক ওষুধ।
              সর্দি, জ্বর, বাত ব্যথা ও শারীরিক দুর্বলতার নিরাপদ সমাধান।
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                asChild
                className="bg-medical-green hover:bg-medical-green-dark text-lg"
              >
                <Link to="/products">
                  পণ্য দেখুন
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
               
                className="text-lg border-medical-green text-medical-green hover:bg-medical-green-light"
              >
               
                  <Link to="/contact">
                     <Phone className="mr-2 h-5 w-5" />
                  যোগাযোগ করুন
                  </Link>
                
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              কেন আমাদের বেছে নেবেন?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              বিশ্বমানের জার্মান হোমিওপ্যাথিক ওষুধ - নিরাপদ, কার্যকর ও বিশ্বস্ত
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-medical-green-light rounded-full flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              আমাদের জনপ্রিয় পণ্য
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dr. Reckeweg এর বিশেষ ফর্মুলেশন - প্রতিটি স্বাস্থ্য সমস্যার জন্য প্রাকৃতিক সমাধান
            </p>
          </div>

          {/* Products Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {products.map((product) => (
                      <Card
                        key={product.id}
                        className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="aspect-square bg-gradient-to-br from-medical-green-light to-white p-8">
                          <img
                            src={product?.thumbImage}
                            alt={product.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="mb-4">
                            <h2 className="text-2xl font-bold mb-1">{product.name}</h2>
                        
                            {/* <ul className="space-y-1">
                              {product.benefits.map((benefit, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-muted-foreground flex items-start"
                                >
                                  <span className="break-words whitespace-pre-line">
                                    {benefit}
                                  </span>
                                </li>
                              ))}
                            </ul> */}
                          </div>
          
                          <div className="space-y-3 mb-6">
                            <div>
                              <h4 className="font-semibold text-sm mb-2">
                                মূল উপকারিতা:
                              </h4>
                              <ul className="space-y-1">
                                {product.benefits.slice(0, 2).map((benefit, idx) => (
                                  <li
                                    key={idx}
                                    className="text-sm  flex items-start"
                                  >
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
          
                            {/* <div className="flex items-center justify-between pt-2 border-t">
                              <div>
                                <p className="text-xs text-muted-foreground">
                                  প্যাক সাইজ
                                </p>
                                <p className="font-semibold">{product.packSize}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-xs text-muted-foreground">মূল্য</p>
                                <p className="text-2xl font-bold text-medical-green">
                                  {product.price}
                                </p>
                              </div>
                            </div> */}
                          </div>
          
                          <Button
                            asChild
                            className="w-full bg-medical-green hover:bg-medical-green-dark"
                          >
                            <Link to={`/products/${product.id}`}>বিস্তারিত দেখুন</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-medical-green text-medical-green hover:bg-medical-green-light">
              <Link to="/products">
                সব পণ্য দেখুন
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-medical-green-light to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                হোমিওপ্যাথি কেন <span className="text-medical-green">কার্যকর?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                প্রাকৃতিক উপাদান থেকে তৈরি, শরীরের নিজস্ব প্রতিরোধ ক্ষমতা বৃদ্ধি করে রোগ নিরাময় করে। 
                কোনো পার্শ্বপ্রতিক্রিয়া ছাড়াই দীর্ঘমেয়াদী সুস্বাস্থ্য নিশ্চিত করে।
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-medical-green flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <Heart className="w-12 h-12 text-medical-green mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">১০০%</div>
                <div className="text-muted-foreground">প্রাকৃতিক</div>
              </Card>
              <Card className="p-6 text-center">
                <Shield className="w-12 h-12 text-medical-green mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">০</div>
                <div className="text-muted-foreground">পার্শ্বপ্রতিক্রিয়া</div>
              </Card>
              <Card className="p-6 text-center">
                <Award className="w-12 h-12 text-medical-green mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">১৮০+</div>
                <div className="text-muted-foreground">বছরের ঐতিহ্য</div>
              </Card>
              <Card className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-medical-green mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">৫০০+</div>
                <div className="text-muted-foreground">পণ্য ভ্যারাইটি</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              কীভাবে অর্ডার করবেন?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              মাত্র তিন ধাপে পাবেন আপনার প্রয়োজনীয় ওষুধ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-medical-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                ১
              </div>
              <h3 className="text-xl font-semibold mb-3">পণ্য নির্বাচন করুন</h3>
              <p className="text-muted-foreground">
                আমাদের ওয়েবসাইট থেকে আপনার প্রয়োজনীয় পণ্য খুঁজে নিন
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-medical-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                ২
              </div>
              <h3 className="text-xl font-semibold mb-3">অর্ডার দিন</h3>
              <p className="text-muted-foreground">
                WhatsApp, Facebook বা ফোনে সরাসরি অর্ডার করুন
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-medical-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                ৩
              </div>
              <h3 className="text-xl font-semibold mb-3">ডেলিভারি পান</h3>
              <p className="text-muted-foreground">
                ঢাকায় ২৪ ঘণ্টা, ঢাকার বাইরে ৩-৫ দিনে পণ্য পাবেন
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-medical-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            প্রাকৃতিক চিকিৎসায় সুস্থ থাকুন
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            আজই শুরু করুন আপনার স্বাস্থ্যকর জীবনযাত্রা। 
            বিশ্বস্ত জার্মান হোমিওপ্যাথিক ওষুধের সাথে থাকুন নিরাপদ।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              asChild
              className="text-lg"
            >
              <Link to="/products">
                <Phone className="mr-2 h-5 w-5" />
                এখনই অর্ডার করুন
              </Link>
            
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="text-lg border-white text-white bg-accent/70 hover:bg-accent hover:text-white "
            >
              <Link to="/contact">
                যোগাযোগ করুন
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

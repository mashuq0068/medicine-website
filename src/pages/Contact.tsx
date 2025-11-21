import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-medical-green">যোগাযোগ</span> করুন
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            আমরা সবসময় আপনার সেবায় প্রস্তুত। যেকোনো প্রশ্ন বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন।
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-medical-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-medical-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">ফোন করুন</h3>
              <p className="text-muted-foreground mb-4">
                সরাসরি কথা বলুন আমাদের সাথে
              </p>
              <Button 
                asChild 
                variant="outline" 
                className="border-medical-green text-medical-green hover:bg-medical-green-light"
              >
                <a href="tel:+8801806953677">
                  +8801806953677
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-[#25D366]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">
                দ্রুত মেসেজ পাঠান
              </p>
              <Button 
                asChild 
                className="bg-[#25D366] hover:bg-[#20BA5A]"
              >
                <a href="https://wa.me/8801806953677" target="_blank" rel="noopener noreferrer">
                  মেসেজ পাঠান
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#1877F2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Facebook className="w-8 h-8 text-[#1877F2]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Facebook</h3>
              <p className="text-muted-foreground mb-4">
                আমাদের পেজ ভিজিট করুন
              </p>
              <Button 
                asChild 
                variant="outline"
                className="border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2]/10"
              >
                <a href="https://www.facebook.com/people/Authentic-German-Remedy/61583306746574/" target="_blank" rel="noopener noreferrer">
                  পেজ দেখুন
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info & Map */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">যোগাযোগের তথ্য</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-medical-green-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-medical-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">ঠিকানা</h3>
                      <p className="text-muted-foreground">
                        খান জাহান আলী রোড, খুলনা<br />
                        বাংলাদেশ
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-medical-green-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-medical-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">ফোন নম্বর</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+8801806953677" className="hover:text-medical-green">
                          +8801806953677
                        </a>
                      </p>
                   
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-medical-green-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-medical-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">ইমেইল</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:contractagr@gmail.com" className="hover:text-medical-green">
                          contractagr@gmail.com
                        </a>
                      </p>
                      
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-medical-green-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-medical-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">কার্যসময়</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>শনিবার - বৃহস্পতিবার</p>
                        <p className="font-semibold text-medical-green">সকাল ৯:০০ - রাত ৯:০০</p>
                        <p className="mt-2">শুক্রবার</p>
                        <p className="font-semibold text-medical-green">বন্ধ</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-3xl font-bold mb-8">আমাদের অবস্থান</h2>
            <Card className="overflow-hidden h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8474855234376!2d90.36510731498088!3d23.794534384563075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1c6764f45%3A0x3fe3f4c4c6f4c1c6!2sMirpur%2010%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1625000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              />
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-medical-green to-medical-green-dark text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                প্রশ্ন আছে? এখনই যোগাযোগ করুন
              </h2>
              <p className="text-xl mb-8 opacity-90">
                আমাদের বিশেষজ্ঞ টিম আপনার সকল প্রশ্নের উত্তর দিতে প্রস্তুত
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  asChild
                >
                               <a href="https://wa.me/8801806953677" target="_blank" rel="noopener noreferrer">

                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp করুন
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg border-white text-white bg-accent/70 hover:bg-accent hover:text-white "
                  asChild
                >
                  <a href="tel:+8801806953677">
                    <Phone className="mr-2 h-5 w-5" />
                    ফোন করুন
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;

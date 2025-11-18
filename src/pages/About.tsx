import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, Heart, Shield, Users, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-medical-green" />,
      title: "প্রাকৃতিক চিকিৎসা",
      description: "১০০% প্রাকৃতিক উপাদান থেকে তৈরি, রাসায়নিক মুক্ত ওষুধ"
    },
    {
      icon: <Shield className="w-8 h-8 text-medical-green" />,
      title: "নিরাপত্তা",
      description: "পার্শ্বপ্রতিক্রিয়াহীন, সকল বয়সের জন্য নিরাপদ"
    },
    {
      icon: <Award className="w-8 h-8 text-medical-green" />,
      title: "মান নিশ্চয়তা",
      description: "জার্মান মানসম্পন্ন, আন্তর্জাতিক সার্টিফিকেট প্রাপ্ত"
    },
    {
      icon: <Users className="w-8 h-8 text-medical-green" />,
      title: "বিশ্বস্ততা",
      description: "বিশ্বব্যাপী লক্ষাধিক গ্রাহকের বিশ্বাসভাজন"
    }
  ];

  const stats = [
    { number: "১৮০+", label: "বছরের অভিজ্ঞতা" },
    { number: "৫০০+", label: "ভিন্ন পণ্য" },
    { number: "১০০+", label: "দেশে উপলব্ধ" },
    { number: "১০ লক্ষ+", label: "সন্তুষ্ট গ্রাহক" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            আমাদের <span className="text-medical-green">সম্পর্কে</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            আমরা জার্মান হোমিওপ্যাথিক ওষুধের অনুমোদিত সরবরাহকারী।
            প্রাকৃতিক, নিরাপদ, পার্শ্বপ্রতিক্রিয়াহীন চিকিৎসা সবার কাছে পৌঁছে দিতেই আমাদের উদ্যোগ।
          </p>
        </div>

        {/* Dr. Reckeweg Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-br from-medical-green-light to-white p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-medical-green rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Dr. Reckeweg</h2>
                  <p className="text-medical-green font-semibold">১৮৪৫ সাল থেকে</p>
                </div>
              </div>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  <strong>Dr. Reckeweg & Co. GmbH</strong> জার্মানিতে প্রতিষ্ঠিত একটি বিশ্বখ্যাত 
                  হোমিওপ্যাথিক ওষুধ প্রস্তুতকারক প্রতিষ্ঠান। ১৮৪৫ সাল থেকে তারা বিশ্বমানের 
                  হোমিওপ্যাথিক ওষুধ তৈরি করে আসছে।
                </p>
                <p>
                  ১৮০ বছরের বেশি সময় ধরে <strong>Dr. Reckeweg</strong> প্রাকৃতিক উপাদান ব্যবহার করে 
                  নিরাপদ ও কার্যকর চিকিৎসা প্রদান করছে। তাদের পণ্য বর্তমানে ১০০টিরও বেশি দেশে 
                  ব্যবহৃত হচ্ছে এবং লক্ষ লক্ষ মানুষ এর উপকারিতা পাচ্ছে।
                </p>
                <p className="font-semibold text-medical-green">
                  আমরা গর্বিত যে বাংলাদেশে Dr. Reckeweg এর অরিজিনাল পণ্য সরবরাহ করছি এবং 
                  প্রাকৃতিক চিকিৎসার মাধ্যমে মানুষের স্বাস্থ্যসেবায় অবদান রাখছি।
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-medical-green mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            আমাদের মূল্যবোধ
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-medical-green-light rounded-full flex items-center justify-center">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-medical-green text-white">
            <CardContent className="p-12 text-center">
              <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl font-bold mb-6">আমাদের লক্ষ্য</h2>
              <p className="text-xl leading-relaxed opacity-95">
                বাংলাদেশের প্রতিটি মানুষের কাছে প্রাকৃতিক, নিরাপদ ও কার্যকর 
                হোমিওপ্যাথিক চিকিৎসা পৌঁছে দেওয়া। আমরা বিশ্বাস করি প্রকৃতি থেকে আসা 
                চিকিৎসাই সবচেয়ে নিরাপদ এবং দীর্ঘমেয়াদী সুস্বাস্থ্য নিশ্চিত করতে পারে।
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            কেন আমাদের বেছে নেবেন?
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-medical-green">
                  ✓ অরিজিনাল জার্মান পণ্য
                </h3>
                <p className="text-muted-foreground">
                  আমরা শুধুমাত্র জার্মানি থেকে আমদানিকৃত অরিজিনাল Dr. Reckeweg পণ্য সরবরাহ করি। 
                  কোনো নকল বা ভেজাল পণ্য নয়।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-medical-green">
                  ✓ দ্রুত ডেলিভারি
                </h3>
                <p className="text-muted-foreground">
                  ঢাকার ভেতরে ২৪ ঘণ্টা এবং ঢাকার বাইরে ৩-৫ কার্যদিবসের মধ্যে পণ্য ডেলিভারি করা হয়।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-medical-green">
                  ✓ বিশেষজ্ঞ পরামর্শ
                </h3>
                <p className="text-muted-foreground">
                  আমাদের অভিজ্ঞ হোমিওপ্যাথিক বিশেষজ্ঞ টিম সবসময় আপনার সেবায় প্রস্তুত। 
                  ফোন বা WhatsApp এ যোগাযোগ করে বিনামূল্যে পরামর্শ নিতে পারবেন।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-medical-green">
                  ✓ সাশ্রয়ী মূল্য
                </h3>
                <p className="text-muted-foreground">
                  সরাসরি আমদানিকারক হওয়ায় আমরা বাজারের সেরা দামে পণ্য সরবরাহ করতে পারি। 
                  মধ্যস্থতাকারী না থাকায় আপনি পাবেন সেরা মূল্য।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

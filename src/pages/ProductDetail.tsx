import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import { MessageCircle, Phone, Facebook, ArrowLeft } from "lucide-react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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

  // Map product images for ImageGallery
  const galleryImages = product.productImages.map((img) => ({
    original: img,
    thumbnail: img,
  }));

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6 ">
          <Link to="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            পণ্য তালিকায় ফিরে যান
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Carousel */}
          <div>
            <Card className="mb-4">
              <div
                style={{
                  touchAction: "pan-y", // allow vertical scrolling
                  WebkitOverflowScrolling: "touch", // smooth scrolling for iOS
                }}
                className="overflow-x-hidden touch-pan-y"
              >
                <ImageGallery
                  items={galleryImages}
                  showPlayButton={true}
                  autoPlay={true}
                  slideInterval={5000}
                  showFullscreenButton={false}
                  showNav={true}
                  showIndex={false}
                  thumbnailPosition="bottom"
                  swipeThreshold={10} // reduce threshold for swipes
                  useTranslate3D={true} // smoother swipe
                />
              </div>
            </Card>

            {/* Order Buttons */}
            <Card className="mb-8 mt-8 bg-medical-green-light border-medical-green/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">এখনই অর্ডার করুন:</h3>
                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                    size="lg"
                  >
                    <a
                      href="https://wa.me/8801806953677"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                    <a
                      href="https://www.facebook.com/people/Authentic-German-Remedy/61583306746574/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                    <a href="tel:+8801806953677">
                      <Phone className="mr-2 h-5 w-5" />
                      ফোনে অর্ডার করুন
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <div className="mb-8">
              <div
                className="whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: product.detailsHtml }}
              ></div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">অন্যান্য পণ্য</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square bg-gradient-to-br from-medical-green-light to-white p-6">
                    <img
                      src={relatedProduct.thumbImage}
                      alt={relatedProduct.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {relatedProduct.name}
                    </h3>
                    <ul className="space-y-1">
                      {relatedProduct.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm flex items-start">
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <div className="flex mt-5 items-center justify-between">
                      <Button
                        asChild
                        size="sm"
                        className="bg-medical-green hover:bg-medical-green-dark"
                      >
                        <Link to={`/products/${relatedProduct.id}`}>দেখুন</Link>
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

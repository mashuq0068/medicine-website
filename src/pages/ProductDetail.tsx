import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import { MessageCircle, Phone, Facebook, ArrowLeft } from "lucide-react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import bkashIcon from "../assets/icons/bKash.png";
import nogodIcon from "../assets/icons/nogod.png";
import cashIcon from "../assets/icons/cash.png";
import { useRef } from "react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const formRef = useRef<HTMLDivElement | null>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
        <div className="mb-6 grid md:grid-cols-2 items-end gap-4">
          {/* Back Button */}
          <div className="text-left">
            <Button variant="ghost" asChild>
              <Link to="/products" className="flex items-center text-left">
                <ArrowLeft className="mr-2 h-4 w-4" />
                পণ্য তালিকায় ফিরে যান
              </Link>
            </Button>
          </div>

          {/* Order Marker Text */}
          <Button
            onClick={scrollToForm}
            className="text-left ml-3 font-semibold text-lg cursor-pointer select-none 
              transition"
          >
            এখনই অর্ডার করুন
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Carousel */}
          <div>
            <Card  className="mb-4">
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
            {/* Order Form */}
            <Card ref={formRef} className="mb-8 mt-8 bg-medical-green-light border-medical-green/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">এখনই অর্ডার করুন:</h3>

                {/* Customer Details */}
                <form className="space-y-4">
                  <div>
                    <label className="block mb-1 font-medium">নাম</label>
                    <input
                      type="text"
                      placeholder="আপনার নাম লিখুন"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 font-medium">ঠিকানা</label>
                    <input
                      type="text"
                      placeholder="আপনার ঠিকানা লিখুন"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 font-medium">ফোন নম্বর</label>
                    <input
                      type="tel"
                      placeholder="০১XXXXXXXXX"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 font-medium">
                      বিবরণ / মন্তব্য
                    </label>
                    <textarea
                      placeholder="যদি কোন বিশেষ নির্দেশনা থাকে লিখুন"
                      className="w-full p-2 border border-gray-300 rounded"
                      rows={3}
                    />
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h4 className="font-semibold mb-2">
                      পেমেন্ট পদ্ধতি নির্বাচন করুন
                    </h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 p-2 border border-gray-400 rounded cursor-pointer hover:border-gray-500">
                        <input
                          type="radio"
                          name="payment"
                          value="bkash"
                          required
                          className="accent-green-500"
                        />
                        <img src={bkashIcon} alt="Bkash" className="h-8 w-8" />
                        <span>বিকাশ</span>
                      </label>

                      <label className="flex items-center space-x-2 p-2 border border-gray-400 rounded cursor-pointer hover:border-gray-500">
                        <input
                          type="radio"
                          name="payment"
                          value="nogod"
                          required
                          className="accent-green-500"
                        />
                        <img src={nogodIcon} alt="Nogod" className="h-8 w-8" />
                        <span>নগদ</span>
                      </label>

                      <label className="flex items-center space-x-2 p-2 border border-gray-400 rounded cursor-pointer hover:border-gray-500">
                        <input
                          type="radio"
                          name="payment"
                          value="cash_on_delivery"
                          required
                          className="accent-green-500"
                        />
                        <img
                          src={cashIcon}
                          alt="Cash on Delivery"
                          className="h-8 w-8"
                        />
                        <span>ক্যাশ অন ডেলিভারি</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-medical-green hover:bg-medical-green-dark text-white text-lg mt-4"
                  >
                    অর্ডার সম্পন্ন করুন
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold ">{product.name}</h1>
            <div className="">
              <div
                className="whitespace-pre-line -mt-2"
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

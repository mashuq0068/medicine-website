export interface Product {
  id: string;
  name: string;
  nameEnglish: string;
  tagline: string;
  price: string;
  image: string;
  benefits: string[];
  ingredients: string;
  dosage: {
    adult: string;
    child: string;
  };
  packSize: string;
  whatsappNumber: string;
  facebookPage: string;
  phoneNumber: string;
}

export const products: Product[] = [
  {
    id: 'r6-influenza',
    name: 'Dr. Reckeweg R-6',
    nameEnglish: 'Influenza Drops',
    tagline: '🦠 ভাইরাস সংক্রমণ বা ইনফ্লুয়েঞ্জা? চিন্তা নয়!',
    price: '৳ ৪৫০',
    image: 'r6-influenza.jpg',
    benefits: [
      'সর্দি-জ্বর দ্রুত কমায়',
      'কাশি, গলা ব্যথা ও দুর্বলতা হ্রাস',
      'রোগ প্রতিরোধ ক্ষমতা বাড়ায়'
    ],
    ingredients: 'Eupatorium, Bryonia, Gelsemium, Aconitum, Phosphorus, Ferrum phosphoricum',
    dosage: {
      adult: 'প্রাপ্তবয়স্ক: প্রতি ১–২ ঘন্টা পর ১০–১৫ ফোঁটা (উপসর্গ কমলে দিনে ৩ বার)',
      child: 'শিশু: ডাক্তারের পরামর্শ অনুযায়ী'
    },
    packSize: '22 ml',
    whatsappNumber: '8801XXXXXXXXX',
    facebookPage: 'https://facebook.com/yourpage',
    phoneNumber: '+8801XXXXXXXXX'
  },
  {
    id: 'r11-rheuma',
    name: 'Dr. Reckeweg R-11',
    nameEnglish: 'Rheuma Drops',
    tagline: '💪 বাত ও মাংসপেশীর ব্যথায় দ্রুত আরাম',
    price: '৳ ৪৫০',
    image: 'r11-rheuma.jpg',
    benefits: [
      'বাত, গাঁট, পেশীর ব্যথা কমায়',
      'প্রদাহ ও ফোলাভাব কমায়',
      'নড়াচড়া সহজ করে',
      'দীর্ঘমেয়াদে পেশী স্থিতিশীলতা উন্নত করে'
    ],
    ingredients: 'Causticum, Colchicum, Rhododendron, Rhus tox, Dulcamara, Arnica, Bryonia',
    dosage: {
      adult: 'দিনে ৩ বার ১০–১৫ ফোঁটা, ব্যথা বেশি হলে প্রতি ১–২ ঘন্টা',
      child: 'ডাক্তারের পরামর্শ অনুযায়ী'
    },
    packSize: '22 ml',
    whatsappNumber: '8801XXXXXXXXX',
    facebookPage: 'https://facebook.com/yourpage',
    phoneNumber: '+8801XXXXXXXXX'
  },
  {
    id: 'r41-sexual',
    name: 'Dr. Reckeweg R-41',
    nameEnglish: 'Sexual Weakness Drops',
    tagline: '💪 শারীরিক দুর্বলতা বা যৌনক্ষমতা হ্রাস? প্রাকৃতিক সমাধান।',
    price: '৳ ৪৮০',
    image: 'r41-sexual.jpg',
    benefits: [
      'যৌন দুর্বলতা ও ক্লান্তি কমায়',
      'রক্ত সঞ্চালন উন্নত করে',
      'মানসিক চাপ ও স্নায়ু দুর্বলতা হ্রাস',
      'আত্মবিশ্বাস বাড়ায়'
    ],
    ingredients: 'Agnus castus, Acid phosphoricum, Damiana, China, Sepia, Nux vomica, Zincum metallicum',
    dosage: {
      adult: 'দিনে ৩ বার ১০–১৫ ফোঁটা, অতিরিক্ত দুর্বলতায় প্রতি ১–২ ঘন্টা',
      child: 'প্রযোজ্য নয়'
    },
    packSize: '22 ml',
    whatsappNumber: '8801XXXXXXXXX',
    facebookPage: 'https://facebook.com/yourpage',
    phoneNumber: '+8801XXXXXXXXX'
  }
];

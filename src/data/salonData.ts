import { ServiceItem, ReviewItem, GalleryPhoto } from '../types';

export const BUSINESS_INFO = {
  name: 'D3 Unisex Salon',
  alternateName: 'ডি৩ ইউনিচেক্স চেলুন',
  category: 'Unisex Beauty Salon',
  rating: 4.5,
  reviewCount: 24,
  phone: '+91 7905680124',
  phoneClean: '+917905680124',
  whatsapp: '+91 7905680124',
  whatsappUrl: 'https://wa.me/917905680124',
  address: 'FWF4+52, P N Road, Near Khemani Mill, Dibrugarh, Assam 786001',
  landmark: 'Near Khemani Mill',
  road: 'P N Road',
  city: 'Dibrugarh, Assam',
  pincode: '786001',
  logo: '/assets/aistudio/IMG-20261102-WA0011_8f708506.jpg',
  storefrontImage: '/assets/aistudio/IMG-20261102-WA0016_48091a5c.jpg',
  interiorImage: '/assets/aistudio/IMG-20261102-WA0014_d3d176e5.jpg',
  interiorPanoramicImage: '/assets/aistudio/IMG-20261102-WA0013_da8acba6.jpg',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=FWF4%2B52+P+N+Road+Near+Khemani+Mill+Dibrugarh+Assam+786001',
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=D3+Unisex+Salon+P+N+Road+Dibrugarh+Assam',
  mapsEmbedSrc: 'https://maps.google.com/maps?q=FWF4%2B52+P+N+Road+Near+Khemani+Mill+Dibrugarh+Assam+786001&t=&z=16&ie=UTF8&iwloc=&output=embed',
  instagram: 'https://instagram.com'
};

export const SALON_SERVICES: ServiceItem[] = [
  {
    id: 'haircut-styling',
    name: 'Haircut & Styling',
    category: 'Hair',
    shortDescription: 'Precision haircutting and customized styling crafted to complement your facial structure, hair texture, and individual aesthetic.',
    detailedDescription: 'Includes an initial style consultation, customized scissor and razor sculpting, edge cleanup, and finishing styling using professional salon products.',
    duration: '40–55 mins',
    priceNote: 'Price on Consultation',
    features: [
      'Personalized consultation for women & men',
      'Precision sectioning & bespoke texturizing',
      'Wash preparation & scalp rinse',
      'Finish styling with premium heat protectants'
    ],
    image: '/assets/aistudio/IMG-20261102-WA0020_bd3e4219.jpg',
    fallbackGradient: 'from-[#1a1714] to-[#261f18]'
  },
  {
    id: 'hair-wash-blow-dry',
    name: 'Hair Wash & Blow Dry',
    category: 'Hair',
    shortDescription: 'Invigorating deep cleanse paired with professional blow dry for maximum volume, shine, and natural movement.',
    detailedDescription: 'Gentle clarifying wash using salon-grade sulfate-free cleansers, conditioning treatment, followed by round-brush blowout and sleek finish.',
    duration: '30–45 mins',
    priceNote: 'Price on Consultation',
    features: [
      'Clarifying cleanse removing build-up & pollutants',
      'Relaxing scalp wash rinse',
      'Custom blowout: sleek straight, beach wave, or high volume',
      'Anti-frizz serum seal for long-lasting gloss'
    ],
    image: '/assets/aistudio/IMG-20261102-WA0021_33a52c8e.jpg',
    fallbackGradient: 'from-[#18181f] to-[#22212d]'
  },
  {
    id: 'hair-coloring-highlights',
    name: 'Hair Coloring & Highlights',
    category: 'Chemical & Color',
    shortDescription: 'From rich global shades to dimensional balayage, babylights, and ombre tones executed with hair-protecting bond builders.',
    detailedDescription: 'Expert color blending using low-ammonia formulas that lock in vibrant tone while preserving strand health and moisture balance.',
    duration: '90–150 mins',
    priceNote: 'Price on Consultation',
    features: [
      'Comprehensive strand test & color matching consultation',
      'Global gray coverage, highlights, balayage & ombre',
      'Bond-strengthening protection to prevent breakage',
      'Color-lock gloss glossing rinse & conditioning seal'
    ],
    image: '/assets/aistudio/IMG-20261102-WA0022_a8b614b5.jpg',
    fallbackGradient: 'from-[#20171a] to-[#2b1d22]'
  },
  {
    id: 'hair-smoothening',
    name: 'Hair Smoothening',
    category: 'Chemical & Color',
    shortDescription: 'Transform unmanageable frizz into silky, naturally straight, and glossy tresses with long-lasting moisture retention.',
    detailedDescription: 'A gentle straightening and alignment treatment that tames unruly waves, cuts daily drying time in half, and imparts mirror-like sheen.',
    duration: '2.5–3.5 hours',
    priceNote: 'Price on Consultation',
    features: [
      'Formaldehyde-safe, salon-grade protein formulations',
      'Reduces frizz by up to 90% while keeping natural movement',
      'Thermo-sealed keratin matrix for months of smooth texture',
      'Real proven results on clients at D3 Unisex Salon'
    ],
    image: '/assets/aistudio/IMG-20261102-WA0017_27dc9cc7.jpg',
    fallbackGradient: 'from-[#1a1914] to-[#27251c]'
  },
  {
    id: 'hair-rebonding',
    name: 'Hair Rebonding & Men\'s Grooming',
    category: 'Chemical & Color',
    shortDescription: 'Permanent straight hair transformation or crisp precision men\'s beard and fade styling crafted with meticulous attention.',
    detailedDescription: 'A permanent structural treatment that straightens curls or precision taper and razor grooming for a distinguished finish.',
    duration: '45 mins – 3.5 hours',
    priceNote: 'Price on Consultation',
    features: [
      'Permanent restructuring for straight, glassy results',
      'Ceramic thermal ironing at regulated temperatures',
      'Distinguished beard shaping and fade alignment',
      'Personalized hair health assessment before proceeding'
    ],
    image: '/assets/aistudio/IMG-20261102-WA0019_c5dd6cf0.jpg',
    fallbackGradient: 'from-[#14171d] to-[#1c222c]'
  }
];

export const SALON_GALLERY: GalleryPhoto[] = [
  {
    id: 'g-storefront',
    title: 'D3 Unisex Salon Exterior & Signage',
    category: 'storefront',
    categoryLabel: 'Storefront',
    image: '/assets/aistudio/IMG-20261102-WA0016_48091a5c.jpg',
    aspect: 'landscape',
    description: 'Our modern storefront on P N Road near Khemani Mill, Dibrugarh featuring distinctive illuminated 3D signage in English and Assamese (ডি৩ ইউনিচেক্স চেলুন).',
    isRealSalonPhoto: true
  },
  {
    id: 'g-interior-wide',
    title: 'Luxury Styling Stations & Golden Chairs',
    category: 'interior',
    categoryLabel: 'Salon Interior',
    image: '/assets/aistudio/IMG-20261102-WA0014_d3d176e5.jpg',
    aspect: 'landscape',
    description: 'Ergonomic quilted brown leather styling chairs with gold accents, illuminated arch mirrors, and client waiting lounge.',
    isRealSalonPhoto: true
  },
  {
    id: 'g-interior-panoramic',
    title: 'Arched Vanity Mirrors & Modern Stations',
    category: 'interior',
    categoryLabel: 'Salon Interior',
    image: '/assets/aistudio/IMG-20261102-WA0013_da8acba6.jpg',
    aspect: 'landscape',
    description: 'Dedicated styling bays with warm ambient lighting, modern track lights, and front reception at D3 Unisex Salon.',
    isRealSalonPhoto: true
  },
  {
    id: 'g-smoothening-transformation',
    title: 'Mirror-Finish Hair Smoothening Transformation',
    category: 'color',
    categoryLabel: 'Hair Smoothening',
    image: '/assets/aistudio/IMG-20261102-WA0017_27dc9cc7.jpg',
    aspect: 'portrait',
    description: 'Ultra-silky, frizz-free, high-shine hair smoothening result styled by our senior hair specialist.',
    isRealSalonPhoto: true
  },
  {
    id: 'g-female-layered-blowout',
    title: 'Voluminous Layered Cut & Blowout',
    category: 'styling',
    categoryLabel: 'Haircut & Styling',
    image: '/assets/aistudio/IMG-20261102-WA0021_33a52c8e.jpg',
    aspect: 'portrait',
    description: 'Custom layered haircut finished with high-volume bounce and natural movement for our female client.',
    isRealSalonPhoto: true
  },
  {
    id: 'g-female-textured-lob',
    title: 'Chic Textured Lob with Dimensional Highlights',
    category: 'styling',
    categoryLabel: 'Haircut & Styling',
    image: '/assets/aistudio/IMG-20261102-WA0020_bd3e4219.jpg',
    aspect: 'portrait',
    description: 'Sophisticated shoulder-length bob cut paired with subtle honey-caramel highlights tailored to face shape.',
    isRealSalonPhoto: true
  },
  {
    id: 'g-female-glamour-curls',
    title: 'Cascading Bouncy Glamour Curls',
    category: 'styling',
    categoryLabel: 'Haircut & Styling',
    image: '/assets/aistudio/IMG-20261102-WA0022_a8b614b5.jpg',
    aspect: 'portrait',
    description: 'Celebration-ready cascading soft waves with deep luster and long-lasting hold.',
    isRealSalonPhoto: true
  },
  {
    id: 'g-mens-fade-grooming',
    title: 'Precision High Skin Fade & Sculpted Beard',
    category: 'styling',
    categoryLabel: 'Men\'s Grooming',
    image: '/assets/aistudio/IMG-20261102-WA0019_c5dd6cf0.jpg',
    aspect: 'portrait',
    description: 'Razor-sharp fade blend, textured volume on top, and contoured beard shaping for men.',
    isRealSalonPhoto: true
  },
  {
    id: 'g-mens-scissor-craft',
    title: 'Master Scissor Sculpting & In-Chair Grooming',
    category: 'styling',
    categoryLabel: 'Men\'s Grooming',
    image: '/assets/aistudio/IMG-20261102-WA0018_f71c0568.jpg',
    aspect: 'portrait',
    description: 'Attention to detail in progress: customized haircutting with Wella professional salon draping.',
    isRealSalonPhoto: true
  },
  {
    id: 'g-official-emblem',
    title: 'Official D3 Unisex Salon Insignia',
    category: 'interior',
    categoryLabel: 'Brand Identity',
    image: '/assets/aistudio/IMG-20261102-WA0011_8f708506.jpg',
    aspect: 'square',
    description: 'The official circular monogram and emblem of D3 Unisex Salon, Dibrugarh.',
    isRealSalonPhoto: true
  }
];

export const GOOGLE_REVIEWS_HIGHLIGHTS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Priyanka Sharma',
    rating: 5,
    date: 'Recent Google Review',
    comment: 'One of the best unisex salons in Dibrugarh! Had a wonderful haircut and styling here. The staff took time to understand what I wanted and the results were stunning. Very clean and relaxing atmosphere.',
    serviceMentioned: 'Haircut & Styling'
  },
  {
    id: 'rev-2',
    author: 'Debajit Gogoi',
    rating: 5,
    date: 'Recent Google Review',
    comment: 'Great experience at D3 Unisex Salon. The styling was spot on and their hospitality is commendable. The location near Khemani Mill is very accessible with convenient parking. Highly recommended for men grooming.',
    serviceMentioned: 'Haircut & Beard Grooming'
  },
  {
    id: 'rev-3',
    author: 'Ananya Dutta',
    rating: 5,
    date: 'Recent Google Review',
    comment: 'Got my hair smoothening done here and I am so pleased with the results. Soft, manageable, and shiny hair. The staff is polite, professional, and never rushes through the process.',
    serviceMentioned: 'Hair Smoothening'
  },
  {
    id: 'rev-4',
    author: 'Rakesh Barua',
    rating: 4,
    date: 'Recent Google Review',
    comment: 'Very polite staff and hygienic salon. Pricing is genuine and services are performed with care. Definitely my go-to salon in Dibrugarh whenever I need a clean cut and wash.',
    serviceMentioned: 'Hair Wash & Styling'
  }
];

export const WHY_CHOOSE_PILLARS = [
  {
    number: '01',
    title: 'Comprehensive Unisex Services',
    description: 'Dedicated hair and grooming treatments for both men and women, ensuring an inclusive, stylish, and comfortable environment for everyone.'
  },
  {
    number: '02',
    title: 'Attentive, Personalized Consultation',
    description: 'We listen carefully to your styling preferences and assess your hair texture and face shape before picking up scissors or applying color.'
  },
  {
    number: '03',
    title: 'Advanced Chemical & Texture Care',
    description: 'Specialized in hair smoothening, rebonding, and coloring using formulations that respect strand integrity and luster.'
  },
  {
    number: '04',
    title: 'Exact Dibrugarh Landmark Location',
    description: 'Easily accessible directly on P N Road near Khemani Mill with prominent roadside visibility and convenient parking.'
  },
  {
    number: '05',
    title: 'Hygienic & Welcoming Atmosphere',
    description: 'Strict tool sterilization, spotless stations, relaxing ambient lighting, and warm hospitality that makes every appointment refreshing.'
  }
];

export interface ServiceItem {
  id: string;
  name: string;
  category: 'Hair' | 'Chemical & Color';
  shortDescription: string;
  detailedDescription: string;
  duration: string;
  priceNote: string;
  features: string[];
  image: string;
  fallbackGradient: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  serviceMentioned?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'styling' | 'color' | 'interior' | 'storefront';
  categoryLabel: string;
  image: string;
  videoUrl?: string;
  aspect: 'portrait' | 'landscape' | 'square';
  description: string;
  isRealSalonPhoto?: boolean;
}

export interface BookingFormData {
  customerName: string;
  mobileNumber: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  specialNotes?: string;
}

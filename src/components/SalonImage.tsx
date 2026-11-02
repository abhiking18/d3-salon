import React, { useState } from 'react';
import { Camera, Upload, Sparkles } from 'lucide-react';

interface SalonImageProps {
  src: string | null | undefined;
  alt: string;
  className?: string;
  label?: string; // e.g. "Salon Entrance", "Hair Spa Station", "Precision Haircut"
  fallbackTitle?: string;
  onUploadPhoto?: (dataUrl: string) => void;
  allowDirectUpload?: boolean;
}

export const SalonImage: React.FC<SalonImageProps> = ({
  src,
  alt,
  className = '',
  label,
  onUploadPhoto,
  allowDirectUpload = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUploadPhoto) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onUploadPhoto(reader.result);
          setHasError(false);
          setIsLoading(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // If no photo URL is provided or if loading failed, show the clean, elegant "Photo coming soon" placeholder
  if (!src || hasError) {
    return (
      <div
        className={`relative w-full h-full bg-[#111116] border border-[#262633] flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden group ${className}`}
        role="img"
        aria-label={`${alt} - Photo coming soon`}
      >
        {/* Subtle geometric architectural grid pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        {/* Framing corner accents */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#C5A059]/40" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#C5A059]/40" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#C5A059]/40" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#C5A059]/40" />

        {/* Monogram emblem */}
        <div className="w-12 h-12 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/5 flex items-center justify-center mb-3 text-[#C5A059]">
          <Camera className="w-5 h-5 stroke-[1.5]" />
        </div>

        {/* Exact requested text */}
        <span className="font-serif text-base sm:text-lg text-[#F3EFE6] tracking-wide font-normal mb-1">
          Photo coming soon
        </span>

        {/* Descriptive context tag without AI clutter */}
        <span className="text-[11px] font-mono tracking-wider uppercase text-[#C5A059]/80 mb-2">
          {label || 'Authentic Salon Photography'}
        </span>

        <p className="text-[11px] text-[#807C75] font-light max-w-xs leading-relaxed">
          Real photography of D3 Unisex Salon will be displayed here.
        </p>

        {/* Direct upload button for salon owner */}
        {allowDirectUpload && onUploadPhoto && (
          <label className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1A1A24] hover:bg-[#252533] border border-[#C5A059]/40 text-[11px] font-medium text-[#C5A059] cursor-pointer transition-all">
            <Upload className="w-3 h-3" />
            <span>Upload Real Photo</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        )}
      </div>
    );
  }

  // Render the authentic real salon photograph
  return (
    <div className={`relative overflow-hidden bg-[#0F0F14] ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#14141B] animate-pulse flex items-center justify-center">
          <span className="font-serif text-xs text-[#C5A059]/60 tracking-widest uppercase">
            D3 Unisex Salon
          </span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};

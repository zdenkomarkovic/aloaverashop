"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/image";

interface ProductImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

interface ProductImageGalleryProps {
  images: ProductImage[];
  productName: string;
  badges?: {
    new?: boolean;
    bestseller?: boolean;
    discount?: number;
  };
}

export default function ProductImageGallery({
  images,
  productName,
  badges,
}: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const mainImageUrl = images[selectedImageIndex]
    ? urlFor(images[selectedImageIndex]).width(800).height(800).url()
    : "/placeholder-product.jpg";

  return (
    <div>
      {/* Main Image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4">
        <Image
          src={mainImageUrl}
          alt={images[selectedImageIndex]?.alt || productName}
          fill
          className="object-cover"
          priority
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {badges?.new && (
            <span className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold rounded-full">
              NOVO
            </span>
          )}
          {badges?.discount && badges.discount > 0 && (
            <span className="bg-red-600 text-white px-4 py-2 text-sm font-semibold rounded-full">
              -{badges.discount}%
            </span>
          )}
          {badges?.bestseller && (
            <span className="bg-emerald-600 text-white px-4 py-2 text-sm font-semibold rounded-full">
              BESTSELLER
            </span>
          )}
        </div>
      </div>

      {/* Thumbnail images */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.slice(0, 4).map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`relative aspect-square rounded-lg overflow-hidden bg-gray-100 border-2 transition-all ${
                selectedImageIndex === index
                  ? "border-emerald-600 ring-2 ring-emerald-600 ring-offset-2"
                  : "border-transparent hover:border-emerald-400"
              }`}
            >
              <Image
                src={urlFor(image).width(200).height(200).url()}
                alt={image.alt || `${productName} ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

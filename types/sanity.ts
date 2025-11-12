import { PortableTextBlock } from '@portabletext/types';

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
}

export interface Category {
  _id: string;
  _type: 'category';
  name: string;
  slug: {
    current: string;
  };
  description?: string;
  image?: SanityImage;
  order?: number;
}

export interface Product {
  _id: string;
  _type: 'product';
  name: string;
  slug: {
    current: string;
  };
  images: SanityImage[];
  category: Category;
  price: number;
  oldPrice?: number;
  shortDescription?: string;
  description?: PortableTextBlock[];
  ingredients?: string;
  usage?: string;
  volume?: string;
  inStock: boolean;
  featured: boolean;
  bestseller: boolean;
  new: boolean;
}

export interface BlogPost {
  _id: string;
  _type: 'blogPost';
  title: string;
  slug: {
    current: string;
  };
  author: string;
  publishedAt: string;
  mainImage: SanityImage;
  excerpt: string;
  body: PortableTextBlock[];
  featured: boolean;
}

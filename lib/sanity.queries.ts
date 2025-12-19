import { client } from '@/sanity/client';
import { Category, Product, BlogPost } from '@/types/sanity';

// Categories
export async function getAllCategories(): Promise<Category[]> {
  const query = `*[_type == "category"] | order(order asc) {
    _id,
    _type,
    name,
    slug,
    description,
    image {
      _type,
      asset,
      alt
    },
    order
  }`;
  return client.fetch(query, {}, { cache: 'no-store' });
}

// Products
export async function getAllProducts(): Promise<Product[]> {
  const query = `*[_type == "product"] | order(_createdAt desc) {
    _id,
    _type,
    name,
    slug,
    images[] {
      _type,
      asset,
      alt
    },
    category->{
      _id,
      name,
      slug
    },
    price,
    oldPrice,
    shortDescription,
    volume,
    inStock,
    featured,
    bestseller,
    new
  }`;
  return client.fetch(query, {}, { cache: 'no-store' });
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const query = `*[_type == "product" && featured == true] | order(_createdAt desc) [0...6] {
    _id,
    _type,
    name,
    slug,
    images[] {
      _type,
      asset,
      alt
    },
    category->{
      _id,
      name,
      slug
    },
    price,
    oldPrice,
    shortDescription,
    volume,
    inStock,
    featured,
    bestseller,
    new
  }`;
  return client.fetch(query, {}, { cache: 'no-store' });
}

export async function getBestsellerProducts(): Promise<Product[]> {
  const query = `*[_type == "product" && bestseller == true] | order(_createdAt desc) [0...6] {
    _id,
    _type,
    name,
    slug,
    images[] {
      _type,
      asset,
      alt
    },
    category->{
      _id,
      name,
      slug
    },
    price,
    oldPrice,
    shortDescription,
    volume,
    inStock,
    featured,
    bestseller,
    new
  }`;
  return client.fetch(query, {}, { cache: 'no-store' });
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  const query = `*[_type == "product" && category->slug.current == $categorySlug] | order(_createdAt desc) {
    _id,
    _type,
    name,
    slug,
    images[] {
      _type,
      asset,
      alt
    },
    category->{
      _id,
      name,
      slug
    },
    price,
    oldPrice,
    shortDescription,
    volume,
    inStock,
    featured,
    bestseller,
    new
  }`;
  return client.fetch(query, { categorySlug }, { cache: 'no-store' });
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    _type,
    name,
    slug,
    images[] {
      _type,
      asset,
      alt
    },
    category->{
      _id,
      name,
      slug
    },
    price,
    oldPrice,
    shortDescription,
    description,
    ingredients,
    usage,
    volume,
    inStock,
    featured,
    bestseller,
    new
  }`;
  return client.fetch(query, { slug }, { cache: 'no-store' });
}

// Blog Posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    _type,
    title,
    slug,
    author,
    publishedAt,
    mainImage {
      _type,
      asset,
      alt
    },
    excerpt,
    featured
  }`;
  return client.fetch(query, {}, { cache: 'no-store' });
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    _type,
    title,
    slug,
    author,
    publishedAt,
    mainImage {
      _type,
      asset,
      alt
    },
    excerpt,
    featured
  }`;
  return client.fetch(query, {}, { cache: 'no-store' });
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    slug,
    author,
    publishedAt,
    mainImage {
      _type,
      asset,
      alt
    },
    excerpt,
    body,
    featured
  }`;
  return client.fetch(query, { slug }, { cache: 'no-store' });
}

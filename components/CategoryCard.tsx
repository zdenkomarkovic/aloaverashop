import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/types/sanity';
import { urlFor } from '@/sanity/image';
import { Card } from '@/components/ui/card';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const imageUrl = category.image?.asset?._ref
    ? urlFor(category.image).width(400).height(400).url()
    : '/placeholder-category.jpg';

  return (
    <Link href={`/proizvodi?kategorija=${category.slug.current}`}>
      <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={imageUrl}
            alt={category.image?.alt || category.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-y-[-4px] transition-transform">
              {category.name}
            </h3>
            {category.description && (
              <p className="text-sm text-white/90 line-clamp-2">
                {category.description}
              </p>
            )}
            <div className="mt-3 inline-flex items-center text-white text-sm font-semibold group-hover:gap-2 gap-1 transition-all">
              Pogledaj proizvode
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

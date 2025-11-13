import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/sanity";
import { urlFor } from "@/sanity/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.images[0]
    ? urlFor(product.images[0]).width(400).height(400).url()
    : "/placeholder-product.jpg";

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
      <Link href={`/proizvodi/${product.slug.current}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={imageUrl}
            alt={product.images[0]?.alt || product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.new && (
              <span className="bg-blue-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
                NOVO
              </span>
            )}
            {discount > 0 && (
              <span className="bg-red-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
                -{discount}%
              </span>
            )}
            {product.bestseller && (
              <span className="bg-emerald-400 text-white px-3 py-1 text-xs font-semibold rounded-full">
                BESTSELLER
              </span>
            )}
          </div>

          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-gray-800 text-white px-4 py-2 text-sm font-semibold rounded">
                Nema na stanju
              </span>
            </div>
          )}
        </div>

        <CardContent className="p-4">
          <p className="text-xs text-emerald-700 font-medium mb-1">
            {product.category.name}
          </p>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
            {product.name}
          </h3>

          {product.volume && (
            <p className="text-sm text-gray-500 mb-2">{product.volume}</p>
          )}

          {product.shortDescription && (
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {product.shortDescription}
            </p>
          )}

          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col">
              {product.oldPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {product.oldPrice.toLocaleString("sr-RS")} RSD
                </span>
              )}
              <span className="text-xl font-bold text-emerald-400">
                {product.price.toLocaleString("sr-RS")} RSD
              </span>
            </div>
          </div>

          <Button
            className="w-full mt-3 bg-emerald-400 hover:bg-emerald-500"
            disabled={!product.inStock}
          >
            {product.inStock ? "Pogledaj detalje" : "Nema na stanju"}
          </Button>
        </CardContent>
      </Link>
    </Card>
  );
}

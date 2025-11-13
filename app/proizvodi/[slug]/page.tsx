import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug } from "@/lib/sanity.queries";
import { urlFor } from "@/sanity/image";
import { PortableText } from "@portabletext/react";
import { Check, X, Package, Mail, MessageCircle } from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Dynamic rendering
export const dynamic = "force-dynamic";

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const mainImageUrl = product.images[0]
    ? urlFor(product.images[0]).width(800).height(800).url()
    : "/placeholder-product.jpg";

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-emerald-400">
            Početna
          </Link>
          <span className="mx-2">/</span>
          <Link href="/proizvodi" className="hover:text-emerald-400">
            Proizvodi
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/proizvodi?kategorija=${product.category.slug.current}`}
            className="hover:text-emerald-400"
          >
            {product.category.name}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4">
              <Image
                src={mainImageUrl}
                alt={product.images[0]?.alt || product.name}
                fill
                className="object-cover"
                priority
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.new && (
                  <span className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold rounded-full">
                    NOVO
                  </span>
                )}
                {discount > 0 && (
                  <span className="bg-red-600 text-white px-4 py-2 text-sm font-semibold rounded-full">
                    -{discount}%
                  </span>
                )}
                {product.bestseller && (
                  <span className="bg-emerald-600 text-white px-4 py-2 text-sm font-semibold rounded-full">
                    BESTSELLER
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.slice(0, 4).map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 border-2 border-transparent hover:border-emerald-600 transition-colors cursor-pointer"
                  >
                    <Image
                      src={urlFor(image).width(200).height(200).url()}
                      alt={image.alt || `${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <Link
                href={`/proizvodi?kategorija=${product.category.slug.current}`}
                className="text-emerald-400 hover:text-emerald-500 font-medium text-sm"
              >
                {product.category.name}
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {product.name}
            </h1>

            {product.volume && (
              <p className="text-gray-600 mb-4 flex items-center gap-2">
                <Package className="w-5 h-5" />
                {product.volume}
              </p>
            )}

            {product.shortDescription && (
              <p className="text-lg text-gray-700 mb-6">
                {product.shortDescription}
              </p>
            )}

            {/* Price */}
            <div className="mb-6 pb-6 border-b">
              {product.oldPrice && (
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl text-gray-400 line-through">
                    {product.oldPrice.toLocaleString("sr-RS")} RSD
                  </span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Ušteda{" "}
                    {(product.oldPrice - product.price).toLocaleString("sr-RS")}{" "}
                    RSD
                  </span>
                </div>
              )}
              <div className="text-4xl font-bold text-emerald-400">
                {product.price.toLocaleString("sr-RS")} RSD
              </div>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center gap-2 text-emerald-400">
                  <Check className="w-5 h-5" />
                  <span className="font-semibold">Dostupno na stanju</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600">
                  <X className="w-5 h-5" />
                  <span className="font-semibold">Trenutno nedostupno</span>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  Naručite ovaj proizvod:
                </h3>

                {/* Email Button */}
                <a
                  href="mailto:sijaj.sa.tijanam@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border-2 border-emerald-200 hover:border-emerald-600 hover:bg-emerald-50 transition-all mb-3"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-grow text-left">
                    <div className="font-semibold text-gray-900">
                      Pošaljite Email
                    </div>
                    <div className="text-sm text-gray-600">
                      sijaj.sa.tijanam@gmail.com
                    </div>
                  </div>
                </a>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/381645215667"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border-2 border-green-200 hover:border-green-600 hover:bg-green-50 transition-all mb-3"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-grow text-left">
                    <div className="font-semibold text-gray-900">
                      WhatsApp (Srbija)
                    </div>
                    <div className="text-sm text-gray-600">064/52-15-667</div>
                  </div>
                </a>

                {/* Viber Button */}
                <a
                  href="viber://chat?number=38765311833"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border-2 border-purple-200 hover:border-purple-600 hover:bg-purple-50 transition-all"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-grow text-left">
                    <div className="font-semibold text-gray-900">
                      Viber (BiH)
                    </div>
                    <div className="text-sm text-gray-600">065/311-833</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Description */}
          {product.description && (
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none text-gray-700">
                <PortableText value={product.description} />
              </div>
            </div>
          )}

          {/* Sidebar Info */}
          <div className="space-y-6">
            {product.ingredients && (
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Sastojci
                </h3>
                <p className="text-gray-700 whitespace-pre-line">
                  {product.ingredients}
                </p>
              </div>
            )}

            {product.usage && (
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Način upotrebe
                </h3>
                <p className="text-gray-700 whitespace-pre-line">
                  {product.usage}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

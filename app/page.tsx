import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import {
  getAllCategories,
  getFeaturedProducts,
  getBestsellerProducts,
} from "@/lib/sanity.queries";
import { Leaf, Heart, Shield, Sparkles } from "lucide-react";

// Dynamic rendering
export const dynamic = "force-dynamic";

export default async function Home() {
  const categories = await getAllCategories();
  const featuredProducts = await getFeaturedProducts();
  const bestsellerProducts = await getBestsellerProducts();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        <div className="absolute inset-0 bg-[url('/aloe-pattern.svg')] opacity-5" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Leaf className="w-4 h-4" />
              100% Prirodni proizvodi
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Vaš Partner za
              <span className="text-emerald-600 block mt-2">
                Zdravlje i Lepotu
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Otkrijte snagu prirode sa našom premium kolekcijom Aloe Vera
              proizvoda. Prirodna nega za vaše telo i dušu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6"
              >
                <Link href="/proizvodi">Pogledaj proizvode</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-6"
              >
                <Link href="/o-nama">Saznaj više</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200 rounded-full blur-3xl opacity-30 animate-pulse delay-700" />
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "100% Prirodno",
                description:
                  "Svi proizvodi su napravljeni od prirodnih sastojaka",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Zdravlje",
                description: "Poboljšajte svoje zdravlje prirodnim putem",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Kvalitet",
                description: "Garantovani proizvodi najvišeg kvaliteta",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Lepota",
                description: "Prirodna nega za vašu kožu i telo",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-emerald-50 transition-colors"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      {categories.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kategorije proizvoda
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Istražite našu široku paletu prirodnih proizvoda za zdravlje,
                lepotu i dobrobit
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <CategoryCard key={category._id} category={category} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Products Section */}
      {featuredProducts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Izdvojeni proizvodi
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Naši najpopularniji proizvodi koji su osvojili srca kupaca
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                <Link href="/proizvodi">Pogledaj sve proizvode</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Bestsellers Section */}
      {bestsellerProducts.length > 0 && (
        <section className="py-20 bg-emerald-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Najprodavaniji proizvodi
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Proizvodi koje naši kupci obožavaju i stalno naručuju
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bestsellerProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Zaradite sa nama!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Postanite naš poslovni partner i otkrijte mogućnosti za zaradu od
            kuće. Pridružite se našem timu i započnite svoju poslovnu priču
            danas!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-6"
          >
            <Link href="/poslovna-saradnja">Saznaj više o saradnji</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

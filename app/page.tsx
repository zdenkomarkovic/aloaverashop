import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import AloeVeraInfo from "@/components/AloeVeraInfo";
import {
  getAllCategories,
  getFeaturedProducts,
  getBestsellerProducts,
  getFeaturedBlogPosts,
} from "@/lib/sanity.queries";
import { urlFor } from "@/sanity/image";
import {
  Leaf,
  Heart,
  Shield,
  Sparkles,
  Calendar,
  User,
  ArrowRight,
} from "lucide-react";

// Dynamic rendering
export const dynamic = "force-dynamic";

export default async function Home() {
  const categories = await getAllCategories();
  const featuredProducts = await getFeaturedProducts();
  const bestsellerProducts = await getBestsellerProducts();
  const featuredBlogPosts = await getFeaturedBlogPosts();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden ">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10 "></div>{" "}
        <Image src={"/hero.jpg"} fill alt="" className="object-cover" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 border-2 border-white text-white px-4 py-2 rounded-full mb-6 md:text-2xl font-semibold">
              <Leaf className="w-8 h-8" />
              100% Prirodni proizvodi
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Vaš Partner za Zdravlje i Lepotu
              <span className="text-emerald-400 block mt-2">Aloe Vera</span>
            </h1>

            <p className="text-lg md:text-2xl font-bold text-gray-100 mb-8 max-w-2xl mx-auto">
              Otkrijte snagu prirode sa našom premium kolekcijom Aloe Vera
              proizvoda. Prirodna nega za vaše telo i dušu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-emerald-400 hover:bg-emerald-500 text-lg px-8 py-6"
              >
                <Link href="/proizvodi ">Pogledaj proizvode</Link>
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
                <div className="w-16 h-16 border-2 border-emerald-400 rounded-full flex items-center justify-center text-emerald-400 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="md:text-2xl font-bold text-gray-900 mb-2">
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
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-4">
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
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-4">
                Naši najpopularniji proizvodi koji su osvojili srca kupaca
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-50"
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
          <h2 className="text-3xl md:text-5xl text-white font-bold mb-6">
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
      {/* Aloe Vera Info Section */}
      <AloeVeraInfo />

      {/* Featured Blog Posts Section */}
      {featuredBlogPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold  mb-4">
                Izdvojeni članci
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Saznajte više o Aloe Veri, njenim dobrobiti i kako da je
                koristite
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBlogPosts.map((post) => {
                const imageUrl = post.mainImage?.asset?._ref
                  ? urlFor(post.mainImage).width(600).height(400).url()
                  : "/placeholder-blog.jpg";

                const publishedDate = new Date(
                  post.publishedAt
                ).toLocaleDateString("sr-RS", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });

                return (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug.current}`}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt={post.mainImage?.alt || post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <span className="bg-emerald-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
                            ISTAKNUTO
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {publishedDate}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center text-emerald-400 font-semibold group-hover:gap-2 gap-1 transition-all">
                          Pročitaj više
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-50"
              >
                <Link href="/blog">Pogledaj sve članke</Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

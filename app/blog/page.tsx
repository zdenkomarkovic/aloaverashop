import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/lib/sanity.queries';
import { urlFor } from '@/sanity/image';
import { Calendar, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Dynamic rendering
export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Aloe Vera Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Saznajte više o Aloe Veri, njenim dobrobiti i kako da je koristite
            za bolji život i zdravlje
          </p>
        </div>

        {/* Blog Posts */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const imageUrl = post.mainImage
                ? urlFor(post.mainImage).width(600).height(400).url()
                : '/placeholder-blog.jpg';

              const publishedDate = new Date(post.publishedAt).toLocaleDateString(
                'sr-RS',
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }
              );

              return (
                <Link key={post._id} href={`/blog/${post.slug.current}`}>
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={post.mainImage?.alt || post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {post.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-emerald-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
                            ISTAKNUTO
                          </span>
                        </div>
                      )}
                    </div>

                    <CardContent className="p-6">
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

                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>

                      <div className="mt-4 inline-flex items-center text-emerald-600 font-semibold group-hover:gap-2 gap-1 transition-all">
                        Pročitaj više
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 mb-6">
              Trenutno nema objavljenih blog postova.
            </p>
            <Link
              href="/"
              className="text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              Vrati se na početnu
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogPostBySlug } from "@/lib/sanity.queries";
import { urlFor } from "@/sanity/image";
import { PortableText } from "@portabletext/react";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portableTextComponents } from "@/components/PortableTextComponents";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Dynamic rendering
export const dynamic = "force-dynamic";

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.mainImage?.asset?._ref
    ? urlFor(post.mainImage).width(1200).height(600).url()
    : "/placeholder-blog.jpg";

  const publishedDate = new Date(post.publishedAt).toLocaleDateString("sr-RS", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen pt-32 pb-20">
      <article className="container mx-auto px-4 md:px-8 max-w-4xl">
        {/* Back Button */}
        <Button
          asChild
          variant="ghost"
          className="mb-8 hover:bg-emerald-50 text-emerald-400"
        >
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Nazad na blog
          </Link>
        </Button>

        {/* Featured Image */}
        <div className="relative aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden mb-8">
          <Image
            src={imageUrl}
            alt={post.mainImage?.alt || post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{publishedDate}</span>
            </div>
          </div>

          {post.excerpt && (
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-emerald-600 hover:prose-a:text-emerald-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t">
          <div className="bg-gray-200 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Zainteresovani ste za naše proizvode?
            </h3>
            <p className="text-gray-600 mb-6">
              Kontaktirajte nas i saznajte više o našoj ponudi Aloe Vera
              proizvoda
            </p>
            <Button
              asChild
              size="lg"
              className="bg-emerald-400 hover:bg-emerald-500"
            >
              <Link href="/kontakt">Kontaktirajte nas</Link>
            </Button>
          </div>
        </footer>
      </article>
    </main>
  );
}

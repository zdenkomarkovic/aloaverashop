'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import ProductCard from '@/components/ProductCard';
import { Product, Category } from '@/types/sanity';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

function ProizvodiContent() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('kategorija');

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categorySlug
  );

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        // Fetch categories
        const categoriesRes = await fetch('/api/categories');
        const categoriesData = await categoriesRes.json();
        setCategories(categoriesData);

        // Fetch products
        const productsUrl = selectedCategory
          ? `/api/products?category=${selectedCategory}`
          : '/api/products';
        const productsRes = await fetch(productsUrl);
        const productsData = await productsRes.json();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [selectedCategory]);

  const filteredProducts = products;

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Naši Proizvodi
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Istražite našu kolekciju prirodnih Aloe Vera proizvoda za zdravlje i lepotu
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(null)}
              className={
                selectedCategory === null
                  ? 'bg-emerald-600 hover:bg-emerald-700'
                  : 'border-emerald-600 text-emerald-600 hover:bg-emerald-50'
              }
            >
              Sve kategorije
            </Button>
            {categories.map((category) => (
              <Button
                key={category._id}
                variant={
                  selectedCategory === category.slug.current
                    ? 'default'
                    : 'outline'
                }
                onClick={() => setSelectedCategory(category.slug.current)}
                className={
                  selectedCategory === category.slug.current
                    ? 'bg-emerald-600 hover:bg-emerald-700'
                    : 'border-emerald-600 text-emerald-600 hover:bg-emerald-50'
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-emerald-600" />
          </div>
        ) : filteredProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            <div className="mt-12 text-center text-gray-600">
              Prikazano {filteredProducts.length}{' '}
              {filteredProducts.length === 1 ? 'proizvod' : 'proizvoda'}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 mb-6">
              Nema proizvoda u ovoj kategoriji.
            </p>
            <Button
              onClick={() => setSelectedCategory(null)}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Pogledaj sve proizvode
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}

export default function ProizvodiPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8 flex justify-center items-center py-20">
          <Loader2 className="w-12 h-12 animate-spin text-emerald-600" />
        </div>
      </main>
    }>
      <ProizvodiContent />
    </Suspense>
  );
}

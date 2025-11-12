import { NextRequest, NextResponse } from 'next/server';
import {
  getAllProducts,
  getProductsByCategory,
} from '@/lib/sanity.queries';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');

    let products;
    if (category) {
      products = await getProductsByCategory(category);
    } else {
      products = await getAllProducts();
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

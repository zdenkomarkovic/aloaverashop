"use client";

import { useState } from "react";
import { Product } from "@/types/sanity";
import QuantitySelector from "@/components/QuantitySelector";
import AddToCartButton from "@/components/AddToCartButton";

interface ProductActionsProps {
  product: Product;
}

export default function ProductActions({ product }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="space-y-4">
      <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
      <AddToCartButton product={product} quantity={quantity} />
    </div>
  );
}

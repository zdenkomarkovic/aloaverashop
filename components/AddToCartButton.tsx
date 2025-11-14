"use client";

import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types/sanity";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const { toast } = useToast();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);

    toast({
      title: "Dodato u korpu!",
      description: `${product.name} je uspešno dodat u korpu.`,
    });

    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <Button
      onClick={handleAddToCart}
      size="lg"
      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-lg py-6"
    >
      {isAdded ? (
        <>
          <Check className="w-5 h-5 mr-2" />
          Dodato u korpu
        </>
      ) : (
        <>
          <ShoppingCart className="w-5 h-5 mr-2" />
          Dodaj u korpu
        </>
      )}
    </Button>
  );
}

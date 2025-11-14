"use client";

import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types/sanity";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
}

export default function AddToCartButton({ product, quantity = 1 }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const { toast } = useToast();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setIsAdded(true);

    toast({
      title: "Dodato u korpu!",
      description: `${quantity}x ${product.name} je uspešno dodato u korpu.`,
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

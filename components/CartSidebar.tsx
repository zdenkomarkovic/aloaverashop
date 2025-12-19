"use client";

import { useCart } from "@/contexts/CartContext";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/image";
import { Button } from "@/components/ui/button";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-emerald-600" />
              <h2 className="text-xl font-bold text-gray-900">
                Korpa ({totalItems})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                <p className="text-gray-600 mb-2">Vaša korpa je prazna</p>
                <p className="text-sm text-gray-500">
                  Dodajte proizvode da biste nastavili
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => {
                  const imageUrl = item.images[0]?.asset?._ref
                    ? urlFor(item.images[0]).width(200).height(200).url()
                    : "/placeholder-product.jpg";

                  return (
                    <div
                      key={item._id}
                      className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      {/* Image */}
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={imageUrl}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate">
                          {item.name}
                        </h3>
                        {item.volume && (
                          <p className="text-sm text-gray-600">{item.volume}</p>
                        )}
                        <p className="text-emerald-600 font-bold mt-1">
                          {item.price.toLocaleString("sr-RS")} RSD
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item._id, item.quantity - 1)
                            }
                            className="p-1 hover:bg-gray-200 rounded transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item._id, item.quantity + 1)
                            }
                            className="p-1 hover:bg-gray-200 rounded transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeItem(item._id)}
                            className="ml-auto p-1 hover:bg-red-50 text-red-600 rounded transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              {/* Total */}
              <div className="flex items-center justify-between text-lg">
                <span className="font-semibold text-gray-900">Ukupno:</span>
                <span className="font-bold text-emerald-600 text-xl">
                  {totalPrice.toLocaleString("sr-RS")} RSD
                </span>
              </div>

              {/* Checkout Button */}
              <Button
                asChild
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                size="lg"
              >
                <Link href="/checkout" onClick={onClose}>
                  Nastavi na plaćanje
                </Link>
              </Button>

              {/* Continue Shopping */}
              <button
                onClick={onClose}
                className="w-full text-center text-gray-600 hover:text-gray-900 py-2 transition-colors"
              >
                Nastavi kupovinu
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

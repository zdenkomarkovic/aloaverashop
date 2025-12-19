"use client";

import { useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ShoppingBag, Loader2, Mail, Phone, User, MapPin } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          items,
          totalPrice,
        }),
      });

      if (!response.ok) {
        throw new Error("Greška pri slanju porudžbine");
      }

      toast({
        title: "Porudžbina poslata!",
        description:
          "Vaša porudžbina je uspešno poslata. Kontaktiraćemo vas uskoro.",
      });

      clearCart();
      router.push("/");
    } catch (error) {
      console.error("Error submitting order:", error);
      toast({
        title: "Greška",
        description: "Došlo je do greške pri slanju porudžbine. Pokušajte ponovo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Vaša korpa je prazna
            </h1>
            <p className="text-gray-600 mb-8">
              Dodajte proizvode u korpu da biste nastavili sa naručivanjem.
            </p>
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/proizvodi">Pregledajte proizvode</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Završite porudžbinu
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informacije za dostavu
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4" />
                    Ime i prezime *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Petar Petrović"
                    className="text-lg"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                      <Mail className="w-4 h-4" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="petar@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4" />
                      Telefon *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="064/123-4567"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <Label htmlFor="address" className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4" />
                    Adresa *
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Ulica i broj"
                  />
                </div>

                {/* City and Postal Code */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city" className="mb-2 block">
                      Grad *
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Beograd"
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode" className="mb-2 block">
                      Poštanski broj *
                    </Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      placeholder="11000"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <Label htmlFor="notes" className="mb-2 block">
                    Napomena (opciono)
                  </Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Dodatne napomene za dostavu..."
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-lg py-6"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Slanje porudžbine...
                    </>
                  ) : (
                    "Pošalji porudžbinu"
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-sm sticky top-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Pregled porudžbine
              </h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => {
                  const imageUrl = item.images[0]?.asset?._ref
                    ? urlFor(item.images[0]).width(100).height(100).url()
                    : "/placeholder-product.jpg";

                  return (
                    <div key={item._id} className="flex gap-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={imageUrl}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm truncate">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Količina: {item.quantity}
                        </p>
                        <p className="text-emerald-600 font-semibold text-sm">
                          {(item.price * item.quantity).toLocaleString("sr-RS")} RSD
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Ukupno proizvoda:</span>
                  <span>{totalPrice.toLocaleString("sr-RS")} RSD</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Dostava:</span>
                  <span className="text-emerald-600 font-semibold">
                    Besplatna
                  </span>
                </div>
                <div className="border-t pt-2 flex justify-between text-xl font-bold text-gray-900">
                  <span>Ukupno:</span>
                  <span className="text-emerald-600">
                    {totalPrice.toLocaleString("sr-RS")} RSD
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                <p className="text-sm text-emerald-800">
                  ✓ Besplatna dostava za sve porudžbine
                </p>
                <p className="text-sm text-emerald-800 mt-1">
                  ✓ Plaćanje pouzećem pri preuzimanju
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

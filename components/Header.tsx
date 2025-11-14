"use client";

import Image from "next/image";
import Logo from "../public/favicon-32x32.png";
import Link from "next/link";
import { MenuIcon, ShoppingCart } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navList } from "@/constants/index";
import { useCart } from "@/contexts/CartContext";
import CartSidebar from "@/components/CartSidebar";

const mobTitleStyles = "text-lg py-2";

const MobileMenu = () => (
  <Sheet>
    <SheetTrigger className="lg:hidden">
      <MenuIcon className="text-primary cursor-pointer" />
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <SheetContent>
          <ul>
            {navList.map((item, index) => (
              <Link key={index} href={item.link}>
                <motion.li
                  whileHover={{ color: "hsl(var(--primary))" }}
                  className={mobTitleStyles}
                >
                  <SheetTrigger>{item.title}</SheetTrigger>
                </motion.li>
              </Link>
            ))}
          </ul>
        </SheetContent>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

const DesktopNav = () => (
  <ul className="hidden gap-8 lg:flex  text-2xl">
    {navList.map((item, index) => (
      <Link key={index} href={item.link}>
        <motion.li
          className="transition-colors underline-animation"
          whileHover={{ color: "hsl(var(--primary))", scale: 1.1 }}
        >
          {item.title}
        </motion.li>
      </Link>
    ))}
  </ul>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };

    document.addEventListener("scroll", HandleScroll);

    return () => {
      document.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`flex justify-center ${
          scrolled
            ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-md"
            : "bg-transparent"
        }  fixed top-0 left-0 right-0 z-50 transition-colors`}
      >
        <nav className="flex items-center justify-between px-8 max-w-[80rem] w-full text-emerald-400 font-bold">
          <Link href="/" className=" flex gap-3 items-center">
            <Image
              src={Logo}
              alt="dm rustic 24"
              width={80}
              height={80}
              className={`rounded-full `}
            />{" "}
            <span className="text-2xl">Aloe Vera</span>
          </Link>
          <DesktopNav />

          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-emerald-50 rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-emerald-400" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <MobileMenu />
          </div>
        </nav>
      </header>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

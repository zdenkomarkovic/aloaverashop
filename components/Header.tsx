"use client";

import Image from "next/image";
import Logo from "../public/favicon-32x32.png";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

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
  <ul className="hidden gap-8 lg:flex  text-xl">
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
    <header
      className={`flex justify-center ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md"
          : "bg-transparent"
      }  fixed top-0 left-0 right-0 z-[10] transition-colors`}
    >
      <nav className="flex items-center justify-between px-8 max-w-[80rem] w-full text-primary font-bold">
        <Link href="/" className="">
          <Image
            src={Logo}
            alt="dm rustic 24"
            width={100}
            height={80}
            className={`rounded-full `}
          />
        </Link>
        <DesktopNav />

        <MobileMenu />
      </nav>
    </header>
  );
}

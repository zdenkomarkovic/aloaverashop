"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../public/android-chrome-192x192.png";
import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and About */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src={Logo}
                alt="Aloe Vera Shop"
                width={120}
                height={120}
                className="rounded-2xl"
              />
            </Link>
            <h3 className="text-xl font-bold mb-4">Aloe Vera Shop</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Vaš partner za zdravlje i lepotu. 100% prirodni Aloe Vera
              proizvodi za vašu dobrobit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-emerald-400">
              Brzi linkovi
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Početna
                </Link>
              </li>
              <li>
                <Link
                  href="/proizvodi"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Proizvodi
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/poslovna-saradnja"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Poslovna saradnja
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-emerald-400">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-xs mb-1">Email</p>
                  <a
                    href="mailto:sijaj.sa.tijanam@gmail.com"
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    sijaj.sa.tijanam@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-xs mb-1">
                    WhatsApp (Srbija)
                  </p>
                  <a
                    href="https://wa.me/381645215667"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    064/52-15-667
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-xs mb-1">Viber (BiH)</p>
                  <a
                    href="viber://chat?number=38765311833"
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    065/311-833
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <div className="mt-6 p-4 bg-emerald-600/20 border border-emerald-600/30 rounded-lg">
              <p className="text-emerald-400 font-semibold text-sm mb-1">
                Besplatna dostava!
              </p>
              <p className="text-gray-300 text-xs">
                Za porudžbine preko 5000 RSD
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Aloe Vera Shop. Sva prava
              zadržana.
            </p>
            <a
              href="https://www.manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              Izrada sajta:{" "}
              <span className="font-bold text-emerald-400">
                ManikamWebSolutions
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

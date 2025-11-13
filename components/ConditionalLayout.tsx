'use client';

import { usePathname } from 'next/navigation';
import ButtonToTop from '@/components/ButtonToTop';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Toaster } from '@/components/ui/sonner';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/studio');

  if (isStudio) {
    // Samo prikazi children bez Header/Footer za Sanity Studio
    return <>{children}</>;
  }

  // Normalan layout sa Header i Footer za sve ostale stranice
  return (
    <>
      <Header />
      {children}
      <ButtonToTop />
      <Footer />
      <Toaster />
    </>
  );
}

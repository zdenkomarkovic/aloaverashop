import '@/app/globals.css';

export const metadata = {
  title: 'Sanity Studio',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body className="antialiased">{children}</body>
    </html>
  );
}

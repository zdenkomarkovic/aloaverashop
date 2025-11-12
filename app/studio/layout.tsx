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
      <body>{children}</body>
    </html>
  );
}

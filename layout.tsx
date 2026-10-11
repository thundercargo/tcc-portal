import './globals.css';

export const metadata = {
  title: 'Thunder Cargo Corridor (TCC)',
  description: 'South India B2B Last-Mile Logistics Command Center',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#030712] text-slate-100 antialiased">{children}</body>
    </html>
  );
}

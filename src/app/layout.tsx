import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0C0605',
};

export const metadata: Metadata = {
  title: 'Backline Sites — Websites for Musicians',
  description:
    'Professional websites for bands and solo artists. Built by a gigging musician who knows what actually gets you booked.',
  openGraph: {
    title: 'Backline Sites — Websites for Musicians',
    description:
      'Professional websites for bands and solo artists. Built by a gigging musician who knows what actually gets you booked.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

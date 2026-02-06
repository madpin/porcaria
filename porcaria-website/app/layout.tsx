import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteContent } from '@/data/content';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${siteContent.siteName} - ${siteContent.tagline}`,
    template: `%s | ${siteContent.siteName}`,
  },
  description: 'Carnes e bacon artesanais com tradição italiana no Cambuci, São Paulo. Produtos curados de forma tradicional por José, seguindo receitas italianas ancestrais, sem conservantes artificiais.',
  keywords: ['bacon artesanal', 'carnes curadas', 'charcutaria italiana', 'bacon italiano', 'carnes artesanais', 'tradição italiana', 'cambuci', 'são paulo', 'sp'],
  authors: [{ name: 'Porca-Ria' }],
  openGraph: {
    title: `${siteContent.siteName} - ${siteContent.tagline}`,
    description: 'Carnes e bacon artesanais com tradição italiana',
    type: 'website',
    locale: 'pt_BR',
    siteName: siteContent.siteName,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingHelp from '@/components/FloatingHelp';
import IntroOverlay from '@/components/IntroOverlay';
import BackToTopButton from '@/components/BackToTopButton';
import GoogleTranslateLoader from '@/components/GoogleTranslateLoader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HTF - How To France',
  description: 'Your guide to living and studying in France.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className + ' bg-background text-foreground'}>
        <IntroOverlay />
        <Navbar />
        <main className="container mx-auto px-4 py-10">{children}</main>
        <Footer />
        <FloatingHelp />
        <BackToTopButton />
        <GoogleTranslateLoader />
      </body>
    </html>
  );
}

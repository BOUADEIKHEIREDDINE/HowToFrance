import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatbotWidget from '@/components/ChatbotWidget';
import IntroOverlay from '@/components/IntroOverlay';

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
    <html lang="en">
      <body className={inter.className + ' bg-background text-gray-900'}>
        <IntroOverlay />
        <Navbar />
        <main className="container mx-auto px-4 py-10">{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}

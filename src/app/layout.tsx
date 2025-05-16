import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/FloatingNavbar';
import Footer from '@/components/layout/Footer';
import { Merriweather, Open_Sans } from 'next/font/google';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NewsWeb - Your Daily News Source',
  description: 'Stay updated with the latest news from around the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${merriweather.variable} ${openSans.variable} bg-white`}
      >
        <Navbar />
        <main className='pt-13 md:pt-0'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

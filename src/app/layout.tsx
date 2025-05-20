import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Merriweather, Open_Sans } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
// import FloatingNavbar from '@/components/layout/FloatingNavbar';

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
        className={`${merriweather.variable} ${openSans.variable} bg-[#F5F5F5]`}
      >
        {/* <Navbar /> */}
        {/* <FloatingNavbar /> */}
        <Navbar />
        <main className=' pt-14 md:pt-15'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

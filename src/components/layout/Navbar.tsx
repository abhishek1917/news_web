'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // setIsScrolled(currentScrollY > 10);

      // Reverse scroll behavior (hide on scroll up)
      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Top Bar - Mobile Only (Centered Logo) */}
      <AnimatePresence>
        {showNavbar && (
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
            className='md:hidden fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800'
          >
            <div className='flex items-center justify-center h-14'>
              <Link href='/'>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className='text-xl font-bold text-black dark:text-white'
                >
                  NewsPortal
                </motion.span>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Desktop Navbar */}
      <AnimatePresence>
        {showNavbar && (
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
            className='hidden md:block fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800'
          >
            <div className='max-w-7xl mx-auto px-6 py-3'>
              <div className='flex items-center justify-between'>
                <Link href='/'>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className='text-2xl font-bold text-black dark:text-white'
                  >
                    NewsPortal
                  </motion.span>
                </Link>

                <div className='flex items-center space-x-1'>
                  <NavItem href='/' label='Home' />
                  <NavItem href='/world' label='World' />
                  <NavItem href='/business' label='Business' />
                  <NavItem href='/technology' label='Tech' />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='ml-4 px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium shadow-sm hover:shadow-md transition-all'
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className='fixed inset-x-0 bottom-0 z-50 bg-white dark:bg-gray-900 rounded-t-2xl shadow-xl border-t border-gray-200 dark:border-gray-800 md:hidden'
          >
            <div className='p-4'>
              <div className='flex justify-center mb-2'>
                <div className='w-10 h-1 bg-gray-300 dark:bg-gray-700 rounded-full'></div>
              </div>

              <div className='space-y-3'>
                <MobileNavItem
                  href='/'
                  label='Home'
                  onClick={() => setMobileMenuOpen(false)}
                />
                <MobileNavItem
                  href='/world'
                  label='World'
                  onClick={() => setMobileMenuOpen(false)}
                />
                <MobileNavItem
                  href='/business'
                  label='Business'
                  onClick={() => setMobileMenuOpen(false)}
                />
                <MobileNavItem
                  href='/technology'
                  label='Tech'
                  onClick={() => setMobileMenuOpen(false)}
                />

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className='w-full mt-4 px-4 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium shadow-sm'
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Trigger (Fixed at bottom) */}
      <div className='md:hidden fixed bottom-4 right-4 z-40'>
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='p-3 bg-black text-white dark:bg-white dark:text-black rounded-full shadow-lg'
        >
          {mobileMenuOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </motion.button>
      </div>
    </>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className='px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative group'
      >
        {label}
        <span className='absolute bottom-1 left-1/2 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]'></span>
      </Link>
    </motion.div>
  );
}

function MobileNavItem({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        onClick={onClick}
        className='block px-4 py-3 text-lg font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors'
      >
        {label}
      </Link>
    </motion.div>
  );
}

'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FiHome,
  FiTrendingUp,
  FiSearch,
  FiGlobe,
  FiMenu,
  FiX,
  FiHeart,
  FiFilm,
  FiBell,
  FiUser,
  FiLayers,
  FiBriefcase,
  FiDownload,
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';

export default function FloatingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPWAPrompt, setShowPWAPrompt] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to check if a link is active
  const isActive = (href: string) => {
    return pathname === href;
  };

  const handleInstallClick = () => {
    setShowPWAPrompt(true);
    setTimeout(() => setShowPWAPrompt(false), 3000);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className='hidden md:block fixed top-5 left-0 right-0 z-50 '>
        <div className='mx-auto max-w-7xl px-4'>
          <nav
            className={`rounded-full py-2.5 px-6 transition-all duration-300 ${
              isScrolled
                ? 'bg-white/95 shadow-lg border border-gray-100'
                : 'bg-black/20 backdrop-blur-md text-white shadow-lg'
            }`}
          >
            <div className='flex items-center justify-between'>
              {/* Logo */}
              <div
                className={`text-xl font-bold ${
                  isScrolled ? 'text-blue-600' : 'text-white'
                }`}
              >
                <Link href='/' className='flex items-center'>
                  <span className='bg-blue-600 text-white px-2 py-0.5 rounded-md mr-1'>
                    N
                  </span>
                  <span>NewsHub</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className='hidden md:flex space-x-8'>
                {[
                  { href: '/', label: 'Home' },
                  { href: '/trending', label: 'Trending' },
                  { href: '/world', label: 'World' },
                  { href: '/technology', label: 'Technology' },
                  { href: '/business', label: 'Business' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative inline-block ${
                      isScrolled ? 'text-gray-800' : 'text-white'
                    } font-medium hover:opacity-80 transition-opacity ${
                      isActive(link.href)
                        ? 'font-semibold after:w-full'
                        : 'after:w-0'
                    } after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Subscribe Button */}
              <div className='hidden md:flex items-center space-x-4'>
                <Button
                  variant={isScrolled ? 'default' : 'outline'}
                  className={`font-medium ${
                    isScrolled
                      ? 'bg-blue-600 hover:bg-blue-700 text-white border-none'
                      : 'bg-transparent text-white border-white hover:bg-white/20'
                  }`}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Top Navigation */}
      <div className='md:hidden fixed top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent py-4 px-4 flex justify-between items-center z-50'>
        <div className='text-lg font-bold text-white flex items-center'>
          <span className='bg-blue-600 text-white px-1.5 py-0.5 rounded-md mr-1 text-sm'>
            N
          </span>
          <Link href='/'>NewsHub</Link>
        </div>

        <div className='flex items-center space-x-5'>
          <button className='text-white hover:text-blue-300 transition-colors'>
            <FiBell className='h-5 w-5' />
          </button>
          <button
            onClick={handleInstallClick}
            className='text-white hover:text-blue-300 transition-colors'
            title='Install App'
          >
            <FiDownload className='h-5 w-5' />
          </button>
        </div>
      </div>

      {/* PWA Install Prompt */}
      <AnimatePresence>
        {showPWAPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className='fixed top-20 right-4 bg-white shadow-lg rounded-lg p-4 z-50 border border-blue-100'
          >
            <div className='flex items-center'>
              <FiDownload className='h-5 w-5 text-blue-500 mr-2' />
              <span className='text-sm font-medium'>
                Install NewsHub for offline reading
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation with glass morphism */}
      <div className='md:hidden fixed bottom-5 left-4 right-4 bg-white/80 backdrop-blur-lg py-3 px-2 flex justify-around items-center z-50 rounded-full shadow-lg border border-white/20'>
        {[
          { href: '/', icon: FiHome, label: 'Home' },
          { href: '/trending', icon: FiTrendingUp, label: 'Trending' },
          {
            href: '/search',
            icon: FiSearch,
            label: 'Search',
            onClick: () => setIsMenuOpen(true),
          },
          { href: '/world', icon: FiGlobe, label: 'World' },
          {
            href: '/more',
            icon: FiMenu,
            label: 'More',
            onClick: () => setIsMenuOpen(true),
          },
        ].map((item, index) => {
          const Component = item.onClick ? Button : Link;
          const active = isActive(item.href);
          return (
            <Component
              key={index}
              href={!item.onClick ? item.href : '#'}
              onClick={item.onClick}
              className={`flex flex-col items-center ${
                active ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {active ? (
                <div className='bg-blue-100 p-2 rounded-full mb-1'>
                  <item.icon className='h-5 w-5' />
                </div>
              ) : (
                <item.icon className='h-5 w-5 mb-1' />
              )}
              <span className='text-xs font-medium'>{item.label}</span>
            </Component>
          );
        })}
      </div>

      {/* Mobile Menu Bottom Sheet with Blur Effect */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Blurred Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40'
            />

            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              className='fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-xl z-50 max-h-[85vh] overflow-y-auto'
            >
              {/* Handle bar for better UX */}
              <div className='w-12 h-1.5 bg-gray-300 rounded-full mx-auto mt-3 mb-2'></div>

              <div className='p-5'>
                <div className='flex justify-between items-center mb-5'>
                  <h3 className='text-lg font-bold text-gray-800'>
                    NewsHub Menu
                  </h3>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className='bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full p-2 transition-colors'
                  >
                    <FiX className='h-5 w-5' />
                  </button>
                </div>

                {/* Search Bar */}
                <div className='relative mb-6'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <FiSearch className='h-5 w-5 text-gray-400' />
                  </div>
                  <input
                    type='text'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='block w-full pl-10 pr-3 py-3.5 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                    placeholder='Search news...'
                    autoFocus
                  />
                </div>

                {/* Menu Items Grid */}
                <div className='grid grid-cols-2 gap-3 mb-6'>
                  {[
                    {
                      href: '/technology',
                      icon: FiLayers,
                      label: 'Technology',
                    },
                    { href: '/business', icon: FiBriefcase, label: 'Business' },
                    { href: '/health', icon: FiHeart, label: 'Health' },
                    {
                      href: '/entertainment',
                      icon: FiFilm,
                      label: 'Entertainment',
                    },
                    {
                      href: '/notifications',
                      icon: FiBell,
                      label: 'Notifications',
                    },
                    { href: '/profile', icon: FiUser, label: 'Profile' },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center p-4 rounded-xl transition-all ${
                        isActive(item.href)
                          ? 'bg-blue-50 text-blue-600 border border-blue-100'
                          : 'hover:bg-gray-50 text-gray-800 border border-transparent'
                      }`}
                    >
                      <item.icon
                        className={`h-5 w-5 mr-3 ${
                          isActive(item.href)
                            ? 'text-blue-500'
                            : 'text-gray-500'
                        }`}
                      />
                      <span className='font-medium'>{item.label}</span>
                    </Link>
                  ))}
                </div>

                <button className='w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3.5 rounded-xl hover:from-blue-700 hover:to-blue-800 font-medium shadow-md'>
                  Subscribe for Premium
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

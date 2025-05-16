'use client';
import { useState } from 'react';
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

export default function FloatingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPWAPrompt, setShowPWAPrompt] = useState(false);
  const pathname = usePathname();

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
      {/* Desktop Floating Header */}
      <div className='hidden md:block fixed top-5 left-0 right-0 z-50'>
        <div className='mx-auto max-w-7xl px-4'>
          <nav className='bg-white rounded-lg shadow-lg py-3 px-6'>
            <div className='flex items-center justify-between'>
              {/* Logo */}
              <div className='text-xl font-bold text-blue-600'>
                <Link href='/'>NewsHub</Link>
              </div>

              {/* Desktop Navigation */}
              <div className='hidden md:flex space-x-8'>
                <Link
                  href='/'
                  className={`text-gray-800 hover:text-blue-600 font-medium ${
                    isActive('/') ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  Home
                </Link>
                <Link
                  href='/trending'
                  className={`text-gray-800 hover:text-blue-600 font-medium ${
                    isActive('/trending') ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  Trending
                </Link>
                <Link
                  href='/world'
                  className={`text-gray-800 hover:text-blue-600 font-medium ${
                    isActive('/world') ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  World
                </Link>
                <Link
                  href='/technology'
                  className={`text-gray-800 hover:text-blue-600 font-medium ${
                    isActive('/technology') ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  Technology
                </Link>
                <Link
                  href='/business'
                  className={`text-gray-800 hover:text-blue-600 font-medium ${
                    isActive('/business') ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  Business
                </Link>
              </div>

              {/* Search Button */}
              <div className='hidden md:flex items-center space-x-4'>
                <button className='text-gray-500 hover:text-blue-600'>
                  <FiSearch className='h-5 w-5' />
                </button>
                <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
                  Subscribe
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Top Navigation */}
      <div className='md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 py-3 px-4 flex justify-between items-center z-50'>
        <div className='text-lg font-bold text-blue-600'>
          <Link href='/'>NewsHub</Link>
        </div>

        <div className='flex items-center space-x-4'>
          <button className='text-gray-600 hover:text-blue-600'>
            <FiBell className='h-5 w-5' />
          </button>
          <button
            onClick={handleInstallClick}
            className='text-gray-600 hover:text-blue-600'
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
            className='fixed top-20 right-4 bg-white shadow-lg rounded-lg p-3 z-50 border border-gray-200'
          >
            <div className='flex items-center'>
              <FiDownload className='h-5 w-5 text-blue-500 mr-2' />
              <span className='text-sm font-medium'>
                Install NewsHub as PWA
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation */}
      <div className='md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 flex justify-around items-center z-50'>
        <Link
          href='/'
          className={`flex flex-col items-center text-xs ${
            isActive('/')
              ? 'text-blue-600'
              : 'text-gray-800 hover:text-blue-600'
          }`}
        >
          <FiHome className='h-5 w-5' />
          <span>Home</span>
        </Link>
        <Link
          href='/trending'
          className={`flex flex-col items-center text-xs ${
            isActive('/trending')
              ? 'text-blue-600'
              : 'text-gray-800 hover:text-blue-600'
          }`}
        >
          <FiTrendingUp className='h-5 w-5' />
          <span>Trending</span>
        </Link>
        <button
          onClick={() => setIsMenuOpen(true)}
          className={`flex flex-col items-center text-xs ${
            pathname.startsWith('/search')
              ? 'text-blue-600'
              : 'text-gray-800 hover:text-blue-600'
          }`}
        >
          <FiSearch className='h-5 w-5' />
          <span>Search</span>
        </button>
        <Link
          href='/world'
          className={`flex flex-col items-center text-xs ${
            isActive('/world')
              ? 'text-blue-600'
              : 'text-gray-800 hover:text-blue-600'
          }`}
        >
          <FiGlobe className='h-5 w-5' />
          <span>World</span>
        </Link>
        <button
          onClick={() => setIsMenuOpen(true)}
          className='flex flex-col items-center text-gray-800 hover:text-blue-600 text-xs'
        >
          <FiMenu className='h-5 w-5' />
          <span>More</span>
        </button>
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
              className='fixed inset-0 bg-black/30 backdrop-blur-sm z-40'
            />

            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              className='fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-xl z-50 max-h-[80vh] overflow-y-auto'
            >
              <div className='p-4'>
                <div className='flex justify-between items-center mb-4'>
                  <h3 className='text-lg font-bold'>Menu</h3>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className='text-gray-500 hover:text-gray-700'
                  >
                    <FiX className='h-6 w-6' />
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
                    className='block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    placeholder='Search news...'
                    autoFocus
                  />
                </div>

                {/* Menu Items Grid */}
                <div className='grid grid-cols-2 gap-3 mb-4'>
                  <Link
                    href='/technology'
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center p-3 rounded-lg ${
                      isActive('/technology')
                        ? 'bg-blue-50 text-blue-600'
                        : 'hover:bg-gray-50 text-gray-800'
                    }`}
                  >
                    <FiLayers className='h-5 w-5 mr-3' />
                    <span>Technology</span>
                  </Link>
                  <Link
                    href='/business'
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center p-3 rounded-lg ${
                      isActive('/business')
                        ? 'bg-blue-50 text-blue-600'
                        : 'hover:bg-gray-50 text-gray-800'
                    }`}
                  >
                    <FiBriefcase className='h-5 w-5 mr-3' />
                    <span>Business</span>
                  </Link>
                  <Link
                    href='/health'
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center p-3 rounded-lg ${
                      isActive('/health')
                        ? 'bg-blue-50 text-blue-600'
                        : 'hover:bg-gray-50 text-gray-800'
                    }`}
                  >
                    <FiHeart className='h-5 w-5 mr-3' />
                    <span>Health</span>
                  </Link>
                  <Link
                    href='/entertainment'
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center p-3 rounded-lg ${
                      isActive('/entertainment')
                        ? 'bg-blue-50 text-blue-600'
                        : 'hover:bg-gray-50 text-gray-800'
                    }`}
                  >
                    <FiFilm className='h-5 w-5 mr-3' />
                    <span>Entertainment</span>
                  </Link>
                  <Link
                    href='/notifications'
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center p-3 rounded-lg ${
                      isActive('/notifications')
                        ? 'bg-blue-50 text-blue-600'
                        : 'hover:bg-gray-50 text-gray-800'
                    }`}
                  >
                    <FiBell className='h-5 w-5 mr-3' />
                    <span>Notifications</span>
                  </Link>
                  <Link
                    href='/profile'
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center p-3 rounded-lg ${
                      isActive('/profile')
                        ? 'bg-blue-50 text-blue-600'
                        : 'hover:bg-gray-50 text-gray-800'
                    }`}
                  >
                    <FiUser className='h-5 w-5 mr-3' />
                    <span>Profile</span>
                  </Link>
                </div>

                <button className='w-full bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 font-medium'>
                  Subscribe
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

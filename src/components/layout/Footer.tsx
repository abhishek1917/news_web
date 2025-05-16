import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className='bg-gray-800 text-white py-16 '>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div>
              <h3 className='text-xl font-bold mb-4'>NewsHub</h3>
              <p className='text-gray-300'>
                Your trusted source for breaking news and in-depth stories from
                around the world.
              </p>
            </div>
            <div>
              <h4 className='font-bold mb-4'>Categories</h4>
              <ul className='space-y-2 text-gray-300'>
                <li>
                  <Link href='#'>World</Link>
                </li>
                <li>
                  <Link href='#'>Technology</Link>
                </li>
                <li>
                  <Link href='#'>Business</Link>
                </li>
                <li>
                  <Link href='#'>Health</Link>
                </li>
                <li>
                  <Link href='#'>Entertainment</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold mb-4'>Company</h4>
              <ul className='space-y-2 text-gray-300'>
                <li>
                  <Link href='#'>About Us</Link>
                </li>
                <li>
                  <Link href='#'>Contact</Link>
                </li>
                <li>
                  <Link href='#'>Careers</Link>
                </li>
                <li>
                  <Link href='#'>Advertise</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold mb-4'>Subscribe</h4>
              <p className='text-gray-300 mb-4'>
                Get the latest news delivered to your inbox
              </p>
              <div className='flex'>
                <input
                  type='email'
                  placeholder='Your email'
                  className='px-4 py-2 rounded-l text-gray-800 w-full'
                />
                <button className='bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className='border-t border-gray-700 mt-8 pt-8 text-center text-gray-300'>
            <p>
              &copy; {new Date().getFullYear()} NewsHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

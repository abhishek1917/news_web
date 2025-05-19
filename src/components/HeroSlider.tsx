// components/HeroSlider.tsx
'use client';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Slider = dynamic(() => import('react-slick'));

const heroSlides = [
  {
    title: 'Breaking News: Global Climate Summit',
    description:
      'World leaders gather to discuss urgent climate action and sustainable solutions.',
    imageUrl: '/news/image-1.jpg',
    category: 'World',
    link: '/news/image-1.jpg',
    showText: true,
  },
  {
    title: 'Breaking News: Market Crash',
    description: 'Markets experience turbulence amidst economic uncertainty.',
    imageUrl: '/news/image-1.jpg',
    category: 'StockMarket',
    link: '/news/image-1.jpg',
    showText: false,
  },
  {
    title: 'Tech Revolution: AI Transforms Industries',
    description:
      'Artificial Intelligence is reshaping business, healthcare, and everyday life.',
    imageUrl: '/news/image-2.jpg',
    category: 'Technology',
    link: '/news/image-2.jpg',
    showText: true,
  },
  {
    title: 'Economic Insights: Market Trends 2025',
    description:
      'Experts predict significant shifts in global economic landscapes.',
    imageUrl: '/news/image-3.jpg',
    category: 'Business',
    link: '/news/image-3.jpg',
    showText: true,
  },
];

export default function HeroSlider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    loop: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    appendDots: (dots: React.ReactNode) => (
      <div className='absolute bottom-6 left-0 right-0'>
        <ul className='flex justify-center space-x-2'>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className='w-3 h-3 rounded-full bg-white/30 hover:bg-white/80 transition-all duration-300'></div>
    ),
  };

  return (
    <div className='w-full overflow-hidden relative'>
      {isMounted && (
        <Slider {...sliderSettings}>
          {heroSlides.map((slide, index) => (
            <div key={index} className='relative w-full'>
              {/* Container with max-h-[700px] on desktop */}
              <div className='relative h-[50vh] sm:h-[60vh] md:h-[65vh] lg:max-h-[700px] w-full'>
                <Image
                  src={slide.imageUrl}
                  alt={slide.title}
                  fill
                  className='object-cover'
                  priority={index === 0}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
                />

                {slide.showText && (
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end pb-12 lg:items-center lg:justify-center lg:pb-0'>
                    <div className='container px-6 md:px-8 mx-auto text-center transform transition-transform duration-500 group-hover:scale-[1.02]'>
                      <span className='inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-100 uppercase bg-blue-900/50 rounded-full'>
                        {slide.category}
                      </span>
                      <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight'>
                        {slide.title}
                      </h2>
                      <p className='max-w-2xl mx-auto text-lg md:text-xl text-gray-100 mb-6'>
                        {slide.description}
                      </p>
                      <Link
                        href={slide.link}
                        className='inline-flex items-center px-6 py-3 text-sm font-medium tracking-wide text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg group'
                      >
                        Read More
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

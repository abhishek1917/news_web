import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

const heroSlides = [
  {
    title: 'Breaking News: Global Climate Summit',
    description:
      'World leaders gather to discuss urgent climate action and sustainable solutions.',
    imageUrl: '/news/image-1.jpg',
    category: 'World',
    link: '/news/image-1.jpg',
  },
  {
    title: 'Tech Revolution: AI Transforms Industries',
    description:
      'Artificial Intelligence is reshaping business, healthcare, and everyday life.',
    imageUrl: '/news/image-2.jpg',
    category: 'Technology',
    link: '/news/image-2.jpg',
  },
  {
    title: 'Economic Insights: Market Trends 2025',
    description:
      'Experts predict significant shifts in global economic landscapes.',
    imageUrl: '/news/image-3.jpg',
    category: 'Business',
    link: '/news/image-3.jpg',
  },
];

export default function HeroSlider() {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className='w-full'
    >
      <CarouselContent>
        {heroSlides.map((slide, index) => (
          <CarouselItem key={index} className='md:basis-full'>
            <div className='relative h-[250px] md:h-[600px] w-full overflow-hidden'>
              {/* Background Image */}
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                fill
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='absolute inset-0 object-cover brightness-50'
              />

              {/* Content Overlay */}
              <div className='relative z-10 container mx-auto px-4 h-full flex items-center'>
                <div className='max-w-2xl text-white space-y-4'>
                  <span className='bg-blue-600 px-3 py-1 rounded text-sm'>
                    {slide.category}
                  </span>
                  <h1 className='text-2xl md:text-4xl font-bold'>
                    {slide.title}
                  </h1>
                  <p className='text-base md:text-xl opacity-90 hidden md:block'>
                    {slide.description}
                  </p>
                  <Link href={slide.link}>
                    <Button
                      variant='secondary'
                      size='lg'
                      className='text-sm md:text-base'
                    >
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation and Dots */}
      {/* <div className='relative z-20 mt-4'>
        <div className='flex justify-center space-x-2'>
          {heroSlides.map((_, index) => (
            <div
              key={index}
              data-carousel-dot={index}
              className='w-2 h-2 rounded-full bg-black/50 hover:bg-black cursor-pointer transition-all'
            />
          ))}
        </div>
      </div> */}
    </Carousel>
  );
}

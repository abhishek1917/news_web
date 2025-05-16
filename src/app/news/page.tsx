'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const newsItems = [
  {
    id: 1,
    title: 'Global Tech Summit Announces Revolutionary AI Breakthroughs',
    excerpt:
      'Leading researchers unveil new AI models that could transform industries worldwide.',
    category: 'Technology',
    date: 'May 15, 2023',
    image: '/news/image-1.jpg',
  },
  {
    id: 2,
    title: 'Stock Markets Reach All-Time High Amid Economic Recovery',
    excerpt:
      'Major indices surge as inflation fears ease and consumer confidence grows.',
    category: 'Business',
    date: 'May 14, 2023',
    image: '/news/image-2.jpg',
  },
  {
    id: 3,
    title: 'New Study Reveals Benefits of Mediterranean Diet',
    excerpt:
      'Research confirms significant health improvements for participants following the diet.',
    category: 'Health',
    date: 'May 13, 2023',
    image: '/news/image-3.jpg',
  },
  {
    id: 4,
    title: 'Award-Winning Film Director Announces New Project',
    excerpt:
      'The acclaimed filmmaker returns with an ambitious international production.',
    category: 'Entertainment',
    date: 'May 12, 2023',
    image: '/news/image-1.jpg',
  },
  {
    id: 5,
    title: 'Climate Summit Reaches Historic Agreement',
    excerpt:
      'World leaders commit to unprecedented emissions reductions by 2030.',
    category: 'World',
    date: 'May 11, 2023',
    image: '/news/image-2.jpg',
  },
  {
    id: 6,
    title: 'Breakthrough in Quantum Computing Announced',
    excerpt:
      'Scientists achieve quantum supremacy with new 128-qubit processor.',
    category: 'Technology',
    date: 'May 10, 2023',
    image: '/news/image-2.jpg',
  },
];

export default function NewsList() {
  const pathname = usePathname();
  console.log('pathname', pathname);

  return (
    <div className='pt-16 pb-20 md:pt-28'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-8'>Latest News</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {newsItems.map((item) => (
            <Link
              href={`/news/${item.id}`}
              key={item.id}
              className='group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'
            >
              <div className='h-48 bg-gray-200 overflow-hidden'>
                <div className='w-full h-full bg-gray-300 flex items-center justify-center text-gray-500'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
              <div className='p-4'>
                <span className='inline-block px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-2'>
                  {item.category}
                </span>
                <h2 className='text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-2'>
                  {item.title}
                </h2>
                <p className='text-gray-600 mb-3'>{item.excerpt}</p>
                <p className='text-sm text-gray-500'>{item.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

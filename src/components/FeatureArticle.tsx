'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function FeatureArticle({
  title,
  image,
  category,
  timeToRead,
}: {
  title: string;
  image: string;
  category: string;
  timeToRead: string;
}) {
  return (
    <div className='rounded-lg overflow-hidden shadow-md bg-white group'>
      <Link href='/news/1'>
        <div className='overflow-hidden h-48 bg-gray-200'>
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className='w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105'
          />
        </div>
        <div className='p-5'>
          <div className='flex justify-between text-sm text-gray-500 mb-2'>
            <span className='font-medium text-blue-600'>{category}</span>
            <span>{timeToRead}</span>
          </div>
          <h3 className='text-lg font-bold text-gray-800 group-hover:text-blue-600 mb-2'>
            {title}
          </h3>
          {/* <p className='text-gray-600 text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
            risus ac quam vulputate congue vitae vel ante.
          </p> */}
        </div>
      </Link>
    </div>
  );
}

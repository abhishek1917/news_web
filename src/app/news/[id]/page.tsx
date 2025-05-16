import Image from 'next/image';

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

export default async function NewsDetail({ params }: { params: { id: string } }) {
  const { id } = await params;
  const newsItem = newsItems.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return (
      <div className='pt-16 pb-20 md:pt-28'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-8'>
            News Not Found
          </h1>
          <p>The requested news article could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className='pt-16 pb-20 md:pt-28'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:flex lg:gap-2'>
          <div className='lg:w-3/4'>
            <div className='max-w-3xl mx-auto'>
              <span className='inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4'>
                {newsItem.category}
              </span>
              <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                {newsItem.title}
              </h1>
              <p className='text-gray-500 mb-8'>{newsItem.date}</p>

              <div className='h-96 bg-gray-200 mb-8 rounded-lg overflow-hidden flex items-center justify-center text-gray-500'>
                <Image
                  src={newsItem.image}
                  alt={newsItem.title}
                  width={500}
                  height={500}
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='prose max-w-none'>
                <p className='text-lg text-gray-700 mb-6'>
                  {newsItem.excerpt} Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                  sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus
                  ut eleifend nibh porttitor.
                </p>

                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  In-Depth Analysis
                </h2>

                <p className='text-gray-700 mb-4'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>

                <p className='text-gray-700 mb-4'>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet.
                </p>

                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Future Implications
                </h2>

                <p className='text-gray-700'>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.
                </p>
              </div>
            </div>
          </div>
          <aside className='hidden lg:block lg:w-1/4'>
            <div className='sticky top-28 space-y-10'>
              {/* Trending Section */}
              <div>
                <h3 className='text-lg font-bold mb-4'>Releated News</h3>
                <div className='space-y-4'>
                  {newsItems.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className='flex items-start gap-4 hover:bg-gray-50 p-2 rounded-lg transition'
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={80}
                        height={60}
                        className='w-20 h-16 object-cover rounded'
                      />
                      <div>
                        <h4 className='text-sm font-semibold text-gray-800 leading-snug line-clamp-2'>
                          {item.title}
                        </h4>
                        <p className='text-xs text-gray-500 mt-1'>
                          {item.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div>
                <h3 className='text-lg font-bold mb-4'>Editor`s Picks</h3>
                <div className='space-y-4'>
                  {newsItems.slice(3, 6).map((item) => (
                    <div
                      key={item.id}
                      className='flex items-start gap-4 hover:bg-gray-50 p-2 rounded-lg transition'
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={80}
                        height={60}
                        className='w-20 h-16 object-cover rounded'
                      />
                      <div>
                        <h4 className='text-sm font-semibold text-gray-800 leading-snug line-clamp-2'>
                          {item.title}
                        </h4>
                        <p className='text-xs text-gray-500 mt-1'>
                          {item.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

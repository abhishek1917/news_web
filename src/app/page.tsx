import NewsSection from '../components/NewsSection';
import FeatureArticle from '../components/FeatureArticle';
import HeroSlider from '../components/HeroSlider';
import Link from 'next/link';

// import NewsApp from '@/components/NewsPapertext';

export default function Home() {
  return (
    <main className='min-h-screen'>
      {/* Hero section */}
      <HeroSlider />
      {/* <NewsApp/> */}

      {/* Content area with extra padding to account for navbar */}
      <div className='container mx-auto px-4 py-12'>
        {/* Featured articles */}
        <section className='mb-12'>
          <div className='flex justify-between items-center'>
            <h2 className='text-4xl font-bold mb-6 text-gray-800 text-center'>
              NewsPortal <span className='text-blue-600'>Original</span>
            </h2>
            <Link
              href='/news'
              className='text-blue-600 hover:text-blue-800 font-medium'
            >
              See More
            </Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <FeatureArticle
              title='Global Climate Summit Reaches Historic Agreement'
              image='/news/image-1.jpg'
              category='Environment'
              timeToRead='5 min read'
            />
            <FeatureArticle
              title='Tech Giants Unveil New AI Advances'
              image='/news/image-2.jpg'
              category='Technology'
              timeToRead='4 min read'
            />
            <FeatureArticle
              title='Global Markets Rally After Economic Data'
              image='/news/image-3.jpg'
              category='Finance'
              timeToRead='3 min read'
            />
          </div>
        </section>

        {/* News sections */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
          <NewsSection
            title='World'
            articles={[
              {
                title: 'Diplomacy Breakthrough in Middle East Talks',
                time: '2 hours ago',
              },
              {
                title: 'European Union Announces New Green Deal',
                time: '5 hours ago',
              },
              {
                title: 'Pacific Nations Form New Trade Coalition',
                time: '8 hours ago',
              },
            ]}
          />
          <NewsSection
            title='Technology'
            articles={[
              {
                title: 'Quantum Computing Reaches New Milestone',
                time: '1 hour ago',
              },
              {
                title: 'Social Media Platform Introduces New Privacy Features',
                time: '3 hours ago',
              },
              {
                title: 'Electric Vehicle Adoption Accelerates Globally',
                time: '6 hours ago',
              },
            ]}
          />
          <NewsSection
            title='Health'
            articles={[
              {
                title: 'Breakthrough in Cancer Research Announced',
                time: '4 hours ago',
              },
              {
                title: 'Study Shows Benefits of Mediterranean Diet',
                time: '7 hours ago',
              },
              {
                title: 'Mental Health Awareness Campaign Launches',
                time: '9 hours ago',
              },
            ]}
          />
        </div>
      </div>

      {/* Footer */}
    </main>
  );
}

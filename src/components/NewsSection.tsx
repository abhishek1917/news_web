'use client'
import Link from 'next/link';

export default function NewsSection({ title, articles }: { title: string; articles: { title: string; time: string }[] }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-2">{title}</h2>
      <div className="space-y-5">
        {articles.map((article, index) => (
          <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
            <Link href="#" className="block group">
              <h3 className="font-medium text-lg text-gray-800 group-hover:text-blue-600">{article.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{article.time}</p>
            </Link>
          </div>
        ))}
        <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-block">
          More {title} News →
        </Link>
      </div>
    </section>
  );
}
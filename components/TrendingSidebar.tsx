import Link from 'next/link';
import { Article } from '@/data/articles';

interface TrendingSidebarProps {
  articles: Article[];
}

export default function TrendingSidebar({ articles }: TrendingSidebarProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2">
        Trending Now
      </h2>
      <div className="space-y-6">
        {articles.map((article, index) => (
          <Link
            key={article.id}
            href={`/article/${article.slug}`}
            className="block group"
          >
            <div className="flex items-start space-x-4">
              <span className="text-3xl font-bold text-blue-600 flex-shrink-0">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-3 mb-1">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {new Date(article.publishedAt).toLocaleDateString('en-ZA', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

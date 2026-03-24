import ArticleCard from '@/components/ArticleCard';
import TrendingSidebar from '@/components/TrendingSidebar';
import { articles } from '@/data/articles';

export default function Home() {
  const featuredArticle = articles.find(a => a.featured) || articles[0];
  const trendingArticles = articles.filter(a => a.trending).slice(0, 5);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Featured Article */}
      <div className="mb-12">
        <ArticleCard article={featuredArticle} featured />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Articles Grid */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <TrendingSidebar articles={trendingArticles} />
        </div>
      </div>
    </div>
  );
}

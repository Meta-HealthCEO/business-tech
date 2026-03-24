import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles, categories } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import type { Metadata } from 'next';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find(
    (c) => c.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!category) {
    return {
      title: 'Category Not Found | Business Tech',
    };
  }

  return {
    title: `${category} Articles | Business Tech`,
    description: `Latest ${category.toLowerCase()} news, insights, and analysis for business leaders and technology professionals.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find(
    (c) => c.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!category) {
    notFound();
  }

  const categoryArticles = articles.filter((a) => a.category === category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          Home
        </Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-500">{category}</span>
      </nav>

      {/* Category Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {category}
        </h1>
        <p className="text-xl text-gray-600">
          Explore the latest {category.toLowerCase()} news, insights, and analysis for business leaders and technology professionals.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {categoryArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No articles found in this category yet.</p>
        </div>
      )}
    </div>
  );
}

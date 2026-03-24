import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import type { Metadata } from 'next';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found | Business Tech',
    };
  }

  return {
    title: `${article.title} | Business Tech`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      images: [{ url: article.imageUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.imageUrl],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          Home
        </Link>
        <span className="mx-2 text-gray-500">/</span>
        <Link
          href={`/category/${article.category.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-blue-600 hover:text-blue-800"
        >
          {article.category}
        </Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-500">{article.title}</span>
      </nav>

      {/* Category Badge */}
      <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4">
        {article.category}
      </span>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        {article.title}
      </h1>

      {/* Excerpt */}
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        {article.excerpt}
      </p>

      {/* Author & Date */}
      <div className="flex items-center mb-8 pb-8 border-b border-gray-200">
        <div>
          <p className="font-bold text-gray-900">{article.author.name}</p>
          <p className="text-sm text-gray-600">{article.author.title}</p>
          <p className="text-sm text-gray-500 mt-1">{formattedDate}</p>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative w-full h-[500px] mb-12 rounded-lg overflow-hidden">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none mb-12">
        {article.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-6 text-gray-800 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Author Bio */}
      <div className="bg-gray-100 rounded-lg p-6 mb-12">
        <h3 className="font-bold text-xl text-gray-900 mb-2">About the Author</h3>
        <p className="font-bold text-gray-900 mb-1">{article.author.name}</p>
        <p className="text-gray-700">{article.author.bio}</p>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-600 pb-2">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <ArticleCard key={relatedArticle.id} article={relatedArticle} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

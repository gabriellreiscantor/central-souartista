import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { SEOHead } from '@/components/SEOHead';
import { BlogCard } from '@/components/blog/BlogCard';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DownloadModal } from '@/components/DownloadModal';
import { getPostBySlug, getRelatedPosts, categoryColors } from '@/data/blogData';
import { Calendar, Clock, ArrowLeft, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = React.useState(false);
  
  const post = slug ? getPostBySlug(slug) : undefined;
  const relatedPosts = slug ? getRelatedPosts(slug, 3) : [];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Parse markdown-like content to HTML
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let listType: 'ul' | 'ol' | null = null;

    const flushList = () => {
      if (currentList.length > 0 && listType) {
        const ListTag = listType === 'ul' ? 'ul' : 'ol';
        elements.push(
          <ListTag key={elements.length} className="my-4 ml-6 space-y-2 list-disc text-muted-foreground">
            {currentList.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
            ))}
          </ListTag>
        );
        currentList = [];
        listType = null;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Headers
      if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-semibold text-foreground mt-8 mb-4">
            {trimmedLine.slice(4)}
          </h3>
        );
      } else if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-foreground mt-10 mb-4">
            {trimmedLine.slice(3)}
          </h2>
        );
      }
      // List items
      else if (trimmedLine.startsWith('- ')) {
        listType = 'ul';
        currentList.push(trimmedLine.slice(2));
      }
      // Empty lines
      else if (trimmedLine === '') {
        flushList();
      }
      // Regular paragraphs
      else {
        flushList();
        elements.push(
          <p 
            key={index} 
            className="text-muted-foreground leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ 
              __html: trimmedLine.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') 
            }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  const postUrl = `https://souartista.com/blog/${post.slug}`;
  const truncatedExcerpt = post.excerpt.length > 160 ? `${post.excerpt.slice(0, 157)}...` : post.excerpt;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { '@type': 'Organization', name: 'SouArtista', url: 'https://souartista.com' },
    publisher: {
      '@type': 'Organization',
      name: 'SouArtista',
      logo: { '@type': 'ImageObject', url: 'https://souartista.com/favicon.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
    articleSection: post.categoryLabel,
  };

  return (
    <Layout>
      <SEOHead
        title={`${post.title} | Blog SouArtista`.slice(0, 60)}
        description={truncatedExcerpt}
        canonical={postUrl}
        ogType="article"
        ogImage={post.coverImage}
        breadcrumbs={[
          { name: 'Início', url: 'https://souartista.com' },
          { name: 'Blog', url: 'https://souartista.com/blog' },
          { name: post.title, url: postUrl },
        ]}
        extraSchemas={[articleSchema]}
      />
      <article className="relative pt-32 pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o blog
          </Link>

          {/* Article Header */}
          <header className="max-w-4xl mx-auto text-center mb-12">
            <Badge 
              className={cn(
                "mb-6 border",
                categoryColors[post.category]
              )}
            >
              {post.categoryLabel}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readingTime} min de leitura
              </span>
            </div>

            <ShareButtons title={post.title} url={currentUrl} />
          </header>

          {/* Cover Image */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              {renderContent(post.content)}
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/20 via-purple-600/10 to-transparent border border-primary/20 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Pronto para organizar sua carreira musical?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Baixe o SouArtista gratuitamente e comece a ter controle total sobre seus shows, finanças e agenda.
              </p>
              <Button
                size="lg"
                className="rounded-full shadow-purple hover:shadow-purple-lg"
                onClick={() => setIsDownloadModalOpen(true)}
              >
                <Download className="w-5 h-5 mr-2" />
                Baixar o SouArtista grátis
              </Button>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-muted-foreground">
                  Gostou do artigo? Compartilhe com outros músicos!
                </p>
                <ShareButtons title={post.title} url={currentUrl} />
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-20">
              <h2 className="text-2xl font-bold text-foreground text-center mb-10">
                Leia também
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </section>
          )}
        </div>

        <DownloadModal
          open={isDownloadModalOpen}
          onOpenChange={setIsDownloadModalOpen}
        />
      </article>
    </Layout>
  );
};

export default BlogPost;

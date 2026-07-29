import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { BlogCard } from '@/components/blog/BlogCard';
import { CategoryFilter } from '@/components/blog/CategoryFilter';
import { Button } from '@/components/ui/button';
import { BlogCategory, blogPosts, filterPostsByCategory } from '@/data/blogData';
import { Newspaper } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';

const POSTS_PER_PAGE = 6;

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('all');
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);

  const filteredPosts = filterPostsByCategory(activeCategory);
  const hasMorePosts = visiblePosts < filteredPosts.length;

  const handleCategoryChange = (category: BlogCategory) => {
    setActiveCategory(category);
    setVisiblePosts(POSTS_PER_PAGE);
  };

  const loadMore = () => {
    setVisiblePosts(prev => prev + POSTS_PER_PAGE);
  };

  return (
    <Layout>
      <SEOHead 
        title="Blog - SouArtista"
        description="Artigos, dicas práticas e conteúdos que ajudam músicos, cantores, DJs e artistas a organizarem suas carreiras e finanças. Aprenda sobre gestão musical, impostos e muito mais."
        keywords="blog músico, dicas músicos, gestão carreira musical, finanças artistas, impostos músico, nota fiscal músico, como organizar shows, dicas para DJ"
        canonical="https://central-souartista.lovable.app/blog"
        breadcrumbs={[
          { name: 'Início', url: 'https://central-souartista.lovable.app' },
          { name: 'Blog', url: 'https://central-souartista.lovable.app/blog' }
        ]}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
              <Newspaper className="w-4 h-4" />
              <span className="text-sm font-medium">Blog SouArtista</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Dicas, novidades</span>
              <br />
              <span className="text-foreground">e insights para sua carreira musical</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Artigos educativos, dicas práticas e conteúdos que ajudam músicos a organizarem suas carreiras e finanças.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <CategoryFilter
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredPosts.slice(0, visiblePosts).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Nenhum artigo encontrado nesta categoria.
              </p>
            </div>
          )}

          {/* Load More Button */}
          {hasMorePosts && (
            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={loadMore}
                className="rounded-full border-white/20 hover:border-primary/50"
              >
                Carregar mais artigos
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { DownloadModal } from '@/components/DownloadModal';

export const FeaturesCTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-foreground mb-4">
              Pronto para começar?
            </h2>
            <p className="text-muted-foreground mb-6">
              Baixe o SouArtista gratuitamente e organize sua carreira musical.
            </p>
            <Button 
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Baixar agora
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <DownloadModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </>
  );
};

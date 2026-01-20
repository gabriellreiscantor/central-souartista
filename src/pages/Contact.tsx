import React from 'react';
import { Layout } from '@/components/Layout';
import { Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'E-mail',
      value: 'contato@souartista.app',
      link: 'mailto:contato@souartista.app'
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      value: 'Seg - Sex: 9h às 18h',
      link: null
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com/souartista.app' },
    { icon: Facebook, name: 'Facebook', url: 'https://facebook.com/souartistaapp' },
    { icon: Youtube, name: 'YouTube', url: 'https://youtube.com/@souartista' }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Contato - SouArtista"
        description="Entre em contato com a equipe SouArtista. Estamos prontos para ajudar músicos, cantores, DJs e artistas com dúvidas sobre o app, suporte técnico e parcerias."
        keywords="contato souartista, suporte app músico, falar com souartista, ajuda músicos, email souartista, suporte DJ"
        canonical="https://souartista.app/contato"
        breadcrumbs={[
          { name: 'Início', url: 'https://souartista.app' },
          { name: 'Contato', url: 'https://souartista.app/contato' }
        ]}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Entre em <span className="text-gradient">Contato</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos aqui para ajudar. Entre em contato e nossa equipe responderá o mais breve possível.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto space-y-12">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center">Informações de Contato</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">Redes Sociais</h2>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ Prompt */}
            <div className="bg-gradient-to-r from-primary/10 to-purple-400/10 rounded-2xl p-6 border border-primary/20 text-center">
              <h3 className="font-semibold text-lg mb-2">Dúvidas Frequentes?</h3>
              <p className="text-muted-foreground mb-4">
                Confira nossa seção de perguntas frequentes para respostas rápidas.
              </p>
              <Button variant="outline" asChild>
                <a href="/#faq">Ver FAQ</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

import React from 'react';
import { Layout } from '@/components/Layout';
import { DownloadButtons } from '@/components/DownloadButtons';
import { Music, Lightbulb, Heart, Users, Target, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-purple-50 to-white dark:from-purple-dark/20 dark:to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              <Music className="w-4 h-4" />
              Nossa História
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nascido da música,{' '}
              <span className="text-gradient">feito para músicos</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              O SouArtista nasceu de uma frustração real. De quem vive a música e 
              entende na pele os desafios de gerenciar uma carreira artística.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-gradient-to-r from-primary/5 to-purple-400/5 rounded-3xl p-8 md:p-12 mb-12 border border-primary/10">
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-0 font-medium">
                  Tudo começou com uma amizade e um problema em comum: a paixão pela música e a dificuldade 
                  de gerenciar uma carreira artística. <strong className="text-primary">Gabriell Reis</strong> e{' '}
                  <strong className="text-primary">Domingos Sávio</strong> uniram forças para criar algo que 
                  faltava no mercado.
                </p>
              </div>

              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Gabriell, cantor e músico brasileiro, vivia o sonho de fazer música, mas também enfrentava 
                  o desafio de gerenciar tudo sozinho — shows, cachês, despesas, impostos, locomoção... Como 
                  programador autodidata, criou um app simples para organizar sua própria carreira.
                </p>
                
                <p>
                  Quando mostrou para Domingos, seu amigo de longa data, a ideia tomou forma. Domingos, dono 
                  da agência <strong className="text-foreground">Savini Comunicação</strong>, pode não subir 
                  nos palcos, mas carrega a música no coração. Ele viu potencial e propôs: 
                  <em className="text-primary"> "E se existisse um app feito por músicos, para músicos?"</em>
                </p>

                <p>
                  A visão estratégica de Domingos combinada com a experiência musical e técnica de Gabriell 
                  criou a parceria perfeita. Um entende as dores do artista, o outro sabe como transformar 
                  isso em um negócio que realmente ajuda.
                </p>

                <div className="bg-muted/50 rounded-2xl p-8 my-8 border-l-4 border-primary">
                  <p className="text-foreground font-medium text-xl mb-0">
                    Juntos, dois amigos com paixões diferentes, mas um objetivo em comum: ajudar artistas 
                    a terem mais controle sobre suas carreiras, gastando menos tempo com burocracia e mais 
                    tempo fazendo o que amam — <span className="text-primary">música</span>.
                  </p>
                </div>

                <p className="text-xl font-semibold text-foreground text-center">
                  Assim nasceu o <span className="text-gradient">SouArtista</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Os Fundadores</h2>
            <p className="text-muted-foreground text-lg">
              Conheça as mentes por trás do SouArtista
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Gabriell Reis */}
            <div className="bg-card rounded-3xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-400 rounded-2xl flex items-center justify-center mb-6">
                <Music className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Gabriell Reis</h3>
              <p className="text-primary font-medium mb-4">Co-fundador & Desenvolvedor</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Cantor e músico brasileiro</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Programador autodidata, apaixonado por tecnologia</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Viveu na pele os desafios de gerenciar uma carreira musical</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Criou o SouArtista para resolver os problemas que ele mesmo enfrentava</span>
                </li>
              </ul>
            </div>

            {/* Domingos Sávio */}
            <div className="bg-card rounded-3xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-400 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Domingos Sávio</h3>
              <p className="text-primary font-medium mb-4">Co-fundador & Estratégia</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Dono da agência Savini Comunicação</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Apaixonado por música, mesmo atuando no mundo da comunicação</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Amigo de longa data de Gabriell</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Trouxe visão estratégica e de negócios para o projeto</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa Missão</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Empoderar artistas com ferramentas que simplificam a gestão da carreira, 
              para que possam focar no que realmente importa: <strong className="text-foreground">a música</strong>.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Feito por Músicos</h3>
                <p className="text-muted-foreground text-sm">
                  Entendemos suas dores porque já as vivemos
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Simplicidade</h3>
                <p className="text-muted-foreground text-sm">
                  Tecnologia que facilita, não que complica
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Paixão</h3>
                <p className="text-muted-foreground text-sm">
                  Cada feature é pensada com carinho para você
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-purple-400/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Faça parte dessa história
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Junte-se a milhares de artistas que já organizam sua carreira com o SouArtista
            </p>
            <DownloadButtons size="lg" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

import React from 'react';
import { Layout } from '@/components/Layout';
import { DownloadButtons } from '@/components/DownloadButtons';
import { 
  Calendar, 
  DollarSign, 
  CalendarDays, 
  FileText, 
  FolderOpen, 
  User, 
  Users, 
  Music, 
  Target,
  Globe,
  Smartphone,
  Monitor,
  Shield,
  RefreshCw,
  X,
  Check
} from 'lucide-react';

const About: React.FC = () => {
  const solutions = [
    {
      icon: Calendar,
      title: 'Organização de shows, eventos e compromissos',
    },
    {
      icon: DollarSign,
      title: 'Controle de cachês, despesas e receitas',
    },
    {
      icon: CalendarDays,
      title: 'Visualização clara da agenda e rotina profissional',
    },
    {
      icon: FileText,
      title: 'Geração de relatórios para acompanhamento financeiro',
    },
    {
      icon: FolderOpen,
      title: 'Centralização de informações importantes da carreira',
    },
  ];

  const targetAudience = [
    {
      icon: User,
      title: 'Artistas solo',
    },
    {
      icon: Users,
      title: 'Músicos e integrantes de bandas',
    },
    {
      icon: Music,
      title: 'Profissionais que vivem de shows e eventos',
    },
    {
      icon: Target,
      title: 'Pessoas que desejam mais controle e organização na carreira artística',
    },
  ];

  const platforms = [
    { icon: Globe, name: 'Web' },
    { icon: Smartphone, name: 'iOS' },
    { icon: Smartphone, name: 'Android' },
  ];

  const notWhat = [
    'Não é uma rede social',
    'Não é um marketplace',
    'Não é um sistema genérico',
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sobre a <span className="bg-foreground px-3 py-1 -skew-x-3 inline-block"><span className="skew-x-3 inline-block text-background">Sou<span style={{ color: '#7F1DDE' }}>Artista</span></span></span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma plataforma digital criada para organizar e profissionalizar a rotina de artistas, 
              músicos e profissionais do mercado musical.
            </p>
          </div>
        </div>
      </section>

      {/* What is SouArtista */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                O ecossistema foi desenvolvido para centralizar, em um único ambiente, as principais 
                demandas da vida artística: gestão de shows, controle financeiro, agenda, relatórios 
                e acompanhamento da carreira. Tudo de forma simples, objetiva e alinhada à realidade 
                do mercado musical.
              </p>
              <p className="text-lg leading-relaxed">
                Diferente de redes sociais ou ferramentas genéricas, a SouArtista é uma{' '}
                <strong className="text-foreground">ferramenta de trabalho</strong>. Seu propósito 
                é reduzir a desorganização operacional que acompanha muitos profissionais da música, 
                oferecendo estrutura, clareza e controle sobre a própria atividade profissional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que a SouArtista resolve */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">O que a <span className="text-foreground">Sou</span><span className="text-primary">Artista</span> resolve</h2>
              <p className="text-muted-foreground text-lg">
                A plataforma atende necessidades práticas do dia a dia artístico
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{solution.title}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-primary/10 to-purple-400/10 rounded-2xl p-8 border border-primary/20 text-center">
              <p className="text-lg md:text-xl text-foreground font-medium">
                Tudo foi pensado para funcionar de forma intuitiva, sem burocracia e sem exigir conhecimento técnico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A SouArtista opera por meio de um aplicativo principal, acessível via web, iOS e Android, 
                que concentra todas as funcionalidades do sistema.
              </p>
            </div>

            <div className="flex justify-center gap-8 mb-12">
              {platforms.map((platform, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <platform.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{platform.name}</span>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Acesso seguro</h3>
                </div>
                <p className="text-muted-foreground">
                  O acesso é individual e seguro, com dados protegidos e infraestrutura confiável.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Evolução constante</h3>
                </div>
                <p className="text-muted-foreground">
                  A plataforma evolui continuamente com base no uso real e nas necessidades do mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Para quem é</h2>
              <p className="text-muted-foreground text-lg">
                A SouArtista é indicada para profissionais da música
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {targetAudience.map((audience, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <audience.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{audience.title}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-purple-400/10 rounded-2xl p-8 border border-primary/20 text-center">
              <p className="text-lg md:text-xl text-foreground font-medium">
                Para quem trata a música como trabalho e entende a importância de gestão e planejamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posicionamento */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Posicionamento</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* O que NÃO somos */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-semibold mb-6 text-muted-foreground">O que NÃO somos</h3>
                <ul className="space-y-4">
                  {notWhat.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* O que SOMOS */}
              <div className="bg-gradient-to-br from-primary/10 to-purple-400/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-xl font-semibold mb-6 text-primary">O que SOMOS</h3>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground text-lg font-medium">
                    Uma plataforma focada em organização, gestão e profissionalização da carreira artística.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acesso à Plataforma */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Acesso à Plataforma</h2>
            <p className="text-lg text-muted-foreground mb-8">
              O aplicativo está disponível em Web, iOS e Android.
              <br />
              Para acessar o sistema e conhecer as funcionalidades, visite{' '}
              <a 
                href="https://souartista.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                souartista.app
              </a>
            </p>
            <DownloadButtons size="lg" />
          </div>
        </div>
      </section>

      {/* Institucional Footer */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-purple-400/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A SouArtista é uma plataforma digital em constante evolução, desenvolvida para 
              atender o mercado musical <strong className="text-foreground">mundial</strong> com 
              foco em eficiência, simplicidade e confiabilidade.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

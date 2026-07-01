import React from 'react';
import { Layout } from '@/components/Layout';
import { SEOHead } from '@/components/SEOHead';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  Settings,
  Mail,
  Clock,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Trust: React.FC = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'Criptografia',
      description: 'Utilizamos criptografia em trânsito (HTTPS/TLS) e em repouso para proteger todas as informações transmitidas e armazenadas.'
    },
    {
      icon: Database,
      title: 'Infraestrutura segura',
      description: 'Nossa plataforma é construída sobre infraestrutura de nível empresarial com monitoramento 24/7.'
    },
    {
      icon: Clock,
      title: 'Backups automáticos',
      description: 'Realizamos backups diários de todos os dados para garantir recuperação em caso de incidentes.'
    },
    {
      icon: ShieldCheck,
      title: 'Autenticação segura',
      description: 'Login via código OTP (senha única por e-mail), sem necessidade de memorizar senhas vulneráveis.'
    }
  ];

  const privacyFeatures = [
    {
      icon: CheckCircle2,
      title: 'LGPD',
      description: 'Estamos em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018).'
    },
    {
      icon: Users,
      title: 'Direitos do titular',
      description: 'Você pode solicitar acesso, correção, exclusão, oposição ou portabilidade dos seus dados a qualquer momento pelo app.'
    },
    {
      icon: XCircle,
      title: 'Não vendemos dados',
      description: 'Nunca comercializamos suas informações pessoais ou financeiras para terceiros.'
    },
    {
      icon: Eye,
      title: 'Transparência',
      description: 'Informamos claramente quais dados coletamos e como os utilizamos.'
    }
  ];

  const dataProtection = [
    { type: 'E-mail, telefone, CPF', protection: 'Acesso restrito a administradores autorizados', safe: true },
    { type: 'Senhas', protection: 'Nunca armazenamos - usamos autenticação OTP', safe: true },
    { type: 'Dados de cartão de crédito', protection: 'Processados exclusivamente por parceiros certificados (nunca armazenamos)', safe: true },
    { type: 'Shows, cachês, despesas', protection: 'Criptografados e acessíveis apenas pelo próprio usuário', safe: true },
    { type: 'Informações bancárias', protection: 'Não solicitamos nem armazenamos dados bancários completos', safe: true },
  ];

  const userControls = [
    {
      icon: Eye,
      title: 'Visibilidade de dados',
      description: 'Escolha ocultar valores financeiros no dashboard e relatórios (recurso de privacidade visual).'
    },
    {
      icon: XCircle,
      title: 'Exclusão de conta',
      description: 'Pode excluir sua conta e todos os dados a qualquer momento nas configurações.'
    },
    {
      icon: ShieldCheck,
      title: 'Solicitações LGPD',
      description: 'Faça solicitações formais de direitos diretamente pelo app.'
    },
    {
      icon: Settings,
      title: 'Notificações',
      description: 'Controle quais notificações deseja receber.'
    }
  ];

  return (
    <Layout>
      <div className="relative pt-32 pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4">
          {/* Header */}
          <header className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Central de Confiança
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparência, segurança e privacidade são pilares fundamentais do SouArtista. Veja como protegemos seus dados.
            </p>
          </header>

          {/* Security Section */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                🔒 Segurança de Dados
              </h2>
              <p className="text-muted-foreground">Seus dados estão protegidos</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="bg-card/50 border-white/10 hover:border-primary/30 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Privacy Section */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                🛡️ Privacidade e Conformidade
              </h2>
              <p className="text-muted-foreground">Comprometidos com sua privacidade</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {privacyFeatures.map((feature, index) => (
                <Card key={index} className="bg-card/50 border-white/10 hover:border-primary/30 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-green-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Data Protection Table */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                📊 O que Protegemos
              </h2>
              <p className="text-muted-foreground">Dados que cuidamos</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card/50 border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-4 text-foreground font-semibold">Tipo de Dado</th>
                        <th className="text-left p-4 text-foreground font-semibold">Proteção</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataProtection.map((item, index) => (
                        <tr key={index} className="border-b border-white/5 last:border-0">
                          <td className="p-4 text-muted-foreground">{item.type}</td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-muted-foreground">{item.protection}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </section>

          {/* Partners Section */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                🤝 Parceiros de Confiança
              </h2>
              <p className="text-muted-foreground">Trabalhamos com os melhores</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card/50 border-white/10">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                        <Lock className="w-6 h-6 text-blue-500" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Pagamentos</h4>
                      <p className="text-sm text-muted-foreground">
                        Parceiros certificados PCI-DSS para processar transações com cartão de crédito.
                      </p>
                    </div>
                    <div className="text-center p-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mx-auto mb-3">
                        <ShieldCheck className="w-6 h-6 text-purple-500" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">App Store & Google Play</h4>
                      <p className="text-sm text-muted-foreground">
                        Assinaturas via lojas oficiais seguem os mais altos padrões de segurança.
                      </p>
                    </div>
                    <div className="text-center p-4">
                      <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                        <Database className="w-6 h-6 text-green-500" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">PIX</h4>
                      <p className="text-sm text-muted-foreground">
                        Pagamentos via PIX processados por parceiros regulamentados pelo Banco Central.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* User Controls Section */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                ⚙️ Controle nas Suas Mãos
              </h2>
              <p className="text-muted-foreground">Você no controle</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {userControls.map((control, index) => (
                <Card key={index} className="bg-card/50 border-white/10 hover:border-primary/30 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                      <control.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{control.title}</h3>
                    <p className="text-sm text-muted-foreground">{control.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-gradient-to-br from-primary/20 via-purple-600/10 to-transparent border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Estamos aqui para ajudar
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Dúvidas sobre segurança ou privacidade? Entre em contato conosco.
                  </p>
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">E-mail:</strong>{' '}
                      <a href="mailto:contato@souartista.app" className="text-primary hover:underline">
                        contato@souartista.app
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Suporte no app:</strong> Acesse a Central de Ajuda diretamente pelo aplicativo
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Tempo de resposta:</strong> Respondemos solicitações em até 48 horas úteis
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Trust Badges */}
          <section className="mt-16">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Conformidade LGPD
              </div>
              <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Dados Criptografados
              </div>
              <div className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-sm font-medium flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Pagamento Seguro PCI-DSS
              </div>
              <div className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-medium flex items-center gap-2">
                <Database className="w-4 h-4" />
                Backups Automáticos
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Trust;

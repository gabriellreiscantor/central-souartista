import React from 'react';
import { Layout } from '@/components/Layout';
import { SEOHead } from '@/components/SEOHead';
import { Shield, Calendar } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <Layout>
      <SEOHead
        title="Política de Privacidade — SouArtista"
        description="Como o SouArtista coleta, usa e protege os dados dos músicos, cantores, DJs e artistas usuários da plataforma, em conformidade com a LGPD."
        canonical="https://souartista.app/privacidade"
        breadcrumbs={[
          { name: 'Início', url: 'https://souartista.app' },
          { name: 'Privacidade', url: 'https://souartista.app/privacidade' },
        ]}
      />
      <div className="relative pt-32 pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4">
          {/* Header */}
          <header className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Política de Privacidade
            </h1>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Última atualização: Janeiro de 2026</span>
            </div>
          </header>

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Informações que Coletamos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Coletamos informações fornecidas diretamente pelo usuário no momento do cadastro e durante o uso da plataforma, incluindo nome, e-mail, telefone, CPF, data de nascimento, informações de plano e dados relacionados à atividade profissional, como registros de shows, cachês, receitas, despesas e outros dados financeiros inseridos pelo próprio usuário.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Também coletamos informações técnicas e de uso da plataforma, como datas de acesso, interações com funcionalidades e dados necessários para suporte e segurança.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Como Usamos Suas Informações</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Usamos suas informações para:</p>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li>Fornecer, manter e melhorar nossos serviços</li>
                  <li>Processar transações e enviar notificações relacionadas</li>
                  <li>Responder a seus comentários, perguntas e solicitações de suporte</li>
                  <li>Enviar informações técnicas, atualizações e mensagens administrativas</li>
                  <li>Monitorar e analisar tendências, uso e atividades</li>
                  <li>Personalizar e melhorar o serviço</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  As informações coletadas poderão ser acessadas por administradores autorizados da plataforma exclusivamente para fins de operação, manutenção, suporte ao usuário, análise interna, geração de relatórios, prevenção a fraudes e melhoria contínua do serviço.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Compartilhamento de Informações</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Não vendemos suas informações pessoais.</strong> Podemos compartilhar suas informações apenas nas seguintes situações:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li>Com seu consentimento explícito</li>
                  <li>Com provedores de serviços que nos auxiliam na operação do serviço</li>
                  <li>Para cumprir obrigações legais ou responder a solicitações governamentais</li>
                  <li>Para proteger os direitos, propriedade ou segurança da empresa e usuários</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  O SouArtista não comercializa dados pessoais. Dados financeiros de pagamento são processados por parceiros externos (como operadoras de pagamento e lojas de aplicativos), não sendo armazenados integralmente em nossos sistemas.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Segurança dos Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Retenção de Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mantemos suas informações pessoais pelo tempo necessário para fornecer nossos serviços e cumprir obrigações legais. Você pode solicitar a exclusão de sua conta e dados a qualquer momento através das configurações da conta.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Seus Direitos (LGPD)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Você tem o direito de:</p>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li>Acessar e receber uma cópia de suas informações pessoais</li>
                  <li>Corrigir informações imprecisas ou incompletas</li>
                  <li>Solicitar a exclusão de suas informações pessoais</li>
                  <li>Opor-se ao processamento de suas informações</li>
                  <li>Solicitar a portabilidade de seus dados</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Para exercer seus direitos, você pode fazer uma solicitação LGPD diretamente pelo aplicativo (disponível nas configurações de privacidade).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies e Tecnologias Similares</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos cookies e tecnologias similares para coletar informações sobre seu uso do serviço e melhorar sua experiência. Você pode controlar o uso de cookies através das configurações do seu navegador.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Alterações a Esta Política</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova política nesta página e atualizando a data da "última atualização".
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos suas informações, entre em contato conosco:{' '}
                  <a href="mailto:contato@souartista.app" className="text-primary hover:underline">
                    contato@souartista.app
                  </a>
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;

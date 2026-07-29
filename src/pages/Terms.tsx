import React from 'react';
import { Layout } from '@/components/Layout';
import { SEOHead } from '@/components/SEOHead';
import { FileText, Calendar } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <Layout>
      <SEOHead
        title="Termos de Uso — SouArtista"
        description="Termos e condições de uso do SouArtista, o aplicativo de gestão financeira e agenda de shows para músicos, cantores, DJs e artistas."
        canonical="https://central-souartista.lovable.app/termos"
        breadcrumbs={[
          { name: 'Início', url: 'https://central-souartista.lovable.app' },
          { name: 'Termos', url: 'https://central-souartista.lovable.app/termos' },
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
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Termos de Uso
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
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ao acessar e usar o SouArtista, você aceita e concorda em ficar vinculado aos termos e condições deste acordo. Se você não concordar com qualquer parte destes termos, não deve usar nosso serviço.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Descrição do Serviço</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O SouArtista é uma plataforma de gerenciamento financeiro para artistas e músicos, oferecendo ferramentas para organizar shows, controlar receitas e despesas, e gerenciar equipes musicais.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Cadastro e Conta</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para usar o SouArtista, você deve criar uma conta fornecendo informações precisas e completas. Você é responsável por manter a confidencialidade de sua senha e por todas as atividades que ocorram em sua conta.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Idade mínima:</strong> É necessário ter no mínimo 14 (quatorze) anos de idade para criar uma conta no SouArtista. Menores de 14 anos não estão autorizados a utilizar o serviço. Caso você tenha entre 14 e 18 anos, recomendamos que obtenha permissão de um responsável legal antes de se cadastrar.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Acesso Administrativo e Uso de Dados</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para fins de operação, suporte, segurança, análise e gestão da plataforma, os administradores do SouArtista (incluindo perfis de CEO, COO ou funções equivalentes) poderão acessar dados cadastrais e operacionais dos usuários, tais como nome, e-mail, telefone, CPF, informações de plano, bem como dados financeiros inseridos na plataforma relacionados à atividade profissional do usuário, incluindo registros de shows, cachês, receitas, despesas e indicadores financeiros agregados.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  O SouArtista não acessa senhas, códigos de autenticação, dados completos de cartões de crédito ou informações bancárias sensíveis, os quais são processados exclusivamente por parceiros de pagamento externos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Uso Aceitável</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Você concorda em usar o serviço apenas para fins legítimos e de acordo com estes Termos. Você não deve usar o serviço de maneira que possa danificar, desabilitar, sobrecarregar ou prejudicar nossos servidores ou redes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Propriedade Intelectual</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Todo o conteúdo, recursos e funcionalidades do SouArtista são de propriedade exclusiva da empresa e são protegidos por leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Pagamentos e Assinaturas</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O acesso a determinados recursos pode exigir uma assinatura paga. Você concorda em fornecer informações de pagamento precisas e atualizadas. As taxas de assinatura são cobradas antecipadamente e não são reembolsáveis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Cancelamento</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Você pode cancelar sua conta a qualquer momento através das configurações da sua conta. Reservamo-nos o direito de suspender ou encerrar sua conta se você violar estes Termos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O SouArtista é fornecido "como está" sem garantias de qualquer tipo. Não seremos responsáveis por quaisquer danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou da incapacidade de usar o serviço.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Alterações aos Termos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Reservamo-nos o direito de modificar estes Termos a qualquer momento. Notificaremos você sobre quaisquer alterações publicando os novos Termos nesta página. É sua responsabilidade revisar estes Termos periodicamente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Termos Adicionais para Compras via App Store (iOS)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para assinaturas adquiridas através da App Store da Apple, aplicam-se também os termos do Contrato de Licença de Usuário Final (EULA) padrão da Apple.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ao adquirir uma assinatura pelo iOS, você concorda com ambos os termos: os Termos de Uso do SouArtista e o EULA da Apple.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Se você tiver dúvidas sobre estes Termos, entre em contato conosco:{' '}
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

export default Terms;

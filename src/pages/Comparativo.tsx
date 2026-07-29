import React from 'react';
import { Layout } from '@/components/Layout';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, X, Minus, ArrowRight, Zap } from 'lucide-react';
import { DownloadButtons } from '@/components/DownloadButtons';

const comparisonData = [
  { feature: 'Agenda de shows com cachê vinculado', souartista: 'full', excel: 'partial', google: 'none' },
  { feature: 'Cálculo automático de lucro líquido', souartista: 'full', excel: 'partial', google: 'none' },
  { feature: 'Gestão de músicos da banda', souartista: 'full', excel: 'partial', google: 'none' },
  { feature: 'Divisão automática de cachês', souartista: 'full', excel: 'partial', google: 'none' },
  { feature: 'Controle de cachê pendente (Pendente/Recebido)', souartista: 'full', excel: 'none', google: 'none' },
  { feature: 'Notificações automáticas de shows', souartista: 'full', excel: 'none', google: 'partial' },
  { feature: 'Notificações de cachê pendente', souartista: 'full', excel: 'none', google: 'none' },
  { feature: 'Registro de despesas por show', souartista: 'full', excel: 'partial', google: 'none' },
  { feature: 'Cálculo de custo de locomoção (km, combustível)', souartista: 'full', excel: 'partial', google: 'none' },
  { feature: 'Simulador de nota fiscal (MEI/CNPJ/RPA)', souartista: 'full', excel: 'none', google: 'none' },
  { feature: 'Relatórios financeiros automáticos', souartista: 'full', excel: 'partial', google: 'none' },
  { feature: 'Rankings de locais mais lucrativos', souartista: 'full', excel: 'none', google: 'none' },
  { feature: 'Contratos prontos para eventos', souartista: 'full', excel: 'none', google: 'none' },
  { feature: 'Rider técnico e mapa de palco', souartista: 'full', excel: 'none', google: 'none' },
  { feature: 'App nativo iOS e Android', souartista: 'full', excel: 'none', google: 'full' },
  { feature: 'Modo Músico freelancer', souartista: 'full', excel: 'none', google: 'none' },
  { feature: 'Exportação PDF/Excel', souartista: 'full', excel: 'full', google: 'partial' },
  { feature: 'Feito especificamente para músicos', souartista: 'full', excel: 'none', google: 'none' },
];

const StatusIcon = ({ status }: { status: string }) => {
  if (status === 'full') return <Check className="w-5 h-5 text-emerald-400 mx-auto" />;
  if (status === 'partial') return <Minus className="w-5 h-5 text-amber-400 mx-auto" />;
  return <X className="w-5 h-5 text-red-400/60 mx-auto" />;
};

const Comparativo: React.FC = () => {

  return (
    <Layout>
      <SEOHead
        title="SouArtista vs Excel vs Google Agenda — Comparativo para Músicos"
        description="Compare o SouArtista com planilhas Excel e Google Agenda. Veja por que músicos, cantores, DJs e bandas escolhem o SouArtista para gestão de shows, cachês e finanças."
        keywords="souartista vs excel, app vs planilha músico, melhor app para músico, comparativo agenda shows, souartista vs google agenda, gestão financeira músico, controle de cachê, app para DJ, app para cantor"
        canonical="https://souartista.com/comparativo"
        breadcrumbs={[
          { name: 'Início', url: 'https://souartista.com' },
          { name: 'Comparativo', url: 'https://souartista.com/comparativo' },
        ]}
      />

      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Comparativo</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">SouArtista vs Excel</span>
              <br />
              <span className="text-foreground">vs Google Agenda</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Você ainda usa planilha pra controlar seus shows? Veja lado a lado por que músicos profissionais estão migrando para o SouArtista.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xs overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50 bg-muted/30">
                    <TableHead className="text-foreground font-semibold w-[40%]">Funcionalidade</TableHead>
                    <TableHead className="text-center text-primary font-bold">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-lg">SouArtista</span>
                        <span className="text-xs text-muted-foreground font-normal">R$ 29,90/mês</span>
                      </div>
                    </TableHead>
                    <TableHead className="text-center text-muted-foreground font-semibold">
                      <div className="flex flex-col items-center gap-1">
                        <span>Excel / Planilha</span>
                        <span className="text-xs font-normal">Grátis*</span>
                      </div>
                    </TableHead>
                    <TableHead className="text-center text-muted-foreground font-semibold">
                      <div className="flex flex-col items-center gap-1">
                        <span>Google Agenda</span>
                        <span className="text-xs font-normal">Grátis</span>
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, i) => (
                    <TableRow key={i} className="border-border/30 hover:bg-muted/20">
                      <TableCell className="text-foreground font-medium text-sm">{row.feature}</TableCell>
                      <TableCell className="bg-primary/5"><StatusIcon status={row.souartista} /></TableCell>
                      <TableCell><StatusIcon status={row.excel} /></TableCell>
                      <TableCell><StatusIcon status={row.google} /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                <Check className="w-3 h-3 text-emerald-400 inline mr-1" /> Suporte completo
                <Minus className="w-3 h-3 text-amber-400 inline mx-1 ml-4" /> Manual / Limitado
                <X className="w-3 h-3 text-red-400/60 inline mx-1 ml-4" /> Não disponível
              </p>
              <p className="text-xs text-muted-foreground mt-2">* O custo real da planilha inclui horas de trabalho manual</p>
            </div>
          </div>

          {/* Arguments Section */}
          <div className="max-w-4xl mx-auto mb-16 grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border/50 bg-card/50 p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">🧮 Por que não planilha?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Fórmulas quebram com o tempo</li>
                <li>• Precisa do computador pra atualizar</li>
                <li>• Zero notificações de shows ou cachês</li>
                <li>• Não calcula combustível automaticamente</li>
                <li>• Sem controle de quem já recebeu</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/50 p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">📅 Por que não Google Agenda?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Não vincula cachê ao evento</li>
                <li>• Sem cálculo de lucro ou despesas</li>
                <li>• Não gerencia músicos da banda</li>
                <li>• Sem relatórios financeiros</li>
                <li>• Não é feito pra quem vive de música</li>
              </ul>
            </div>
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
              <h3 className="text-lg font-bold text-primary mb-3">🎵 Por que SouArtista?</h3>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• Feito por músicos, pra músicos</li>
                <li>• Tudo automático: lucro, custos, divisão</li>
                <li>• Contratos, riders e mapa de palco</li>
                <li>• Cachê pendente com notificações</li>
                <li>• App nativo + web, funciona em todo lugar</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pronto pra largar a planilha?
            </h2>
            <p className="text-muted-foreground mb-8">
              Junte-se a milhares de músicos que já fazem gestão profissional com o SouArtista.
            </p>
            <DownloadButtons />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Comparativo;

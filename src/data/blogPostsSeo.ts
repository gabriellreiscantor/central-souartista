import type { BlogPost } from './blogData';

/**
 * Artigos de SEO semântico: cada um mira uma dor real e um termo de busca
 * específico do universo de gestão musical.
 */
export const seoPosts: BlogPost[] = [
  {
    slug: 'como-repartir-cache-de-banda',
    title: 'Como repartir o cachê da banda sem briga (3 modelos que funcionam)',
    excerpt: 'Divisão igual, por função ou por participação? Veja os três modelos usados por bandas profissionais e como calcular a parte de cada músico sem confusão.',
    category: 'gestao-financeira',
    categoryLabel: 'Gestão Financeira',
    publishedAt: '2026-08-04',
    readingTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=450&fit=crop',
    content: `
Repartir cachê é o assunto que mais gera atrito dentro de uma banda. Não porque os músicos sejam gananciosos, mas porque quase nunca existe uma regra escrita antes do show. Quando o dinheiro chega, cada um tem uma expectativa diferente.

Este guia mostra os três modelos de divisão mais usados por bandas profissionais no Brasil e como aplicar cada um sem gerar ressentimento.

## Antes de dividir: separe o que é cachê e o que é custo

O erro número um é dividir o valor cheio que o contratante pagou. Esse valor ainda não é lucro. Primeiro tire:

- Combustível, pedágio, van ou frete de equipamento
- Aluguel de som, luz ou backline
- Alimentação e hospedagem da equipe
- Comissão de produtor ou agenciador
- Impostos e taxas (ISS, RPA, MEI)

O que sobra é o **cachê líquido**. É esse número que se divide.

## Modelo 1: divisão igual

Todos recebem exatamente a mesma parte. Funciona bem em bandas de formação fixa, em que todos ensaiam, carregam equipamento e assumem os mesmos riscos.

- **Vantagem:** simples, transparente, sem discussão.
- **Risco:** quem faz o trabalho administrativo (fechar show, dirigir, cobrar) sente que trabalha mais pelo mesmo valor.
- **Correção comum:** pagar uma "taxa de produção" a quem fecha os shows, antes da divisão igual.

## Modelo 2: divisão por função

Cada função tem um valor definido. Exemplo de um show de R$ 3.000 com R$ 800 de custos (R$ 2.200 líquidos):

| Função | Valor |
| --- | --- |
| Vocal / líder | R$ 600 |
| Guitarra | R$ 450 |
| Baixo | R$ 450 |
| Bateria | R$ 450 |
| Técnico de som | R$ 250 |

É o modelo mais usado quando existem músicos contratados (freelancers) ao lado dos membros fixos. O freelancer recebe um valor combinado, fechado, independentemente do resultado do show.

## Modelo 3: divisão por participação (sociedade)

A banda funciona como sociedade: cada membro tem um percentual fixo, definido por tempo de casa, investimento em equipamento ou trabalho de gestão.

Exemplo: 30% / 25% / 25% / 20%. Serve para bandas que têm marca própria, reinvestem em produção e dividem também os prejuízos.

## O que precisa estar combinado por escrito

Seja qual for o modelo, registre:

1. Quem paga os custos e como eles são comprovados
2. O que acontece se o contratante atrasar o pagamento
3. Quanto recebe o músico substituto
4. Se existe caixa da banda e qual percentual vai para ele

## Como o SouArtista resolve isso

No SouArtista você cadastra o show com o valor do cachê, lança as despesas e adiciona os músicos da equipe com o valor de cada um. O app calcula o líquido, mostra a parte de cada músico e registra quem já foi pago e quem está pendente.

Ou seja: a conversa sobre dinheiro deixa de ser memória e passa a ser um número que todo mundo vê igual.

## Perguntas frequentes

**Quem fecha os shows deve ganhar mais?** Na prática, sim — mas combine isso como uma taxa de produção antes da divisão, e não como um "extra" tirado depois.

**Músico de apoio entra na divisão do lucro?** Em geral não: freelancer recebe valor fixo combinado, que entra como custo do show.
    `.trim(),
  },
  {
    slug: 'nota-fiscal-para-show-de-cantor',
    title: 'Nota fiscal para show de cantor: MEI, RPA ou CNPJ?',
    excerpt: 'Entenda quando o contratante exige nota, quais são as opções legais para músicos no Brasil e quanto cada uma custa em imposto no fim do mês.',
    category: 'gestao-financeira',
    categoryLabel: 'Gestão Financeira',
    publishedAt: '2026-08-05',
    readingTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=450&fit=crop',
    content: `
Cedo ou tarde aparece a frase: "para pagar seu cachê, preciso de nota fiscal". Muito músico perde show por não saber responder. Este guia explica, em português claro, as três formas mais comuns de emitir nota por uma apresentação.

> Este texto é informativo e não substitui a orientação de um contador.

## Quando o contratante exige nota

- Prefeituras, secretarias de cultura e editais públicos
- Empresas que precisam lançar a despesa na contabilidade
- Casas de show e redes maiores
- Eventos corporativos e casamentos contratados por empresas

Festas particulares e bares pequenos costumam pagar sem nota — mas isso limita o tamanho dos contratos que você pode aceitar.

## Opção 1: RPA (Recibo de Pagamento Autônomo)

O contratante paga você como pessoa física e recolhe os tributos no lugar da nota.

- **Prós:** não exige CNPJ, serve para shows eventuais.
- **Contras:** os descontos são pesados — INSS, IRRF e, em muitos municípios, ISS. É comum sobrar bem menos do que o combinado.
- **Atenção:** negocie o cachê "líquido" ou deixe claro que os descontos são por conta do contratante.

## Opção 2: MEI

O MEI é o caminho mais usado por músicos que fazem shows com regularidade.

- Permite emitir nota fiscal de serviço
- Imposto mensal fixo e baixo, independentemente do faturamento do mês
- Contribui para aposentadoria e auxílios do INSS
- Tem limite anual de faturamento — passou do teto, é hora de migrar

Verifique se a ocupação de músico/artista está disponível no MEI no momento da abertura e confirme com um contador a lista de ocupações vigente.

## Opção 3: CNPJ (ME / Simples Nacional)

Para quem fatura acima do teto do MEI, tem banda com estrutura, equipe contratada ou fecha contratos grandes.

- Sem o limite estreito do MEI
- Permite ter sócios (a banda como empresa)
- Exige contador e obrigações mensais
- A alíquota varia conforme faturamento e anexo do Simples

## Como decidir

| Situação | Caminho mais comum |
| --- | --- |
| 1 a 2 shows por mês, sem exigência de nota | Pessoa física / RPA |
| Shows frequentes, contratantes pedem nota | MEI |
| Faturamento alto, banda estruturada | CNPJ no Simples |

## O erro que custa dinheiro

Aceitar o cachê sem perguntar quem paga o imposto. Sempre confirme com o contratante: o valor combinado é **bruto** ou **líquido**? Um show de R$ 2.000 pode virar R$ 1.600 na conta.

## Como o SouArtista ajuda

O SouArtista tem um simulador financeiro: você informa o valor do show e o regime, e vê quanto sobra depois de impostos, despesas e pagamento da equipe — antes de aceitar o trabalho. Cada cachê fica registrado com status de pagamento, o que facilita muito o fechamento do mês com o contador.

## Perguntas frequentes

**Posso emitir nota como pessoa física?** Em muitos municípios existe o recibo/nota avulsa; o mais prático para quem toca com frequência é o MEI.

**Preciso de nota para show em bar?** Normalmente não, mas registrar o recebimento em um app mantém seu histórico organizado.
    `.trim(),
  },
  {
    slug: 'como-organizar-equipe-de-apoio-de-musicos',
    title: 'Como organizar a equipe de apoio de músicos (roadie, técnico e freelancer)',
    excerpt: 'Escalar músicos, técnico de som e apoio sem ruído: checklist de convocação, valores, confirmação e pagamento para cada show.',
    category: 'carreira',
    categoryLabel: 'Carreira',
    publishedAt: '2026-08-06',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&h=450&fit=crop',
    content: `
Quanto maior o show, mais gente envolvida — e mais chance de alguém não aparecer, cobrar um valor diferente do combinado ou chegar sem saber o horário. Organizar a equipe de apoio é trabalho de produção, e dá para fazer isso em minutos se houver um processo.

## 1. Tenha um elenco fixo de substitutos

Monte uma lista com pelo menos dois nomes por função: guitarra, baixo, bateria, teclas, técnico de som, roadie. Anote de cada um:

- Valor habitual por show
- Região onde mora e se tem transporte
- Repertório que já domina
- Disponibilidade típica (dias de semana, fins de semana)

## 2. Convoque com informação completa

Uma convocação boa evita cinco mensagens depois. Envie sempre:

1. Data, cidade e nome do local
2. Horário de chegada, passagem de som e início
3. Duração e repertório
4. Valor do cachê e forma de pagamento
5. Quem leva equipamento e o que a casa fornece
6. Dress code, se houver

## 3. Confirme 48 horas antes

Regra simples: quem não confirma em 48 horas perde a vaga para o substituto. Isso não é rigidez, é produção.

## 4. Combine o pagamento com data

O freelancer precisa saber se recebe no dia, em 7 dias ou quando o contratante pagar. Falar isso antes elimina 90% dos conflitos.

## 5. Registre tudo em um só lugar

Grupo de WhatsApp é bom para conversar, mas péssimo para registrar. O que foi combinado se perde no meio das mensagens.

No SouArtista, cada show tem sua equipe cadastrada, com o valor de cada músico e o status do pagamento. O app calcula o quanto sobra para você depois de pagar todo mundo, e o músico freelancer tem um modo próprio com o painel dos shows dele.

## Checklist rápido de produção do show

- [ ] Equipe convocada e confirmada
- [ ] Valores combinados por escrito
- [ ] Rider e mapa de palco enviados à casa
- [ ] Transporte e equipamento resolvidos
- [ ] Horários confirmados com o contratante
- [ ] Pagamento da equipe agendado

## Perguntas frequentes

**Quanto pagar a um músico de apoio?** Depende da praça e da complexidade do repertório; mantenha um valor de referência por função e ajuste pela distância.

**Vale contratar sempre os mesmos?** Sim. Equipe recorrente ensaia menos e erra menos — e o custo por show tende a cair.
    `.trim(),
  },
  {
    slug: 'contrato-de-show-o-que-nao-pode-faltar',
    title: 'Contrato de show: 10 cláusulas que não podem faltar',
    excerpt: 'Do sinal de pagamento à cláusula de chuva: o que todo contrato de apresentação musical precisa ter para proteger o artista.',
    category: 'carreira',
    categoryLabel: 'Carreira',
    publishedAt: '2026-08-07',
    readingTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=450&fit=crop',
    content: `
Contrato não é desconfiança: é a forma de garantir que artista e contratante estejam combinando a mesma coisa. E é o que salva o cachê quando algo dá errado.

## As 10 cláusulas essenciais

### 1. Identificação das partes
Nome completo, CPF/CNPJ e endereço do artista e do contratante. Sem isso, o documento vale pouco.

### 2. Data, local e horários
Data da apresentação, endereço completo, horário de chegada, passagem de som, início e término.

### 3. Duração e formato
Quantos minutos, quantos sets, intervalos e formação (solo, duo, banda completa).

### 4. Valor e forma de pagamento
Valor total, se é bruto ou líquido, meio de pagamento e data. Especifique quem arca com impostos.

### 5. Sinal de reserva
O padrão do mercado é 30% a 50% na assinatura, com o restante no dia. O sinal é o que protege sua agenda.

### 6. Multa por cancelamento
Defina prazos: cancelou com menos de X dias, o sinal fica retido; cancelou na véspera, multa integral.

### 7. Obrigações do contratante
Som, luz, energia, palco coberto, camarim, água, alimentação e segurança. Anexe o rider técnico ao contrato.

### 8. Cláusula de força maior (chuva, interdição)
O que acontece se o evento não puder ocorrer por caso fortuito: remarcação em até X dias ou devolução parcial.

### 9. Imagem e divulgação
Autorização (ou não) para gravar, transmitir e usar imagens do show, e uso do nome/logo do artista na divulgação.

### 10. Foro e assinatura
Cidade para resolução de conflitos e assinatura das duas partes (assinatura eletrônica já é aceita).

## Erros comuns

- Fechar show só por mensagem, sem valor por escrito
- Não pedir sinal em evento particular
- Aceitar "a gente acerta no dia"
- Enviar o rider depois do contrato assinado

## Modelos prontos no SouArtista

O SouArtista traz contratos prontos e personalizáveis para bares, eventos privados e shows maiores. Você preenche os dados do evento, gera o documento e envia ao contratante — tudo ligado ao mesmo show que já está na sua agenda, com o cachê e o status de pagamento.

## Perguntas frequentes

**Contrato por WhatsApp vale?** Uma conversa pode servir como indício, mas um documento assinado é infinitamente mais seguro.

**Preciso de advogado?** Para shows comuns, um modelo bem feito resolve; para turnês e contratos grandes, procure orientação jurídica.
    `.trim(),
  },
  {
    slug: 'rider-tecnico-e-mapa-de-palco-como-montar',
    title: 'Rider técnico e mapa de palco: como montar o seu (com exemplo)',
    excerpt: 'O documento que evita passagem de som caótica. Aprenda a listar canais, monitores, energia e desenhar o stage plot da sua banda.',
    category: 'dicas-praticas',
    categoryLabel: 'Dicas Práticas',
    publishedAt: '2026-08-08',
    readingTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=450&fit=crop',
    content: `
Show atrasado quase sempre começa com passagem de som improvisada. O rider técnico e o mapa de palco resolvem isso: o técnico da casa já chega sabendo o que você precisa.

## O que é rider técnico

É a lista do que a sua apresentação exige da produção local: canais de som, monitores, microfones, pedestais, energia e backline.

## O que é mapa de palco (stage plot)

É o desenho de onde cada músico e equipamento fica no palco, com a posição dos monitores e das tomadas.

## Modelo de rider (banda de 4)

**Input list**

| Canal | Fonte | Microfone / DI |
| --- | --- | --- |
| 1 | Bumbo | Mic de bumbo |
| 2 | Caixa | Mic dinâmico |
| 3-4 | Overheads | Condensador (par) |
| 5 | Baixo | DI |
| 6 | Guitarra | Mic dinâmico no amp |
| 7 | Teclado L | DI |
| 8 | Teclado R | DI |
| 9 | Voz principal | Mic dinâmico |
| 10 | Backing vocal | Mic dinâmico |

**Monitoração:** 4 vias de monitor (voz, guitarra, baixo, bateria) ou in-ear próprio.

**Energia:** 4 pontos de 110/220V estabilizados no palco, com extensões.

**Backline solicitado:** amplificador de baixo, amplificador de guitarra, bateria completa com pratos do músico.

## Regras para o rider funcionar

1. **Seja realista.** Rider impossível de atender é rider ignorado.
2. **Separe "essencial" de "desejável".** A casa precisa saber o que é inegociável.
3. **Envie junto com o contrato**, não na véspera.
4. **Atualize a cada mudança de formação.**
5. **Leve uma cópia impressa** no dia.

## No SouArtista

Você monta o rider técnico e o mapa de palco dentro do app, vincula ao show da agenda e envia ao contratante em PDF. Se a formação muda, você ajusta e reenvia — sem refazer o documento do zero a cada evento.

## Perguntas frequentes

**Banda pequena precisa de rider?** Sim. Até um duo economiza uma hora de passagem de som com uma input list simples.

**E se a casa não tiver o que peço?** Por isso o rider vai antes: dá tempo de alugar, adaptar ou levar o próprio equipamento.
    `.trim(),
  },
  {
    slug: 'quanto-cobrar-por-show-como-definir-seu-cache',
    title: 'Quanto cobrar por show: como definir seu cachê sem chutar',
    excerpt: 'A conta que todo músico deveria fazer antes de dar um valor: custo real, hora trabalhada, deslocamento e margem de lucro.',
    category: 'gestao-financeira',
    categoryLabel: 'Gestão Financeira',
    publishedAt: '2026-08-09',
    readingTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450&fit=crop',
    content: `
"Quanto você cobra?" é a pergunta que mais trava músico bom. Quem chuta um número costuma errar para baixo — e descobre no fim do mês que trabalhou muito e sobrou pouco.

## Passo 1: conte as horas reais do show

Um show de 2 horas custa muito mais do que 2 horas:

- Ensaio e preparação de repertório
- Deslocamento (ida e volta)
- Montagem e passagem de som
- Apresentação
- Desmontagem
- Trabalho administrativo (contrato, cobrança)

Um show "de 2 horas" facilmente consome 8 horas do seu dia.

## Passo 2: some os custos diretos

Combustível, pedágio, estacionamento, alimentação, cordas/baquetas, manutenção de equipamento, transporte, hospedagem e cachê da equipe.

## Passo 3: defina o quanto vale a sua hora

Some quanto você precisa ganhar por mês para viver e divida pelo número de horas que consegue trabalhar. Esse é seu piso, não seu preço.

## Passo 4: monte o preço

\`\`\`
Cachê = (horas reais x valor da sua hora)
      + custos diretos
      + cachê da equipe
      + margem (20% a 30%)
      + impostos
\`\`\`

## Passo 5: ajuste pelo contexto

Cobre mais em: casamentos e eventos corporativos, datas disputadas (fim de ano, feriados), repertório personalizado, distâncias longas, exigência de nota fiscal.

Cobre menos (com critério) em: shows que abrem portas reais, casas que dão sequência de datas, projetos autorais próprios.

## Erros clássicos

- Dar preço na hora, sem calcular
- Não cobrar o deslocamento
- Esquecer o custo da equipe
- Aceitar "couvert" sem mínimo garantido
- Baixar o preço sem reduzir a entrega

## Simule antes de responder

O SouArtista tem um simulador financeiro: você lança o valor proposto, as despesas, a equipe e o regime tributário e vê o **lucro real** daquele show antes de dizer sim. Depois de alguns meses, os relatórios mostram quais locais e quais tipos de evento realmente pagam melhor.

## Perguntas frequentes

**Devo publicar minha tabela de preços?** Um valor "a partir de" filtra curiosos sem engessar negociações.

**Posso dar desconto?** Sim — em troca de algo: mais datas, pagamento antecipado, divulgação garantida.
    `.trim(),
  },
  {
    slug: 'agenda-de-shows-para-banda-como-organizar',
    title: 'Agenda de shows para banda: como organizar datas, equipe e cachês',
    excerpt: 'Grupo de WhatsApp não é agenda. Veja como centralizar as datas da banda e ligar cada show ao cachê, à equipe e às despesas.',
    category: 'dicas-praticas',
    categoryLabel: 'Dicas Práticas',
    publishedAt: '2026-08-10',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&h=450&fit=crop',
    content: `
Toda banda começa com a agenda na cabeça de uma pessoa. Funciona até o dia em que essa pessoa viaja, o celular quebra ou dois shows caem na mesma data.

## Os três problemas da agenda improvisada

1. **Data duplicada.** Alguém confirma um show sem ver que já existia outro.
2. **Informação espalhada.** Horário no WhatsApp, valor no áudio, endereço no e-mail.
3. **Agenda sem dinheiro.** Você sabe que tem show, mas não sabe se ele dá lucro.

## O que uma agenda de banda precisa ter

- Data, horário e local completos
- Status do show: proposta, confirmado, realizado, cancelado
- Cachê combinado e quem paga
- Equipe escalada para aquela data
- Despesas previstas (transporte, som, alimentação)
- Status do pagamento: pendente ou recebido
- Lembretes automáticos para todo mundo

## Rotina semanal que funciona

- **Segunda:** revisar os shows da semana e confirmar equipe
- **Quarta:** enviar rider/contrato dos próximos eventos
- **Sexta:** conferir cachês pendentes e cobrar atrasados
- **Domingo:** lançar despesas dos shows do fim de semana

## Por que a agenda tem que falar com o financeiro

Uma data no calendário não responde a pergunta mais importante: *esse show valeu a pena?* Quando o cachê, as despesas e o pagamento da equipe estão ligados ao evento, você passa a decidir com número na mão qual convite aceitar.

É exatamente isso que o SouArtista faz: **agenda de shows + bolso no mesmo lugar**. Cada evento mostra o cachê, as despesas, quem toca, quanto cada um recebe e o lucro líquido real — com notificações antes de cada compromisso.

## Perguntas frequentes

**Dá para usar o Google Agenda?** Dá para as datas, mas ele não calcula cachê, despesa nem lucro.

**A banda inteira precisa usar o app?** O líder ou produtor centraliza os shows; os músicos de apoio acompanham as próprias datas e pagamentos.
    `.trim(),
  },
  {
    slug: 'musico-mei-ou-pessoa-fisica',
    title: 'Músico MEI ou pessoa física: qual compensa mais?',
    excerpt: 'Comparação prática entre tocar como pessoa física e abrir MEI: imposto, acesso a contratos, aposentadoria e burocracia.',
    category: 'gestao-financeira',
    categoryLabel: 'Gestão Financeira',
    publishedAt: '2026-08-11',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=450&fit=crop',
    content: `
Essa dúvida aparece quando o músico começa a receber com regularidade. A resposta depende de três coisas: quantos shows você faz, quem te contrata e se você quer contribuir para a aposentadoria.

> Conteúdo informativo. Confirme sua situação com um contador.

## Pessoa física

**Faz sentido quando:** você toca esporadicamente, recebe em dinheiro ou Pix de bares e festas particulares e ninguém te pede nota.

- Sem custo fixo mensal
- Sem obrigações declaratórias de empresa
- Mas: não emite nota de serviço com facilidade
- E: quando o contratante é empresa, os descontos de RPA pesam
- Além disso: sem contribuição, não há tempo contado para o INSS

## MEI

**Faz sentido quando:** você toca com frequência, recebe de empresas, prefeituras ou produtoras, ou quer profissionalizar a carreira.

- Emite nota fiscal de serviço
- Imposto mensal fixo, geralmente muito menor que os descontos de RPA
- Conta como contribuição ao INSS
- Facilita conta bancária PJ, maquininha com taxa menor e crédito
- Exige acompanhar o limite anual de faturamento e a declaração anual

## Comparação rápida

| Critério | Pessoa física | MEI |
| --- | --- | --- |
| Emitir nota | Difícil | Sim |
| Custo fixo | Nenhum | Mensalidade baixa |
| Carga em contrato com empresa | Alta (RPA) | Baixa |
| Aposentadoria | Não conta | Conta |
| Contratos públicos | Restrito | Acessível |
| Burocracia | Mínima | Pequena |

## O sinal de que chegou a hora de virar MEI

- Você recusou (ou quase recusou) um show por não ter nota
- Seus recebimentos já são mensais e constantes
- Você quer contar tempo de contribuição
- Você negocia com empresas e produtoras

## Acompanhe seus números antes de decidir

Só dá para escolher com segurança se você souber quanto fatura por mês. No SouArtista, cada show registrado alimenta relatórios com faturamento, despesas e lucro — o material exato que o contador pede para orientar a melhor forma de tributação.

## Perguntas frequentes

**Posso ter MEI e emprego com carteira?** Em regra sim, com pontos de atenção; confirme com um contador.

**E se eu estourar o teto do MEI?** Migra-se para ME no Simples Nacional; por isso acompanhar o faturamento mês a mês é essencial.
    `.trim(),
  },
  {
    slug: 'como-receber-cache-sem-calote',
    title: 'Como receber o cachê sem tomar calote: checklist do artista',
    excerpt: 'Sinal, contrato, comprovante e cobrança educada: o processo completo para não ficar no prejuízo depois do show.',
    category: 'gestao-financeira',
    categoryLabel: 'Gestão Financeira',
    publishedAt: '2026-08-12',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&h=450&fit=crop',
    content: `
Calote raramente começa no dia do pagamento. Ele começa no jeito como o show foi fechado. Um processo simples elimina quase todo o risco.

## Antes do show

**1. Peça sinal.** 30% a 50% na reserva da data. Quem não paga sinal, muitas vezes também não paga o resto.

**2. Coloque no papel.** Valor, data, horário, forma e prazo de pagamento.

**3. Confirme quem paga.** O bar? O produtor? A empresa? Anote o nome, o CPF/CNPJ e o telefone do responsável financeiro.

**4. Defina o meio.** Pix na hora, transferência em até X dias, depósito com comprovante.

## No dia do show

- Reconfirme o pagamento com o responsável **antes** de subir ao palco
- Se o combinado é pagar no dia, receba antes do fim do evento
- Guarde o comprovante na hora
- Registre no app se ficou pendente

## Depois do show

**Cobrança em três tempos, sempre educada:**

1. **D+1:** agradeça o show e lembre o valor e o prazo.
2. **No vencimento:** mensagem objetiva com o valor e a chave Pix.
3. **D+3 do vencimento:** informe que, sem retorno, o contrato prevê as medidas cabíveis.

Tom profissional resolve mais do que cobrança agressiva — e preserva a praça.

## Sinais de alerta

- Recusa de qualquer documento por escrito
- "A gente acerta depois do evento" sem prazo
- Contratante que não se identifica com nome e CPF/CNPJ
- Histórico ruim com outros músicos da cidade (pergunte!)

## Controle o que está em aberto

No SouArtista, cada show tem status **Pendente** ou **Recebido**, o painel mostra o total em aberto e o app envia lembretes semanais dos cachês não pagos. Você para de descobrir o esquecimento três meses depois.

## Perguntas frequentes

**Devo tocar se o sinal não foi pago?** Cada caso é um caso, mas trate a ausência de sinal como risco real e reavalie a data.

**Vale cobrar juros de atraso?** Se estiver previsto em contrato, sim — e deixe isso claro desde o início.
    `.trim(),
  },
  {
    slug: 'controle-de-despesas-de-turne-e-viagem',
    title: 'Controle de despesas de turnê: o guia para não voltar no prejuízo',
    excerpt: 'Combustível, pedágio, hospedagem, alimentação e frete: como registrar cada custo da estrada e descobrir o lucro real da turnê.',
    category: 'gestao-financeira',
    categoryLabel: 'Gestão Financeira',
    publishedAt: '2026-08-13',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?w=800&h=450&fit=crop',
    content: `
Turnê é o teste mais duro da gestão financeira de um artista. O cachê parece alto, mas a estrada come o dinheiro em pequenas parcelas que ninguém anota.

## As despesas que mais escapam

- Combustível de ida **e** volta
- Pedágios (muitas vezes o custo dobra no retorno)
- Estacionamento e lavagem do veículo
- Alimentação da equipe, incluindo paradas de estrada
- Hospedagem e taxas de check-in tardio
- Frete e seguro de equipamento
- Manutenção do veículo proporcional à quilometragem
- Cordas, peles, baquetas, cabos reserva
- Diárias do técnico e do roadie

## A conta do custo por quilômetro

\`\`\`
Custo por km = (preço do litro / consumo do veículo) + desgaste estimado
Custo da viagem = custo por km x km totais (ida e volta)
\`\`\`

Inclua o desgaste: pneu, óleo e revisão são custos reais do show, mesmo pagos depois.

## Regra de ouro: registre no mesmo dia

Nota fiscal de posto vira bolinha de papel. Anote o valor na hora, ainda no carro. Um gasto não registrado é lucro imaginário.

## Feche a turnê com números

Ao fim da estrada, compare:

| Item | Valor |
| --- | --- |
| Total de cachês | R$ |
| Locomoção | R$ |
| Hospedagem e alimentação | R$ |
| Pagamento da equipe | R$ |
| Impostos | R$ |
| **Lucro líquido** | **R$** |

Foi essa conta, e não o valor do cachê, que definiu se a turnê valeu a pena.

## Como o SouArtista resolve

Cada show recebe suas despesas, inclusive locomoção por quilometragem. O app soma tudo, calcula o lucro líquido por evento e gera relatórios por período — inclusive em PDF, para dividir com a banda ou com o contador. Os rankings mostram quais cidades e casas realmente dão retorno, para você montar a próxima rota com base em dados.

## Perguntas frequentes

**Devo cobrar deslocamento à parte?** Sim, sempre que o show exigir viagem: ou embutido no cachê, ou como ajuda de custo.

**Como dividir despesas na banda?** Defina antes se saem do bruto (antes da divisão) ou de cada membro — e registre por escrito.
    `.trim(),
  },
];

export type BlogCategory = 'all' | 'gestao-financeira' | 'carreira' | 'dicas-praticas' | 'novidades';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  categoryLabel: string;
  publishedAt: string;
  readingTime: number;
  coverImage: string;
  content: string;
}

export const categoryColors: Record<BlogCategory, string> = {
  'all': 'bg-muted text-muted-foreground',
  'gestao-financeira': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'carreira': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'dicas-praticas': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'novidades': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
};

export const categoryLabels: Record<BlogCategory, string> = {
  'all': 'Todos',
  'gestao-financeira': 'Gestão Financeira',
  'carreira': 'Carreira',
  'dicas-praticas': 'Dicas Práticas',
  'novidades': 'Novidades',
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'souartista-agenda-de-shows-mais-completa-brasil',
    title: 'SouArtista: a agenda de shows mais completa do Brasil',
    excerpt: 'Conheça o aplicativo nacional mais equilibrado do mercado: agenda de shows conectada ao controle financeiro, para músicos, cantores, DJs e bandas.',
    category: 'dicas-praticas',
    categoryLabel: 'Dicas Práticas',
    publishedAt: '2026-07-29',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&h=450&fit=crop',
    content: `
Se você vive de música, sabe que organizar shows vai muito além de anotar datas numa agenda. Você precisa saber quanto vai ganhar, quanto vai gastar, quanto sobra de lucro e ainda lembrar de todos os compromissos. O SouArtista nasceu exatamente para isso: ser a **agenda de shows mais completa do Brasil** — e também cuidar do seu bolso.

## A Solução Mais Completa: Agenda + Bolso

O SouArtista funciona como uma **agenda central de shows** onde você marca datas, horários e locais. Mas a diferença é que cada evento na agenda é conectado ao controle financeiro.

Você insere o cachê do dia e o app calcula automaticamente:

- Despesas de combustível, pedágios e hospedagem
- Comissões e custos extras do show
- Pagamento dos músicos de apoio
- Impostos e descontos (ISS, INSS, IRRF)
- **Lucro líquido real do show**, direto no calendário

Enquanto outras agendas só lembram o compromisso, o SouArtista mostra se aquele show vale a pena financeiramente.

## Por que ele é a melhor agenda de shows para músicos

### 1. Tudo em um só lugar

Shows, ensaios, eventos, cachês, despesas, equipe e relatórios. Sem precisar alternar entre planilha, Google Agenda e caderninho.

### 2. Notificações inteligentes

O app avisa com 7 dias, 1 dia, 3 horas e 30 minutos de antecedência. Você nunca mais esquece um show, passagem de som ou ensaio.

### 3. Controle de cachês pendentes

Cada show tem um badge de status: **Pendente** ou **Recebido**. O Dashboard mostra o total em aberto e envia lembretes automáticos.

### 4. Cálculo automático de lucro líquido

Cadastrou o show, a equipe e as despesas? O SouArtista calcula sozinho quanto realmente sobra no seu bolso.

### 5. Funciona offline

No Modo Palco e no Modo Offline, seus dados ficam disponíveis mesmo sem internet. Ideal para shows em locais com sinal ruim.

## Comparativo: SouArtista vs Google Agenda vs Excel

| Recurso | Google Agenda | Excel/Planilha | SouArtista |
|---|---|---|---|
| Marcar data/hora | ✅ | ✅ | ✅ |
| Cachê vinculado ao evento | ❌ | Manual | ✅ Automático |
| Calcular lucro líquido | ❌ | Manual | ✅ Automático |
| Notificações inteligentes | Básico | ❌ | ✅ 5 lembretes |
| Controle de cachê pendente | ❌ | Manual | ✅ Com notificações |
| Relatórios financeiros | ❌ | Manual | ✅ Automáticos |
| App nativo iOS/Android | ✅ App genérico | ❌ | ✅ Sim |
| Modo offline | ❌ | ❌ | ✅ Sim |

## Para quem é o SouArtista

- Músicos, cantores e cantoras
- DJs e produtores musicais
- Bandas e duplas sertanejas
- Artistas freelancers que recebem cachê
- Qualquer profissional que vive de música

## Conclusão

Se você quer uma agenda de shows que só avisa compromissos, qualquer calendário genérico serve. Mas se você quer uma **agenda de shows completa**, que também calcula lucro, controla despesas, gerencia equipe e ainda funciona offline, o SouArtista é a escolha.

**Baixe agora** e transforme sua agenda em uma verdadeira ferramenta de gestão da sua carreira musical.
    `.trim(),
  },
  {
    slug: 'como-gerenciar-caches-de-banda-de-forma-profissional',
    title: 'Como gerenciar cachês de banda de forma profissional',
    excerpt: 'Aprenda o passo a passo para organizar os pagamentos da sua banda, dividir cachês com justiça e nunca mais ter dor de cabeça financeira com seus músicos.',
    category: 'gestao-financeira',
    categoryLabel: 'Gestão Financeira',
    publishedAt: '2026-03-10',
    readingTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=450&fit=crop',
    content: `
Você fecha um show de R$ 5.000 com a banda. Ótimo. Mas aí vem a pergunta: quanto pagar cada músico? Como dividir de forma justa? E como controlar se todo mundo já recebeu?

## O problema da divisão de cachês

A maioria dos líderes de banda faz a divisão "de cabeça" ou numa planilha improvisada. O resultado? Confusão, esquecimentos e, às vezes, desentendimentos com músicos que são seus parceiros de palco.

## O método profissional com o SouArtista

### 1. Cadastre sua equipe

No app, você cria seu "Banco de Músicos" com:
- Nome e instrumento de cada integrante
- Cachê padrão (valor fixo ou porcentagem do show)
- Dados para pagamento

### 2. Associe músicos ao show

Ao cadastrar um show, selecione quem vai tocar. O app calcula automaticamente:
- Custo total da banda
- Seu lucro líquido (cachê bruto - músicos - despesas)
- Divisão individual de cada músico

### 3. Controle o status de pagamento

Cada músico tem um badge de status: **Pendente** (amarelo) ou **Recebido** (verde). Com um toque, você atualiza. No Dashboard, o card "Cachê Pendente" mostra o total em aberto.

### 4. Notificações automáticas

Músicos com cachês pendentes recebem lembretes semanais automáticos. Assim, ninguém precisa ficar cobrando ninguém.

## Exemplo prático

Show de R$ 5.000:
- Guitarrista: R$ 600 (fixo)
- Baixista: R$ 600 (fixo)
- Baterista: R$ 700 (fixo)
- Despesas do show: R$ 800
- **Seu lucro líquido: R$ 2.300**

Tudo calculado automaticamente. Sem planilha, sem erro.

## Por que usar um app em vez de planilha?

- Cálculos automáticos (sem fórmulas quebradas)
- Histórico organizado por show
- Notificações de pagamento
- Relatórios de quanto cada músico custou no mês/ano
- Acesso no celular, na hora do show

## Conclusão

Gerenciar cachês de banda de forma profissional não é luxo — é respeito com quem toca com você e com a sua própria carreira. O SouArtista automatiza tudo isso pra você focar no que importa: a música.
    `.trim(),
  },
  {
    slug: 'melhor-agenda-de-shows-para-musicos-independentes-2026',
    title: 'Melhor agenda de shows para músicos independentes em 2026',
    excerpt: 'Comparamos as opções de agenda disponíveis para músicos e mostramos por que uma ferramenta especializada faz toda a diferença na organização da carreira.',
    category: 'dicas-praticas',
    categoryLabel: 'Dicas Práticas',
    publishedAt: '2026-03-08',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&h=450&fit=crop',
    content: `
Se você é músico independente em 2026, sabe que organizar shows vai muito além de anotar datas num calendário. Você precisa de uma ferramenta que entenda sua realidade: cachês, passagem de som, músicos contratados, despesas de locomoção...

## O que uma agenda de shows precisa ter

Uma agenda genérica (Google Agenda, Apple Calendar) serve pra marcar compromissos. Mas músico precisa de mais:

- **Valor do cachê** vinculado ao evento
- **Músicos escalados** para aquele show
- **Despesas** associadas (van, alimentação, hospedagem)
- **Lucro líquido** calculado automaticamente
- **Notificações inteligentes** (7 dias, 1 dia, 3h e 30min antes)
- **Histórico** de shows por local, por período, por faturamento

## Google Agenda vs Excel vs SouArtista

| Recurso | Google Agenda | Excel/Planilha | SouArtista |
|---------|:---:|:---:|:---:|
| Marcar data/hora | ✅ | ✅ | ✅ |
| Cachê vinculado | ❌ | Manual | ✅ Automático |
| Escalar músicos | ❌ | Manual | ✅ Automático |
| Calcular lucro | ❌ | Manual | ✅ Automático |
| Notificações inteligentes | Básico | ❌ | ✅ 5 lembretes |
| Relatórios financeiros | ❌ | Manual | ✅ Automático |
| Mobile nativo | ✅ | ❌ | ✅ iOS + Android |
| Controle de cachê pendente | ❌ | Manual | ✅ Com notificações |

## Por que músicos independentes precisam de mais

Quando você tem 15 shows no mês com 3 bandas diferentes, cada uma com músicos e cachês diferentes, uma agenda genérica simplesmente não dá conta. Você precisa:

1. **Saber quanto vai faturar no mês** antes dele começar
2. **Ver quais shows já foram pagos** e quais estão pendentes
3. **Comparar faturamento** entre meses e períodos
4. **Identificar quais locais** pagam melhor e dão mais retorno

## O SouArtista como agenda profissional

O SouArtista foi construído por músicos que viviam exatamente essa dor. Cada show registrado se transforma em dado financeiro. No fim do mês, você não só sabe onde tocou — sabe quanto ganhou, quanto gastou e quanto sobrou.

## Funcionalidades exclusivas para 2026

- Contratos prontos para diferentes tipos de evento
- Rider técnico e mapa de palco (stage plot)
- Gestão de cachês com badge de status (Pendente/Recebido)
- Notificações semanais de cachês pendentes
- Simulador de nota fiscal (MEI, CNPJ, RPA)

## Conclusão

Em 2026, usar planilha ou agenda genérica para gerenciar shows é como usar GPS de papel numa era de Waze. O SouArtista é a agenda que entende que show não é só data — é negócio.
    `.trim(),
  },
  {
    slug: 'planilha-vs-app-souartista-qual-melhor-controle-financeiro',
    title: 'Planilha de música vs App SouArtista: qual o melhor para controle financeiro?',
    excerpt: 'Comparação honesta entre usar planilhas (Excel/Google Sheets) e o app SouArtista para gerenciar finanças da carreira musical. Descubra qual faz mais sentido pra você.',
    category: 'gestao-financeira',
    categoryLabel: 'Gestão Financeira',
    publishedAt: '2026-03-05',
    readingTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    content: `
"Eu já tenho minha planilha e funciona." Essa é a frase mais comum que ouvimos de músicos. E a verdade é: planilha funciona... até o dia que não funciona mais.

## A realidade da planilha do músico

Vamos ser honestos: a maioria das planilhas de músicos tem:
- Fórmulas quebradas que ninguém sabe consertar
- Dados desatualizados (quem lembra de atualizar no computador depois do show?)
- Zero visão de lucro real (cachê bruto ≠ lucro)
- Nenhum controle de quem já recebeu o cachê

## Comparação lado a lado

### 📝 Registro de shows

**Planilha:** Abrir computador → abrir arquivo → encontrar a aba certa → preencher → salvar. Tempo: 5-10 min.

**SouArtista:** Abrir app no celular → "Novo Show" → preencher → salvar. Tempo: 1 min.

### 💰 Cálculo de lucro

**Planilha:** Criar fórmulas para subtrair cachê dos músicos, despesas, locomoção... torcer pra não quebrar.

**SouArtista:** Automático. Cadastrou o show, adicionou músicos e despesas? O app calcula receita bruta, custos e lucro líquido sozinho.

### 👥 Gestão de banda

**Planilha:** Criar aba separada pra cada músico, copiar valores manualmente, somar no final do mês...

**SouArtista:** Banco de Músicos com cachê padrão. Selecionou pro show? Calculado. Badge de pagamento (Pendente/Recebido) com um toque.

### 📊 Relatórios

**Planilha:** Criar gráficos manualmente, configurar tabelas dinâmicas, atualizar mês a mês...

**SouArtista:** Relatórios automáticos com filtro por período, rankings de locais mais lucrativos, top músicos, categorias de despesas.

### 📱 Mobilidade

**Planilha:** Precisa do computador ou de internet boa pra abrir no celular (e a formatação quebra).

**SouArtista:** App nativo iOS e Android + versão web. Funciona onde você estiver.

### 🔔 Lembretes e notificações

**Planilha:** Zero. Você precisa abrir e lembrar.

**SouArtista:** 5 lembretes automáticos antes de cada show + notificações semanais de cachês pendentes.

## Quando a planilha faz sentido

Sendo justo: planilha faz sentido se você:
- Faz menos de 3 shows por mês
- Toca sozinho (sem banda)
- Gosta de criar fórmulas e tem disciplina pra atualizar
- Não precisa de relatórios ou controle de pagamentos

## Quando o SouArtista é a escolha certa

O app é pra quem:
- Faz 4+ shows por mês
- Tem banda ou trabalha com múltiplos músicos
- Quer saber o lucro real de cada show
- Precisa controlar cachês pendentes
- Quer relatórios sem esforço
- Prefere resolver tudo pelo celular

## O custo real

"Mas o app custa R$ 29,90/mês e a planilha é grátis!"

Verdade. Mas quanto tempo você gasta por mês atualizando sua planilha? Se são 2 horas por mês, e sua hora vale R$ 50... você está "economizando" R$ 29,90 e gastando R$ 100 em tempo.

## Conclusão

Planilha não é inimiga — ela foi sua aliada até aqui. Mas quando sua carreira cresce, você precisa de uma ferramenta que cresça junto. O SouArtista foi feito por quem vivia de planilha e cansou.
    `.trim(),
  },
  {
    slug: 'por-que-musicos-precisam-controle-financeiro',
    title: 'Por que músicos precisam de controle financeiro (e como começar hoje)',
    excerpt: 'Descubra por que a maioria dos músicos não sabe quanto realmente ganha e como mudar isso em poucos minutos.',
    category: 'gestao-financeira',
    categoryLabel: 'Gestão Financeira',
    publishedAt: '2024-01-15',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=450&fit=crop',
    content: `
Você já parou pra calcular quanto realmente sobrou no bolso depois daquele show de R$ 2.000? Depois de pagar o som, a van, os músicos, a comissão... quanto ficou pra você?

## A realidade que ninguém fala

A maioria dos músicos vive no escuro financeiro. Sabe que trabalhou muito, sabe que tocou bastante, mas no fim do mês não entende por que o dinheiro não sobra. Isso acontece porque a gente foi treinado pra ser artista, não contador.

## O problema não é ganhar pouco, é não saber pra onde vai

Quando você não registra seus cachês e despesas, fica impossível:

- Saber se um show realmente vale a pena
- Negociar cachês justos
- Planejar investimentos na carreira
- Entender quais casas de show são mais lucrativas

## Como o SouArtista resolve isso

Com o app, você registra cada show em menos de 1 minuto. Coloca o cachê, as despesas, quem tocou com você, e pronto: o app calcula automaticamente seu lucro real. No fim do mês, você tem um relatório completo mostrando:

- Quanto você faturou
- Quanto gastou (e com o quê)
- Qual foi seu lucro líquido
- Quais foram seus melhores shows

## Comece hoje, não amanhã

Não precisa voltar no tempo e registrar tudo. Comece pelo próximo show. Um registro de cada vez. Em 3 meses, você vai ter clareza total sobre sua carreira financeira.
    `.trim(),
  },
  {
    slug: 'como-nunca-mais-esquecer-um-show',
    title: 'Como nunca mais esquecer um show (mesmo com a agenda lotada)',
    excerpt: 'Sistema de lembretes inteligentes que avisa você na hora certa, do jeito certo.',
    category: 'dicas-praticas',
    categoryLabel: 'Dicas Práticas',
    publishedAt: '2024-01-10',
    readingTime: 4,
    coverImage: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=450&fit=crop',
    content: `
Já aconteceu de você quase perder um show por esquecimento? Ou chegar em cima da hora porque não lembrou do horário de passagem de som? Você não está sozinho.

## A vida de músico é caótica (e tá tudo bem)

Entre ensaios, shows, gravações, aulas e a vida pessoal, é humanamente impossível lembrar de tudo. O problema é que esquecer um show pode custar sua reputação - e reputação é tudo nesse meio.

## O sistema de notificações do SouArtista

Quando você cadastra um show no app, ele automaticamente agenda lembretes pra você:

- **7 dias antes:** "Semana que vem você tem show no [local]" - tempo de confirmar músicos e preparar repertório
- **1 dia antes:** "Amanhã tem show!" - tempo de separar equipamentos
- **No dia:** "Hoje é dia de show às [horário]" - pra você já acordar ligado
- **3 horas antes:** "Seu show é em 3 horas" - hora de começar a se arrumar
- **30 minutos antes:** "Falta meia hora!" - último lembrete antes de entrar no palco

## Você escolhe o que receber

Nem todo mundo precisa de 5 lembretes. Nas configurações, você ativa só os que fazem sentido pra sua rotina.

## Dica extra: compartilhe com sua banda

Se você é líder de banda, seus músicos também recebem as informações do show automaticamente. Todo mundo alinhado, sem precisar de grupo de WhatsApp lotado.
    `.trim(),
  },
  {
    slug: 'quanto-voce-realmente-ganha-guia-impostos-musicos',
    title: 'Quanto você realmente ganha? O guia definitivo de impostos para músicos',
    excerpt: 'Entenda a diferença entre RPA, MEI e CNPJ e descubra qual é melhor pro seu momento.',
    category: 'gestao-financeira',
    categoryLabel: 'Gestão Financeira',
    publishedAt: '2024-01-05',
    readingTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=450&fit=crop',
    content: `
Você fechou um show de R$ 5.000. Maravilha! Mas quanto disso vai pro seu bolso depois dos impostos? Se você não sabe responder, esse artigo é pra você.

## Os 3 caminhos tributários do músico

### 1. RPA (Recibo de Pagamento Autônomo)

- Sem CNPJ, a casa de show desconta na fonte
- Desconto pode chegar a 27,5% de IR + 11% de INSS
- Indicado pra quem faz poucos shows por mês

### 2. MEI (Microempreendedor Individual)

- Limite de R$ 81.000/ano (cerca de R$ 6.750/mês)
- Imposto fixo de aproximadamente R$ 70/mês
- Ótimo pra quem está começando a formalizar

### 3. CNPJ (Simples Nacional ou outros)

- Sem limite de faturamento
- Alíquota varia conforme receita
- Ideal pra quem fatura acima do limite do MEI

## O Simulador de Nota Fiscal do SouArtista

Pra você não precisar fazer conta de cabeça, o app tem um simulador. Você coloca:

- Valor bruto do cachê
- Tipo de recebimento (RPA, MEI ou CNPJ)
- Percentual de ISS da sua cidade

E ele mostra exatamente quanto vai sobrar líquido. Simples assim.

## Dica de ouro

Antes de negociar um cachê, simule! Às vezes um show de R$ 3.000 no MEI deixa mais dinheiro no bolso do que um de R$ 4.000 no RPA.
    `.trim(),
  },
  {
    slug: 'gasolina-pedagio-van-custos-locomocao',
    title: 'Gasolina, pedágio, van: como não perder dinheiro com locomoção',
    excerpt: 'Aprenda a registrar e calcular todos os custos de deslocamento pra saber se o show realmente vale a pena.',
    category: 'dicas-praticas',
    categoryLabel: 'Dicas Práticas',
    publishedAt: '2024-01-02',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=450&fit=crop',
    content: `
Aquele show no interior paga R$ 2.500. Parece ótimo, né? Mas quando você coloca na ponta do lápis: combustível, pedágio, alimentação na estrada, hospedagem... será que ainda vale?

## O custo invisível da locomoção

Locomoção é o gasto mais subestimado pelos músicos. A gente foca no cachê e esquece que:

- Cada km rodado tem custo (combustível + desgaste do carro)
- Pedágios de ida E volta
- Às vezes precisa de van ou ônibus
- Uber/táxi em shows locais também conta

## Como registrar no SouArtista

Pra cada show, você pode registrar o tipo de transporte:

- **Km rodado:** coloca a distância e o app calcula o custo (você define o valor por km)
- **Uber/Táxi:** valor exato da corrida
- **Van/Ônibus:** valor do frete dividido ou não
- **Avião:** passagens e taxas

## Relatório de locomoção

No fim do mês, você vê um gráfico mostrando quanto gastou com transporte. Isso ajuda a:

- Identificar se shows distantes valem a pena
- Negociar cachês maiores pra compensar deslocamento
- Decidir entre ir de carro próprio ou alugar van

## Dica prática

Crie uma regra pessoal: "Shows acima de 100km precisam pagar no mínimo R$ X a mais pra compensar". O app te dá os dados pra você criar essa regra.
    `.trim(),
  },
  {
    slug: 'sua-banda-organizada-gerenciar-musicos',
    title: 'Sua banda organizada: como gerenciar músicos sem dor de cabeça',
    excerpt: 'Cadastre sua equipe, defina cachês e deixe o app calcular automaticamente quanto pagar cada um.',
    category: 'carreira',
    categoryLabel: 'Carreira',
    publishedAt: '2023-12-28',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450&fit=crop',
    content: `
Se você é líder de banda, sabe a dor: lembrar quanto cada músico cobra, calcular o pagamento de cada show, garantir que todo mundo recebeu... é quase um trabalho administrativo.

## O Banco de Músicos do SouArtista

Antes de mais nada, você cadastra todos os músicos que trabalham com você:

- Nome e contato
- Instrumento/função
- Cachê padrão (valor fixo ou porcentagem)
- Dados bancários pra pagamento (opcional)

## Na hora de cadastrar o show

Quando você registra um novo show, é só selecionar quem vai tocar. O app já puxa o cachê de cada um e calcula:

- Custo total da banda
- Quanto sobra pra você (líder)
- Divisão automática se for porcentagem

## Histórico de cada músico

Quer saber quantos shows o João fez com você esse ano? Quanto ele já recebeu no total? Tá tudo lá. Isso ajuda em:

- Negociações de cachê
- Declaração de imposto
- Planejamento de turnê

## Músicos também podem usar o app

Se o músico tiver o SouArtista instalado, ele pode ver os shows que tem com você, receber notificações e acompanhar seus próprios ganhos. Cada um no seu perfil, tudo organizado.
    `.trim(),
  },
  {
    slug: 'caos-clareza-relatorios-financeiros-carreira',
    title: 'Do caos à clareza: como relatórios financeiros mudam sua carreira',
    excerpt: 'Veja como transformar números em decisões inteligentes sobre sua carreira musical.',
    category: 'gestao-financeira',
    categoryLabel: 'Gestão Financeira',
    publishedAt: '2023-12-20',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    content: `
Imagina ter um raio-X completo da sua carreira musical. Saber exatamente: quais meses você mais fatura, quais casas de show dão mais lucro, quanto você gasta com cada categoria de despesa. Isso não é luxo de grande artista - é o que o SouArtista entrega pra você.

## Os relatórios que mudam tudo

### 📊 Visão geral financeira

- Faturamento total do período
- Despesas totais (separadas por categoria)
- Lucro líquido real
- Comparativo com períodos anteriores

### 🏆 Rankings que revelam a verdade

- Top 5 casas de show por lucratividade (não só por cachê!)
- Top músicos que mais tocaram com você
- Categorias de despesa que mais pesam

### 📈 Gráficos de evolução

- Mês a mês, veja sua evolução
- Identifique sazonalidades (meses fortes e fracos)
- Compare anos diferentes

## Decisões baseadas em dados

Com essas informações, você pode:

- Focar nas casas de show que realmente dão dinheiro
- Cortar despesas desnecessárias
- Negociar cachês com argumentos concretos
- Planejar meses de baixa com antecedência

## Exportar pra Excel ou PDF

Precisa mostrar pro contador? Quer analisar no computador? Exporte seus relatórios em PDF ou Excel com um clique (recurso Pro).
    `.trim(),
  },
  {
    slug: 'voce-nao-precisa-fazer-tudo-sozinho',
    title: 'Você não precisa fazer tudo sozinho: o poder de ter um app do seu lado',
    excerpt: 'Como o SouArtista foi criado por músicos, para músicos - e por que isso faz toda diferença.',
    category: 'carreira',
    categoryLabel: 'Carreira',
    publishedAt: '2023-12-15',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=450&fit=crop',
    content: `
Ser músico é viver vários papéis ao mesmo tempo: artista, produtor, motorista, contador, social media, negociador... É exaustivo. E a verdade é que a gente não foi treinado pra maioria dessas funções.

## A solidão do músico independente

Diferente de um funcionário CLT que tem RH, contador e departamento financeiro, o músico independente carrega tudo nas costas. E o pior: muitas vezes em silêncio, porque "reclamar não é profissional".

## Por que criamos o SouArtista

O SouArtista nasceu dessa dor. Músicos reais, cansados de planilhas confusas e apps genéricos que não entendiam a realidade da música. A gente queria algo que:

- Falasse a nossa língua (cachê, passagem de som, rider)
- Resolvesse problemas reais (quanto sobrou do show? quanto pagar o baixista?)
- Fosse rápido (registrar um show em menos de 1 minuto)
- Desse visibilidade (relatórios que fazem sentido)

## Você não está sozinho

Quando você usa o SouArtista, você tem:

- Uma ferramenta que entende sua rotina
- Lembretes que não te deixam esquecer compromissos
- Relatórios que mostram a verdade sobre sua carreira
- Suporte de quem realmente entende música

## Sua carreira merece atenção

Você dedica horas ensaiando, estudando, se apresentando. Dedique alguns minutos por semana pra organizar o lado business. Seu eu do futuro vai agradecer.
    `.trim(),
  },
  {
    slug: 'como-calcular-cache-de-musico-formula-exemplos',
    title: 'Como calcular o cachê de músico: fórmula, exemplos e erros comuns',
    excerpt: 'Aprenda a calcular seu cachê com uma fórmula simples que inclui custos, deslocamento e lucro. Com exemplos práticos e planilha de referência.',
    category: 'gestao-financeira',
    categoryLabel: 'Gestão Financeira',
    publishedAt: '2026-07-01',
    readingTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=450&fit=crop',
    content: `
**Resposta rápida:** para calcular seu cachê, some seus custos diretos do show (deslocamento, equipamento, músicos contratados), some o valor do seu tempo e experiência, adicione uma margem de lucro e nunca cobre abaixo do seu "piso" (o valor mínimo que faz o show valer a pena). A fórmula base é: **Cachê = Custos do show + (Horas trabalhadas × Valor da sua hora) + Margem de lucro.**

## Por que a maioria dos músicos erra o cachê

O erro mais comum é cobrar "por sentimento" ou copiar o que o colega cobra. O problema: o cachê que parece bom no WhatsApp pode virar prejuízo depois de descontar combustível, pedágio, o baixista que você contratou e as três horas de deslocamento. O cachê não é o que você recebe — é o que sobra depois dos custos.

## Passo 1 — Liste todos os custos do show

Antes de pensar em lucro, mapeie o que aquele show custa:

- **Deslocamento:** combustível (distância × consumo × preço do litro), pedágio, ou Uber/aplicativo.
- **Equipe:** cachê dos músicos que você contrata (se você é o artista/contratante).
- **Equipamento:** desgaste, aluguel de som, cordas, palhetas, transporte de instrumentos.
- **Tempo morto:** montagem, passagem de som, espera — não só o tempo no palco.

## Passo 2 — Defina o valor da sua hora

Some as horas reais do compromisso (deslocamento + montagem + show + retorno). Defina quanto vale sua hora com base na sua experiência e no mercado da sua região. Um músico iniciante em bar e um instrumentista requisitado em casamento não têm a mesma hora — e tudo bem.

## Passo 3 — Aplique a fórmula e a margem

> Cachê = Custos do show + (Horas × Valor da hora) + Margem de lucro (20% a 40%)

**Exemplo prático (músico solo em bar, outra cidade):**

- Combustível + pedágio: R$ 120
- Cordas/desgaste: R$ 30
- Horas totais (ida, show de 3h, volta): 7h × R$ 60 = R$ 420
- Subtotal: R$ 570
- Margem de 30%: R$ 171
- **Cachê sugerido: ~R$ 740**

Se o contratante ofereceu R$ 500, você agora sabe, com números, que está saindo no prejuízo — e pode negociar ou recusar com segurança.

## Passo 4 — Tenha um "piso" e nunca desça dele

Seu piso é o valor mínimo abaixo do qual o show não compensa. Defina isso uma vez e proteja. É o que separa o profissional do "faço por qualquer valor".

## O erro que come seu lucro: esquecer a locomoção

Shows fora da cidade parecem mais lucrativos pelo cachê maior, mas o combustível e o pedágio comem a diferença. Calcular deslocamento por show é o detalhe que muda tudo — e é o que a maioria não faz porque dá trabalho na mão.

## Como fazer isso sem planilha na mão toda vez

Fazer essa conta manualmente a cada show é inviável na correria. O **SouArtista** calcula automaticamente o custo de combustível (distância × consumo × preço do litro), soma cachês da equipe e mostra o **lucro líquido real de cada show** — não só o cachê. Assim você negocia com número na mão, não no chute.

## Perguntas frequentes

**Qual o cachê médio de um músico em bar?** Varia muito por região e experiência, mas o certo é calcular pelo seu custo + hora, não por média. Um valor de referência não substitui a sua conta.

**Devo cobrar mais por show fora da cidade?** Sim — inclua combustível, pedágio e as horas extras de deslocamento no cálculo.

**Como cobrar de evento particular (casamento/corporativo)?** Costuma ter cachê maior que bar, pela exigência e horário; aplique a mesma fórmula com margem maior.
    `.trim(),
  },
  {
    slug: 'imposto-de-renda-mei-para-musico-guia-pratico',
    title: 'Imposto de renda e MEI para músico: o guia prático',
    excerpt: 'Músico precisa declarar imposto? Vale a pena ser MEI? Entenda de forma simples como organizar impostos, notas e receitas da sua música.',
    category: 'gestao-financeira',
    categoryLabel: 'Gestão Financeira',
    publishedAt: '2026-07-01',
    readingTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=450&fit=crop',
    content: `
**Resposta rápida:** todo músico que recebe por shows tem renda tributável e, em geral, precisa declarar. Formalizar-se como **MEI** (Microempreendedor Individual) costuma valer a pena para quem tem renda recorrente de música, porque reduz a carga de imposto, permite emitir nota fiscal e dá acesso a benefícios do INSS — desde que a atividade e o faturamento se enquadrem nos limites do MEI vigentes.

> Este artigo é educativo, não é aconselhamento contábil. Confirme valores atuais (limites do MEI, alíquotas, CNAEs de músico) com um contador antes de decidir.

## Músico paga imposto? Sim — e o Leão sabe do seu Pix

Receber cachê em dinheiro ou Pix não torna a renda "invisível". Renda de trabalho é tributável, e a Receita cruza dados de movimentação. Organizar isso desde o começo evita dor de cabeça (e multa) depois.

## Pessoa física vs MEI: qual a diferença para o músico?

- **Como pessoa física:** você declara os recebimentos e paga imposto pela tabela progressiva; não emite nota fiscal com CNPJ; a carga pode ser alta se a renda subir.
- **Como MEI:** você tem CNPJ, paga um valor fixo mensal (DAS), emite nota fiscal, contribui para o INSS e simplifica muito a vida fiscal — respeitados o teto de faturamento e as atividades permitidas para MEI.

## Quando vale a pena virar MEI

Vale a pena avaliar o MEI se você: tem renda recorrente de música, precisa emitir nota (contratantes formais exigem), quer contribuir para aposentadoria, e está dentro do limite de faturamento. Se você toca esporadicamente e ganha pouco, talvez ainda não compense — por isso, confirme com um contador.

## O que você precisa organizar (independente do formato)

Para declarar certo, você precisa saber, o ano inteiro:

- Quanto recebeu (por show, por contratante).
- Quanto gastou e o que é dedutível (equipamento, deslocamento, etc.).
- Notas emitidas e comprovantes.

É aqui que a maioria trava: sem registro organizado durante o ano, a declaração vira um pesadelo de memória e extrato bancário.

## Como manter tudo pronto para a declaração o ano inteiro

Registrar cada show — cachê recebido, despesas, deslocamento — conforme acontece é o que transforma a declaração de um tormento em um relatório. O **SouArtista** registra receitas e despesas por show e gera relatórios em PDF/Excel que você (ou seu contador) usa direto na hora de declarar. Você chega em abril com tudo somado, não com uma pilha de comprovantes soltos.

## Perguntas frequentes

**Preciso declarar se ganho pouco com música?** Depende do total de rendimentos no ano; há um limite de isenção que muda anualmente — confira o valor vigente.

**MEI pode ser músico?** Sim, há atividades de músico/artista permitidas no MEI; confirme o CNAE e o teto de faturamento atuais.

**Posso deduzir meu instrumento?** Despesas ligadas à atividade podem entrar no cálculo dependendo do seu enquadramento; um contador orienta o que é dedutível no seu caso.
    `.trim(),
  },
  {
    slug: 'planilha-vs-app-vida-financeira-do-artista',
    title: 'Planilha vs app: como organizar a vida financeira do artista',
    excerpt: 'Planilha ou app para controlar shows e finanças de músico? Veja os prós, contras e quando cada um vale a pena — com um comparativo honesto.',
    category: 'gestao-financeira',
    categoryLabel: 'Gestão Financeira',
    publishedAt: '2026-07-01',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=450&fit=crop',
    content: `
**Resposta rápida:** planilha funciona no começo e é grátis, mas quebra quando o volume de shows cresce, exige disciplina manual e não calcula locomoção nem lucro líquido automaticamente. Um app de gestão para músicos vale a pena quando você faz shows com regularidade, quer relatórios prontos e não quer perder tempo (nem dinheiro) com conta feita errada. A escolha depende do seu volume de shows e de quanto seu tempo vale.

## O ponto de partida de todo músico: a planilha

Quase todo artista começa com uma planilha (ou o caderninho). Faz sentido: é grátis, flexível e você já sabe usar. Para quem faz 1-2 shows por mês, pode bastar.

## Onde a planilha começa a doer

- **Cálculo manual de tudo:** combustível, consumo, pedágio, divisão de cachê entre músicos — cada conta na mão, toda vez.
- **Disciplina obrigatória:** esqueceu de anotar um show ou uma despesa? O número mente.
- **Sem visão de lucro real:** planilha mostra o que você digitou; ela não te avisa que aquele show fora da cidade deu prejuízo depois do combustível.
- **No celular é ruim:** editar planilha no palco ou no carro é sofrimento.
- **Nada de lembretes:** ela não te avisa do show de amanhã nem do pagamento pendente.

## O que um app resolve

Um app pensado para músicos automatiza justamente o que dá trabalho na planilha:

- Calcula locomoção (distância × consumo × preço do litro) sozinho.
- Soma cachês da equipe e mostra o **lucro líquido por show**, não só o cachê.
- Gera relatórios em PDF/Excel prontos para o contador.
- Manda lembrete de show e de pagamento.
- Funciona no celular, nativo, offline.

## Comparativo honesto

| Critério | Planilha | App de gestão (ex.: SouArtista) |
|---|---|---|
| Custo | Grátis | Assinatura (mensal/anual) |
| Cálculo de locomoção | Manual | Automático |
| Lucro líquido por show | Você calcula | Automático |
| Relatórios prontos | Você monta | PDF/Excel em 1 clique |
| Lembretes de show/pagamento | Não | Sim |
| Uso no celular | Ruim | Nativo iOS/Android |
| Curva de aprendizado | Zero | Baixa |

## Quando cada um vale a pena

- **Fique na planilha se:** você faz pouquíssimos shows, tem disciplina de ferro e seu tempo sobra.
- **Migre para um app se:** você faz shows com regularidade, contrata ou é contratado por vários artistas, e prefere negociar cachê com o número do lucro real na mão.

## Conclusão

Planilha é um ótimo primeiro passo — mas na hora que a música vira renda séria, o custo do app se paga na primeira negociação em que você descobre, com número, que um show ia te dar prejuízo. O **SouArtista** foi feito exatamente para essa transição: da planilha bagunçada para o controle financeiro real do artista.

## Perguntas frequentes

**Dá pra migrar minha planilha para o app?** Você cadastra seus shows e passa a registrar os novos direto no app; o histórico antigo pode ser lançado aos poucos.

**Qual a vantagem principal do app sobre a planilha?** Ver o lucro líquido real de cada show automaticamente, incluindo locomoção.
    `.trim(),
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentSlug: string, limit: number = 3): BlogPost[] => {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return blogPosts.slice(0, limit);
  
  // Prioritize same category, then recent posts
  const sameCategoryPosts = blogPosts.filter(
    post => post.slug !== currentSlug && post.category === currentPost.category
  );
  const otherPosts = blogPosts.filter(
    post => post.slug !== currentSlug && post.category !== currentPost.category
  );
  
  return [...sameCategoryPosts, ...otherPosts].slice(0, limit);
};

export const filterPostsByCategory = (category: BlogCategory): BlogPost[] => {
  if (category === 'all') return blogPosts;
  return blogPosts.filter(post => post.category === category);
};

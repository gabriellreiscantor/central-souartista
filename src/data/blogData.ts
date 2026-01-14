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

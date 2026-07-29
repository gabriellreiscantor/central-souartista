# Central - Sou Artista

rofissional para o aplicativo "SouArtista" - uma plataforma de gestão financeira e agenda para músicos e artistas brasileiros.

## IDENTIDADE VISUAL

### Cores Principais (usar EXATAMENTE estas)
- **Roxo Principal (Primary)**: HSL(273, 85%, 65%) / #B96FFF - usar para CTAs, destaques, ícones
- **Roxo Escuro (Background)**: #1E082B - fundo principal das seções hero e escuras
- **Branco**: #FFFFFF - textos principais em fundos escuros
- **Cinza Claro**: #F9FAFB - fundos de seções alternadas (light sections)
- **Cinza Texto**: #6B7280 - textos secundários em fundos claros
- **Gradiente Glow**: rgba(185, 111, 255, 0.15) com blur 120px para efeitos de glow suave

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Fonte Headings**: Space Grotesk (Google Fonts)
- **Tamanhos**: H1 (48-64px), H2 (36-42px), H3 (24-28px), Body (16-18px)

### Estilo Visual
- Design minimalista e moderno
- Bordas arredondadas (radius: 0.75rem para cards, full para botões)
- Sombras suaves com tom roxo: box-shadow: 0 10px 30px -10px rgba(185, 111, 255, 0.3)
- Transições suaves: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- Glassmorphism sutil em alguns elementos: backdrop-blur-xl com bg opacity 50%

## ESTRUTURA DO SITE

### 1. HEADER/NAVEGAÇÃO (fixo no topo)
- Logo "SouArtista" à esquerda (usar texto estilizado ou placeholder para logo)
- Menu centralizado: Início | Funcionalidades | Preços | Blog
- Lado direito: 
  - Seletor de idioma (Português | English) - dropdown minimalista
  - Botão "Baixar App" (estilo primary, arredondado)
- Mobile: hamburger menu com drawer lateral

### 2. HERO SECTION (fundo escuro #1E082B)
- Efeito de glow roxo suave centralizado (blob com blur 120px, opacity 0.08)
- Badge no topo: "Experimente 7 dias grátis" com ícone de cifrão
- Headline grande: "Suas finanças musicais e agenda organizadas"
- Subheadline: "Cuidamos da parte chata e você cuida da música"
- Mockup de celular mostrando o app (usar placeholder de iPhone com tela roxa)
- Botões de download: App Store e Google Play (badges oficiais)
- Contador social proof: "Mais de X artistas já organizam sua carreira conosco"

### 3. LOGOS/PRESS SECTION (fundo claro)
- Barra horizontal com logos de "Como visto em" ou "Confiam em nós"
- Usar placeholders: TechTudo, Negócios, TheVerge, etc.
- Animação suave de fade/slide

### 4. FEATURES SECTION (alternar fundos claro/escuro)
Criar 4-5 feature blocks no estilo do Toki:

**Feature 1: Gestão Financeira Completa**
- Ícone: DollarSign ou Wallet
- Título: "Controle total do seu dinheiro"
- Descrição: "Registre cachês, despesas, recebimentos e tenha relatórios detalhados de quanto você ganha por show"

**Feature 2: Agenda Inteligente**
- Ícone: Calendar
- Título: "Nunca mais perca um show"
- Descrição: "Cadastre shows, ensaios e compromissos. Receba lembretes e mantenha sua agenda sempre organizada"

**Feature 3: Gestão de Músicos**
- Ícone: Users
- Título: "Sua banda na palma da mão"
- Descrição: "Gerencie músicos, pagamentos de sideman e comunicação com sua equipe"

**Feature 4: Simulador de Nota Fiscal**
- Ícone: FileText/Receipt
- Título: "Simule seus impostos"
- Descrição: "Calcule quanto receberá líquido considerando ISS, INSS e outros descontos"

**Feature 5: Relatórios e Insights**
- Ícone: BarChart
- Título: "Entenda seu negócio"
- Descrição: "Gráficos e relatórios que mostram sua evolução financeira mês a mês"

Cada feature deve ter:
- Ícone à esquerda ou ilustração
- Título em destaque
- Descrição curta
- Possível imagem/mockup do app mostrando a funcionalidade

### 5. TESTIMONIALS/SOCIAL PROOF SECTION
- Carrossel de depoimentos de usuários
- Cards com: Avatar, Nome/@ do usuário, Texto do depoimento
- Integração visual com "Amado por milhares de artistas"
- Estilo: cards com borda sutil, hover effect

### 6. PRICING SECTION (fundo claro)
Header: "Escolha seu plano"
Subheader: "Comece grátis e evolua quando precisar"

**3 Cards de Planos:**

**Plano Gratuito**
- R$ 0/mês
- Até 5 shows cadastrados
- Agenda básica
- Relatórios limitados
- Botão: "Começar Grátis"

**Plano Pro** (destacado com borda roxa e badge "Mais Popular")
- R$ 19,90/mês (ou R$ 199/ano)
- Shows ilimitados
- Gestão de músicos
- Relatórios completos
- Simulador de nota fiscal
- Suporte prioritário
- Botão: "Assinar Pro"

**Plano Premium**
- R$ 39,90/mês (ou R$ 399/ano)
- Tudo do Pro +
- Multi-bandas
- Exportação avançada
- Backup na nuvem
- Botão: "Assinar Premium"

Toggle para alternar entre Mensal/Anual (com desconto de 15% no anual)

### 7. FAQ SECTION (fundo claro)
Accordion com perguntas frequentes:
- "O que é o SouArtista?"
- "Como funciona o período de teste?"
- "Posso usar no iPhone e Android?"
- "Meus dados estão seguros?"
- "Como cancelo minha assinatura?"
- "Posso usar para múltiplas bandas?"
- "Tem suporte em português?"

### 8. BLOG SECTION (rota /blog)
- Grid de posts com cards
- Cada card: Imagem de capa, Categoria (tag), Título, Resumo, Data
- Página individual de post com markdown
- Sidebar com categorias e posts relacionados
- Usar dados mock para demonstração

### 9. CTA FINAL SECTION (fundo escuro)
- "Pronto para organizar sua carreira musical?"
- Botões grandes: App Store e Google Play
- QR Code opcional para download
- Email para contato

### 10. FOOTER
- Logo SouArtista
- Colunas:
  - Produto: Funcionalidades, Preços, Download
  - Empresa: Sobre, Blog, Contato
  - Legal: Termos de Uso, Política de Privacidade, Central de Confiança
  - Redes Sociais: Instagram, TikTok, YouTube
- Copyright: "© 2025 SouArtista. Todos os direitos reservados."
- Seletor de idioma no footer também

## FUNCIONALIDADES TÉCNICAS

### Internacionalização (i18n)
- Implementar sistema de tradução PT-BR e EN
- Seletor de idioma no header e footer
- Detectar idioma do navegador e sugerir trocar
- URLs com prefixo: /pt e /en

### Mobile Responsivo
- Design mobile-first
- Hamburger menu no mobile
- Cards de pricing empilhados
- Imagens otimizadas
- Touch-friendly (botões mínimo 44px)

### Animações
- Scroll animations (fade in, slide up)
- Hover effects nos cards e botões
- Logo com glow effect sutil
- Carrossel de testimonials suave
- Accordion animado para FAQ

### SEO
- Meta tags apropriadas
- Open Graph para compartilhamento
- Schema.org markup
- Sitemap
- Títulos otimizados por página

### Performance
- Lazy loading de imagens
- Componentes otimizados
- Fontes otimizadas (display: swap)

## ROTAS DO SITE
- / (Home - landing principal)
- /funcionalidades (Features detalhadas)
- /precos (Pricing com formulário de checkout/lead)
- /blog (Lista de posts)
- /blog/:slug (Post individual)
- /sobre (Sobre a empresa)
- /contato (Formulário de contato)
- /termos (Termos de uso)
- /privacidade (Política de privacidade)
- /download (Redirecionamento para stores)

## TOM DE VOZ
- Profissional mas acessível
- Fala diretamente com músicos e artistas
- Usa "você" e linguagem direta
- Destaca o benefício de "focar na música enquanto o app cuida do resto"
- Evita jargões técnicos excessivos

## PLACEHOLDER ASSETS
- Use placeholder.svg para imagens de mockup de celular
- Use Lucide React para todos os ícones
- Badges de App Store e Google Play podem ser SVGs inline ou imagens
- Avatar de testimonials: iniciais em círculo roxo

## COMPONENTES A CRIAR
- Header (com navegação responsiva)
- HeroSection
- LogoCloud
- FeatureCard
- FeatureSection
- TestimonialCard
- TestimonialCarousel
- PricingCard
- PricingSection
- FAQAccordion
- BlogCard
- BlogGrid
- Footer
- LanguageSelector
- DownloadButtons (App Store + Google Play)
- MobileMenu

Comece criando a estrutura básica com a landing page principal, depois evolua para as outras páginas. Use React Router para navegação. Aplique as cores e estilos exatamente como especificado.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://central-souartista.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cf331e04-2f00-405c-9324-9474ab447afd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```


# Plano: Instalar Google Tag Manager (GTM)

## Resumo

Vou adicionar o código do Google Tag Manager ao arquivo `index.html` conforme as instruções do Google:

1. O script principal será adicionado logo após a abertura do `<head>`
2. O código `<noscript>` será adicionado logo após a abertura do `<body>`

---

## Alterações

### Arquivo: `index.html`

**1. Adicionar script GTM no `<head>` (logo após a linha 3)**

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PB3S23ML');</script>
<!-- End Google Tag Manager -->
```

**2. Adicionar código noscript no `<body>` (logo após a abertura)**

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PB3S23ML"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

---

## Detalhes Técnicos

| Item | Valor |
|------|-------|
| GTM Container ID | `GTM-PB3S23ML` |
| Arquivos modificados | `index.html` |
| Impacto no performance | Mínimo (script assíncrono) |

O código será carregado de forma assíncrona (`async=true`), então não vai impactar a velocidade de carregamento do site.

---

## Resultado

Após a aprovação, o Google Tag Manager estará instalado e você poderá:
- Rastrear eventos e conversões
- Adicionar o Google Analytics 4
- Configurar pixels de remarketing
- Monitorar comportamento dos usuários

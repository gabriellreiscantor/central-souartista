
# Plano: Banner Nativo do Android Chrome (como o iOS Safari)

## O que você quer

No iOS Safari, aparece automaticamente aquele banner nativo do sistema lá em cima pedindo para baixar o app. Você quer a mesma coisa no Android Chrome.

## Como funciona no Android

O Chrome no Android mostra um banner nativo chamado **"Abrir no app"** automaticamente quando o site tem o `site.webmanifest` configurado com as informações do app da Play Store usando o campo `related_applications` com `prefer_related_applications: true`.

## O que precisa mudar

### 1. `public/site.webmanifest`

O arquivo atual está quase vazio (sem nome, sem app relacionado). Vou preencher corretamente com:
- Nome do app
- Ícones já existentes
- **`related_applications`** apontando para o app na Play Store (`app.souartista`)
- **`prefer_related_applications: true`** — isso é o que ativa o banner nativo do Chrome

```json
{
  "name": "SouArtista",
  "short_name": "SouArtista",
  "description": "Gestão financeira para músicos e artistas",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#1E082B",
  "background_color": "#1E082B",
  "icons": [...],
  "related_applications": [{
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=app.souartista",
    "id": "app.souartista"
  }],
  "prefer_related_applications": true
}
```

### 2. `index.html`

Adicionar a meta tag `apple-itunes-app` para o banner nativo do Safari (iOS) que também estava faltando:

```html
<!-- iOS Smart App Banner (Safari nativo) -->
<meta name="apple-itunes-app" content="app-id=6756150476" />
```

## Resultado esperado

| Plataforma | Resultado |
|---|---|
| **iOS Safari** | Banner nativo do Safari no topo com botão "Abrir" |
| **Android Chrome** | Banner nativo do Chrome "Abrir no app" |
| **Outros navegadores** | `SmartAppBanner` customizado em React (já funciona) |

## Arquivos modificados

- `public/site.webmanifest` — adicionar nome, app relacionado e `prefer_related_applications`
- `index.html` — adicionar meta tag `apple-itunes-app` para o banner nativo do iOS

> **Obs:** O banner do Android Chrome pode levar alguns dias para aparecer em produção, pois o Chrome usa critérios de engajamento (como o usuário já ter visitado o site antes). O banner customizado em React (`SmartAppBanner`) continua como fallback imediato para todos os usuários.

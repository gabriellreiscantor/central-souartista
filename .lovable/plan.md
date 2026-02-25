
# Corrigir 404 no Vercel para rotas como /privacidade e /contato

## Problema

O site é uma SPA (Single Page Application) com React Router. Quando o usuário acessa diretamente uma rota como `souartista.com/privacidade` ou `souartista.com/contato`, o Vercel tenta encontrar um arquivo chamado `privacidade/index.html` no servidor — que não existe. Por isso retorna 404.

Isso acontece com TODAS as rotas do site quando acessadas diretamente (digitando na barra ou compartilhando link).

## Solucao

Criar um arquivo `vercel.json` na raiz do projeto com uma regra de rewrite que envia todas as requisicoes para o `index.html`, permitindo que o React Router cuide do roteamento.

## Alteracao

### Novo arquivo: `vercel.json`

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Isso resolve o 404 para `/privacidade`, `/contato` e todas as outras rotas do site.

## Detalhes Tecnicos

- Apenas 1 arquivo novo criado
- Nenhum codigo existente e modificado
- Apos o deploy no Vercel, todas as rotas vao funcionar corretamente
- Arquivos estaticos (imagens, favicons, manifest) continuam sendo servidos normalmente pois o Vercel prioriza arquivos reais antes de aplicar rewrites

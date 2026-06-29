# Landing Page Mini Grua

Landing page responsiva para divulgacao da Mini Grua Eletrica 1000kg, com foco em apresentacao do produto, ficha tecnica, FAQ e chamadas para contato/compra.

## Visao geral

O projeto e um site estatico feito com HTML, CSS e JavaScript puro. Nao exige processo de build nem instalacao de dependencias locais.

Principais secoes:

- Hero com chamada principal e link para Mercado Livre
- Problema e solucao para icamento de materiais em obras
- Ficha tecnica com contadores animados
- Area de medidas do equipamento
- Informacoes de entrega, garantia e adaptacoes
- FAQ em acordeao
- CTA final e botao fixo de WhatsApp

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Google Fonts
- Phosphor Icons via CDN
- AOS Animation Library via CDN

## Estrutura

```text
.
|-- index.html
|-- style.css
|-- script.js
`-- assets/
    `-- images/
```

## Como rodar localmente

Como e um site estatico, basta abrir o arquivo `index.html` no navegador.

Tambem e possivel usar uma extensao como Live Server no VS Code para testar com recarregamento automatico.

## Publicacao no GitHub Pages

1. Suba os arquivos para um repositorio no GitHub.
2. Acesse `Settings` > `Pages`.
3. Em `Build and deployment`, selecione `Deploy from a branch`.
4. Escolha a branch principal e a pasta raiz `/`.
5. Salve e aguarde o GitHub gerar a URL publica.

## Observacoes

- As imagens usadas pela landing page ficam em `assets/images`.
- Alguns recursos externos sao carregados por CDN, entao a pagina completa depende de internet para fontes, icones e animacoes.
- Os links de WhatsApp, Mercado Livre e YouTube podem ser atualizados diretamente no `index.html`.

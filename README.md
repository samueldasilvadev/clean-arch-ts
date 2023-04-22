# Clean Archtecture with Typescript

A proposta desse projeto é implementar o padrão de arquitetura limpa da maneira mais
simples e direta o possível, de forma que atenda aos princípios básicos de design.

## Typescript
npm i --save-dev typescript
npm i --save @types/nodes

## nodemon
npm i --save-dev nodemon

Add config in package.json
"dev": "nodemon"

## Desafios
A ideia dos desafios é evoluir a arquitetura de modo que a torne
mais desacoplada, e identificar um ponto onde a busca desacoplamento
se torna impraticável (é melhor fazer outro projeto). São dois os
parâmetros a serem analisados: mudança e crescimento.

- Implementar a a api v1 usando Express e a v2 usando Fastify,
  listando os pontos de complexidade

- Implementar ORMs diferentes

## INFO:
https://merlino.agency/blog/clean-architecture-in-express-js-applications

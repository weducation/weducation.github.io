# weducation.github.io

Website para testes.

<https://weducation.github.io>

**É necessário instalar o [bun!](https://bun.sh)**

## Antes de tudo, instale as dependências

`bun i && bun pm trust --all`

## Como subir no modo desensolvimento

1. Suba o servidor de desenvolvimento:

`bun run dev`

3. Acesse:

<http://localhost:3000/>

## Como fazer o deploy

1. Execute o comando de build:

`bun run generate`

2. Prepare os assets para deploy no GitHub Pages:

`bun run gitPrepare`

3. Adicione tudo no commit:

`git add .`

4. Insira um resumo das alterações:

`git commit -am 'Resumo das alterações aqui'`

5. Faça o push para o GitHub

`git push`

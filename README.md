# Weducation

<https://weducation.github.io>

## Como subir o servidor de desenvolvimento

1. Certifique-se de instalar o [pnpm](https://pnpm.io/installation#using-npm)
2. Instale as dependências

```bash
pnpm i
```

3. Rode o servidor

```bash
pnpm run dev
```

4. Acesse o live preview:
   <http://localhost:5173>

## Como fazer o deploy

O deploy é feito de forma automágica no GitHub Pages quando você faz push para a branch `main`. Basta:

1. Adicionar suas alterações ao commit:

```bash
git add -p
```

2. Inserir uma descrição:

```bash
git commit -am 'Alguma Descrição Aqui'
```

3. Fazer o push:

```bash
git push
```

Você poderá acessar a aplicação publicada em <https://weducation.github.io>.

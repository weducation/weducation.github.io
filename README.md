# Weducation

<https://weducation.github.io>

## Como subir o servidor de desenvolvimento

1. Certifique-se de instalar o runtime [bun](https://bun.sh)
2. Instale as dependências

```bash
bun i
```

3. Rode o servidor

```bash
bun run dev
```

4. Acesse o live preview:
   <http://localhost:3000>

## Como publicar a aplicação

1. Rode o comando de build estático:

```bash
bun run generate
```

- Se estiver no Windows:

```bash
bun run generate:windows
```

2. Adicione tudo no commit:

```bash
git add -p
```

3. Adicione uma descrição ao commit:

```bash
git commit -am 'Alguma Descrição Aqui'
```

4. Faça o push:

```bash
git push
```

# Deploy na Vercel

1. Confirme que `imagens/ong.jpg` existe.
2. Rode `npm install` e `npm run build` localmente.
3. Faça commit e push do projeto para o GitHub.
4. Na Vercel, importe o repositório.
5. Framework Preset: Vite.
6. Build Command: `npm run build`.
7. Output Directory: `dist`.
8. Faça o deploy.
9. Teste a URL de produção e as rotas da SPA.

O arquivo `vercel.json` já contém a configuração da build e o rewrite da raiz para `/html/index.html`.

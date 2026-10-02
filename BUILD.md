# Build de produção com Vite

1. Instale as dependências: `npm install`
2. Desenvolvimento: `npm run dev`
3. Build minificada: `npm run build`
4. Pré-visualização da build: `npm run preview`

O Vite processa o `html/index.html`, resolve os ES6 Modules, agrupa os módulos utilizados e minifica JavaScript e CSS. Após a build, o script `copy-images.mjs` copia a pasta `imagens` para `dist/imagens`, preservando o caminho utilizado pelas views da SPA. O script `report-sizes.mjs` exibe no terminal o tamanho dos arquivos-fonte, o tamanho da build e a porcentagem aproximada de redução.

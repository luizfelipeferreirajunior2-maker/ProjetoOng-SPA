# Otimização de imagens

Coloque a imagem original em `imagens/ong.jpg`.

Ao executar:

```bash
npm install
npm run build
```

o script `scripts/optimize-images.mjs` gera automaticamente:

- `ong-480.webp`
- `ong-768.webp`
- `ong-1200.webp`

O HTML usa `<picture>`, `srcset` e `sizes` para o navegador escolher a resolução mais adequada à viewport. O JPEG original permanece como fallback.

A imagem do hero usa `fetchpriority="high"` por estar acima da dobra; não foi aplicado `loading="lazy"` nela para não prejudicar o LCP.

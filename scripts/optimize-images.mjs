import { access, stat } from "node:fs/promises";
import sharp from "sharp";

const entrada = "imagens/ong.jpg";
const larguras = [480, 768, 1200];

try {
    await access(entrada);
} catch {
    console.warn("[imagens] ong.jpg não encontrada em imagens/. A otimização foi ignorada.");
    process.exit(0);
}

const original = await stat(entrada);
const metadata = await sharp(entrada).metadata();

console.log(`Imagem original: ${(original.size / 1024).toFixed(1)} KB (${metadata.width ?? "?"}x${metadata.height ?? "?"})`);

for (const largura of larguras) {
    const saida = `imagens/ong-${largura}.webp`;

    await sharp(entrada)
        .rotate()
        .resize({ width: largura, withoutEnlargement: true })
        .webp({ quality: 78, effort: 5 })
        .toFile(saida);

    const otimizada = await stat(saida);
    const reducao = ((1 - otimizada.size / original.size) * 100).toFixed(1);
    console.log(`WebP ${largura}px: ${(otimizada.size / 1024).toFixed(1)} KB | redução vs. original: ${reducao}%`);
}

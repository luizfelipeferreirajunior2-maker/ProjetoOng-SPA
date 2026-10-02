import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";

async function tamanhoDiretorio(dir, filtro = () => true) {
    let total = 0;
    for (const nome of await readdir(dir, { withFileTypes: true })) {
        const caminho = join(dir, nome.name);
        if (nome.isDirectory()) total += await tamanhoDiretorio(caminho, filtro);
        else if (filtro(caminho)) total += (await stat(caminho)).size;
    }
    return total;
}

const extensoes = /\.(html|css|js)$/i;
const fonte =
    await tamanhoDiretorio("html", (p) => extensoes.test(p)) +
    await tamanhoDiretorio("css", (p) => extensoes.test(p)) +
    await tamanhoDiretorio("js", (p) => extensoes.test(p));
const build = await tamanhoDiretorio("dist", (p) => extensoes.test(p));
const reducao = fonte > 0 ? ((1 - build / fonte) * 100).toFixed(1) : "0.0";

console.log(`Arquivos-fonte (HTML/CSS/JS): ${(fonte / 1024).toFixed(1)} KB`);
console.log(`Build minificada (HTML/CSS/JS): ${(build / 1024).toFixed(1)} KB`);
console.log(`Redução aproximada: ${reducao}%`);

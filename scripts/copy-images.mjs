import { cp, mkdir } from "node:fs/promises";

await mkdir("dist/imagens", { recursive: true });
await cp("imagens", "dist/imagens", { recursive: true });

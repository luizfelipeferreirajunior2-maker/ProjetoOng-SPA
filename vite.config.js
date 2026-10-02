import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
    base: "./",
    build: {
        outDir: "dist",
        emptyOutDir: true,
        minify: "esbuild",
        cssMinify: true,
        rollupOptions: {
            input: resolve(process.cwd(), "html/index.html")
        }
    }
});

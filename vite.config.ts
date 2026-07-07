import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackRouter } from "@tanstack/router-plugin/vite";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

const base = process.env.VERCEL ? undefined : "/wikie-website/";

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  base,
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    viteReact(),
    svgr(),
    {
      name: "generate-404",
      async closeBundle() {
        const { copyFileSync, existsSync } = await import("node:fs");
        const { resolve } = await import("node:path");
        const src = resolve("dist", "index.html");
        const dest = resolve("dist", "404.html");
        if (existsSync(src)) {
          copyFileSync(src, dest);
        }
      },
    },
  ],
});

export default config;

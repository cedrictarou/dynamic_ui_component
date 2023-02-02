import { defineConfig } from "vite";
import { resolve, join } from "path";
import vitePluginPugStatic from "@macropygia/vite-plugin-pug-static";

const root = resolve(__dirname, "src/pages");
const dist = resolve(__dirname, "dist");
const publicDir = resolve(__dirname, "public");

export default defineConfig({
  base: "./",
  root,
  publicDir,
  resolve: {
    alias: {
      "@/": join(__dirname, "./src/"),
    },
  },
  build: {
    emptyOutDir: true,
    outDir: dist,
    rollupOptions: {
      input: {
        top: resolve(__dirname, "./src/pages/index.pug"),
        service: resolve(__dirname, "./src/pages/service/index.pug"),
        blog: resolve(__dirname, "./src/pages/blog/index.pug"),
        company: resolve(__dirname, "./src/pages/company/index.pug"),
      },
      output: {
        chunkFileNames: "javascripts/[name].js",
        entryFileNames: "javascripts/[name].js",
        assetFileNames: ({ name }) => {
          if (/\.(jpe?g|png|gif|svg)$/.test(name ?? "")) {
            return "assets/img/[name].[hash][extname]";
          }
          if (/\.css$/.test(name ?? "")) {
            return "stylesheets/[name].[ext]";
          }
          return "assets/[name].[ext]";
        },
      },
    },
  },
  plugins: [
    vitePluginPugStatic({
      buildOptions: { basedir: "./src" },
      serveOptions: { basedir: "./src" },
    }),
  ],
});

import { defineConfig } from "vite";
import { resolve, join } from "path";
import vitePluginPugStatic from "@macropygia/vite-plugin-pug-static";

const root = resolve(__dirname, "src");
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
        top: resolve(__dirname, "./src/index.pug"),
        about: resolve(__dirname, "./src/pages/about/index.pug"),
        // blog: resolve(__dirname, "./src/page/blog/index.pug"),
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

import { defineConfig } from 'vite'
import { resolve } from 'path'
import postcssImport from "postcss-import"
import autoprefixer from 'autoprefixer'

export default defineConfig({
  build: {
    target: 'es2015',
    outDir: resolve(__dirname, "dist"),
    minify: 'terser',
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'Hole',
      fileName: (format) => ((format == "umd") ? 'Hole.js' : `Hole.${format}.js`),
      formats: ["es", "umd", "iife"]
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo: any) => (/\.css$/.test(assetInfo.name) ? "Hole.css" : "[name].[ext]")
      }
    },
    sourcemap: true,
  },
  css: {
    postcss: {
      plugins: [
        postcssImport,
        autoprefixer,
      ],
    },
  }
})
// Import rollup plugins
import { rollupPluginHTML as html } from "@web/rollup-plugin-html";
import {copy} from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import summary from 'rollup-plugin-summary';
import tsPlugin from '@rollup/plugin-typescript';

import pkgMinifyHTML from 'rollup-plugin-minify-html-literals';

const minifyHTML = pkgMinifyHTML.default

export default {
  output: {
    dir: 'dist',
  },
  plugins: [
    // Entry point for application build; can specify a glob to build multiple
    // HTML files for non-SPA app
    html({
      input: 'index.html',
    }),
    // Resolve bare module specifiers to relative paths
    resolve(),
    // Minify HTML template literals
    minifyHTML(),
    // Minify JS
    terser({
      ecma: 2019,
      module: true,
      warnings: true,
    }),
    // Print bundle summary
    summary(),
    // Optional: copy any static assets to build directory
    copy({
      patterns: ['images/**/*'],
    }),
    tsPlugin()
  ],
  preserveEntrySignatures: 'strict',
};

// import { defineConfig } from 'vite'

// // https://vitejs.dev/config/
// export default defineConfig({
//   build: {
//     lib: {
//       entry: 'src/my-element.ts',
//       formats: ['es']
//     },
//     rollupOptions: {
//       external: /^lit/
//     }
//   }
// })

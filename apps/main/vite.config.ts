import vercel from "vite-plugin-vercel";
import trpc from "./src/trpc/vite-plugin";
import ssr from "vike/plugin";
import react from "@vitejs/plugin-react";
import macros from "vite-plugin-babel-macros";
import unoCss from 'unocss/vite'
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react({}), 
    ssr({
      prerender: true,
    }), 
    trpc(), 
    vercel(),
    macros(),
    unoCss(),
  ],
  css: {
    transformer: 'lightningcss',
  },
  build: {
    cssMinify: 'lightningcss',
  },
  test: {
    root: './',
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./config/setupTests.ts'],
    passWithNoTests: true,
  },
  resolve: {
    alias: {
      // doja: 'doja-react'
      // react: 'preact/compat',
      // 'react-dom': 'preact/compat',
      "#/*": "packages/*",
      "#apps/*": "apps/*"
    }
  }
});
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://albarracin-jorge.github.io/svelte-actions',
  plugins: [svelte()]
})

import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      /* base */
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@common', replacement: fileURLToPath(new URL('./src/common', import.meta.url)) },
      { find: '@core', replacement: fileURLToPath(new URL('./src/core', import.meta.url)) },
      { find: '@framework', replacement: fileURLToPath(new URL('./src/framework', import.meta.url)) },

      /* UI */
      { find: '@components', replacement: fileURLToPath(new URL('./src/framework/ui/components', import.meta.url)) },
      { find: '@layouts', replacement: fileURLToPath(new URL('./src/framework/ui/layouts', import.meta.url)) },
      { find: '@views', replacement: fileURLToPath(new URL('./src/framework/ui/views', import.meta.url)) },

      /* project */
    ],
  },
})

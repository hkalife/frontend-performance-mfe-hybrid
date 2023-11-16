import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: "app",
      remotes: {
        peopleApp: "http://localhost:5001/assets/remoteEntry.js",
        productApp: "http://localhost:5002/assets/remoteEntry.js"
      },
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  }
})

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { createLuxaraChatHandler } from './api/chat.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiKey = env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY

  return {
    plugins: [
      react(),
      {
        name: 'luxara-api-dev',
        configureServer(server) {
          server.middlewares.use('/api/chat', createLuxaraChatHandler({ apiKey }))
        },
      },
    ],
  }
})

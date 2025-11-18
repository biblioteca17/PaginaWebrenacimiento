import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite acceder desde otras IPs
    port: 5173, // Opcional, el puerto que quieras usar
  },
})

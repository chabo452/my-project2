import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// これが入っているか確認
server: {
  port: 5174
}
export default defineConfig({
  plugins: [react()],
})

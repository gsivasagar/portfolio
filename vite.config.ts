import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // IMPORTANT: Change 'portfolio' to the name of your GitHub repository.
  // If deploying to the root of <username>.github.io, you can set this to '/'.
  base: '/portfolio/', 
  plugins: [react()],
})

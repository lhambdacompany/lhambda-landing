import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'

// GitHub Pages: copia index.html como 404.html para que abrir /servicios directo funcione.
const spa404 = () => ({ name: 'spa-404', closeBundle() { copyFileSync('dist/index.html', 'dist/404.html') } })

export default defineConfig({ plugins: [react(), spa404()] })

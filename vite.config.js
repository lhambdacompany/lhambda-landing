import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync } from 'node:fs'

// GitHub Pages no tiene servidor de rutas: se genera una entrada por página (para que /servicios
// responda 200 al abrirse directo) y un 404.html con la misma aplicación para direcciones desconocidas.
const rutas = ['servicios', 'soluciones', 'proyectos', 'proceso', 'nosotros', 'contacto']
const spa = () => ({
  name: 'spa-rutas',
  closeBundle() {
    copyFileSync('dist/index.html', 'dist/404.html')
    for (const r of rutas) {
      mkdirSync(`dist/${r}`, { recursive: true })
      copyFileSync('dist/index.html', `dist/${r}/index.html`)
    }
  },
})

export default defineConfig({ plugins: [react(), spa()] })

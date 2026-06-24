import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
     modulePreload: {
    resolveDependencies: (filename, deps, context) => {
      // Only suppress preload for the entry chunk
      if (filename.includes('index')) {
        return deps.filter(dep => !dep.includes('three') && !dep.includes('r3f'))
      }
      return deps
    }
  },

    // 1. Minify with esbuild (default) — make sure it's not disabled
    minify: 'esbuild',

    // 2. Raise chunk warning limit slightly (three.js is large)
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        // 3. Better chunking — separated more granularly
        manualChunks: {
          'react-core': ['react', 'react-dom'],        // ← you were missing this!
          'three': ['three'],
          'r3f': ['@react-three/fiber', '@react-three/drei'],
        },

        // 4. Long-term cache friendly filenames
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  },

  // 5. Pre-bundle heavy deps so dev server is faster too
  optimizeDeps: {
    include: ['react', 'react-dom', 'three', '@react-three/fiber', '@react-three/drei']
  }
})
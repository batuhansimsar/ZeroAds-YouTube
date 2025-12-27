import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                popup: resolve(__dirname, 'src/popup/index.html'),
                background: resolve(__dirname, 'src/background/main.ts'),
                content: resolve(__dirname, 'src/content/main.ts'),
            },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]'
            }
        },
        outDir: 'dist',
        emptyOutDir: true
    }
});

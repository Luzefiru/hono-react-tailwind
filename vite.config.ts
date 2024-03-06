import path from 'path';
import pages from '@hono/vite-cloudflare-pages';
import devServer from '@hono/vite-dev-server';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const globalConfig = {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };

  if (mode === 'client') {
    return {
      ...globalConfig,
      build: {
        rollupOptions: {
          input: ['./src/client.tsx', './src/style.css'],
          output: {
            entryFileNames: 'static/client.js',
            assetFileNames: 'static/assets/[name].[ext]',
          },
        },
      },
    };
  } else {
    return {
      ...globalConfig,
      ssr: {
        external: ['react', 'react-dom'],
      },
      plugins: [
        pages(),
        devServer({
          entry: 'src/index.tsx',
        }),
      ],
    };
  }
});

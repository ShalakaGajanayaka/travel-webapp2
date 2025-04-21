// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import svgr from 'vite-plugin-svgr';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), svgr()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: false,
    }),
  ],
});

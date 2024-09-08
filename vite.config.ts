import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react', //@jsxImportSource @emotion/react를 생략해줌
    }),
    tsconfigPaths(), //경로 매핑 플러그인
  ],
});

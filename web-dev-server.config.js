import { esbuildPlugin } from '@web/dev-server-esbuild';

/**
 * @type {import('@web/dev-server').DevServerConfig}
 */
export default {
  open: false,
  watch: true,
  plugins: [
    esbuildPlugin({
      ts: true,
      tsconfig: 'tsconfig.app.json'
    }),
  ],
  nodeResolve: true,
  appIndex: 'src/index.html'
};

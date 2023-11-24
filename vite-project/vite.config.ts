import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig(({ command, mode})=> {
  const env = loadEnv(mode, process.cwd())

  console.log(JSON.stringify(env))

  return {
    define: {
      __APP_VERSION__: JSON.stringify('v1.0.0'),
    },
    plugins: [vue()],
    resolve: {
      alias: {
        '@': '/src',
        'assets': '/src/assets',
        'components': '/src/components'
      }
    },
    // server: {
    //   host: true,
    // },
  }
})

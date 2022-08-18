import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    /** 是否开启 https */
    https: false,
    /** host 设置为 true 才可以使用 network 的形式，以 ip 访问项目 */
    host: true, // host: "0.0.0.0"
    /** 端口号 */
    port: 3000,
    /** 是否自动打开浏览器 */
    open: true,
    /** 跨域设置允许 */
    cors: true,
    /** 端口被占用时，是否直接退出 */
    strictPort: false
    // proxy: {
    //   // 选项写法
    //   '/admin': {
    //     target: 'https://xxx.com/api', // 代理目标地址
    //     changeOrigin: true, // 兼容基于名字的虚拟主机,true 代理服务会把origin修改未目标地址
    //     rewrite: (path) => path.replace(/^\/api/, '') // 路径重写
    //   }
    // }
  },
  build: {
    brotliSize: false,
    /** 消除打包大小超过 500kb 警告 */
    chunkSizeWarningLimit: 2000,
    /** vite 2.6.x 以上需要配置 minify: terser，terserOptions 才能生效 */
    minify: "terser",
    /** 在 build 代码时移除 console.log、debugger 和 注释 */
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true,
        pure_funcs: ["console.log"]
      },
      output: {
        /** 删除注释 */
        comments: false
      }
    },
    /** 打包后静态资源目录 */
    assetsDir: "static"
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'./src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData:  '@import "./src/styles/common.scss"'
      }
    }
  }
})

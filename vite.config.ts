import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pxtorem from 'postcss-pxtorem';

export default defineConfig({
  // ...其他配置
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 允许在less中使用JavaScript表达式
      },
    },
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 16, // 根据设计稿的尺寸调整
          propList: ['*'],
          selectorBlackList: ['.ignore-rem'], // 忽略转换的类名
        }),
      ],
    },
  },
  plugins: [react()],
})

/*
 * @Author: Ember.PL 1084861534@163.com
 * @Date: 2022-07-10 18:15:13
 * @LastEditors: Ember.PL 1084861534@163.com
 * @LastEditTime: 2022-07-15 00:31:19
 * @FilePath: \MusicPlayer\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0'
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 此处也可设置直角、边框色、字体大小等
          'primary-color': '#A90E16'
        },
        javascriptEnabled: true
      }
    }
  }
})

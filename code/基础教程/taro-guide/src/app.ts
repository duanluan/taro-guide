import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './app.scss'

const App = createApp({
  onShow(options) {
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
// 在 Vue 应用中安装 Pinia
App.use(createPinia())
// 导出 Vue 应用实例
export default App

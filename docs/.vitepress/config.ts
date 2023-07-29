import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/taro-guide/",
  // 左上角标题
  title: "Taro 渐进式教程",
  description: "Vue3（组合式 API）+ TypeScript + Sass + Pinia 的图书管理系统",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: '首页', link: '/'},
      {text: '文档', link: '/开始/介绍'}
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          {text: '介绍', link: '/开始/介绍'},
          {text: '环境准备', link: '/开始/环境准备'}
        ],
      },
      {
        text: '快速上手',
        items: [
          {text: '初始化项目', link: '/快速上手/初始化项目'},
        ]
      }
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/duanluan/taro-guide'}
    ]
  }
})

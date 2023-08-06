export default {
  // 指定小程序由哪些页面组成：https://taro-docs.jd.com/docs/app-config#pages
  pages: [
    'pages/index/index'
  ],
  // 设置小程序的状态栏、导航条、标题、窗口背景色
  window: {
    // 下拉 loading 的样式，仅支持 dark / light
    backgroundTextStyle: 'light',
    // 导航栏背景颜色
    navigationBarBackgroundColor: '#fff',
    // 导航栏标题文字内容
    navigationBarTitleText: 'WeChat',
    // 导航栏标题颜色
    navigationBarTextStyle: 'black'
  }
}

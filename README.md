# Taro 渐进式教程

## 简介

Taro 官方的[渐进式入门教程](https://taro-docs.jd.com/docs/guide)写的不是很好，不符合初学者的思路，而且不能做到完全复制粘贴可用，所以这里自己写一个。

本教程使用 [JSON Server](https://github.com/typicode/json-server) 搭建后端服务，使用 [Vue3](https://cn.vuejs.org/)（[Composition API](https://cn.vuejs.org/guide/extras/composition-api-faq.html)） + [TypeScript](https://www.tslang.cn/index.html) + [Pinia](https://pinia.vuejs.org/zh/) + [Sass](https://www.sass.hk/) 开发一个简单的图书管理系统。

开发环境为 Windows，用的人最多，能解决掉的问题也最多。

文档：[https://duanluan.github.io/taro-guide/](https://duanluan.github.io/taro-guide/)

## 文档说明

- 我的个人习惯是将软件安装到`D:\ProgramFiles\`，将缓存保存到`D:\Cache\`。
- 看到有`$`符号的代码块，说明就是要在 **cmd**（命令提示符）或 **PowerShell** 中执行命令。

    ```shell
    # 注释
    $ 执行的命令
    执行命令显示出的文本
    ```

- 文中选择`pnpm`进行包管理，`npm`和`yarn`的命令区别自行搜索调整。
- 安装、配置软件后命令行仍提示找不到等错误，一般要新开一个命令行窗口，以让环境变量生效。

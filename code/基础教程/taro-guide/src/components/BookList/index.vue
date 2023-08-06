<template>
  <view>
    <view v-for="book in books" :key="book.id" :class="styles.bookItem">
      <view :class="styles.bookCover">
        <image :src="book.coverUrl" alt="封面" mode="aspectFill"/>
      </view>
      <view :class="styles.bookAttrs">
        <view :class="styles.bookTitle">
          <text>{{ book.name }}</text>
        </view>
        <view :class="styles.bookAuthorsAndPress">
          <text v-for="author in book.authorList">{{ author.name }} /</text>
          <text v-for="pressName in book.pressNames">{{ pressName }} /</text>
          <text>{{ book.publicationTime }}</text>
        </view>
        <view :class="styles.bookDesc">
          <text>{{ book.desc }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<!-- 单文件组件 - <script setup>：https://cn.vuejs.org/api/sfc-script-setup.html#script-setup -->
<script setup lang="ts">
import {onMounted, ref} from 'vue';
import Taro from '@tarojs/taro';
// 小程序中不支持 <style scoped>，使用 cssModules 代替：https://github.com/NervJS/taro/issues/6662
import styles from './index.module.scss';

// 响应式对象，存储图书列表。组合式 API - 响应式：核心 - ref()：https://cn.vuejs.org/api/reactivity-core.html#ref
const books = ref([] as Book[])

// 组件挂载完成后执行。组合式 API：生命周期钩子 - onMounted()：https://cn.vuejs.org/api/composition-api-lifecycle.html#onmounted
onMounted(() => {
  // 网络 - 发起请求 - request：https://taro-docs.jd.com/docs/apis/network/request/
  Taro.request({
    url: 'http://localhost:3000/books',
    success: (res) => {
      books.value = res.data;

      books.value.forEach((book: Book) => {
        // 获取图书相关人员
        Taro.request({
          url: `http://localhost:3000/authors?${book.authors.map(authorId => `id=${authorId}`).join('&')}`,
          success: (res) => {
            book.authorList = [];
            for (const author of res.data) {
              if (author.type === 1 || author.type === 2) {
                book.authorList.push(author);
              }
            }
          }
        });

        // 获取图书出版社
        Taro.request({
          url: `http://localhost:3000/dicts?type=press&${book.presses.map(pressId => `value=${pressId}`).join('&')}`,
          success: (res) => {
            book.pressNames = [];
            for (const press of res.data) {
              book.pressNames.push(press.name);
            }
          }
        });
      })
    }
  })
});

</script>

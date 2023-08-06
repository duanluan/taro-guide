<template>
  <!-- 根视图 -->
  <view class="index">
    <!--&lt;!&ndash; Counter 组件 &ndash;&gt;-->
    <!--<Counter/>-->
    <!-- 图书列表组件 -->
    <BookList />
  </view>
</template>

<script>
// 引入样式文件
import './index.scss'
// // 引入 Counter 组件
// import Counter from '../../components/Counter.vue'
import BookList from "../../components/BookList";

export default {
  // 组件名称
  name: 'Index',
  // 注册组件
  components: {
    // Counter,
    BookList
  }
}
</script>

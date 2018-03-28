<template>
  <div>
    <button @click="add">add</button>
    <t-scroll-view>
      <template scope="scrolldata">
        scrolldata: {{scrolldata}}
        <div v-show="scrolldata.isOverToping">拉取加载数据</div>
        <div v-show="scrolldata.isOverTop">加载数据ing</div>
        <div v-for="n in lists">{{n}}</div>
        scrolldata: {{scrolldata}}
        <div v-show="scrolldata.isOverBottoming">拉取加载数据</div>
        <div v-show="scrolldata.isOverBottom">加载数据ing</div>
      </template>
    </t-scroll-view>
  </div>
</template>
<script>
import Vue from "vue";
import ScrollView from "./com/scrollview";
Vue.use(ScrollView);
export default {
  data() {
    return {
      lists: 100
    };
  },
  methods: {
    add() {
      this.$data.lists += 10;
    }
  },
  components: {}
};
</script>

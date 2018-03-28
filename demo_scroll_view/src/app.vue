<template>
  <div>
    <t-scroll-view>
      <template scope="fuck">
        fuck: {{fuck}}
        <div v-for="n in 200">{{n}}</div>
      </template>
    </t-scroll-view>
    <button @click="add">add</button>
  </div>
</template>
<script>
import Vue from "vue";
import ScrollView from "./com/scrollview";
Vue.use(ScrollView);
export default {
  data() {
    return {
      value: { x: 0, y: 1 }
    };
  },
  methods: {
    add() {
      this.$data.value.x += 100;
      this.$data.value.y += 100;
    }
  },
  components: {}
};
</script>

<template>
  <div>
    <button @click="add">add</button>
  </div>
</template>
<script>
import Vue from "vue";

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

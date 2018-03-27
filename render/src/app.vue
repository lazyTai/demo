<template>
    <div>
        <t-animate :to="value">
            <div slot-scope="scope">
                <div v-html='scope'></div>
            </div>
        </t-animate>
        <button @click="add">add</button>
    </div>
</template>
<script>
import Vue from "vue";
import { TAnimate } from "./animate.js";
Vue.use(TAnimate.name, TAnimate);
function _clone(value) {
  return JSON.parse(JSON.stringify(value));
}

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
  components: {
    "t-animate": TAnimate
  }
};
</script>

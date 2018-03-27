<template>
    <div>
        <t-animate :to="JSON.stringify( JSON.parse(value))">
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
      value: 0
    };
  },
  methods: {
    add() {
      this.$data.value += 100;
    }
  },
  components: {
    "t-animate": TAnimate
  }
};
</script>

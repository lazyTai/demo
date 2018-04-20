<template>
    <t-animate :to="value" class="containter">
        <Content slot-scope="scope">
            <slot name="fuck" />
            <div v-html='scope'></div>
        </Content>

    </t-animate>

</template>
<script>
import Vue from "vue/dist/vue.js";
import { TAnimate } from "../animate.js";
import Content from "./scrollcontent.vue";
Vue.use(TAnimate.name, TAnimate);
export default {
  data() {
    return {
      value: { top: 0 }
    };
  },
  components: {
    "t-animate": TAnimate,
    Content
  }
};
</script>

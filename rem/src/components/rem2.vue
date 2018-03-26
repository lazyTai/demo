<template>
  <div class="rem2">
    <div class="image_header">
      <img src="../public\images\3-19_01.png" alt="">
    </div>
    <div class="three_image">
      <div class="image1 image">
        <img src="../public\images\3-19_04.png" alt="">
      </div>
      <div class="image2 image">
        <img src="../public\images\3-19_06.png" alt="">
      </div>
      <div class="image3 image">
        <img src="../public\images\3-19_08.gif" alt="">
      </div>
    </div>
  </div>
</template>
<style>
/* 1.設計圖 640px */
/* 直接使用px模式 */

/* 1 为什么要使用rem
如果使用px直接在手机上就是640px
有些手机就320px
怎么办
需要缩小1/2
 */
</style>

<script>
import "./style/rem2.css";
import './util/taobao'
export default {
  mounted() {
    // document.documentElement.style.fontSize = "62.5%";
  }
};
</script>

<template>
  <div class="app">
    <div class="image_header">
      <img src="../public\images\3-19_01.png" alt="">
    </div>
    <div class="three_image">
      <div class="image1">
        <img src="../public\images\3-19_04.png" alt="">
      </div>
      <div class="image2">
        <img src="../public\images\3-19_06.png" alt="">
      </div>
      <div class="image3">
        <img src="../public\images\3-19_08.gif" alt="">
      </div>
    </div>
  </div>
</template>
<style>
@import url("../src/reset.css");
html,
body {
  max-width: 640px;
  margin: 0 auto;
}
/* 1.設計圖 640px */
/* 直接使用px模式 */

/* 1 为什么要使用rem */
.three_image {
  display: flex;
  padding: 0 12px 0 12px;
}
.three_image .image2 {
  margin-left: 17px;
}
.three_image .image3 {
  margin-left: 17px;
}
.image_header {
  width: 640px;
  height: 738px;
}
.image_header img {
  width: 100%;
  height: 100%;
}
.three_image {
  margin-top: 50px;
  width: 100%;
}
</style>

<script>
export default {};
</script>
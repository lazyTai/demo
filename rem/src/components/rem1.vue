<template>
  <div class="body">
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

/* 640px的设计稿 
普通字体大小 16px */

/* 在320px的界面上
 普通字体大小 8px


 rem是根据html的字体变化大小的单位
 html:font-size->100px;
 那么 100px-->1rem

html:font-size->640px;
 那么 100px-->6.4rem
这样太麻烦了
要是100px->还是能1rem表示呢？
也就是 html:font-size->100px;
 */
html,
body {
  font-size: 100px;
  max-width: 6.40rem;
  margin: 0 auto;
}
/* 1.設計圖 640px */
/* 直接使用px模式 */

/* 1 为什么要使用rem
如果使用px直接在手机上就是640px
有些手机就320px
怎么办
需要缩小1/2
 */
.three_image {
  display: flex;
  padding: 0 0.12rem 0 0.12rem;
}
.three_image .image2 {
  margin-left: 0.17rem;
}
.three_image .image3 {
  margin-left: 0.17rem;
}
.image_header {
  width: 6.4rem;
  height: 7.38rem;
}
.image_header img {
  width: 100%;
  height: 100%;
}
.three_image {
  margin-top: 0.5rem;
  width: 100%;
}
</style>

<script>
export default {};
</script>

<template>
  <!-- 国际热点 有轮播 -->
  <al-section class="widget-index-section-hot">
    <al-image
      class="layout-mobile-only"
      src="./images/section-hot.png"
    ></al-image>
    <al-image
      class="layout-desktop-full"
      src="./images/section-hot-pc.png"
    ></al-image>
  </al-section>
</template>
<style lang="scss">
.widget-index-section-hot {
  margin-top: vw(-96);
  @include layout-desktop-full {
    margin-top: px2vw(-178);
  }
}
</style>
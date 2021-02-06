<template>
  <!-- 序幕 -->
  <al-section class="widget-index-section-prelude">
    <div class="prelude-wrapper">
      <div class="section-prelude-context">
        <p class="prelude-text">时尚仿佛一个轮回，经典总在重复。</p>
        <p class="prelude-text">
          在家居里，我们期待你的家不被流行和时尚所左右，我们理解时尚的定义和规律，却更愿意在你的家中创造一个一个的经典。让你在这些潮流里——看到家的内核和心里最柔软的需求。
        </p>
      </div>
    </div>
    <al-image
      class="layout-mobile-only"
      src="./images/section-prelude.png"
    ></al-image>
    <al-image
      class="layout-desktop-full"
      src="./images/section-prelude-pc.png"
    ></al-image>
  </al-section>
</template>
<style lang="scss">
.widget-index-section-prelude {
  margin-top: vw(60);
  padding: 0 vw(40);
  .prelude-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    margin: 0 vw(40);
  }
  @include layout-desktop-full {
    margin-top: px2vw(100);
    padding: 0 px2vw(97) 0 px2vw(450);
    .prelude-wrapper {
      position: relative;
      width: px2vw(1370);
    }
  }
  .section-prelude-context {
    position: absolute;
    top: vw(225);
    left: vw(80);
    width: vw(508);
    @include layout-desktop-full {
      top: px2vw(225);
      left: px2vw(185);
      width: px2vw(700);
    }
  }
  .prelude-text {
    text-align: justify;
    color: #727272;
    margin-bottom: vw(16);
    font-size: vw(20);
    line-height: vw(40);
    @include layout-desktop-full {
      margin-bottom: px2vw(24);
      font-size: px2vw(16);
      line-height: px2vw(32);
    }
    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
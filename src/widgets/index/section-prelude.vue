<template>
  <!-- 序幕 -->
  <div class="widget-index-section-prelude">
    <div class="section-prelude-context">
      <p class="prelude-text">时尚仿佛一个轮回，经典总在重复。</p>
      <p class="prelude-text">
        在家居里，我们期待你的家不被流行和时尚所左右，我们理解时尚的定义和规律，却更愿意在你的家中创造一个一个的经典。让你在这些潮流里——看到家的内核和心里最柔软的需求。
      </p>
    </div>
    <al-image src="./images/section-prelude.png"></al-image>
  </div>
</template>
<style lang="scss">
.widget-index-section-prelude {
  margin-top: vw(60);
  padding: 0 vw(40);
  position: relative;
  .section-prelude-context {
    position: absolute;
    top: vw(225);
    left: vw(120);
    width: vw(508);
  }
  .prelude-text {
    text-align: justify;
    color: #727272;
    margin-bottom: vw(16);
    font-size: vw(20);
    line-height: vw(40);
    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
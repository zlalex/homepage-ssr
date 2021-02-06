<template>
  <al-section class="widget-index-section-discount">
    <div class="discount-wrapper">
      <widget-description
        title="展大，优惠更大"
        :subtitle="['神秘万元黄金...新春金牛福气至。']"
        :description="[
          '“叮！”牛年新春好礼派送，价值万元的Au99.9黄金大礼。',
          '甬城8年，星杰传统之开年大展，规模大，优惠更大。',
        ]"
      ></widget-description>
    </div>
    <div class="discount-image">
      <al-image src="./images/section-gold-bg.png"></al-image>
    </div>
  </al-section>
</template>
<style lang="scss">
.widget-index-section-discount {
  padding-top: vw(100);
  .discount-wrapper {
    width: vw(670);
    margin: 0 auto;
  }
  .discount-image {
    margin-top: vw(50);
  }
}
</style>
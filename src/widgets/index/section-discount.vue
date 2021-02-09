<template>
  <al-section class="widget-index-section-discount">
    <div class="discount-wrapper">
      <widget-description
        :align-left="!$isMobile"
        class="discount-title"
        title="展大，优惠更大"
        :subtitle="
          $isMobile
            ? ['神秘万元黄金...新春金牛福气至。']
            : ['神秘万元黄金...', '新春金牛福气至。']
        "
        :description="[
          '“叮！”牛年新春好礼派送，价值万元的Au99.9黄金大礼。',
          '甬城8年，星杰传统之开年大展，规模大，优惠更大。',
        ]"
      >
        <template #after>
          <div
            class="discount-booking-button layout-desktop-full"
            @click="handleBooking"
          >
            <a class="booking-anchor">预约来看展</a>
          </div>
        </template>
      </widget-description>
    </div>
    <div class="discount-image">
      <al-image
        class="layout-mobile-only"
        src="./images/section-gold-bg.png"
      ></al-image>
      <al-image
        class="layout-desktop-full"
        src="./images/section-gold-bg-pc.jpg"
      ></al-image>
    </div>
  </al-section>
</template>
<script>
export default {
  methods: {
    handleBooking() {
      this.$EVENT_BUS.$emit("SHOW_POPUP");
    },
  },
};
</script>
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
  .booking-anchor {
    font-style: normal;
    text-decoration: none;
    color: #1b1b1b;
  }
  @include layout-desktop-full {
    position: relative;
    margin-top: px2vw(-200);
    padding-top: 0;
    .discount-title {
      position: absolute;
      width: px2vw(510);
      left: px2vw(210);
    }
    .discount-wrapper {
      margin: 0;
    }
    .discount-booking-button {
      margin-top: px2vw(64);
      width: px2vw(150);
      height: px2vw(40);
      text-align: center;
      line-height: px2vw(40);
      border: 1px solid #d52c3f;
      font-size: px2vw(14);
      border-radius: px2vw(5);
    }
  }
}
</style>
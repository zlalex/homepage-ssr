<template>
  <al-section class="widget-index-section-booking-before">
    <div class="booking-before-wrapper">
      <widget-description
        class="patent-description"
        title="国际别墅大宅设计展"
        :subtitle="
          $isMobile
            ? ['距离您的时尚家，', '仅一 “展“ 之遥。']
            : ['距离您的时尚家，仅一“展”之遥。']
        "
        :description="['立即预约观展，看家居时尚。2月28日，星期天全天。']"
      ></widget-description>
    </div>
    <booking-button
      class="booking-before-button"
      @click="handleBooking"
    ></booking-button>
    <div class="booking-before-icon layout-mobile-only">
      <al-icon name="arrowSimple" position="bottom"></al-icon>
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
.widget-index-section-booking-before {
  margin-top: vw(100);
  padding: 0 vw(40);
  .booking-before-wrapper {
    margin-bottom: vw(35);
  }
  .booking-before-icon {
    width: vw(24);
    height: vw(14);
    margin: vw(100) auto 0;
  }
  @include layout-desktop-full {
    margin-top: px2vw(180);
    .booking-before-wrapper {
      margin-bottom: px2vw(35);
    }
  }
}
</style>
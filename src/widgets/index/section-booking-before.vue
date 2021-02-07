<template>
  <al-section class="widget-index-section-booking-before">
    <div class="booking-before-wrapper">
      <widget-description
        class="patent-description"
        title="国际别墅大宅设计展"
        :subtitle="['距离您的时尚家，', '仅一 “展“ 之遥。']"
        :description="['立即预约观展，看家居时尚。2月28日，星期天全天。']"
      ></widget-description>
    </div>
    <booking-button class="booking-before-button"></booking-button>
    <div class="booking-before-icon">
      <al-icon name="arrowSimple" position="bottom"></al-icon>
    </div>
  </al-section>
</template>
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
}
</style>
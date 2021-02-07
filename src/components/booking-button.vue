<template>
  <div class="component-booking-button">
    <a href="#booking" class="component-booking-button__inner">{{ text }}</a>
  </div>
</template>
<script>
export default {
  name: "booking-button",
  props: {
    text: {
      type: String,
      default: () => "预约",
    },
  },
};
</script>
<style lang="scss">
.component-booking-button {
  @include flex-center;
  .component-booking-button__inner {
    display: block;
    width: vw(120);
    line-height: vw(36);
    font-size: vw(14);
    font-weight: bold;
    text-align: center;
    color: #1b1b1b;
    border: 1px solid #d52c3f;
    border-radius: vw(20);
    font-style: normal;
    text-decoration: none;
    @include layout-desktop-full {
      width: px2vw(120);
      line-height: px2vw(36);
      font-size: px2vw(14);
      border-radius: px2vw(20);
    }
  }
}
</style>
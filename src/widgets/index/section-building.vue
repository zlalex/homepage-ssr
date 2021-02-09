<template>
  <!-- 热装盘 -->
  <al-section class="widget-index-section-building">
    <div class="widget-building-content">
      <widget-description
        title="国际风尚"
        :subtitle="['新春第一展，', '送您的是别墅里的经典与永恒。']"
      ></widget-description>
      <p class="util-text-center building-info">
        本届国际别墅大宅设计展能看到什么？预约了解详情。
      </p>
      <booking-button
        @click="handleBooking"
        class="building-content-button"
      ></booking-button>
    </div>

    <div class="building-bg">
      <div class="building-bg-context">
        <div class="building-bg-context__inner">
          <p class="building-bg-title">打造理想家</p>
          <p class="building-bg-text">
            您的宅邸，就应放视大赏。 甬城高端名宅深度解析，
          </p>
          <p class="building-bg-text">只为您。</p>
        </div>
        <al-image
          class="layout-desktop-full"
          src="./images/section-building-content-pc.png"
        ></al-image>
      </div>
      <div class="building-bg-image">
        <al-image
          class="layout-mobile-only"
          src="./images/section-building-bg.png"
        ></al-image>
        <al-image
          class="layout-desktop-full"
          src="./images/section-building-bg-pc.png"
        ></al-image>
      </div>
    </div>

    <div class="building-list">
      <div class="building-list-description">
        <div class="layout-mobile-only">
          <p class="description-text">焕，焕发精彩，</p>
          <p class="description-text">做全小区最靓的宅。</p>
        </div>
        <p class="description-text layout-desktop-full">
          焕，焕发精彩，做全小区最靓的宅。
        </p>
        <p class="description-minify layout-mobile-only">
          甬城名宅，设计师一对一专属方案解析。
        </p>
        <p class="description-minify layout-desktop-full">
          甬城名宅现场专区，设计师一对一专属方案解析。
        </p>
        <div class="booking-now-button layout-desktop-full">立即报名</div>
      </div>
      <al-image
        class="layout-mobile-only"
        src="./images/section-building.png"
      ></al-image>
      <al-image
        class="layout-desktop-full"
        src="./images/section-building-list-pc.png"
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
.widget-index-section-building {
  color: #1b1b1b;
  .building-bg-context {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .building-bg-context__inner {
    position: absolute;
    top: vw(80);
    left: vw(90);
    width: vw(478);
  }
  .building-bg-image {
    width: 100%;
    height: 100%;
  }
  .building-bg-title {
    margin-bottom: vw(24);
    color: #ddcdb7;
    font-weight: bold;
    font-size: vw(18);
    line-height: vw(18);
  }
  .building-bg-text {
    color: #fff;
    font-weight: bold;
    font-size: vw(40);
    line-height: vw(52);
    text-align: justify;
    letter-spacing: -1px;
  }
  .widget-building-content {
    padding: vw(50) 0;
  }
  .building-info {
    margin-top: vw(35);
    font-size: vw(18);
    line-height: vw(28);
  }
  .building-content-button {
    margin-top: vw(35);
  }
  .building-list {
    position: relative;
  }
  .building-list-description {
    position: absolute;
    left: 50%;
    top: vw(216);
    width: 80%;
    transform: translateX(-50%);
  }
  .description-text,
  .description-minify {
    color: #fff;
    text-align: center;
  }
  .description-text {
    font-size: vw(48);
    font-weight: bold;
    line-height: vw(52);
  }

  .description-minify {
    margin-top: vw(40);
    font-size: vw(20);
    line-height: vw(20);
  }
  .booking-now-button {
    margin: 0 auto;
    width: px2vw(120);
    height: px2vw(36);
    color: #fff;
    text-align: center;
    font-size: px2vw(14);
    line-height: px2vw(36);
    border: 1px solid #ebd1a9;
    border-radius: px2vw(18);
  }
  @include layout-desktop-full {
    width: px2vw(1500);
    margin: 0 auto;
    .building-info {
      margin-top: px2vw(25);
      font-size: px2vw(18);
      line-height: px2vw(28);
    }
    .building-content-button {
      margin-top: px2vw(35);
    }
    .widget-building-content {
      padding: px2vw(140) 0 px2vw(80);
    }
    .building-bg {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
    }
    .building-bg-context__inner {
      top: px2vw(80);
      left: px2vw(90);
      width: px2vw(478);
    }
    .building-bg-context {
      height: px2vw(550);
    }

    .building-bg-title {
      margin-bottom: px2vw(24);
      font-size: px2vw(18);
      line-height: px2vw(18);
    }
    .building-bg-text {
      font-size: px2vw(40);
      line-height: px2vw(52);
    }
    .building-list-description {
      top: px2vw(225);
    }
    .description-text {
      font-size: px2vw(48);
      line-height: px2vw(48);
    }
    .description-minify {
      margin-top: px2vw(20);
      margin-bottom: px2vw(32);
      font-size: px2vw(20);
      line-height: px2vw(20);
    }
  }
}
</style>
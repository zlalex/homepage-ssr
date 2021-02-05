<template>
  <!-- 热装盘 -->
  <al-section class="widget-index-section-building">
    <div class="widget-building-content">
      <colorful-text class="util-text-center building-title">
        国际风尚
      </colorful-text>
      <p class="util-text-center building-text">新春第一展，</p>
      <p class="util-text-center building-text">送您的是别墅里的经典与永恒。</p>
      <p class="util-text-center building-info">
        本届国际别墅大宅设计展能看到什么？预约了解详情。
      </p>
      <div class="building-content-button">
        <span class="building-content-button__inner">预约</span>
      </div>
    </div>

    <div class="building-bg">
      <div class="building-bg-context">
        <p class="building-bg-title">打造理想家</p>
        <p class="building-bg-text">
          您的宅邸，就应放视大赏。 甬城高端名宅深度解析，
        </p>
        <p class="building-bg-text">只为您。</p>
      </div>
      <al-image src="./images/section-building-bg.png"></al-image>
    </div>

    <div class="building-list">
      <div class="building-list-description">
        <p class="description-text">焕，焕发精彩，</p>
        <p class="description-text">做全小区最靓的宅。</p>
        <p class="description-minify">甬城名宅，设计师一对一专属方案解析。</p>
      </div>
      <al-image src="./images/section-building.png"></al-image>
    </div>
  </al-section>
</template>

<style lang="scss">
.widget-index-section-building {
  color: #1b1b1b;
  .building-bg {
    position: relative;
  }
  .building-bg-context {
    position: absolute;
    top: vw(80);
    left: vw(90);
    width: vw(478);
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
  .building-title {
    font-weight: bold;
    font-size: vw(24);
    line-height: vw(58);
  }
  .building-title {
    color: #d52c3f;
  }
  .building-text {
    font-size: vw(40);
    line-height: vw(56);
    font-weight: bold;
  }
  .building-info {
    margin-top: vw(35);
    font-size: vw(18);
    line-height: vw(28);
  }
  .building-content-button {
    @include flex-center;
    margin-top: vw(35);
    .building-content-button__inner {
      display: block;
      width: vw(120);
      line-height: vw(34);
      font-size: vw(14);
      font-weight: bold;
      text-align: center;
      color: #1b1b1b;
      border: 1px solid #d52c3f;
      border-radius: vw(18);
    }
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
}
</style>
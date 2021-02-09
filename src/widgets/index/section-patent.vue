<template>
  <al-section class="widget-index-section-patent">
    <div class="patent-wrapper">
      <widget-description
        class="patent-description"
        align-left
        title="国家专利技术"
        :subtitle="[
          '现代施工工艺推陈出新，',
          '星杰数十年钻研和传承，',
          '专注坚守质量大关。',
        ]"
      ></widget-description>
    </div>
    <div class="patent-image">
      <al-image
        class="layout-desktop-full"
        src="./images/patent-bg-pc.png"
      ></al-image>
      <al-image
        class="layout-mobile-only"
        src="./images/section-patent-bg.png"
      ></al-image>
    </div>
  </al-section>
</template>
<style lang="scss">
.widget-index-section-patent {
  padding-top: vw(134);
  background: #f8f7f7;
  .patent-description {
    width: vw(460);
    margin: 0 auto;
  }
  .patent-image {
    margin: 0 auto;
    padding-top: vw(100);
  }
  @include layout-desktop-full {
    padding: 0;
    .patent-wrapper {
      position: relative;
    }
    .patent-description {
      position: absolute;
      top: px2vw(125);
      left: px2vw(90);
      .description-title {
        margin-bottom: px2vw(10);
        font-size: px2vw(20);
      }
      .description-subtitle {
        font-size: px2vw(30);
        line-height: px2vw(40);
      }
    }
    .patent-image {
      margin: 0;
      padding: 0;
    }
  }
}
</style>
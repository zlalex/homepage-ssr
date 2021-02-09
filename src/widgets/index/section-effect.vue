<template>
  <al-section class="widget-index-section-effect">
    <div class="section-effect-wrapper">
      <div class="effect-swiper">
        <div class="swiper-active-number">
          0{{ effectSwiperActiveIndex + 1 }}.
        </div>
        <div class="effect-swiper-content">
          <widget-description
            class="effect-title"
            align-left
            :title="swiperImage.title"
            :subtitle="swiperImage.subtitle"
            :description="swiperImage.description"
          >
            <div class="split-line layout-mobile-only"></div>
          </widget-description>
          <div class="effect-swiper-control layout-desktop-full">
            <div class="item-control">
              <al-icon
                class="item-control-arrow"
                name="arrowGray"
                position="left"
                @click="handleSwiperNext(-1)"
              ></al-icon>
              <al-icon
                class="item-control-arrow"
                name="arrowGray"
                position="right"
                @click="handleSwiperNext(1)"
              ></al-icon>
            </div>
          </div>
          <div class="effect-swiper-card">
            <div class="effect-swiper-item">
              <!-- <al-image
                class="effect-swiper-item__image"
                :src="swiperImage.small"
              ></al-image> -->
              <swiper
                class="effect-swiper-item__image"
                ref="swiper"
                :options="swiperOptions"
              >
                <swiper-slide
                  v-for="(src, index) in effectSwiperDetail"
                  :key="index"
                >
                  <al-image :src="src.small"></al-image>
                </swiper-slide>
              </swiper>
              <div class="effect-swiper-item__inner">
                <div class="effect-swiper-control layout-mobile-only">
                  <div class="item-title">
                    <span class="swiper-item-subtitle">{{
                      swiperImage.swiperSubtitle
                    }}</span>
                    <span class="split-arrow">></span>
                    <span class="swiper-item-title">{{
                      swiperImage.swiperTitle
                    }}</span>
                  </div>
                  <div class="item-tags">
                    <span
                      class="item-tag"
                      v-for="(item, i) in swiperImage.tags"
                      :key="i"
                      >{{ item }}</span
                    >
                  </div>
                  <div class="item-control">
                    <al-icon
                      name="arrow"
                      position="left"
                      @click="handleSwiperNext(-1)"
                    ></al-icon>
                    <al-icon
                      name="arrow"
                      position="right"
                      @click="handleSwiperNext(1)"
                    ></al-icon>
                  </div>
                </div>
                <div class="effect-dots">
                  <span
                    class="effect-dot-item"
                    :class="{ active: effectSwiperActiveIndex === i }"
                    v-for="(item, i) in effectSwiperDetail"
                    :key="i"
                  ></span>
                </div>
                <p class="effect-description-desktop layout-desktop-full">
                  {{ swiperImage.descriptionDesktop }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 高斯模糊 -->
      <div class="filter-style layout-mobile-only">
        <div class="filter-style-content">
          <al-image class="filter-image" :src="swiperImage.large"></al-image>
        </div>
      </div>

      <al-image :src="swiperImage.large"></al-image>
    </div>
  </al-section>
</template>
<script>
const effectSwiperDetail = [
  {
    small: "./images/effect-swiper-small-1.jpg",
    large: "./images/effect-swiper-1.jpg",
    title: "创无可界",
    subtitle: ["空间改造可能不大，", "但你的小宇宙并不小。"],
    description: [
      "旧房设计可能已经无法满足你的审美需求，",
      "亦或是精装房千篇一律、批量复制。",
      "现在就告别平庸，你的新家应该独树一帜。",
    ],
    descriptionDesktop:
      "旧房设计可能已经无法满足你的审美需求，亦或是精装房千篇一律、批量复制。现在就告别平庸，你的新家应该独树一帜。",
    desktopSmall: "./images/effect-swiper-pc-small-1.jpg",
    desktopLarge: "./images/effect-swiper-pc-1.jpg",
    swiperTitle: "视 觉",
    swiperSubtitle: "房屋改造",
    tags: ["旧房", "精装房", "自建房"],
  },
  {
    small: "./images/effect-swiper-small-2.jpg",
    large: "./images/effect-swiper-2.jpg",
    title: "设计功能",
    subtitle: ["曾今你可能有过妥协，", "如今你不将就。"],
    description: [
      "旧房、精装房、自建房的室内空间在功能上可能并不符合你的",
      "预期。通过空间改造满足使用者的需求，比如厨房改造、楼梯",
      "改造、卫生间改造、电力系统、水循环系统改造等。",
    ],
    descriptionDesktop:
      "旧房、精装房、自建房的室内空间在功能上可能并不符合你的预期。通过空间改造满足使用者的需求，比如厨房改造、楼梯改造、卫生间改造、电力系统、水循环系统改造等。",
    desktopSmall: "./images/effect-swiper-pc-small-2.jpg",
    desktopLarge: "./images/effect-swiper-pc-2.jpg",
    swiperTitle: "功 能",
    swiperSubtitle: "房屋改造",
    tags: ["旧房", "精装房", "自建房"],
  },
  {
    small: "./images/effect-swiper-small-3.jpg",
    large: "./images/effect-swiper-3.jpg",
    title: "居住体验",
    subtitle: ["会呼吸的大宅，", "为它注入新的生命力。"],
    description: [
      "舒适的居住体验是一套别墅大宅必备的属性。通过改造在满足",
      "使用者功能需求的同时，其实也增强了用户体验。如灯光改造",
      "、新风系统、采暖系统改造、空间智能化改造等。",
    ],
    descriptionDesktop:
      "舒适的居住体验是一套别墅大宅必备的属性。通过改造在满足使用者功能需求的同时，其实也增强了用户体验。如灯光改造、新风系统、采暖系统改造、空间智能化改造等。",
    desktopSmall: "./images/effect-swiper-pc-small-3.jpg",
    desktopLarge: "./images/effect-swiper-pc-3.jpg",
    swiperTitle: "体 验",
    swiperSubtitle: "房屋改造",
    tags: ["旧房", "精装房", "自建房"],
  },
];
export default {
  data() {
    const __this = this;
    return {
      effectSwiperActiveIndex: 0,
      effectSwiperDetail,
      swiperOptions: {
        loop: true,
        on: {
          slideChange(e) {
            __this.effectSwiperActiveIndex = e.realIndex;
          },
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.swiper.$swiper;
    },
    effectSwiperActive() {
      return this.effectSwiperDetail[(this, this.effectSwiperActiveIndex)];
    },
    swiperImage() {
      if (!this.effectSwiperActive) {
        return {};
      }
      const result = {
        title: this.effectSwiperActive.title,
        subtitle: this.effectSwiperActive.subtitle,
        description: this.$isMobile ? this.effectSwiperActive.description : [],
        swiperTitle: this.effectSwiperActive.swiperTitle,
        swiperSubtitle: this.effectSwiperActive.swiperSubtitle,
        tags: this.effectSwiperActive.tags,
        descriptionDesktop: this.effectSwiperActive.descriptionDesktop,
      };
      result.small = this.$isMobile
        ? this.effectSwiperActive.small
        : this.effectSwiperActive.desktopSmall;
      result.large = this.$isMobile
        ? this.effectSwiperActive.large
        : this.effectSwiperActive.desktopLarge;
      return result;
    },
  },
  methods: {
    handleSwiperNext(value) {
      let length = this.effectSwiperDetail.length;
      let index = this.effectSwiperActiveIndex + value;
      if (index < 0) {
        index = length - 1;
      } else if (index > length - 1) {
        index = 0;
      }
      this.swiper.slideTo(index + 1);
      this.effectSwiperActiveIndex = index;
    },
  },
};
</script>
<style lang="scss">
.widget-index-section-effect {
  padding: 0 vw(40);
  margin-top: vw(60);
  .section-effect-wrapper {
    position: relative;
    height: vw(1100);
  }
  .effect-swiper {
    padding: vw(128) 0 vw(72);
    z-index: 10;
    .colorful-text__inner {
      font-size: vw(30);
    }
    .description-title {
      margin-bottom: vw(26);
    }
    .description-subtitle {
      color: #fff;
    }
    .description-split {
      padding-top: 0;
    }
    .description-info {
      width: 100%;
      font-size: vw(20);
      line-height: vw(36);
      color: #fff;
    }
  }
  .filter-style-content,
  .effect-swiper {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: vw(920);
    border-top-left-radius: vw(40);
    border-top-right-radius: vw(40);
    overflow: hidden;
  }
  .swiper-active-number {
    position: absolute;
    z-index: 10;
    top: vw(76);
    right: vw(62);
    color: #fff;
    font-size: vw(18);
    line-height: vw(30);
  }
  .effect-swiper-content {
    width: vw(550);
    margin: 0 auto;
  }
  .split-line {
    margin: vw(56) 0 vw(45);
    width: vw(240);
    height: 1px;
    background-color: #fff;
    opacity: 0.15;
  }
  .effect-swiper-card {
    margin-top: vw(90);
    position: relative;
    z-index: 10;
    width: 100%;
    height: vw(240);
    &::after {
      width: 92%;
      top: vw(-10);
      opacity: 0.6;
    }
    &::before {
      width: 84%;
      top: vw(-20);
      opacity: 0.4;
    }
    &::after,
    &::before {
      content: "";
      position: absolute;
      z-index: 1;
      left: 50%;
      height: vw(240);
      border-radius: vw(20);
      background-color: #1b1b1b;
      transform: translateX(-50%);
    }
  }
  .effect-swiper-item__image {
    width: vw(240);
    border-radius: vw(20);
    overflow: hidden;
    @include layout-mobile-only {
      margin: 0;
    }
  }
  .effect-swiper-item {
    display: flex;
    position: relative;
    z-index: 10;
    height: 100%;
    background-color: #252525;
    border-radius: vw(20);
    overflow: hidden;
  }
  .effect-swiper-item__inner {
    margin-left: vw(34);
    padding-top: vw(40);
    width: vw(260);
    color: #b2b2b2;
    .item-title {
      display: flex;
      padding-left: vw(6);
      align-items: center;
    }
    .item-tags {
      display: flex;
      padding-left: vw(6);
      margin-top: vw(20);
    }
    .item-tag {
      margin-right: vw(10);
      padding: vw(6) vw(14);
      border: 1px solid #3b3b3a;
      font-size: vw(14);
      text-align: center;
      line-height: 1;
      border-radius: vw(20);
      &:last-of-type {
        margin-right: 0;
      }
    }
    .swiper-item-subtitle {
      font-size: vw(16);
      font-style: italic;
    }
    .split-arrow {
      margin: 0 vw(15);
      font-size: vw(14);
      color: #b2b2b2;
    }
    .swiper-item-title {
      position: relative;
      color: #fff;
      font-size: vw(24);
    }
    .item-control {
      display: flex;
      margin-top: vw(20);
      .component-icon {
        width: vw(66);
        height: vw(60);
        margin-right: vw(6);
        opacity: 0.3;
      }
    }
  }
  // 高斯模糊
  .filter-style {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .filter-style-content {
      border: 1px solid #999;
    }
    .filter-image {
      position: absolute;
      top: vw(-180);
      height: vw(1100);
    }
    .component-image-self {
      width: 200%;
      height: 200%;
      filter: blur(100px);
    }
  }
  .effect-swiper-control {
    height: vw(60);
  }
  @include layout-desktop-full {
    padding: 0;
    margin-top: px2vw(70);
    .section-effect-wrapper {
      height: px2vw(1068);
    }
    .effect-swiper {
      height: px2vw(1068);
      padding: 0;
      .effect-swiper-content {
        position: absolute;
        top: px2vw(212);
        right: px2vw(210);
        width: px2vw(800);
        height: px2vw(750);
        margin: 0;
      }
      .swiper-active-number {
        top: px2vw(146);
        right: px2vw(285);
        font-size: px2vw(14);
        line-height: px2vw(20);
      }
      .colorful-text__inner {
        font-size: px2vw(30);
      }
      .description-title {
        margin-bottom: px2vw(26);
      }
      .effect-title {
        width: px2vw(530);
        margin-left: px2vw(270);
      }
    }
    .effect-swiper-card {
      height: auto;
      margin-top: px2vw(110);
      border: 1px solid transparent;
      &::after,
      &::before {
        display: none;
      }
    }
    .effect-swiper-item {
      height: px2vw(300);
      background-color: transparent;
      overflow: inherit;
    }
    .effect-swiper-item,
    .effect-swiper-item__image {
      border-radius: 0;
    }
    .effect-swiper-control {
      margin-top: px2vw(50);
      padding-left: px2vw(270);
      height: px2vw(60);
    }
    .item-control {
      display: flex;
      height: px2vw(60);
      opacity: 0.3;
    }
    .item-control-arrow {
      width: px2vw(66);
    }
    .effect-swiper-item__image {
      position: absolute;
      left: px2vw(-311);
      width: px2vw(310);
      height: px2vw(300);
    }
    .effect-description-desktop {
      width: px2vw(620);
      margin-top: px2vw(30);
      font-size: px2vw(18);
      line-height: px2vw(28);
    }
    .effect-swiper-item__inner {
      margin-left: px2vw(70);
      padding-top: px2vw(65);
    }
    .effect-dots {
      display: flex;
      justify-content: space-between;
      width: px2vw(70);
    }
    .effect-dot-item {
      width: px2vw(8);
      height: px2vw(8);
      border: 1px solid #fff;
      border-radius: 50%;
      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>
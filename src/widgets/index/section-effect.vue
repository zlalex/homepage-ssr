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
          <div class="effect-swiper-control layout-desktop-full"></div>
          <div class="effect-swiper-card">
            <div class="effect-swiper-item">
              <al-image
                class="effect-swiper-item__image"
                :src="swiperImage.small"
              ></al-image>
              <div class="effect-swiper-item__inner">
                <div class="effect-swiper-control layout-mobile-only"></div>
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
    desktopSmall: "./images/effect-swiper-pc-small-1.jpg",
    desktopLarge: "./images/effect-swiper-pc-1.jpg",
  },
  {
    small: "./images/effect-swiper-small-2.jpg",
    large: "./images/effect-swiper-2.jpg",
    title: "创无可界",
    subtitle: ["空间改造可能不大，", "但你的小宇宙并不小。"],
    description: [
      "旧房设计可能已经无法满足你的审美需求，",
      "亦或是精装房千篇一律、批量复制。",
      "现在就告别平庸，你的新家应该独树一帜。",
    ],
    desktopSmall: "./images/effect-swiper-pc-small-2.jpg",
    desktopLarge: "./images/effect-swiper-pc-2.jpg",
  },
  {
    small: "./images/effect-swiper-small-3.jpg",
    large: "./images/effect-swiper-3.jpg",
    title: "创无可界",
    subtitle: ["空间改造可能不大，", "但你的小宇宙并不小。"],
    description: [
      "旧房设计可能已经无法满足你的审美需求，",
      "亦或是精装房千篇一律、批量复制。",
      "现在就告别平庸，你的新家应该独树一帜。",
    ],
    desktopSmall: "./images/effect-swiper-pc-small-3.jpg",
    desktopLarge: "./images/effect-swiper-pc-3.jpg",
  },
];
export default {
  data() {
    return {
      effectSwiperActiveIndex: 0,
      effectSwiperDetail,
    };
  },
  computed: {
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
    padding: vw(148) 0 vw(72);
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
    margin-top: vw(100);
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
    margin-left: vw(40);
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
      height: px2vw(60);
    }
    .effect-swiper-item__image {
      position: relative;
      left: px2vw(-311);
      width: px2vw(310);
      height: px2vw(300);
    }
  }
}
</style>
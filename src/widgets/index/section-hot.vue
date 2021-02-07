<template>
  <!-- 国际热点 有轮播 -->
  <al-section class="widget-index-section-hot">
    <div class="hot-wrapper">
      <div class="hot-context">
        <p class="hot-city-en">{{ activeSwiper.en }}</p>
        <p class="hot-city-title">{{ activeSwiper.title }}</p>
        <p class="hot-city-en-description">{{ activeSwiper.enDescription }}</p>
        <p class="hot-city-split-text">{{ activeSwiper.splitText }}</p>
        <div class="description-wrapper">
          <p
            class="cn-description-item"
            v-for="(item, i) in activeSwiper.description"
            :key="i"
          >
            {{ item }}
          </p>
        </div>
        <div class="swiper-dots">
          <span
            class="swiper-dot"
            :class="{ active: j === activeIndex + 1 }"
            v-for="j in hotDetail.length"
            :key="j"
          ></span>
        </div>
        <div class="hot-swiper-control">
          <al-icon
            name="arrowGray"
            position="left"
            @click="handleSwiperNext(-1)"
          ></al-icon>
          <al-icon
            name="arrowGray"
            position="right"
            @click="handleSwiperNext(1)"
          ></al-icon>
        </div>
      </div>
      <div class="swiper-round-active">0{{ activeIndex + 1 }}</div>
      <div class="swiper-item-a">
        <al-image :src="activeSwiper.imageA"></al-image>
      </div>
      <div class="swiper-item-b">
        <al-image :src="activeSwiper.imageB"></al-image>
      </div>
    </div>
    <al-image class="layout-mobile-only" :src="activeSwiper.mobile"></al-image>
    <al-image
      class="layout-desktop-full"
      :src="activeSwiper.desktop"
    ></al-image>
  </al-section>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
      hotDetail: [
        {
          mobile: "./images/hot-1.png",
          desktop: "./images/section-hot-pc-1.png",
          title: "我没去东京。",
          subtitle: "",
          en: "Tokyo.",
          enDescription: "but the story is never ends.",
          splitText: "撕裂与重组",
          description: [
            "日本有看不惯一切的习惯，喜欢在设计上进行破坏、涂抹、剥离、撕碎、不对称剪裁；运用缠绕、悬垂、层叠等方式来处理设计。",
            "潮流在日本当中扮演的角色,是一种生活方式。是艺术，将我们眼睛中的盲点取消，让我们发现了更多。",
          ],
          imageA: "./images/hot-1-a.jpg",
          imageB: "./images/hot-1-b.jpg",
        },
        {
          mobile: "./images/hot-2.png",
          desktop: "./images/section-hot-pc-2.png",
          title: "我没去巴黎。",
          subtitle: "",
          en: "Tokyo.",
          enDescription: "but the story is never ends.",
          splitText: "撕裂与重组",
          description: [
            "日本有看不惯一切的习惯，喜欢在设计上进行破坏、涂抹、剥离、撕碎、不对称剪裁；运用缠绕、悬垂、层叠等方式来处理设计。",
            "潮流在日本当中扮演的角色,是一种生活方式。是艺术，将我们眼睛中的盲点取消，让我们发现了更多。",
          ],
          imageA: "./images/hot-2-a.jpg",
          imageB: "./images/hot-2-b.jpg",
        },
        {
          mobile: "./images/hot-3.png",
          desktop: "./images/section-hot-pc-3.png",
          title: "我没去米兰。",
          subtitle: "",
          en: "Tokyo.",
          enDescription: "but the story is never ends.",
          splitText: "撕裂与重组",
          description: [
            "日本有看不惯一切的习惯，喜欢在设计上进行破坏、涂抹、剥离、撕碎、不对称剪裁；运用缠绕、悬垂、层叠等方式来处理设计。",
            "潮流在日本当中扮演的角色,是一种生活方式。是艺术，将我们眼睛中的盲点取消，让我们发现了更多。",
          ],
          imageA: "./images/hot-3-a.jpg",
          imageB: "./images/hot-3-b.jpg",
        },
        {
          mobile: "./images/hot-4.png",
          desktop: "./images/section-hot-pc-4.png",
          title: "我没去巴塞罗那。",
          subtitle: "",
          en: "Tokyo.",
          enDescription: "but the story is never ends.",
          splitText: "撕裂与重组",
          description: [
            "日本有看不惯一切的习惯，喜欢在设计上进行破坏、涂抹、剥离、撕碎、不对称剪裁；运用缠绕、悬垂、层叠等方式来处理设计。",
            "潮流在日本当中扮演的角色,是一种生活方式。是艺术，将我们眼睛中的盲点取消，让我们发现了更多。",
          ],
          imageA: "./images/hot-4-a.jpg",
          imageB: "./images/hot-4-b.jpg",
        },
      ],
    };
  },
  mounted() {
    if (!this.$isMobile) {
      this.hotDetail = this.hotDetail.map((item, i) => {
        item.imageA = `./images/hot-${i + 1}-a-pc.jpg`;
        item.imageB = `./images/hot-${i + 1}-b-pc.jpg`;
        return item;
      });
    }
  },
  computed: {
    activeSwiper() {
      return this.hotDetail[this.activeIndex];
    },
  },
  methods: {
    handleSwiperNext(value) {
      let length = this.hotDetail.length;
      let index = this.activeIndex + value;
      if (index < 0) {
        index = length - 1;
      } else if (index > length - 1) {
        index = 0;
      }
      this.activeIndex = index;
    },
  },
};
</script>
<style lang="scss">
.widget-index-section-hot {
  margin-top: vw(-96);
  position: relative;
  color: #fff;
  .hot-wrapper {
    position: absolute;
    top: vw(96);
    height: 100%;
    width: 100%;
    padding: 0 vw(90);
  }
  .hot-swiper-control {
    display: flex;
    align-items: center;
    .component-icon {
      width: vw(66);
      height: vw(60);
      opacity: 0.5;
    }
  }
  .swiper-item-a {
    position: absolute;
    z-index: 9;
    right: vw(40);
    bottom: vw(480);
    width: vw(320);
    height: vw(320);
    border-radius: vw(20);
    overflow: hidden;
  }
  .swiper-item-b {
    position: absolute;
    z-index: 10;
    left: vw(90);
    bottom: vw(260);
    width: vw(570);
    height: vw(320);
    border-radius: vw(20);
    overflow: hidden;
  }
  .hot-city-en {
    margin-top: vw(60);
    font-size: vw(14);
    color: #ddcdb7;
  }
  .hot-city-title {
    font-size: vw(42);
    font-weight: bold;
    line-height: vw(62);
  }
  .hot-city-en-description {
    margin-top: vw(12);
    font-size: vw(14);
  }
  .hot-city-split-text {
    position: relative;
    margin-top: vw(60);
    padding-left: vw(52);
    font-size: vw(18);
    font-weight: bold;
    font-style: italic;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: vw(9);
      width: vw(40);
      height: 1px;
      background-color: #fff;
    }
  }
  .cn-description-item {
    max-width: vw(570);
    margin-top: vw(20);
    font-size: vw(16);
    line-height: vw(22);
  }
  .swiper-dots {
    margin: vw(50) 0;
    width: vw(100);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .swiper-dot {
    width: vw(8);
    height: vw(8);
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.3);
    &.active {
      background-color: #fff;
      border-color: #fff;
    }
  }
  .swiper-round-active {
    position: absolute;
    top: vw(62);
    right: vw(90);
    width: vw(64);
    height: vw(64);
    color: #fff;
    font-size: vw(14);
    text-align: center;
    line-height: vw(64);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    overflow: hidden;
  }

  @include layout-desktop-full {
    margin-top: px2vw(-178);
    .hot-wrapper {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 0;
    }
    .hot-context {
      position: absolute;
      width: px2vw(450);
      top: px2vw(100);
      left: px2vw(210);
    }
    .hot-city-en {
      font-size: px2vw(14);
    }
    .hot-city-title {
      font-size: px2vw(42);
      line-height: px2vw(62);
    }
    .hot-city-en-description {
      margin-top: px2vw(12);
      font-size: px2vw(14);
    }
    .hot-city-split-text {
      margin-top: px2vw(60);
      padding-left: px2vw(52);
      font-size: px2vw(18);
      &::before {
        content: "";
        top: px2vw(9);
        width: px2vw(40);
      }
    }
    .cn-description-item {
      max-width: 100%;
      margin-top: px2vw(20);
      line-height: px2vw(22);
      font-size: px2vw(14);
    }

    .hot-swiper-control {
      .component-icon {
        width: px2vw(66);
        height: px2vw(60);
        opacity: 0.1;
      }
    }

    .swiper-item-a {
      right: px2vw(210);
      bottom: px2vw(250);
      width: px2vw(320);
      height: px2vw(320);
      border-radius: 0;
    }

    .swiper-item-b {
      left: auto;
      right: px2vw(620);
      bottom: px2vw(345);
      width: px2vw(570);
      height: px2vw(320);
      border-radius: 0;
    }
    .swiper-dots {
      margin: px2vw(50) 0;
      width: px2vw(100);
    }
    .swiper-dot {
      width: px2vw(8);
      height: px2vw(8);
    }
    .swiper-round-active {
      top: px2vw(270);
      right: auto;
      left: px2vw(580);
      width: px2vw(64);
      height: px2vw(64);
      font-size: px2vw(14);
      line-height: px2vw(64);
    }
  }
}
</style>
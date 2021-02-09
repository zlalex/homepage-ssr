<template>
  <!-- 国际热点 有轮播 -->
  <al-section
    class="widget-index-section-hot"
    :class="{ 'is-animate': isAnimate }"
  >
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
        <div class="hot-swiper-control layout-mobile-only">
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
      <div class="swiper-round-active__wrapper">
        <span
          class="swiper-round-active"
          :class="`active-${activeIndex}`"
        ></span>
        <span> 0{{ activeIndex + 1 }} </span>
      </div>
      <div class="swiper-item-a">
        <al-image :src="activeSwiper.imageA"></al-image>
      </div>
      <div class="swiper-item-b">
        <al-image :src="activeSwiper.imageB"></al-image>
      </div>
    </div>
    <al-image
      class="section-hot-bg layout-mobile-only"
      :src="activeSwiper.mobile"
    ></al-image>
    <al-image
      class="section-hot-bg layout-desktop-full"
      :src="activeSwiper.desktop"
    ></al-image>
  </al-section>
</template>
<script>
export default {
  data() {
    return {
      isAnimate: false,
      activeIndex: 0,
      timer: null,
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
          en: "Paris.",
          enDescription: "but the story is never ends.",
          splitText: "奢华与简约",
          description: [
            "巴黎在历史上一直被称作世界时尚的中心，他们技艺精湛的高级定制工作室、以及不计其数的高级时装品牌决定着每一季时尚的趋势走向。",
            "路易十四在全球引领最早的时尚之风，步入到21世纪的法国时尚生态渐渐地“弥散为”个人主义的多元取向。",
          ],
          imageA: "./images/hot-2-a.jpg",
          imageB: "./images/hot-2-b.jpg",
        },
        {
          mobile: "./images/hot-3.png",
          desktop: "./images/section-hot-pc-3.png",
          title: "我没去米兰。",
          subtitle: "",
          en: "Milan.",
          enDescription: "but the story is never ends.",
          splitText: "古典与热烈",
          description: [
            "佛罗伦萨教堂绚丽的穹顶，西西里热烈的夏天。",
            "如今的意大利米兰，是世界时尚与设计之都、时尚界最有影响力的城市之一。",
            "意大利时尚的秘密在于它既是对悠久历史文化的折射，同时又富含积极创新的具有时代和未来感的元素。",
          ],
          imageA: "./images/hot-3-a.jpg",
          imageB: "./images/hot-3-b.jpg",
        },
        {
          mobile: "./images/hot-4.png",
          desktop: "./images/section-hot-pc-4.png",
          title: "我没去巴塞罗那。",
          subtitle: "",
          en: "Barcelona.",
          enDescription: "but the story is never ends.",
          splitText: "绚丽与生机",
          description: [
            "美味tapas、热情的弗拉明戈、古怪的达利艺术、不寻常的高迪建筑、果味桑格利亚汽酒。",
            "西班牙时尚的灵感多来自于伊比利亚半岛上的景致、艺术和态度。西班牙人不惧大胆的图案和绚丽的色彩，灵活运用颜色、印花以及体量，谱写自己的时尚传奇。",
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
      this.timer = setInterval(() => {
        this.handleSwiperNext(1);
      }, 5e3);
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
      this.triggerAnimate();
    },
    triggerAnimate() {
      if (!this.isAnimate) {
        this.isAnimate = true;
        setTimeout(() => {
          this.isAnimate = false;
        }, 1e3);
      }
    },
  },
};
</script>
<style lang="scss">
@keyframes swiper-item-a {
  from {
    opacity: 0;
    right: vw(60);
    bottom: vw(420);
  }
  to {
    right: vw(40);
    bottom: vw(480);
    opacity: 1;
  }
}
@keyframes swiper-item-b {
  from {
    right: vw(60);
    bottom: vw(420);
    opacity: 0;
  }
  to {
    left: vw(90);
    bottom: vw(260);
    opacity: 1;
  }
}
@keyframes swiper-item-a-pc {
  from {
    opacity: 0;
    right: px2vw(100);
    bottom: px2vw(250);
  }
  to {
    right: px2vw(210);
    bottom: px2vw(250);
    opacity: 1;
  }
}
@keyframes swiper-item-b-pc {
  from {
    left: auto;
    right: px2vw(820);
    bottom: px2vw(345);
    opacity: 0;
  }
  to {
    left: auto;
    right: px2vw(620);
    bottom: px2vw(345);
    opacity: 1;
  }
}

.widget-index-section-hot {
  margin-top: vw(-96);
  position: relative;
  color: #fff;
  &.is-animate {
    @include layout-mobile-only {
      .swiper-item-a {
        animation: swiper-item-a 1s;
      }
      .swiper-item-b {
        animation: swiper-item-b 1s;
      }
    }
    @include layout-desktop-full {
      .swiper-item-a {
        animation: swiper-item-a-pc 1s;
      }
      .swiper-item-b {
        animation: swiper-item-b-pc 1s;
      }
    }
  }
  .hot-wrapper {
    position: absolute;
    z-index: 10;
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
  .swiper-round-active__wrapper {
    position: absolute;
    top: vw(62);
    right: vw(90);
    width: vw(64);
    height: vw(64);
    color: #fff;
    font-size: vw(14);
    text-align: center;
    line-height: vw(64);
  }
  .swiper-round-active {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotateZ(45deg);
    border-top: 1px solid rgba(255, 255, 255, 1);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    overflow: hidden;
    &.active-1 {
      border-top: 1px solid rgba(255, 255, 255, 1);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      border-right: 1px solid rgba(255, 255, 255, 1);
    }
    &.active-2 {
      border-top: 1px solid rgba(255, 255, 255, 1);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      border-bottom: 1px solid rgba(255, 255, 255, 1);
      border-right: 1px solid rgba(255, 255, 255, 1);
    }
    &.active-3 {
      border: 1px solid #fff;
    }
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

    .swiper-round-active__wrapper {
      top: px2vw(270);
      right: auto;
      left: px2vw(580);
      width: px2vw(64);
      height: px2vw(64);
      font-size: px2vw(14);
      line-height: px2vw(64);
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
  }
}
</style>
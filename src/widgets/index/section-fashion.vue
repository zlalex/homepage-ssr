<template>
  <al-section class="widget-index-section-fahsion">
    <div class="fashion-wrapper">
      <widget-description
        title="潮流风尚"
        :subtitle="['时尚会过气，', '所以我们每六个月对其再定义。']"
        :description="[
          '每一个豪宅，都是一座孤品。探索国际风尚潮流趋势，鉴赏最新别墅',
          '大宅实景案例集，感受精心设计的独到生活体验。',
        ]"
      ></widget-description>

      <text-columns
        class="fashion-datum-columns layout-mobile-only"
        :columns="fashionDatum"
      ></text-columns>
      <div class="fashion-swiper-wrapper">
        <!-- mobile -->
        <div class="layout-mobile-only">
          <div class="fashion-mobile-swiper">
            <swiper ref="swiper" :options="swiperOptions">
              <swiper-slide v-for="(src, index) in fashionDetail" :key="index">
                <al-image
                  class="fashion-mobile-swiper__active"
                  :src="src"
                ></al-image>
              </swiper-slide>
            </swiper>

            <!--
            <al-image
              class="fashion-mobile-swiper__active"
              :src="swiperActive"
            ></al-image> -->
          </div>
          <div class="fashion-control">
            <div class="fashion-control-left">
              <p class="fashion-control-left__title">One Ture Life</p>
              <p class="fashion-control-left__number">
                <span class="process-active-number">
                  {{ fashionSwiperActiveIndex + 1 }}
                </span>
                <span class="active-split-line">/</span>
                <span>
                  {{ fashionDetail.length }}
                </span>
              </p>
            </div>
            <div class="fashion-control-process">
              <span
                :style="swiperControlActiveWidth"
                class="fashion-control-process__active"
              ></span>
            </div>
            <div class="fashion-control-right">
              <al-icon
                class="fashion-mobile-control__arrow"
                name="arrowGray"
                position="left"
                @click="handleSwiperNext(-1)"
              ></al-icon>
              <al-icon
                class="fashion-mobile-control__arrow"
                name="arrowGray"
                position="right"
                @click="handleSwiperNext(1)"
              ></al-icon>
            </div>
          </div>
        </div>
        <!-- desktop -->
        <div class="layout-desktop-full">
          <div class="fashion-swiper-tab__desktop">
            <p
              class="fashion-swiper-tab__desktop-item"
              v-for="(item, i) in fashionSwiperTab"
              :key="i"
              @click="handleFashionTabActive(i)"
              :class="{ active: fashionTabActive === i }"
            >
              <span class="fashion-swiper-tab__desktop-item-name">
                {{ item.name }}
              </span>
              <span class="fashion-swiper-tab__desktop-item-subtitle">
                {{ item.subtitle }}
              </span>
            </p>
          </div>
          <div class="fashion-swiper-desktop">
            <div class="fashion-swiper-desktop__image">
              <al-image
                class="fashion-swiper-desktop__image-between swiper-prev-image"
                has-mask
                mask-color="black"
                :src="swiperPrev"
              ></al-image>
              <div class="fashion-swiper-desktop__image-active">
                <!--
                <al-image :src="swiperActive"></al-image> -->
                <swiper ref="swiper2" :options="swiperOptions">
                  <swiper-slide
                    v-for="(src, index) in fashionDesktopDetail"
                    :key="index"
                  >
                    <al-image
                      class="fashion-mobile-swiper__active"
                      :src="src"
                    ></al-image>
                  </swiper-slide>
                </swiper>
              </div>
              <al-image
                class="fashion-swiper-desktop__image-between swiper-next-image"
                has-mask
                mask-color="black"
                :src="swiperNext"
              ></al-image>
            </div>
            <div class="fashion-swiper-desktop__share">
              <p class="share-title">Mild luxury</p>
              <p class="share-subtitle">
                <span>生活</span>
                <span>瑕不掩</span>
                <span>瑜。</span>
              </p>
              <div class="share-icon">
                <al-icon class="fashion-like-icon" name="like"></al-icon>
                <al-icon class="fashion-share-icon" name="share"></al-icon>
              </div>
            </div>
            <div class="fashion-swiper-desktop__control">
              <al-icon
                class="swiper-icon-desktop"
                name="arrow"
                position="left"
                @click="handleSwiperNext(-1)"
              ></al-icon>
              <al-icon
                class="swiper-icon-desktop swiper-icon-right"
                name="arrow"
                position="right"
                @click="handleSwiperNext(1)"
              ></al-icon>
              <div class="swiper-icon-desktop-process">
                <span class="process-active-number">
                  {{ fashionSwiperActiveIndex + 1 }}
                </span>
                <span>/</span>
                <span>
                  {{ fashionDesktopDetail.length }}
                </span>
              </div>
            </div>
          </div>
          <div class="fashion-swiper-desktop__process">
            <span
              :style="swiperControlActiveWidth"
              class="fashion-swiper-desktop__process-active"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </al-section>
</template>
<script>
export default {
  data() {
    const __this = this;
    return {
      timer: null,
      processTimer: null,
      process: 0,
      swiperControlActiveWidth: "",
      fashionDatum: [
        {
          title: "坚持",
          data: "20",
          units: "年",
          description: "创造美好生活",
        },
        {
          title: "实景",
          data: "90",
          units: "%",
          description: "以上效果还原",
        },
        {
          title: "累积",
          data: "1500",
          units: "套",
          description: "精选实景案例",
        },
      ],
      swiperOptions: {
        loop: true,
        on: {
          slideChange(e) {
            __this.fashionSwiperActiveIndex = e.realIndex;
            __this.startSwiperTimer();
          },
        },
      },
      fashionSwiperTab: [
        {
          name: "现代轻奢",
          subtitle: "Mild Luxury",
        },
        {
          name: "现代简约",
          subtitle: "Modern Concise",
        },
        {
          name: "美式",
          subtitle: "American",
        },
        {
          name: "现代中式",
          subtitle: "Neo-Chinese Style",
        },
        {
          name: "法式轻奢",
          subtitle: "French",
        },
      ],
      fashionTabActive: 0,
      fashionSwiperActiveIndex: 0,
      fashionDetail: [
        "./images/fashion-swiper-1.jpg",
        "./images/fashion-swiper-2.jpg",
        "./images/fashion-swiper-3.jpg",
        "./images/fashion-swiper-4.jpg",
        "./images/fashion-swiper-5.jpg",
        "./images/fashion-swiper-6.jpg",
        "./images/fashion-swiper-7.jpg",
        "./images/fashion-swiper-8.jpg",
        "./images/fashion-swiper-9.jpg",
        "./images/fashion-swiper-10.jpg",
        "./images/fashion-swiper-11.jpg",
        "./images/fashion-swiper-12.jpg",
        "./images/fashion-swiper-13.jpg",
        "./images/fashion-swiper-14.jpg",
        "./images/fashion-swiper-15.jpg",
        "./images/fashion-swiper-16.jpg",
        "./images/fashion-swiper-17.jpg",
        "./images/fashion-swiper-18.jpg",
      ],
      fullFashionDesktopDetail: [
        [
          "./images/fashion-swiper-pc-1.jpg",
          "./images/fashion-swiper-pc-2.jpg",
          "./images/fashion-swiper-pc-3.jpg",
          "./images/fashion-swiper-pc-4.jpg",
          "./images/fashion-swiper-pc-5.jpg",
        ],
        [
          "./images/fashion-swiper-pc-1.jpg",
          "./images/fashion-swiper-pc-2.jpg",
          "./images/fashion-swiper-pc-3.jpg",
          "./images/fashion-swiper-pc-4.jpg",
          "./images/fashion-swiper-pc-5.jpg",
        ],
        [
          "./images/fashion-swiper-pc-1.jpg",
          "./images/fashion-swiper-pc-2.jpg",
          "./images/fashion-swiper-pc-3.jpg",
          "./images/fashion-swiper-pc-4.jpg",
          "./images/fashion-swiper-pc-5.jpg",
        ],
        [
          "./images/fashion-swiper-pc-1.jpg",
          "./images/fashion-swiper-pc-2.jpg",
          "./images/fashion-swiper-pc-3.jpg",
          "./images/fashion-swiper-pc-4.jpg",
          "./images/fashion-swiper-pc-5.jpg",
        ],
        [
          "./images/fashion-swiper-pc-1.jpg",
          "./images/fashion-swiper-pc-2.jpg",
          "./images/fashion-swiper-pc-3.jpg",
          "./images/fashion-swiper-pc-4.jpg",
          "./images/fashion-swiper-pc-5.jpg",
        ]
      ],
      fashionDesktopDetail: [],
    };
  },
  computed: {
    swiper() {
      return this.$refs.swiper.$swiper;
    },
    swiper2() {
      return this.$refs.swiper2.$swiper;
    },
    swiperPrev() {
      let index = this.fashionSwiperActiveIndex - 1;
      if (index < 0) {
        index = this.fashionDesktopDetail.length - 1;
      } else if (index > this.fashionDesktopDetail.length - 1) {
        index = 0;
      }
      return this.fashionDesktopDetail[index];
    },
    swiperActive() {
      if (this.$isMobile) {
        return this.fashionDetail[this.fashionSwiperActiveIndex];
      }
      return this.fashionDesktopDetail[this.fashionSwiperActiveIndex];
    },
    swiperNext() {
      let index = this.fashionSwiperActiveIndex + 1;
      if (index < 0) {
        index = this.fashionDesktopDetail.length - 1;
      } else if (index > this.fashionDesktopDetail.length - 1) {
        index = 0;
      }
      return this.fashionDesktopDetail[index];
    },
    fashionDesktopDetail() {
      return this.fullFashionDesktopDetail[this.fashionTabActive];
    },
  },
  mounted() {
    this.startSwiperTimer();
  },
  methods: {
    resetSwiperTimer() {
      clearInterval(this.timer);
      this.timer = null;
      const mobileStart = "width: 100%; transition: none;";
      const mobileEnd = "width: 0%; transition: width 4.5s;";
      const desktopStart = "width: 0%; transition: none;";
      const desktopEnd = "width: 100%; transition: width 4.5s;";

      this.swiperControlActiveWidth = this.$isMobile
        ? mobileStart
        : desktopStart;
      this.$nextTick(() => {
        this.swiperControlActiveWidth = this.$isMobile ? mobileEnd : desktopEnd;
      });
    },
    startSwiperTimer() {
      this.resetSwiperTimer();
      this.timer = setInterval(() => {
        this.handleSwiperNext(1);
      }, 5e3);
    },
    handleFashionTabActive(i) {
      this.fashionTabActive = i;
    },
    handleSwiperNext(i) {
      this.startSwiperTimer();
      //
      let length = this.fashionDesktopDetail.length;
      let index = this.fashionSwiperActiveIndex + i;
      if (this.$isMobile) {
        length = this.fashionDetail.length;
      }
      if (index < 0) {
        index = length - 1;
      } else if (index > length - 1) {
        index = 0;
      }
      this.$isMobile
        ? this.swiper.slideTo(index + 1)
        : this.swiper2.slideTo(index + 1);
      this.fashionSwiperActiveIndex = index;
    },
  },
};
</script>
<style lang="scss">
.widget-index-section-fahsion {
  margin-top: vw(100);
  .fashion-wrapper {
    width: vw(670);
    margin: 0 auto;
  }
  .fashion-datum-columns {
    margin-top: vw(38);
  }
  .fashion-swiper-wrapper {
    margin-top: vw(50);
  }
  .fashion-swiper {
    height: vw(400);
  }
  .fashion-control {
    margin-top: vw(35);
    height: vw(60);
    @include space-between;
  }
  .fashion-control-left__title {
    font-size: vw(12);
  }
  .layout-mobile-only {
    .fashion-control-left {
      width: vw(100);
    }
    .fashion-control-right {
      width: vw(130);
      margin-left: vw(10);
      display: flex;
      justify-content: space-between;
    }
    .fashion-control-process {
      flex: 1;
      max-width: vw(400);
      height: 2px;
      border-radius: 2px;
      background: linear-gradient(90deg, #fa9986 0%, #d52c3f 100%);
    }
    .fashion-control-process__active {
      right: 0;
      left: auto;
      width: 100%;
      height: 2px;
      background-color: #ddd;
    }
    .fashion-mobile-control__arrow {
      width: vw(66);
      height: vw(60);
    }
    .process-active-number {
      font-size: vw(28);
      color: #000;
    }
    .fashion-control-left__number {
      display: flex;
      margin-top: vw(22);
      font-size: vw(10);
      color: #ddd;
    }
    .active-split-line {
      margin: 0 vw(10);
    }
  }
  .fashion-swiper-tab__desktop {
    width: px2vw(1024);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .fashion-swiper-tab__desktop-item {
    width: px2vw(120);
    display: flex;
    flex-direction: column;
    color: #ddd;
    text-align: center;
    &.active {
      color: #000;
    }
  }
  .fashion-swiper-tab__desktop-item-name {
    font-size: px2vw(22);
    line-height: px2vw(22);
  }

  .fashion-swiper-tab__desktop-item-subtitle {
    margin-top: px2vw(10);
    font-size: px2vw(10);
    line-height: px2vw(10);
  }
  .fashion-control-process,
  .fashion-swiper-desktop__process {
    position: relative;
    height: 1px;
    background-color: #bdbdbd;
    overflow: hidden;
    border-radius: 1px;
    @include layout-desktop-full {
      width: px2vw(640);
      margin: px2vw(70) auto 0;
    }
  }
  .fashion-control-process__active,
  .fashion-swiper-desktop__process-active {
    position: absolute;
    left: 0;
    height: 1px;
    background-color: #000;
    transition: width 4.5s;
  }
  .fashion-swiper-desktop {
    position: relative;
    width: 100%;
    margin-top: px2vw(100);
  }
  .swiper-icon-desktop {
    width: px2vw(66);
    height: px2vw(60);
  }
  .fashion-swiper-desktop__image {
    @include space-between;
    position: relative;
    left: px2vw(-220);
    width: px2vw(2360);
  }
  .swiper-prev-image {
    left: px2vw(-230);
  }
  .swiper-next-image {
    right: px2vw(-230);
  }
  .fashion-swiper-desktop__image-active,
  .fashion-swiper-desktop__image-between {
    border-radius: px2vw(22);
    overflow: hidden;
  }
  .fashion-swiper-desktop__image-between {
    position: relative;
    width: px2vw(660);
    height: px2vw(400);
    background-color: rgba(0, 0, 0, 0.1);
  }
  .fashion-swiper-desktop__image-active {
    width: px2vw(900);
    height: px2vw(540);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }
  .layout-desktop-full {
    .fashion-swiper-desktop__share {
      left: px2vw(210);
      padding: px2vw(50) 0;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
    .share-title {
      font-size: px2vw(12);
      line-height: px2vw(12);
      color: #868686;
    }
    .share-subtitle {
      display: flex;
      flex-direction: column;
      font-size: px2vw(30);
      line-height: px2vw(40);
      color: #000;
      span {
        font-weight: bold;
      }
    }
    .share-icon {
      display: flex;
      width: px2vw(80);
    }
    .fashion-like-icon {
      width: px2vw(16);
      height: px2vw(14);
      margin-right: px2vw(20);
    }
    .fashion-share-icon {
      width: px2vw(14);
      height: px2vw(14);
    }
  }
  .fashion-swiper-desktop__control {
    right: px2vw(210);
    flex-direction: column;
  }
  .swiper-icon-right {
    margin-top: px2vw(16);
  }
  .fashion-swiper-desktop__share,
  .fashion-swiper-desktop__control {
    position: absolute;
    top: px2vw(70);
    z-index: 10;
    width: px2vw(300);
    height: px2vw(400);
    @include flex-center;
  }
  .swiper-icon-desktop-process {
    margin-top: px2vw(50);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: px2vw(40);
    font-size: px2vw(12);
    line-height: px2vw(12);
    color: #ddd;
  }
  .process-active-number {
    font-size: px2vw(28);
    line-height: px2vw(22);
    color: #000;
  }
  @include layout-desktop-full {
    margin-top: px2vw(100);
    .fashion-wrapper {
      width: 100%;
      overflow: hidden;
    }
    .fashion-datum-columns {
      margin-top: px2vw(38);
    }
    .fashion-swiper-wrapper {
      margin-top: px2vw(50);
    }
    .fashion-swiper {
      height: px2vw(400);
      background: chocolate;
    }
    .fashion-control {
      margin-top: px2vw(35);
      height: px2vw(60);
      background: cornflowerblue;
    }
  }
}
</style>
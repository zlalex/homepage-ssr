<template>
  <al-section class="widget-index-section-designer">
    <div class="section-designer-wrapper">
      <widget-description
        title="设计五维"
        :align-left="!$isMobile"
        :subtitle="['光影风水境，', '读写甬城十大豪宅基因。']"
        :description="
          $isMobile
            ? [
                '澄庐、御玺园、比华利、江山万里、长汀云庐、新世界、新海景、钓渔台、',
                '泊璟廷、九唐...操盘过这些耳熟能详的甬城豪宅设计师，与您1对1解析专',
                '属方案。星杰大牌设计师团队，让你的家绽放精彩。',
              ]
            : [
                '澄庐、御玺园、比华利、江山万里、长汀云庐、新世界、新海景、钓渔台、泊璟廷、九唐...',
                '操盘过这些耳熟能详的甬城豪宅设计师，与您1对1解析专属方案。星杰大牌设计师团队，让你的家绽放精彩。',
              ]
        "
      ></widget-description>
      <div class="designer-opus">
        <text-columns class="designer-datum-columns" :columns="designerDatum">
          <div class="designer-opus-button layout-desktop-full">预约来看展</div>
        </text-columns>
        <div class="designer-opus-bg layout-desktop-full">
          <al-image src="./images/designer-opus-pc.png"></al-image>
        </div>
      </div>
      <div class="designer-photos-wrapper">
        <ul class="designer-photos-list layout-mobile-only">
          <li class="designer-photo" v-for="(photo, i) in photos" :key="i">
            <div class="photo-inner">
              <span class="photo-inner-name">{{ photo.name }}</span>
              <span class="photo-inner-description">{{
                photo.description
              }}</span>
            </div>
            <al-image :src="photo.url"></al-image>
          </li>
        </ul>
        <!-- desktop large swiper -->
        <div class="layout-desktop-full">
          <al-image
            class="designer-swiper-widget__icon"
            src="./images/designer-icon.png"
          />
          <al-image
            class="designer-swiper-widget__text"
            src="./images/designer-icon-text.png"
          />
          <al-image
            class="designer-swiper-widget__line"
            src="./images/designer-icon-line.png"
          />
          <div class="designer-swiper-group"></div>
          <a href="javascript:void(0);" class="designer-info-more"
            >了解更多 +</a
          >

          <div class="designer-design-info">
            <p class="designer-design-info__subtitle">[ Designer. ]</p>
            <p class="designer-design-info__name">
              {{ swiperActiveDesigner.description.name }}
            </p>
            <div
              class="design-info-description__wrapper"
              v-if="swiperActiveDesigner.description.text"
            >
              <p
                class="design-info-description__item"
                v-for="(item, i) in swiperActiveDesigner.description.text"
                :key="i"
              >
                {{ item }}
              </p>
            </div>
          </div>
          <div class="designer-swiper-control">
            <al-icon
              class="designer-swiper-control__icon"
              name="arrowGray"
              @click="handleSwiperNext(-1)"
            ></al-icon>
            <al-icon
              class="designer-swiper-control__icon"
              name="arrowGray"
              position="bottom"
              @click="handleSwiperNext(1)"
            ></al-icon>
          </div>

          <div class="designer-design-theme">
            <div class="designer-avatar-tiny__wrapper">
              <al-image
                class="designer-avatar-tiny"
                :src="swiperActiveDesigner.avatar.tiny"
              ></al-image>
              <div class="designer-design-theme__content">
                <p class="theme-title">设计理念</p>
                <p class="theme-subtitle">
                  {{ swiperActiveDesigner.description.theme }}
                </p>
              </div>
            </div>
            <div class="designer-booking-button">预约</div>
          </div>
          <!-- swiper -->
          <div class="designer-swiper-desktop__wrapper" v-if="!$isMobile">
            <swiper
              class="designer-swiper-desktop"
              ref="swiper"
              :options="galleryTop"
            >
              <swiper-slide
                class="designer-small-avatar"
                v-for="(item, i) in photos"
                :key="i"
              >
                <al-image
                  v-if="item.avatar"
                  @click="handleAvatarClick(i)"
                  class="designer-small-avatar-image"
                  :class="{ active: i === activeIndex }"
                  :src="item.avatar ? item.avatar.small : ''"
                ></al-image>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <al-image
          class="layout-desktop-full"
          :src="swiperActiveDesigner.avatar.large"
        ></al-image>
      </div>
    </div>
  </al-section>
</template>
<script>
const names = "林 挺,李 鸣,姚 瑶,周华明,顾晗波,谢小贤,王 城,陈晓亮,周美娜,朱雅琴,王 昕,童凌霄,王丹艇,苏 畅,刘思思,过雪峰,卢孔宗,毛金铭,张 辰,鲍三军".split(
  ","
);
const designerDescription = "21年设计经验,19年设计经验,15年设计经验,21年设计经验,17年设计经验,16年设计经验,19年设计经验,18年设计经验,17年设计经验,20年设计经验,15年设计经验,15年设计经验,15年设计经验,15年设计经验,10年设计经验,21年设计经验,17年设计经验,15年设计经验,11年设计经验,19年设计经验".split(
  ","
);
const desktopDesignerDescription = [
  {
    name: "鲍三军",
    p1: "懂设计的人，在路上，也许会发现和其他人不一样的美。",
    p2: "去黄山，看中国水墨画的身影；",
    p3: "去荷兰，遇到雨后放晴，看梵高那些色彩斑斓的画作的身影。",
    ln: "设计源于生活，经验源于积累。",
  },
  {
    name: "陈晓亮",
    p1: "室内设计的出发点，必然是站在使用者的角度，",
    p2: "去为他创造一个能满足功能需求、心理需求和审美需求的室内空间。",
    p3: "",
    ln: "通过完美交融的空间，提升居室艺术品质。",
  },
  {
    name: "苏 畅",
    p1: "真正的设计师,",
    p2: "不止局限于某处，要以更开放的格局和更独特的角度观察世界。",
    p3: "发现，比设计更为重要。",
    ln: "创新生活，创意设计。",
  },
  {
    name: "顾晗波",
    p1: "任何一处场所，都是人类有关心灵的创造。",
    p2: "它跨越时间，传承人们心中的精神力量，以美好的展示，感染旁人。",
    p3: "",
    ln: "用心丈量每一寸土地，将艺术融入生活",
  },
  {
    name: "过雪峰",
    p1: "我一直将“设计以人为本，设计源自生活”作为自己的设计理念。",
    p2: "设计首先来源于生活，然后再升华到艺术的境界，去服务生活。",
    p3: "",
    ln: "设计以人为本，设计源自生活。",
  },
  {
    name: "李 鸣",
    p1: "全作灵感自一束光的划入而启迪。",
    p2: "借着明与暗、光与影的交相辉映，共构曼妙情境。",
    p3: "将人犹若沉浸在童话环境里，每一旋身无不惊喜。",
    ln: "感受设计，享受生活。",
  },
  {
    name: "林 挺",
    p1: "从内心出发、从设计出发。",
    p2: "室内设计从内到外，从整体到细节凸显质感，同时倾注着意想不到的惊喜。",
    p3: "从而彰显了一种高品质的生活方式。",
    ln: "设计以人为本是传承、延续、张扬个性。",
  },
  {
    name: "毛金铭",
    p1: "设计源于感受，感受源于生活，生活源于美。",
    p2: "每个空间都是在倡导一种生活方式。",
    p3: "而我，坚持。",
    ln: "有限空间，无限想象。",
  },
  {
    name: "卢孔宗",
    p1: "设计师将对生活的不将就，",
    p2: "融合到设计的方方面面。",
    p3: "从细节处感受到家的温暖与品质。",
    ln: "创造设计，打造尊享的与众不同。",
  },
  {
    name: "刘思思",
    p1: "好的设计是在巧妙的安排下掩盖了设计师刻意为之的用心。",
    p2: "各种关系的合理拿捏，恰如其分，不多不少。",
    p3: "",
    ln: "设计从来不是随意为之，一切都是刚刚好。",
  },
  {
    name: "童凌霄",
    p1: "设计里面有三个重要的方面：好用、好看、性价比高。",
    p2: "空间设计，把自己代入其中，从适用性和性价比等多个方面进行考量。",
    p3: "才有可能呈现出最好的成果。",
    ln: "设计让生活更合理，设计让生活更优雅。",
  },
  {
    name: "王 城",
    p1: "设计让我从中感悟到了设计与生活之间的息息相关。",
    p2: "让我在懂得设计的同时也懂得了如何生活。享生活，品设计。",
    p3: "",
    ln: "享受设计，追求生活，设计源于生活。",
  },
  {
    name: "朱雅琴",
    p1: "空间设计师不仅仅是创造者，也是摆渡人。",
    p2: "一个空间的使用者，他的想法和期待需要在空间上得以表达。",
    p3: "",
    ln: "生活是艺术的来源，色即是空，空即是设。",
  },
  {
    name: "王 昕",
    p1: "快快回家，慢慢生活。",
    p2: "以一个专业设计者的角度而言，我认为我们所设计的不是空间，而是生活。",
    p3: "以空间剪接意境与实境，让空间的使用者享受现代生活。",
    ln: "设计改变生活。",
  },
  {
    name: "王丹艇",
    p1: "判定一个设计的好坏与否，",
    p2: "最重要的是在设计中具象阐述某种设计理念，并努力的去落地。",
    p3: "这才方为完整的作品。",
    ln: "空间与生活方式有机结合。",
  },
  {
    name: "谢小贤",
    p1: "开拓思维，",
    p2: "打破认知边界，",
    p3: "身边的万物都是灵感的源泉。",
    ln: "美学让生活回归本真。",
  },
  {
    name: "姚 瑶",
    p1: "当代设计师要多看，多走。",
    p2: "设计师不光是设计房子，还可以成为一个生活专家、情感专家、艺术家。",
    p3: "成为一个时尚潮流的买手.....",
    ln: "为空间创造生命力，为客户创造价值。",
  },
  {
    name: "周华明",
    p1: "设计不应该只着重技法和表面，",
    p2: "设计师是空间气质的营造者。",
    p3: "作品气质自然允生，自然也就是好的。",
    ln: "空间因设计而改变。",
  },
  {
    name: "周美娜",
    p1: "从邂逅设计到学习设计，再到做设计，",
    p2: "对整个行业了解越多，积淀越多。",
    p3: "看待设计的视角，也随着设计经验的丰富时刻发生着变化。",
    ln: "空间自由生命、设计赋予灵魂。",
  },
  {
    name: "张 辰",
    p1: "设计是成熟、稳重、严谨且经得起推敲的。让人沉思安静，不浮夸，不躁动。",
    p2: "将当代性与诗意的细节和谐融合。",
    p3: "坚持设计创造出具有原创性、感染力、实用性的设计作品。",
    ln: "万物之始，大道至简，衍化至繁。",
  },
];
const getAvatarPath = (size, name) =>
  `./images/designer-desktop/${size}/${name}.jpg`;

export default {
  mounted() {
    this.getPhotos();
  },
  data() {
    const __this = this;
    return {
      names,
      designerDescription,
      desktopDesignerDescription: {},
      designerDatum: [
        {
          title: "人均",
          data: "12",
          units: "年",
          description: "设计从业经验",
        },
        {
          title: "具备",
          data: "40",
          units: "%",
          description: "别墅生活经验",
        },
        {
          title: "涵盖",
          data: "10",
          units: "大",
          description: "别墅设计体系",
        },
      ],
      photos: [],
      groups: [],
      activeIndex: 0,
      galleryTop: {
        direction: "vertical",
        slidesPerView: 5,
        on: {
          slideChange(e) {
            __this.activeIndex = e.realIndex;
          },
        },
      },
    };
  },
  computed: {
    swiperActiveDesigner() {
      if (this.photos.length && !this.$isMobile) {
        return this.photos[this.activeIndex];
      }
      return { avatar: {}, description: {} };
    },
    swiper() {
      return this.$refs.swiper.$swiper;
    },
  },
  methods: {
    getPhotos() {
      desktopDesignerDescription.forEach((item) => {
        const __name = item.name.replace(/\s+/, "");
        const __item = {
          name: item.name,
          text: [item.p1, item.p2, item.p3],
          theme: item.ln,
        };
        this.desktopDesignerDescription[__name] = __item;
      });
      this.photos = names.map((name, i) => {
        if (this.$isMobile) {
          return {
            name,
            url: `./images/designer-mobile/designer-${i + 1}.jpg`,
            description: this.designerDescription[i],
          };
        } else {
          const __name = name.replace(/\s+/, "");
          return {
            name: __name,
            description: this.desktopDesignerDescription[__name],
            avatar: {
              tiny: getAvatarPath("tiny", __name),
              small: getAvatarPath("small", __name),
              large: getAvatarPath("large", __name),
            },
          };
        }
      });
    },
    handleSwiperNext(value) {
      let length = this.photos.length;
      let index = this.activeIndex + value;
      let swiperIndex = index;
      if (index < 0) {
        swiperIndex = index = length - 1;
      } else if (index > length - 5 && index < length - 1) {
        swiperIndex = length - 5;
      } else if (index > length - 1) {
        swiperIndex = index = 0;
      }
      this.swiper.slideTo(swiperIndex);
      this.activeIndex = index;
    },
    handleAvatarClick(index) {
      this.activeIndex = index;
    },
  },
};
</script>
<style lang="scss">
.widget-index-section-designer {
  padding: 0 vw(40);
  margin-top: vw(100);
  .designer-datum-columns {
    margin-top: vw(50);
  }
  .designer-photos-wrapper {
    margin-top: vw(50);
  }
  .designer-photos-list {
    display: flex;
    flex-wrap: wrap;
  }
  .designer-photo {
    position: relative;
    width: vw(160);
    height: vw(210);
    margin-right: vw(10);
    margin-bottom: vw(10);
    &:nth-of-type(4n) {
      margin-right: 0;
    }
  }
  .photo-inner {
    position: absolute;
    left: vw(16);
    bottom: vw(10);
    display: flex;
    flex-direction: column;
    color: #fff;
  }
  .photo-inner-name {
    font-size: vw(20);
    line-height: vw(28);
    font-weight: bold;
  }
  .photo-inner-description {
    font-size: vw(14);
    line-height: vw(22);
  }
  .designer-opus-button {
    margin-top: px2vw(80);
    width: px2vw(150);
    height: px2vw(44);
    border: 1px solid #d52c3f;
    border-radius: px2vw(5);
    color: #000;
    text-align: center;
    line-height: px2vw(44);
    font-size: px2vw(14);
  }
  .designer-swiper-widget__icon {
    width: px2vw(12);
    height: px2vw(25);
    position: absolute;
    top: px2vw(80);
    left: px2vw(148);
  }
  .designer-swiper-widget__text {
    width: px2vw(10);
    height: px2vw(495);
    position: absolute;
    top: px2vw(388);
    left: px2vw(151);
  }

  .designer-swiper-widget__line {
    width: px2vw(6);
    height: px2vw(740);
    position: absolute;
    top: px2vw(145);
    left: px2vw(348);
  }
  .designer-info-more {
    position: absolute;
    top: px2vw(93);
    right: px2vw(250);
    text-decoration: none;
    color: #1b1b1b;
  }
  .designer-swiper-desktop {
    position: absolute;
    top: px2vw(145);
    left: px2vw(445);
    width: px2vw(200);
    height: px2vw(740);
    overflow: hidden;
  }
  .designer-small-avatar-image {
    position: relative;
    width: px2vw(200);
    height: px2vw(120);
    margin-bottom: px2vw(35);
    border-radius: px2vw(10);
    overflow: hidden;
    &.active {
      &::before {
        content: "";
        display: none;
      }
    }
    &::before {
      content: "";
      position: absolute;
      left: -2px;
      top: -2px;
      width: 110%;
      height: 110%;
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
  .designer-design-theme {
    position: absolute;
    bottom: px2vw(75);
    left: px2vw(788);
    width: px2vw(922);
    height: px2vw(118);
    @include space-between;
  }
  .designer-avatar-tiny__wrapper {
    display: flex;
    align-items: center;
    width: px2vw(500);
    height: px2vw(118);
    padding-left: px2vw(30);
    border-radius: px2vw(12);
    background-color: #fff;
    overflow: hidden;
  }
  .designer-avatar-tiny {
    width: px2vw(72);
    height: px2vw(72);
    margin-right: px2vw(30);
    border-radius: 50%;
    overflow: hidden;
  }
  .designer-booking-button {
    width: px2vw(390);
    height: px2vw(118);
    line-height: px2vw(118);
    text-align: center;
    background-color: #1b1b1b;
    border-radius: px2vw(12);
    color: #fff;
    font-size: px2vw(26);
    overflow: hidden;
    transition: all 0.2s;
    &:hover {
      color: #1b1b1b;
      background-color: #fff;
      transition: all 0.2s;
    }
  }
  .theme-title {
    margin-bottom: px2vw(12);
    font-size: px2vw(20);
    font-weight: bold;
    line-height: 1;
  }
  .theme-subtitle {
    font-size: px2vw(14);
    color: #9f9f9f;
  }
  .designer-swiper-control__icon {
    width: px2vw(66);
    height: px2vw(60);
    opacity: 0.5;
  }
  .designer-design-info {
    position: absolute;
    top: px2vw(280);
    right: px2vw(245);
    width: px2vw(360);
  }
  .designer-swiper-control {
    position: absolute;
    bottom: px2vw(286);
    right: px2vw(540);
    // margin-top: px2vw(55);
  }
  .design-info-description__item {
    font-size: px2vw(15);
    line-height: px2ve(26);
    color: #959595;
  }
  .designer-design-info__name {
    margin-bottom: px2vw(50);
    font-size: px2vw(48);
    font-weight: bold;
  }
  .designer-design-info__subtitle {
    font-size: px2vw(16);
  }

  @include layout-desktop-full {
    margin-top: px2vw(160);
    padding: 0;
    .designer-photos-wrapper {
      position: relative;
      margin-top: px2vw(35);
    }
    .description-split {
      .description-info {
        width: auto;
      }
    }
    .designer-opus {
      position: relative;
    }
    .designer-opus-bg {
      margin-top: px2vw(70);
    }
    .widget-description {
      margin: 0 px2vw(210);
    }

    .designer-datum-columns {
      position: absolute;
      left: 0;
      top: 0;
      margin: 0;
      padding: 0 px2vw(210);
      text-align: left;
    }
  }
}
</style>
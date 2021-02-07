<template>
  <al-section class="widget-index-section-craft">
    <div class="craft-wrapper">
      <widget-description
        title="海派精工"
        :subtitle="['专注，更专精，', '要做，就做现代施工工艺的ACE。']"
        :description="[
          '星杰海派精工体系拥有42项国家技术专利、266项施工技术标准、30多项',
          '专属环保材料。关于领先行业的海派精工的一切，都能在现场看到。',
        ]"
      ></widget-description>
    </div>
    <div class="craft-image" @click="changeActiveIndex">
      <div class="craft-image-left">
        <al-image
          class="craft-image-left__self"
          :src="activeImageIndex.left"
        ></al-image>
      </div>
      <div class="craft-image-right">
        <al-image
          class="craft-image-right__self"
          :src="activeImageIndex.right"
        ></al-image>
      </div>
    </div>
  </al-section>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 1,
    };
  },
  computed: {
    activeImageIndex() {
      return {
        left: `./images/section-craft-${this.activeIndex}-a.jpg`,
        right: `./images/section-craft-${this.activeIndex}-b.png`,
      };
    },
  },
  methods: {
    changeActiveIndex() {
      let index = this.activeIndex;
      index++;
      if (index > 3) {
        index = 1;
      }
      this.activeIndex = index;
    },
  },
};
</script>
<style lang="scss">
.widget-index-section-craft {
  margin-top: vw(100);
  .craft-image {
    margin-top: vw(40);
    height: vw(575);
    background: #f7f7f7;
  }
  .craft-image {
    display: flex;
    align-items: flex-end;
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .craft-image-left {
    width: vw(455);
    height: 100%;
    overflow: hidden;
    .component-image-self {
      width: auto;
      height: auto;
    }
  }
  .craft-image-right {
    flex: 1;
    display: flex;
    justify-content: center;
    padding-bottom: vw(87);
  }
  .craft-image-left__self {
  }
  .craft-image-right__self {
    width: vw(190);
  }
  @include layout-desktop-full {
    margin-top: px2vw(160);
  }
}
</style>

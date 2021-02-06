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
    <div class="craft-image">
      <div class="craft-image-self"></div>
      <!-- <al-image class=""></al-image> -->
    </div>
  </al-section>
</template>
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
  }
  .craft-image-self {
    width: vw(455);
    background: lightgreen;
  }
}
</style>

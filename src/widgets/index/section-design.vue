<template>
  <al-section class="widget-index-section-design">
    <div class="design-wrapper">
      <widget-description
        title="全案设计"
        :subtitle="['每一出好戏，', '永远不是一个人完成的。']"
        :description="[
          '一个设计师≠一个全案设计团队。一套好的设计，必定在人性化、视觉、功能、',
          '用户体验、健康、预算等维度上深入推敲、打磨。全案设计，赋予空间生命。',
        ]"
      ></widget-description>
    </div>
    <div class="design-photo">
      <al-image src="./images/section-design.svg"></al-image>
    </div>
  </al-section>
</template>
<style lang="scss">
.widget-index-section-design {
  margin: vw(90) auto 0;
  width: vw(670);
  .design-photo {
    height: vw(670);
  }
  @include layout-desktop-full {
    .design-photo {
      width: px2vw(1364);
      height: px2vw(1255);
      margin: px2vw(-120) auto 0;
    }
  }
}
</style>
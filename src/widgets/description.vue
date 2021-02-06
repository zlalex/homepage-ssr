<template>
  <div class="widget-description" :class="{ 'align-left': alignLeft }">
    <colorful-text v-if="title" class="description-title">
      {{ title }}
    </colorful-text>
    <template v-if="subtitle && subtitle.length">
      <p class="description-subtitle" v-for="(item, i) in subtitle" :key="i">
        {{ item }}
      </p>
    </template>
    <div class="description-split" v-if="description && description.length">
      <p class="description-info" v-for="item in description" :key="item">
        {{ item }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "widget-description",
  props: {
    title: String,
    alignLeft: Boolean,
    subtitle: Array,
    description: Array,
  },
};
</script>
<style lang="scss">
.widget-description {
  display: block;
  text-align: center;
  &.align-left {
    text-align: left;
    .description-title {
      justify-content: flex-start;
    }
  }
  .description-title {
    margin-bottom: vw(18);
    font-size: vw(24);
  }
  .description-subtitle {
    color: #1b1b1b;
    font-weight: bold;
    font-size: vw(40);
    line-height: vw(56);
  }
  .description-info {
    width: vw(630);
    margin: 0 auto;
    font-size: vw(18);
    line-height: vw(28);
    color: #959595;
  }
  .description-split {
    padding-top: vw(20);
  }
  @include layout-desktop-full {
    .description-title {
      margin-bottom: px2vw(25);
      font-size: px2vw(30);
    }
    .description-subtitle {
      font-size: px2vw(48);
      line-height: px2vw(60);
    }
    .description-info {
      width: px2vw(630);
      font-size: px2vw(18);
      line-height: px2vw(28);
    }
    .description-split {
      padding-top: px2vw(25);
    }
  }
}
</style>
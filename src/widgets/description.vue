<template>
  <div class="widget-description">
    <colorful-text
      v-if="title"
      class="description-title"
      :class="{ 'align-left': alignLeft }"
    >
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
  .description-title,
  .description-subtitle,
  .description-info {
    text-align: center;
  }
  .description-title {
    margin-bottom: vw(18);
    font-size: vw(24);
    &.align-left {
      justify-content: flex-start;
    }
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
}
</style>
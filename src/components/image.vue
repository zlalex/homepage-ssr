<template>
  <div
    class="component-image"
    :class="[
      maskColor,
      hasMask ? 'has-mask' : '',
      filterBlur ? 'filter-blur' : '',
    ]"
  >
    <img class="component-image-self" :src="src" alt="国际风尚" />
  </div>
</template>
<script>
export default {
  name: "al-image",
  props: {
    src: String,
    filterBlur: Boolean,
    hasMask: Boolean,
    maskColor: String,
  },
};
</script>
<style lang="scss">
.component-image {
  @include flex-center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  user-select: none;
  &.filter-blur {
    filter: blur(15px);
  }
  &.has-mask {
    position: relative;
    &.black {
      &::after {
        background: rgba(0, 0, 0, 0.6);
      }
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      display: block;
      background: rgba(255, 253, 253, 0.2);
    }
  }
  .component-image-self {
    width: 100%;
    height: 100%;
    -webkit-touch-callout: none;
    pointer-events: none;
  }
}
</style>
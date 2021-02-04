<template>
  <p class="component-colorful-text">
    <span class="colorful-text__inner">
      <slot></slot>
    </span>
  </p>
</template>
<script>
export default {
  name: "colorful-text",
};
</script>
<style lang="scss">
.component-colorful-text {
  @include flex-center;
  overflow: hidden;
  .colorful-text__inner {
    float: left;
    color: transparent;
    background-image: linear-gradient(
      to right,
      #fa9986 0%,
      #d52c3f 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
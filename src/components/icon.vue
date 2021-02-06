<template>
  <div class="component-icon" @click="handleClick">
    <img
      :class="[iconPosition, 'icon-svg']"
      v-if="name"
      :src="icons[name]"
      alt="svg"
    />
  </div>
</template>
<script>
import icons from "../assets/icon.config";

export default {
  name: "al-icon",
  props: {
    name: String,
    position: {
      type: String,
      default: () => "top",
    },
  },
  computed: {
    iconPosition() {
      return `type-${this.position}`;
    },
  },
  data() {
    return {
      icons,
    };
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>
<style lang="scss">
.component-icon {
  position: relative;
  width: 100%;
  height: 100%;
  .icon-svg {
    display: block;
    height: 100%;
    width: 100%;
    &.type-left {
      transform: rotateZ(-90deg);
    }
    &.type-right {
      transform: rotateZ(90deg);
    }
    &.type-bottom {
      transform: rotateZ(180deg);
    }
  }
}
</style>

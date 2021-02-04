<template>
  <div class="component-icon">
    <img v-if="name" :src="icons[name]" alt="svg" />
  </div>
</template>
<script>
import icons from "../assets/icon.config";

export default {
  name: "al-icon",
  props: {
    name: String,
  },
  data() {
    return {
      icons,
    };
  },
};
</script>
<style lang="scss">
.component-icon {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div
    class="component-dialog-image"
    @click="handleDialogClose"
    v-show="showDialog"
  >
    <div class="dialog-image-content">
      <al-image :src="imagePath"></al-image>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showDialog: false,
      imageType: "",
    };
  },
  computed: {
    imagePath() {
      return `./images/dialog-image-${this.imageType}.jpg`;
    },
  },
  mounted() {
    this.$EVENT_BUS.$on("SHOW_DIALOG", (type) => {
      this.imageType = type;
    });
  },
};
</script>
<style lang="scss">
.component-dialog-image {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 60;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  .dialog-image-content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: vw(300);
    height: vw(300);
    transform: translate(-50%, -50%);
  }
}
</style>
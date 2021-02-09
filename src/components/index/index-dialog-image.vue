<template>
  <div
    class="component-dialog-image"
    @click="handleTriggerDialog"
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
      return `./images/dialog-image-${this.imageType}.svg`;
    },
  },
  mounted() {
    this.$EVENT_BUS.$on("SHOW_DIALOG", (type) => {
      this.imageType = type;
      this.handleTriggerDialog();
    });
  },
  methods: {
    handleTriggerDialog() {
      this.showDialog = !this.showDialog;
    },
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
    @include layout-desktop-full {
      width: px2vw(300);
      height: px2vw(300);
      max-width: 200px;
      max-height: 200px;
    }
    transform: translate(-50%, -50%);
    background-color: #fff;
  }
}
</style>
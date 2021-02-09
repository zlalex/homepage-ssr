<template>
  <view-page class="view-index">
    <div class="index-fixed-header">
      <index-header></index-header>
    </div>
    <index-content></index-content>
    <index-footer></index-footer>
    <index-menu></index-menu>
    <index-fixed-form :visibile="visibile"></index-fixed-form>
    <index-dialog-image></index-dialog-image>
  </view-page>
</template>

<script>
import IndexHeader from "../components/index/index-header";
import IndexFooter from "../components/index/index-footer";
import IndexContent from "../components/index/index-content";
import IndexMenu from "../components/index/index-menu";
import IndexFixedForm from "../components/index/index-fixed-form";
import IndexDialogImage from "../components/index/index-dialog-image";

export default {
  components: {
    IndexHeader,
    IndexFooter,
    IndexContent,
    IndexMenu,
    IndexFixedForm,
    IndexDialogImage,
  },
  data() {
    return {
      visibile: false,
    };
  },
  mounted() {
    const innerHeight = window.innerHeight;
    window.addEventListener("scroll", () => {
      const scrollHeight = document.body.scrollHeight - innerHeight * 2;
      const scrollY = window.scrollY;
      if (scrollY > scrollHeight && !this.visibile) {
        this.visibile = true;
      } else if (scrollY < scrollHeight && this.visibile) {
        this.visibile = false;
      }
    });
    if (!this.$isMobile) {
      const __this = this;
      document
        .querySelector(".inner-scroll")
        .addEventListener("scroll", function () {
          const scrollHeight = this.scrollHeight - innerHeight * 2;
          const scrollY = this.scrollTop;
          if (scrollY > scrollHeight && !__this.visibile) {
            __this.visibile = true;
          } else if (scrollY < scrollHeight && __this.visibile) {
            __this.visibile = false;
          }
        });
    }
  },
};
</script>

<style lang="scss">
.view-index {
  background: #fff;
  .index-fixed-header {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: vw(90);
    z-index: 100;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  }
  @include layout-desktop-full {
    .index-fixed-header {
      height: px2vw(70);
    }
  }
}
</style>
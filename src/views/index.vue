<template>
  <view-page class="view-index">
    <div class="index-fixed-header">
      <index-header></index-header>
    </div>
    <index-content></index-content>
    <index-footer></index-footer>
  </view-page>
</template>

<script>
import IndexHeader from "../components/index/index-header";
import IndexFooter from "../components/index/index-footer";
import IndexContent from "../components/index/index-content";

export default {
  components: {
    IndexHeader,
    IndexFooter,
    IndexContent,
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
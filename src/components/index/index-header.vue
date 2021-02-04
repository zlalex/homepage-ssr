<template>
  <div class="component-index-header">
    <div class="index-header-logo">
      <al-icon name="logo"></al-icon>
    </div>
    <div class="index-header-menu">
      <al-icon name="menu"></al-icon>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.component-index-header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 vw(40);
  background-color: #fff;
  .index-header-logo,
  .index-header-menu {
    @include space-between;
    overflow: hidden;
  }
  .index-header-logo {
    width: vw(152);
    height: vw(50);
  }
  .index-header-menu {
    width: vw(36);
    height: vw(24);
  }
  @include layout-desktop-full {
    padding: 0 px2vw(160);
    .index-header-logo {
      width: px2vw(108);
      height: px2vw(33);
    }
    .index-header-menu {
      width: px2vw(36);
      height: px2vw(24);
    }
  }
}
</style>
<template>
  <div class="component-text-columns">
    <ul class="component-text-columns__content">
      <li
        class="text-columns-item"
        v-for="(item, index) in columns"
        :key="index"
      >
        <p class="item-title">{{ item.title }}</p>
        <p class="item-data">
          <span class="item-data__inner">{{ item.data }}</span>
          <span class="item-units">{{ item.units }}</span>
        </p>
        <p class="item-description">{{ item.description }}</p>
      </li>
    </ul>
    <slot />
  </div>
</template>
<script>
export default {
  name: "text-columns",
  props: {
    columns: Array,
  },
};
</script>
<style lang="scss">
.component-text-columns {
  text-align: center;
  font-size: 0;
  .text-columns-item {
    display: inline-block;
    font-size: vw(12);
    padding: 0 vw(54);
    border-right: 1px solid #bcbcbc;
    text-align: left;
    &:last-of-type {
      border: 0 none;
    }
  }
  .item-data__inner {
    font-size: vw(36);
    line-height: vw(36);
  }
  .item-data {
    display: flex;
    margin: vw(10) 0;
    align-items: flex-end;
    color: #000;
  }
  .item-units {
    font-size: vw(20);
    line-height: vw(28);
  }
  .item-title,
  .item-description {
    font-size: vw(12);
    line-height: vw(28);
  }
  @include layout-desktop-full {
    .text-columns-item {
      font-size: px2vw(12);
      padding: 0 px2vw(54);
      &:first-of-type {
        padding-left: 0;
      }
    }
    .item-data__inner {
      font-size: px2vw(36);
      line-height: px2vw(36);
    }
    .item-data {
      margin: px2vw(10) 0;
    }
    .item-units {
      font-size: px2vw(20);
      line-height: px2vw(28);
    }
    .item-title,
    .item-description {
      font-size: px2vw(12);
      line-height: px2vw(28);
    }
  }
}
</style>
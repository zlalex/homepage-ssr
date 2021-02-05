<template>
  <ul class="component-text-columns">
    <li class="text-columns-item" v-for="(item, index) in columns" :key="index">
      <p class="item-title">{{ item.title }}</p>
      <p class="item-data">
        <span class="item-data__inner">{{ item.data }}</span>
        <span class="item-units">{{ item.units }}</span>
      </p>
      <p class="item-description">{{ item.description }}</p>
    </li>
  </ul>
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
    padding: 0 vw(60);
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
}
</style>
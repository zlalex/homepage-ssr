<template>
  <ul class="component-text-columns">
    <li class="text-columns-item" v-for="(item, index) in columns" :key="index">
      <p class="item-title">{{ item.title }}</p>
      <p class="item-data">
        <span>{{ item.data }}</span>
        <span>{{ item.units }}</span>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text-columns-item {
    flex: 1;
  }
}
</style>
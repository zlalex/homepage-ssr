<template>
  <div class="component-index-content">
    <widget-index-section-start></widget-index-section-start>
    <widget-index-section-prelude></widget-index-section-prelude>
    <widget-index-section-hot></widget-index-section-hot>
    <widget-index-section-building></widget-index-section-building>
  </div>
</template>
<script>
import WidgetIndexSectionStart from "../../widgets/index/section-start";
import WidgetIndexSectionPrelude from "../../widgets/index/section-prelude";
import WidgetIndexSectionHot from "../../widgets/index/section-hot";
import WidgetIndexSectionBuilding from "../../widgets/index/section-building";

export default {
  components: {
    WidgetIndexSectionStart,
    WidgetIndexSectionPrelude,
    WidgetIndexSectionHot,
    WidgetIndexSectionBuilding,
  },
};
</script>
<style lang="scss">
</style>
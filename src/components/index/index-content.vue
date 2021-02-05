<template>
  <div class="component-index-content">
    <widget-index-section-start></widget-index-section-start>
    <widget-index-section-prelude></widget-index-section-prelude>
    <widget-index-section-hot></widget-index-section-hot>
    <widget-index-section-building></widget-index-section-building>
    <widget-index-section-fashion></widget-index-section-fashion>
  </div>
</template>
<script>
import WidgetIndexSectionStart from "../../widgets/index/section-start";
import WidgetIndexSectionPrelude from "../../widgets/index/section-prelude";
import WidgetIndexSectionHot from "../../widgets/index/section-hot";
import WidgetIndexSectionBuilding from "../../widgets/index/section-building";
import WidgetIndexSectionFashion from "../../widgets/index/section-fashion";

export default {
  components: {
    WidgetIndexSectionStart,
    WidgetIndexSectionPrelude,
    WidgetIndexSectionHot,
    WidgetIndexSectionBuilding,
    WidgetIndexSectionFashion,
  },
};
</script>
<style lang="scss">
</style>
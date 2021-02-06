<template>
  <al-section class="widget-index-section-fahsion">
    <div class="fashion-wrapper">
      <widget-description
        title="潮流风尚"
        :subtitle="['时尚会过气，', '所以我们每六个月对其再定义。']"
        :description="[
          '每一个豪宅，都是一座孤品。探索国际风尚潮流趋势，鉴赏最新别墅',
          '大宅实景案例集，感受精心设计的独到生活体验。',
        ]"
      ></widget-description>

      <text-columns
        class="fashion-datum-columns"
        :columns="fashionDatum"
      ></text-columns>
      <div class="fashion-swiper-wrapper">
        <ul class="fashion-swiper">
          <li
            class="fashion-swiper-item"
            v-for="(item, i) in fashionDetail"
            :key="i"
          >
            <al-image :src="item"></al-image>
          </li>
        </ul>
        <div class="fashion-control"></div>
      </div>
    </div>
  </al-section>
</template>
<script>
export default {
  data() {
    return {
      fashionDatum: [
        {
          title: "坚持",
          data: "20",
          units: "年",
          description: "创造美好生活",
        },
        {
          title: "实景",
          data: "90",
          units: "%",
          description: "以上效果还原",
        },
        {
          title: "累积",
          data: "1500",
          units: "套",
          description: "精选实景案例",
        },
      ],
      fashionDetail: [],
    };
  },
};
</script>
<style lang="scss">
.widget-index-section-fahsion {
  margin-top: vw(100);
  .fashion-wrapper {
    width: vw(670);
    margin: 0 auto;
  }
  .fashion-datum-columns {
    margin-top: vw(38);
  }
  .fashion-swiper-wrapper {
    margin-top: vw(50);
  }
  .fashion-swiper {
    height: vw(400);
    background: chocolate;
  }
  .fashion-control {
    margin-top: vw(35);
    height: vw(60);
    background: cornflowerblue;
  }
}
</style>
<template>
  <al-section class="widget-index-section-fahsion">
    <div class="fashion-wrapper">
      <colorful-text class="fashion-title">潮流风尚</colorful-text>
      <p class="fashion-subtitle">时尚会过气，</p>
      <p class="fashion-subtitle fashion-subtitle-split">
        所以我们每六个月对其再定义。
      </p>
      <p class="fashion-description">
        每一个豪宅，都是一座孤品。探索国际风尚潮流趋势，鉴赏最新别墅
      </p>
      <p class="fashion-description">
        大宅实景案例集，感受精心设计的独到生活体验。
      </p>
      <text-columns
        class="fashion-datum-columns"
        :columns="fashionDatum"
      ></text-columns>
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
    };
  },
};
</script>
<style lang="scss">
.widget-index-section-fahsion {
  padding-top: vw(100);
  .fashion-wrapper {
    width: vw(670);
    margin: 0 auto;
  }
  .fashion-title,
  .fashion-subtitle,
  .fashion-description {
    text-align: center;
  }
  .fashion-subtitle {
    color: #1b1b1b;
    font-weight: bold;
    font-size: vw(40);
    line-height: vw(56);
  }
  .fashion-subtitle-split {
    margin-bottom: vw(20);
  }
  .fashion-description {
    font-size: vw(18);
    line-height: vw(28);
    color: #959595;
  }
  .fashion-title {
    margin-bottom: vw(18);
    font-size: vw(24);
  }
  .fashion-datum-columns {
    margin-top: vw(38);
  }
}
</style>
<template>
  <al-section class="widget-index-section-designer">
    <div class="section-designer-wrapper">
      <widget-description
        title="设计五维"
        :subtitle="['光影风水境，', '读写甬城十大豪宅基因。']"
        :description="[
          '澄庐、御玺园、比华利、江山万里、长汀云庐、新世界、新海景、钓渔台、',
          '泊璟廷、九唐...操盘过这些耳熟能详的甬城豪宅设计师，与您1对1解析专',
          '属方案。星杰大牌设计师团队，让你的家绽放精彩。',
        ]"
      ></widget-description>
      <text-columns
        class="designer-datum-columns"
        :columns="designerDatum"
      ></text-columns>
      <div class="designer-photos-wrapper">
        <ul class="designer-photos-list">
          <li class="designer-photo" v-for="(photo, i) in photos" :key="i">
            <div class="photo-inner">
              <span class="photo-inner-name">{{ photo.name }}</span>
              <span class="photo-inner-description">{{
                photo.description
              }}</span>
            </div>
            <al-image :src="photo.url"></al-image>
          </li>
        </ul>
      </div>
    </div>
  </al-section>
</template>
<script>
const names = "林 挺,李 鸣,姚 瑶,周华明,顾晗波,谢小贤,王 城,陈晓亮,周美娜,朱雅琴,王 昕,童凌霄,王丹艇,苏 畅,刘思思,过雪峰,卢孔宗,毛金铭,张 辰,鲍三军".split(
  ","
);
const designerDescription = "21年设计经验,19年设计经验,15年设计经验,21年设计经验,17年设计经验,16年设计经验,19年设计经验,18年设计经验,17年设计经验,20年设计经验,15年设计经验,15年设计经验,15年设计经验,15年设计经验,10年设计经验,21年设计经验,17年设计经验,15年设计经验,11年设计经验,19年设计经验".split(
  ","
);
// const photos = [
//   './images/'
// ]
export default {
  mounted() {
    this.photos = names.map((name, i) => {
      return {
        name,
        url: `./images/designer-mobile/designer-${i + 1}.jpg`,
        description: this.designerDescription[i],
      };
    });
  },
  data() {
    return {
      names,
      designerDescription,
      designerDatum: [
        {
          title: "人均",
          data: "12",
          units: "年",
          description: "设计从业经验",
        },
        {
          title: "具备",
          data: "40",
          units: "%",
          description: "别墅生活经验",
        },
        {
          title: "涵盖",
          data: "10",
          units: "大",
          description: "别墅设计体系",
        },
      ],
      photos: [],
    };
  },
};
</script>
<style lang="scss">
.widget-index-section-designer {
  padding: 0 vw(40);
  margin-top: vw(100);
  .designer-datum-columns {
    margin-top: vw(50);
  }
  .designer-photos-wrapper {
    margin-top: vw(50);
  }
  .designer-photos-list {
    display: flex;
    flex-wrap: wrap;
  }
  .designer-photo {
    position: relative;
    width: vw(160);
    height: vw(210);
    margin-right: vw(10);
    margin-bottom: vw(10);
    &:nth-of-type(4n) {
      margin-right: 0;
    }
  }
  .photo-inner {
    position: absolute;
    left: vw(16);
    bottom: vw(10);
    display: flex;
    flex-direction: column;
    color: #fff;
  }
  .photo-inner-name {
    font-size: vw(20);
    line-height: vw(28);
    font-weight: bold;
  }
  .photo-inner-description {
    font-size: vw(14);
    line-height: vw(22);
  }
}
</style>
<template>
  <al-section class="widget-index-section-booking">
    <div class="booking-wrapper">
      <colorful-text class="booking-tltile">国际风尚</colorful-text>
      <p class="booking-more layout-mobile-only">现在预约即可了解更多。</p>
      <p class="booking-more booking-more-title layout-desktop-full">
        国际别墅大宅设计·中国展
      </p>
      <p class="booking-desktop-tip layout-desktop-full">
        关于看展，现可报名了解更多。为了保护您的隐私，星杰承诺将对您的信息严格保密。
      </p>
      <div class="booking-item">
        <div class="booking-item-info flex-pub">
          <div class="booking-info-img"><img src="" alt="" /></div>
          <p class="booking-info-text">
            <span>2021.2.28</span><span>周日</span><span>全天</span>
          </p>
        </div>
        <div class="booking-item-info flex-pub">
          <div class="booking-info-img"><img src="" alt="" /></div>
          <p class="booking-info-text">
            <span>预约热线</span><span>400</span><span>0574</span
            ><span>689</span>
          </p>
        </div>
      </div>
      <form-input label="您的称呼*" class="booking-form-input" v-model="name" />
      <form-input label="联系方式*" class="booking-form-input" v-model="tel" />
      <form-input
        placeholder="其他需求(非必填)"
        class="booking-form-input"
        v-model="other"
      />
      <div class="booking-submit">预约看展</div>
      <p class="booking-tip layout-mobile-only">
        为了保护您的隐私，星杰承诺将对您的信息严格保密。
      </p>
    </div>
  </al-section>
</template>
<script>
export default {
  data() {
    return {
      name: "aa",
      tel: "",
      other: "",
    };
  },
};
</script>
<style lang="scss">
.widget-index-section-booking {
  // MOBILE FISRT
  .flex-pub {
    display: flex;
    align-items: center;
  }
  padding: vw(76) 0 vw(78);
  border-bottom: 1px solid #d8dbe2;
  font-size: vw(24);
  .booking-wrapper {
    width: vw(550);
    margin: 0 auto;
  }
  .booking-tltile {
    justify-content: flex-start;
  }
  .booking-more {
    margin-top: vw(18);
    margin-bottom: vw(80);
    font-size: vw(40);
    font-weight: bold;
    color: #1b1b1b;
    line-height: vw(60);
  }

  .booking-item-info {
    span {
      margin-right: vw(18);
    }
    &:last-child {
      margin-top: vw(32);
      margin-bottom: vw(86);
    }
  }
  .booking-info-img {
    margin-right: vw(24);
    width: vw(30);
    height: vw(30);
    border: 1px solid red;
  }
  .booking-info-text {
    font-weight: bold;
    color: #1b1b1b;
    line-height: vw(20);
  }
  .booking-form-input {
    margin-bottom: vw(50);
  }
  .booking-submit {
    width: vw(550);
    height: vw(90);
    background: linear-gradient(90deg, #fa9986 0%, #d52c3f 100%);
    line-height: vw(90);
    text-align: center;
    border-radius: vw(10);
    font-size: vw(28);
    font-weight: bold;
    color: #ffffff;
  }
  .booking-tip {
    margin-top: vw(28);
    text-align: center;
    line-height: 1;
    color: #959595;
    font-size: vw(16);
  }
  @include layout-desktop-full {
    // PC STYLE
    .booking-desktop-tip {
      font-size: vw(14);
      color: #959595;
      line-height: 1;
      text-align: center;
    }
  }
}
</style>
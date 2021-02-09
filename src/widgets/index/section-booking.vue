<template>
  <al-section class="widget-index-section-booking">
    <a href="javascript:void(0);" name="booking"></a>
    <al-image
      class="booking-form-bg layout-desktop-full"
      src="./images/booking-bg.jpg"
    ></al-image>
    <al-image
      class="booking-large-icon layout-desktop-full"
      :src="iconPath"
    ></al-image>
    <div class="booking-wrapper">
      <colorful-text class="booking-tltile">国际风尚</colorful-text>
      <p class="booking-more layout-mobile-only">现在预约即可了解更多。</p>
      <div class="booking-more booking-more-title layout-desktop-full">
        <p>国际别墅大宅设计·中国展</p>
        <p class="booking-desktop-tip layout-desktop-full">
          关于看展，现可报名了解更多。为了保护您的隐私，星杰承诺将对您的信息严格保密。
        </p>
      </div>
      <div class="booking-item layout-mobile-only">
        <div class="booking-item-info flex-pub">
          <al-icon name="time" class="booking-info-img"></al-icon>
          <p class="booking-info-text">
            <span>2021.2.28</span><span>周日</span><span>全天</span>
          </p>
        </div>
        <div class="booking-item-info flex-pub">
          <al-icon name="telephone" class="booking-info-img"></al-icon>
          <p class="booking-info-text">
            <span>预约热线</span><span>400</span><span>0574</span
            ><span>689</span>
          </p>
        </div>
      </div>
      <div class="info-wrapper flex-pub">
        <div class="booking-user-info">
          <form-input
            label="您的称呼*"
            class="booking-form-input"
            name="name"
            :status="validate.name"
            @focus="handleFormInputFocus"
            @blur="handleFormInputBlur"
            v-model="name"
          />
          <form-input
            label="联系方式*"
            class="booking-form-input"
            name="telephone"
            max-length="11"
            :status="validate.telephone"
            @focus="handleFormInputFocus"
            @blur="handleFormInputBlur"
            v-model="telephone"
          />
          <form-input
            name="other"
            placeholder="风格需求(非必填)"
            class="booking-form-input"
            @focus="handleFormInputFocus"
            v-model="other"
          />
          <div @click="handleSubmit" class="booking-submit layout-mobile-only">
            预约看展
          </div>
        </div>
        <div
          class="booking-user-info booking-user-info-desk layout-desktop-full"
        >
          <form-input-textarea
            name="otherMore"
            placeholder="其他需求(非必填)"
            class="booking-form-input booking-form-input-desk"
            @focus="handleFormInputFocus"
            v-model="otherMore"
          />
          <div @click="handleSubmit" class="booking-submit layout-desktop-full">
            预约看展
          </div>
        </div>
      </div>
      <p class="booking-tip layout-mobile-only">
        为了保护您的隐私，星杰承诺将对您的信息严格保密。
      </p>
    </div>
  </al-section>
</template>
<script>
const reg = /^1[0-9]{10}$/;
export default {
  data() {
    return {
      name: "",
      telephone: "",
      other: "",
      otherMore: "",
      focusInputName: "time",
      validate: {
        name: false,
        telephone: false,
      },
    };
  },
  computed: {
    iconPath() {
      return `./images/booking-${this.focusInputName}-large.png`;
    },
  },
  methods: {
    handleFormInputFocus(e) {
      console.log(e.name);
      this.focusInputName = e.name;
      if (e && e.name) {
        this.validate[e.name] = false;
      }
    },
    handleFormInputBlur(e) {
      if (e && e.name) {
        this.validate[e.name] = !e.value;
      }
    },
    handleSubmit() {
      if (this.validate.name || this.validate.telephone) {
        this.validate.name = !this.name;
        this.validate.telephone = !this.telephone;
        return;
      }

      if (!reg.test(this.telephone)) {
        this.telephone = "";
        this.validate.telephone = !this.telephone;
        return;
      }
    },
  },
};
</script>
<style lang="scss">
.widget-index-section-booking {
  padding: vw(76) 0 vw(78);
  font-size: vw(24);
  // MOBILE FISRT
  .flex-pub {
    display: flex;
    align-items: center;
  }
  .booking-wrapper {
    position: relative;
    z-index: 1;
    width: vw(550);
    margin: 0 auto;
    padding-bottom: vw(78);
    border-bottom: 1px solid #d8dbe2;
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
    margin-top: vw(24);
    text-align: center;
    line-height: 1.5;
    color: #959595;
    font-size: vw(16);
  }
  .booking-form-bg {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  @include layout-desktop-full {
    // PC STYLE
    position: relative;
    z-index: 1;
    padding: 0;
    margin: px2vw(160) 0;
    height: px2vw(960);
    font-size: px2vw(20);
    .booking-wrapper {
      width: px2vw(694);
      padding-top: px2vw(245);
      padding-bottom: 0;
      margin: 0;
      margin-left: px2vw(460);
      align-items: flex-start;
      border: none;
    }
    .booking-user-info-desk {
      margin-left: px2vw(54);
      width: px2vw(320);
    }
    .booking-more {
      margin-top: px2vw(18);
      margin-bottom: px2vw(140);
      font-size: px2vw(36);
      font-weight: bold;
      color: #1b1b1b;
      line-height: px2vw(44);
    }
    .booking-desktop-tip {
      margin-top: px2vw(16);
      font-size: px2vw(14);
      color: #959595;
      line-height: 1;
      text-align: left;
    }
    .info-wrapper {
      align-items: flex-start;
    }
    .booking-form-input {
      margin-bottom: px2vw(30);
      font-size: px2vw(14);
    }
    .booking-form-input-desk {
      height: px2vw(150);
    }
    .booking-submit {
      width: px2vw(320);
      height: px2vw(60);
      line-height: px2vw(60);
      border-radius: px2vw(6);
      font-size: px2vw(18);
    }
    .booking-large-icon {
      position: absolute;
      z-index: 10;
      top: px2vw(200);
      right: px2vw(418);
      width: px2vw(456);
      height: px2vw(320);
    }
  }
}
</style>
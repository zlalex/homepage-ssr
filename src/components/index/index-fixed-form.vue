<template>
  <div class="component-index-fixed-form" v-show="!visibile">
    <div
      @click="handleCloseMask"
      v-if="showPopup || showSuccessPopup"
      class="layout-mobile-only fixed-mask"
    ></div>
    <div class="fixed-form-content">
      <al-image
        v-show="!showPopup && !showSuccessPopup"
        @click="triggerPopup"
        class="fixed-form-bg layout-mobile-only booking-small-bg"
        src="./images/booking-fixed-bg.svg"
      ></al-image>
      <al-image
        v-show="!showPopup && showSuccessPopup"
        @click="handleCloseMask"
        class="fixed-form-bg layout-mobile-only"
        src="./images/booking-success.svg"
      ></al-image>
      <al-image
        v-show="showPopup"
        class="fixed-form-bg layout-mobile-only"
        src="./images/booking-popup-bg.svg"
      ></al-image>
      <al-image
        v-show="validate.name"
        class="fixed-form-validate layout-desktop-full booking-validate-name"
        src="./images/booking-validate.svg"
      ></al-image>
      <al-image
        v-show="validate.telephone"
        class="fixed-form-validate layout-desktop-full booking-validate-telephone"
        src="./images/booking-validate.svg"
      ></al-image>

      <al-image
        v-show="desktopShow"
        class="fixed-form-bg layout-desktop-full booking-desktop-bg"
        :class="{ active: formFocus }"
        src="./images/booking-fixed-bg-pc.svg"
      ></al-image>
      <al-image
        v-show="desktopShowSuccess"
        @click="showDesktopBookingForm"
        class="fixed-form-bg layout-desktop-full booking-desktop-success-bg"
        src="./images/booking-success-pc.svg"
      ></al-image>
    </div>
    <!-- COMMON FORM -->
    <form-input
      :label="$isMobile ? '您的称呼*' : ''"
      class="booking-form-input form-input-name"
      name="name"
      :normal="!$isMobile"
      :status="$isMobile ? validate.name : false"
      @focus="handleFormInputFocus"
      @blur="handleFormInputBlur"
      v-show="showFormInput"
      v-model="name"
    />
    <form-input
      :label="$isMobile ? '联系方式*' : ''"
      class="booking-form-input form-input-telephone"
      name="telephone"
      max-length="11"
      :normal="!$isMobile"
      :status="$isMobile ? validate.telephone : false"
      @focus="handleFormInputFocus"
      @blur="handleFormInputBlur"
      v-show="showFormInput"
      v-model="telephone"
    />
    <form-input
      name="other"
      placeholder="风格需求(非必填)"
      class="booking-form-input form-input-other layout-mobile-only"
      @focus="handleFormInputFocus"
      v-show="showFormInput"
      v-model="other"
    />
    <div v-show="showFormInput" @click="handleSubmit" class="booking-submit">
      预约看展
    </div>
  </div>
</template>
<script>
import axios from "axios";
import throttle from "lodash/throttle";
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
      showPopup: false,
      showSuccessPopup: false,
      desktopShow: true,
      desktopShowSuccess: false,
      timer: null,
      formFocus: false,
    };
  },
  props: {
    visibile: Boolean,
  },
  computed: {
    iconPath() {
      return `./images/booking-${this.focusInputName}-large.png`;
    },
    showFormInput() {
      if (this.$isMobile) {
        return this.showPopup;
      }
      return this.desktopShow;
    },
  },
  mounted() {
    this.getBookingAsync = throttle(this.getBookingAsync, 1e3);
    this.$EVENT_BUS.$on("SHOW_POPUP", (type) => {
      if (this.$isMobile) {
        this.handleCloseMask();
        type === "success"
          ? this.handleShowSuccessPopup()
          : this.triggerPopup();
      } else {
        this.formFocus = true;
        clearTimeout(this.timer);
        this.timer = null;
        this.timer = setTimeout(() => {
          // TODO
          this.formFocus = false;
        }, 5e3);
      }
    });
  },
  methods: {
    triggerPopup() {
      this.showPopup = !this.showPopup;
    },
    handleShowSuccessPopup() {
      this.showPopup = false;
      this.showSuccessPopup = true;
    },
    handleFormInputFocus(e) {
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

      this.getBookingAsync();
    },
    getBookingAsync() {
      const url =
        "https://admin.atjia.com/api_cms/busiContentActiveResult/addCusIds";
      const params = {
        activeName: this.name, //姓名
        activePhone: this.telephone, //手机号
        activeType: "1", //活动类型 线下(必填，固定值)
        content: this.other || "", //活动特殊需求
        code: "AC202102090001", //活动编码 (必填)
      };
      const requestConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          appId: this.$isMobile ? "client_app" : "pc_front",
          currentRegion: 330200,
        },
      };
      axios.post(url, params, requestConfig).then((response) => {
        if (this.validateResponse(response)) {
          this.name = this.telephone = this.other = this.otherMore = "";
          if (this.$isMobile) {
            this.showPopup = false;
            this.showSuccessPopup = true;
          } else {
            this.desktopShow = false;
            this.desktopShowSuccess = true;
          }
        }
      });
    },
    validateResponse(response) {
      if (
        response &&
        response.data &&
        response.data.type &&
        response.data.type.toLocaleLowerCase() === "success"
      ) {
        return true;
      }
      return false;
    },
    handleCloseMask() {
      this.showPopup = false;
      this.showSuccessPopup = false;
    },
    showDesktopBookingForm() {
      this.desktopShow = true;
      this.desktopShowSuccess = false;
    },
  },
};
</script>
<style lang="scss">
.component-index-fixed-form {
  position: fixed;
  z-index: 50;
  left: 0;
  bottom: 0;
  width: 100%;
  .fixed-mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 49;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.4;
  }
  .fixed-form-content {
    position: relative;
    z-index: 51;
  }
  .booking-small-bg {
    width: vw(670);
    margin: 0 auto vw(40);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  }
  .booking-submit,
  .booking-form-input {
    position: absolute;
    left: vw(100);
    bottom: 0;
    z-index: 52;
    font-size: vw(24);
    width: vw(552);
    height: vw(92);
    border: 1px solid transparent;
  }
  .form-input-name {
    bottom: vw(555);
  }
  .form-input-telephone {
    bottom: vw(415);
  }
  .form-input-other {
    bottom: vw(275);
  }
  .booking-submit {
    bottom: vw(135);
    background: linear-gradient(90deg, #fa9986 0%, #d52c3f 100%);
    line-height: vw(90);
    text-align: center;
    border-radius: vw(10);
    font-size: vw(28);
    font-weight: bold;
    color: #ffffff;
  }
  .booking-desktop-success-bg,
  .booking-desktop-bg {
    width: px2vw(1720);
    margin: 0 auto px2vw(50);
    border: px2vw(2) solid transparent;
    border-radius: px2vw(20);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    &.active {
      border: px2vw(2) solid #d52c3f;
    }
  }
  @include layout-desktop-full {
    .booking-submit,
    .booking-form-input {
      bottom: px2vw(84);
      font-size: px2vw(24);
      width: px2vw(270);
      height: px2vw(80);
      .form-input-inner {
        background: transparent;
      }
    }
    .form-input-name {
      left: px2vw(685);
    }
    .form-input-telephone {
      left: auto;
      right: px2vw(500);
    }
    .booking-submit {
      right: px2vw(150);
      left: auto;
      line-height: px2vw(90);
      border-radius: px2vw(10);
      font-size: px2vw(28);
      color: transparent;
      background: transparent;
    }
    .fixed-form-validate {
      position: absolute;
      width: px2vw(270);
      height: px2vw(80);
      bottom: px2vw(100);
    }
    .booking-validate-name {
      left: px2vw(635);
    }
    .booking-validate-telephone {
      right: px2vw(550);
    }
  }
}
</style>
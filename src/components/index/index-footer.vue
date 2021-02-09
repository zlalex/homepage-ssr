<template>
  <div class="component-index-footer">
    <div class="footer-content layout-mobile-only">
      <div class="footer-info footer-pub">
        <div class="footer-left">
          <div class="footer-company-info">
            <p>公司热线</p>
            <p class="footer-strong">
              <span>400</span><span>0574</span><span>689</span>
            </p>
          </div>
          <div class="footer-company-info">
            <p>星杰宁波微信官方号</p>
            <p class="footer-strong">XINGJIE-NINGBO</p>
          </div>
          <div class="footer-company-info">
            <p>公司首页</p>
            <p class="footer-strong">HTTPS://WWW.XINGJIESJ.COM/NB</p>
          </div>
        </div>
        <div class="footer-option" @click="scrollToTop">
          <al-icon name="footerBack"></al-icon>
        </div>
      </div>
      <div class="footer-icon footer-pub">
        <p class="icon-copy-right">© 2020 SINGO.</p>
        <div class="icon-channel footer-pub">
          <a href="https://weibo.com/xingjienb?sudaref=www.xingjiesj.com&is_all=1" target="_blank" class="channel-svg">
            <al-icon name="weibo"></al-icon>
          </a>
          <div class="channel-svg" @click="handleShowCode('wechat')">
            <al-icon name="wechat"></al-icon>
          </div>
          <div class="channel-svg" @click="handleShowCode('tiktok')">
            <al-icon name="tiktok"></al-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-content-desk layout-desktop-full">
      <div class="footer-menu pub-flex">
        <p v-for="(item, index) in menuList" :key="index">{{ item }}</p>
      </div>
      <al-icon
        @click="scrollToTop"
        class="icon-footer-back"
        name="footerBack"
      ></al-icon>
      <div class="footer-company-desk pub-flex">
        <div class="footer-company-related">
          <p class="footer-time">© 2021 SINGO.</p>
        </div>
        <div class="footer-company-related">
          <p class="footer-copy">All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        "返回首页",
        "大宅案例",
        "设计大师",
        "",
        "严选材料",
        "全球采集",
        "关于星杰",
      ],
    };
  },
  methods: {
    scrollToTop() {
      if (this.$isMobile) {
        window.scrollTo(0, 0);
      } else {
        document.querySelector(".inner-scroll").scrollTop = 0;
      }
    },
    handleShowCode(name){
      this.$EVENT_BUS.$emit('SHOW_DIALOG',name)
    }
  },
};
</script>
<style lang="scss">
.component-index-footer {
  .footer-pub {
    display: flex;
    justify-content: space-between;
  }
  .footer-info {
    justify-content: space-between;
    align-items: flex-end;
    height: vw(256);
  }
  .footer-content {
    width: vw(550);
    margin: 0 auto;
    line-height: 1;
    font-size: vw(13);
    padding-bottom: vw(98);
    .footer-company-info {
      margin-bottom: vw(28);
      &:last-child {
        margin-bottom: 0;
      }
    }
    .footer-strong {
      margin-top: vw(16);
      font-weight: bold;
      span {
        margin-right: vw(18);
      }
    }
  }
  .footer-option {
    flex: 0 0 vw(96);
    height: vw(256);
  }
  .footer-icon {
    margin-top: vw(84);
    .icon-copy-right {
      color: #c5c4c4;
    }
  }
  .icon-channel {
    width: vw(200);
    text-align: center;
  }
  .channel-svg {
    width: vw(34);
    height: vw(26);
  }
  @include layout-desktop-full {
    position: relative;
    font-size: px2vw(15);
    line-height: 1;
    .pub-flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .footer-content-desk {
      width: px2vw(1004);
      margin: 0 auto;
    }
    .footer-menu {
      height: px2vw(168);
    }
    .footer-company-desk {
      margin: 0 auto;
      width: px2vw(750);
      height: px2vw(84);
      align-items: center;
      justify-content: center;
      color: #a7a5a6;
      font-size: px2vw(12);
      border-top: 1px solid #f2f2f2;
    }
    .footer-company-related {
      flex: 1;
      &:first-child {
        text-align: right;
      }
      &:last-child {
        text-align: left;
      }
    }
    .footer-time {
      padding-right: px2vw(86);
    }
    .footer-copy {
      padding-left: px2vw(80);
    }
    .icon-footer-back {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: px2vw(96);
      transform: translateX(-50%);
    }
  }
}
</style>
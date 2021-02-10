<template>
  <div class="component-index-menu" v-show="visibile">
    <!--
    <al-icon
      class="menu-close"
      @click="handleTriggerMenu"
      name="close"
    ></al-icon> -->
    <div class="index-menu-content">
      <div class="menu-logo">
        <al-icon name="menuLogo"></al-icon>
      </div>
      <div class="menu-list">
        <a
          class="menu-item"
          :class="{ active: !i }"
          v-for="(item, i) in menuList"
          :key="i"
          :href="item.link || 'javascript:void(0);'"
        >
          <span class="menu-item-cn">{{ item.cn }}</span>
          <span class="menu-item-split">/</span>
          <span class="menu-item-en">{{ item.en }}</span>
        </a>
        <div class="copyright layout-desktop-full">© 2021 SHANGHAI SINGO</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$EVENT_BUS.$on("SHOW_MENU", () => {
      this.handleTriggerMenu();
    });
  },
  data() {
    return {
      visibile: false,
      menuList: [
        {
          cn: "首页",
          en: "HOME",
          link: "",
        },
        {
          cn: "案例",
          en: "CASES",
          link: "",
        },
        {
          cn: "设计师",
          en: "DESIGN",
          link: "",
        },
        {
          cn: "服务",
          en: "SERVICE",
          link: "",
        },
        {
          cn: "品牌",
          en: "BRAND",
          link: "",
        },
      ],
    };
  },
  methods: {
    handleTriggerMenu() {
      this.visibile = !this.visibile;
      if (this.$isMobile) {
        document.body.style.overflow = this.visibile ? "hidden" : "inherit";
      }
    },
  },
};
</script>
<style lang="scss">
$heightMobile: vw(90);
$heightDesktop: px2vw(70);
.component-index-menu {
  position: fixed;
  top: vw(90);
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background: rgba(181, 26, 30, 0.95);
  color: #fff;
  .index-menu-content {
    display: flex;
    margin: 0 auto;
    width: 50vw;
    flex-direction: column-reverse;
  }
  .menu-logo {
    margin-top: vw(200);
  }
  .menu-item {
    display: flex;
    align-items: flex-end;
    width: 60%;
    margin: vw(100) auto 0;
    text-decoration: none;
    color: #fff;
    opacity: 0.5;
    font-size: vw(32);
    &.active {
      font-size: vw(40);
      opacity: 1;
    }
  }
  .menu-item-cn {
    width: vw(120);
    line-height: 1;
  }
  .menu-item-split {
    margin-right: vw(10);
  }
  .menu-item-split,
  .menu-item-en {
    font-size: vw(20);
  }
  .copyright {
    margin-top: vw(100);
    font-size: vw(20);
  }
  @include layout-desktop-full {
    top: px2vw(70);
    display: flex;
    align-items: center;
    .index-menu-content {
      width: 80vw;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
    .menu-item-split{
      margin-right: px2vw(10);
    }
    .menu-item-split,
    .menu-item-en {
      font-size: px2vw(20);
    }
    .menu-item {
      margin-top: px2vw(40);
      width: px2vw(300);
      font-size: px2vw(26);
      &.active {
        font-size: px2vw(30);
        opacity: 1;
      }
    }
    .menu-item-cn {
      width: px2vw(100);
    }
    .menu-logo {
      margin-top: 0;
    }
    .copyright {
      margin-top: px2vw(100);
      font-size: px2vw(20);
    }
  }
}
</style>
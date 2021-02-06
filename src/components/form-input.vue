<template>
  <div class="component-form-input">
    <label class="form-input-label__wrapper">
      <p class="form-input-label" v-if="label">{{ label }}</p>
      <div class="form-input" v-if="value">
        <input
          type="text"
          :value="value"
          :placeholder="placeholder"
          @input="handleInput"
        />
      </div>
      <div class="form-input form-tip" v-else>您可能遗忘了这里。</div>
    </label>
  </div>
</template>
<script>
export default {
  name: "form-input",
  props: {
    label: String,
    placeholder: String,
    value: String,
    status: Boolean
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss">
.component-form-input {
  padding-left: vw(34);
  width: 100%;
  height: vw(90);
  border: 1px solid #d8dbe2;
  border-radius: vw(10);
  overflow: hidden;
  .form-input-label {
    padding-right: vw(34);
    color: #959595;
  }
  .form-input-label__wrapper {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .form-input {
    flex: 1;
    height: 100%;
    input {
      padding-right: vw(6);
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
    }
  }
  .form-tip {
    font-size: vw(24);
    font-weight: bold;
    color: #1b1b1b;
    line-height: vw(90);
  }
  @include layout-desktop-full {
    // PC STYLE
    width: px2vw(320);
    padding-left: px2vw(24);
    height: px2vw(60);
    border-radius: px2vw(6);
    .form-input-label {
      padding-right: px2vw(24);
    }
    .form-input {
      input {
        padding-right: px2vw(6);
      }
    }
    .form-tip {
      font-size: px2vw(14);
      line-height: px2vw(60);
    }
  }
}
</style>
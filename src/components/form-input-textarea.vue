<template>
  <div class="component-form-area" :class="{ focus }">
    <label class="form-input-label__wrapper">
      <div class="form-input">
        <textarea
          class="form-input-inner"
          type="text"
          :value="value"
          :placeholder="placeholder"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
        />
      </div>
    </label>
  </div>
</template>
<script>
export default {
  name: "form-input-textarea",
  props: {
    placeholder: String,
    value: String,
    name: String,
  },
  data() {
    return {
      focus: false,
    };
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
    handleFocus(event) {
      this.$emit("focus", { name: this.name, value: event.target.value });
      this.focus = !this.focus;
    },
    handleBlur(event) {
      this.$emit("blur", event.target.value);
      this.focus = !this.focus;
    },
  },
};
</script>

<style lang="scss">
.component-form-area {
  @include layout-desktop-full {
    // PC STYLE
    padding: px2vw(8);
    width: 100%;
    height: px2vw(60);
    overflow: hidden;
    border: 1px solid #d8dbe2;
    border-radius: px2vw(6);
    &.focus {
      border: 1px solid #db3f4b;
    }
    .form-input-label__wrapper {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .form-input {
      flex: 1;
      height: 100%;
    }
    .form-input-inner {
      width: 100%;
      height: 100%;
      word-break: break-all;
      font-size: px2vw(14);
      border: none;
      outline: none;
      resize: none;
      overflow-wrap: break-word;
      &::-webkit-input-placeholder {
        color: #767882;
      }
    }
  }
}
</style>
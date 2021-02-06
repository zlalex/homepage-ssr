<template>
  <div class="component-form-area">
    <label class="form-input-label__wrapper">
      <div class="form-input">
        <textarea
          type="text"
          :value="value"
          :placeholder="placeholder"
          @input="handleInput"
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
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
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
    .form-input-label__wrapper {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .form-input {
      flex: 1;
      height: 100%;
      textarea {
        width: 100%;
        height: 100%;
        word-break: break-all;
        border: none;
        outline: none;
        resize: none;
        overflow-wrap: break-word;
      }
    }
  }
}
</style>
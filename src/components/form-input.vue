<template>
  <div class="component-form-input">
    <label class="form-input-label__wrapper">
      <p class="form-input-label" v-if="label">{{ label }}</p>
      <div class="form-input">
        <input
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
  name: "form-input",
  props: {
    label: String,
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
}
</style>
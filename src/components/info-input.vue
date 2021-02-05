<template>
  <div class="component-info-input">
    <label class="form-msg flex-pub">
      <p class="form-name" v-if="label">{{ label }}</p>
      <div class="form-input">
        <input type="text" :placeholder="placeholder" @input="handlerIpupt" :value="value" />
      </div>
    </label>
  </div>
</template>
<script>
export default {
  name: "info-input",
  props: {
    label: String,
    placeholder: String,
    value: String,
  },
  methods: {
    handlerIpupt(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss">
.component-info-input {
  padding-left: vw(34);
  border: 1px solid #d8dbe2;
  border-radius: vw(10);
  width: 100%;
  height: vw(90);
  overflow: hidden;
  .flex-pub {
    display: flex;
    align-items: center;
  }
  .form-name {
    padding-right: vw(34);
    color: #959595;
  }
  .form-msg {
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
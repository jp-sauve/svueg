<template>
  <div class="slider-wrapper">
    <label for="slider">
      {{label}}<slot></slot>
      <input type="range"
             @input="emitValue"
             v-model="value"
             name="slider"
             :id="`slider-${idSuffix}`"
             :min="min"
             :max="max">
      {{value}}
    </label>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      value: 0,
    };
  },
  props: {
    label: {
      type: String,
      required: false,
      default: 'X',
    },
    min: {
      type: Number,
      required: false,
      default: 10,
    },
    max: {
      type: Number,
      required: false,
      default: 10,
    },
    idSuffix: {
      type: String,
      required: false,
    },
    config: {
      type: Object,
      required: false,
    },
  },
  methods: {
    emitValue(e) {
    //   console.log(e);
      this.$emit('valueEvent', e);// just emitting the event so that I can get the target too
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

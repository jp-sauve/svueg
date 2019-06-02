<template>
  <div class="sliders-wrapper">
    <label for="x">
      {{xLabel}}
      <input type="range" @input="emitX" v-model="x" name="x" id="x" min="minX" :max="maxX">
      {{x}}
    </label>
    <label for="y">
      {{yLabel}}
      <input type="range" @input="emitY" v-model="y" name="y" id="y" min="minY" :max="maxY">
      {{y}}
    </label>
    <label for="z">
      {{zLabel}}
      <input type="range" @input="emitZ" v-model="z" name="z" id="z" min="minZ" :max="maxZ">
      {{z}}
    </label>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      x: '10',
      y: '10',
      z: '10',
    };
  },
  props: {
    xLabel: {
      type: String,
      required: false,
      default: 'X',
    },
    yLabel: {
      type: String,
      required: false,
      default: 'Y',
    },
    zLabel: {
      type: String,
      required: false,
      default: 'Z',
    },
    minX: {
      type: String,
      required: false,
      default: '10',
    },
    minY: {
      type: String,
      required: false,
      default: '10',
    },
    minZ: {
      type: String,
      required: false,
      default: '10',
    },
    maxX: {
      type: String,
      required: false,
      default: '100',
    },
    maxY: {
      type: String,
      required: false,
      default: '100',
    },
    maxZ: {
      type: String,
      required: false,
      default: '100',
    },
  },
  methods: {
    emitX(e) {
      // console.log(e.target.value);
      this.$emit('x', e.target.value);
    },
    emitY(e) {
      // console.log('emitY value: ', e.target.value);
      this.$emit('y', e.target.value);
    },
    emitZ(e) {
      // console.log('emitZ value: ', e.target.value);
      this.$emit('z', e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

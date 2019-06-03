<template>
  <div class="sliders-wrapper">
    <Slider v-if="controlsConfig === null"
            @valueEvent="getTotalSliders"
            :min="0"
            :max="10">
    </Slider>

    <Slider v-else
            v-for="(sliderConfig, index) in controlsConfig"
            @valueEvent="staticValue"
            :label="sliderConfig.name"
            :idSuffix="sliderConfig.idSuffix"
            :config="sliderConfig"
            :key="index"
            :min="sliderConfig.min"
            :max="sliderConfig.max">{{index}}</Slider>
     <Slider v-for="index in totalSliders" :key="index" :min="0" :max="5">{{index}}</Slider>

  </div>
</template>

<script>
import Slider from '@/components/Slider.vue';

export default {
  name: 'SliderPack',
  components: {
    Slider,
  },
  data() {
    return {
      totalSliders: null,
      x: 10,
      y: 10,
      z: 10,
    };
  },
  props: {
    controlsConfig: {
      type: Array,
      required: false,
      default: null,
    },
  },
  methods: {
    getTotalSliders(e) {
      // console.log('sliders: ', e.target.value);
      this.totalSliders = parseInt(e.target.value, 10);
    },
    staticValue(e) {
      // console.log('staticValue: ', e.target);
      const { target, target: { id, value } } = e;
      this.$emit('valueEvent', { id, value });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

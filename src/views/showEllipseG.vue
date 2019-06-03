<template>
    <div>
        <Sliders :controlsConfig="controls" @valueEvent="dealWithValues"></Sliders>
<EllipseG v-for="(count, index) in shape['slider-repeat']"
          :key="index"
          :x="shape['slider-x']"
          :y="shape['slider-y']"
          :z="shape['slider-z']">
          </EllipseG>
    </div>
</template>

<script>
import Sliders from '@/components/Sliders.vue';
import EllipseG from '@/components/EllipseG.vue';

export default {
  name: 'showEllipseG',
  data() {
    return {
      shape: {
        'slider-repeat': 1,
        'slider-x': 10,
        'slider-y': 10,
        'slider-z': 1,
      },
      controls: [
        {
          name: 'repeat',
          idSuffix: 'repeat',
          min: 1,
          max: 500,
        },
        {
          name: 'X',
          idSuffix: 'x',
          min: 1,
          max: 100,
        },
        {
          name: 'Y',
          idSuffix: 'y',
          min: 1,
          max: 100,
        },
        {
          name: 'Z',
          idSuffix: 'z',
          min: 0,
          max: 100,
        },
      ],
    };
  },
  components: {
    Sliders,
    EllipseG,
  },
  methods: {
    dealWithValues(event) {
      this.shape[event.id] = parseInt(event.value, 10);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

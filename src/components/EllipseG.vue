<template>
<div>
<Slider xLabel="X" yLabel="Y" zLabel="Z" @x="doX" @y="doY" @z="doZ"></Slider>
<svg xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
:height="totalHeight" :width="totalWidth"
:viewBox="`0 0 ${totalWidth} ${totalHeight}`"
preserveAspectRatio="none">
    <ellipse :cx="( parseInt(svgrx, 10) - svgrz ) + (parseInt(svgrz, 10) * 2)" :cy="(parseInt(svgry, 10) - svgrz) + ( parseInt(svgrz, 10) * 2 )" :rx="parseInt(svgrx, 10)" :ry="parseInt(svgry, 10)"
    :style="`stroke:#ff0000;stroke-width:${ svgrz }px;fill:#99dcff;`"/>
</svg>
</div>

</template>

<script>
import Slider from '@/components/Slider.vue';

export default {
  name: 'EllipseG',
  components: {
    Slider,
  },
  data() {
    return {
      svgrx: 20,
      svgry: 20,
      svgrz: 1,
    };
  },
  props: {
    x: Number,
    y: Number,
    z: Number,
  },
  methods: {
    doX(value) {
      this.svgrx = parseInt(value, 10);
    },
    doY(value) {
      this.svgry = parseInt(value, 10);
    },
    doZ(value) {
      this.svgrz = parseInt(value, 10);
    },
  },
  computed: {
    totalHeight() {
      return (this.svgry * 2) + (parseInt(this.svgrz, 10) * 2);
    },
    totalWidth() {
      return (this.svgrx * 2) + (parseInt(this.svgrz, 10) * 2);
    },
    maxBorder() {
      return (this.svgrx < this.svgry) ? this.svgry : this.svgrx;
    },
  },
};
</script>

<style scoped lang="scss">
  body {
    box-sizing: border-box;
  }
  svg {
    box-sizing: border-box;
    display: block;
    margin: auto;
  }
.slider-wrapper {
  display: inline-block;
  border: 1px solid #999;
  padding: 0.5em;
}
.slider-wrapper label {
  display: block;
}
.slider-wrapper input {
  display: inline;
  vertical-align: middle;
  line-height: 1.5;
  margin: 0.25rem 10px;
}
</style>

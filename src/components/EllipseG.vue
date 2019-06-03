<template>
<svg xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
:height="totalHeight" :width="totalWidth"
:viewBox="`0 0 ${totalWidth} ${totalHeight}`"
preserveAspectRatio="none">
    <ellipse :cx="parseInt(svgrx, 10) + (parseInt(svgrz, 10))"
             :cy="parseInt(svgry, 10) + ( parseInt(svgrz, 10))"
             :rx="parseInt(svgrx, 10)"
             :ry="parseInt(svgry, 10)"
             :style="`stroke:#ff0000;stroke-width:${ svgrz }px;fill:#99dcff;`"/>
</svg>
</template>
<script>

export default {
  name: 'EllipseG',
  components: {
  },
  props: {
    x: Number,
    y: Number,
    z: Number,
  },
  methods: {
  },
  computed: {
    svgrx() {
      return this.x;
    },
    svgry() {
      return this.y;
    },
    svgrz() {
      return this.z;
    },
    totalHeight() {
      return (this.svgry * 2) + (parseInt(this.svgrz, 10) * 2);
    },
    totalWidth() {
      return (this.svgrx * 2) + (parseInt(this.svgrz, 10) * 2);
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
    display: inline;

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

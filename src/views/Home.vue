<template>
  <div class="home">
    <EllipseG :x="20" :y="20"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EllipseG from '@/components/EllipseG.vue';

export default {
  name: 'home',
  components: {
    EllipseG,
  },
};
</script>

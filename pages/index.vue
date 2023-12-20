<template>
  <div>
    아무거나
    <SampleComp />
  </div>
</template>

<script>
import SampleComp from '@/components/SampleComp';

export default {
  components: {
    SampleComp
  },
  layout: 'defaultLayout',
};
</script>

<style scoped>
@import '~/assets/css/main.css';
</style>

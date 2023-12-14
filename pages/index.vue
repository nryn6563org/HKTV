<template>
  <div>
    아무거나
    <SampleComp />
  </div>
</template>

<script>
import SampleComp from '@/components/SampleComp'

export default {
  layout: 'defaultLayout',
  components: {
    SampleComp
  }
}
</script>

<style scoped>
@import '~/assets/css/main.css';
</style>

<template>
  <div>Sample Component...!</div>
</template>

<script>
export default {
  async fetch () {
    const sample = await this.$getAxios({ url: '/common/indexSise' })
    console.log('Axios Get Sample  :: ', sample)
  }
}
</script>
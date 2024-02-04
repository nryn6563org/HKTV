<template>
  <div id="wrap">
    <DefaultHeader></DefaultHeader>
    <Nuxt />
  </div>
</template>

<script>
import DefaultHeader from "~/components/DefaultHeader";
export default {
  name: "DefaultLayout",
  components: {
    DefaultHeader,
  },
};
</script>

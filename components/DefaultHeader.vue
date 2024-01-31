<template>
  <header id="header">
    <button @click="goBack">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15.5 19L9.20711 12.7071C8.81658 12.3166 8.81658 11.6834 9.20711 11.2929L15.5 5"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <!-- 뒤로가기 버튼 -->

    <h1>AI캐치</h1>
    <!-- 타이틀 -->
  </header>
  <!-- 공통헤더 -->
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1); // 뒤로가기
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/header.css";
</style>

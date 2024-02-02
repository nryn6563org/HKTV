<template>
  <div id="container">
    <div class="catch_wrap">
      <div class="catch_tab">
        <button :class="{active: activeTab === 'issue'}" @click="changeTab('issue')">이슈캐치</button>
        <button :class="{active: activeTab === 'signal'}" @click="changeTab('signal')">신호캐치</button>
      </div>
      <!-- catch 탭 -->

      <div class="catch_content">
        <ContentOne v-show="activeTab === 'issue'"></ContentOne>
        <ContentTwo v-show="activeTab === 'signal'"></ContentTwo>
      </div>
    </div>
  </div>
</template>

<script>
import ContentOne from "~/components/IssueCatch/ContentOne";
import ContentTwo from "~/components/SignalCatch/ContentTwo";
export default {
  components: {
    ContentOne,
    ContentTwo
  },
  layout: 'defaultLayout',
  data() {
    return {
      activeTab: "issue", // Default active tab
      showModal: false,
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
@import '~/assets/css/main.css';
</style>

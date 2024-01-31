<template>
  <section class="content_one">
    <div class="issue_w">
      <div class="issue_tab_w">
        <div class="issue_tab">
          <a
            :class="{ active: activeTab === 'today' }"
            @click="changeTab('today')"
            >오늘의 이슈</a
          >
          <a
            :class="{ active: activeTab === 'quick' }"
            @click="changeTab('quick')"
            >한발빠른 이슈</a
          >
          <a
            :class="{ active: activeTab === 'catch' }"
            @click="changeTab('catch')"
            >이슈캐치 알림 <em class="bullet_new">N</em></a
          >
        </div>
      </div>

      <!-- 이슈탭 -->
      <div class="issue_tab_content">
        <TodayIssue v-show="activeTab === 'today'"></TodayIssue>
        <QuickIssue v-show="activeTab === 'quick'"></QuickIssue>
        <CatchAlarm v-show="activeTab === 'catch'"></CatchAlarm>
      </div>
      <!-- 이슈 탭 컨텐츠 -->
    </div>
  </section>
</template>

<script>
import TodayIssue from "~/components/IssueCatch/TodayIssue";
import QuickIssue from "~/components/IssueCatch/QuickIssue";
import CatchAlarm from "~/components/IssueCatch/CatchAlarm";

export default {
  components: {
    TodayIssue,
    QuickIssue,
    CatchAlarm,
  },
  data() {
    return {
      activeTab: "today", // Default active tab
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

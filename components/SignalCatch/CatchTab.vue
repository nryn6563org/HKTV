<template>
  <div class="list_w notJoin">
    <div class="tab">
      <button
        :class="{ active: activeTab === 'month3' }"
        @click="changeTab('month3')"
      >
        최근 3개월
      </button>
      <button
        :class="{ active: activeTab === 'month12' }"
        @click="changeTab('month12')"
      >
        최근 1년
      </button>
    </div>
    <!-- tab -->

    <div class="tabContent">
      <div v-show="activeTab === 'month3'">
        <div class="chart">
          <img
            src="~/assets/img/demoChart2.png"
            alt="차트데모"
            class="w-full"
          />
        </div>
        <!-- 차트이미지 -->

        <div class="list">
          <div class="list-header">
            <span class="date">거래일자</span>
            <span class="signal">신호</span>
            <span class="price">매매단가</span>
            <span class="per">실현손익률</span>
          </div>
          <div class="list-body">
            <div>
              <span class="date">2022.11.01</span>
              <span class="signal up">매수</span>
              <span class="price">1,144,000</span>
              <span class="per">-</span>
            </div>
            <div>
              <span class="date">2022.11.01</span>
              <span class="signal dn">매도</span>
              <span class="price">1,144,000</span>
              <span class="per">+33.3%</span>
            </div>
            <div>
              <span class="date">2022.11.01</span>
              <span class="signal up">매수</span>
              <span class="price">1,144,000</span>
              <span class="per">-</span>
            </div>
            <div>
              <span class="date">2022.11.01</span>
              <span class="signal dn">매도</span>
              <span class="price">1,144,000</span>
              <span class="per dn">-0.3%</span>
            </div>
            <div>
              <span class="date">2022.11.01</span>
              <span class="signal up">매수</span>
              <span class="price">1,144,000</span>
              <span class="per">-</span>
            </div>
          </div>
          <div class="more">
            <button>
              더보기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M5 7.5L9 11.5L13 7.5"
                  stroke="#666666"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <!-- 신호리스트 -->
      </div>
      <div v-show="activeTab === 'month12'">
        <div class="chart">
          <img
            src="~/assets/img/demoChart2.png"
            alt="차트데모"
            class="w-full"
          />
        </div>
        <!-- 차트이미지 -->

        <div class="list">
          <div class="list-header">
            <span class="date">거래일자</span>
            <span class="signal">신호</span>
            <span class="price">매매단가</span>
            <span class="per">실현손익률</span>
          </div>
          <div class="list-body">
            <div>
              <span class="date">2022.11.02</span>
              <span class="signal up">매수</span>
              <span class="price">1,144,000</span>
              <span class="per">-</span>
            </div>
            <div>
              <span class="date">2022.11.01</span>
              <span class="signal dn">매도</span>
              <span class="price">1,144,000</span>
              <span class="per up">+33.3%</span>
            </div>
            <div>
              <span class="date">2022.11.01</span>
              <span class="signal up">매수</span>
              <span class="price">1,144,000</span>
              <span class="per">-</span>
            </div>
            <div>
              <span class="date">2022.11.01</span>
              <span class="signal dn">매도</span>
              <span class="price">1,144,000</span>
              <span class="per dn">-0.3%</span>
            </div>
            <div>
              <span class="date">2022.11.01</span>
              <span class="signal up">매수</span>
              <span class="price">1,144,000</span>
              <span class="per">-</span>
            </div>
          </div>
          <div class="more">
            <button>
              더보기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M5 7.5L9 11.5L13 7.5"
                  stroke="#666666"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <!-- 신호리스트 -->
      </div>
    </div>
    <!-- tabContent -->

    <div class="notJoinBox">
      <div class="txt">
        <span>
          신호캐치는 <br />
          <em>매일 3종목</em> 무료로 이용할 수 있습니다. <br />
          한국경제TV의 매매타이밍을 <br />
          지금 확인하시겠습니까?
        </span>

        <!-- <span>
          오늘 무료 이용 가능 횟수를 <br />
          모두 사용했습니다. <br />
          서비스 가입 시, <em>신호캐치 무제한 조회</em>와 <br />
          <em>매매타이밍 실시간 알림</em>이 제공됩니다
        </span> -->
      </div>
      <!-- txt -->
      
      <div class="btn">
        <button class="complete">
          매매신호 확인하기
          <em>(이용가능 횟수 2/3회)</em>
        </button>
        <!-- <button>AI캐치 가입하기</button> -->
      </div>
      <!-- btn -->
    </div>
    <!-- 비회원 -->
  </div>
  <!-- 최근3&12개월 -->
</template>
<script>
export default {
  data() {
    return {
      activeTab: "month3",
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

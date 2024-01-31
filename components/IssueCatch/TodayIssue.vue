<template>
    <div id="tab01" class="tabContent">
      <div class="quick_catch">
        <img src="~/assets/img/quick_catch.png" alt="" />
      </div>
      <!-- 한발빠른 이슈 캐치 -->

      <div class="day_issue">
        <div class="day">
          <strong> <em>12월 19일</em> 이슈 </strong>
        </div>
        <!-- 이슈날짜 -->

        <div class="issue_list swiper">
          <div class="swiper-wrapper">
            <button class="swiper-slide active" type="button">STO</button>
            <button class="swiper-slide" type="button">암호화폐</button>
            <button class="swiper-slide" type="button">이슈1</button>
            <button class="swiper-slide" type="button">이슈2</button>
            <button class="swiper-slide" type="button">이슈3</button>
            <button class="swiper-slide" type="button">이슈4</button>
            <button class="swiper-slide" type="button">이슈5</button>
          </div>
        </div>
        <!-- 이슈 항목 -->

        <div class="banner">
          <button><em>'오늘의이슈'</em> 어떻게 활용하면 좋을까요?</button>
        </div>
        <!-- 이슈활용 안내 -->

        <div class="issue_news">
          <strong class="title">
            마이크론, 뉴욕 반도체 공장 설립에 1천억달러 투자 계획이 다 있구나
          </strong>
          <!-- 이슈뉴스 타이틀 -->
          <span class="contxt">
            미국 메모리 반도체 제조사인 마이크론 테크놀로지(NAS:MU)가 뉴욕에
            반도체 공장을 짓기 위해 최대 1천억 달러를 투자할 예정이라고 밝혔다.
            4일(현지시간) 뉴욕타임스에 따르면 마이크론은 이날 뉴욕주에 새로운
            컴퓨터 반도체 공장을 건설하는 데 앞으로 20년 이상 최대 1천억 달러를
            투자할 계획이라고 말했다. 미국에서 반도체 법이 통과한 이후 기업들이
            속속 미국내 투자를 강화하고 있다고 한다. 미국 메모리 반도체 제조사인
            마이크론 테크놀로지(NAS:MU)가 뉴욕에 반도체 공장을 짓기 위해 최대
            1천억 달러를 투자할 예정이라고 밝혔다. 4일(현지시간) 뉴욕타임스에
            따르면 마이크론은 이날 뉴욕주에 새로운 컴퓨터 반도체 공장을 건설하는
            데 앞으로 20년 이상 최대 1천억 달러를 투자할 계획이라고 말했다.
            미국에서 반도체 법이 통과한 이후 기업들이 속속 미국내 투자를
            강화하고 있다고 한다.
          </span>
          <!-- 이슈 뉴스 내용 -->
        </div>
        <!-- 이슈 뉴스 -->

        <div class="top_issue">
          <strong>12월18일 <em>오늘의이슈 종목 수익률 TOP3</em></strong>

          <div class="list">
            <div>
              <span class="date">12.18</span>
              <span class="obj">이슈명이슈명이슈명이슈명</span>
              <span class="per"><em>+00.00%</em> 달성</span>
            </div>
            <!-- // -->
            <div>
              <span class="date">12.18</span>
              <span class="obj">이슈명이슈명이슈명이슈명</span>
              <span class="per"><em>+00.00%</em> 달성</span>
            </div>
            <!-- // -->
            <div>
              <span class="date">12.18</span>
              <span class="obj">이슈명이슈명이슈명이슈명</span>
              <span class="per"><em>+000.00%</em> 달성</span>
            </div>
            <!-- // -->
          </div>
          <!-- top3 리스트 -->
        </div>
        <!-- top3 이슈 -->

        <div class="banner">
          <button><em>오늘의 이슈와 주도주</em> 개장전 미리받기</button>
        </div>
        <!-- 이슈활용 안내 -->

        <div class="issue_item">
          <div class="top">
            <strong class="obj"> <em>STO</em> 관련종목 </strong>
            <span class="date"> <em>2023.12.19</em> 기준 </span>
          </div>
          <!-- top -->

          <div class="list notJoin">
            <div class="lead">
              <div class="obj">
                <span class="bullet">주도</span>
                <span class="name">한국경제TV아무거나길게적어보자</span>
              </div>
              <div class="price">1,000,000</div>
              <div class="per up">+00.00%</div>
            </div>

            <div class="lead">
              <div class="obj">
                <span class="bullet">주도</span>
                <span class="name">한국경제TV아무거나길게적어보자</span>
              </div>
              <div class="price">1,000,000</div>
              <div class="per up">+00.00%</div>
            </div>

            <div class="lead">
              <div class="obj">
                <span class="bullet">주도</span>
                <span class="name">한국경제TV아무거나길게적어보자</span>
              </div>
              <div class="price">1,000,000</div>
              <div class="per up">+00.00%</div>
            </div>

            <div>
              <div class="obj">
                <span class="name">한국경제TV아무거나길게적어보자</span>
              </div>
              <div class="price">999,999</div>
              <div class="per dn">+00.00%</div>
            </div>

            <div>
              <div class="obj">
                <span class="name">한국경제TV아무거나길게적어보자</span>
              </div>
              <div class="price">99,999</div>
              <div class="per dn">+00.00%</div>
            </div>

            <button class="more">
              <span> 더보기 </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M5 7L9 11L13 7"
                  stroke="#666666"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <!-- more -->

            <div class="notJoinAlarm">
              <div class="txt">
                이슈주도주는<br />
                서비스 가입 후 확인가능합니다.
              </div>
              <!--  -->

              <button>AI캐치 가입하기</button>
            </div>
            <!-- 미가입자 팝업 -->
          </div>
          <!-- list 비가입자 -->

          <div class="list">
            <div class="lead">
              <div class="obj">
                <span class="bullet">주도</span>
                <span class="name">한국경제TV아무거나길게적어보자</span>
              </div>
              <div class="price">1,000,000</div>
              <div class="per up">+00.00%</div>
            </div>

            <div class="lead">
              <div class="obj">
                <span class="bullet">주도</span>
                <span class="name">한국경제TV아무거나길게적어보자</span>
              </div>
              <div class="price">1,000,000</div>
              <div class="per up">+00.00%</div>
            </div>

            <div class="lead">
              <div class="obj">
                <span class="bullet">주도</span>
                <span class="name">한국경제TV아무거나길게적어보자</span>
              </div>
              <div class="price">1,000,000</div>
              <div class="per up">+00.00%</div>
            </div>

            <div>
              <div class="obj">
                <span class="name">한국경제TV아무거나길게적어보자</span>
              </div>
              <div class="price">999,999</div>
              <div class="per dn">+00.00%</div>
            </div>

            <div>
              <div class="obj">
                <span class="name">한국경제TV아무거나길게적어보자</span>
              </div>
              <div class="price">99,999</div>
              <div class="per dn">+00.00%</div>
            </div>

            <button class="more">
              <span> 더보기 </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M5 7L9 11L13 7"
                  stroke="#666666"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <!-- more -->

            <div class="notJoinAlarm">
              <div class="txt">
                이슈주도주는<br />
                서비스 가입 후 확인가능합니다.
              </div>
              <!--  -->

              <button>AI캐치 가입하기</button>
            </div>
            <!-- 미가입자 팝업 -->
          </div>
          <!-- list -->
        </div>
        <!-- 연관종목 -->
      </div>
      <!-- 오늘의 이슈 -->
    </div>
  <!-- // -->
</template>

<script>
export default{
  mounted() {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/swiper@10.2.0/swiper-bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const swiper = new Swiper(".issue_list", {
        slidesPerView: "auto",
        spaceBetween: 4,
        pagination: false,
      }).mount();
      //
    };
  },
}
</script>

<style scoped>
@import "~/assets/css/todayIssue.css";
</style>

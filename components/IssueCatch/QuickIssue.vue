<template>
  <div id="tab02" class="tabContent">
    <div class="todayCatch swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide issueCard">
          <div class="top">
            <div class="bullet">
              <span>오늘의캐치주</span>
            </div>
            <!-- 블릿 -->

            <div class="obj">
              <strong>한국경제TV</strong>
              <span>039340</span>
            </div>
            <!-- 종목명 -->

            <div class="per">
              <span class="up">+21.62%</span>
            </div>
            <!-- 등락률 -->

            <div class="price">
              <span>1,177,000원</span>
            </div>
            <!-- 가격 -->

            <div class="stockInfo">
              <div><span>매수가</span><em>73,500</em></div>
              <div><span>목표가</span><em class="up">73,500</em></div>
              <div><span>손절가</span><em class="dn">73,500</em></div>
            </div>
            <!-- 가격정보 -->
          </div>
          <!-- 상단정보 -->

          <div class="chart">
            <img
              src="~/assets/img/demoChart.png"
              alt="차트데모"
              class="w-full"
            />
          </div>
          <!-- 차트 -->
        </div>
        <!-- 이슈카드 -->

        <div class="swiper-slide issueCard">
          <div class="top">
            <div class="bullet">
              <span>오늘의캐치주</span>
            </div>
            <!-- 블릿 -->

            <div class="obj">
              <strong>한국경제TV</strong>
              <span>039340</span>
            </div>
            <!-- 종목명 -->

            <div class="per">
              <span>+21.62%</span>
            </div>
            <!-- 등락률 -->

            <div class="price">
              <span>1,177,000원</span>
            </div>
            <!-- 가격 -->

            <div class="stockInfo">
              <div><span>매수가</span><em>73,500</em></div>
              <div><span>목표가</span><em class="up">73,500</em></div>
              <div><span>손절가</span><em class="dn">73,500</em></div>
            </div>
            <!-- 가격정보 -->
          </div>
          <!-- 상단정보 -->

          <div class="chart">
            <img
              src="~/assets/img/demoChart.png"
              alt="차트데모"
              class="w-full"
            />
          </div>
          <!-- 차트 -->
        </div>
        <!--  -->

        <div class="swiper-slide issueCard">
          <div class="top">
            <div class="bullet">
              <span>오늘의캐치주</span>
            </div>
            <!-- 블릿 -->

            <div class="obj">
              <strong>한국경제TV</strong>
              <span>039340</span>
            </div>
            <!-- 종목명 -->

            <div class="per">
              <span>+21.62%</span>
            </div>
            <!-- 등락률 -->

            <div class="price">
              <span>1,177,000원</span>
            </div>
            <!-- 가격 -->

            <div class="stockInfo">
              <div><span>매수가</span><em>73,500</em></div>
              <div><span>목표가</span><em class="up">73,500</em></div>
              <div><span>손절가</span><em class="dn">73,500</em></div>
            </div>
            <!-- 가격정보 -->
          </div>
          <!-- 상단정보 -->

          <div class="chart">
            <img
              src="~/assets/img/demoChart.png"
              alt="차트데모"
              class="w-full"
            />
          </div>
          <!-- 차트 -->
        </div>
        <!--  -->
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!-- 오늘의캐치주 -->

    <div class="quickIssueItem">
      <div class="title"><em>한발 빠른이슈</em> 캐치 종목</div>
      <!--  -->

      <div class="banner">
        <button><em>'한발빠른이슈'</em> 는 이렇게 활용하세요.</button>
      </div>
      <!--  -->

      <div class="top_issue">
        <strong><em>최근1개월</em> 한발빠른 이슈 수익률 TOP3</strong>

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

      <div class="catch_item_list">
        <div class="issue_item">
          <div class="top">
            <strong>01월19일</strong>
          </div>
          <!-- top -->

          <div class="list">
            <div @click="toggleOffcanvas">
              <div class="top">
                <div class="num">
                  <span>000000</span>
                </div>
                <!-- num -->
                <div class="obj">
                  <span class="txt">한국경제TV</span>
                  <span class="bullet up">보유중</span>
                  <!-- bullet - up,dn,mid -->
                </div>
                <!-- obj -->
              </div>
              <!-- top -->

              <div class="info">
                <div><span>매수가</span><em>71,000원</em></div>

                <div><span>현재가</span><em class="mid">1,077,000원</em></div>
              </div>
              <!-- info -->
            </div>
            <!--  -->

            <div @click="toggleOffcanvas">
              <div class="top">
                <div class="num">
                  <span>000000</span>
                </div>
                <!-- num -->
                <div class="obj">
                  <span class="txt">한국경제TV</span>
                  <span class="bullet up">매도</span>
                  <!-- bullet - up,dn,mid -->
                </div>
                <!-- obj -->
              </div>
              <!-- top -->

              <div class="info">
                <div><span>매수가</span><em>71,000원</em></div>

                <div><span>수익률</span><em class="up">+5.3%</em></div>
              </div>
              <!-- info -->
            </div>
            <!--  -->

            <div @click="toggleOffcanvas">
              <div class="top">
                <div class="num">
                  <span>000000</span>
                </div>
                <!-- num -->
                <div class="obj">
                  <span class="txt">한국경제TV</span>
                  <span class="bullet up">종목교체</span>
                  <!-- bullet - up,dn,mid -->
                </div>
                <!-- obj -->
              </div>
              <!-- top -->

              <div class="info">
                <div><span>매수가</span><em>71,000원</em></div>

                <div><span>수익률</span><em class="dn">-5.3%</em></div>
              </div>
              <!-- info -->
            </div>
            <!--  -->

            <div class="notJoinBox">
              <span>
                서비스 가입 후 <br>확인 가능합니다.
              </span>
              <button>AI캐치 가입하기</button>
            </div>
            <!-- 가입안내 -->
          </div>
          <!-- list -->
        </div>
        <!-- 이슈종목 -->

        <div class="issue_item">
          <div class="top">
            <strong>01월19일</strong>
          </div>
          <!-- top -->

          <div class="list notJoin">
            <div @click="toggleOffcanvas">
              <div class="top">
                <div class="num">
                  <span>000000</span>
                </div>
                <!-- num -->
                <div class="obj">
                  <span class="txt">한국경제TV</span>
                  <span class="bullet up">보유중</span>
                  <!-- bullet - up,dn,mid -->
                </div>
                <!-- obj -->
              </div>
              <!-- top -->

              <div class="info">
                <div><span>매수가</span><em>71,000원</em></div>

                <div><span>현재가</span><em class="mid">1,077,000원</em></div>
              </div>
              <!-- info -->
            </div>
            <!--  -->

            <div @click="toggleOffcanvas">
              <div class="top">
                <div class="num">
                  <span>000000</span>
                </div>
                <!-- num -->
                <div class="obj">
                  <span class="txt">한국경제TV</span>
                  <span class="bullet up">매도</span>
                  <!-- bullet - up,dn,mid -->
                </div>
                <!-- obj -->
              </div>
              <!-- top -->

              <div class="info">
                <div><span>매수가</span><em>71,000원</em></div>

                <div><span>수익률</span><em class="up">+5.3%</em></div>
              </div>
              <!-- info -->
            </div>
            <!--  -->

            <div @click="toggleOffcanvas">
              <div class="top">
                <div class="num">
                  <span>000000</span>
                </div>
                <!-- num -->
                <div class="obj">
                  <span class="txt">한국경제TV</span>
                  <span class="bullet up">종목교체</span>
                  <!-- bullet - up,dn,mid -->
                </div>
                <!-- obj -->
              </div>
              <!-- top -->

              <div class="info">
                <div><span>매수가</span><em>71,000원</em></div>

                <div><span>수익률</span><em class="dn">-5.3%</em></div>
              </div>
              <!-- info -->
            </div>
            <!--  -->

            <div class="notJoinBox">
              <span>
                서비스 가입 후 <br>확인 가능합니다.
              </span>
              <button>AI캐치 가입하기</button>
            </div>
            <!-- 가입안내 -->
            
          </div>
          <!-- list -->
        </div>
        <!-- 이슈종목 -->

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
      <!--  -->
    </div>
    <!-- 한발빠른 캐치종목 -->

    <div :class="{ 'offcanvas-open': isOffcanvasOpen }" class="offcanvas-wrap">
      <div class="offcanvas-bottom">
        <!-- Offcanvas Content -->
        <div class="offcanvas-content">
          <div class="offcanvas-header">
            <strong>대웅전략</strong>

            <button class="close-button" @click="closeOffcanvas">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                  stroke="#111111"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <!-- 오프캔버스 헤더 -->
          <div class="offcanvas-body">
            <div class="item-detail">
              <strong>한국경제TV</strong>

              <table>
                <colgroup>
                  <col width="25%" />
                  <col width="25%" />
                  <col width="25%" />
                  <col width="*" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">일자</th>
                    <th scope="col">대응전략</th>
                    <th scope="col">매매단가</th>
                    <th scope="col">손익률</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="4">
                      <div class="info" @click="toggleAccodian">
                        <span class="date">2022.12.01</span>
                        <span class="obj up">매수</span>
                        <span class="price">1,144,000</span>
                        <span class="per">-</span>
                      </div>
                      <div :class="{'infoActive' : isAccodianOpen}" class="info_txt">
                        <strong>[AI대응전량]</strong>
                        <span>
                          현재 단기 주가 상승확률은 62%입니다. 보유기간이 지났기
                          때문에, 내일 시초가에 매도하는 것이 좋습니다. 내일
                          시초가에 매도하는 것이 좋습니다.
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4">
                      <div class="info">
                        <span class="date">2022.12.01</span>
                        <span class="obj">종목교체</span>
                        <span class="price">144,000</span>
                        <span class="per up">+32.02</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4">
                      <div class="info">
                        <span class="date">2022.12.01</span>
                        <span class="obj dn">매도</span>
                        <span class="price">144,000</span>
                        <span class="per">-</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4">
                      <div class="info">
                        <span class="date">2022.12.01</span>
                        <span class="obj">매도</span>
                        <span class="price">144,000</span>
                        <span class="per up">+32.02</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4">
                      <div class="info">
                        <span class="date">2022.12.01</span>
                        <span class="obj">교체완료</span>
                        <span class="price">
                          <em>최고가</em>
                          144,000
                        </span>
                        <span class="per up">
                          <em>최고수익률</em>
                          +32.02
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- 오프캔버스 내용 -->
        </div>
      </div>
      <div class="offcanvas-overlay" @click="closeOffcanvas"></div>
    </div>
    <!-- 리스트 상세 내용 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOffcanvasOpen: false,
      isAccodianOpen: false,
    };
  },
  mounted() {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/swiper@10.2.0/swiper-bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const swiper = new Swiper(".todayCatch", {
        spaceBetween: 20,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      }).mount();
      //
    };
  },
  methods: {
    toggleOffcanvas() {
      this.isOffcanvasOpen = !this.isOffcanvasOpen;
    },
    closeOffcanvas() {
      this.isOffcanvasOpen = false;
    },
    toggleAccodian() {
      this.isAccodianOpen = !this.isAccodianOpen;
    }
  },
};
</script>

<style scoped>
@import "~/assets/css/quickCatch.css";
@import "~/assets/css/offcanvas.css";
</style>

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

        <div class="swiper-slide issueCard bnr">
          <a href="#">
            <img src="~/assets/img/quickIsuue.png" alt="한발빠른이슈" />
          </a>
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
              <span> 서비스 가입 후 <br />확인 가능합니다. </span>
              <button @click="openModal('catchJoin')">AI캐치 가입하기</button>
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
              <span> 서비스 가입 후 <br />확인 가능합니다. </span>
              <button @click="openModal('catchJoin')">AI캐치 가입하기</button>
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
                      <div
                        :class="{ infoActive: isAccodianOpen }"
                        class="info_txt"
                      >
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

    <Modal
      class="aiCatchsv"
      :modal-id="'catchJoin'"
      :show-modal="modals.catchJoin"
      :close-modal="() => closeModal('catchJoin')"
    >
      <template #body>
        <div class="top">
          <div class="txt">
            <em>이슈캐치</em>와 <br />
            <em>신호캐치</em>를 <span>한번에!!</span>
          </div>
          <!-- txt -->

          <div class="price">
            <div>
              <span>단건결제 : 198,000원/월</span>
              <span>정기결제 : <em>50%할인</em></span>
            </div>
            <!--  -->
            <div>
              <span> <em>99,000</em>원/월 </span>
            </div>
            <!--  -->
          </div>
          <!-- price -->

          <span class="bullet">AI캐치 서비스</span>
          <!-- bullet -->

          <button @click="closeModal('catchJoin')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <!-- button -->
        </div>
        <!--  -->

        <div ref="contRef" class="cont" @scroll="handleScroll">
          <div class="issue">
            <strong
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9V7ZM16 9C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7V9ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13V11ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11V13ZM21.782 15.908L22.673 16.362L22.673 16.362L21.782 15.908ZM20.908 16.782L21.362 17.673L20.908 16.782ZM20.908 3.21799L21.362 2.32698V2.32698L20.908 3.21799ZM21.782 4.09202L22.673 3.63803V3.63803L21.782 4.09202ZM3.09202 3.21799L3.54601 4.10899H3.54601L3.09202 3.21799ZM2.21799 4.09202L3.10899 4.54601V4.54601L2.21799 4.09202ZM3.20734 20.3861L3.78426 21.2029L3.78437 21.2028L3.20734 20.3861ZM7.16989 17.5865L6.59287 16.7698L6.59286 16.7698L7.16989 17.5865ZM2.09027 20.4776L2.90973 19.9044L2.90973 19.9044L2.09027 20.4776ZM3.10335 20.4483L2.65661 19.5536L2.6566 19.5537L3.10335 20.4483ZM2.42692 20.6856L2.28076 21.6749H2.28076L2.42692 20.6856ZM3.16983 20.412L2.63068 19.5697L2.63054 19.5698L3.16983 20.412ZM3.14376 20.4276L2.65674 19.5542L2.65668 19.5542L3.14376 20.4276ZM8.26828 17.034L8.45176 18.017L8.45176 18.017L8.26828 17.034ZM7.80048 17.1825L8.21786 18.0913L8.21786 18.0913L7.80048 17.1825ZM8 9H16V7H8V9ZM8 13H12V11H8V13ZM5.2 4H18.8V2H5.2V4ZM21 6.2V13.8H23V6.2H21ZM21 13.8C21 14.3766 20.9992 14.7488 20.9761 15.0322C20.9539 15.3038 20.9162 15.4045 20.891 15.454L22.673 16.362C22.8658 15.9836 22.9371 15.5904 22.9694 15.195C23.0008 14.8114 23 14.3436 23 13.8H21ZM18.8 18C19.3436 18 19.8114 18.0008 20.195 17.9694C20.5904 17.9371 20.9836 17.8658 21.362 17.673L20.454 15.891C20.4045 15.9162 20.3038 15.9539 20.0322 15.9761C19.7488 15.9992 19.3766 16 18.8 16V18ZM20.891 15.454C20.7951 15.6422 20.6422 15.7951 20.454 15.891L21.362 17.673C21.9265 17.3854 22.3854 16.9265 22.673 16.362L20.891 15.454ZM18.8 4C19.3766 4 19.7488 4.00078 20.0322 4.02393C20.3038 4.04612 20.4045 4.0838 20.454 4.10899L21.362 2.32698C20.9836 2.13419 20.5904 2.06287 20.195 2.03057C19.8114 1.99922 19.3436 2 18.8 2V4ZM23 6.2C23 5.65645 23.0008 5.18864 22.9694 4.80497C22.9371 4.40963 22.8658 4.01641 22.673 3.63803L20.891 4.54601C20.9162 4.59545 20.9539 4.69617 20.9761 4.96784C20.9992 5.25117 21 5.62345 21 6.2H23ZM20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601L22.673 3.63803C22.3854 3.07354 21.9265 2.6146 21.362 2.32698L20.454 4.10899ZM5.2 2C4.65645 2 4.18864 1.99922 3.80497 2.03057C3.40963 2.06287 3.01641 2.13419 2.63803 2.32698L3.54601 4.10899C3.59545 4.0838 3.69617 4.04612 3.96784 4.02393C4.25117 4.00078 4.62345 4 5.2 4V2ZM3 6.2C3 5.62345 3.00078 5.25117 3.02393 4.96784C3.04612 4.69617 3.0838 4.59545 3.10899 4.54601L1.32698 3.63803C1.13419 4.01641 1.06287 4.40963 1.03057 4.80497C0.999222 5.18864 1 5.65645 1 6.2H3ZM2.63803 2.32698C2.07354 2.6146 1.6146 3.07354 1.32698 3.63803L3.10899 4.54601C3.20487 4.35785 3.35785 4.20487 3.54601 4.10899L2.63803 2.32698ZM18.8 16H9.01639V18H18.8V16ZM3.78437 21.2028L7.74692 18.4032L6.59286 16.7698L2.63031 19.5694L3.78437 21.2028ZM1 19.7056C1 19.9004 0.999003 20.1154 1.01545 20.295C1.03176 20.4733 1.0748 20.7704 1.27082 21.0507L2.90973 19.9044C2.96386 19.9818 2.98927 20.0514 3.00042 20.0909C3.01028 20.1258 3.00955 20.1393 3.00712 20.1127C3.00477 20.0871 3.00251 20.0443 3.00126 19.9717C3.00003 19.8997 3 19.8153 3 19.7056H1ZM2.6566 19.5537C2.56941 19.5972 2.50231 19.6304 2.44576 19.657C2.38865 19.6839 2.35586 19.6977 2.33782 19.7045C2.31922 19.7115 2.33421 19.7042 2.37166 19.6975C2.41332 19.6902 2.48435 19.6832 2.57308 19.6964L2.28076 21.6749C2.60412 21.7226 2.87711 21.6385 3.04307 21.576C3.20801 21.5138 3.38921 21.4233 3.55009 21.343L2.6566 19.5537ZM1.27082 21.0507C1.50729 21.3888 1.8726 21.6146 2.28076 21.6749L2.57308 19.6964C2.70913 19.7165 2.8309 19.7917 2.90973 19.9044L1.27082 21.0507ZM3 19.7056V6.2H1V19.7056H3ZM2.63042 19.5693C2.62554 19.5727 2.62228 19.575 2.61951 19.577C2.61821 19.5779 2.61728 19.5786 2.6166 19.579C2.61593 19.5795 2.61564 19.5797 2.61565 19.5797C2.61584 19.5796 2.62182 19.5754 2.63068 19.5697L3.70899 21.2542C3.74215 21.2329 3.77291 21.2109 3.78426 21.2029L2.63042 19.5693ZM3.55008 21.343C3.56287 21.3366 3.59646 21.3201 3.63084 21.3009L2.65668 19.5542C2.66568 19.5492 2.6721 19.5459 2.6725 19.5457C2.67253 19.5457 2.67224 19.5458 2.67153 19.5462C2.67082 19.5465 2.66983 19.547 2.66844 19.5477C2.66547 19.5492 2.66191 19.551 2.65661 19.5536L3.55008 21.343ZM2.63054 19.5698C2.63917 19.5643 2.64785 19.5591 2.65674 19.5542L3.63077 21.301C3.6573 21.2862 3.68349 21.2705 3.70913 21.2541L2.63054 19.5698ZM9.01639 16C8.67508 16 8.37861 15.9961 8.0848 16.0509L8.45176 18.017C8.52177 18.0039 8.60276 18 9.01639 18V16ZM7.74692 18.4032C8.08474 18.1645 8.15314 18.121 8.21786 18.0913L7.38311 16.2738C7.1115 16.3985 6.87161 16.5728 6.59287 16.7698L7.74692 18.4032ZM8.0848 16.0509C7.84264 16.0961 7.60696 16.171 7.3831 16.2738L8.21786 18.0913C8.29248 18.057 8.37104 18.032 8.45176 18.017L8.0848 16.0509Z"
                  fill="#5368FF"
                /></svg
              >이슈캐치</strong
            >

            <div class="list">
              <span> 개장전 이슈와 주도주 알림! <em>(매일8:50)</em> </span>
              <span>장중 실시간 이슈& 주도주 확인!</span>
              <span>
                퇴근길 한발빠른 종목 추천! <br />
                <em>(매일 최대5종목)</em>
              </span>
            </div>
            <!--  -->
          </div>
          <!-- 이슈 -->

          <div class="signal">
            <strong
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.00001 19.6458C9.73295 20.4762 10.8053 21 12 21C13.1947 21 14.2671 20.4762 15 19.6458M16 2C18.387 3.18623 20.1726 5.40103 20.777 8.06448M7.77698 2C5.39 3.18623 3.60437 5.40103 3 8.06448M17.9974 13.1809V10.0001C17.9974 6.67781 15.3223 4.00009 12 4.00009C8.67772 4.00009 5.96637 6.56365 5.96637 10.0001V13.1594C5.96637 13.6425 5.89106 14.1225 5.74335 14.5809L5.00488 16.8724C4.98466 16.9352 5.02982 17 5.09376 17H18.8632C18.9308 17 18.9788 16.9341 18.958 16.8697L18.2146 14.5627C18.0707 14.1162 17.9974 13.65 17.9974 13.1809Z"
                  stroke="#8B68EF"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              신호캐치</strong
            >

            <div class="list">
              <span>전종목 매매신호 조회!</span>
              <span>실시간 매매타이밍 알림! <em>(최대50종목)</em></span>
              <span>잘 팔아야 수익, 진짜 매도 잘 하는 AI!</span>
            </div>
          </div>
          <!-- 시그널 -->

          <div class="txt">
            <strong>AI캐치 서비스 한줄 안내</strong>

            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="22"
                  viewBox="0 0 13 22"
                  fill="none"
                >
                  <g clip-path="url(#clip0_297_6412)">
                    <path
                      d="M10.7785 7.66663L4.66743 13.7777L1.88965 11"
                      stroke="#666666"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_297_6412">
                      <rect width="13" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                이슈캐치: 하루2번 알림제공
              </span>
              <em>08:50 개장전 이슈 주도주 알림</em>
              <em>11:50 장중 실시간 이슈 & 주도주 알림</em>
            </div>

            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="22"
                  viewBox="0 0 13 22"
                  fill="none"
                >
                  <g clip-path="url(#clip0_297_6412)">
                    <path
                      d="M10.7785 7.66663L4.66743 13.7777L1.88965 11"
                      stroke="#666666"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_297_6412">
                      <rect width="13" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                이슈캐치: 한발빠른이슈 종목 추천
              </span>
              <em>18:00 퇴근길 한발빠른 종목 추천 </em>
              <em>18:10 시간외특징주알림 </em>
              <em>장 중 추천종목 대응전략알림 </em>
            </div>

            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="22"
                  viewBox="0 0 13 22"
                  fill="none"
                >
                  <g clip-path="url(#clip0_297_6412)">
                    <path
                      d="M10.7785 7.66663L4.66743 13.7777L1.88965 11"
                      stroke="#666666"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_297_6412">
                      <rect width="13" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                신호캐치:전 종목 조회& 최대50종목 알림제공
              </span>
              <em>장 중 실시간 매매 타이밍 알림</em>
            </div>
          </div>
          <!-- 한줄안내 -->
        </div>
        <!--  -->
      </template>
      <template #footer>
        <!-- 푸터 내용 -->
        <button type="button">AI포착 가입하기</button>
      </template>
    </Modal>
    <!-- modal -->
  </div>
</template>

<script>
import Modal from "~/components/ModalWrap";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      modals: {
        catchJoin: false,
      },
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
    },
    openModal(modalId) {
      this.$set(this.modals, modalId, true);
    },
    closeModal(modalId) {
      this.$set(this.modals, modalId, false);
    },
    handleScroll() {
      // Get the reference to the container element
      const contElement = this.$refs.contRef;

      // Get all the .list spans
      const listSpans = contElement.querySelectorAll('.list span');

      // Loop through each span and check if it is in the viewport
      listSpans.forEach((span) => {
        const rect = span.getBoundingClientRect();
        if (rect.top <= contElement.clientHeight + 100) {
          // Add the 'on' class if the span is in the viewport
          span.classList.add('on');
        } 
      });
    },
  },
};
</script>

<style scoped>
@import "~/assets/css/quickCatch.css";
@import "~/assets/css/offcanvas.css";
@import "~/assets/css/modal.css";
</style>

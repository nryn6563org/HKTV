<template>
  <section class="content_two">
    <SchBox class="search-top"></SchBox>
    <!-- 상단검색 -->

    <div class="item_info_catch">
      <div class="item_info">
        <div class="top">
          <div class="item">
            <span>삼성전자</span>
          </div>
          <!-- 종목명 -->

          <div class="info">
            <span>001500</span>
            <span>코스피</span>
            <span>증권</span>
          </div>
          <!-- 종목정보 -->
        </div>

        <div class="price">
          <strong>1,201,000</strong>
          <span>0.48%</span>
        </div>
      </div>
      <!-- 종목정보 -->

      <div class="item_card">
        <ItemCard></ItemCard>
      </div>
      <!-- 특이사항&장마감요약 -->
    </div>
    <!-- 종목특이사항캐치 -->

    <div class="signal_alarm_banner">
      <div class="banner">
        <div class="visual">
          <strong>내 종목 언제 매도해야 하나요?</strong>
          <span>
            <em>검증된 AI</em>가 <br />
            <em>정확한 매매타점</em>에 <br />
            <em>앱알림</em>을 보내드립니다.
          </span>
        </div>
        <!-- visual -->

        <div class="list">
          <SignalList></SignalList>
        </div>
        <!-- SignalList -->
      </div>
    </div>
    <!-- 신호알림배너 -->

    <div class="signal_catch_w">
      <div class="top">
        <div class="title">
          <strong>신호캐치</strong>

          <div class="btn">
            <SettingAlarm></SettingAlarm>
            <button
              :class="{ alarm: true, active: alarmOn }"
              @click="toggleAlarm"
            >
              <svg
                v-if="alarmOn"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.9996 17V18C14.9996 19.6569 13.6564 21 11.9996 21C10.3427 21 8.99958 19.6569 8.99958 18V17M14.9996 17H8.99958M14.9996 17H18.5901C18.9726 17 19.1648 17 19.3197 16.9478C19.6155 16.848 19.847 16.6156 19.9468 16.3198C19.9993 16.1643 19.9993 15.9715 19.9993 15.5859C19.9993 15.4172 19.9991 15.3329 19.9859 15.2524C19.961 15.1004 19.902 14.9563 19.8121 14.8312C19.7647 14.7651 19.7043 14.7048 19.5854 14.5858L19.1959 14.1963C19.0702 14.0706 18.9996 13.9001 18.9996 13.7224V10C18.9996 6.134 15.8656 2.99999 11.9996 3C8.13359 3.00001 4.99958 6.13401 4.99958 10V13.7224C4.99958 13.9002 4.92882 14.0706 4.80314 14.1963L4.41364 14.5858C4.29435 14.7051 4.23462 14.765 4.18708 14.8312C4.09723 14.9564 4.03772 15.1004 4.01278 15.2524C3.99958 15.3329 3.99958 15.4172 3.99958 15.586C3.99958 15.9715 3.99958 16.1642 4.05203 16.3197C4.15183 16.6156 4.38437 16.848 4.68024 16.9478C4.83514 17 5.02659 17 5.40913 17H8.99958M17.4996 2.01367C17.4996 2.01367 19.9653 4.43177 20.6534 6.01574M6.49951 2.01367C5.1203 3.05299 4.03374 4.43177 3.34567 6.01574"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                class="off"
              >
                <path
                  d="M19 13V13.7224C19 13.9001 19.0706 14.0706 19.1963 14.1963L19.5858 14.5858C19.7047 14.7048 19.7651 14.7651 19.8126 14.8312C19.9024 14.9563 19.9614 15.1004 19.9863 15.2524C19.9995 15.3329 19.9997 15.4172 19.9997 15.5859C19.9997 15.9715 19.9997 16.1643 19.9473 16.3198C19.8475 16.6156 19.616 16.848 19.3201 16.9478C19.1652 17 18.973 17 18.5905 17H15M12 3C8.13401 3.00001 5 6.13401 5 10V13.7224C5 13.9002 4.92924 14.0706 4.80357 14.1963L4.41406 14.5858C4.29477 14.7051 4.23504 14.765 4.1875 14.8312C4.09766 14.9564 4.03815 15.1004 4.0132 15.2524C4 15.3329 4 15.4172 4 15.586C4 15.9715 4 16.1642 4.05245 16.3197C4.15225 16.6156 4.3848 16.848 4.68066 16.9478C4.83556 17 5.02701 17 5.40956 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                  stroke="#999999"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  x1="17.75"
                  y1="2.75"
                  x2="17.75"
                  y2="9.25"
                  stroke="#999999"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <line
                  x1="14.75"
                  y1="6.25"
                  x2="21.25"
                  y2="6.25"
                  stroke="#999999"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>

            <button
              :class="{ alarm: true, active: alarmOn }"
              @click="openModal('alarm')"
            >
              <svg
                v-if="alarmOn"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.9996 17V18C14.9996 19.6569 13.6564 21 11.9996 21C10.3427 21 8.99958 19.6569 8.99958 18V17M14.9996 17H8.99958M14.9996 17H18.5901C18.9726 17 19.1648 17 19.3197 16.9478C19.6155 16.848 19.847 16.6156 19.9468 16.3198C19.9993 16.1643 19.9993 15.9715 19.9993 15.5859C19.9993 15.4172 19.9991 15.3329 19.9859 15.2524C19.961 15.1004 19.902 14.9563 19.8121 14.8312C19.7647 14.7651 19.7043 14.7048 19.5854 14.5858L19.1959 14.1963C19.0702 14.0706 18.9996 13.9001 18.9996 13.7224V10C18.9996 6.134 15.8656 2.99999 11.9996 3C8.13359 3.00001 4.99958 6.13401 4.99958 10V13.7224C4.99958 13.9002 4.92882 14.0706 4.80314 14.1963L4.41364 14.5858C4.29435 14.7051 4.23462 14.765 4.18708 14.8312C4.09723 14.9564 4.03772 15.1004 4.01278 15.2524C3.99958 15.3329 3.99958 15.4172 3.99958 15.586C3.99958 15.9715 3.99958 16.1642 4.05203 16.3197C4.15183 16.6156 4.38437 16.848 4.68024 16.9478C4.83514 17 5.02659 17 5.40913 17H8.99958M17.4996 2.01367C17.4996 2.01367 19.9653 4.43177 20.6534 6.01574M6.49951 2.01367C5.1203 3.05299 4.03374 4.43177 3.34567 6.01574"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                class="off"
              >
                <path
                  d="M19 13V13.7224C19 13.9001 19.0706 14.0706 19.1963 14.1963L19.5858 14.5858C19.7047 14.7048 19.7651 14.7651 19.8126 14.8312C19.9024 14.9563 19.9614 15.1004 19.9863 15.2524C19.9995 15.3329 19.9997 15.4172 19.9997 15.5859C19.9997 15.9715 19.9997 16.1643 19.9473 16.3198C19.8475 16.6156 19.616 16.848 19.3201 16.9478C19.1652 17 18.973 17 18.5905 17H15M12 3C8.13401 3.00001 5 6.13401 5 10V13.7224C5 13.9002 4.92924 14.0706 4.80357 14.1963L4.41406 14.5858C4.29477 14.7051 4.23504 14.765 4.1875 14.8312C4.09766 14.9564 4.03815 15.1004 4.0132 15.2524C4 15.3329 4 15.4172 4 15.586C4 15.9715 4 16.1642 4.05245 16.3197C4.15225 16.6156 4.3848 16.848 4.68066 16.9478C4.83556 17 5.02701 17 5.40956 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                  stroke="#999999"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  x1="17.75"
                  y1="2.75"
                  x2="17.75"
                  y2="9.25"
                  stroke="#999999"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <line
                  x1="14.75"
                  y1="6.25"
                  x2="21.25"
                  y2="6.25"
                  stroke="#999999"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>

          <div v-if="popoverType === 'register'" class="alarm_popOver">
            <span>알림종목에 <em>등록</em> 되었습니다.</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
            >
              <path d="M6 0L11.1962 8.25L0.803847 8.25L6 0Z" fill="#5368FF" />
            </svg>
          </div>
          <!-- 팝오버 -->
          <div v-if="popoverType === 'delete'" class="alarm_popOver">
            <span>알림종목에 <em>삭제</em> 되었습니다.</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
            >
              <path d="M6 0L11.1962 8.25L0.803847 8.25L6 0Z" fill="#5368FF" />
            </svg>
          </div>
          <!-- 팝오버 -->

          <!-- 모달 컴포넌트 사용 -->
          <Modal
            id="alarm_modal"
            :modal-id="'alarm'"
            :show-modal="modals.alarm"
            :close-modal="() => closeModal('alarm')"
          >
            <template #header>
              <button
                type="button"
                class="modal-close"
                @click="closeModal('alarm')"
              >
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
            </template>
            <template #body>
              <!-- 바디 내용 -->

              <div class="txt">
                <span>
                  알림받기는 최대 50개까지 <br>
                  등록가능합니다. 
                </span>
                <em>알림설정에서 종목 삭제 후 등록해주세요.</em>
              </div>
            </template>
            <template #footer>
              <!-- 푸터 내용 -->
              <button type="button" @click="closeModal('alarm')">확인</button>
            </template>
          </Modal>
          <!-- modal -->
        </div>
        <!-- 상단 타이틀 -->

        <div class="card">
          <div class="signal sig01">
            <span>오늘<br />매수</span>
          </div>
          <!-- <div class="signal sig02">
            <span>오늘<br />매도</span>
          </div>
          <div class="signal sig03">
            <span>관망중</span>
          </div>
          <div class="signal sig04">
            <span>보유중</span>
          </div>
          <div class="signal sig05">
            <span>신호<br />캐치</span>
          </div> -->

          <!-- 신호 01~05 -->

          <div class="signal-info">
            <!-- <div>
              <span>수익률 :</span>
              <em class="up">+23.3%</em>
            </div>
            <div>
              <span>매수가 :</span>
              <em>443,000원</em>
            </div>
            <div>
              <span>신호발생일 :</span>
              <em>2023.11.03</em>
            </div> -->
            <div class="txt">
              아직 발생된<br />
              매매신호가 없습니다.
            </div>
          </div>
          <!-- 신호 내용 퍼센트(색상) 나머지(흰색) -->
        </div>
        <!-- 신호카드 -->
      </div>
      <!-- 상단 -->

      <CatchTab></CatchTab>
      <!-- 최근3&12개월 -->
    </div>
    <!-- 신호캐치 -->

    <SchBox></SchBox>
    <!-- 검색 -->

    <div class="ainews">
      <strong>AI속보</strong>

      <div class="list">
        <div class="n_news">
          <div class="obj">
            <em class="bullet_ai"
              ><img src="~/assets/img/bullet_ai.png" alt="ai" class="w-full"
            /></em>
            <span class="con"
              >특징주, 삼성전자-HBM(고대역폭메모리) 테마 상승세에 0.83% ↑</span
            >
          </div>
          <!-- 속보내용 -->

          <div class="info">
            <span>09:58</span>
            <span>라씨로</span>
          </div>
          <!-- 속보정보 -->
        </div>

        <div>
          <div class="obj">
            <em class="bullet_ai"
              ><img src="~/assets/img/bullet_ai.png" alt="ai" class="w-full"
            /></em>
            <span class="con"
              >특징주, 삼성전자-HBM(고대역폭메모리) 테마 상승세에 0.83% ↑</span
            >
          </div>
          <!-- 속보내용 -->

          <div class="info">
            <span>09:58</span>
            <span>라씨로</span>
          </div>
          <!-- 속보정보 -->
        </div>

        <div class="n_news">
          <div class="obj">
            <span class="con"
              >특징주, 삼성전자-HBM(고대역폭메모리) 테마 상승세에 0.83% ↑</span
            >
            <em class="bullet_new">NEW</em>
          </div>
          <!-- 속보내용 -->

          <div class="info">
            <span>09:58</span>
            <span>라씨로</span>
          </div>
          <!-- 속보정보 -->
        </div>

        <div class="n_news">
          <div class="obj">
            <span class="con"
              >특징주, 삼성전자-HBM(고대역폭메모리) 테마 상승세에 0.83% ↑</span
            >
            <em class="bullet_new">NEW</em>
          </div>
          <!-- 속보내용 -->

          <div class="info">
            <span>09:58</span>
            <span>라씨로</span>
          </div>
          <!-- 속보정보 -->
        </div>

        <div>
          <div class="obj">
            <em class="bullet_ai"
              ><img src="~/assets/img/bullet_ai.png" alt="ai"
            /></em>
            <span class="con"
              >특징주, 삼성전자-HBM(고대역폭메모리) 테마 상승세에 0.83% ↑</span
            >
          </div>
          <!-- 속보내용 -->

          <div class="info">
            <span>09:58</span>
            <span>라씨로</span>
          </div>
          <!-- 속보정보 -->
        </div>
      </div>
      <!-- 속보리스트 -->
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
    <!-- ai속보 -->
  </section>
</template>

<script>
import ItemCard from "~/components/SignalCatch/ItemCard";
import SignalList from "~/components/SignalCatch/SignalList";
import CatchTab from "~/components/SignalCatch/CatchTab";
import Modal from "~/components/ModalWrap";
import SchBox from "~/components/SignalCatch/SearchWrap";
import SettingAlarm from "~/components/SignalCatch/SettingAlarm";

export default {
  components: {
    ItemCard,
    SignalList,
    CatchTab,
    Modal,
    SchBox,
    SettingAlarm,
  },
  data() {
    return {
      alarmOn: false,
      popoverType: null,
      showModal: false,
      modals: {
        alarm: false,
      },
    };
  },
  methods: {
    toggleAlarm() {
      this.alarmOn = !this.alarmOn;
      // 여기에 필요한 추가 로직을 추가할 수 있습니다.
      if (this.alarmOn) {
        this.showPopover("register");
        setTimeout(() => {
          this.hidePopover();
        }, 5000);
      } else {
        this.showPopover("delete");
        setTimeout(() => {
          this.hidePopover();
        }, 5000);
      }
    },

    togglePopover(type) {
      this.popoverType = this.popoverType === type ? null : type;
      if (this.popoverType) {
        setTimeout(() => {
          this.hidePopover();
        }, 5000);
      }
    },

    showPopover(type) {
      this.popoverType = type;
    },

    hidePopover() {
      this.popoverType = null;
    },

    openModal(modalId) {
      this.$set(this.modals, modalId, true);
    },
    closeModal(modalId) {
      this.$set(this.modals, modalId, false);
    },
  },
};
</script>

<style scoped>
@import "~/assets/css/signal.css";
@import "~/assets/css/modal.css";
</style>

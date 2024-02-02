<template>
  <div class="search">
    <button @click="openModal('itemSearch')">
      <span>내가 원하는 종목, 신호캐치를 검색해보세요</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_277_467)">
          <path
            d="M22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L22.2929 23.7071ZM18.1176 10.0588C18.1176 14.5096 14.5096 18.1176 10.0588 18.1176V20.1176C15.6142 20.1176 20.1176 15.6142 20.1176 10.0588H18.1176ZM10.0588 18.1176C5.60806 18.1176 2 14.5096 2 10.0588H0C0 15.6142 4.50349 20.1176 10.0588 20.1176V18.1176ZM2 10.0588C2 5.60806 5.60806 2 10.0588 2V0C4.50349 0 0 4.50349 0 10.0588H2ZM10.0588 2C14.5096 2 18.1176 5.60806 18.1176 10.0588H20.1176C20.1176 4.50349 15.6142 0 10.0588 0V2ZM15.8223 17.2365L22.2929 23.7071L23.7071 22.2929L17.2365 15.8223L15.8223 17.2365Z"
            fill="#5368FF"
          />
        </g>
        <defs>
          <clipPath id="clip0_277_467">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>

    <Modal
      class="item-sch"
      :modal-id="'itemSearch'"
      :show-modal="modals.itemSearch"
      :close-modal="() => closeModal('itemSearch')"
    >
      <template #header>
        <strong>종목검색</strong>
        <button
          type="button"
          class="modal-close"
          @click="closeModal('itemSearch')"
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
        <div class="sch-modal-wrap">
          <div class="sch-bar">
            <input type="text" placeholder="종목명/종목코드" />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_280_4371)">
                  <path
                    d="M22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L22.2929 23.7071ZM18.1176 10.0588C18.1176 14.5096 14.5096 18.1176 10.0588 18.1176V20.1176C15.6142 20.1176 20.1176 15.6142 20.1176 10.0588H18.1176ZM10.0588 18.1176C5.60806 18.1176 2 14.5096 2 10.0588H0C0 15.6142 4.50349 20.1176 10.0588 20.1176V18.1176ZM2 10.0588C2 5.60806 5.60806 2 10.0588 2V0C4.50349 0 0 4.50349 0 10.0588H2ZM10.0588 2C14.5096 2 18.1176 5.60806 18.1176 10.0588H20.1176C20.1176 4.50349 15.6142 0 10.0588 0V2ZM15.8223 17.2365L22.2929 23.7071L23.7071 22.2929L17.2365 15.8223L15.8223 17.2365Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_280_4371">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <!-- 검색바 -->

          <div class="sch-latest">
            <strong> 최근검색어 </strong>

            <div class="list">
              <div class="item">
                <div><a href="#"><span>삼성전자</span><em>(000000)</em></a></div>
                <div><a href="#"><span>삼성전자</span><em>(000000)</em></a></div>
                <div><a href="#"><span>삼성전자</span><em>(000000)</em></a></div>
                <div><a href="#"><span>삼성전자</span><em>(000000)</em></a></div>
                <div><a href="#"><span>삼성전자</span><em>(000000)</em></a></div>
              </div>
              <!-- 종목 -->

              <div class="item">
                <div><a href="#"><span>#삼성전자</span></a></div>
                <div><a href="#"><span>#삼성전자</span></a></div>
                <div><a href="#"><span>#삼성전자</span></a></div>
              </div>
              <!-- 태그 -->

              <div class="empty">
                <span><em>'어이없음'</em> 종목이 검색되지 않았습니다.</span>
              </div>
              <!-- 검색없음 -->
            </div>
          </div>
          <!-- 종목검색 -->
        </div>
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
      showModal: false,
      modals: {
        alarm: false,
      },
    };
  },
  methods: {
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
@import "~/assets/css/modal.css";
</style>

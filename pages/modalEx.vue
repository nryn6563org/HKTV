<template>
  <div>
    <!-- 페이지 내용 -->
    <button @click="openModal('alarm')">모달 열기</button>

    <Modal
      id="alarm_modal"
      :modal-id="'alarm'"
      :show-modal="modals.alarm"
      :close-modal="() => closeModal('alarm')"
    >
      <template #header>
        <button type="button" class="modal-close" @click="closeModal('alarm')">
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
            알림받기는 최대 50개까지 <br />
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
<style>
@import "~/assets/css/modal.css";
</style>

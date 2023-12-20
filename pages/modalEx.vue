<template>
  <div>
    <!-- 페이지 내용 -->
    <button @click="openModal">모달 열기</button>

    <!-- 모달 컴포넌트 사용 -->
    <Modal :show-modal="showModal" :close-modal="closeModal">
      <template #header>
        <!-- 헤더 내용 -->
        <h2>모달 헤더</h2>
        <button type="button" class="modal-close" @click="closeModal">&times;</button>
      </template>
      <template #body>
        <!-- 바디 내용 -->
        <p>모달 본문</p>
      </template>
      <template #footer>
        <!-- 푸터 내용 -->
        <button>확인</button>
        <button type="button" @click="closeModal">취소</button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '~/components/ModalWrap';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>
<style>
@import "~/assets/css/modal.css";
</style>
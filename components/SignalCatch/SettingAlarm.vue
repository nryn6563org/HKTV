<template>
  <div class="stgbtn">
    <button class="setting" @click="openModal('settingAlarm')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M16.9583 7.43577L16.6531 7.266C16.6057 7.23964 16.5824 7.22641 16.5595 7.2127C16.332 7.07638 16.1401 6.88803 16.0002 6.66269C15.9861 6.64002 15.9728 6.61624 15.9457 6.56925C15.9186 6.52231 15.9048 6.49853 15.8922 6.47499C15.7666 6.24055 15.6987 5.97929 15.6947 5.71338C15.6943 5.68665 15.6943 5.65934 15.6953 5.60504L15.7012 5.25065C15.7108 4.68355 15.7156 4.39911 15.6359 4.14385C15.5651 3.91711 15.4466 3.70827 15.2885 3.53104C15.1097 3.33071 14.8623 3.18779 14.3669 2.9023L13.9554 2.66517C13.4613 2.38048 13.2142 2.23809 12.9519 2.18381C12.7199 2.13578 12.4804 2.13801 12.2492 2.18991C11.9883 2.24849 11.7443 2.39459 11.2566 2.68663L11.2538 2.68796L10.9589 2.86451C10.9123 2.89242 10.8887 2.9065 10.8653 2.91949C10.6334 3.04842 10.3746 3.11971 10.1094 3.12822C10.0826 3.12908 10.0555 3.12908 10.0011 3.12908C9.94706 3.12908 9.91871 3.12908 9.89204 3.12822C9.62627 3.11968 9.36685 3.04799 9.13459 2.91853C9.11118 2.90548 9.08803 2.8913 9.04131 2.86325L8.74458 2.68511C8.25352 2.3903 8.00762 2.24268 7.74523 2.18381C7.51309 2.13172 7.27281 2.13028 7.03992 2.17892C6.77696 2.23385 6.5298 2.3773 6.03549 2.66419L6.03329 2.66517L5.6269 2.90103L5.6224 2.90378C5.13254 3.1881 4.88701 3.3306 4.70975 3.53012C4.55245 3.70717 4.43487 3.91568 4.3645 4.14181C4.28495 4.39743 4.28919 4.68247 4.29878 5.25225L4.30473 5.60613C4.30563 5.65972 4.3072 5.68635 4.30681 5.71271C4.30286 5.97916 4.23405 6.24095 4.10812 6.4758C4.09567 6.49902 4.08225 6.52225 4.05545 6.56864C4.02863 6.61507 4.01565 6.63816 4.00174 6.66056C3.86114 6.8871 3.66845 7.07655 3.43944 7.2131C3.41679 7.22661 3.39292 7.2396 3.34601 7.26559L3.04471 7.43257C2.5434 7.71037 2.29281 7.8494 2.11046 8.04725C1.94915 8.22227 1.82729 8.42987 1.75291 8.65597C1.66882 8.91156 1.66889 9.19815 1.6702 9.77129L1.67126 10.2397C1.67255 10.809 1.67433 11.0935 1.7586 11.3474C1.83316 11.5719 1.95412 11.7783 2.11453 11.9523C2.29585 12.1489 2.54395 12.2871 3.04145 12.5639L3.34007 12.73C3.39089 12.7582 3.41646 12.7722 3.44097 12.787C3.6679 12.9236 3.85908 13.1125 3.99848 13.3378C4.01354 13.3621 4.028 13.3874 4.05691 13.4379C4.08547 13.4878 4.10007 13.5127 4.11328 13.5377C4.23551 13.7691 4.30095 14.0262 4.30541 14.2879C4.30589 14.3162 4.30548 14.3448 4.30451 14.4022L4.29878 14.7418C4.28912 15.3136 4.28492 15.5998 4.36494 15.8561C4.43572 16.0828 4.55403 16.2916 4.71219 16.4689C4.89096 16.6692 5.13879 16.8121 5.63423 17.0975L6.04565 17.3346C6.53969 17.6193 6.78662 17.7615 7.04891 17.8158C7.28095 17.8638 7.52054 17.862 7.75174 17.8101C8.01305 17.7514 8.2579 17.6048 8.74702 17.3119L9.04187 17.1354C9.08852 17.1075 9.11214 17.0934 9.13551 17.0805C9.36741 16.9515 9.62603 16.8799 9.89123 16.8713C9.91795 16.8705 9.94514 16.8705 9.9995 16.8705C10.054 16.8705 10.0812 16.8705 10.1079 16.8714C10.3737 16.8799 10.6339 16.9518 10.8662 17.0813C10.8866 17.0927 10.9071 17.105 10.943 17.1266L11.2565 17.3147C11.7476 17.6096 11.993 17.7568 12.2554 17.8157C12.4875 17.8677 12.728 17.8699 12.9609 17.8212C13.2238 17.7663 13.4714 17.6226 13.9655 17.3358L14.378 17.0964C14.8682 16.8119 15.1139 16.6693 15.2913 16.4697C15.4486 16.2926 15.5663 16.0842 15.6367 15.8581C15.7156 15.6043 15.7109 15.3215 15.7014 14.7599L15.6953 14.3937C15.6944 14.3401 15.6943 14.3134 15.6946 14.2871C15.6986 14.0206 15.7663 13.7587 15.8922 13.5238C15.9046 13.5006 15.9182 13.4772 15.9449 13.431C15.9717 13.3845 15.9856 13.3614 15.9995 13.339C16.1401 13.1125 16.333 12.9228 16.562 12.7863C16.5843 12.7729 16.6074 12.7602 16.6532 12.7348L16.6547 12.7341L16.956 12.5671C17.4573 12.2893 17.7084 12.1501 17.8908 11.9523C18.0521 11.7773 18.1738 11.5699 18.2482 11.3438C18.3317 11.0898 18.3311 10.8048 18.3298 10.2384L18.3287 9.7599C18.3274 9.19059 18.3267 8.90616 18.2425 8.65231C18.1679 8.42773 18.0463 8.22134 17.8859 8.04737C17.7047 7.85092 17.4563 7.71271 16.9597 7.43648L16.9583 7.43577Z"
          stroke="#CACACA"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.66694 9.99997C6.66694 11.8409 8.15933 13.3333 10.0003 13.3333C11.8412 13.3333 13.3336 11.8409 13.3336 9.99997C13.3336 8.15902 11.8412 6.66664 10.0003 6.66664C8.15933 6.66664 6.66694 8.15902 6.66694 9.99997Z"
          stroke="#CACACA"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      설정
    </button>

    <Modal
      class="item-sch"
      :modal-id="'settingAlarm'"
      :show-modal="modals.settingAlarm"
      :close-modal="() => closeModal('settingAlarm')"
    >
      <template #header>
        <strong>알림설정</strong>
        <button
          type="button"
          class="modal-close"
          @click="closeModal('settingAlarm')"
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

          <div class="setting-list">
            <div class="btn-group">
              <button class="btn btn-primary">저장</button>
              <button class="btn btn-default">선택삭제</button>
            </div>
            <!-- button -->

            <div class="list">
              <div class="txt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M2.16699 8.50002C2.16699 5.00222 5.00252 2.16669 8.50032 2.16669C11.9981 2.16669 14.8337 5.00222 14.8337 8.50002C14.8337 11.9978 11.9981 14.8334 8.50032 14.8334C5.00252 14.8334 2.16699 11.9978 2.16699 8.50002Z"
                    stroke="#999999"
                    stroke-width="1.5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.5 12.3958C8.2066 12.3958 7.96875 12.158 7.96875 11.8646L7.96875 8.3229C7.96875 8.0295 8.2066 7.79165 8.5 7.79165C8.7934 7.79165 9.03125 8.0295 9.03125 8.3229L9.03125 11.8646C9.03125 12.158 8.7934 12.3958 8.5 12.3958Z"
                    fill="#999999"
                  />
                  <path
                    d="M8.5 5.1354C8.0599 5.1354 7.70312 5.49217 7.70312 5.93227C7.70312 6.37237 8.0599 6.72915 8.5 6.72915C8.9401 6.72915 9.29687 6.37237 9.29687 5.93227C9.29687 5.49217 8.9401 5.1354 8.5 5.1354Z"
                    fill="#999999"
                  />
                </svg>
                <span>등록 종목의 실시간 AI매매신호를 알려드립니다.</span>
              </div>
              <!-- txt -->

              <div class="item-group">
                <div class="item-header">
                  <div>
                    <span> 종목명 (<em>15</em>/50) </span>
                  </div>
                  <div>
                    <span>삭제</span>
                    <div class="chkbox">
                      <input id="allCheck" v-model="allChecked" @change="handleAllCheck" type="checkbox" name="" />
                      <label for="allCheck" :class="{ 'chkon': allChecked }">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          class="notChecked"
                        >
                          <rect
                            x="0.75"
                            y="0.75"
                            width="20.5"
                            height="20.5"
                            fill="white"
                            stroke="#DDDDDD"
                            stroke-width="1.5"
                          />
                          <path
                            d="M6 11L10 15L17 8"
                            stroke="#D8D8D8"
                            stroke-width="1.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          class="checked"
                        >
                          <rect width="22" height="22" fill="#3F54C3" />
                          <path
                            d="M6 11L10 15L17 8"
                            stroke="white"
                            stroke-width="1.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </label>
                    </div>
                  </div>
                </div>
                <!-- header -->

                <div class="item-body">
                  <div v-for="item in items" :key="item.id" class="item">
                    <div class="item-info">
                      <div class="obj">{{ item.name }}</div>
                      <div class="info">
                        <span>{{ item.price }}</span>
                        <span
                          v-if="item.change"
                          :class="{
                            up: item.change.includes('+'),
                            dn: item.change.includes('-'),
                          }"
                          >{{ item.change }}</span
                        >
                      </div>
                    </div>
                    <!--  -->
                    <div class="item-dlt">
                      <button
                        class="btn btn-sm btn-default"
                        @click="removeItem(item.id)"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M16.5 16.5L11 11M11 11L5.5 5.5M11 11L16.5 5.5M11 11L5.5 16.5"
                            stroke="#999999"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        삭제
                      </button>
                      <div class="chkbox">
                        <input
                          :id="'chk' + item.id"
                          v-model="item.checked" 
                          type="checkbox"
                          class="chk"
                          @change="handleItemCheck"
                        />
                        <label :for="'chk' + item.id" :class="{ 'chkon': item.checked }">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            class="notChecked"
                          >
                            <rect
                              x="0.75"
                              y="0.75"
                              width="20.5"
                              height="20.5"
                              fill="white"
                              stroke="#DDDDDD"
                              stroke-width="1.5"
                            />
                            <path
                              d="M6 11L10 15L17 8"
                              stroke="#D8D8D8"
                              stroke-width="1.75"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            class="checked"
                          >
                            <rect width="22" height="22" fill="#3F54C3" />
                            <path
                              d="M6 11L10 15L17 8"
                              stroke="white"
                              stroke-width="1.75"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </label>
                      </div>
                    </div>
                    <!--  -->
                  </div>
                  <!-- item -->
                </div>
                <!-- body -->
              </div>
              <!-- group  -->
            </div>
            <!-- list -->

            <div class="btn-group">
              <button class="btn btn-primary">저장</button>
              <button class="btn btn-default">선택삭제</button>
            </div>
            <!-- button -->
          </div>
          <!-- 설정리스트 -->
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
      showModal:false,
      modals: {
        settingAlarm: false,
        allChecked: false,
      },
      items: [
        {
          id: 1,
          name: "스튜디오산타",
          price: "331,000",
          change: "+0.6%",
          checked: false,
        },
        {
          id: 2,
          name: "스튜디오산타2",
          price: "331,000",
          change: "-0.6%",
          checked: false,
        },
        {
          id: 3,
          name: "스튜디오산타",
          price: "331,000",
          change: "+0.6%",
          checked: false,
        },
        {
          id: 4,
          name: "스튜디오산타2",
          price: "331,000",
          change: "-0.6%",
          checked: false,
        },
        {
          id: 5,
          name: "스튜디오산타",
          price: "331,000",
          change: "+0.6%",
          checked: false,
        },
        {
          id: 6,
          name: "스튜디오산타2",
          price: "331,000",
          change: "-0.6%",
          checked: false,
        },
        // Add more items as needed
      ],
    };
  },
  methods: {
    openModal(modalId) {
      this.$set(this.modals, modalId, true);
    },
    closeModal(modalId) {
      this.$set(this.modals, modalId, false);
    },
    handleAllCheck() {
      // allCheck 체크 상태에 따라 모든 항목의 체크 상태 업데이트
      this.items.forEach((item) => {
        item.checked = this.allChecked;
      });
    },
    handleItemCheck() {
      // 하나의 항목 체크 상태에 따라 allCheck 체크 상태 업데이트
      this.allChecked = this.items.every((item) => item.checked);
    },
  },
};
</script>

<style scoped>
@import "~/assets/css/modal.css";
@import "~/assets/css/btn.css";
</style>

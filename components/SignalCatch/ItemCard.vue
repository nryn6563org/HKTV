<template>
  <div class="card_w swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide card">
        <div>
          <strong>특이사항</strong>
          <!-- 특이사항 -->

          <div class="list">
            <div>
              <span class="time">00:00</span>
              <span class="con">
                모바일 게임 테마 평균 -3.2% 하락 모바일 게임 테마 평균 -3.2%
                하락
              </span>
            </div>
            <div>
              <span class="time">00:00</span>
              <span class="con"> 모바일 게임 테마 평균 -3.2% 하락 </span>
            </div>
            <div>
              <span class="time">00:00</span>
              <span class="con"> 모바일 게임 테마 평균 -3.2% 하락 </span>
            </div>
            <div>
              <span class="time">00:00</span>
              <span class="con"> 모바일 게임 테마 평균 -3.2% 하락 </span>
            </div>
            <div>
              <span class="time">00:00</span>
              <span class="con"> 모바일 게임 테마 평균 -3.2% 하락 </span>
            </div>
          </div>
          <!-- 리스트 -->

          <span class="date">09.22</span>
          <!-- 날짜 -->
        </div>
      </div>
      <!-- 카드 -->

      <div class="swiper-slide card">
        <div>
          <strong>장마감 요약</strong>
          <!-- 장마감 요약 -->

          <div class="list">
            <div>
              <span class="con"
                >한국경제TV - 미디어 테마 상승세에 12.46% 상승</span
              >
            </div>
            <div>
              <span class="con"
                >한국경제TV - 미디어 테마 상승세에 12.46% 상승</span
              >
            </div>
            <div>
              <span class="con"
                >한국경제TV - 미디어 테마 상승세에 12.46% 상승</span
              >
            </div>
            <div>
              <span class="con"
                >한국경제TV - 미디어 테마 상승세에 12.46% 상승</span
              >
            </div>
            <div>
              <span class="con"
                >한국경제TV - 미디어 테마 상승세에 12.46% 상승</span
              >
            </div>
          </div>
          <!-- 리스트 -->

          <span class="date">09.22</span>
          <!-- 날짜 -->
        </div>
        <!-- 카드 -->
      </div>
    </div>
    <!-- wrapper -->

    <div class="swiper-pagination"></div>
  </div>
  <!-- swiper -->
</template>
<script>
export default {
  mounted() {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/swiper@10.2.0/swiper-bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const swiper = new Swiper(".card_w", {
        spaceBetween: 20,
        slidesPerView: 1,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      }).mount();
      //
    };
  },
};
</script>

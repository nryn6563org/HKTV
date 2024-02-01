<template>
  <div class="swiper signalList">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <span class="date">11.22</span>
        <span class="obj">종목명종목명종목명종목명</span>
        <span class="per">+115.78% 달성</span>
      </div>
      <!--  -->

      <div class="swiper-slide">
        <span class="date">11.22</span>
        <span class="obj">종목명종목명종목명종목명</span>
        <span class="per">+115.78% 달성</span>
      </div>
      <!--  -->

      <div class="swiper-slide">
        <span class="date">11.22</span>
        <span class="obj">종목명종목명종목명종목명</span>
        <span class="per">+115.78% 달성</span>
      </div>
      <!--  -->

      <div class="swiper-slide">
        <span class="date">11.22</span>
        <span class="obj">종목명종목명종목명종목명</span>
        <span class="per">+115.78% 달성</span>
      </div>
      <!--  -->

      <div class="swiper-slide">
        <span class="date">11.22</span>
        <span class="obj">종목명종목명종목명종목명</span>
        <span class="per">+115.78% 달성</span>
      </div>
      <!--  -->

      <div class="swiper-slide">
        <span class="date">11.22</span>
        <span class="obj">종목명종목명종목명종목명</span>
        <span class="per">+115.78% 달성</span>
      </div>
      <!--  -->

      <div class="swiper-slide">
        <span class="date">11.22</span>
        <span class="obj">종목명종목명종목명종목명</span>
        <span class="per">+115.78% 달성</span>
      </div>
      <!--  -->

      <div class="swiper-slide">
        <span class="date">11.22</span>
        <span class="obj">종목명종목명종목명종목명</span>
        <span class="per">+115.78% 달성</span>
      </div>
      <!--  -->

      <div class="swiper-slide">
        <span class="date">11.22</span>
        <span class="obj">종목명종목명종목명종목명</span>
        <span class="per">+115.78% 달성</span>
      </div>
      <!--  -->

      <div class="swiper-slide">
        <span class="date">11.22</span>
        <span class="obj">종목명종목명종목명종목명</span>
        <span class="per">+115.78% 달성</span>
      </div>
      <!--  -->
    </div>
  </div>
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
      const swiper = new Swiper(".signalList", {
        direction: "vertical",
        loop: true,
        spaceBetween: 12,
        slidesPerView: 2,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: false,
      }).mount();
      //
    };
  },
};
</script>

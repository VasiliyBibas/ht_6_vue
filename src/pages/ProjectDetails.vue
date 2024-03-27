<template>
	<section class="top-blog banner-projectDetails">
	</section>
	<main class="details center">
		<div class="details__div">
			<h1 class="details__title">Minimal Look Bedrooms</h1>
			<p class="details__text">{{ text }}</p>
		</div>
	</main>
	<div class="div-swiper center">
		<swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :zoom="true"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img class="swiper-img" src="../../public/img/project10.jpg" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="../../public/img/project10.jpg" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="../../public/img/project10.jpg" />
      </div> </swiper-slide>
  </swiper>
	</div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/zoom';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  // import './style.css';

  // import required modules
  import { Zoom, Navigation, Pagination } from 'swiper/modules';

	export default {
		components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Zoom, Navigation, Pagination],
      };
    },
	}
</script>

<style lang="scss" scoped>

</style>
<template>
			<section class="container-top">
			<div class="top center">
				<div class="top__block">
					<div class="top__wrp-block">
						<h1 class="top__title">Let Your Home Be Unique</h1>
						<p class="top__text">There are many variations of the passages of
							lorem Ipsum fromavailable, majority.</p>
						<button class="top__btn">Get Started
							<svg class="top__svg" width="18" height="17" viewBox="0 0 18 17" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274"
									stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
		<main class="goods">
			<div class="goods__about center">
				<h2 class="goods__title">Follow Our Projects</h2>
				<p class="goods__text">It is a long established fact that a reader will be distracted by the of readable
					content of page lookings at its layouts points.</p>
			</div>
			<ul class="goods__list center">
				<li class="goods__item">
					<img src="img/Photo_1.jpg" alt="interior" class="goods__img goods__img_1">
					<div class="goods__wrp">
						<div class="goods__textwrp">
							<p class="goods__item-title">Modern Kitchan</p>
							<p class="goods__item-text">Decor / Artchitecture</p>
						</div>
						<a href="#" class="goods__btn"><span></span></a>
					</div>
				</li>
				<li class="goods__item">
					<img src="img/Photo_2.jpg" alt="interior" class="goods__img goods__img_2">
					<div class="goods__wrp">
						<div class="goods__textwrp">
							<p class="goods__item-title">Modern Kitchan</p>
							<p class="goods__item-text">Decor / Artchitecture</p>
						</div>
						<a href="#" class="goods__btn"><span></span></a>
					</div>
				</li>
				<li class="goods__item">
					<img src="img/Photo_3.jpg" alt="interior" class="goods__img goods__img_3">
					<div class="goods__wrp">
						<div class="goods__textwrp">
							<p class="goods__item-title">Modern Kitchan</p>
							<p class="goods__item-text">Decor / Artchitecture</p>
						</div>
						<a href="#" class="goods__btn"><span></span></a>
					</div>
				</li>
				<li class="goods__item">
					<img src="img/Photo_4.jpg" alt="interior" class="goods__img goods__img_4">
					<div class="goods__wrp">
						<div class="goods__textwrp">
							<p class="goods__item-title">Modern Kitchan</p>
							<p class="goods__item-text">Decor / Artchitecture</p>
						</div>
						<a href="#" class="goods__btn"><span></span></a>
					</div>
				</li>
			</ul>
		</main>
		<section class="container-promo">
			<div class="promo center">
				<ul class="promo__list">
					<li class="promo__item">
						<p class="promo__item-number">12</p>
						<p class="promo__item-text">Years Of Experiance</p>
					</li>
					<li class="promo__item">
						<p class="promo__item-number">85</p>
						<p class="promo__item-text">Success Project</p>
					</li>
					<li class="promo__item">
						<p class="promo__item-number">15</p>
						<p class="promo__item-text">Active Project</p>
					</li>
					<li class="promo__item">
						<p class="promo__item-number">95</p>
						<p class="promo__item-text">Happy CUstomers</p>
					</li>
				</ul>
			</div>
		</section>
		<section class="container-articles">
			<div id="app">
				<div class="articles center">
					<div class="articles__about">
						<h3 class="articles__title">Articles & News</h3>
						<p class="articles__text">It is a long established fact that a reader will be distracted by the of readable
							content of a page when lookings at its layouts the points of using.</p>
					</div>
					<div class="articles__block">
						<article v-for="item in newArticle.slice(0, 3)" :key="item.id" class="articles__item">
							<div class="articles__wrp-img">
								<img :src="item.imgArticle" alt="design photo" class="articles__img">
								<div class="articles__cloud">{{ item.typeArticle }}</div>
							</div>
							<p class="articles__item-title">{{ item.titleArticle }}</p>
							<div class="articles__item-div">
								<p class="articles__item-date">{{ item.dateArticle }}</p>
								<a href="#" class="articles__btn"><span></span></a>
							</div>
						</article>
						<!-- <article class="articles__item">
							<div class="articles__wrp-img">
								<img src="img/article_photo_2.jpg" alt="design photo" class="articles__img">
							</div>
							<p class="articles__item-title">Low Cost Latest Invented Interior Designing Ideas.</p>
							<div class="articles__item-div">
								<p class="articles__item-date">26 December,2022</p>
								<a href="#" class="articles__btn"><span></span></a>
							</div>
						</article>
						<article class="articles__item">
							<div class="articles__wrp-img">
								<img src="img/article_photo_3.jpg" alt="design photo" class="articles__img">
							</div>
							<p class="articles__item-title">Best For Any Office & Business Interior Solution</p>
							<div class="articles__item-div">
								<p class="articles__item-date">26 December,2022</p>
								<a href="#" class="articles__btn"><span></span></a>
							</div>
						</article> -->
					</div>
				</div>
			</div>
		</section>
</template>

<script>
export default {
	data() {
		return {
			newArticle: [
				{
					id: 1,
					imgArticle: "img/article_photo_1.jpg",
					typeArticle: "Kitchen Design",
					titleArticle: "Let’s Get Solution For Building Construction Work",
					textArticle: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.<br><br>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
					dateArticle: "26 December,2022"
				},
				{
					id: 2,
					imgArticle: "img/article_photo_2.jpg",
					typeArticle: "Living Design",
					titleArticle: "Low Cost Latest Invented Interior Designing Ideas.",
					textArticle: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.<br><br>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
					dateArticle: "22 December,2022"
				},
				{
					id: 3,
					imgArticle: "img/article_photo_3.jpg",
					typeArticle: "Interior Design",
					titleArticle: "Best For Any Office & Business Interior Solution",
					textArticle: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.<br><br>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
					dateArticle: "25 December,2022"
				},
				{
					id: 4,
					imgArticle: "img/article_photo_4.jpg",
					typeArticle: "Kitchen Design",
					titleArticle: "Let’s Get Solution For Building Construction Work",
					textArticle: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.<br><br>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
					dateArticle: "26 December,2022"
				},
				{
					id: 5,
					imgArticle: "img/article_photo_5.jpg",
					typeArticle: "Living Design",
					titleArticle: "Low Cost Latest Invented Interior Designing Ideas.",
					textArticle: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.<br><br>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
					dateArticle: "26 December,2022"
				},
				{
					id: 6,
					imgArticle: "img/article_photo_6.jpg",
					typeArticle: "Interior Design",
					titleArticle: "Best For Any Office & Business Interior Solution",
					textArticle: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.<br><br>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
					dateArticle: "26 December,2022"
				},
			]
		}
	},
}
</script>

<style lang="scss" scoped>

</style>
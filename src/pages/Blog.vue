<template>
	<section class="top-blog banner-topBlog">
		<div class="top-blog__title-div">
			<h2 class="top-blog__title">Articles & News</h2>
			<p class="top-blog__text">Home / Blog</p>
		</div>
	</section>
	<main class="container-post">
		<div class="post center">
			<h3 class="post__title">Latest Post</h3>
			<div class="post__card">
				<img src="img/post_photo.jpg" alt="interior" class="post__img">
				<div class="post__about">
					<p class="post__title-about">Low Cost Latest Invented Interior Designing Ideas</p>
					<p class="post__text-about">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim
						maximus.posuere in.Contrary to popular belief.<br><br> Lorem Ipsum is not simply random text. It has roots
						in a piece of classica.</p>
					<div class="post__date-btn">
						<p class="post__date">26 December,2022</p>
						<a href="#" class="post__btn"><span></span></a>
					</div>
				</div>
			</div>
		</div>
	</main>
	<section class="container-articles">
		<div id="app">
			<div class="articles center">
				<div class="articles-blog__about">
					<h3 class="articles-blog__title">Articles & News</h3>
				</div>
				<div class="articles-blog__block">
					<article v-for="item in newArticle" :key="item.id" class="articles__item">
						<div class="articles__wrp-img">
							<img :src="item.imgArticle" alt="design photo" class="articles__img">
						</div>
						<p class="articles__item-title">{{ item.titleArticle }}</p>
						<div class="articles__item-div">
							<p class="articles__item-date">{{ item.dateArticle }}</p>
							<a href="#" class="articles__btn"><span></span></a>
						</div>
					</article>
				</div>
				<div class="pagination center">
					<ul class="pagination__ul">
						<li class="pagination__numbers">
							<a class="pagination__links pagination__links_opened" href="#">01</a>
						</li>
						<li class="pagination__numbers">
							<a class="pagination__links" href="#">02</a>
						</li>
						<li class="pagination__numbers">
							<a class="pagination__links" href="#">03</a>
						</li>
						<li class="pagination__numbers">
							<a class="pagination__links" href="#"><span></span></a>
						</li>
					</ul>
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
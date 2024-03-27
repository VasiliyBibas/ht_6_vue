<template>
	<section class="top-blog banner-topBlogDetails">
		</section>
		<!-- <div id="app"> -->
			<main class="main-block center">

				<div class="articles__left">
					<div v-for="(item, index) in buferArr" :key="index">
						<h2 class="articles__left_title">{{ item.articTitle }}</h2>
						<img :src="item.articImg" alt="photo disign" class="articles__left_img" />
						<div class="articles__data-block">
							<p class="cards__date">22&nbsp;December,2022</p>
							<ul class="bread-crambs">
								<li>
									<a href="index.html" class="bread-crambs-link">Interior</a>
								</li>
								<li><a href="blog.html" class="bread-crambs-link">Home</a></li>
								<li><a href="blog.html" class="bread-crambs-link">Decore</a></li>
							</ul>
						</div>
						<p class="articles__left_text">{{ item.articText1 }}</p>
						<br /><br />
						<p class="articles__left_text">{{ item.articText2 }}</p>
					</div>

					<div class="articles__disine-rule">
						<p class="ticky">“</p>
						<p class="under-ticky">
							The details are not the details. They make the design.
						</p>
					</div>
					<div class="design-sprints">
						<h3 class="design-sprints__name">Design sprints are great</h3>
						<p class="design-sprints__article">
							Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
							turpmaximus.posuere in.Contrary to popular belief.There are many
							variations of passages of Lorem Ipsum available, but the majority
							have suffered.
						</p>
						<ol class="list-flex">
							<li v-for="(item, index) in listDisineSprints" :key="item.index">
								{{ index + 1 }} {{ item }}
							</li>
						</ol>

						<img src="img/disine-down.jpg" alt="disine-foto" class="articles__left_img" />
						<p class="design-sprints__article">
							Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
							turpmaximus.posuere in.Contrary to popular belief.There are many
							variations of passages of Lorem Ipsum available, but the majority
							have suffered.
						</p>
					</div>
				</div>
				<div class="articles__right">
					<h3 class="articles__right_title">Tags</h3>
					<button v-for="item in btnNameArr" :key="item.id" class="articles_btn" @click="getElem(item)">
						{{ item }}
					</button>
				</div>


			</main>
		<!-- </div> -->
</template>

<script>
export default {
	data() {
		return {
			buferArr: [{
				tag: "Kitchen",
				articTitle:
					"Kitchan Get Solution for Building Construction Work",
				articImg: "img/article_photo_1.jpg",
				articText1:
					"Kitchan  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
				articText2:
					"Kitchan  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
			},],
			articlesArr: [
				{
					tag: "Kitchen",
					articTitle:
						"Kitchan Get Solution for Building Construction Work",
					articImg: "img/article_photo_1.jpg",
					articText1:
						"Kitchan  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					articText2:
						"Kitchan  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
				},
				{
					tag: "Bedroom",
					articTitle:
						"Bedroom Get Solution for Building Construction Work",
					articImg: "img/article_photo_2.jpg",
					articText1:
						"Bedroom  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					articText2:
						"Bedroom  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
				},
				{
					tag: "Building",
					articTitle:
						"Building Get Solution for Building Construction Work",
					articImg: "img/article_photo_3.jpg",
					articText1:
						"Building  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					articText2:
						"Building  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
				},
				{
					tag: "Architecture",
					articTitle:
						"Architecture Get Solution for Building Construction Work",
					articImg: "img/article_photo_4.jpg",
					articText1:
						"Architecture  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					articText2:
						"Architecture  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
				},
				{
					tag: "Kitchen Planning",
					articTitle:
						"Kitchen Planning Get Solution for Building Construction Work",
					articImg: "img/article_photo_5.jpg",
					articText1:
						"Kitchen Planning  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					articText2:
						"Kitchen Planning  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
				},
				{
					tag: "Bathroom",
					articTitle:
						"Bathroom Get Solution for Building Construction Work",
					articImg: "img/article_photo_6.jpg",
					articText1:
						"Bathroom  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					articText2:
						"Bathroom  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
				},
			],
			btnNameArr: [
				"Kitchen",
				"Bedroom",
				"Building",
				"Architecture",
				"Kitchen Planning",
				"Bathroom",
			],
			listDisineSprints: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."],
		}
	},
	methods: {
		getElem(btnName) {
			//метод срабатывает только один раз, тк мы перезаписываем this.articlesArr
			// this.articlesArr = this.articlesArr.filter((el) => el.tag === btnName);
			// А если использовать буфер то перезаписываем его, а исходник остается нетронутым
			this.buferArr = this.articlesArr.filter((el) => el.tag === btnName);

		},
	},
}
</script>

<style lang="scss" scoped>

</style>
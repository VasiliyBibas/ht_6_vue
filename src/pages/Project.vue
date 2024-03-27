<template>
	<section class="top-blog banner-topProject">
		<div class="top-blog__title-div">
			<h2 class="top-blog__title">Our Project</h2>
			<p class="top-blog__text">Home / Project</p>
		</div>
	</section>
	<section class="categories center">
		<ul class="categories__list">
			<li class="categories__items">Bathroom</li>
			<li class="categories__items categories__items_checked">Bed Room</li>
			<li class="categories__items">Kitchan</li>
			<li class="categories__items">Living Area</li>
		</ul>
	</section>
	<main class="projects center">
		<ProjectList v-for="project in projects" :key="project.id" :project="project"/>
	</main>
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
</template>

<script>
import ProjectList from '../components/ProjectList.vue';


	export default {
		data() {
			return {
				projects: [
                {
                    id: 1,
										img: "img/project1.jpg",
                    title: 'Minimal Bedroom',
                    way: 'Decor / Artchitecture'
                },
                {
                    id: 2,
                    img: "img/project2.jpg",
                    title: 'Classic Minimal Bedroom',
                    way: 'Decor / Artchitecture'
                },
                {
                    id: 3,
                    img: "img/project3.jpg",
                    title: 'Minimal Bedroom table',
                    way: 'Decor / Artchitecture'
                },
								{
                    id: 4,
                    img: "img/project4.jpg",
                    title: 'Classic Minimal Bedroom',
                    way: 'Decor / Artchitecture'
                },
								{
                    id: 5,
                    img: "img/project5.jpg",
                    title: 'Classic Minimal Bedroom',
                    way: 'Decor / Artchitecture'
                },
								{
                    id: 6,
                    img: "img/project6.jpg",
                    title: 'Classic Minimal Bedroom',
                    way: 'Decor / Artchitecture'
                },
								{
                    id: 7,
                    img: "img/project7.jpg",
                    title: 'Classic Minimal Bedroom',
                    way: 'Decor / Artchitecture'
                },
								{
                    id: 8,
                    img: "img/project8.jpg",
                    title: 'Classic Minimal Bedroom',
                    way: 'Decor / Artchitecture'
                }
            ]
			}
		},
    components: { ProjectList }
		
	}
</script>

<style lang="scss" scoped>

</style>
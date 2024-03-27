<template>
	<div class="projects__item">
			<img class="projects__img" :src="project.img" alt="interiour">
			<div class="projects__div">
				<div class="projects__title-div">
					<p class="projects__title">{{project.title}}</p>
					<p class="projects__text">{{ project.way }}</p>
				</div>
				<!-- <a href="#" class="goods__btn"><span></span></a> -->
				<router-link href="#" class="goods__btn" to='/projectdetails'><span></span></router-link>
			</div>
	</div>
</template>

<script>
	export default {
		data() {
		},
		props: {
			project: Object,
		},

	}
</script>

<style lang="scss" scoped>

</style>
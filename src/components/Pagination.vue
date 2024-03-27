<template>
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
	export default {
		props: {
			Pagination: Object,
		},
		
	}
</script>

<style lang="scss" scoped>

</style>
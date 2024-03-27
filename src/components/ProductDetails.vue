<template>
	<div class="ProductDetails" >
		<p>{{ product.name }}</p>
		<p>{{ formattedPrice }}</p>
		<p v-if="product.available">Available</p>
		<p v-else="product.available">Out of stock</p>
	</div>
</template>

<script>
	export default {
		props: {
			product: Object,
		},
		computed: {
			formattedPrice() {
				return "$" + this.product.price;
			},
		},
		
	};
</script>

<style lang="scss" scoped>

</style>
<template>
		<ProductDetails v-for="product in products" :key="product.id" :product="product"/>

</template>

<script>
import ProductDetails from './ProductDetails.vue';


	export default {
		data() {
			return {
				products: [
                {
                    id: 1,
                    name: 'Продукт 1',
                    price: '100',
										available: 'Available'
                },
                {
                    id: 2,
                    name: 'Продукт 2',
                    price: '90',
										available: 'Out of stock'
                },
                {
                    id: 3,
                    name: 'Продукт 3',
                    price: '80',
										available: 'Available'
                },
                {
                    id: 4,
                    name: 'Продукт 4',
                    price: '110',
										available: 'Out of stock'
                },
            ],
			}
		},
		props: {
			product: Object,
		},
		components: { ProductDetails }
	}
</script>

<style lang="scss" scoped>

</style>
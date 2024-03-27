<template>
 
    <Header />
    <router-view />
    <Footer />

</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import { mapState } from "vuex";


// import Main from './components/Main.vue';
// import Blog from './components/Blog.vue';
// import BlogDetails from './components/BlogDetails.vue';
// import Product from './components/Product.vue';



export default {
  name: 'App',
  components: {
    Header,
    Footer
},
  computed: {
    ...mapState(["count"]),
  },
  methods: {

  }
}
</script>

<style lang="scss"></style>

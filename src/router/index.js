import { createRouter, createWebHistory } from "vue-router";
import Home from '@/pages/Home.vue';
import Blog from '@/pages/Blog.vue';
import BlogDetails from '@/pages/BlogDetails.vue';
import Project from '@/pages/Project.vue';
import ProjectDetails from '@/pages/ProjectDetails.vue';
import NotFound from '@/pages/NotFound.vue';
// import Catalog from '@/pages/Catalog.vue';



const routes = [
	{
		path: "/",
		component: Home
	},
	{
		path: "/blog",
		component: Blog
	},
	{
		path: "/blogdetails",
		component: BlogDetails
	},
	{
		path: "/project",
		component: Project
	},
	{
		path: "/projectdetails",
		component: ProjectDetails
	},
	{
		path: "/:CatchAll(.*)",
		component: NotFound
	}
	// {
	// 	path: "/catalog/:pageNumber?",
	// 	component: Catalog
	// }
];
const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes, 
	scrollBehavior() {
		return {
			top: 0
		}
	}
})

export default router;
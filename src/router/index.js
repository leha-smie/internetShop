import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomePage.vue'
import ProductsPage from '@/views/ProductsPage'
import CardPage from '@/views/CardPage.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/products',
		name: 'ProductsPage',
		component: ProductsPage,
		proprs: true
	},
	{
		path: '/cart',
		name: 'cart',
		component: CardPage,
		proprs: true
	}
	//   {
	//     path: '/about',
	//     name: 'About',
	//     // route level code-splitting
	//     // this generates a separate chunk (about.[hash].js) for this route
	//     // which is lazy-loaded when the route is visited.
	//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	//   }
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router

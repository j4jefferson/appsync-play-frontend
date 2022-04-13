import Vue from 'vue'
import VueRouter from 'vue-router'
import RootView from '../views/Root.vue'
import AuthMiddleware from './auth.guard'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'root',
		component: RootView,
	},
	{
		path: '/login',
		name: 'LogIn',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "login" */ '../views/LogIn.vue'),
	},
	{
		path: '/home',
		name: 'HomeView',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
		meta: { protected: true },
	},
]

const router = new VueRouter({
	routes,
})

router.beforeEach(AuthMiddleware)

export default router

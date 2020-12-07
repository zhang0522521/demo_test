import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import AllId from '@/components/all_id.vue'
import errTo from '@/views/err/404.vue'
Vue.use(VueRouter);

const routes = [{
		path: '/',
		component: Home,
		children: [{
				path: '/',
				name: 'home',
				component: () =>
					import('@/views/pages/one/one.vue')
			},
			{
				path: 'device/',
				component: () =>
					import('@/views/pages/device/device.vue'),
				children: [{
						path: '/',
						name: 'device',
						props: true,
						component: () =>
							import('@/views/pages/device/children/device1.vue'),
					},
					{
						path: 'device2',
						name: 'device2',
						props: true,
						component: () =>
							import('@/views/pages/device/children/device2.vue'),
					},
				]
			},
			{
				path: 'personnel/',
				component: () =>
					import('@/views/pages/personnel/personnel.vue'),
				children: [{
						path: '/',
						props: true,
						name: 'personnel',
						component:  () =>
							import('@/views/pages/personnel/children/personnel1.vue'),
					},
					{
						path: 'personnel2',
						name: 'personnel2',
						props: true,
						component: () =>
							import('@/views/pages/personnel/children/personnel2.vue'),
					},
				]
			},
			{
				path: 'statement',
				component: () =>
					import('@/views/pages/statement/statement.vue'),
				children: [{
						path: '/',
						name: 'statement',
						props: true,
						component: () =>
							import('@/views/pages/statement/children/statement1.vue'),
					},
					{
						path: 'statement2',
						name: 'statement2',
						props: true,
						component: () =>
							import('@/views/pages/statement/children/statement2.vue'),
					},
				]
			},
			{
				path: 'system',
				name: 'system',
				component: () =>
					import('@/views/pages/system/system.vue')
			}
		],
		meta: {
			requiresAuth: true // 访问该路由时需要判断是否登录
		}
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '*',
		name: '404',
		component: errTo
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})
router.beforeEach((to, from, next) => {
	let token = localStorage.getItem('Authorization');
	if (to.path !== '/login' && !token) {
		next('/login');
	} else {
		next()
	}
});
export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import errTo from '@/views/err/404.vue'
Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/home',
        component: Home,
        redirect: "homea",
        children: [{
                path: '/homea/',
                name: 'home',
                component: () =>
                    import ('@/views/pages/one/one.vue')
            },
            {
                path: '/homea/device',
                redirect: "/homea/device/device1",
                component: () =>
                    import ('@/views/pages/device/device.vue'),
                children: [{
                        path: '/homea/device/device1',
                        name: 'device1',
                        props: true,
                        component: () =>
                            import ('@/views/pages/device/children/device1.vue'),
                    },
                    {
                        path: '/homea/device/device2',
                        name: 'device2',
                        props: true,
                        component: () =>
                            import ('@/views/pages/device/children/device2.vue'),
                    },
                ]
            },
            {
                path: '/homea/personnel',
                redirect: "/homea/personnel/personnel1",
                component: () =>
                    import ('@/views/pages/personnel/personnel.vue'),
                children: [{
                        path: '/homea/personnel/personnel1',
                        props: true,
                        name: 'personnel1',
                        component: () =>
                            import ('@/views/pages/personnel/children/personnel1.vue'),
                    },
                    {
                        path: '/homea/personnel/personnel2',
                        name: 'personnel2',
                        props: true,
                        component: () =>
                            import ('@/views/pages/personnel/children/personnel2.vue'),
                    },
                ]
            },
            {
                path: '/homea/statement',
                redirect: "/homea/statement/statement1",
                component: () =>
                    import ('@/views/pages/statement/statement.vue'),
                children: [{
                        path: '/homea/statement/statement1',
                        name: 'statement1',
                        props: true,
                        component: () =>
                            import ('@/views/pages/statement/children/statement1.vue'),
                    },
                    {
                        path: '/homea/statement/statement2',
                        name: 'statement2',
                        props: true,
                        component: () =>
                            import ('@/views/pages/statement/children/statement2.vue'),
                    },
                ]
            },
            {
                path: '/homea/system',
                name: 'system',
                component: () =>
                    import ('@/views/pages/system/system.vue')
            }
        ],
        meta: {
            requiresAuth: true // 访问该路由时需要判断是否登录
        }
    },
    {
        path: '*',
        name: '404',
        component: errTo
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
	//base:'/dist/',
    routes
})
router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('Authorization');
    if (to.path !== '/' && !token) {
        next('/');
    } else {
        next()
    }
});
export default router
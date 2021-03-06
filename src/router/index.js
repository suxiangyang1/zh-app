import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '../views/Nav.vue'
import Home from '../views/Home.vue'
import Explore from '../views/Explore.vue'
import Special from '../views/Special.vue'
import Recommoned from '../views/Recommoned.vue'
import Follow from '../views/Follow.vue'
import Hot from '../views/Hot.vue'
import QuestionWaiting from '../views/QuestionWaiting.vue'
import Login from '../views/Login.vue'
import CollectionHot from '../views/CollectionHot.vue'
import Columns from '../views/Columns.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Nav,
	children:[{
		path: '/',
		redirect: 'home'
	},
	{
		path: "home",
		component: () => import('../views/Home.vue'),
		children: [
			{
				path: "/",
				redirect: 'recommoned'
			},
			{
				path: "recommoned",
				component: () => import('../views/Recommoned.vue')
			},
			{
				path: 'follow',
				component: () => import('../views/Follow.vue')
			},
			{
				path: 'hot',
				component: () => import("../views/Hot.vue")
			}
		]
	},
	{
		path: 'explore',
		component: () => import('../views/Explore.vue')
	},
	{
		path: 'special/all',
		component: () => import('../views/Special.vue')
	},
	{
		path: 'question/waiting',
		component: () => import('../views/QuestionWaiting.vue')
	},
	{
				path: 'roundTable',
				name: 'roundTable',
				component: () => import('../views/RoundTable.vue')
	},
	{
		path: 'collection/hot',
		component: () => import('../views/CollectionHot.vue')
	},
	{
		path: 'columns',
		component:() => import('../views/Columns.vue')
	}
	]
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router

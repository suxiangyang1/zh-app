import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: '111',
		baseUrl: 'http://localhost:8080/api',
		user: {
			id: 1,
			nickname: '杨苏祥',
			avatar: 'https://pic1.zhimg.com/v2-060d41c22851504394dd0f599063042e_is.jpg'
		}
	},
	mutations: {
		setToken(state,data) {
			state.token = data;
		},
		setUser(state,data) {
			state.user = data;
		}
	},
	actions: {},
	modules: {}
})
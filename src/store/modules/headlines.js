import {getSourceList, getContentByFilter} from "../../services/sourceList"

export default ({
  namespaced: true,
  state: {
		news: [],
		indexCard: "",
		newsBySearch: []
	},
	getters:{
		getAllSourceList(state){
			return state.news
		}
	},
	mutations: {
		HANDLE_CHANGE_NEWS(state,payload) {
			state.news = payload
		},
		HANDLE_CHANGED_INDEXCARD(state,payload) {
			state.indexCard = payload
		},
		HANDLE_CHANGED_VALUETITLE(state,payload) {
			state.news[state.indexCard].title = payload
		}
	},
	actions: {
		async headlinesList({commit}) {
			let payload = await getSourceList()
			commit("HANDLE_CHANGE_NEWS", payload)
		},

		async getListByTyping ({commit}, payload) {
			let value = await getContentByFilter(payload)
			commit("HANDLE_CHANGE_NEWS", value)

			console.log(value)
		}
	},
});

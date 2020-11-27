import {getSourceList, getContentByFilter} from "../../services/sourceList"

export default ({
  namespaced: true,
  state: {
		news: [],
		indexCard: "",
		visitedPages: []
	},
	getters:{
		getAllSourceList(state){
			return state.news
		},
		
		getAllVisitedPages(state){
			return state.visitedPages
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
		},

		HANDLE_CHANGED_VISITED(state,payload) {
			state.visitedPages.push(payload)
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
		}
	},
});

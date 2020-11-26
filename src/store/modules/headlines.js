import {getSourceList} from "../../services/sourceList"

export default ({
  namespaced: true,
  state: {
		news: [],
		// valueTitle: "",
		indexCard: ""
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
		HANDLE_CHANGED_INDEXCARD(state,payload){
			state.indexCard = payload
		},
		HANDLE_CHANGED_VALUETITLE(state,payload){
			// state.valueTitle = payload
			state.news[state.indexCard].description = payload
		}
	},
	actions: {
		async headlinesList({commit}){
			let payload = await getSourceList()
			commit("HANDLE_CHANGE_NEWS", payload)
		},
		// changingTitle({commit, state}, payload) {
		// 	commit("HANDLE_CHANGED_VALUETITLE", payload)
		// }
	},
});

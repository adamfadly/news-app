import {getSourceList} from "../../services/sourceList"

export default ({
  namespaced: true,
  state: {
		news: []
	},
	getters:{
		getAllSourceList(state){
			return state.news
		}
	},
	mutations: {
		HANDLE_CHANGE_NEWS(state,payload) {
			state.news = payload
		}
	},
	actions: {
		async headlinesList({commit}){
			let payload = await getSourceList()
			commit("HANDLE_CHANGE_NEWS", payload)
		},
	},
});

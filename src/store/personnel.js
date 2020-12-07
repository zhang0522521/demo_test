 import all from '@/assets/js/table';
const state = {
    dataAll:all.dataAll3,
	dataAll2:all.dataAll4,
	isDialog:false,
	isDialog1:false
};
const getters = {

};
const mutations = {
    isTableall(state) {
		state.dataAll=all.dataAll3;
	},
	isTableall2(state) {
		state.dataAll2=all.dataAll4;
	},
	newView(state,item){
	   console.log(item)
	},
	isDialog(state,is){
		state.isDialog=!!Number(is);
	},
	isDialog1(state,is){
		state.isDialog1=!!Number(is);
	}
};
const actions = {
  
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
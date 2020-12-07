 import all from '@/assets/js/table';
const state = {
	dataAll:all.dataAll5,
	dataAll2:all.dataAll6,
};
const getters = {

};
const mutations = {
    isTableall(state) {
    	state.dataAll=all.dataAll5;
    },
    isTableall2(state) {
    	state.dataAll2=all.dataAll6;
    },
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
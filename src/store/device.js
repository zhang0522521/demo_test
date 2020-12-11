 // import tableall from '@/assets/js/table.js';
 // console.log(tableall)
 import all from '@/assets/js/table';
 const state = {
     dataAll: all.dataAll, //模拟数据
     dataAll2: all.dataAll2, //模拟数据
     index: 0,
     isDialog: false, //dialog弹出
     isDialog2: false, //dialog弹出
     item: {},
 };
 const getters = {

 };
 const mutations = {
     isTableall(state, itemId) {
         if (itemId) {
             console.log('有');
             let index = state.dataAll.To3.tablecon.findIndex((item) => {
                 console.log(item.id == itemId.id)
                 return item.id == itemId.id
             })
             state.dataAll.To3.tablecon[index] = itemId;
             console.log(index)
         } else {
             console.log('无')
             state.dataAll = all.dataAll
         }
     },
     isTableall2(state) {
         state.dataAll2 = all.dataAll2
     },
     newView(state, item) {
         console.log(item)
     },
     isDialog(state, is) {
         console.log(is)
         state.isDialog = !!Number(is);
     },
     //查看
     isDialog2(state, data) {
         console.log(data)
         state.isDialog2 = !!Number(data.is);
         state.item = data.item;

     }
 };
 const actions = {};

 export default {
     namespaced: true,
     state,
     getters,
     mutations,
     actions
 }
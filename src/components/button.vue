<template>
    <div>
        <el-button :type="all_Item.sty" @click="but($route.query.id,all_Item.name)">{{all_Item.name}}</el-button>
    </div>
</template>
<script>
export default {
    props:['all_Item'],
	components:{
		
	},
	data(){
		return{
		}
		},
    methods:{
        but(a,b){
			if(a == '2' && b=='添加设备'){
				this.$store.commit('device/isDialog',1)
				this.$store.commit('device/newView',b)
			}else if(a == '3'){
				
				if(b=='新增人员'){
					this.$store.commit('personnel/isDialog',1)
					this.$store.commit('personnel/newView',b)
				}else if(b=='一键操作'){
					this.$store.commit('personnel/isDialog1',1)
					this.$store.commit('personnel/newView',b)
				}else {
					
				}
            }else{
				
			}
        }
    }
}
</script>
<style lang="scss">

</style>
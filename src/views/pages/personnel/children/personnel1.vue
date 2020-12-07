<template>
	<div>
		 <AllID :dataAll="$store.state.personnel.dataAll" :isTrue="'personnel1'" ></AllID> 
		  <!-- 对话框使用的是vuex传值 personnel/isDialog -->
		 <!-- <Dialog :isTrue="'personnel1'"></Dialog> -->
	</div>
</template>

<script>
	import AllID from '@/components/all_id.vue';
	// import Dialog from '@/components/dialog.vue';
	export default{
		components:{
		    AllID,
			// Dialog
		},
		data(){
			return{
				newView(a){
					console.log(a);
				}
			}
		},
		methods:{
			
		},
		watch:{
			
		},
		mounted(){
			this.$store.commit('personnel/isTableall')
		},
		computed:{
			
		}
	}
</script>

<style scoped lang="scss">
	
</style>

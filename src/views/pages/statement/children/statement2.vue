<template>
	<div>
		 <AllID :dataAll="$store.state.statement.dataAll2" ></AllID> 
	</div>
</template>

<script>
	import AllID from '@/components/all_id.vue';
	export default{
		data(){
			return{
				
			}
		},
		components:{
		    AllID
		},
		methods:{
			
		},
		watch:{
			
		},
		mounted(){
			this.$store.commit('statement/isTableall2')
		},
		computed:{
			
		}
	}
</script>

<style scoped lang="scss">
	
</style>

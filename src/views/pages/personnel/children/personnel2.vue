<template>
	<div>
		<AllID :dataAll="$store.state.personnel.dataAll2" :isTrue="'personnel2'"></AllID>  
	</div>
</template>

<script>
	import AllID from '@/components/all_id.vue'
	export default{
		components:{
		    AllID
		},
		data(){
			return{
				
			}
		},
		methods:{
			
		},
		watch:{
			
		},
		mounted(){
			this.$store.commit('personnel/isTableall2')
		},
		computed:{
			
		}
	}
</script>

<style scoped lang="scss">
	
</style>

<template>
    <div>
       <AllID :dataAll="$store.state.device.dataAll" :isTrue="'device1'"></AllID>
    </div>
</template>
<script>
import AllID from '@/components/all_id.vue'

export default {
    components:{
        AllID,
		
    },
    mounted(){
            this.$store.commit('device/isTableall')
    },
	watch:{
	},
    data(){
        return{
			'$store.state.device.dataAll'(){
				console.log(11)
			}
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>
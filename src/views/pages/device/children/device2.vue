<template>
   <div>
       <AllID :dataAll="$store.state.device.dataAll2" :isTrue="'device2'"></AllID>  
    </div>
</template>
<script>
import AllID from '@/components/all_id.vue'
export default {
    components:{
        AllID
    },
    mounted(){
        this.$store.commit('device/isTableall2')
    },
    data(){
        return{
		}
    },
}
</script>
<style lang="scss" scoped>
    
</style>
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
    data(){
        return {
            a:0
        }
    },
    created(){
     console.log('created');
    },
    mounted(){
        this.a+=1;
        console.log('mounted')
        this.$store.commit('device/isTableall2')
    },
}
</script>
<style lang="scss" scoped>
    
</style>
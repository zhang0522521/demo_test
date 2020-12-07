<template>
   <div>
       <span class="input_span">{{all_Item.name}}</span>
       <el-input v-model="input" placeholder="请输入内容"></el-input>
   </div>
</template>

<script>
export default {
   props:['all_Item'],
   data(){
       return{
           input:''
       }
   }
}
</script>

<style lang="scss">

</style>
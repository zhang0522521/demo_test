<template>
   <div>
        <el-date-picker
        v-model="pricker.ker"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        value-format="yyyy-MM-dd HH:mm:ss"
        ></el-date-picker>
   </div>
</template>

<script>
export default {
    data(){
        return {
            pricker:{
                ker:[]
            }
        }
    }
}
</script>

<style>

</style>
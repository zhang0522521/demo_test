<template>
  <div>
      <span class="input_span">{{all_Item.name}}</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
        v-for="item in all_Item.children"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select>
  </div>
</template>

<script>
  export default {
    props:['all_Item'],
    data() {
      return {
        value: ''
      }
    }
  }
</script>
</script>

<style>

</style>
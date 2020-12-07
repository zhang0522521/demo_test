<template>
	<div>
		<span class="input_span">{{all_Item.name}}</span>
		<el-date-picker
		class="times"
		 v-model="pricker.ker"
		 type="datetimerange"
		 start-placeholder="开始时间"
		 range-separator="-"
		 end-placeholder="结束时间"
		 value-format="yyyy-MM-dd HH:mm:ss"
		 ></el-date-picker>
	</div>
</template>

<script>
	export default{
		props:['all_Item'],
		data(){
			return{
				pricker:{
				       ker:[]
				   },
			}
		},
		methods:{
			
		},
		watch:{
			
		},
		mounted(){
			
		},
		computed:{
			
		}
	}
</script>

<style  lang="scss">
	.times{
	  background: #303a96;
	  margin-right: 14px;
	  border:0;
	  height: 32px;
	  line-height: 32px;
	  box-shadow: 0 0 1px 0.5px #FFF;
	  margin-bottom: 10px;
	  .el-range-input{
	     background: rgba(255,255,255,0.01);
	     color: white;
		 padding: 0;
	  }
	}
	.el-range-editor.el-input__inner{
		padding: 0 12px;
		color: white;
	}
	.el-date-editor .el-range-separator{
		color:white;
	}
</style>

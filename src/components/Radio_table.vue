<template>
	<div>
		<div class="app_radioTable">
			<el-table ref="multipleTable" :data="tableAll"  tooltip-effect="dark" style="width: 100%" :header-row-class-name="headSty"
			 @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="80">
				</el-table-column>
				
				<template v-for="(i,index) in tableall.tableTitle">
					<el-table-column :label="i.lable" :key="index" align="center" :property="i.prop" show-overflow-tooltip min-width="50">
						<template slot-scope="scope">
							   <!-- device1 -->
								   <span v-if="scope.column.label=='运行状态'" :style="{'color':scope.row.type==0?'#BCBBBB':''}">{{scope.row.type==0?'离线':'在线'}}</span>
							   <!-- device2 -->
								<!-- personnel -->
									<el-image
									 v-else-if="scope.column.label=='照片'"
									  style="width: 70px; height:75px"
									  :src="scope.row.images"
									   :preview-src-list="[scope.row.images]"
									  fit="fill"></el-image>
									  
								   <span v-else-if="scope.column.label=='状态'" :style="{'color':scope.row.tongbu==0?'#BCBBBB':''}">{{scope.row.tongbu==0?'未同步':'已同步'}}</span>
								   <template v-else-if="scope.column.label=='授权管理'">
									   <span v-html="scope.row.impower"></span>
									  <!-- </br>
									   <el-button type="text" @click="">授权管理</el-button> -->
								   </template>
								   
								<!-- -->
								<span @click="click(scope.row,scope.column)" v-else>{{ scope.row[scope.column.property]}}</span>
						</template>
					</el-table-column>
				</template>
				<el-table-column label="操作" align="center" min-width="50" v-if="isTrue">
					<template slot-scope="scope">
						<el-button type="text" v-if="isTrue=='device1'" @click="checkdevice1(scope.$index, scope.row)">查看</el-button>
						<el-button type="text" v-else-if="isTrue=='device2'" @click="setdevice2">修改编辑</el-button>
						<span v-else-if="isTrue=='personnel1'">
							<el-button type="text"  @click="">查看</el-button>
							<el-button type="text" style="color:red;" @click="">删除</el-button>
						</span>
						<span v-else-if="isTrue=='personnel2'">
							<el-button type="text"  @click="">查看</el-button>
							<el-button type="text" style="color:red;" @click="">删除</el-button>
						</span>
						<el-button type="text"  v-else @click="">修改编辑s</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="app_pagination">
			<el-pagination background hide-on-single-page @size-change="handleSizeChange" @current-change="handleCurrentChange"
			 :current-page.sync="currentPage3" :page-size="10" layout="prev, pager, next, jumper" :total="tableall.tablecon.length">
			</el-pagination>
		</div>
		 <Dialog :isTrue="isTrue" @upedit="upedit" :editIndex="editIndex"></Dialog>
	</div>
</template>

<script>
	import Dialog from '@/components/dialog.vue';
	import config from '@/config/index';
	export default {
		props: ['tableall','isTrue'],
		components:{
			Dialog
		},
		data() {
			return {
				api:config.baseURL,
				tableAll:[],
				multipleSelection: [],
				type:'',
				currentPage3:1,
				editIndex:0,
			}
		},
		mounted() {
			// this.tableAll=[];
			console.log(config.baseURL)
			console.log(this.tableall.tablecon.slice(0,10))
			this.tableAll=this.tableall.tablecon.slice(0,10);
		},
		methods: {
			click(a, b) {
				console.log(a)
				console.log(b.label)
			},
			upedit(){
				this.$set(this.tableAll,this.editIndex,this.tableall.tablecon[this.editIndex]);
			},
			//device1中table查看
			checkdevice1(index, row){
				console.log(index)
				this.editIndex=index;
				this.$store.commit('device/isDialog2',{is:1,item:row});
			},
			//device2中table修改编辑
			setdevice2(){
				console.log('device2中table修改编辑')
			},
			headSty({row,rowIndex}) {
				return 'headSty'
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.tableAll = this.tableall.tablecon.slice(((val - 1) * 10), 10 * val)
			}
		},
	}
</script>
<style lang="scss">
	.el-table td,
	.el-table th {
		padding: 0;
	}

	.headSty {
		background: #1d3381 !important;
		color: #09CCDE;
		text-align: center;
		font-family: Adobe Heiti Std;
		font-weight: normal;
        height: 50px;
	}

	.el-pagination.is-background .el-pager li:not(.disabled).active {
		background: #409EFF !important;
	}

	.el-table__header-wrapper .el-checkbox__input::after {
		content: '全选';
		color: #09CCDE;
		position: absolute;
		left: 20px;
	}

	.el-checkbox__original {
		margin-right: 80px;
	}
</style>

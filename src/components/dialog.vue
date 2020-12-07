<template>
	<div>
		<div v-if="isTrue == 'device1'">
			<el-dialog title="添加设备" :visible.sync="$store.state.device.isDialog" width="50%">
				<div class="from_dev">
					<el-form :model="ruleForm" status-icon ref="ruleForm" label-width="auto" size="medium" label-position="left" class="demo-ruleForm">
						<el-form-item label="设备编号" prop="pass">
							<el-input type="text" v-model="ruleForm.name" autocomplete="off" placeholder="请输入设备编号"></el-input>
						</el-form-item>
						<el-form-item label="所在位置" prop="checkPass">
							<el-input type="text" v-model="ruleForm.hname" placeholder="请选择设备所在位置" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label="设备方向" prop="checkPass">
							<el-input type="text" v-model="ruleForm.hname" placeholder="请选择设备方向" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button @click="dialogDevice(0)" class="noBtn">取 消</el-button>
							<el-button type="primary" @click="dialogDevice(1)" class="noBtn">确 定</el-button>
						</el-form-item>
					</el-form>
				</div>
			</el-dialog>
			<el-dialog title="操作" :visible.sync="$store.state.device.isDialog2">
				<div class="setView">
					<el-form :model="charForm" status-icon ref="charForm" label-width="auto" size="medium" label-position="left">
						<span class="form_title">设备详情</span>
						<el-form-item label="设备编号" prop="pass">
							<el-input type="text" @change="input('触发')" v-model="charForm.name" :disabled="disableds" autocomplete="off" placeholder="请输入设备编号"></el-input>
						</el-form-item>
						<el-form-item label="所在位置" prop="checkPass">
							<el-input type="text" v-model="charForm.content"  @change="input('触发')" :disabled="disableds" placeholder="请选择设备所在位置" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label="设备方向" prop="checkPass">
							<el-input type="text" v-model="charForm.direction"  @change="input('触发')" :disabled="disableds" placeholder="请选择设备方向" autocomplete="off"></el-input>
						</el-form-item>
						<span class="form_title">阀值设置</span>
						<el-form-item label="普通阀值" prop="checkPass">
							<el-input type="text" v-model="charForm.s3"  @change="input('触发')" :disabled="disableds" placeholder="请选择设备所在位置" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label="活体阀值" prop="checkPass">
							<el-input type="text" v-model="charForm.s4"  @change="input('触发')" :disabled="disableds" placeholder="请选择设备方向" autocomplete="off"></el-input>
						</el-form-item>
						<span class="form_title">帧率设置</span>
						<el-form-item label="最小帧率" prop="checkPass">
							<el-input type="text" v-model="charForm.s5"  @change="input('触发')" :disabled="disableds" placeholder="请选择设备所在位置" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button @click="setView(0)" class="noBtn">取 消</el-button>
							<span style="display: inline-block;margin-left: 15px;">
								<el-button type="primary" @click="setView(1,'编辑')" class="noBtn" v-if="disableds==true">编 辑</el-button>
								<el-button type="primary" @click="setView(1,'确定')" class="noBtn" v-else>确 定</el-button>
							</span>

						</el-form-item>
					</el-form>
					<!-- {{charForm}} -->
				</div>
			</el-dialog>
		</div>
		<div v-else-if="isTrue == 'personnel1'">
			<el-dialog :visible.sync="$store.state.personnel.isDialog" title="新增人员" width="50%" destroy-on-close>
				<div class="dialog_demo">
					<div class="upimg_demo">
						<div>
							<el-image style="width: 200px; height: 200px" :src="'api/'+headerimg" fit="fill">
								<div slot="error" style="width: 100%;height: 100%;font-size: 150px;">
									<i class="el-icon-picture-outline"></i>
								</div>
							</el-image>
						</div>
						<el-upload class="upload-demo" :header="{'Content-Type': 'multipart/form-data','accept': 'application/json'}"
						 action="api/visitor/visitorUpload" :on-preview="handlePreview" :on-remove="handleRemove" :on-success="handlesuccess"
						 :limit="1" :show-file-list="false">
							<el-button size="small" type="primary" class="upimg">点击上传</el-button>
						</el-upload>
					</div>
					<div class="from_demo">
						<el-form :model="ruleForm" status-icon ref="ruleForm" size="medium" label-position="left" class="demo-ruleForm">
							<el-form-item label="姓名" prop="pass">
								<el-input type="text" v-model="ruleForm.name" autocomplete="off" placeholder="请填写姓名"></el-input>
							</el-form-item>
							<el-form-item label="单位" prop="checkPass">
								<el-select v-model="ruleForm.select" placeholder="请选择单位" style="width: 100%;">
									<el-option label="区域一" value="shanghai"></el-option>
									<el-option label="区域二" value="beijing"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="部门" prop="checkPass">
								<el-select v-model="ruleForm.select2" placeholder="请选择所在部门" style="width: 100%;">
									<el-option label="区域一" value="shanghai"></el-option>
									<el-option label="区域二" value="beijing"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="工号" prop="checkPass">
								<el-input type="text" v-model="ruleForm.hname" placeholder="请输入工号" autocomplete="off"></el-input>
							</el-form-item>
							<el-form-item>
								<el-button @click="dialogVisible(0)" class="noBtn">取 消</el-button>
								<el-button type="primary" @click="dialogVisible(1)" class="noBtn">确 定</el-button>
							</el-form-item>
						</el-form>
					</div>
				</div>
			</el-dialog>
			<el-dialog title="一键操作" :visible.sync="$store.state.personnel.isDialog1">
				<div class="btnAll">
					<el-button type="primary" size="medium">压缩包导入</el-button>
					<el-button type="warning" size="medium">图片集导入</el-button>
					<el-button type="warning" size="medium">文件夹导入</el-button>
					<el-button type="success" size="medium">Excel表导入</el-button>
					</br>
					<el-button type="primary" size="medium">全部同步</el-button>
					<el-button type="danger" size="medium">全部删除</el-button>
					<el-button type="danger" size="medium">Excel批量删除</el-button>
				</div>
			</el-dialog>

		</div>

		<div v-else></div>
	</div>
</template>

<script>
	export default {
		name: 'Dialog',
		props: ['isTrue','upedit','editIndex'],
		data() {
			return {
				headerimg: '',
				ruleForm: {
					name: '',
					select: '',
					select1: '',
					hname: ''
				},
				charForm: {
					s3: '80',
					s4: '80',
					s5: '5',
					...this.$store.state.device.item
				},
				disableds: true,
				is_true:''
			}
		},
		methods: {
			input(a){
				//判段input改变与否
				this.is_true=a;
			},
			handleExceed(files, fileList) {
				this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			},
			handlesuccess(res) {
				this.headerimg = res.name;
			},
			dialogVisible(is) {
				if (is == 1) {
					this.$store.commit('personnel/isDialog', 0)
				} else {
					this.$store.commit('personnel/isDialog', 0)
				}
			},
			dialogDevice(is) {
				if (is == 1) {
					this.$store.commit('device/isDialog', 0)
				} else {
					this.$store.commit('device/isDialog', 0)
				}
			},
			//device1查看
			setView(is, is2) {
				if (is == 1) {
					if (is2 === '编辑') {
						this.disableds=false;
						this.$store.commit('device/isDialog2', {
							is:1,
							item:this.$store.state.device.item
						})
					} else {
						if(this.is_true=='触发'){
							this.$confirm('确定更改此项?', '提示', {
							          confirmButtonText: '确定',
							          cancelButtonText: '取消',
							          type: 'warning'
							}).then(() => {
								   this.disableds=true;
									this.$store.commit('device/isDialog2', {
									is: 0,
									item:this.charForm
								})
							    this.$store.commit('device/isTableall',this.charForm);
								this.$emit('upedit',this.editIndex)
								  this.$message({
									type: 'success',
									message: '更改成功!'
								  });
							}).catch(() => {
								this.$message({
										type: 'info',
										message: '已取消更改'
								});
								this.isAll();
							});
						}else{
							this.isAll();
						}
						this.is_true='';
					}
					
				} else {
					this.disableds=true;
					this.isAll();
				}
			},
			isAll(){
				this.disableds=true;
				this.$store.commit('device/isDialog2', {
					is: 0,
					item:this.$store.state.device.item
				})
			}
		},
		watch: {
          '$store.state.device.item.id'(a){
			  console.log(a)
			  this.charForm={...this.$store.state.device.item}
		  }
		},
		mounted() {

		},
		computed: {

		}
	}
</script>

<style lang="scss">
	.el-dialog__body {
		background: #DFEEFD;

		.btnAll {
			width: 100%;
			font-size: 15px;

			button {
				margin: 10px;
			}
		}
	}

	.from_dev {
		align-items: center;
		justify-content: center;
		display: flex;
		width: 100%;
	}

	.setView {
		align-items: center;
		justify-content: center;
		display: flex;
		width: 100%;

		.form_title {
			display: block;
			font-size: 17px;
			margin-bottom: 10px;
			font-family: Adobe Heiti Std;
			font-weight: normal;
			color: #0177D5;

		}
	}

	.el-dialog__body {

		.dialog_demo {
			display: flex;

			.upimg_demo {
				text-align: center;
				flex: 1;

				.upimg {
					margin-right: 0;
					margin-top: 45px;
					margin-bottom: 0;
				}
			}

			.from_demo {
				flex: 1;
				width: 100%;

				.noBtn {
					margin-right: 0;
				}
			}
		}
	}

	.el-dialog__header {
		display: flex;
		text-align: left;

		background-color: #0177D5;
		padding-left: 21px;
		padding-top: 0;
		padding-right: 0;
		padding-bottom: 0;

		.el-dialog__title {
			font-size: 18px;
			line-height: 42px;
			font-family: Adobe Heiti Std;
			font-weight: normal;
			color: #FFFFFF;
		}

		button {
			top: 5px;
			right: 0px;
			margin-right: 5px !important;
			padding: 0 !important;
			color: white !important;
			font-size: 30px !important;
		}
	}

	.el-dialog__headerbtn .el-dialog__close {
		color: #FFF;
	}
</style>

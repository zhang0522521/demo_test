<template>
	<div class="app_nav">
		<UI :data="data"></UI>
	</div>
</template>
<script>
	import UI from './com/ul.vue'
	export default {
		components: {
			UI
		},
		data() {
			return {
				data: [{
						id: 1,
						name: '首页',
						value: '1',
						path: '/homea',
						children: [],
						nameTo: 'home'
					},
					{
						id: 2,
						name: '设备管理',
						value: '2',
						path: '/homea/device',
						nameTo: 'device',
						children: [{
							id: 2,
							name: '设备管理',
							value: '2',
							path: '/homea/device/device1',
							nameTo: 'device1',
							children: []
						}, {
							id: 22,
							name: '分组管理',
							value: '2',
							path: '/device/device2',
							nameTo: 'device2',
							children: []
						}]
					},
					{
						id: 3,
						name: '人员管理',
						value: '3',
						path: '/homea/personnel',
						nameTo: 'personnel',
						children: [{
							id: 3,
							name: '员工管理',
							value: '3',
							nameTo: 'personnel1',
							path: '/homea/personnel/personnel1',
							children: []
						}, {
							id: 32,
							name: '访客管理',
							value: '3',
							nameTo: 'personnel2',
							path: '/homea/personnel/personnel2',
							children: []
						}]
					},
					{
						id: 4,
						name: '报表统计',
						value: '4',
						path: '/homea/statement',
						children: [{
							id: 4,
							name: '访客数据统计',
							value: '4',
							nameTo: 'statement1',
							path: '/homea/statement/statement1',
							children: []
						}, {
							id: 42,
							name: '门禁记录',
							value: '4',
							nameTo: 'statement2',
							path: '/homea/statement/statement2',
							children: []
						}],
						nameTo: 'statement'
					},
					{
						id: 5,
						name: '系统设置',
						value: '5',
						path: '/homea/system',
						children: [],
						nameTo: 'system'
					}
				],
				a: ''
			};
		},
		watch: {

		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	};
</script>
<style lang="scss">

</style>
<style lang="scss" scoped>
	// .el-menu-item:hover{
	//   color: #09CCDE !important;
	//         background-color:rgba(255, 255, 255, 0.0) !important;
	//         .p5{
	//      background-image: url('../assets/b5.png');
	// }
	// .p4{
	//       background-image:url('../assets/b3.png');
	// }
	// .p3{
	//       background-image: url('../assets/b1.png');
	// }
	// .p1{
	//       background-image: url('../assets/b4.png');
	// }
	//     }



	.el-menu-item {
		font-size: 13px !important;
		font-family: Adobe Heiti Std;
		line-height: 39px !important;
		font-weight: normal;
	}
</style>


var all ={
	dataAll:{
	    To1:[
	        {
	        name:'所在楼宇',
	        is:'Input',
	        children:[],
	        sty:''
	    },
	    {
	        name:'设备方向',
	        is:'Select',
	        children:[
	            {
	            value: '选项1',
	            label: '黄金糕'
	            }, {
	            value: '选项2',
	            label: '双皮奶'
	            }, {
	            value: '选项3',
	            label: '蚵仔煎'
	            }, {
	            value: '选项4',
	            label: '龙须面'
	            }, {
	            value: '选项5',
	            label: '北京烤鸭'
	            }
	        ],
	        sty:''
	    },
	    {
	        name:'查询',
	        is:'Button',
	        children:[],
	        sty:'primary'
	    }
	    ],
	    To2:[
	    {
	        name:'添加设备',
	        is:'Button',
	        sty:'primary'
	    },
	    {
	        name:'一键导入',
	        is:'Button',
	        sty:'primary'
	    },
	    {
	        name:'删除设备',
	        is:'Button',
	        sty:'danger'
	    }
	    ],
		To3:{
			tableTitle:[
				{lable:'序号',prop:'id'},
				{lable:'设备编号',prop:'name'},
				{lable:'楼宇名称',prop:'content'},
				{lable:'设备方向',prop:'direction'},
				{lable:'运行状态',prop:'state'},
			],
			tablecon:[
				{ id: 1, name: '524654585263342', content: '综合楼',direction:'入口',type:0},
				{ id: 2, name: '524654585263342', content: '综合楼',direction:'入口',type:0},
				{ id: 3, name: '524654585263342', content: '综合楼', direction:'入口',type:1 },
				{ id: 4, name: '524654585263342', content: '综合楼',direction:'入口',type:0 },
				{ id: 5, name: '524654585263342', content: '综合楼', direction:'入口',type:0},
				{ id: 6, name: '524654585263342', content: '综合楼',direction:'入口', type:1},
				{ id: 7, name: '524654585263342', content: '综合楼', direction:'入口',type:0},
				{ id: 8, name: '524654585263342', content: '综合楼', direction:'入口',type:0 },
				{ id: 9, name: '524654585263342', content: '综合楼', direction:'入口',type:0},
				{ id: 10, name: '524654585263342', content: '综合楼',direction:'入口', type:0},
				{ id: 11, name: '524654585263342', content: '综合楼',direction:'入口', type:1},
				{ id: 12, name: '524654585263342', content: '综合楼', direction:'入口',type:0},
				{ id: 13, name: 'a524654585263342', content: '综合楼',direction:'入口',type:0 },
				{ id: 14, name: 'b524654585263342', content: '综合楼',direction:'入口',type:0},
				{ id: 15, name: 'c524654585263342', content: '综合楼',direction:'入口',type:0},
				{ id: 16, name: 'd524654585263342', content: '综合楼',direction:'入口',type:1},
				{ id: 17, name: '5246545852633421', content: '综合楼',direction:'入口',type:0},
				{ id: 18, name: '5246545852633422', content: '综合楼',direction:'入口',type:0},
				{ id: 19, name: '5246545852633423', content: '综合楼',direction:'入口',type:0},
				{ id: 20, name: '5246545852633424', content: '综合楼',direction:'入口',type:0}
			 ],
		 },
		 },
    dataAll2:{
		     To1:[
		         {
		         name:'访客姓名',
		         is:'Input',
		         children:[],
		         sty:''
		     },
		     {
		         name:'所在单位',
		         is:'Select',
		         children:[
		             {
		             value: '选项1',
		             label: '黄金糕'
		             }, {
		             value: '选项2',
		             label: '双皮奶'
		             }, {
		             value: '选项3',
		             label: '蚵仔煎'
		             }, {
		             value: '选项4',
		             label: '龙须面'
		             }, {
		             value: '选项5',
		             label: '北京烤鸭'
		             }
		         ],
		         sty:''
		     },
		     {
		         name:'查询',
		         is:'Button',
		         children:[],
		         sty:'primary'
		     }
		     ],
		     To2:[
		     {
		         name:'添加访客',
		         is:'Button',
		         sty:'primary'
		     },
		     {
		         name:'全部选中',
		         is:'Button',
		         sty:'primary'
		     },
		     {
		         name:'删除',
		         is:'Button',
		         sty:'danger'
		     }
		     ],
		To3:{
			tableTitle:[
				{lable:'序号',prop:'id'},
				{lable:'单位',prop:'name'},
				{lable:'部门',prop:'content'}
			],
			tablecon:[
				{ id: 1, name: '航天神舟科技发展有限公司', content: '市场部、财务部、人力资bai源部、PMC部、品质部、技术部、市场部、财务部、人力资bai源部、PMC部、\n品质部du、技术部、市场部、财务部、人力资bai源部、PMC部、品质部du、技术部'},
				{ id: 2, name: '518所', content: '市场部、财务部、人力资bai源部、PMC部、品质部、技术部、市场部、财务部、人力资bai源部、PMC部、\n品质部du、技术部、市场部、财务部、人力资bai源部、PMC部、品质部du、技术部'},
				{ id: 3, name: '航天中为', content: '市场部、财务部、人力资bai源部、PMC部、品质部、技术部、市场部、财务部、人力资bai源部、PMC部、\n品质部du、技术部、市场部、财务部、人力资bai源部、PMC部、品质部du、技术部'},
				{ id: 4, name: '孵化器新公司', content: '市场部、财务部、人力资bai源部、PMC部、品质部、技术部、市场部、财务部、人力资bai源部、PMC部、\n品质部du、技术部、市场部、财务部、人力资bai源部、PMC部、品质部du、技术部'},
				{ id: 5, name: '个人技术部', content: '市场部、财务部、人力资bai源部、PMC部、品质部、技术部、市场部、财务部、人力资bai源部、PMC部、\n品质部du、技术部、市场部、财务部、人力资bai源部、PMC部、品质部du、技术部'},
				{ id: 6, name: '人才部', content: '市场部、财务部、人力资bai源部、PMC部、品质部、技术部、市场部、财务部、人力资bai源部、PMC部、\n品质部du、技术部、市场部、财务部、人力资bai源部、PMC部、品质部du、技术部'},
				{ id: 7, name: '废材部', content: '市场部、财务部、人力资bai源部、PMC部、品质部、技术部、市场部、财务部、人力资bai源部、PMC部、\n品质部du、技术部、市场部、财务部、人力资bai源部、PMC部、品质部du、技术部'},
				{ id: 8, name: '公司', content: '市场部、财务部、人力资bai源部、PMC部、品质部、技术部、市场部、财务部、人力资bai源部、PMC部、\n品质部du、技术部、市场部、财务部、人力资bai源部、PMC部、品质部du、技术部'},
				{ id: 9, name: '甲公司', content: '市场部、财务部、人力资bai源部、PMC部、品质部、技术部、市场部、财务部、人力资bai源部、PMC部、\n品质部du、技术部、市场部、财务部、人力资bai源部、PMC部、品质部du、技术部'},
				{ id: 10, name: '乙公司', content: '市场部、财务部、人力资bai源部、PMC部、品质部、技术部、市场部、财务部、人力资bai源部、PMC部、\n品质部du、技术部、市场部、财务部、人力资bai源部、PMC部、品质部du、技术部'},
				{ id: 11, name: '丙公司', content: '市场部、财务部、人力资bai源部、PMC部、品质部、技术部、市场部、财务部、人力资bai源部、PMC部、\n品质部du、技术部、市场部、财务部、人力资bai源部、PMC部、品质部du、技术部'},
				{ id: 12, name: '丁公司', content: '市场部、财务部、人力资bai源部、PMC部、品质部、技术部、市场部、财务部、人力资bai源部、PMC部、\n品质部du、技术部、市场部、财务部、人力资bai源部、PMC部、品质部du、技术部'},
				{ id: 13, name: 'a公司', content: '市场部、财务部、人力资bai源部、PMC部、品质部、技术部、市场部、财务部、人力资bai源部、PMC部、\n品质部du、技术部、市场部、财务部、人力资bai源部、PMC部、品质部du、技术部'},
				{ id: 14, name: 'b公司', content: '市场部、财务部、人力资bai源部、PMC部、品质部、技术部、市场部、财务部、人力资bai源部、PMC部、\n品质部du、技术部、市场部、财务部、人力资bai源部、PMC部、品质部du、技术部'},
				{ id: 15, name: 'c公司', content: '市场部、财务部、人力资bai源部、PMC部、品质部、技术部、市场部、财务部、人力资bai源部、PMC部、\n品质部du、技术部、市场部、财务部、人力资bai源部、PMC部、品质部du、技术部'},
				{ id: 16, name: 'd公司', content: '市场部、财务部、人力资bai源部、PMC部、品质部、技术部、市场部、财务部、人力资bai源部、PMC部、\n品质部du、技术部、市场部、财务部、人力资bai源部、PMC部、品质部du、技术部'},
				{ id: 17, name: '公司1', content: '市场部、财务部、人力资bai源部、PMC部、品质部、技术部、市场部、财务部、人力资bai源部、PMC部、\n品质部du、技术部、市场部、财务部、人力资bai源部、PMC部、品质部du、技术部'},
				{ id: 18, name: '公司2', content: '市场部、财务部、人力资bai源部、PMC部、品质部、技术部、市场部、财务部、人力资bai源部、PMC部、\n品质部du、技术部、市场部、财务部、人力资bai源部、PMC部、品质部du、技术部'},
				{ id: 19, name: '公司3', content: '市场部、财务部、人力资bai源部、PMC部、品质部、技术部、市场部、财务部、人力资bai源部、PMC部、\n品质部du、技术部、市场部、财务部、人力资bai源部、PMC部、品质部du、技术部'},
				{ id: 20, name: '公司4', content: '市场部、财务部、人力资bai源部、PMC部、品质部、技术部、市场部、财务部、人力资bai源部、PMC部、\n品质部du、技术部、市场部、财务部、人力资bai源部、PMC部、品质部du、技术部'}
			 ]
		}
		},
    dataAll3:{
		To1:[
			{
			name:'所在单位',
			is:'Select',
			children:[],
			sty:''
		},
		{
			name:'所在部门',
			is:'Select',
			children:[
				{
				value: '选项1',
				label: '黄金糕'
				}, {
				value: '选项2',
				label: '双皮奶'
				}, {
				value: '选项3',
				label: '蚵仔煎'
				}, {
				value: '选项4',
				label: '龙须面'
				}, {
				value: '选项5',
				label: '北京烤鸭'
				}
			],
			sty:''
		},
		{
			name:'姓名',
			is:'Input',
			children:[],
			sty:''
		},
		{
			name:'查询',
			is:'Button',
			children:[],
			sty:'primary'
		}
		],
		To2:[
		{
			name:'新增人员',
			is:'Button',
			sty:'primary'
		},
		{
			name:'一键操作',
			is:'Button',
			sty:'primary'
		},
		{
			name:'同步',
			is:'Button',
			sty:'warning'
		},
		{
			name:'删除',
			is:'Button',
			sty:'danger'
		}
		],
		To3:{
			tableTitle:[
				{lable:'照片',prop:'images'},
				{lable:'姓名',prop:'name'},
				{lable:'单位',prop:'unit'},
				{lable:'部门',prop:'section'},
				{lable:'工号',prop:'mark'},
				{lable:'状态',prop:'tongbu'},
				{lable:'授权管理',prop:'impower'},
			],
			tablecon:[
				{ id: 0, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', section: '年轻人不讲武德,大意了，没有闪，耗子尾汁',mark:'L0H0511', tongbu: 0 ,impower:'授权到期时间</br>2020.11.11'},
				{ id: 1, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', section: '年轻人不讲武德,大意了，没有闪，耗子尾汁', mark:'L0H0511', tongbu: 0 ,impower:'授权到期时间</br>2020.11.11'},
				{ id: 2, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', section: '年轻人不讲武德,大意了，没有闪，耗子尾汁', mark:'L0H0511', tongbu: 1 ,impower:'授权到期时间</br>2020.11.11'},
				{ id: 3, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', section: '年轻人不讲武德,大意了，没有闪，耗子尾汁', mark:'L0H0511', tongbu: 0 ,impower:'授权到期时间</br>2020.11.11'},
				{ id: 4, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', section: '年轻人不讲武德,大意了，没有闪，耗子尾汁', mark:'L0H0511', tongbu: 1 ,impower:'授权到期时间</br>2020.11.11'},
				{ id: 5, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', section: '年轻人不讲武德,大意了，没有闪，耗子尾汁', mark:'L0H0511', tongbu: 0 ,impower:'授权到期时间</br>2020.11.11'},
				{ id: 6, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', section: '年轻人不讲武德,大意了，没有闪，耗子尾汁', mark:'L0H0511', tongbu: 1 ,impower:'授权到期时间</br>2020.11.11'},
				{ id: 7, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', section: '年轻人不讲武德,大意了，没有闪，耗子尾汁', mark:'L0H0511', tongbu: 0 ,impower:'授权到期时间</br>2020.11.11'},
				{ id: 8, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', section: '年轻人不讲武德,大意了，没有闪，耗子尾汁', mark:'L0H0511', tongbu: 1 ,impower:'授权到期时间</br>2020.11.11'},
				{ id: 9, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', section: '年轻人不讲武德,大意了，没有闪，耗子尾汁', mark:'L0H0511', tongbu: 0 ,impower:'授权到期时间</br>2020.11.11'},
				{ id: 10, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', section: '年轻人不讲武德,大意了，没有闪，耗子尾汁', mark:'L0H0511', tongbu: 0 ,impower:'授权到期时间</br>2020.11.11'},
				{ id: 11, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', section: '年轻人不讲武德,大意了，没有闪，耗子尾汁', mark:'L0H0511', tongbu: 0 ,impower:'授权到期时间</br>2020.11.11'},
				{ id: 12, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', section: '年轻人不讲武德,大意了，没有闪，耗子尾汁', mark:'L0H0511', tongbu: 0 ,impower:'授权到期时间</br>2020.11.11'},
				{ id: 13, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', section: '年轻人不讲武德,大意了，没有闪，耗子尾汁', mark:'L0H0511', tongbu: 0,impower:'授权到期时间</br>2020.11.11' },
				{ id: 14, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', section: '年轻人不讲武德,大意了，没有闪，耗子尾汁', mark:'L0H0511', tongbu: 0 ,impower:'授权到期时间</br>2020.11.11'},
				{ id: 15, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', section: '年轻人不讲武德,大意了，没有闪，耗子尾汁', mark:'L0H0511', tongbu: 0 ,impower:'授权到期时间</br>2020.11.11'},
				{ id: 16, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', section: '年轻人不讲武德,大意了，没有闪，耗子尾汁', mark:'L0H0511', tongbu: 0 ,impower:'授权到期时间</br>2020.11.11'},
				{ id: 17, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', section: '年轻人不讲武德,大意了，没有闪，耗子尾汁',mark:'L0H0511', tongbu: 0 ,impower:'授权到期时间</br>2020.11.11'},
				{ id: 18, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', section: '年轻人不讲武德,大意了，没有闪，耗子尾汁', mark:'L0H0511', tongbu: 0 ,impower:'授权到期时间</br>2020.11.11'},
				{ id: 19, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', section: '年轻人不讲武德,大意了，没有闪，耗子尾汁', mark:'L0H0511', tongbu: 0 ,impower:'授权到期时间</br>2020.11.11'}
			],
		 },
		 },
	 dataAll4:{
		To1:[
			{
			name:'访客姓名',
			is:'Select',
			children:[],
			sty:''
		},
		{
			name:'所在单位',
			is:'Select',
			children:[
				{
				value: '选项1',
				label: '黄金糕'
				}, {
				value: '选项2',
				label: '双皮奶'
				}, {
				value: '选项3',
				label: '蚵仔煎'
				}, {
				value: '选项4',
				label: '龙须面'
				}, {
				value: '选项5',
				label: '北京烤鸭'
				}
			],
			sty:''
		},
		{
			name:'查询',
			is:'Button',
			children:[],
			sty:'primary'
		}
		],
		To2:[
		{
			name:'添加访客',
			is:'Button',
			sty:'primary'
		},
		{
			name:'全部选中',
			is:'Button',
			sty:'primary'
		},
		{
			name:'删除',
			is:'Button',
			sty:'danger'
		}
		],
		To3:{
			tableTitle:[
				{lable:'照片',prop:'images'},
				{lable:'姓名',prop:'name'},
				{lable:'单位',prop:'unit'},
				{lable:'身份证号',prop:'identity'},
				{lable:'车辆号码',prop:'plate'},
				{lable:'状态',prop:'tongbu'},
				{lable:'授权管理',prop:'impower'},
			],
			tablecon:[
				{ id: 0, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', identity:'1256485695865489',plate:'津A34567', tongbu:0,impower:'授权到期时间</br>2020.11.11'},
				{ id: 1, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', identity:'1256485695865489', plate:'津A34567', tongbu:0,impower:'授权到期时间</br>2020.11.11'},
				{ id: 2, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', identity:'1256485695865489', plate:'津A34567', tongbu:1,impower:'授权到期时间</br>2020.11.11'},
				{ id: 3, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', identity:'1256485695865489', plate:'津A34567', tongbu:0,impower:'授权到期时间</br>2020.11.11'},
				{ id: 4, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', identity:'1256485695865489', plate:'津A34567', tongbu:1,impower:'授权到期时间</br>2020.11.11'},
				{ id: 5, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', identity:'1256485695865489', plate:'津A34567', tongbu:0,impower:'授权到期时间</br>2020.11.11'},
				{ id: 6, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', identity:'1256485695865489', plate:'津A34567', tongbu:1,impower:'授权到期时间</br>2020.11.11'},
				{ id: 7, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', identity:'1256485695865489', plate:'津A34567', tongbu:0,impower:'授权到期时间</br>2020.11.11'},
				{ id: 8, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', identity:'1256485695865489', plate:'津A34567', tongbu:1,impower:'授权到期时间</br>2020.11.11'},
				{ id: 9, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', identity:'1256485695865489', plate:'津A34567', tongbu:0,impower:'授权到期时间</br>2020.11.11'},
				{ id: 10, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', identity:'1256485695865489', plate:'津A34567', tongbu:0,impower:'授权到期时间</br>2020.11.11'},
				{ id: 11, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', identity:'1256485695865489', plate:'津A34567', tongbu:0,impower:'授权到期时间</br>2020.11.11'},
				{ id: 12, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', identity:'1256485695865489', plate:'津A34567', tongbu:0,impower:'授权到期时间</br>2020.11.11'},
				{ id: 13, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', identity:'1256485695865489', plate:'津A34567', tongbu:0,impower:'授权到期时间</br>2020.11.11' },
				{ id: 14, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', identity:'1256485695865489', plate:'津A34567', tongbu:0,impower:'授权到期时间</br>2020.11.11'},
				{ id: 15, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', identity:'1256485695865489', plate:'津A34567', tongbu:0,impower:'授权到期时间</br>2020.11.11'},
				{ id: 16, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', identity:'1256485695865489', plate:'津A34567', tongbu:0,impower:'授权到期时间</br>2020.11.11'},
				{ id: 17, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', identity:'1256485695865489',plate:'津A34567', tongbu:0,impower:'授权到期时间</br>2020.11.11'},
				{ id: 18, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', identity:'1256485695865489', plate:'津A34567', tongbu:0,impower:'授权到期时间</br>2020.11.11'},
				{ id: 19, images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604894800321&di=71440b03b88f2d48641f61d3eb45d924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg', name: '马保国',unit:'混元太极掌门人', identity:'1256485695865489', plate:'津A34567', tongbu:0,impower:'授权到期时间</br>2020.11.11'}
			],
		 },
		 },
	 dataAll5:{
			To1:[
				{
				name:'受访单位',
				is:'Select',
				children:[],
				sty:''
			},
			{
				name:'开始日期',
				is:'Time',
				children:[],
				sty:''
			},
			{
				name:'查询',
				is:'Button',
				children:[],
				sty:'primary'
			}
			],
			To2:[
			{
				name:'生成报表',
				is:'Button',
				sty:'success'
			}
			],
			To3:{
				tableTitle:[
					{lable:'访客姓名',prop:'name'},
					{lable:'访问时间',prop:'time'},
					{lable:'访客单位',prop:'unit1'},
					{lable:'受访姓名',prop:'unit2'},
					{lable:'受访单位',prop:'unit3'},
					{lable:'受访部门',prop:'unit4'},
					{lable:'访问是由',prop:'unit5'},
				],
				tablecon:[
					{id:'0',name:'李某某',time:'2020-11-22 08-11-10-12',unit1:'XXX有限公司',unit2:'王晓旭',unit3:'航天给神舟科技发展有限公司',unit4:'综合楼',unit5:'受王母娘娘邀请参加蟠桃大会'},
					{id:'1',name:'李某某',time:'2020-11-22 08-11-10-12',unit1:'XXX有限公司',unit2:'王晓旭',unit3:'航天给神舟科技发展有限公司',unit4:'综合楼',unit5:'受王母娘娘邀请参加蟠桃大会'},
					{id:'2',name:'李某某',time:'2020-11-22 08-11-10-12',unit1:'XXX有限公司',unit2:'王晓旭',unit3:'航天给神舟科技发展有限公司',unit4:'综合楼',unit5:'受王母娘娘邀请参加蟠桃大会'},
					{id:'3',name:'李某某',time:'2020-11-22 08-11-10-12',unit1:'XXX有限公司',unit2:'王晓旭',unit3:'航天给神舟科技发展有限公司',unit4:'综合楼',unit5:'受王母娘娘邀请参加蟠桃大会'},
					{id:'4',name:'李某某',time:'2020-11-22 08-11-10-12',unit1:'XXX有限公司',unit2:'王晓旭',unit3:'航天给神舟科技发展有限公司',unit4:'综合楼',unit5:'受王母娘娘邀请参加蟠桃大会'},
					{id:'5',name:'李某某',time:'2020-11-22 08-11-10-12',unit1:'XXX有限公司',unit2:'王晓旭',unit3:'航天给神舟科技发展有限公司',unit4:'综合楼',unit5:'受王母娘娘邀请参加蟠桃大会'},
					{id:'6',name:'李某某',time:'2020-11-22 08-11-10-12',unit1:'XXX有限公司',unit2:'王晓旭',unit3:'航天给神舟科技发展有限公司',unit4:'综合楼',unit5:'受王母娘娘邀请参加蟠桃大会'},
					{id:'7',name:'李某某',time:'2020-11-22 08-11-10-12',unit1:'XXX有限公司',unit2:'王晓旭',unit3:'航天给神舟科技发展有限公司',unit4:'综合楼',unit5:'受王母娘娘邀请参加蟠桃大会'},
					{id:'8',name:'李某某',time:'2020-11-22 08-11-10-12',unit1:'XXX有限公司',unit2:'王晓旭',unit3:'航天给神舟科技发展有限公司',unit4:'综合楼',unit5:'受王母娘娘邀请参加蟠桃大会'},
					{id:'9',name:'李某某',time:'2020-11-22 08-11-10-12',unit1:'XXX有限公司',unit2:'王晓旭',unit3:'航天给神舟科技发展有限公司',unit4:'综合楼',unit5:'受王母娘娘邀请参加蟠桃大会'},
					{id:'10',name:'李某某',time:'2020-11-22 08-11-10-12',unit1:'XXX有限公司',unit2:'王晓旭',unit3:'航天给神舟科技发展有限公司',unit4:'综合楼',unit5:'受王母娘娘邀请参加蟠桃大会'},
					{id:'11',name:'李某某',time:'2020-11-22 08-11-10-12',unit1:'XXX有限公司',unit2:'王晓旭',unit3:'航天给神舟科技发展有限公司',unit4:'综合楼',unit5:'受王母娘娘邀请参加蟠桃大会'},
					{id:'12',name:'李某某',time:'2020-11-22 08-11-10-12',unit1:'XXX有限公司',unit2:'王晓旭',unit3:'航天给神舟科技发展有限公司',unit4:'综合楼',unit5:'受王母娘娘邀请参加蟠桃大会'},
					{id:'13',name:'李某某',time:'2020-11-22 08-11-10-12',unit1:'XXX有限公司',unit2:'王晓旭',unit3:'航天给神舟科技发展有限公司',unit4:'综合楼',unit5:'受王母娘娘邀请参加蟠桃大会'},
				],
			 },
	    },
		dataAll6:{
					To1:[
						{
						name:'门禁位置',
						is:'Select',
						children:[],
						sty:''
					},
					{
						name:'设备方向',
						is:'Select',
						children:[],
						sty:''
					},
					{
						name:'选择日期',
						is:'Time',
						children:[],
						sty:''
					},
					{
						name:'查询',
						is:'Button',
						children:[],
						sty:'primary'
					}
					],
					To2:[
					{
						name:'导出下载',
						is:'Button',
						sty:'success'
					}
					],
					To3:{
						tableTitle:[
							{lable:'姓名',prop:'name'},
							{lable:'日期',prop:'date'},
							{lable:'时间',prop:'time'},
							{lable:'门禁位置',prop:'mjwz'},
							{lable:'出行方向',prop:'fangxiang'},
							{lable:'人员属性',prop:'shuxing'}
						],
						tablecon:[
							{id:'0',name:'李某某',date:'2020-11-22',time:'08:11',mjwz:'综合楼',fangxiang:'入口',shuxing:'员工'},
							{id:'1',name:'李某某',date:'2020-11-22',time:'08:11',mjwz:'综合楼',fangxiang:'入口',shuxing:'员工'},
							{id:'2',name:'李某某',date:'2020-11-22',time:'08:11',mjwz:'综合楼',fangxiang:'入口',shuxing:'员工'},
							{id:'3',name:'李某某',date:'2020-11-22',time:'08:11',mjwz:'综合楼',fangxiang:'入口',shuxing:'员工'},
							{id:'4',name:'李某某',date:'2020-11-22',time:'08:11',mjwz:'综合楼',fangxiang:'入口',shuxing:'员工'},
							{id:'5',name:'李某某',date:'2020-11-22',time:'08:11',mjwz:'综合楼',fangxiang:'入口',shuxing:'员工'},
							{id:'6',name:'李某某',date:'2020-11-22',time:'08:11',mjwz:'综合楼',fangxiang:'入口',shuxing:'员工'},
							{id:'7',name:'李某某',date:'2020-11-22',time:'08:11',mjwz:'综合楼',fangxiang:'入口',shuxing:'员工'},
							{id:'8',name:'李某某',date:'2020-11-22',time:'08:11',mjwz:'综合楼',fangxiang:'入口',shuxing:'员工'},
							{id:'9',name:'李某某',date:'2020-11-22',time:'08:11',mjwz:'综合楼',fangxiang:'入口',shuxing:'员工'},
							{id:'10',name:'李某某',date:'2020-11-22',time:'08:11',mjwz:'综合楼',fangxiang:'入口',shuxing:'员工'},
							{id:'11',name:'李某某',date:'2020-11-22',time:'08:11',mjwz:'综合楼',fangxiang:'入口',shuxing:'员工'},
							{id:'12',name:'李某某',date:'2020-11-22',time:'08:11',mjwz:'综合楼',fangxiang:'入口',shuxing:'员工'},
							{id:'13',name:'李某某',date:'2020-11-22',time:'08:11',mjwz:'综合楼',fangxiang:'入口',shuxing:'员工'},
						],
					 },
		   }
	}
export default all;
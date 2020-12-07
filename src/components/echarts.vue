<template>
  <div class="Echarts">
    <div class="main" ref="lineCharts" style="width:100%;height:350px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
export default {
  name: 'Echarts',
  methods:{
	  myEcharts(){
		  // 基于准备好的dom，初始化echarts实例
		  var myChart = echarts.init(this.$refs.lineCharts);
		  // 指定图表的配置项和数据
		 myChart.setOption({
                title: {
                    text: '访客数量',
                    left: "0",
                    top: "20px",
                    textStyle: {
                    fontSize: 17,
                    color:'#FFF',
                    fontStyle: "normal",
                    fontWeight: "normal"
                    },
                },
                dataset: {},
                legend: {
                        data: ['航天神舟','51','航天中为'],
                        orient: "horizontal",
                        icon: "circle",
                        top: 20,
                        textStyle: {
                        color: "#09CCDE",
                        fontSize:'16px'
                        },
                        type: "plain",
                        show: true,
                        right: "20px"
                    },
               grid: {},
               tooltip:{
                   show: true,
                   showContent: true
               },
                xAxis: [{
                    type: "category",
                    name:"月份",
                    data: ["1", "2", "3", "4", "5", "6", "7","8","9","10","11","12"],
                    nameTextStyle:{
                        color:"#FFF",
                        verticalAlign: "top"
                    },
                    boundaryGap: false,
                    axisLine: {
                    show: false
                    },
                    axisTick: {
                        show: false
                        },
                    axisLabel: {
                    color: "#09CCDE"
                    }
                }],
                yAxis: [{
                    type: "value",
                     axisLine: {
                    show: false
                    },
                     axisTick: {
                        show: false
                        },
                    axisLabel: {
                    color: "#09CCDE"
                    }
                }],
                series: [{
                    name: "航天神舟",
                    type: "line",
                    barWidth: "60%",
                     areaStyle: {},
                    data: [1100, 52, 330, 211, 390, 330,10,0,1,50,300,30]
                },{
                    name: "51",
                    type: "line",
                    barWidth: "60%",
                     areaStyle: {},
                    data: [10, 52, 200, 334, 390, 330, 220,30,20,10,60,50]
                },{
                    name: "航天中为",
                    type: "line",
                    barWidth: "30%",
                     areaStyle: {},
                    data: [120, 622, 300, 334, 690, 330, 520,20,30,10,11,12]
                }]
            })
		
		  }
  },
  mounted() {
  	this.myEcharts();
  }
}
</script>

<style lang="scss">
    .Echarts{
       min-width:500px;
    }
</style>

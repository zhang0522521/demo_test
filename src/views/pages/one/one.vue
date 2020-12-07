<template>
  <div class="app_no1">
    <div class="xinxi">
        <div class="echarts_left">
          <div class="no1_Echarts">
            <Echarts></Echarts>
          </div>
        </div>
          <div class="list_right">
              <span>访客信息录入>></span>
              <div class="list_con">
                  <el-row :gutter="20">
                    <el-col :span="14">
                        <div class="list_picture">
                            <div class="head_img">
                                <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1991618523,1252131690&fm=26&gp=0.jpg" alt="">
                            </div>
                            <div class="head_list">
                                 <ul>
                                     <li><span>访客姓名：</span><span>张浩浩</span></li>
                                     <li><span>访客单位：</span><span>阿里巴巴集团</span></li>
                                     <li><span>身份证号：</span><span>12564875426455615</span></li>
                                     <li><span>联系电话：</span><span>13156894568</span></li>
                                 </ul>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <div class="list_message">
                             <ul>
                                <li><span>受访姓名:</span><span>张浩浩</span></li>
                                <li><span>访客单位：</span><span>航天神舟科技发展有限公司</span></li>
                                <li><span>受访部门：</span><span>产品研发部</span></li>
                                <li><span>员工工号：</span><span>L522202335</span></li>
                                <li><span>联系电话：</span><span>13125624589</span></li>
                            </ul>
                        </div>
                    </el-col>
                  </el-row>
                  <div class="time">
                       <div class="list_time">
                            <ul>
                                <li><span>预约日期：</span><span>2020.11.15</span></li>
                                <li><span>访客人数：</span><span>10</span></li>
                            </ul>
                        </div>
                        <div class="list_time1">
                             <ul>
                                <li><span>预约时间：</span><span>2020.11.15</span></li>
                                <li><span>访客人数：</span><span>10</span></li>
                            </ul>
                        </div>
                  </div>
              </div>
          </div>
          </div>
        <div class="tables">
            <div class="tablesTime">
               <span>预约实时记录</span> 
               <el-date-picker
               class="times"
                v-model="pricker.ker"
                type="datetimerange"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                value-format="yyyy-MM-dd HH:mm:ss"
                ></el-date-picker>
               <el-button type="primary" class="btns">筛选</el-button>
            </div>
            <div class="tables_a">
                <Table :tableData="tableData"></Table>
            </div>
        </div>
  </div>
</template>
<script>
import Echarts from "@/components/echarts.vue";
import Table from '@/components/table.vue';
export default {
  components: {
    Echarts,
    Table
  },
  
  data(){
    return{
         pricker:{
                ker:[]
            },
          tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          index:0,
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '21321',
          index:1,
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
           index:2,
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
           index:3,
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
           index:4,
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
           index:5,
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
           index:6,
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
           index:7,
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
           index:8,
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
           index:9,
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
           index:10,
          address: '上海市普陀区金沙江路 1516 弄'
        }]
        }
    }
}
</script>
<style lang="scss">

$bg: rgb(255, 255, 255, 0.1) !important;
.font{
font-size: 14px;
font-family: Adobe Heiti Std;
font-weight: normal;
color: #F3F3F3;
}
.app_no1 {
  width: 100%;
  height: 100%;
  .xinxi{
    display: flex;
    min-height: 200px;
   .echarts_left {
      border-radius: 10px;
      box-sizing: border-box;
      background: $bg;
      flex: 1;
    span {
       @extend .font;
    }
    .no1_Echarts {
    }
  }
  .list_right {
      margin-left: 17px;
       border-radius: 10px;
       background: $bg;
       padding: 25px 42px;
      box-sizing: border-box;
    span {
      @extend .font;
    }
    .list_con{
      margin-top: 35px;
      .list_picture{
         min-width: 380px;
         display: flex;
        .head_img{
            width: 84px;
            height: 110px;
            img{
              width: 100%;
              height: 100%;
            }
        }
        .head_list{
          min-width:250px;
          padding-left:20px;
          box-sizing: border-box;
           &>ul{
             width: 100%;
             li{
               width: 100%;
                height: 8px;
                font-family: Adobe Heiti Std;
                font-weight: normal;
                color: #FBFBFB;
                margin-bottom: 18px;
               span{
                 
               }
             }
           }
        }
      }
      .list_message{
          min-width:350px;
          box-sizing: border-box;
          flex: 1;
           &>ul{
             width: 100%;
             li{
               width: 100%;
                height: 8px;
                font-family: Adobe Heiti Std;
                font-weight: normal;
                color: #FBFBFB;
                margin-bottom: 18px;
               span{
                 
               }
             }
           }
      }
      .time{
        margin-top: 30px;
        width: 100%;
        display: flex;
        .list_time{
            ul{
              li{
                width: 100%;
                height: 16px;
                font-size: 14px;
                font-family: Adobe Heiti Std;
                font-weight: normal;
                color: #FBFBFB;
                margin-bottom: 22px;
              }
            }
        }
        .list_time1{
          margin-left:100px;
            ul{
              li{
                 width: 100%;
                height: 16px;
                font-size: 14px;
                font-family: Adobe Heiti Std;
                font-weight: normal;
                color: #FBFBFB;
                margin-bottom: 22px;
              }
            }
        }
      }
     
    }
  }
  }
  .tables_a{
    padding-bottom: 50px;
  }
  .tables {
      margin-top: 17px;
      border-radius: 10px;
      background: $bg;
      min-width: 1000px;
      padding: 21px 40px;
      box-sizing: border-box;
      .tablesTime{
        width: 100%;
        .times{
          background: #303a96;
          margin-left: 14px;
          margin-right: 14px;
          border:0;
          height: 32px;
          line-height: 32px;
          box-shadow: 0 0 1px 0.5px #FFF;
          margin-bottom: 10px;
          .el-range-input{
             background: #303a96;
             color: white;
          }
        }
        span{
         @extend .font;
       }
      }
       
  }
}
 .el-date-editor .el-range-separator{
   color: white;
   height: 32px;
   line-height: 32px;
 }
 .el-date-editor .el-range__icon{
   height: 32px;
   line-height: 32px;
 }
.btns{
   height: 35px;
  line-height: 0;
  padding: 12px 28px;
}
</style>
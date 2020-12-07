<template>
<el-container  class="App_container" ref="a">
  <el-aside width="230px" class="app_sider">
    <div class="app_logo">
         <div class="app_item">
            <img src="../assets/touxiang.png" alt="">
         </div>
        <div class="app_item1">
              <span class="app_x">系统管理员</span>
         <span>空间技术成果转化...</span>
        </div>
     </div>
     
      <SiderNav></SiderNav>  
  </el-aside>
  <el-container>
    <el-header class="App_header">
      <div class="h_logo">
            <img src="../assets/logo.png" alt="">
         </div>
         <span class="noto">智能访客预约管理系统</span>
    </el-header>
    <el-main class="App_Content"><router-view></router-view></el-main>
  </el-container>
</el-container>

</template>
<script>
import SiderNav from '@/components/sider_nav.vue';
export default {
  components:{
    SiderNav,
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },

};
</script>

<style lang="scss" scoped>
$color:rgb(255, 255, 255,.1) !important;
.body > .el-container{
  background: transparent;
}
.App_container {
    width: 100%;
     background-image: linear-gradient(to right top, #290A59, #0A3BB6);
     background-repeat: no-repeat;
     height: 100%;
     background-size: 100%;
     overflow: hidden;
}

.App_header {
   min-width: 800px;
    height: 89px !important;
    background-color:$color;
    position: relative;
    line-height: 89px;
      left: 0;
      top: 0;
    &::before{
         content: '';
         position: absolute;
         left: 0;
         top: 0;
         width: 2px;
         height: 100%;
         background-color:#FFF;
      }
      .h_logo{
        display: inline-block;
        margin-right: 39px;
        width: 34px;
        height: 42px;
        position: relative;
        left: 0;
        top: 15px;
        &::before{
          content: '';
          position: absolute;
          right: -20px;
          top: 0;
          height: 100%;
          width:3px;
          background-image: radial-gradient(#FFF,rgba(255,255,255,.1));
        }
      }
      .noto{
      display: inline-block;
      font-size: 27px;
      font-family: Adobe Heiti Std;
      font-weight: bold;
      color: #F3F3F3;
      
      }
      .h_logo>img{
        position: absolute;
        width: 100%;
        height: 100%;
      }
}
.app_sider {
    min-height:1000px;
    background-color: $color;
      .app_menu{
        background: rgba(255, 255, 255, 0.0);
         color: #F3F3F3;
         margin-top: 28px;
      }
      .seek{
        width: 166px;
        margin: 0 auto;
        height: 31px;
         background:rgba(255, 255, 255, 0.0) ;
        .app_input{
          background:rgba(255, 255, 255, 0.0) !important;
          border: 1px solid #FDFDFC;
          border-radius: 10px;
          
        }
        .el-input__inner{
          border: 0;
          height: 31px;
          line-height: 31px;
           caret-color: white;
           background:rgba(255, 255, 255, 0.0) !important;
        }
        .el-input__icon{
          height: 31px;
          line-height: 31px;
        }
      }
     .app_logo {
      height: 89px;
      background: rgba(255, 255, 255, 0.0);
      overflow: hidden;
      padding-top: 33px;
      margin-bottom: 38px;
      box-sizing: border-box;
      .app_item{
         width: 53px;
         height: 53px;
         float: left;
         margin-left: 25px;
         &>img{
           width: 100%;
           height: 100%;
         }
        
      }
      &>.app_item1{
        font-size: 13px;
        padding-left: 13px;
        box-sizing: border-box;;
        font-family: SourceHanSansCN;
        font-weight: 400;
         float: left;
        color: #F3F3F3;
        &>.app_x{
        font-size: 17px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: #F3F3F3;
        line-height: 37px;
        }
        &>span{
           display: block;
        }
      }
    }
}


.App_Content {
    padding: 18px;
    min-height: 700px;
    box-sizing: border-box;
}

</style>




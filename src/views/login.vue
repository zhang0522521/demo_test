<template>
  <div class="login">
    <div class="app_login">
    <div class="login-left">
      <el-form ref="form" :model="loginForm" class="formLogin" label-position="top" label-width="auto" >
        <span class="zyq">智能访客预约管理系统</span>
        <el-form-item label="用户名:">
          <el-input v-model="loginForm.account" placeholder="请输入您的用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input type="password" v-model="loginForm.pass" autocomplete="off" placeholder="请输入您的密码"></el-input>
        </el-form-item>
        <span class="forget">忘记密码</span>
        <el-form-item>
          <div class="boxBtn">
             <el-button class="btn" @click="loginUp">登 录</el-button>
          </div>
        </el-form-item>
        
      </el-form>
    </div>
    <div class="login-right">
        <img src="../assets/login1.png" alt="登录baner">
    </div>
  </div>
  </div>
</template>
<script >
//:disabled="formInline.user === '' || formInline.password === ''"
import {login} from '@/utils/api.js'
export default {
  data() {
    return {
      loginForm: {
        account:'' ||'HT01007',
        password:'' || '123456'
      }
    };
  },
  mounted(){
    document.onkeypress = (e)=> {
      var keycode = document.all ? event.keyCode : e.which;
      if (keycode == 13) {
        this.loginUp();// 登录方法名
         return false;
      }
    };
  },
  methods: {
    //登录
     loginUp(e) {
        let _this = this;
        if (this.loginForm.account === '' || this.loginForm.password === '') {
          this.$message.error('账户或密码不能为空');
        }else{
            login({account:'HT01007', password:'123456'}).then(res=>{
               console.log(res.data)
              _this.userToken = res.data.id;
              _this.$store.commit('setLoginInfo',{ Authorization: _this.userToken })
               _this.$router.push('/');
              _this.$message({
                message: '登录成功',
                type: 'success'
              });
            }).catch(error => {
          this.$message.error('账号或密码错误');
          console.log(error);
        });
        }
    },
  },
};
</script>
<style lang="scss" scoped> 

   .login{
       width: 100%;
      height: 100%;
      overflow: hidden;
      background: #ffffff;
      background-image: url('../assets/bg.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
   }
   .app_login{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center; /* 水平居中 */
      align-items: center;     /* 垂直居中 */
      .login-left{
       text-align: center;
       background: url('../assets/login.png');
       background-repeat: no-repeat;  
       border-radius: 20px;
       padding: 50px;
       box-sizing: border-box;
       .zyq{
        font-size: 36px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 48px;
        display: inline-block;
        position: relative;
        height: 58px;
        margin-bottom: 50px;
        &::before{
          content: '';
          width: 74px;
          height: 6px;
          background: #FFFFFF;
          border-radius: 3px;
          position: absolute;
          left: 0;
          bottom:0px;
        }
       }
       .formLogin{
          text-align: left;
          label{
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: 300;
            color: #AFB7E1;
          }
          input{
            background: transparent;
            border-left: 0;
            border-right: 0;
            border-top: 0;
            border-bottom: 1px solid #CCC;
            border-radius:0;
            color: white;
            padding: 0;
          }
       }
       .forget{
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: #99A5DB;
      text-align: right;
      display: block;
      cursor: pointer;
       }
       .boxBtn{
         text-align: center;
          .btn{
         background: #547BD5;
         border: 0px;
         padding: 13px 64px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        color: #FFFFFF;
        font-size: 25px;
        border-radius: 25px;
       
        &:active{
           box-shadow: 0px 11px 14px 2px rgba(84, 123, 213, 0.35);
        }
       }
       }
       
     }
     .login-right{
          margin-left: 150px;
          width: 530px;
          height: 530px;
          img{
            width: 100%;
          }
     }
   }
   
</style>

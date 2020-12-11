<template>
  <div id="app" v-cloak>
     <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  watch: {
  },
   created(){
    var _this=this;
    window.onload = function(){
      if(!window.sessionStorage["tempFlag"]){
            localStorage.removeItem("Authorization");
          _this.$router.push({name:'login'})
          
      }else{
        if (!localStorage.Authorization) {
          _this.$router.push({name:'login'})
        }
      }
    }
    window.onunload = function (){
      window.sessionStorage["tempFlag"] = true;
    }
    window.onbeforeunload = function (){
      window.sessionStorage["tempFlag"] = true; 
    }
  },
  watch:{
    '$route'(a,b){
      if(window.localStorage.getItem('Authorization')!==this.$store.state.Authorization){
          this.$router.push('/');
           this.$message({
          message: '登陆异常，请重新登录！',
          type: 'warning'
        });
      }
    }
  }
}
</script>
<style lang="scss">
*{
  padding: 0;margin: 0;
  list-style: none;
}
[v-cloak]{

    display:none;

      }
html,body,#app{
  width: 100%;
  height: 100%;
}
</style>

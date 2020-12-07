<template>
   <div class="app_to">
        <ul class="app_ul" v-for="(item,index) in data" :key="index">
			<router-link style="item_a" :to="{path:item.path,query:{id:item.id,value:item.value}}" active-class="active" :exact="item.nameTo == 'home'">
				<li :class="{'app_li':true,active:item.id == $route.query.id}" @click="click(item.id,item)">
				    <span :style="{display:'block'}">
				      <i :class="'p'+[item.value]"></i>
				      <span class="app_a" style="item_a">{{item.name}}</span>   
				    </span>
				 </li>
			</router-link>
			<template  v-for="(item1,index1) in item.children" >
				<ul class="item1_ul" :key="index1" v-show="item1.value == $route.query.value ||item.value==$route.query.value">
					<router-link class="item1_a" :to="{path:item1.path,query:{id:item1.id,value:item1.value}}" active-class="item1_active" exact>
						<li :class="{'item1_li':true}" @click="click1()">
							<span>
								<i class="p"></i>
								<span class="item1_span">{{item1.name}}</span> 
							</span>
						</li>
					</router-link>
				</ul>
			</template>
            
        </ul>
     </div>
</template>
<script>
export default {
    props:['data'],
    data(){
        return {
           istrue:false,
           b:'',
		   a:0
        }
    },
	computed:{
	},
    mounted(){
		if(!this.$route.query.value){
			console.log(11)
			this.$router.push({path:'/',query:{id:1,value:'1'}})
		}else{
			this.a=this.$route.query.id;
		}
    },
    methods: {
        click(a,b){
            //点击一个目录其他目录隐藏
		    this.a=a;
        },
        click1(){
        }
    },
}
</script>
<style lang="scss">
    $bg:rgb(0,0,0,0);
   $color:#09CCDE !important;
  .app_nav{
    width: 100%;
    background:$bg;
    margin-top: 28px;
    .app_to{
        .app_ul{
            width: 100%;
            padding-left: 20px;
            box-sizing: border-box;
            .app_li{
                cursor: pointer;
				&>.item_a{
					display: block;
				}
                .app_a{
                    display: inline-block;
                    font-size: 16px;
                    font-family: Adobe Heiti Std;
                    font-weight: normal;
                    color: #FFFFFF;
                    text-decoration: none;
                    margin-top: 20px;
                     transition: border-color .3s,background-color .3s,color .3s;
                }
                &:hover{
                   
                    transition: border-color .3s,background-color .3s,color .3s;
                     .app_a{
                         color: #09CCDE;
                     }
                    .p5{
                    background-image: url('../../assets/b5.png');
                    }
                    .p4{
                        background-image: url('../../assets/b3.png');
                    }
                    .p3{
                        background-image:url('../../assets/b1.png');
                    }
                    .p1{
                        background-image: url('../../assets/b4.png');
                    }
                    .p2{
                        background-image: url('../../assets/b2.png');
                    }

                }
            }
        }
    }
  }
  .active{
      span{
          color:$color;
      }
       .p5{
        background-image: url('../../assets/b5.png');
        }
        .p4{
            background-image: url('../../assets/b3.png');
        }
        .p3{
            background-image:url('../../assets/b1.png');
        }
        .p1{
            background-image: url('../../assets/b4.png');
        }
        .p2{
            background-image: url('../../assets/b2.png');
        }
  }
  .item1_active{
     border-right:3px solid $color;
  }
  .item1_ul{
      widows: 100%;
      transition: border-color .3s,background-color .3s,color .3s;
	  .item1_a{
		  display: block;
	  }
      .item1_li{
          color: #09CCDE;
          height: 16px;
		  cursor: pointer;
          margin-top: 16px;
           transition: border-color .3s,background-color .3s,color .3s;
          .item1_span{
            display: inline-block;
            font-size: 16px;
			cursor: pointer;
            font-family: Adobe Heiti Std;
            font-weight: normal;
            color: #09CCDE;
            text-decoration: none;
           transition: border-color .3s,background-color .3s,color .3s;
          }
      }
  }
.p{
     transition: border-color .3s,background-color .3s,color .3s;
    width: 25px;
    height: 25px;
    display: inline-block;
    background-size:100%;
    vertical-align:middle;
    margin-right: 10px;
}
.p1{
  @extend .p;
   background-image: url('../../assets/b41.png');
  }
.p3{
  @extend .p;
 background-image: url('../../assets/b11.png');
}
.p4{
  @extend .p;
 background-image: url('../../assets/b31.png');
}
.p5{
  @extend .p;
 background-image: url('../../assets/b51.png');
}
.p2{
  @extend .p;
 background-image: url('../../assets/b21.png');
}
</style>
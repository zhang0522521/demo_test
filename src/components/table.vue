<template>
    <div class="app_table">
          <el-table
            :data="tableData"
            :header-row-class-name="headSty"
            :cell-class-name="cellsty"
            :row-class-name="cellsty"
            @cell-dblclick="updbclick"
            style="width: 100%">
            <el-table-column
             align="center"
            prop="date"
            label="日期"
            min-width="50"
           >
           <template slot-scope="scope">
              
                <span v-if="scope.row.index === tabClickIndex && tabClickLabel === '日期'">
                <el-input v-model="scope.row.date" maxlength="300" placeholder="请输入日期" size="mini" @blur="inputBlur"/>
                </span>
                <span v-else>{{ scope.row.date }}</span>
            </template>
            </el-table-column>
            <el-table-column
             align="center"
            prop="name"
            label="姓名"
            min-width="50"
            >
              <template slot-scope="scope">
                <span v-if="scope.row.index === tabClickIndex && tabClickLabel === '姓名'">
                <el-input v-model="scope.row.name" maxlength="300" placeholder="请输入姓名" size="mini" @blur="inputBlur"/>
                </span>
                <span v-else>{{ scope.row.name }}</span>
            </template>
            </el-table-column>
            <el-table-column
             align="center"
            prop="address"
            min-width="50"
            label="地址">
             <template slot-scope="scope">
                <span v-if="scope.row.index === tabClickIndex && tabClickLabel === '地址'">
                <el-input v-model="scope.row.address" maxlength="300" placeholder="请输入地址" size="mini" @blur="inputBlur"/>
                </span>
                <span v-else>{{ scope.row.address}}</span>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    props:['tableData'],
    data(){
        return{
             tabClickIndex: null, // 点击的单元格
             tabClickLabel: '', 
        }
    },
    methods: {
        updbclick(row, column, cell, event){
            console.log(row)
            console.log(column)
            console.log(cell)
            console.log(this.tabClickIndex)
            switch (column.label) {
                case '日期':
                this.tabClickIndex = row.index
                this.tabClickLabel = column.label
                break
                case '姓名':
                this.tabClickIndex = row.index
                this.tabClickLabel = column.label
                break
                case '地址':
                this.tabClickIndex = row.index
                this.tabClickLabel = column.label
                break
                default: return
            }
        },
        cellsty({ row, column, rowIndex, columnIndex }){
           
            
        },
        headSty({row, rowIndex}){
            return 'headSty'
        },
        inputBlur(row, event, column) {
        this.tabClickIndex = null
        this.tabClickLabel = ''
        },
    },
}
</script>
<style lang="scss">
    
</style>
<style lang="scss">
.headSty{
background:#1d3381 !important;
color:#09CCDE;
text-align: center;
font-family: Adobe Heiti Std;
font-weight: normal;
}
$color:rgb(0,0,0,0) !important;
.app_table{
    box-shadow: 0 0 1px 0px #dcdce4;
}
 .el-table{
  /* 表格字体颜色 */
  color:#FFFFFF;
  /* 表格边框颜色 */
  /* border: 0.5px solid #758a99; */
 /* 表格内背景颜色 */
 }
 .el-table--enable-row-hover .el-table__body tr:hover>td{
background-color:transparent !important;
color: aqua;
cursor: pointer;
}
 .el-table th, .el-table tr,.el-table td{
 border: 0;
 background-color: transparent;
 }
 /* 使表格背景透明 */
.el-table, .el-table__expanded-cell {
    background-color: transparent;
}
.el-table td, .el-table th.is-leaf{
    border: none;
}
el-table th, .el-table tr {
    background-color: transparent;
}
 /* 删除表格下横线 */
 .el-table::before {
 left: 0;
 bottom: 0;
 width: 100%;
 height: 0px;
 }
</style>
<template>
 
<el-row :gutter="20" class="home">
  <el-col :span="8" style="margin-top:20px">
            <el-card class="box-card" shadow="hover">
                <div  class="user">
                    <img :src="useiamg" class="yonghu">
                    <div class="userinfo">
                        <p class="username">Scott</p>
                        <p class="uesrass">炒鸡管理员</p>
                    </div>
                    <div class="login-info">
                        <p >上次登陆时间：<span class="juli">2022-2-2</span></p>
                        <p>上次登陆地点：<span class="juli">珠海</span></p>

                    </div>
                </div>
            </el-card >

            <el-card style="margin-top:40px; height:460px" >
              <el-table
                  :data="totableData"
                  style="width: 100%">
                  <el-table-column
                    v-for="(val,key) in tableLabel"
                    :key="key"
                    :prop="key"
                    :label="val"
                    >
                  </el-table-column>
                </el-table>
            </el-card>
</el-col>

  <el-col :span="16" style="margin-top:20px">
  <div  >
    <el-card v-for="item in countDate" 
    :key="item.name"
    :body-style="{display:'flex',padding:0}"
    class="tocard">
      <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
      <div >
        <p>¥{{item.value}}</p>
        <p>{{item.name}}</p>
      </div>
      
    </el-card>
    
    <el-card class="ditu">
      <div style="height:280px;width: 1000px;" ref="echarts"></div>
    </el-card>
    <div class="qita">
      <el-card class="qita1" >
        <div style="height:240px;width: 500px;" ref="dayEcharts"></div>
      </el-card>
      <el-card class="qita2">
        <div style="height:240px;width: 500px;" ref="videoEcharts"></div>
      </el-card>
    </div>
  </div>
  </el-col>
</el-row>
 
</template>

<script>
import { getData } from '../api/data'
import * as echarts from 'echarts'

export default {
    name:'vueUser',
    data() {
        return {
            useiamg:require('../src/assets/images/1000.jpg'),
            totableData: [
             {
            name: '苹果',
            todaybuy: '100',
            monthbuy:'300',
            totalbuy:'800'

          }, {
             name: 'VIVO',
            todaybuy: '100',
            monthbuy:'300',
            totalbuy:'800'
          }, {
             name: '小米',
            todaybuy: '100',
            monthbuy:'300',
            totalbuy:'800'
          }, {
            name: 'oppo',
            todaybuy: '100',
            monthbuy:'300',
            totalbuy:'800'
          },{
             name: '三星',
            todaybuy: '100',
            monthbuy:'300',
            totalbuy:'800'
          },{
             name: '魅族',
            todaybuy: '100',
            monthbuy:'300',
            totalbuy:'800'
          }
          ],
          tableLabel:{
            name: '产品',
            todaybuy: '今日购买',
            monthbuy:'本月购买',
            totalbuy:'总购买'
          },
          countDate:[
            {
              name:'今日支付订单',
              value:453,
              icon:'success',
              color:'#2ec7c9'
            },
             {
              name:'今日收藏订单',
              value:156,
              icon:'star-on',
              color:'#ffb980'
            },
             {
              name:'今日未支付订单',
              value:26,
              icon:'s-goods',
              color:'#5a61ef'
            },
             {
              name:'本月支付订单',
              value:999,
              icon:'success',
              color:'#2ec7c9'
            },
            {
              name:'本月收藏订单',
              value:1356,
              icon:'star-on',
              color:'#ffb980'
            },
             {
              name:'本月未支付订单',
              value:2666,
              icon:'s-goods',
              color:'#5a61ef'
            },

          ]
        } 
    },
    mounted(){
       getData().then(res=>{
         const {code,data} =res.data
         if(code === 20000){
           this.tableData =data.tableData
           const order = data.orderData
           const xData = order.date
           const keyArray = Object.keys(order.data[0])
           const series = []
           keyArray.forEach(key=>{
             series.push({
               name:key,
               data:order.data.map(item => item[key]),
               type:'line'
             })
           })
           const option ={
             xAxis: {
               data:xData
             },
             yAxis:{},
             legend:{
               data:keyArray
             },
             series
           }
          const E = echarts.init(this.$refs.echarts)
         
          E.setOption(option)
          //柱状图
          const dayOption ={
              legend: {
              textStyle:{
              color:'#333',
            },
            },
            grid:{
              left:'20%',
            },
            tooltip: {
              trigger:'axis',
            },
              xAxis: {
                type:'category',
                data: data.dayData.map(item => item.date),
                axisLine:{
                  lineStyle:{
                  color:'#17b3a3',
                  },
                },
                axisLabel:{
                  interval:0,
                  color:'#333'
                },
              },
              yAxis: [
                {
                  type:"value",
                  axisLine:{
                  lineStyle:{
                    color:'#17b3a3',
                  },
                },
              }],
              color:['#2ec7c9','#b6a2de'],
              series: [
                {
                  name:'新增用户',
                  data:data.dayData.map(item =>item.new),
                  type:'bar'
                },
                {
                  name:'活跃用户',
                  data:data.dayData.map(item =>item.action),
                  type:'bar'
                },
              ]
            }

         
        const U = echarts.init(this.$refs.dayEcharts)
        U.setOption(dayOption)
         console.log(res)
         console.log(data.dayData)
        //饼状图
        const  videoOption = {
          tooltip :{
            tergger: "item",
          },
          color:[
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#3ed1cf",
          ],
          series:[ 
            {
              data:data.videoData,
              type:'pie'
            }
          ]
        }
        const F = echarts.init(this.$refs.videoEcharts)
        F.setOption(videoOption)
         }
      })
    }

}

</script>

<style scoped>
.yonghu{
   
    height: 100px;
    width: 100px;
    border-radius: 50%;
    clear: both;
}
.userinfo{
    float:right;
    margin-right: 250px;
    font-size: 20px;
}
.login-info{
    border-top: 1px solid #000;
}
.juli{
    margin-left: 20px;
}

.icon {
  width: 90px;
  text-align: center;
  line-height: 90px;
  font-size: 30px ;
  margin-right: 15px;
  color:#fff;
}
.tocard{
  margin: 10px;
  width: 345px;
  float: left;
  font-size: 18px ;
  
}
.ditu {
  margin-left: 10px;
  height:280px;
  width: 1050px;
}
.qita{
  margin-left: 10px;
   margin-top: 20px;
  display: flex;
  height:260px;
  width: 1050px;
}
.qita1 {
  
  margin-right: 10px;
  height:260px;
  width: 520px;
}
.qita2 {
 
  height:260px;
  width: 520px;
}
</style>
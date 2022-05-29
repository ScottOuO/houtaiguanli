import  Mock  from 'mockjs';

let List =[]
export default {
    getStatisticalData:() => {
        //Mock.Random.float 产生随机数100-8000保留小数 最小0位 最大0位
        for (let i =0;i<7;i++){
       List.push(
            Mock.mock({
                苹果:Mock.Random.float(100,8000,0,0),
                VIVO:Mock.Random.float(100,8000,0,0),
                oppo:Mock.Random.float(100,8000,0,0),
                魅族:Mock.Random.float(100,8000,0,0),
                三星:Mock.Random.float(100,8000,0,0),
                小米:Mock.Random.float(100,8000,0,0),
            })
        )}
        return {
        code : 20000,
        data:{
            //饼图
            videoData:[
                {
                    name:'小米',
                    value:2999
                },
                {
                    name:'苹果',
                    value:5999
                },
                {
                    name:'VIVO',
                    value:1500
                },
                {
                    name:'oppo',
                    value:1999
                },
                {
                    name:'魅族',
                    value:2200
                },
                {
                    name:'三星',
                    value:2999
                },
              
            ],
            //柱状图
            dayData:[
                {
                    date:'周一',
                    new:5,
                    action:200
                },
                {
                    date:'周二',
                    new:10,
                    action:500
                },{
                    date:'周三',
                    new:12,
                    action:500
                },{
                    date:'周四',
                    new:60,
                    action:800
                },{
                    date:'周五',
                    new:65,
                    action:900
                },{
                    date:'周六',
                    new:75,
                    action:1000
                },{
                    date:'周日',
                    new:80,
                    action:1000
                }
            ],
            //折线图
            orderData:{
                date:['20191001','20191002','20191003','20191004','20191005','20191006','20191007',],
                data:List
            },
            tabelData:[
                {
                    name:'oppo',
                    monthBuy:500,
                    todayBuy:3500,
                    totalBuy:22000
                },
                {
                    name:'VIVO',
                    monthBuy:100,
                    todayBuy:3200,
                    totalBuy:12000
                },
                {
                    name:'小米',
                    monthBuy:700,
                    todayBuy:6000,
                    totalBuy:40000
                },
                {
                    name:'苹果',
                    monthBuy:500,
                    todayBuy:3900,
                    totalBuy:36000
                },
                {
                    name:'三星',
                    monthBuy:400,
                    todayBuy:2400,
                    totalBuy:1900
                },
                {
                    name:'魅族',
                    monthBuy:600,
                    todayBuy:4500,
                    totalBuy:20000
                },

            ]
        },
    
        }
 
    }
    
}
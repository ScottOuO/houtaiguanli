<template>
    <header>
     <div class="ebox">
        <el-button  @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
        <el-breadcrumb  separator="/" >
            <el-breadcrumb-item  v-for="item in tags" :key="item.path" :to="{ path: item.path }">
            {{item.label}}</el-breadcrumb-item>   
        </el-breadcrumb>
     </div>
    <div >
        <el-dropdown>
        <span>
            <img class="yonghu" :src="ueriamg" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
    </div>
    </header>

</template>

<script >
import { mapState } from 'vuex'
export default{
    name:'CommonHeadr',
    data() {
        return {
            ueriamg:require('../assets/images/1000.jpg')
        }
    },
    methods:{
        handleMenu(){
           
           this.$store.commit('collapseMenu')
        }
    },
    computed:{
        ...mapState({
            tags:state =>state.tab.tabsList
        })
    }
}

</script>

<style  scoped>


header{
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    
    

}

 .el-button{
    float: left;
    
    margin-right: 20px;
  
    }
.el-breadcrumb{
    float: left;
    line-height: 30px;
    font: 1.5em sans-serif;
    background-color: #fff;
    
}


 .yonghu{
     margin-right: 20px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
}



</style>
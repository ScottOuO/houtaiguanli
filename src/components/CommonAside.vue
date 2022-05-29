<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    active-text-color="#ffd04b"
    text-color="#fff" 
    background-color="#545c64"
  >
  <h3>{{isCollapse?'后台':'通用后台管理系统'}}</h3>
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu  v-for="item in hasChildren" :index="item.path+''" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>

      <el-menu-item-group  v-for="subItem in item.children"  :key="subItem.path">
        <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">
        <i class="el-icon-setting"></i>
        {{subItem.label}}
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  height: 100%;
  border: none;
}
h3{
  
  color: #fff;
  text-align: center;
  line-height: 48px;
  
}
</style>

<script>
export default {
  data() {
    return {
   
      menu:[
        {
          path:'/',
          name:'home',
          label:'首页',
          icon:'s-home',
          url:'Home/Home'
        },
        {
          path:'/mall',
          name:'mall',
          label:'商品管理',
          icon:'video-play',
          url:'MallManage/MallMassage'
        },
         {
          path:'/myuser',
          name:'myuser',
          label:'用户管理',
          icon:'user',
          url:'UserManage/UserMassage'
        },
        {
          label:'其他',
          icon:'location',
          children:[
            {
                path:'/page1',
                name:'page1',
                label:'页面1',
                icon:'seting',
                url:'Other/PageOne'
            },
            {
                path:'/page2',
                name:'page2',
                label:'页面2',
                icon:'seting',
                url:'Other/PageTwo'
            }
          ]
        
        },
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
      this.$router.push({
        name:item.name
      })
      this.$store.commit('selectMUNE',item)
    },
  },
  computed:{
    noChildren(){
      return this.menu.filter(item =>!item.children)
    },
    hasChildren(){
      return this.menu.filter(item =>item.children)
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse 
    }
  }
};
</script>
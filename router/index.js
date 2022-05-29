import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'vueMain',
        component:() => import("../views/Main.vue"),
        children:[
            {
                path:'/',
                name:'home',
                component:() => import("../views/Home.vue")

            },
            {
                path: '/myuser',
                name: 'myuser',
                component:() => import("../views/MyUser.vue")
            },
            {
                path:'/mall',
                name:'mall',
                component:() => import("../views/Mall.vue")
            },
            {
                path:'/page1',
                name:'page1',
                component:() => import("../views/Other/PageOne.vue")
            },
            {
                path:'/page2',
                name:'page2',
                component:() => import("../views/Other/PageTwo.vue")
            },
        ]
    },
   
]

const router = new VueRouter({
    mode: 'history',
    routes
})
export default router
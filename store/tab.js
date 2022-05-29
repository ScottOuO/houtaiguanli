export default{
    state:{
        isCollapse:false,
        tabsList:[
            {
                path:'/',
                name:'home',
                label:'首页',
                icon:'home',
            }
        ],
        currentMune:null
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        selectMUNE(state,val){
            if(val.name !== 'home'){
                state.currentMune = val
                const rusult =  state.tabsList.findIndex(item => item.name ===val.name)
                if(rusult === -1){
                    state.tabsList.push(val)
                }
            }else{
                state.currentMune = null
            }
        },
        closeTag(state,val){
            const rusult = state.tabsList.findIndex(item => item.name ===val.name)
            state.tabsList.splice(rusult,1)

        }
    },
    
    
}
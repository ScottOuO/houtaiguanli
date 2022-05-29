<template>
  <div class="tag">
    <el-tag
        size="small"
        v-for="(tag,index) in tags"
        :key="tag.name"
        :closable="tag.name !=='home'"
        :effect="$route.name === tag.name?'dark':'plain'"
        @click="clickMune(tag)"
        @close="handleClose(tag,index)"
        >
        {{tag.label}}
    </el-tag>

  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
     name:'CommonTag',
    data() {
        return {
            
        }
    },
    computed:{
        ...mapState({
            tags:state => state.tab.tabsList
        })
    },
    methods: {
      ...mapMutations({
        close:'closeTag'
      }),
      clickMune(item){
        this.$router.push({
          name:item.name
        })

        },

      handleClose(tag,index) {
        this.close(tag)
        const length = this.tags.length -1
        if(tag.name !== this.$route.name){
          return
        }
        if(index === length){
          this.$router.push({
            name: this.tags[length-1].name
          })
        }else{
          this.$router.push({
            name: this.tags[index-1].name
          })
        }
      },
    }
}
</script>

<style  scoped>
.tag{ 
  padding: 15px;
}
.el-tag {
  margin-right: 15px;

}
.el-tag:hover {
  cursor: pointer;

}
</style>>




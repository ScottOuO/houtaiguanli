/<template>
  <el-form ref="form" :model="form" label-width="100px" :inline="inline">
        <el-form-item v-for="(item,index) in formLabel" :key="item.label" :label="item.label">
            
            <el-input 
                v-if="item.type === 'input'"
                :placeholder="'请输入'+item.label"
                v-model="localForm[item.value+index]"
            ></el-input>

            <el-switch v-if="item.type === 'switch'" v-model="localForm[item.model+index]"></el-switch>

            <el-date-picker 
            v-if="item.type === 'date'" 
            type="date" 
            value-format="YYYY-MM-DD"
            placeholder="选择日期" 
            v-model="localForm[item.model+index]" 
            ></el-date-picker>

            <el-select 
            v-if="item.type === 'select'" 
            v-model="localForm[item.model]" 
            placeholder="请选择">
                <el-option 
                v-for="item in item.opts"
                :key="item.value"
                :label="item.name" 
                :value="item.value"
                ></el-option>
        </el-select>
   </el-form-item>
   <el-form-item><slot></slot></el-form-item>
  </el-form>
</template>

<script>
export default {
    name:'CommonForm',
    props:{
            formLabel:Array,
            form:Object,
            inline:Boolean
        },
    data(){

        return{
                localForm:this.form
                }
    },
    methods:{ 
        
    },
    watch: {
        form: {
        handler(val) {
                this.localForm =val
            },
            immediate: true,
            deep: true,
        },
    }

}
</script>

<style>

</style>
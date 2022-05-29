<template>
 <div>
    <el-dialog
    :title="operatetype ==='add'? '新增用户':'更新用户'"
    :visible.sync="isShow">
         <common-form
         :formLabel="operateFormLabel"
         :form="operateForm"
         :inline="true"
         ref="form"
         ></common-form>
         <div slot="footer" class="dialog-footer">
             <el-button @click="isShow=flase">取消</el-button>
             <el-button type="primary" @click="confirm">确定</el-button>
         </div>
    </el-dialog>
   <div class="manage-header">
       <el-button type="primary" @click="addUser"> +新增</el-button>
       <common-form
         :formLabel="formLabel"
         :form="searchform"
         :inline="true"
         ref="form"
         >  
         <el-button type="primary"  @click="getList">搜索</el-button>
         </common-form>
        

   </div>
        <common-table
        :table-data="tableData"
        :table-label="tableLabel"
        :config="config"
        @changPage="getList()"
        @edit="editUser"
        @del="deleteUser"
        ></common-table>
 </div>
</template>
<script>
import CommonForm from '@/components/CommonForm.vue'
import CommonTable from '../src/components/CommonTable.vue'
import { getUser } from '../api/data'
export default {
    name:'MyUser',
    components:{ 
       CommonTable,
        CommonForm
    },
    data() {
        return {
            operatetype:'add',
            isShow:false,
            operateFormLabel:[
                {
                    mobel:'name',
                    label:'姓名',
                    type:'input',
                    value:''
                },
                {
                    mobel:'age',
                    label:'年龄',
                    type:'input',
                    value:''
                },
                {
                    mobel:'sex',
                    label:'性别',
                    type:'select',
                    opts:[
                        {
                            label:'男',
                            value:'男'
                        },
                        {
                            label:'女',
                            value:'女'
                        }
                    ]
                },
                {
                    mobel:'birth',
                    label:'出生日期',
                    type:'date',
                    value:''
                },
                {
                    mobel:'addr',
                    label:'地址',
                    type:'input',
                    value:''
                },
            ],
            operateForm:{
                name:'',
                addr:'',
                age:'',
                birth:'',
                sex:''
            },
            formLabel:[
                {
                    mobel:'keyword',
                    label:'',
                    type:'input'
                }

            ],
            searchform:{
                keyword:'',
            },
            tableData:[],
            tableLabel:[ 
                {
                    prop:'name',
                    label:'姓名',
                },
                {
                    prop:'age',
                    label:'年龄',
                },
                {
                    prop:'sex',
                    label:'性别',
                },
                {
                    prop:'birth',
                    label:'出生日期',
                    width:200
                },
                {
                    prop:'addr',
                    label:'地址',
                    width:320
                },
                
            ],
            config:{ 
                page:1,
                total:30,
            }

            
        }
    },
    methods:{ 
        confirm(){
            if(this.operateType ==='edit'){
                this.$http.post('/user/edit',this.operateForm).then(res =>{
                    this.isShow = false
                    console.log(res)
                    this.getList()

                })
            }else{
                this.$http.post('/user/add',this.operateForm).then(res =>{
                    this.isShow = false
                    console.log(res)
                    this.getList()

            })
            }
        },
        addUser(){
            this.isShow =true
            this.operatetype='add'
            this.operateForm ={
                name:'',
                addr:'',
                age:'',
                birth:'',
                sex:''
            }
        },
        getList(name =' '){ 
            this.config.loading = true
            this.config.loading = true
                name?(this.config.page = 1):''
            getUser({
                page:this.config.page,
                name
            }).then(res =>{
                res.data.list.map(item =>{
                    item.sexlabel = item.sex ===0?"女":"男"
                    return item
                })
                this.config.total = res.count 
                this.config.loading = false
            })

        },
        editUser(row){ 
            this.operatetype = 'edit'
            this.isShow =true
            this.operateForm = row

        },
        deleteUser(row){
            this.$confirm("此操作将永久删除文件，是否继续？","提示",{
                confirmButtonText:"确定",
                cancelButtonText:"取消",
                type:'warning'
            }).then(()=>{
                const id =row.id
                this.$http.get("user/del"),{ 
                    params:{ id}
                }
            }).then(()=>{
                this.$message({
                    type:'success',
                    message:'清除成功'
                })
                this.getList()
            })

        }

    },
    created(){
        this.getList()
    }

}

</script>

<style scoped>
.manage-header{ 
    display: flex;
    justify-content: space-between;
    align-items: center;

}
</style>

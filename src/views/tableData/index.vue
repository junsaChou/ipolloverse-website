<template>
   <div class="ipo_main">
    <div class="con">
      <el-table :data="tableData" border style="width: 100%"  height="80vh">
        <el-table-column prop="Id" label="Id" width="80"  />
        <el-table-column prop="NodeAddr" label="Node Address" width="160" />
        <el-table-column prop="OrgName" label="organization Name" width="160" />
        <el-table-column prop="NodeName" label="Node Name" width="160" />
        <el-table-column prop="Gpu" label="GUP Info" width="100"/>
        <el-table-column prop="Cpu" label="CPU Info" width="100"/>
        <el-table-column prop="Os" label="Os" width="100"/>
        <el-table-column prop="RegisterTime" label="Register Time" width="160"/>
        <el-table-column prop="Balance" label="Curent Token Qty"  width="160" />
        <!-- <el-table-column prop="Cpu" label="Cpu" />
        <el-table-column prop="Cpu" label="Cpu" />
        <el-table-column prop="Cpu" label="Cpu" />
        <el-table-column prop="Cpu" label="Cpu" /> -->
      </el-table>
    </div>

   </div>
</template>
<script >
import { reactive,toRefs,ref  } from "vue";
import { getTableData } from '@/api/user'
export default  {
name: 'tableData',

components: {},
  setup() {
    // let tableData = [
    //   {
    //     date: '2016-05-03',
    //     name: 'Tom',
    //     address: 'No. 189, Grove St, Los Angeles',
    //   },
    //   {
    //     date: '2016-05-02',
    //     name: 'Tom',
    //     address: 'No. 189, Grove St, Los Angeles',
    //   },
    //   {
    //     date: '2016-05-04',
    //     name: 'Tom',
    //     address: 'No. 189, Grove St, Los Angeles',
    //   },
    //   {
    //     date: '2016-05-01',
    //     name: 'Tom',
    //     address: 'No. 189, Grove St, Los Angeles',
    //   },
    // ]
    let tableData = ref( [])
    const  getTableDataApi = async() =>{
      let { datas } = await getTableData();
      tableData.value = datas
    } 
    getTableDataApi();
    return {
      tableData
    }
  },
};
</script>
<style scoped  lang="less" >
.ipo_main{
  background: url("../../assets/img/bg.png") no-repeat;
  min-height: 80vh;
  // padding: 20px 0;
  :deep(.el-table) {
    // color: #fff;
    // tr{
    //     background: transparent;
    // }
  
  }
}
</style>
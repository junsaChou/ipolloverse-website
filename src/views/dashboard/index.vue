<template>
    <div class="dashboard">
       <iframe class="iframe" src="https://datatest.ipolloverse.cn:3000/d/iVgmoLn4z/ipolloverse?orgId=1&refresh=1m" frameborder="0" />
    </div>
</template>
<script >
import { reactive,toRefs  } from "vue";
export default  {
name: 'dashboard',
components: {},
setup() {return {}},
};
</script>
<style scoped>
.dashboard{
    width: 100%;
    height:calc(100vh - 257px);
}
.iframe{
  width: 100%;
  height: 100%;
}
</style>
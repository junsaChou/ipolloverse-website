<template>
  <div id="#app">
    <IpoHed></IpoHed>
    <router-view/>
    <IpoFooter/>
  </div>
  
</template>
<script>
import IpoHed from '@/components/header.vue'
import IpoFooter from "@/components/IpoFooter.vue"
export default {
  name: 'App',
  components:{
    IpoHed,
    IpoFooter
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

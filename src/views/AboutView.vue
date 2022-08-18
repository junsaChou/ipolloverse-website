<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Hello world"/>
    <div>{{name}}--{{age}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { reactive,toRefs } from 'vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  setup(){
    const data = reactive({
      name: 'jack',
      age: '18'
    })
    return{
      ...toRefs(data)
    }
  }
};
</script>

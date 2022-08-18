<script setup lang="ts">
import { ref } from 'vue'

// defineProps<{ msg: string }>()
const activeIndex = ref('1')
const openUrl = (url:any) =>{
    window.open(url)
}
const handleSelect = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
  if ( key == '2'){
      openUrl('https://medium.com/@iPolloverse')
  }
}
</script>

<template>
   <div class="banner_box" >
    <div class="ipollo-header" >
      <div class="ipollo-nv-section">
        <router-link to="/" class="logo">
            iPolloverse
          <!-- <img src="../../src/assets/img/gamewayLogoWeb.png" alt /> -->
        </router-link>
                <!-- @select="handleSelect" -->
        <div class="list" >
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#000"
            text-color="#fff"
            active-text-color="#fff"
          >
            <el-menu-item index="1">
              <router-link to="/" active-class="active" >Home</router-link>
            </el-menu-item>
             <el-menu-item index="2">
                 News
              <!-- <router-link to="/launchpadList">Launchpad</router-link> -->
            </el-menu-item>
          </el-menu>
        </div>
 
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner_box {
  height: 80px;
  padding: 0px 120px;
  transition: all 0.25s ease-in-out;
  background-color: rgba($color: #000000, $alpha: 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  width: 100%;
  box-sizing: border-box;
}
.ipollo-header{
 
  .ipollo-nv-section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      font-size: 40px;
        font-family: Arial;
        font-weight: bold;
        color: #FFFFFF;
    }
    .list {
      display: inline-block;
      width: 220px;
      vertical-align: middle;
      height: 60px;
      font-size: 28px;
      color: #fff;
    }
  }
}
.el-menu-item {
  padding: 0px 30px !important;
  position: relative;
//   cursor: auto;
  font-size: 20px !important;
  font-weight: bold;
    cursor: pointer;
}
.el-menu.el-menu--horizontal,.el-menu-item  {
  border-bottom: 0px !important;
  background-color: transparent!important;
}
.el-menu-item {
 padding:0 15px!important;
}
.el-submenu__title {
  font-size: 18px !important;
  padding-left: 26px !important;
}
.el-menu-item a.active:after {
  position: absolute;
  content: "";
  width: 30%;
  height: 2px;
  background: #fff;
  left: 60%;
  bottom: -5%;
  transition: all 0.3s;
  margin-left: -25%;
}
</style>

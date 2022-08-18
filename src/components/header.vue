<template>
   <div class="header" >
    <div class="ipo_header con" :class="{ 'open': isActive }">
      <div class="ipo_nv_section">
      
        <router-link to="/" class="logo">
          <img src="../assets/img/logo.png" alt />
        </router-link>
        <!-- <div class="list" >
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            :mode="isActive ? '':'horizontal'"
            @select="handleSelect"
            background-color="#1B1B1B"
            text-color="#fff"
            active-text-color="#fff"
          >
            <el-menu-item index="1">
              <router-link to="/" active-class="active" exact>Home</router-link>
            </el-menu-item>
             <el-menu-item index="2">
              Roadmap
            </el-menu-item>
             <el-menu-item index="3">
              News
            </el-menu-item>
            <el-menu-item index="4">
             Contact
            </el-menu-item>
          </el-menu>
        </div> -->
        <div class="list">
          <ul class="ipo_menu">
            <li class="ipo_menu_item">
               <router-link to="/" active-class="active" exact>Home</router-link>
            </li>
            <li class="ipo_menu_item" @click="goBack('https://demo2.ipolloverse.cn/')">Space</li>
            <li class="ipo_menu_item" @click="goBack('#roadmap')">
              Roadmap
              </li>
            <li class="ipo_menu_item" @click="goBack('https://medium.com/@ipolloverse')">News</li>
            <li class="ipo_menu_item" @click="goBack('#contact')">Contact</li>
          </ul>
        </div>
        <div class="burger" @click=" isActive=!isActive">
          <div class="burger-line1"></div>
          <div class="burger-line2"></div>
          <div class="burger-line3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive,toRefs } from 'vue'
export default {
  name: 'ipoHed',
  props: {
    msg: String,
  },
  setup(){
    const data = reactive({
      isActive: false,
      activeIndex: '1'
    })
    const handleSelect = (key,keyPath)=>{
      // console.log( key )
    }
    const goBack = (url) =>{
      if( url.indexOf('#')!= -1 ){
        document.querySelector(url).scrollIntoView(true);
        return
      }
      if( url != '' ){
        window.open(url)
        return
      }
    }
    return{
      ...toRefs(data),
      handleSelect,
      goBack
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
  height: 100px;
  background: #02172C;
  transition: all 0.25s ease-in-out;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  width: 100%;
  box-sizing: border-box;
}
.con {
  display: flex;
  align-items: center;
  height: 100%;
}
.ipo_header{
  .ipo_nv_section{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      // padding: 0px 40px 0 0;
      display: inline-block;
      img {
        width: 175px;
        height: 50px;
      }
    }
    .list {
      width: 500px;
      height: 60px;
      font-size: 28px;
      color: #fff;
      .ipo_menu{
        display: flex;
        height: 100%;
        .ipo_menu_item{
          display: inline-flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 20px;
          height: 100%;
          margin: 0 20px;
          font-weight: bold;
          cursor: pointer;
          position: relative;
          cursor: pointer;
          a, a:active, a:focus, a:hover, a:visited {
              text-decoration: none;
              color: #fff;
          }
        }
        .ipo_menu_item:after {
          position: absolute;
          content: "";
          width: 0%;
          height: 2px;
          background: #4E79FF;
          left: 50%;
          // top: 58px;
          bottom: 5%;
          transition: all 0.3s;
        }
        .ipo_menu_item a.active:after {
          position: absolute;
          content: "";
          width: 60%;
          height: 2px;
          background: #4E79FF;
          left: 50%;
          bottom: 5%;
          transition: all 0.3s;
          margin-left: -25%;
        }
        .ipo_menu_item:hover:after {
          position: absolute;
          content: "";
          width: 50%;
          background: #4E79FF;
          height: 2px;
          left: 50%;
          bottom: 5%;
          margin-left: -25%;
        }
      }
    }
    // button
    .burger{
      display: none;
    }
  }
}
.el-menu-item {
  padding: 0px 28px !important;
  position: relative;
  // width: max-content;
  cursor: auto;
  font-size: 20px !important;
  font-weight: bold;
  cursor: pointer;
}
.el-menu.el-menu--horizontal,.el-menu-item  {
  border-bottom: 0px !important;
  background-color: transparent!important;
}
.el-menu.el-menu--horizontal{
  border: none;
  background: transparent;
  font-size: 20px;
  font-weight: bold;
  line-height:initial;
  color: #A2A5AA;
  // line-height: inherit;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  background: #fff;
}
.el-menu-item:after {
  position: absolute;
  content: "";
  width: 0%;
  height: 2px;
  background: #4E79FF;
  left: 50%;
  // top: 58px;
  bottom: 5%;
  transition: all 0.3s;
}
.el-menu-item a.active:after {
  position: absolute;
  content: "";
  width: 30%;
  height: 2px;
  background: #4E79FF;
  left: 60%;
  bottom: 5%;
  transition: all 0.3s;
  margin-left: -25%;
}
.el-menu-item:hover:after {
  position: absolute;
  content: "";
  width: 50%;
  height: 2px;
  left: 50%;
  bottom: 5%;
  margin-left: -25%;
}

@media screen and (max-width: 800px) {
  .el-menu-item{
    padding: 10px!important;
  }
}
@media screen and (max-width: 650px) {
  .ipo_header {
    .ipo_nv_section{
        .list{
          display: none;
        }
        .burger{
            display: block;
            position: relative;
            right: 10px;
            width: 20px;
            height: 6px;
            justify-self: end;
            cursor: pointer;
        }    
        .burger-line1,.burger-line2, .burger-line3 {
            width: 20px;
            height: 2px;
            background: linear-gradient(90deg, #8AAFFF 0%, #5A7FF5 100%);
        }
        .burger-line1 {
            position: absolute;
            top: -6px;
          }
        
         .burger-line3 {
            position: absolute;
            top: 6px;
          }
    }

     
  }
  .open {
      .burger-line1 {
            transform: rotate(45deg) translate(3px, 5px);
        }
    
      .burger-line2 {
            transform: translateX(5px);
            opacity: 0;
        }
    
      .burger-line3 {
            transform: rotate(-45deg) translate(3px, -6px);
      }
      a, a:active, a:focus, a:hover, a:visited {
          text-decoration: none;
          color: #fff;
      }

      .ipo_nv_section{
         .list{
          display: block;
          width: 40%;
          position: absolute;
          height: auto;
          top: 100px;
          right: 0;
          background: #000;
          .ipo_menu{
            display: grid;
            grid-template-columns: 1fr;
            row-gap: 20px;
            justify-items: center;
            padding-bottom: 20px;
            
          }
        }
      }
     
    }

  // .el-menu-item{
  //   padding: 10px!important;
  // }
}
</style>

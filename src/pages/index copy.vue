<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from '../components/header.vue'
//  import { ref,reactive } from 'vue'
const serviceArr: any = [
  {
    img: new URL("../assets/img/qzdr.png",import.meta.url).href,
    title: "Massive Simultaneous Players",
    details:
      "iPolloverse uses Web3D and cloud rendering technology to offload client compute tasks to the cloud. The interactive rendering orchestration between cloud and client helps iPolloverse to be a platform for millions of simultaneous players."
  },
  {
    img:new URL("../assets/img/nft.png",import.meta.url).href ,
    title: "NFT Native",
    details:"NFTs are born with iPolloverse. The digital asset and virtual experience in metaverse can only be interoperated through decentralized technology."
  },
  {
     img:new URL("../assets/img/date.png",import.meta.url).href ,
    title: "Less Network Latency",
    details:"iPolloverse end-to-end acceleration technology makes the network transport latency lowered significantly. In addition to that, iPolloverse edge nodes are close to customer."
  },
  {
     img:new URL("../assets/img/xuanran.png",import.meta.url).href ,
    title: "Faster Rendering",
    details:"Rendering task can be split and processed across multiple compute nodes. This brings a tangible value for compute intensive rendering work."
  }
];
const menuList: any = [
  {
    name: "Twitter",
    url: "https://twitter.com/iPolloverse",
    content: "",
    img:new URL("../assets/img/twitter-circle-fill.png",import.meta.url).href ,
 },
  {
    name: "Medium",
    url: "https://medium.com/@iPolloverse",
    content: "",
    img:new URL("../assets/img/medium-circle-fill.png",import.meta.url).href ,
 },
  {
    content: "Contact Us：",
    name: "ipolloverse@nano.cn",
    url: "",
    img:new URL("../assets/img/email.png",import.meta.url).href ,
 },
];
const newsList: any = [
  {
    img:new URL("../assets/img/xneng.png",import.meta.url).href ,
    title: "Proof of Comprehensive Performance(PoCP)",
    detail: "iPolloverse considers the triad of compute power, storage and bandwidth as a whole to be the Metaverse infrastructure. ",
 },
  {
    img:new URL("../assets/img/class.png",import.meta.url).href ,
    title: "DPoS+",
    detail: "iPolloverse categorizes the level of importance for transactions; gas fee is adapted to different levels.",
 },
  {
    img:new URL("../assets/img/yz.png",import.meta.url).href ,
    title: "Trustless Verification (TLV)",
    detail: "iPolloverse verifies the compute results in a permissionless network without re-executing the task, neither in a trusted hardware environment.",
 },
];
const newsListMid: any = [
  {
    img:new URL("../assets/img/inter.png",import.meta.url).href ,
    title: "Enhanced P2P network",
    detail: ''
  },
  {
    img:new URL("../assets/img/yy.png",import.meta.url).href ,
    title: "DataFlow Accelerator (DFA)+",
     detail: 'iPolloverse is a suite of components covering P2P transmission and video rendering technologies at client site.'
  },
  {
    img:new URL("../assets/img/gjb.png",import.meta.url).href ,
    title: "Toolkits",
     detail: 'iPolloverse is for applications such as video, rendering, AI etc.'
  },
];
const openUrl = (url:any) =>{
   if ( url!=''){
      window.open(url)
   }
   
}
</script>

<template>
  <Header />
  <div class="main">
    <div class="banner">
      <img src="../assets/img/tu1.jpg"  />
      <div class="wrapper">
        <div class="con">
          <div class="hed ">
            <span class="title">iPolloverse</span>
            <span>Power of Metaverse</span>
          </div>
        </div>
        <div class="fot">
          <div class="con">
             <p>iPolloverse aims to support millions of simultaneous metaverse players. Being a decentralized rendering network, it encourages to contribute computing, storage and networking resources all over the world for metaverse at a permissionless way.</p>
          </div>
          <img class="radius" src="../assets/img/radius.png"  />
        </div>
      </div>
    </div>
    <div class="sevrice con">
      <div class="sevrice_list">
        <div :key="index" v-for="(item,index) in serviceArr" class="sevrice_item">
          <div class="hed">
            <img :src="item.img"  />
            <div class="title">{{item.title}}</div>
          </div>
          <div class="details">{{item.details}}</div>
        </div>
      </div>
    </div>
    <div class="paas_table">
      <div class="con paas_content ">
        <!-- <img src="../assets/img/paas_img.png" alt=""> -->
        <!-- <img src="../assets/img/paas_table1.png"  /> -->
        <!-- <div class="paas_list paas_user">
          <div class="left">
            <div class="hed">
              <span>User</span>
            </div>
            <div class="mid">
              <span>AR/VR</span>
              <span>Phone/PC</span>
            </div>
            
          </div>
          <div class="rit">
            <div class="hed">
             <span>Application</span>
            </div>
           <div class="mid">
             <span>Game</span>
             <span>Movie</span>
             <span>Architecture</span>
           </div>
          </div>
        </div> -->
         <div class="paas_list">
          <div class="hed">
            <div class="left">
              <span>Client</span>
            </div>
            <div class="rit">
              <!-- <span>Application</span> -->
            </div>
            
          </div>
          <div class="mid">
            <div class="left">
              <span>DFA</span>
              <span>ToolKits|video/DRM</span>
            </div>
           <div class="rit">
             <span>Blender</span>
             <span>Unreal</span>
             <span>AI Engine</span>
           </div>
          </div>
        </div>
         <div class="paas_list">
          <div class="hed">
            <div class="left">
              <span>DRN Control Layer</span>
            </div>
            <div class="rit">
              <!-- <span>Application</span> -->
            </div>
            
          </div>
          <div class="mid">
            <div class="left">
              <span>Enhanced P2P Network</span>
              <span>Smart Contract</span>
            </div>
           <div class="rit">
             <span>Service API</span>
             <span>Source API</span>
             <!-- <span>Architecture</span> -->
           </div>
          </div>
        </div>
         <div class="paas_list">
          <div class="hed">
            <div class="left">
              <span>Consensus Layer</span>
            </div>
            <div class="rit">
              <!-- <span>Application</span> -->
            </div>
            
          </div>
          <div class="mid">
            <div class="left">
              <span>TLV</span>
              <span>PoCP</span>
            </div>
           <div class="rit">
             <span>dPOS+</span>
           </div>
          </div>
        </div>
        <div class="paas_list">
          <div class="hed">
            <div class="left">
              <span>Meta Computing Layer</span>
            </div>
            <div class="rit">
              <!-- <span>Application</span> -->
            </div>
            
          </div>
          <div class="mid">
            <div class="left">
              <span>VM  Docker</span>
             
            </div>
           <div class="rit">
            <span>GPU</span>
            <span>CPU</span>
            <span>Storage</span>
            <span>Bandwidth</span>
           </div>
          </div>
        </div>
        <div class="paas_fot">
          <span>· PaaS: Platform as a Service</span>
          <span>· DRN: Distributed Rendering Network</span>
          <span>· DFA：Dataflow Accelerator</span>
          <span>· TLV: Trustless Verification</span>
        </div>
        <img src="../assets/img/paas_jx2.png" alt="">
      </div>
      
    </div>
    <div class="consults">
      <div class="consult con">
        <div class="news">
          <div class="new_list">
            <div class="hed"  :key="index" v-for="(item,index) in newsList">
              <img :src="item.img"  />
              <div class="nav">
                <div class="title tl">{{ item.title}}</div>
                <div class="details tl"> {{item.detail}}</div>
              </div>
            </div>
          </div>
          <div class="big_img">
            <img src="../assets/img/tu2.jpg" class="top"  />
            <img src="../assets/img/tu2.jpg"  />
          </div>
        </div>
        <div class="news news_mid">
          <div class="big_img big_img_mid">
            <img src="../assets/img/tu3.jpg" class="top"  />
            <img src="../assets/img/tu3.jpg"  />
          </div>
          <div class="new_list">
            <div class="hed"  :key="index" v-for="(item,index) in newsListMid">
              <img :src="item.img"  />
              <div class="nav">
                <div class="title tl">{{ item.title}}</div>
                <div class="details tl"> {{item.detail}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="email">
      <p>Understanding progress and cooperation</p>
      <button>Email us</button>
    </div> -->
    <div class="footer">
      <div class="logo con">iPolloverse</div>
      <div class="menus con">
        <div class="menu" v-for=" (item,index) in menuList" @click="openUrl(item.url)">
        <span v-if="index>1">{{item.content }}</span>
          <img :src="item.img"  />
          <div class="title" >
            <span class="name">{{item.name }}</span>
          
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  width: 100%;
  height: 1080px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .wrapper {
    position: absolute;
    width: 100%;
    top: 328px;
    left: 0;
    .hed {
      color: #ffffff;
      // min-width: 400px;
      width: 30%;
      padding-bottom: 100px;
      // margin-left: 260px;
      border-bottom: 1px solid #fff;
      span {
        font-size: 40px;
        display: block;
        text-align: left;
      }
      .title {
        font-size: 40px;
        font-weight: 900;
      }
    }
    .fot {
      padding-top: 100px;

      width: 100%;
      height: 430px;
      background-color: rgba($color: #000000, $alpha: 0.6);
      position: relative;
      p {
        // margin-left: 260px;
        width: 920px;
        font-size: 30px;
        font-weight: bold;
        color: #ffffff;
        text-align: left;
      }
      .radius {
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 340px;
      }
    }
  }
}
.sevrice {
  // width: 1400px;
  box-sizing: border-box;
  // height: 476px;
  background: linear-gradient(180deg, #1b3460 0%, #ffffff 100%);
  opacity: 1;
  margin-bottom: 100px;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  .sevrice_list {
    // width: 1340px;
    width: 100%;
    // height: 416px;
    background: #ffffff;
    box-shadow: 2px 20px 10px rgba(0, 0, 0, 0.04);
    opacity: 1;
    border-radius: 10px;
    display: grid;
    padding: 50px 184px;
    box-sizing: border-box;
    grid-template-columns: repeat(2, 370px);
    row-gap: 30px;
    justify-content: space-between;
    .sevrice_item {
      .hed {
        display: flex;
        align-items: center;
        img {
          width: 42px;
          height: 40px;
          margin-right: 20px;
        }
        .title {
          font-size: 20px;
          font-weight: bold;
          color: #333;
        }
      }
      .details {
        margin-top: 15px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #666666;
        text-align: left;
      }
    }
  }
}
.paas_table {
  box-sizing: border-box;
  margin:-49.5px 0;
  background-size: 100%;
  opacity: 1;
  padding: 80px 0 70px;
  .paas_content{
    box-sizing: border-box;
    padding-right: 420px;
    position: relative;
    img{
      position: absolute;
      width: 450px;
      right: 0;
      top: -80px;
      height: 623px;
    }
    .paas_list{
      .hed,.mid{
        // width: 100%;
        display: grid;
        grid-template-columns: 5fr 5fr;
        text-align: left;
        span{
          font-size: 20px;
          font-family: Fira Sans-Bold, Fira Sans;
          font-weight: bold;
          color: #1B3460;
          display: inline-block;
          min-width: 60px;
          line-height: 50px;
        }
      }
      .mid{
        border-bottom: 1px solid hsla(0, 0%, 44%, 0.2);
        span{
          font-weight: 400;
          line-height: 40px;
          color: #333333;
          margin-right: 40px;
        }
      }
    }
    .paas_user{
      display: grid;
      grid-template-columns: repeat(2,5fr) ;
      .mid{
        display: block;
      }
    }
    .paas_fot{
      display: flex;
      // grid-template-columns:2fr 4fr 2fr 2fr;
      justify-content: space-between;
      padding-top: 46px;
      span{
        font-size: 14px;
        font-weight: 400;
        color: #666666;
        text-align: left;
      }
    }
  }
}
.paas_iphone{
  // background: url(../assets/img/paas_top.png) no-repeat;
  // display: none;
}
.consults {
  width: 100%;
  padding: 100px 0;
  background: linear-gradient(180deg, #eeeeee 0%, #ffffff 100%);
  .consult {
    display: grid;
    row-gap: 30px;
    .news {
      display: grid;
      grid-template-columns: 1fr 558px;
      justify-content: space-between;
      column-gap: 30px;
      .new_list {
        display: grid;
        row-gap: 30px;
        .hed {
          display: flex;
          align-items: center;
          padding: 30px;
          background: #ffffff;
          box-shadow: 0px 10px 10px rgba(35, 46, 62, 0.1);
          border-radius: 10px;
          img {
            width: 70px;
            height: 70px;
            margin-right: 20px;
            background: #eeeeee;
            opacity: 1;
            border-radius: 10px;
          }
          .nav {
            .title {
              font-size: 20px;
              font-family: Segoe UI;
              font-weight: bold;
              color: #333333;
            }
            .details {
              font-size: 16px;
              font-weight: 400;
              color: #666666;
            }
          }
        }
      }
      .big_img {
        position: relative;
        box-sizing: border-box;
        img {
          width: 538px;
          
          height: 480px;
          margin: 30px 30px 0 0;
          display: block;
          border-radius: 10px;
          box-shadow: 0px 10px 10px rgba(35, 46, 62, 0.4);
          position: relative;
          z-index: 10;
        }
        .top {
          // width: 100%;
          position: absolute;
          top: 0;
          right: 0;
          margin: 0;
          opacity: 0.5;
        }
      }
      .big_img_mid {
        img {
          margin: 30px 0 0 30px;
        }
        .top {
          left: 0;
          right: auto;
        }
      }
    }
    .news_mid {
      grid-template-columns: 558px 1fr;
    }
  }
}
// .email {
//   padding: 100px 0;
//   background: #eeeeee;
//   text-align: center;
//   p {
//     font-size: 30px;
//     font-family: Arial;
//     font-weight: 400;
//     color: #333333;
//   }
//   button {
//     margin-top: 30px;
//     background: #333333;
//     box-shadow: 0px 10px 6px rgba(0, 0, 0, 0.16);
//     border-radius: 10px;
//     font-size: 20px;
//     font-family: Fira Sans;
//     padding: 25px 166px;
//     font-weight: bold;
//     color: #fff;
//     cursor: pointer;
//   }
// }
.footer {
  width: 100%;
  background: #000000;
  padding: 59px 0;
  .logo {
    text-align: left;
    font-size: 40px;
    font-family: Arial;
    font-weight: bold;
    color: #ffffff;
  }
  .menus {
    margin-top: 28px;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 3fr 3fr 4fr;
    padding: 0 30px;
    box-sizing: border-box;
    .menu {
      display: flex;
      align-items: center;
      img{
        margin-right: 10px;
        width: 40px;
        height: 40px;
        cursor: pointer;
      }
      span {
        color: #fff;
        font-weight: 400;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
}

</style>

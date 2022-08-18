<template>
  <div class="ipo_main">
    <Banner></Banner>
    <div class="con">
      <div class="vision">
        <div class="vision_lf">
          <img src="../assets/img/img1.png" class="img1" alt="" />
          <img src="../assets/img/img2.png" alt="" />
        </div>
        <div class="vision_rt">
          <h3 class="tl">Our Vision</h3>
          <div class="wrap">
            <p>
              The Metaverse is an open and new world where your avatar works,
              lives and plays with the avatars of your family, friends and
              colleagues. In every Metaverse scenes, whether it’s social
              networking, meeting, travel, shopping, game or carnival party,
              your avatar, the hat you wear, the beer you take, the chair you
              sit on, the flowers you give to your friend, your penthouse and
              all decorations in the penthouse are computer-rendered 3D
              graphics, which should be NFTs and could be owned by you.
              Blockchain-native 3D vision is the foundation of all these
              immersive experiences.
            </p>
            <p>
              iPolloverse provides such an infrastructure platform for
              Metaverse. That is to say, iPolloverse provides massive computing
              power for 3D rendering, and provides basic tool services for
              creators of 3D worlds, especially asset trading services based on
              3D NFT.
            </p>
            <p>
              iPolloverse is a service provider of blockchain-native 3D
              Metaverse infrastructure and an ecosystem enabler.
            </p>
          </div>
        </div>
      </div>
      <div class="feature">
        <h2 class="tc">Feature</h2>
        <div class="feature_ls">
          <div class="item">
            <h3 class="tl">Asset Creation in a Lightspeed Way</h3>
            <div class="wrap">
              iPolloverse believes everything in the Metaverse to be NFTable. In
              other words, all things generated in iPolloverse can be NFTable.
              NFTs generated in iPolloverse are native to blockchain, and NFTs
              of other public chains are interoperable with iPolloverse. NFTs
              can be circulated and used in various Metaverses built on top of
              iPolloverse, while they are also an interactive support among
              Metaverses.
            </div>
          </div>
          <div class="item">
            <h3 class="tl">Massive Concurrent Online Interaction</h3>
            <div class="wrap">
              In iPolloverse, players no longer need to be assigned to
              confined spaces and form isolated scene islands, but all can be
              boundless connected in real-time in this Metaverse <br /><br />
              iPolloverse uses Web3D and cloud rendering technology to offload computing
              tasks from client to the cloud. The interactive rendering
              orchestration between the cloud and the client makes iPolloverse
              an agile platform for tens of millions of players to be online
              concurrently. Players can roam in the Metaverse just through the
              web browser and have an immersive virtual experience.
            </div>
          </div>
          <div class="item">
            <h3 class="tl">Efficient Real-time Rendering</h3>
            <div class="wrap">
              iPolloverse will use the innovative consensus mechanism to gather
              global computing power and combine with new rendering technology
              to achieve lower cost and lower latency real-time rendering. <br /><br />
              The low latency that players feel in iPolloverse is due to many
              technology innovations in the rendering process as well as on
              network level. At the same time, iPolloverse can orchestrate the
              computing power of intimate edge nodes and thus reduce the
              transmission delay.
            </div>
          </div>
        </div>
      </div>
      <div class="solution">
        <h2 class="tc">Solution and Architecture</h2>
        <div class="solution_wrap">
          <div class="side">
            <!-- <img src="../assets/img/floor.png" alt=""> -->
            <div class="menu">
              <span :class="[index == flagIndex ? 'span_active' : '', 'menu' + index]" v-for="(k, index) in  solutions"
                :key="index" @mouseover="hoverBtn(index)">
                {{ k.title }}
              </span>
              <span :class="4 == flagIndex ? 'span_active' : ''" @mouseover="hoverBtn(4)">
                <span style="opacity:0">111</span>
              </span>
            </div>
          </div>
          <div class="solution_wrapper">
            <div class="blok_chain" v-show="flagIndex == 4">
              <el-button v-for=" (k, index)  in blockMenu" :key="index" :class="'btn' + index">{{ k.name }}</el-button>
            </div>
            <div class="solution_nav" v-for=" (k, index)  in solutions" :key="index" v-show="index == flagIndex">
              <h3 class="tl">{{ k.title }}</h3>
              <div class="detail tl">
                {{ k.detail }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="roadmap" id="roadmap">
        <h2 class="tc">
          Roadmap
        </h2>
        <div class="wrap">
          <p class="tc">Let’s go to open world.</p>
          <p class="tc"> iPolloverse is the Metaverse Enabler. An open Metaverse means to seamlessly communicate across
            multi-verses.</p>
          <p class="tc">iPolloverse collaborates with various ecosystem partners to launch a new experience of
            entertainment, life, work and XR in Metaverse.</p>
          <div class="slide">
            <div class="top">
              <div class="flag dashed_btm">Stage I <br />Metropolis</div>
              <div class="flag color2">GPU:2K<br />
                Storage:2PB<br />
                Bandwidth:250Gbps<br />
                Qty of Rendering Meshes:1G<br />
                TPS of Blockchain:2K
              </div>
              <div class="flag color2 dashed_btm">Stage III <br />Tactician</div>
              <div class="flag color3 ">
                GPU:100K<br />
                Storage:800PB<br />
                Bandwidth:50T bps<br />
                Qty of Rendering Meshes:600B<br />
                TPS of Blockchain:20K
              </div>
            </div>
            <div class="mid">
              <img src="../assets/img/step.png" alt="">
            </div>
            <div class="btm">
              <div class="flag color4">
                GPU:50<br />
                Storage:10TB<br />
                Bandwidth:25Gbps<br />
                Qty of Rendering Meshes:6OM<br />
                TPS of Blockchain:2K<br />
              </div>
              <div class="flag color5 dashed_btm dashed_top">Stage II <br />Enthusiast</div>
              <div class="flag color6">
                GPU:20K<br />
                Storage:40PB<br />
                Bandwidth:5000Gbps<br />
                Qty of Rendering Meshes:6OB<br />
                TPS of Blockchain:20K
              </div>
              <div class="flag color7 dashed_btm dashed_top">Stage IV <br />Antifragile</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/banner.vue";
import { reactive, toRefs } from "vue";
export default {
  name: "Home",
  components: {
    Banner,
  },
  setup() {
    const data = reactive({
      blockMenu: [
        { name: 'Interaction SDK' },
        { name: 'Studio tools/SDK' },
        { name: '3D NFT engine' },
        { name: 'Asset warehouse/market' },
        { name: 'Spatial engine' },
        { name: 'FOI' },
        { name: 'Baking/Render' },
        { name: 'Progressive engine' },
        { name: 'AI ENGINE' },
        { name: 'AV' },
        { name: 'Enhanced P2P Network with HARQ transmission' },
        { name: 'Docker' },
        { name: 'PoCP' },
        { name: 'Smart contract' },
        { name: 'EVM' },
        { name: 'Inter-API' }
      ],
      solutions: [
        { title: 'Eco platform', detail: 'The ecosystem layer is the tool layer for iPolloverse to connect with various Metaverse participants. In order to provide convenient services for Metaverse community builders, event organizers, virtual building/real estate owners and content producers, the ecosystem layer provides various supports, including numerous interactive SDKs, tools used by studios, engines for producing 3D NFTs, warehouses for storing assets, markets for trading NFTs etc.' },
        { title: 'Meta computing', detail: 'The meta computing layer is the core layer of the iPolloverse. It forms a web3D rendering architecture interacting with the web client. It divides the entire rendering task into three parts, which are cloud, edge and browser, to meet the needs of various metaverse 3D scenes and object activities. iPolloverse dynamically calculates the field of view (FOI, frustum of interest) of each avatar in real time, and provides progressive rendering for the first view of each avatar. Thereby it reduces latency and greatly enhances the numbers of simultaneous online avatars in an open space, from hundreds in a bar, to thousands in bar street, to tens of thousands in a gym, to tens of millions in a virtual concert.' },
        { title: 'Data network', detail: 'The data transmission layer is a key innovation of iPolloverse. In order to render the interaction of 3D scenes and objects in the Metaverse, data transmission of gigabytes is the core of the entire low-latency experience. In some test cases, HARQ P2P transmission technology, which was originally developed by iPolloverse, has fastened more than 100 times of transmission time compared to traditional networks.' },
        { title: ' Blockchain', detail: 'The blockchain consensus layer uses the PoCP consensus algorithm to divide the connected servers into standard Dockers according to their GPU/CPU, memory and bandwidth performance. Rendering tasks are matched with connected servers through smart contracts with the requirements of high performance and low latency. This layer also forms cross-chain interoperability with other blockchains, especially for Metaverse and GameFi.' },
      ],
      flagIndex: 4,
    });

    const hoverBtn = (index) => {
      data.flagIndex = index;
    }
    return {
      ...toRefs(data),
      hoverBtn
    };
  },
};
</script>
<style lang="less" scoped>
.ipo_main {
  // background: linear-gradient(
  //   to top right,
  //   #02172c 0%,
  //   #053362 25%,
  //   #02172c 100%
  // );
  background: url("../assets/img/bg.png") no-repeat;
  background-size: 100% 100%;
  .vision {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 108px;
    padding: 100px 0;

    .vision_lf {
      position: relative;

      img {
        // width: 373px;
        width: 64%;
        height: auto;
        // height: 373px;
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
      }

      .img1 {
        z-index: 2;
        top: 0;
        right: 0;
        left: auto;
        bottom: auto;
      }
    }

    .vision_rt {
      h3 {
        font-size: 30px;
        font-weight: 800;
        color: #fff;
        margin-bottom: 40px;
      }

      .wrap {
        display: grid;
        row-gap: 20px;
        grid-auto-columns: 1fr;

        p {
          font-size: 16px;
          font-weight: 300;
          color: #fff;
          text-align: left;
        }
      }
    }
  }

  .feature,
  .solution,
  .roadmap {
    h2 {
      font-size: 40px;
      font-weight: 800;
      color: #fff;
      padding: 120px 0 100px;
    }

    .feature_ls {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 40px;

      .item {
        background: linear-gradient(180deg,
            rgba(26, 43, 78, 0.5) 0%,
            rgba(5, 43, 60, 0) 100%);
        border-radius: 10px;
        padding: 30px;
        filter: blur(undefinedpx);

        h3 {
          font-size: 20px;
          font-weight: 900;
          color: #fff;
          margin-bottom: 30px;
        }

        .wrap {
          font-size: 16px;
          text-align: left;
          font-weight: 300;
          color: #fff;
        }
      }

      .item:nth-child(2) {
        background: linear-gradient(180deg,
            rgba(38, 75, 192, 0.5) 0%,
            rgba(38, 75, 190, 0) 100%);
      }

      .item:nth-child(3) {
        background: linear-gradient(180deg,
            rgba(99, 70, 193, 0.5) 0%,
            rgba(99, 71, 192, 0) 100%);
      }
    }
  }

  .solution {

    .solution_wrap {
      // height: 280px;
      display: grid;
      grid-template-columns: 277px 1fr;
      column-gap: 63px;

      .side {
        position: relative;

        img {
          display: block;
        }

        .menu {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          // line-height: 70px;
          color: #fff;
          font-size: 12px;
          font-weight: bold;

          span {
            line-height: 70px;
            cursor: pointer;
            background: url("../assets/img/modle.png") no-repeat;
            background-size: 100% 100%;
            position: relative;
            z-index: 1;
            margin-bottom: -10px;
          }

          .span_active {
            background: url("../assets/img/model1.png") no-repeat;
            // z-index: 6;
          }

          .menu0 {
            z-index: 5;
          }

          .menu1 {
            z-index: 4;
          }

          .menu2 {
            z-index: 3;
          }

          .menu3 {
            z-index: 2;
          }
        }
      }

      .solution_wrapper {
        .fade-enter-from {
          height: 0;
        }

        .fade-enter-active {
          transition: all 2s ease;
        }

        .fade-enter-to {
          height: auto;
        }

        .blok_chain {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          justify-content: space-between;
          padding-top: 20px;

          button {
            border-radius: 10px;
            background-color: rgba(255, 255, 255, 0.1);
            justify-content: flex-start;
            margin: 0 30px 10px 0;
            // margin-bottom: 10px;
            text-align: left;
            border: none;
            color: #fff;
            padding: 22px 20px;
            font-size: 16px;
            font-weight: 500;

            span {
              white-space: normal;
            }
          }

          .btn0,
          .btn1,
          .btn2,
          .btn4 {
            width: 18%;
          }
          .btn5{
            width: 8%;
          }
          .btn6,
          .btn7 {
            width: 19%;
            margin-right: 15px;
          }

          .btn11,
          .btn13 {
            width: 24%;
          }

          .btn12,
          .btn14 {
            width: 12%;
          }

          .btn10 {
            width: 100%;
          }

          .btn3,
          .btn9,
          .btn10,
          .btn15 {
            margin-right: 0;
          }
        }

        .solution_nav {

          padding: 34px 100px 0 57px;

          h3 {
            font-size: 20px;
            color: #fff;
            font-weight: bold;
            margin-bottom: 40px;
          }

          .detail {
            font-size: 16px;
            color: #fff;
            font-weight: 300;
          }
        }

      }
    }
  }

  .roadmap {
    padding-bottom: 150px;

    .wrap {
      p {
        font-size: 16px;
        color: #fff;
        font-weight: 300;
        margin-bottom: 20px;
      }

      .slide {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 60px;
        padding: 20px 60px 0;

        .top,
        .btm {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          justify-content: space-between;

          .flag {
            justify-content: center;
            color: #DCF3F8;
            display: flex;
            align-items: flex-end;
            font-weight: bold;
            font-size: 18px;
            font-family: MiSans-Bold, MiSans;
          }

          .color2,
          .color3,
          .color4,
          .color6 {
            color: #DCF3F8;
            font-size: 16px;
            font-weight: 300;
          }

          .dashed_btm::before {
            content: '';
            height: 40%;
            position: relative;
            border: 1px dashed #DCF3F8;
            bottom: -45%;
            left: 15%;
          }

          .dashed_top::before {
            bottom: auto;
            top: -45%
          }

          .color2 {
            color: #8AAFFF;
            font-weight: bold;
          }

          .color2::before {
            border: 1px dashed #8AAFFF;
          }

          .color3,
          .color7 {
            color: #5A7FF5;
          }

          .color5 {
            color: #83C5D7;
          }

          .color5::before {
            border: 1px dashed #83C5D7;
          }

          .color6 {
            color: #8AAFFF;
          }

          .color7::before {
            border: 1px dashed #5A7FF5;
          }
        }

        .btm {
          .flag {
            align-items: flex-start;
          }
        }

        .mid {
          width: 100%;

          img {
            display: block;
            width: 100%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  #app {
    .ipo_main {
      .vision {
        column-gap: 30px;
      }

      .solution {
        .solution_wrap {
          .solution_wrapper {
            .blok_chain {
              button {
                width: auto;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .ipo_main {
    .vision {
      grid-template-columns: 1fr;
      row-gap: 20px;
      align-items: center;
      justify-items: center;

      .vision_lf {
        width: 524px;
        height: 430px;
      }

      .tl {
        text-align: center;
      }
    }

    .feature {
      .feature_ls {
        grid-template-columns: 1fr;
        row-gap: 20px;
      }
    }

    .solution {
      .solution_wrap {
        column-gap: 20px;

        .solution_wrapper {
          .solution_nav {
            padding: 34px 30px 0 0;
          }
        }
      }

    }

    .roadmap {
      .wrap {
        .slide {

          .top,
          .btm {
            .dashed_btm:before {
              height: 30%;

            }
          }

          .top {
            .dashed_btm:before {
              bottom: -35%;

            }
          }

          .btm {
            .dashed_btm:before {
              top: -35%;

            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .ipo_main {
    .vision {
      .vision_lf {
        width: 100%;
        height: 360px;
      }
    }

    .solution {
      .solution_wrap {
        grid-template-columns: 1fr;
        row-gap: 20px;
        justify-items: center;

        .side {
          width: 277px;
          height: 300px;
        }

        .solution_wrapper {
          .solution_nav {
            h3 {
              text-align: center;
            }
          }
        }
      }

    }

    .roadmap {
      .wrap {
        .slide {
          .top,.btm{
            grid-template-columns: repeat(2,1fr);
            row-gap: 20px;
            .dashed_btm::before{
              height: 0;
              border: none;
            }
          }
        }
      }
    }
  }
}
</style>


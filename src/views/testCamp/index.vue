<template>
  <div class="ipo_main">
    <div class="con con_600">
      <div class="faq_btn">
        <el-button type="primary" @click="goBack('#FAQ_en')" plain>FAQ（English）</el-button>
        <el-button type="primary" @click="goBack('#FAQ_cn')" plain>FAQ（Chinese）</el-button>
        <el-button type="success"  @click="this.$router.push('/dashboard')">Dashboard</el-button>
      </div>
      <p>Welcome to iPolloverse Test Camp!</p>
      <p>
        Please join as miner on
        <a href="http://buildertest.ipolloverse.com" target="_blank"
          >http://buildertest.ipolloverse.com</a
        >
      </p>
      <p>
        This is the preview for testnet 1. The testnet 1 will start very soon.
      </p>
      <p>Here is the introdoction document in English and Chinese.</p>
      <div class="detail tl">
        <a
          href="https://www.ipolloverse.com/downFile/ipolloverse_miner_document_V1.1_ENG.pdf"
        >
          1. iPolloverse miner document V1.1_ENG
        </a>
      </div>
      <div class="detail tl">
        <a
          href="https://www.ipolloverse.com/downFile/ipolloverse_miner_document_V1.1_CHN.pdf"
        >
          2. iPolloverse 矿工测试说明 V1.1_中文版
        </a>
      </div>
      <p>And this is video of how to join this test.</p>
    
      <div class="html5-video" data-layer="0">
        <video controls name="media">
          <source
            src="https://www.ipolloverse.com/downFile/miner_ipolloverse.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="menu">
        Click here to download daily form.
        <!-- <el-button type="danger" @click="downExcel">Down Result</el-button> -->
        <el-button type="success"  @click="this.$router.push('/nodeOverview')">Node Overview</el-button>
      </div>

    </div>
    <div class="con con_750">
            <p>(Daily form shows accumulated information of all registered nodes in iPolloverse network. The form is updated every day noon GMT (Greenwich Mean Time)).</p>
    </div>
    <div class="demo_collapse con">
       <div class="hed-name" id="FAQ_en">
        FAQ（English）:
      </div>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item
          title="1.What mining machines can be used for iPolloverse network?"
          name="1"
        >
          <div class="tl">
           We require computers with GPU/CPU, storage and bandwidth. The mining machines with ASIC cannot be used in iPolloverse network. Because iPolloverse network is providing real-time rendering power for metaverse, we require generic GPU/CPU, storage and bandwidth for rendering.
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="2.What the miners can do when running a node and facing an issue?"
          name="2"
        >
          <div class="tl">
            Please compress your log file under home directory and submit to
            https://github.com/iPolloverse/Test. For example, if your home path
            in installation is/data/ipolloverse, the log path is
            /data/ipolloverse/ipvRunner/log.
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="3.What operation systems can testnet 1 support?"
          name="3"
        >
          <div  class="tl">
            Currently testnet 1 only supports Linux. Windows will be supported
            in the future.
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="4.Does iPolloverse support WSL/WSL1 (Windows Subsystem for Linux)?"
          name="4"
        >
          <div  class="tl">
            iPolloverse does not support WSL/WSL1 at this time, as the network setting for WSL/WSL1 is different from traditional Linux. We recommend using VMware virtualization software.
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="5.A node has been registered and connected to iPolloverse chain. When there is a need to download installation update, what can the minder do?"
          name="5"
        >
          <div  class="tl">
            You should go the original directory and use uninstall command to
            uninstall the original script, and install the new script again.
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="6.After the mining node connects to the chain, why the node configuration info, such as GPU or CPU, is not displayed in the miner login page?"
          name="6"
        >
          <div class="tl">
            As iPolloverse measures the computing power of connected nodes
            irregularly (the measuring interval time could be from minutes to 4
            hours), the CPU or GPU configuration info will be displayed after
            the measurement.
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="7.When using AMD GPU for mining, the GPU value in the miner login interface show 0. Why does this happen? Does it affect my mining?"
          name="7"
        >
          <div class="tl">
            Currently iPolloverse cannot read AMD GPU card information, but it does not affect miners’ mining and token earning. iPolloverse has already measured the hashrate of the AMD GPU card, as well as the bandwidth and the storage. So, it does not affect the mining result. We will solve the importing information of AMD GPU card issue in the near future.
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="8.Is there any requirement for public IP address in testnet 1?"
          name="8"
        >
          <div class="tl">
            iPolloverse testnet 1 does not have any requirement for public IP address.
          </div>
        </el-collapse-item>
          <el-collapse-item
          title="9.Can you recover a user’s password if s/he forgot his/her password?"
          name="9"
        >
          <div class="tl">
            iPolloverse is a decentralized project and has no central database to store users’ password. There is no way to recover the password if it is lost. However, the users’ digital asset cannot be lost even if s/he forgot his/her password. S/he can re-register another user name, bind with the SAME WALLET, and his/her digital asset is there to display.
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="demo_collapse con">
      <div class="hed-name" id="FAQ_cn">
        FAQ（Chinese）:
      </div>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item
          title="1.什么样的设备可以挖矿？"
          name="1"
        >
          <div class="tl">
           具有GPU/CPU，存储和带宽的计算机设备，可以挖矿。带ASIC芯片的矿机不能在iPolloverse网络挖矿。因为iPollverse网络是提供元宇宙实时渲染的网络，需要用通用GPU/CPU、存储和带宽提供算力。
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="2.矿工碰到节点运行情况需要解决怎么办？"
          name="2"
        >
          <div class="tl">
           请把home目录下面的log目录打包递交到 https://github.com/iPolloverse/Test。比如安装时选择的home路径是/data/ipolloverse，那log路径就是/data/ipolloverse/ipvRunner/log。
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="3.一测支持哪些操作系统？"
          name="3"
        >
          <div  class="tl">
            当前一测只支持Linux操作系统，未来将支持Windows系统。
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="4.当前支持WSL/WSL1 (Windows Subsystem for Linux)吗？"
          name="4"
        >
          <div  class="tl">
            当前不支持WSL/WSL1，网络设置与普通Linux不通用。建议使用VMware虚拟化软件。
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="5.矿机已经注册了节点，并连到iPolloverse网络。需要重新下载安装包时，怎么做？"
          name="5"
        >
          <div  class="tl">
            在原先的脚本目录下用命令行uninstall命令卸载原脚本，再重新安装脚本。
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="6.节点接入网络后，为什么矿工登录页面没有显示CPU/GPU算力配置？"
          name="6"
        >
          <div class="tl">
          因为系统会不定时测量接入节点的算力，这个间隔时间是从几分钟到4个小时都有可能。因此隔一段时间，CPU/GPU算力配置就会显示出来。
          </div>
        </el-collapse-item>
         <el-collapse-item
          title="7.为什么用AMD的GPU挖矿，矿工登录界面里面的GPU为什么显示0？对挖矿有影响没有？"
          name="7"
        >
          <div class="tl">
          这是因为当前iPolloverse不能读取AMD GPU卡的信息，但是不影响挖矿和分配测试积分。因为iPolloverse可以测出A卡的Hashrate值，也可以测量出带宽和存储，因此不影响矿工正常挖矿。对A卡GPU的信息读取，我们在未来会解决
          </div>
        </el-collapse-item>
         <el-collapse-item
          title="8.一测对IP是不是公网地址有没有要求？"
          name="8"
        >
          <div class="tl">
          iPolloverse一测对矿机是否有公网地址没有要求。
          </div>
        </el-collapse-item>
           <el-collapse-item
          title="9.用户登录的密码忘记了可以恢复吗？"
          name="9"
        >
          <div class="tl">
          iPolloverse是去中心化项目，没有数据库保存用户密码。如果用户密码忘记了，是没有办法恢复。但是，用户密码丢了，资产不会丢，用户可以重新注册一个用户名，用同一个钱包绑定，就可以显示资产。
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { reactive, toRefs, ref } from "vue";
import { goBack } from "@/utils"
export default {
  name: "testCamp",
  setup() {
    // const data = reactive({
    //   name: 'jack',
    //   age: '18'
    // })
    const activeNames = ref(["1"]);
    const downExcel = () => {
      window.location =
        "http://buildertest.ipolloverse.com/downFile/miner_date.xlsx";
    };
    const handleChange = (val) => {
      console.log(val);
    };
    return {
      downExcel,
      goBack
      // ...toRefs(data)
    };
  },
};
</script>
<style lang="less" scoped>
.ipo_main {
  background: url("../../assets/img/bg.png") no-repeat;
  min-height: 80vh;
  .con_600,.con_750 {
    .faq_btn{
      margin-bottom: 20px;
      button{
        margin-bottom: 10px;
      }
    }
    max-width: 600px;
    padding: 20px 0;
    p,
    .menu,
    .detail a {
      text-align: left;
      line-height: 40px;
      font-size: 20px;
      color: #fff;
    }
    a {
      color: #4469ec !important;
      // text-decoration: underline;
    }
    .html5-video {
      width: 100%;
      margin: 20px 0;
      video {
        display: block;
        width: 100%;
      }
    }
  }
  .con_750{
    max-width: 750px;
    padding-top: 0;
  }
  .demo_collapse{
    padding: 1.5rem;
    .hed-name{
      text-align: left;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      padding-bottom: 10px;
    }
    :deep(.el-collapse){
      --el-collapse-header-height: auto;
    }
    :deep(.el-collapse-item__wrap),:deep(.el-collapse-item__header){
      background: transparent;
      color: #fff;
      font-size: 16px;
      text-align: left;
      padding: 10px 0;
    }
    .tl{
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>

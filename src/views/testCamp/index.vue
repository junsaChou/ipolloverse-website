<template>
  <div class="ipo_main">
    <div class="con con_600">
      <div class="faq_btn">
        <el-button type="primary" @click="goBack('#FAQ_en')" plain>FAQ（English）</el-button>
        <el-button type="primary" @click="goBack('#FAQ_cn')" plain>FAQ（Chinese）</el-button>
        <el-button type="success"  @click="this.$router.push('/dashboard')">Dashboard</el-button>
        <el-button type="success"  @click="this.$router.push('/bulletin')">Bulletin</el-button>
      </div>
      <p>Welcome to iPollo Test Camp!</p>
      <p>
        Please join as a computing power supplier on<br/>
        Node register entry is coming soon.
        <a href="https://ecotools.ipolloverse.com/miner" target="_blank"
          >https://ecotools.ipolloverse.com/miner</a
        >
      </p>
      <p>
       The testnet 1 will start from Nov 22, 2022 to Dec 3, lasting for 12 days.
      </p>
      <p>Here are the relevant documents for rendering suppliers.</p>
      <div class="detail tl">
        <a
          href="https://www.ipollo.org/downFile/ipollo_computing_power_supplier_document_V1.6_ENG.pdf"
        >
           1. iPollo Computing Power Supplier Document V1.6_ENG
        </a>
      </div>
      <div class="detail tl">
        <a
          href="https://www.ipollo.org/downFile/ipollo_computing_power_supplier_document_V1.6_CHN.pdf"
        >
          2. iPollo 算力供应方手册V1.6中文版
        </a>
      </div>
      <div class="detail tl">
        <a
          href="https://www.ipollo.org/downFile/Windows_install_use.zip"
        >
          3. 渲染算力windows安装包
        </a>
      </div>
      <!-- Windows_install_use.zip -->
      <p>And this is video of how to join this test.</p>
      <!-- <p>Here are the relevant documents for rendering suppliers.</p> -->
    
      <div class="html5-video" data-layer="0">
        <video controls name="media">
          <source
            src="https://www.ipollo.org/downFile/miner_ipolloverse.mp4"
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
            <p>(Daily form shows accumulated information of all registered nodes in iPollo network. The form is updated every day noon GMT (Greenwich Mean Time)).</p>
    </div>
    <div class="demo_collapse con">
       <div class="hed-name" id="FAQ_en">
        FAQ（English）:
      </div>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item
          title="1.What machines can be used for rendering in iPollo network?"
          name="1"
        >
          <div class="tl">
          We recommend the following configuration:
          </div>
          <div class="tl">
           • NVDIA RTX GPU 3080 or above, with upstream Bandwidth 100Mbps and storage 1TB. GPU below NVDIA GTX1060 not qualified for rendering. However, it is qualified for network incentive.
          </div>
          <div class="tl">
           • Need public network port mapping, TCP 8000-9000，TCP 11111，7777；UDP 20000-30000 to public port
          </div>
          <div class="tl">
           • Operation system ubuntu 20.04 LTS x64. Desktop
          </div>
          <div class="tl">
            The machines with ASIC cannot be used in iPollo network. AMD and Intel GPU cannot be used at this time either.
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="2.Which three points need to be checked before the computing power node goes online in order to obtain incentives for rendering tasks?"
          name="2"
        >
          <div class="tl">
          1)To make sure the NVIDIA GPU driver has been installed.
          </div>
          <div class="tl">
          In the linux environment, find Software & Updates → Additional Drivers, select a driver higher than nvdia-driver-500
          </div>
          <div class="tl">
            <img src="../../assets/img/linux.png" alt="">
          </div>
           <div class="tl">
          2)Make sure the GPU is greater than GXT 1060
          </div>
          <div class="tl">
          In linux environment, open Terminal, enter into Desktop, use the command nvidia-smi -L, and check the GPU type
          </div>
          <div class="tl">
            <img src="../../assets/img/linux1.png" alt="">
          </div>
          <div class="tl">
          3)Make sure the Linux operation system used is the desktop version
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="3.Why should you need to bind wallet?"
          name="3"
        >
          <div class="tl">
           It is because only binding your wallet can you get the incentive. If you bind a wrong wallet, you will not get the incentive.
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="4.How should you do if you bind a wrong wallet?"
          name="4"
        >
          <div class="tl">
          You can recreate an account and bind the correct wallet and your machine with this new account, as currently iPollo does not support unbinding wallet.
          </div>
        </el-collapse-item>
            <el-collapse-item
          title="5.What the computing power suppliers can do when running a node and facing an issue?"
          name="5"
        >
          <div class="tl">
            Please compress your log file under home directory and submit to https://github.com/iPolloverse/Test. For example, if your home path in installation is/data/ipolloverse, the log path is /data/ipolloverse/ipvRunner/log.
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="6.What operation systems can testnet 1 support?"
          name="6"
        >
          <div  class="tl">
            Currently testnet 1 only supports Linux. Windows will be supported in the future.
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="7.Does iPollo support WSL/WSL1 (Windows Subsystem for Linux)?"
          name="7"
        >
          <div  class="tl">
            iPollo does not support WSL/WSL1 at this time, as the network setting for WSL/WSL1 is different from traditional Linux. We recommend using VMware virtualization software.
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="8.A node has already been registered and connected to iPollo chain. Does the computing power supplier need to re-download installation package, what can s/he do?"
          name="8"
        >
          <div  class="tl">
            You should go the original directory and use uninstall command to uninstall the original script, and install the new script again.
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="9.After the computing power node connects to the chain, why the node configuration info, such as GPU or CPU, is not displayed in the miner login page?"
          name="9"
        >
          <div class="tl">
            As iPollo measures the computing power of connected nodes irregularly (the measuring interval time could be from minutes to 4 hours), the CPU or GPU configuration info will be displayed after the measurement.
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="10.When using AMD GPU for mining, the GPU value in the miner login interface show 0. Why does this happen? Does it affect my mining?"
          name="10"
        >
          <div class="tl">
            AMD and Intel GPU cannot be used at this time to supply computing power.
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="11.Is there any requirement for public IP address in testnet 1?"
          name="11"
        >
          <div class="tl">
            Yes, the computing power supplier is required to have public IP address for rendering. S/he is required to have public network port mapping, TCP 8000-9000，TCP 11111，7777；UDP 20000-30000 to public port.
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="12.Can iPollo network recover a user’s password if s/he forgot his/her password?"
          name="12"
        >
          <div class="tl">
           iPollo is a decentralized project and has no central database to store users’ password. There is no way to recover the password if it is lost. However, the users’ digital asset cannot be lost even if s/he forgot his/her password. S/he can re-register another user name, bind with the SAME WALLET, and his/her digital asset is there to display.
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="13.Why is the script file in the preview of testnet 1 not workable in testnet 1 and you need to re-download the script file in testnet 1?"
          name="13"
        >
          <div class="tl">
           The script file installed in the testnet 1 needs to be downloaded again. This is because the path of the command in the preview of testnet 1 is inconsistent with that of the testnet 1. If the script file in the preview for testnet 1 is still used, an error will occur.
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
          title="1.什么样的设备可以提供算力？"
          name="1"
        >
          <div class="tl">
            我们推荐配置如下：
          </div>
          <div class="tl">
           • RTX GPU 3080及以上, 上行带宽100Mbps, 存储 1TB。GPU低于GTX1060将无法获得渲染任务，但仍然可以获得网络激励。
          </div>
          <div class="tl">
            • 需要做公网端口映射，TCP 8000-9000，TCP 11111，7777；UDP 20000-30000到公网对应端口
          </div>
           <div class="tl">
            • 操作系统ubuntu 20.04 LTS x64，桌面版
          </div>
           <div class="tl">
            带ASIC芯片的矿机不能给iPollo网络提供算力。当前iPollo只支持英伟达GPU，不能支持其它GPU比如AMD和Intel的。
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="2.算力节点上线前需要检查哪三点才能获得渲染任务的激励？"
          name="2"
        >
          <div class="tl">
          1)需要确定已经安装了英伟达GPU驱动。
          </div>
          <div class="tl">
          在linux环境下，找到Software & Updates → Additional Drivers，选择高于nvdia-driver-500的驱动版本
          </div>
          <div class="tl">
            <img src="../../assets/img/linux.png" alt="">
          </div>
           <div class="tl">
          2)确定GPU型号是大于1060
          </div>
          <div class="tl">
          在linux环境下，打开终端，进入桌面，输入指令 nvidia-smi -L，检查GPU型号
          </div>
          <div class="tl">
            <img src="../../assets/img/linux1.png" alt="">
          </div>
          <div class="tl">
          3)确定用的linux操作系统是桌面版
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="3.为什么要绑定钱包？"
          name="3"
        >
          <div class="tl">
          只有绑定钱包才能得到激励，如果绑定错误的钱包将无法获得激励。
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="4.如果绑定了错误的钱包怎么办？"
          name="4"
        >
          <div class="tl">
         目前账户不能解除绑定，您可以重新注册一个节点，绑定正确的钱包。
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="5.算力提供方碰到节点运行情况需要解决怎么办？"
          name="5"
        >
          <div class="tl">
          请把home目录下面的log目录打包递交到 https://github.com/iPolloverse/Test。比如安装时选择的home路径是/data/ipolloverse，那log路径就是/data/ipolloverse/ipvRunner/log。
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="6.一测支持哪些操作系统？"
          name="6"
        >
          <div  class="tl">
            当前一测只支持Linux操作系统，未来将支持Windows系统。
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="7.当前支持WSL/WSL1 (Windows Subsystem for Linux)吗？"
          name="7"
        >
          <div  class="tl">
            当前不支持WSL/WSL1，网络设置与普通Linux不通用。建议使用VMware虚拟化软件。
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="8.设备已经注册了节点，并连到iPollo网络。需要重新下载安装包时，怎么做？"
          name="8"
        >
          <div  class="tl">
            在原先的脚本目录下用命令行uninstall命令卸载原脚本，再重新安装脚本。
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="9.节点接入网络后，为什么算力提供方登录页面没有显示CPU/GPU算力配置？"
          name="9"
        >
          <div class="tl">
          因为系统会不定时测量接入节点的算力，这个间隔时间是从几分钟到4个小时都有可能。因此隔一段时间，CPU/GPU算力配置就会显示出来。
          </div>
        </el-collapse-item>
         <el-collapse-item
          title="10.为什么用AMD的GPU挖矿，算力提供方登录界面里面的GPU为什么显示0？对挖矿有影响没有？"
          name="10"
        >
          <div class="tl">
          当前iPollo只支持英伟达GPU，不能支持其它GPU比如AMD和Intel的。
          </div>
        </el-collapse-item>
         <el-collapse-item
          title="11.一测对IP是不是公网地址有没有要求？"
          name="11"
        >
          <div class="tl">
          一测对IP有公网要求。 需要做公网端口映射，TCP 8000-9000，TCP 11111，7777；UDP 20000-30000到公网对应端口
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="12.用户登录的密码忘记了可以恢复吗？"
          name="12"
        >
          <div class="tl">
          iPollo是去中心化项目，没有数据库保存用户密码。如果用户密码忘记了，是没有办法恢复。但是，用户密码丢了，资产不会丢，用户可以重新注册一个用户名，用同一个钱包绑定，就可以显示资产。
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="13.预览测试的脚本为什么不能正常工作，在一测脚本文件需要重新下载了？"
          name="13"
        >
          <div class="tl">
         脚本文件在一测中需要重新下载，这是因为预览测试的命令路径跟一测命令路径是不一致的。如果仍然使用预览测试的脚本文件，会导致出现错误。
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
      // window.location =
      //   "http://buildertest.ipolloverse.com/downFile/miner_date.xlsx";
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

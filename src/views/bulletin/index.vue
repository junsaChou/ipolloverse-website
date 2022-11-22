<template>
  <div class="ipo_main">
      <div class="con con_850">
        <h2 class="tc">Rendering Computing Supplier Honor NFT Launched</h2>
        <p>Every step of iPolloverse would not be possible without our rendering computing suppliers. To appreciate the great effort of preview for testnet1 suppliers, we'd love to give away Rendering Computing Supplier Honor NFT(RCSH).  Suppliers can use the bonus points from preview for testnet1 in exchange for this NFT.</p>
        <p>The exchange rate is 1000:1. Every supplier participating in preview for testnet1 will receive whitelist(s). Please complete the minting on Nswap during designated period.</p>
        <p>RCSH holders can upgrade your nodes in the future Testnet with this NFT and enjoy higher mining efficiency and more airdrops.</p>
        <p>Click this link to get the Rendering Provider Honor NFT. <a  target="_blank" href="https://www.nswap.link/launch/2040095">https://www.nswap.link/launch/2040095</a></p>
        <p>iPolloverse Test1 is coming soon. Stay tuned</p>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive,toRefs } from 'vue'
export default {
  name: 'Bulletin',
  components: {
  },
//   setup(){
//     const data = reactive({
//       name: 'jack',
//       age: '18'
//     })
//     return{
//       ...toRefs(data)
//     }
//   }
};
</script>
<style lang="less" scoped>
.ipo_main {
  background: url("../../assets/img/bg.png") no-repeat;
  min-height: 80vh;
    .con_850{
        color: #fff;
        text-align: left;
        max-width: 850px;
        padding: 40px 0 20px;
        h2{
           margin-bottom: 30px;
           font-size: 20px;
        }
        p{
            line-height: 36px;
            font-size: 16px;
            text-indent:2em;
            a{
                color: #4469ec; 
            }
        }
    }
}
</style>

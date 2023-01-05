<template>
   <footer id="contact">
     <div class="con">
        <div class="left">
            <router-link to="/" class="logo">
            <img src="../assets/img/logo.png" alt />
            </router-link>
            <div class="website">
                © 2022 iPollo
            </div>
        </div>
        <div class="rit">
             <div class="openUrl" v-for=" ( k,i ) in menu" :key="i" @click="goBack(k.url)">
                
                <img :src="k.img" alt="contact@ipollo.org" v-if=" i < 4 ">
                <el-tooltip
                    v-else
                    class="box-item"
                    effect="dark"
                    content="contact@ipollo.org"
                    placement="top"
                >
                     <img :src="k.img" alt="contact@ipollo.org" >
                </el-tooltip>
            </div> 
        </div>
   
     </div>
    <!-- <div class="record">
        <a href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank">
        浙ICP备2022021699号
        </a>
    </div> -->
    </footer>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
    name: 'IpoFooter',
    props: {
        msg: String,
    },
    setup() {
    const data = reactive({
        menu: [
            {   img: new URL("../assets/img/twitter.png", import.meta.url).href,
                url:'https://twitter.com/iPolloverse'
            },
            {   img: new URL("../assets/img/medium.png", import.meta.url).href,
                url:'https://medium.com/@ipollo'
            },
            {   img: new URL("../assets/img/miner.png", import.meta.url).href,
                url: 'https://discord.gg/8VTVnApfqG',
            },
            {   img: new URL("../assets/img/eco.png", import.meta.url).href,
                // url:'https://t.me/iPolloverseminer'
                url:'https://t.me/iPollominers'
                // url:'https://t.me/iPolloverseeco'
            },
            {   img: new URL("../assets/img/email.png", import.meta.url).href,
                url: ''
                // url:'mailto:contact@ipollo.org'
            }
        ]
    });

    const goBack = (url)=>{
        if( url != ''){
             window.open( url )
        }
       
    }
        return {
            ...toRefs(data),
            goBack
        };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
footer{
    background: #071420;
    .record{
        a{
            color: #bbb;
            font-size: 12px;
            text-decoration: none;
            cursor: pointer;
        }
        padding-bottom: 20px;
    }
    .con{
        padding: 50px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left{
            .logo img{
                display: block;
                width: 110px;
                height: auto;
            }
            .website{
                padding-top: 10px;
                font-weight: 300;
                color: #fff;
                font-size: 16px;
                text-align: left; 
            }
        }
        .rit{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 400px;
            img{
                cursor: pointer;
                display: block;
                width: 50px;
                height: 50px;
                // margin-left: 60px;
            }
            // .openUrl:nth-child(5) img{
            //     cursor:not-allowed;
            // }
        }
    }
}
@media screen and (max-width: 600px) {
    footer{
        .con{
            display: grid;
            grid-template-columns: 1fr;
            row-gap: 20px;
            .rit{
                width: auto;
            }
        }
    }
}
</style>

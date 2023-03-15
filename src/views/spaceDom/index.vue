<template>
   <div class="ipo_main">
    <div class="spaceFlag">
      <img src="../../assets/img/spaceflag.png" alt="">
    </div>
    <div class="con">
    
      <div class="spaceTitle">
        <h2 class="tc">Space Recommendation</h2>
      </div>
      <div class="spaceList">
        <div class="spaceItem" v-for="(item,i) in spaceList" :key="i" @click="handleChange(item.spaceId)">
            
            <div class="spaceImg">
              <!-- :src="item.PreviewUrl" v-lazy="item.PreviewUrl"  -->
              <img  v-lazy="item.previewUrl"  alt="">
            </div>
            <div class="name tl">SpaceName: {{ item.spaceName}}</div>
            <div class="fotter tl">
              TotalViews: {{ item.spaceCount }}
            </div>
        </div>
      </div>
    </div>

   </div>
</template>
<script >
import { reactive,toRefs,ref  } from "vue";
// 获取space列表  获取查看数 
import { getSpaceList } from '@/api/space'
import { getSpaceView, } from '@/api/user'
export default  {
name: 'spaceList',

components: {},
  setup() {
    // let spaceData = [
    //   {
    //     spaceUrl: 'https://gslb.ipolloverse.com/s_2839e51c-319d-4514-acef-de3aea0514ba/index.html',
    //     previewUrl: 'http://ecotools.ipolloverse.com:801/space/s_2839e51c-319d-4514-acef-de3aea0514ba/s_2839e51c-319d-4514-acef-de3aea0514ba.png',
    //     spaceName: 'Colosseum1211',
    //     count: '12',
    //   },
    //  {
    //     spaceUrl: 'https://gslb.ipolloverse.com/s_2839e51c-319d-4514-acef-de3aea0514ba/index.html',
    //     previewUrl: 'http://ecotools.ipolloverse.com:801/space/s_2839e51c-319d-4514-acef-de3aea0514ba/s_2839e51c-319d-4514-acef-de3aea0514ba.png',
    //     spaceName: 'Colosseum1211',
    //     count: '12',
    //   },
    //   {
    //     spaceUrl: 'https://gslb.ipolloverse.com/s_2839e51c-319d-4514-acef-de3aea0514ba/index.html',
    //     previewUrl: 'http://ecotools.ipolloverse.com:801/space/s_2839e51c-319d-4514-acef-de3aea0514ba/s_2839e51c-319d-4514-acef-de3aea0514ba.png',
    //     spaceName: 'Colosseum1211',
    //     count: '12',
    //   },
    //   {
    //       spaceUrl: 'https://gslb.ipolloverse.com/s_2839e51c-319d-4514-acef-de3aea0514ba/index.html',
    //       previewUrl: 'http://ecotools.ipolloverse.com:801/space/s_2839e51c-319d-4514-acef-de3aea0514ba/s_2839e51c-319d-4514-acef-de3aea0514ba.png',
    //       spaceName: 'Colosseum1211',
    //       count: '12',
    //   },
    //   {
    //     spaceUrl: 'https://gslb.ipolloverse.com/s_2839e51c-319d-4514-acef-de3aea0514ba/index.html',
    //     previewUrl: 'http://ecotools.ipolloverse.com:801/space/s_2839e51c-319d-4514-acef-de3aea0514ba/s_2839e51c-319d-4514-acef-de3aea0514ba.png',
    //     spaceName: 'Colosseum1211',
    //     count: '12',
    //   },
    //   {
    //       spaceUrl: 'https://gslb.ipolloverse.com/s_2839e51c-319d-4514-acef-de3aea0514ba/index.html',
    //       previewUrl: 'http://ecotools.ipolloverse.com:801/space/s_2839e51c-319d-4514-acef-de3aea0514ba/s_2839e51c-319d-4514-acef-de3aea0514ba.png',
    //       spaceName: 'Colosseum1211',
    //       count: '12',
    //   },
    //   {
    //     spaceUrl: 'https://gslb.ipolloverse.com/s_2839e51c-319d-4514-acef-de3aea0514ba/index.html',
    //     previewUrl: 'http://ecotools.ipolloverse.com:801/space/s_2839e51c-319d-4514-acef-de3aea0514ba/s_2839e51c-319d-4514-acef-de3aea0514ba.png',
    //     spaceName: 'Colosseum1211',
    //     count: '12',
    //   },
    //   {
    //       spaceUrl: 'https://gslb.ipolloverse.com/s_2839e51c-319d-4514-acef-de3aea0514ba/index.html',
    //       previewUrl: 'http://ecotools.ipolloverse.com:801/space/s_2839e51c-319d-4514-acef-de3aea0514ba/s_2839e51c-319d-4514-acef-de3aea0514ba.png',
    //       spaceName: 'Colosseum1211',
    //       count: '12',
    //   },
    // ]
    const getSpaceViewApi = async( spaceId,count ) => {
      let res  = await getSpaceView({ spaceId:spaceId});
      if( res && res.returnCode == 200){
        return res.viewNums
      }
      return 0
    }
    let spaces = []
    let spaceList = ref([]);
    const  getSpaceDataApi = async() =>{
      let res = await getSpaceList({pageCurrent:0,pageSize:100});
      if ( res && res.size >0 ){
        let { spaces } = res;
        spaces.forEach(async ( k, i) => {
          let { previewUrl,spaceId,spaceName,status } = k;
            previewUrl= previewUrl.replace('http://47.243.166.221:801','https://www.ipollo.org/ecoTools')
            let count = await getSpaceViewApi(spaceId)
            let jsonObj =  { previewUrl,spaceId,spaceName,spaceCount:count }
            spaceList.value.push(JSON.parse( JSON.stringify(jsonObj)))
        });
      }
    } 
    const handleChange = (SpaceId) => {
      window.open(`https://gslb.ipolloverse.com/${SpaceId}/index.html`)
    }

    getSpaceDataApi();
    return {
      // spaceData,
      spaceList,
      handleChange
    }
  },
};
</script>
<style scoped  lang="less" >
.ipo_main{
  background: url("../../assets/img/bg.png") no-repeat;
  .spaceFlag{
    width: 100%;
    img{
      display: block;
      width: 100%;
      height: auto;
    }
  }
  .con{

    .spaceTitle{
      color: #fff;
      line-height: 50px;
      margin: 20px 0;
    }
    .spaceList{
      display: grid;
        grid-template-columns: repeat(3, 300px);
      // justify-content: space-between;
      // flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .spaceItem{
        cursor: pointer;
        // width: 300px;
        margin-bottom: 10px;
        img{
          display: block;
          width: 100%;
          height: 200px;
        }
        .tl{
          color: #fff;
          line-height: 30px;
        }
        .name{
          padding-top: 10px;
        }
      }
    }
  }
}
@media screen  and (max-width: 1020px) and (min-width: 720px) {
  .ipo_main{
    .con{
      padding: 0 20px;
      .spaceList{
         grid-template-columns: repeat(2, 300px);
      }
    }
  }
}
@media screen  and (max-width: 720px) {
  .ipo_main{
    .con{
      padding: 0 20px;
      .spaceList{
        justify-content: center;
         grid-template-columns: repeat(1, 300px);
      }
    }
  }
}
</style>
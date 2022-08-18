<template>
  <swiper class="swiper-container" 
    :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }" 
    :pagination="{ clickable: true }" 
    :autoplay="{ autoplay: true }" 
    loop
     >

    <swiper-slide class="swiper-slide" v-for="(item, i) in imgs" :key="i">
      <img :src="item.img" alt="" />
    </swiper-slide>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 左右箭头。如果放置在swiper-container外面，需要自定义样式。-->
    <!-- <div class="swiper-button-prev"></div> <div class="swiper-button-next"></div> -->
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </swiper>
</template>
<script >
import { reactive,toRefs  } from "vue";
import { Swiper,SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

// Import Swiper core and required modules 
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default{
    name: 'swiperCom',
    components: { Swiper, SwiperSlide },
    setup() {
        const data = reactive({
            imgs:[
                { img:require('../assets/img/banner1.jpg'),url:'www.baidu.com'  },
                { img:require('../assets/img/banner2.jpg'),url:'www.baidu.com'  },
            ]
        })
        const onSwiper = ( swiper ) =>{
            console.log( swiper )
        }
        const onSlideChange = ( ) =>{
            console.log( 'slide change' )
        }
        return {
            ...toRefs(data),
            onSwiper,
            onSlideChange,
            modules: [ Navigation, Pagination, Scrollbar, A11y ]
        }
    },
};
</script>
<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  border-radius: 0.1rem;
  --swiper-theme-color: #ff6600;
  --swiper-pagination-color: #248cc0;
  --swiper-navigation-color: #248cc0;
  --swiper-navigation-size: 20px;
}
.swiper-slide img {
  width: 100%;
}
>>>.swiper-pagination-bullet{
  width: 29px;
  height: 6px;
  border-radius: 10px;
  opacity: 1;
  background: #fff;
  margin: 0 5px;
}
>>> .swiper-pagination-bullet-active{
  background: #4E79FF;
  opacity: 0.7;
}
</style>

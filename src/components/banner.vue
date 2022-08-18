<template>
   <div class="banner">
      <!-- <div class="swiper">
        <img src="@/assets/img/banner1.jpg" alt="">
      </div> -->
      <swiperComVue></swiperComVue>
    </div>
</template>

<script>
import swiperComVue from './swiperCom.vue';
export default {
  name: 'banner',
  components:{
    swiperComVue
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.banner{
  // height: 726px;
  .swiper{
    width: 100%;
    // height: 726px;
    img{
      object-fit: cover;
      display: block;
      width: 100%;
    }
  }
}
</style>

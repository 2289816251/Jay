<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 0,
      stretch: -100,
      depth: 200,
      modifier: 1,
      slideShadows: true
    }"
    :modules="modules"
    :loop="true"
    class="mySwiper"
  >
    <swiper-slide v-for="(item,index) in props.data" :key="index">
      <div class="img">
        <img class="i" :src="item.cover"/>
        <img class="b" :src="item.cover">
      </div>
      <div class="title">
        <span>{{item.title}}</span>
      </div>
      <div class="describe">{{item.id}}</div> 
    </swiper-slide>
  </swiper>
</template>
<script setup>
// 引入其他模块
import { EffectCoverflow } from 'swiper/modules'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// 引入样式
import 'swiper/css'
import 'swiper/css/effect-coverflow'

const props = defineProps({
  data:Array
})
const modules = [EffectCoverflow]

defineExpose({
  
})
</script>
<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  .swiper-wrapper {
    background-position: center;
    background-size: cover;
    width: 450px;
    height: auto;
    .swiper-slide {
      display: block;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      .img {
        width: 100%;
        height: 450px;
        display: flex;
        align-items: center;
        justify-content: center;
        justify-items: center;
        overflow: hidden;
        position: relative;
        img {
          width: 100%;
          // height: 100vmin;
          // height: 100%;
          background-position: center;
          background-size: cover;
          position: absolute;
          object-fit: fill;
          transform: scale(1.2);
          // left: 0;
        }
        .i{
          z-index: 999;
        }
        .b{
          z-index: 99;
        }
      }
      .title{
        font-size: 2.4rem;
        font-weight: 800;
      }
      .describe{
        font-size: 1.4rem;
        color: #999;
      }
      & > div:not(:last-child) {
        margin-bottom: var(--margin);
      }
    }
  }
}
</style>

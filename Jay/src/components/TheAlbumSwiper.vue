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
    :mousewheel="true"
    :modules="modules"
    :loop="true"
    :loopAdditionalSlides="1"
    @activeIndexChange="slideChange"
    class="mySwiper"
  >
    <swiper-slide
      :ref="item.id"
      v-for="(item, index) in props.theAlbumData"
      :key="index"
      @click="theAlbumClick($event, item.id)"
    >
      <div
        class="theAlbum"
        :class="guidePages.theAlbumClickIndex == item.id ? 'enterTurnOver' : ''"
      >
        <!-- 正面 -->
        <div class="z">
          <div class="i">
            <img v-lazy="item.cover" />
          </div>
          <div class="m">
            <img v-lazy="item.cover" />
          </div>
        </div>
        <!-- 背面 -->
        <div class="b">
          <div class="i">
            <img v-lazy="item.cover" />
          </div>
          <div class="m">
            <img v-lazy="item.cover" />
          </div>
          <div class="conter">
            <div class="top">
              <div class="title">
                <span class="theAlbumName">{{ item.name }}</span>
                <span class="singer">周杰伦</span>
              </div>
              <div class="theAlbumList">
                <div class="item" v-for="(item2, i) in item.musicList" :key="i">
                  <span class="index"> {{ i.length >= 2 ? i : '0' + i }}. </span>
                  <span class="name">
                    {{ item2.name }}
                  </span>
                </div>
              </div>
            </div>
            <div class="bottom">
              <div class="left">

              </div>
              <div class="right">
                <IconLove @click.stop="loveClick" :size="data.size" />
              </div>
            </div>
          </div>
        </div>
        i
      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup>
// 引入其他模块
import { EffectCoverflow, Mousewheel } from 'swiper/modules'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// 引入样式
import 'swiper/css'
import 'swiper/css/effect-coverflow'

// 引入图标
import IconLove from '@/components/icons/IconLove.vue'

import { reactive, ref } from 'vue'

// data 数据
const data = reactive({
  size:32, // 图标大小
})

// guidePages 仓库
import { useGuidePages } from '@/stores/guidePages'
const guidePages = useGuidePages()

// props
const props = defineProps({
  theAlbumData: Array
})

// swiper切换事件
let slideChange = function (e) {
  const { realIndex } = e
  guidePages.changeTheAlbumIndex(realIndex)
}
// 专辑点击回调
let theAlbumClick = function (e, id) {
  // 判断点击的专辑和激活的专辑是否一致
  if (guidePages.theAlbumIndex == id) {
    // let dom = this.$refs[id]
    // 判断是否激活 如果激活则取消激活
    guidePages.theAlbumClickIndex == undefined
      ? (guidePages.theAlbumClickIndex = parseInt(id))
      : (guidePages.theAlbumClickIndex = undefined)
  }
}

// 爱心点击回调
let loveClick = function (){

}

// 模组
const modules = [EffectCoverflow, Mousewheel]

defineExpose({
  slideChange,
  theAlbumClick,
  guidePages,
  data,
  loveClick
})
</script>
<style lang="scss">
.swiper {
  width: 100%;
  height: auto;
  // padding-top: 50px;
  // padding-bottom: 50px;
  .swiper-wrapper {
    background-position: center;
    background-size: cover;
    width: 450px;
    height: 450px;
    .swiper-slide {
      display: block;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      .theAlbum {
        position: relative;
        width: 450px;
        height: 450px;
        & > div {
          position: absolute;
          width: 450px;
          height: 450px;
          backface-visibility: hidden;
        }
        // 正面
        .z {
          & > div {
            width: 100%;
            height: 450px;
            display: flex;
            align-items: center;
            justify-content: center;
            justify-items: center;
            overflow: hidden;
            position: absolute;
            img {
              height: 450px;
              background-position: center;
              background-size: cover;
              position: absolute;
              object-fit: fill;
              transform: scale(1.34);
            }
          }
          .i {
            z-index: 9;
          }
          .m {
            top: 20px;
            filter: blur(20px);
            transform: scale(0.95);
          }
        }
        // 背面
        .b {
          transform: rotateZ(180deg);
          width: 100%;
          height: 450px;
          overflow: hidden;
          border-radius: var(--border-radius);
          & > div {
            width: 100%;
            height: 450px;
            display: flex;
            align-items: center;
            justify-content: center;
            justify-items: center;
            overflow: hidden;
            position: absolute;
            img {
              height: 450px;
              background-position: center;
              background-size: cover;
              position: absolute;
              object-fit: fill;
              transform: scale(1.3);
            }
          }
          .m {
            top: 10px;
            filter: blur(50px);
            transform: scale(3);
            width: 100%;
            height: 450px;
            overflow: hidden;
            opacity: 0.8;
          }
          .conter {
            width: 100%;
            padding: var(--margin);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .top{
              width: 100%;
              display: flex;
              justify-content: space-between;
              .title {
              display: flex;
              flex-direction: column;
              text-align: left;
              .theAlbumName {
                font-size: 2.8rem;
                // width: 300px;
                font-weight: 800;
              }
              .singer {
                font-size: 1.2rem;
              }
            }
            .theAlbumList {
              text-align: left;
              .item {
                .index {
                  font-weight: 800;
                }
                .name {
                }
              }
            }
            }
            .bottom{
              width: 100%;
              display: flex;
              align-content: center;
              justify-content: space-between;
            }
          }
        }
      }
    }
  }
}
</style>

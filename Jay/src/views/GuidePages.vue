<template>
  <div class="main">
    <div class="head">
      <img src="@/assets/images/logo.png" alt="LOGO" />
      <span>Jay宇宙</span>
    </div>
    <div class="conter">
      <div class="icon">
        <IconMail :size="data.size" />
        <IconWeixin :size="data.size" />
        <IconQQ :size="data.size" />
      </div>
      <div class="center">
        <div class="swiper">
          <TheAlbumSwiper :theAlbumData="theAlbumData" />
        </div>
        <div class="title" v-if="guidePages.musicInfo[guidePages.theAlbumIndex].title">
          {{ guidePages.musicInfo[guidePages.theAlbumIndex].title }}
        </div>
        <div class="describe myScrollbar">
          {{ describe }}
        </div>
      </div>
      <div class="switch">
        <span> The </span>
        <span> Strongest </span>
        <span> Surface </span>
      </div>
    </div>
  </div>
</template>

<script setup>
// 引入图标
import IconMail from '@/components/icons/IconMail.vue'
import IconQQ from '@/components/icons/IconQQ.vue'
import IconWeixin from '@/components/icons/IconWeixin.vue'

// 引入swiper组件
import TheAlbumSwiper from '@/components/TheAlbumSwiper.vue'

// guidePages 仓库
import { useGuidePages } from '@/stores/guidePages'
const guidePages = useGuidePages()

// 引入自定义事件
import mitt from '@/mitt/mybus'

// 引入hooks
import { changeDescribe } from '@/hooks/useDescribe'

import { computed, reactive } from 'vue'

// 定义数据
const data = reactive({
  size: '32px', // 图标大小
})

// // 自定义事件 改变索引值
// mitt.on('changeIndex', (e) => {
//   const { realIndex } = e
//   data.theAlbumIndex = realIndex
// })

// mitt.on('theAlbumClickBus', ({e,id}) => {
//   if(data.theAlbumIndex == id){
//     console.log('翻转卡片')
//   }
// })

// 专辑数据 - 计算属性
const theAlbumData = computed(()=>{
  return guidePages.musicInfo
})
// 描述 - 计算属性
const describe = computed(() => {
  return changeDescribe(guidePages.musicInfo[guidePages.theAlbumIndex].describe)
})

defineExpose({
  data,
  describe,
  theAlbumData
})
</script>

<style lang="less" scoped>
// 顶部高度
@height: 80px;

.main {
  padding: var(--grid);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .head {
    display: flex;
    align-items: center;
    height: @height;
    // justify-content: center;
    img {
      width: 4.4rem;
      height: 4.4rem;
      margin-right: var(--margin);
    }
    span {
      font-size: 2.4rem;
      font-weight: 800;
    }
  }
  .conter {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .icon {
      display: flex;
      flex-direction: column;
      svg:not(:last-child) {
        margin-bottom: var(--margin);
      }
    }
    .center {
      height: calc(100vh - @height - var(--grid) - var(--grid));
      width: 90%;
      padding-top: 50px;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-items: center;
      text-align: center;
      & > .swiper {
        min-height: 450px;
      }
      .title {
        font-size: 1.8rem;
        font-weight: 800;
        margin: 16px 0px 32px;
        color: var(--color-title);
      }
      .describe {
        font-size: 1.4rem;
        height: auto;
        overflow-y: auto;
        color: var(--color-text);
      }
    }
    .switch {
      display: flex;
      flex-direction: column;
      font-weight: 800 !important;
      cursor: pointer;
      span {
        writing-mode: vertical-rl;
        &:not(:last-child) {
          margin-bottom: var(--margin);
        }
      }
    }
  }
}
</style>

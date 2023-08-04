<template>
  <div class="main">
    <div class="head">
      <img src="@/assets/images/logo.png" alt="LOGO" />
      <span>Jay宇宙</span>
    </div>
    <div class="conter">
      <div class="icon">
        <IconMail :size="size" :fill="fill" />
        <IconWeixin :size="size" :fill="fill" />
        <IconQQ :size="size" :fill="fill" />
      </div>
      <div class="center">
        <TheAlbumSwiper :data="theAlbumData" />
      </div>
      <div class="switch">
        <span>
          The
        </span>
        <span>
          Strongest
        </span>
        <span>
          Surface
        </span>
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

// 引入专辑数据
import theAlbumData from '@/assets/JSON/theAlbum.json'

import { ref } from 'vue'

const size = ref(32)
const fill = ref('#fff')

defineExpose({
  size,
  fill
})
</script>

<style lang="less">

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
    .center{
      height: calc(100vh - @height - var(--grid) - var(--grid));
      width: 90%;
      // display: flex;
      // align-content: center;
      // justify-items: center;
    }
    .switch {
      display: flex;
      flex-direction: column;
      font-weight: 800 !important;
      cursor: pointer;
      span{
        writing-mode: vertical-rl;
        &:not(:last-child){
          margin-bottom: var(--margin);
        }
      }
    }
  }
}
</style>

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import theAlbumData from '@/assets/JSON/theAlbum.json'

export const useGuidePages = defineStore('counter', () => {
  // 专辑信息
  const musicInfo = theAlbumData
  // 专辑索引
  const theAlbumIndex = ref(0)
  // 专辑点击索引
  const theAlbumClickIndex = ref(99)
  // 修改专辑索引
  const changeTheAlbumIndex = (i:number)=>{
    theAlbumIndex.value = i
    // 清除索引值
    theAlbumClickIndex.value = i
  }

  return { musicInfo,theAlbumIndex,theAlbumClickIndex,changeTheAlbumIndex }
})

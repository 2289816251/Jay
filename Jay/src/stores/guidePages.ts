import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import request from '@/api/request.js'

// 引入路径
import { baseURL,guide } from '@/api/url.js'

export const useGuidePages = defineStore('counter',{
  state: () => ({
    musicInfo: [], // 专辑信息
    theAlbumIndex: 0, // 专辑索引
    theAlbumClickIndex: 99 // 专辑点击索引
  }),
  actions: {
    // 获取专辑数据
    getTheAlbumData(){
      request.get(`${baseURL}${guide}/getTheAlbumData`).then((res)=>{
        if(res.code == 200){
          this.musicInfo = res.data
        }
      })
    },
    // 修改专辑索引
    changeTheAlbumIndex (i:number){
      this.theAlbumIndex = i
      // 清除索引值
      this.theAlbumClickIndex = i
    },
    init(){
      this.getTheAlbumData()
    }
  }
})

//home小仓库
import {
    reqgetCategoryList,
    reqGetBannerList,
    reqFloorList
} from '@/api/index.js'

const state = {
    //初始
    categoryList:[],
    bannerList:[],
    floorList:[]
}

const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    },
    BANNERLIST(state,getBannerList){
        state.bannerList = getBannerList
    },
    FLOORLIST(state,getFloor){
        state.floorList = getFloor
    }
}
const actions = {
    //向服务器发请求获取数据
   async categoryList({commit}) {
        let result = await reqgetCategoryList()
        if(result.code ===200){
            commit('CATEGORYLIST',result.data)
        }
    },
    //获取首页轮播图
    async getBannerList({commit}){
        let res = await reqGetBannerList()
        if(res.code ===200){
            commit('BANNERLIST',res.data)
        }

    },
    async getFloor({commit}){
        let res = await reqFloorList()
        if(res.code ===200){
            commit('FLOORLIST',res.data)
        }
    }
    
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}
//search小仓库
import {reqGetSearchInfo} from '@/api/index.js'
const state={
    searchList:{}
}
const mutations={
    SEARCHLIST(state,searchList){
        state.searchList = searchList
    }
}
const actions={
    async getSearchList({commit},params={}){
        let res = await reqGetSearchInfo(params)
        console.log(res);
        if(res.code ===200){
            commit('SEARCHLIST',res.data)
        }
    }

}
const getters={}


export default {
    state,
    mutations,
    actions,
    getters
}
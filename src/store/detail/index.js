import {reqGoodsInfo,reqAddOrUpdateShopCart} from '@/api/index.js'
//生成uuid
import {getUUID} from '@/utils/uuid_token'

const state = {
    goodsDetail:{},
    //临时身份
    uuid : getUUID()
}
const mutations={
    setGoodsDetail(state,goodsDetail){
        state.goodsDetail = goodsDetail
    }
}
const actions = {
    //获得物品细节
async getGoodsDetail({commit},id){
    let res = await reqGoodsInfo(id)
    if(res.code ===200){
        commit('setGoodsDetail',res.data)
    }
},
//添加到购物车
async addCart({commit},{skuId,skuNum}){
  let res = await reqAddOrUpdateShopCart(skuId,skuNum)

}
}
const getters ={
    //路径导航
categoryView(state){
    return state.goodsDetail.categoryView ||{}
},
//产品信息
skuInfo(state){
    return state.goodsDetail.skuInfo||{}
},
//产品售卖属性
spu(state){
    return state.goodsDetail.spuSaleAttrList||[]
}
}
export default{
    state,
    mutations,
    actions,
    getters
}
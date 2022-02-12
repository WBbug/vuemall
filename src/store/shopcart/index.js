import {
    reqUpdateCheckedByid,
    reqCartList,
    reqDeleteCartById
} from '@/api/index.js'
const state = {
    cartList: []
}
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList[0].cartInfoList||[]
    }
}
const actions = {
    //获取购物车数据
    async getCartList({
        commit
    }) {
        let res = await reqCartList()
        if (res.code === 200) {
            commit('GETCARTLIST', res.data)
        }
    },
    //删除购物车数据
    async deleteCart({
        commit
    }, skuId) {
        let res = await reqDeleteCartById(skuId)
        if (res.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    //修改是否选中
    async updateIsChecked({
        commit
    }, {
        skuId,
        isChecked
    }) {
        let res = await reqUpdateCheckedByid(skuId, isChecked)
        if (res.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('false'))
        }
    },
    //全选
    updateAllChecked({dispatch,state}, isChecked) {
        let promiseAll = []
        state.cartList.forEach(item => {
            console.log(item);
            let promise = dispatch('updateIsChecked', {
                skuId: item.skuId,
                isChecked
            })
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    }
}
const getters = {
    // cartList(state){
    //     return state.cartList[0]||{}
    // },
    // cartInfo(state){
    //     return state.cartList[0].
    // }
}
export default {
    state,
    mutations,
    actions,
    getters
}
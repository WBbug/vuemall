import {
    reqGetCode,
    reqUserRegister,
    reqUserLogin,
    reqUserInfo,
    reqLogout
} from '@/api'
const actions = {
    async getCode({
        commit
    }, phone) {

        let res = await reqGetCode(phone)

        if (res.code === 200) {
            commit('GETCODE', res.data)
            return 'ok'
        } else {
            return Promise.reject(new Error(fail))
        }
    },
    //用户注册
    async userRegister({
        commit
    }, user) {
        let res = await reqUserRegister(user)
        console.log(res);
    },
    //用户登录
    async userLogin({
        commit
    }, data) {
        let res = await reqUserLogin(data)
        console.log(res);
        if (res.code === 200) {
            commit('USERLOGIN', res.data.token)
            localStorage.setItem('TOKEN', res.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    //获取用户信息
    async getUserInfo({
        commit
    }, data) {
        let res = await reqUserInfo()
        if (res.code === 200) {
            commit('GETUSERINFO', res.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async userLogout({
        commit
    }, data) {
        let res = await reqLogout()
        if (res.code === 200) {
            commit('CLEAR')
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    }
}
const state = {
    code: '',
    token: localStorage.getItem('TOKEN'),
    userInfo: ''
}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    CLEAR(state) {
        state.code = ''
        state.token = ''
        localStorage.removeItem('TOKEN')
        state.userInfo = ''
    }
}
const getters = {}
export default {
    actions,
    state,
    mutations,
    getters
}
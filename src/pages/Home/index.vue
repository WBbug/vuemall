<template>
<div>
    <TypeNav>   </TypeNav>
    <ListContainer> </ListContainer>
    <Recommend></Recommend>
    <Rank/>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list='floor' />
    <Brand/>
</div>
</template>

<script>
//引入组件
//列表
import ListContainer from '@/pages/Home/ListContainer'
//每日推荐
import Recommend from '@/pages/Home/Recommend'
//排行榜
import Rank from '@/pages/Home/Rank'
//楼层
import Floor from '@/pages/Home/Floor'
//商标
import Brand from '@/pages/Home/Brand'

import {mapState} from 'vuex'

export default {
name:'',
components:{
    ListContainer,
    Recommend,
    Rank,
    Floor,
    Brand
},
mounted(){
    //执行 获取floor数据
this.$store.dispatch('getFloor')

},
computed:{
    ...mapState({floorList:(state)=>state.home.floorList,})
}

}
</script>

<style>

</style>
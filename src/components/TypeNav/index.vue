<template>
  <div class="type-nav">
    <div class="container">
<div @mouseenter="mousein" @mouseleave="mouseout">
        <h2 class="all" >全部商品分类</h2>
            <div class="sort" v-show=show >
        <div class="all-sort-list2" @click="goSearch">
          <!-- 一级分类 -->
          <div
            class="item"
            v-for="(c1, index) in categoryList"
            :key="c1.categoryId"
            :class="{ onHover: index === hoverIndex }"
            @mouseover="changeColor(index)"
            @mouseleave="initIndex"
          >
            <h3>
              <a
                :data-categoryName="c1.categoryName"
                :data-category1id="c1.categoryId"
                :class="{ onHover: index === hoverIndex }"
                >{{ c1.categoryName }}</a
              >
            </h3>
            <!-- 二级分类 -->
            <div
              class="item-list clearfix"
              :style="{ display: index === hoverIndex ? 'block' : 'none' }"
            >
              <div
                class="subitem"
                v-for="(c2, index) in c1.categoryChild"
                :key="c2.categoryId"
              >
                <dl class="fore">
                  <dt>
                    <a
                      :data-categoryName="c2.categoryName"
                      :data-category2id="c2.categoryId"
                      >{{ c2.categoryName }}</a
                    >
                  </dt>
                  <dd>
                    <!-- 三级分类 -->
                    <em
                      v-for="(c3, index) in c2.categoryChild"
                      :key="c3.categoryId"
                    >
                      <a
                        :data-categoryName="c3.categoryName"
                        :data-category3id="c3.categoryId"
                        >{{ c3.categoryName }}</a
                      >
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <!-- 三级联动部分 -->

    </div>
  </div>
</template>

<script>
// 按需引入
import throttle from "lodash/throttle";
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      hoverIndex: -1,
      show:true
    };
  },
  mounted() {
    if(this.$route.path!=='/home'){
      this.show = false
    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    changeColor: throttle(function (index) {
      this.hoverIndex = index;
    }, 50),
    initIndex() {
      this.hoverIndex = -1;
    },
    goSearch(e) {
      // 编程式+事件委派
      let { categoryname, category1id, category2id, category3id } =
        e.target.dataset;
        let location = { name: "search" };
        let query = { categoryName: categoryname };
      if (categoryname) {
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
      }

      location.query = query;
      console.log(location);
      this.$router.push(location);
    },
    mousein(){
      if(this.$route.path!=='/home'){
            this.show = true
      }
    },
    mouseout(){
 if(this.$route.path!=='/home'){
            this.hoverIndex = -1;
            this.show = false
      }
    }
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }
          .onHover {
            color: #e1251b;
          }
          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
        .onHover {
          background-color: #ccc;
        }
      }
    }
  }
}
</style>
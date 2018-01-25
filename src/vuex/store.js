import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// State负责存储整个应用的状态数据，一般需要在使用的时候在跟节点注入store对象，
// 后期就可以使用this.$store.state直接获取状态
const state = {
  goodsList: [],

}

// mutation是改变state状态的唯一方法
// 本质就是用来处理数据的函数，其接收唯一参数值state
const mutations = {
  addCart(state, item) {
    var _item = state.goodsList.find(c => c.goods_id === item.goods_id);
    if (_item) {
      _item.num++;
    } else {
      state.goodsList.push(item);
      // item.num = 1;错误写法

      // 给对象添加属性时要遵循如下规则，否则无法监听属性值的变化
      Vue.set(item, 'num', 1);
    }
  }
}

// 触发mutation里面的函数  异步逻辑应该封装在action中
const actions = {
  addGoods: function (context, item) {
    console.log(context, '--------------', this)
    context.commit('addCart', item)
  }
}

const getters = {
  getGoodsList: function (state) {
    return state.goodsList;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})

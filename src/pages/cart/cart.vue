<template>
  <div>
    <!-- 没有商品时显示页面 -->
    <cart-blank v-show="cartList.length===0"></cart-blank>
    <tab-bar></tab-bar>

    <!-- 有商品时显示的页面 -->
    <div v-show="cartList.length>0">

      <!-- 头部 -->
      <div class="hasGoodHead">
        <span>购物车</span>
      </div>

      <!-- 还差多少包邮 -->
      <div class="baoyou" v-show="totailPrice>68">
        <img src="../../../static/images/baoyou.png" height="66" width="135" alt="">
        <span>您已享68元包邮</span>
      </div>

      <!-- 不包邮再去逛逛 -->
      <div class="goshopping" v-show="totailPrice<68">
        <p class="shoppingP1">
          <img src="../../../static/images/shopping.png" height="66" width="165" alt="">
          <span>您还差
            <span>{{lessMoney}}</span>元可享受"满68元包邮"</span>
        </p>
        <p class="shoppingP2" @click="goToShopping">继续挑选&gt;</p>
      </div>

      <!-- 每件商品 -->
      <div class="allGoodsContainer">
        <div v-for="(item,index) in cartList" class="everGood" :key="index">
          <input type="checkbox" v-model="item.choseEvery1" @click="choseEvery(item)" class="danxuan">
          <img :src="item.goods_icon" alt="" class="goodImg">
          <p style="float:right" class="price">￥ {{item.shop_price}}</p>
          <p class="title">{{item.goods_title}}</p>
          <p class="addOrDel">
            <span @click="delNum(item)">-</span>
            <span class="tebie">{{item.num}}</span>
            <span @click="addNum(item)">+</span>
          </p>
          <img src="../../../static/images/delete.png" height="200" width="200" alt="" @click="delGod(item)" class="delGood">
        </div>
      </div>
      <div class="jiesuan">
        <input type="checkbox" @click="choseAll" v-model="chosed">
        <span>全选</span>
        <p>合计
          <b>￥ {{totailPrice}}</b>
        </p>
        <button>去计算</button>
      </div>
    </div>

  </div>
</template>
<script>
  import tabBar from '../../components/home/tabbar'
  import cartBlank from '../../components/cart/cartBlank'
  export default {
    data() {
      return {
        totailPrice: 0,
        chosed: true,
      }
    },
    components: {
      tabBar,
      cartBlank,
    },
    computed: {
      cartList: function () {
        return this.$store.getters.getGoodsList;
      },
      lessMoney: function () {
        return (68 - this.totailPrice).toFixed(2);
      }
    },
    methods: {
      // 全选按钮
      choseAll: function () {
        var list = this.$store.getters.getGoodsList;
        // this.chosed = !this.chosed;
        if (this.chosed) {
          list.forEach(c => {
            c.choseEvery1 = true;
          });
        } else {
          list.forEach(c => {
            c.choseEvery1 = false;
          });
        }
        this.allPrice();
      },


      // 取消单选框选中
      choseEvery: function (item) {

        //把所有的商品取出来
        var list = this.$store.getters.getGoodsList;
        //临时数组 存放选中的item
        var arrFlag = [];

        list.forEach(c => {
          if (c.choseEvery1) {
            arrFlag.push(c);
          }
        })

        //选中item的数组 和 总数据的长度是否相等  让全选按钮和单选按钮状态统一
        if (list.length == arrFlag.length) {
          this.chosed = true;
        } else {
          this.chosed = false;
        }
        this.allPrice();

      },


      // 计算选中的总价钱 
      allPrice: function () {
        this.totailPrice = 0; //每次调用该函数先清空总价钱（类似于重置样式tab切换）
        var arrFlag = [];
        this.$store.getters.getGoodsList.forEach(c => {
          if (c.choseEvery1) {
            arrFlag.push(c);
          }
        });
        var list = arrFlag;
        list.forEach(c => {
          this.totailPrice += c.shop_price * c.num;
        })
        this.totailPrice = this.totailPrice.toFixed(2);
      },


      // 添加商品数量按钮
      addNum: function (item) {
        item.num++;
        this.allPrice();
      },

      // 减少商品数量按钮
      delNum: function (item) {
        if (item.num < 2) {
          this.$store.getters.getGoodsList.splice(this.$store.getters.getGoodsList.indexOf(item), 1);
        } else {
          item.num--;
        }
        this.allPrice();
      },


      goToShopping: function () {
        this.$router.push({
          name: 'class'
        })
      },
      delGod: function (item) {
        this.$store.getters.getGoodsList.splice(this.$store.getters.getGoodsList.indexOf(item), 1);
        this.allPrice();
      }

    },

    // 刚加载出购物车页面展示内容
    created: function () {
      // console.log(this.$store.getters)在其他页面this.$store只能调用state和getters来获取数据
      this.$store.getters.getGoodsList.forEach(c => {
        c.choseEvery1 = true;
      })
      this.allPrice();
    }
  }

</script>
<style>
  /*有商品时头部*/

  .hasGoodHead {
    height: 1.388889rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 45;
  }

  .hasGoodHead>span {
    font-size: 0.444444rem;
    position: absolute;
    top: 30%;
    left: 43%;
  }
  /*包邮部分*/

  .baoyou {
    height: 1.111111rem;
    position: relative;
    top: 1.388889rem;
    left: 0;
    right: 0;
    background-color: #fff;
    border-top: 0.027778rem solid #D2D2D2;
  }
  /*包邮图标*/

  .baoyou>img {
    margin-top: 1.416667rem;
    width: 1.111111rem;
    height: 0.555556rem;
    position: absolute;
    top: -100%;
    left: 10px;
  }
  /**/

  .baoyou span {
    position: absolute;
    top: 35%;
    left: 1.488889rem;
  }
  /*再去逛逛*/

  .goshopping {
    position: relative;
    top: 1.44rem;
    height: 1.111111rem;
    background-color: #fff;
  }

  .goshopping img {
    width: 1.111111rem;
    height: 0.555556rem;
  }

  .shoppingP1 {
    line-height: 1.111111rem;
    text-indent: 1.527778rem;
  }

  .shoppingP1 img {
    position: absolute;
    top: 20%;
    left: 10px;
  }

  .shoppingP2 {
    position: absolute;
    top: 30%;
    right: 10px;
  }
  /*所有商品容器*/

  .allGoodsContainer {
    margin-top: 1.4rem;
    border: 0.027778rem solid #fff;
    margin-bottom: 2.861111rem;
  }

  .everGood {
    height: 2.777778rem;
    margin-top: 2px;
    background-color: #fff;
    position: relative;
  }

  .danxuan {
    position: absolute;
    left: 0.277778rem;
    top: 45%;
  }

  .price {
    position: absolute;
    left: 3.5rem;
    bottom: 0.411111rem;
    color: red;
  }

  .title {
    position: absolute;
    top: 0.355556rem;
    left: 3.5rem;
  }

  .addOrDel {
    position: absolute;
    right: 2.027778rem;
    bottom: 0.255556rem;
  }
  /*商品图片*/

  .goodImg {
    width: 2.166667rem;
    height: 2.166667rem;
    position: absolute;
    left: 1.111111rem;
    top: 10%;
    border: 0.027778rem solid #ccc;
  }

  .everGood span {
    display: inline-block;
    width: 0.833333rem;
    height: 0.833333rem;
    line-height: 0.833333rem;
    text-align: center;
    border: 0.027778rem solid #ccc;
  }

  .everGood .tebie {
    border: none;
  }
  /*删除按钮*/

  .delGood {
    width: 0.472222rem;
    height: 0.472222rem;
    position: absolute;
    top: 40%;
    right: 0.455556rem;
  }
  /*结算板块*/

  .jiesuan {
    width: 100%;
    height: 1.388889rem;
    position: fixed;
    bottom: 1.444444rem;
    background-color: #fff;
    border-bottom: 0.027778rem solid #fff;
  }

  .jiesuan input {
    position: absolute;
    top: 43%;
    left: 0.277778rem;
  }

  .jiesuan span {
    position: absolute;
    top: 40%;
    left: 1.388889rem;
  }

  .jiesuan p {
    position: absolute;
    top: 40%;
    left: 4rem;
  }

  .jiesuan p>b {
    color: red;
  }

  .jiesuan button {
    position: absolute;
    height: 0.833333rem;
    width: 3.388889rem;
    border-radius: 0.416667rem;
    background-color: #FF4F39;
    color: #fff;
    border: none;
    outline: none;
    top: 20%;
    right: 0.255556rem;
  }

</style>

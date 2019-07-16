<template>
<div class="footerBox">

  <div id="footer">
    <ul>
      <router-link tag="li" v-for="(item,index) in tabbar" :key="index" :to="item.path">
        <i class="iconfont" v-html="item.icon"></i>
        <span>{{item.title}}</span>
      </router-link>
    </ul>
  </div>
</div>
</template>
<script>
export default {
  name: "tabBar",
  data() {
    return {
      tabbar: [
        {
          title: "逛商场",
          path: "/goshopping",
          icon: "&#xe72b;"
        },
        {
          title: "发现",
          path: "/find",
          icon: "&#xe67f;"
        },
         {
          title: "购物",
          path: "/shopping",
          icon: "&#xe607;"
        },
        {
          title: "海外购",
          path: "/opshopping",
          icon: "&#xe619;"
        },
        {
          title: "我的",
          path: "/mine",
          icon: "&#xe61a;"
        }
      ]
    };
  }
};
</script>

<style scoped>
#footer{
    width: 100%;
    height: 0.98rem;
    /* height: 1rem; */
    position: fixed;
    background: #fff;
    left: 0;
    bottom: 0;
    z-index: 2000;
    border-top: 1px solid #ccc;
    }
#footer ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        }
#footer li{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #797d82;
            font-size: .2rem;
          }
#footer>ul>.router-link-active{
    color:#ff4c48;
}
#footer>ul>li>span{
    display: block;
    text-align: center;
    padding-top: .06rem;
    color: #666;
    font-size: 0.24rem;
    font-weight: 600
}
#footer>ul>li>i{
    font-size: .44rem;
    text-align: center;
    font-weight: 600
}
</style>
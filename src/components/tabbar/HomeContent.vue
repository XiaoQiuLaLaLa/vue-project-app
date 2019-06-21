<template>
  <div>
    <div class="swipe_container">
      <mt-swipe :auto="4000">
        <mt-swipe-item
          v-for="imgUrl in imgUrlArr"
          :key="imgUrl"
        >
          <img
            :src="imgUrl"
            alt=""
          >
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/nine/1.png" alt="">
            <div class="mui-media-body">新闻资讯</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/nine/2.png" alt="">
            <div class="mui-media-body">图片分享</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/nine/3.png" alt="">
            <div class="mui-media-body">商品购买</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/nine/4.png" alt="">
            <div class="mui-media-body">留言反馈</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/nine/5.png" alt="">
            <div class="mui-media-body">视频专区</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/nine/6.png" alt="">
            <div class="mui-media-body">联系我们</div>
          </a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgUrlArr: [
        require("../../images/swipe/1.jpg"),
        require("../../images/swipe/2.jpg"),
        require("../../images/swipe/3.jpg")
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.swipe_container {
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
.mui-content {
  ul {
    margin: 0 !important;
    border-width: 0px !important;
    background-color: white !important;
    li {
      background-color: white !important;
      border-width: 0px !important;
      img{
        height: 60px;
        .mui-media-body{
          font-size: 12px !important;
        }
      }
    }
  }
}
</style>

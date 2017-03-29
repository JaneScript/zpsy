<template>
<div>
  <nav-header v-bind:active-nav='active'></nav-header>
  <div class="newslist-con">
    <div class="container">
      <h2 class="aligncenter">正品溯源新闻</h2>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
          <a class="newslist-item" href="#/news/1">
            <img src="../assets/news6.jpg" alt="" class="img-responsive">
            <p class="news-title">“正品溯源”平台全球发布 扫码可辨商品真伪</p>
            <p class="news-date">2016-11-19</p>
          </a>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
          <a class="newslist-item" href="#/news/2">
            <img src="../assets/news5.jpg" alt="" class="img-responsive">
            <p class="news-title">正品溯源平台全球发布，为跨境贸易保驾护航</p>
            <p class="news-date">2016-11-18</p>
          </a>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
          <a class="newslist-item" href="#/news/3">
            <img src="../assets/news7.png" alt="" class="img-responsive">
            <p class="news-title">中日韩电商正品认证平台全球发布 为跨境贸易保驾护航</p>
            <p class="news-date">2016-11-18</p>
          </a>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
          <a class="newslist-item" href="#/news/4">
            <img src="../assets/news9.jpg" alt="" class="img-responsive">
            <p class="news-title">中日韩首个跨境正品溯源平台亮相上线</p>
            <p class="news-date">2016-04-13</p>
          </a>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
          <a class="newslist-item" href="#/news/5">
            <img src="../assets/news10.jpg" alt="" class="img-responsive">
            <p class="news-title">跨境正品溯源平台</p>
            <p class="news-date">2016-04-13</p>
          </a>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
          <a class="newslist-item" href="#/news/6">
            <img src="../assets/news13.jpg" alt="" class="img-responsive">
            <p class="news-title">中日韩跨境正品溯源平台上线 </p>
            <p class="news-date">2016-04-12</p>
          </a>
        </div>
      </div>
      <p class="loadmore" v-show="checkmore" v-cloak><span>查看更多</span></p>
    </div>
  </div>
  <nav-footer></nav-footer>
</div>  
</template>

<script>
import navHeader from '../components/header.vue'
import navFooter from '../components/footer.vue'
export default {
  name: 'apps',
  data () {
    return {
      active:'about',
      checkmore:false
    }
  },
  created () {

    },
    watch: {
      
    },
    methods: {

    },
    components : {
      'nav-header' : navHeader,
      'nav-footer' : navFooter
    }
}
</script>
<style lang="sass">
.newslist-item{
  width:96%;
  max-width:380px;
  margin:0 auto 30px;
  display: block;
  height:380px;
  overflow: hidden;
  img{
    height:260px;
  }
  .news-title{
    color:#333;
    font-size:1.6rem;
    padding:10px 0;
  }
  .news-date{
    color:#666;
    font-size:1.2rem;
  }
}
.loadmore{
  color:#11b3c0;
  font-size:1.8rem;
  margin:40px auto 80px;
  text-align: center;
  cursor:pointer;
  span{
    border:1px solid #11b3c0;
    padding:10px 100px;
  }
}
</style>



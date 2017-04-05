<template>
<div>
  <nav-header v-bind:active-nav='active'></nav-header>
  <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class="imgload" src="../assets/s1.png" alt="">
        </div>
        <div class="swiper-slide">
          <img class="imgload" src="../assets/s1.png" alt="">
        </div>
        <div class="swiper-slide">
          <img class="imgload" src="../assets/s1.png" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  <div class="container">
    <h2 class="aligncenter">产品服务优势</h2>
    <div class="row adverts-items">
      <div class="col-lg-3 col-sm-6 col-xs-12">
        <img src="../assets/1.png" alt="">
        <h4>国家权威公信力平台</h4>
        <p class="p1">
          中方主导<br>
          中日韩三方政府共推共建<br>
          源于跨境正品溯源
        </p>
      </div>
      <div class="col-lg-3 col-sm-6 col-xs-12">
        <img src="../assets/2.png" alt="">
        <h4>国家级混业正品溯源系统</h4>
        <p class="p1">
          兼容农产、美妆、微商<br>
          散养禽畜等场景<br>
          三步轻松使用
        </p>
      </div>
      <div class="col-lg-3 col-sm-6 col-xs-12">
        <img src="../assets/3.png" alt="">
        <h4>区块链保障数据不可篡改</h4>
        <p class="p1">
          以区块链技术<br>
          结合正品溯源专用码两套体系<br>
          确保数据安全
        </p>
      </div>
      <div class="col-lg-3 col-sm-6 col-xs-12">
        <img src="../assets/4.png" alt="">
        <h4>一物一码<br>DNA级防复制防伪</h4>
        <p class="p1">
          无痕隐身覆码技术<br>
          同时实现</br>
          防复制、防伪、防窜等功能
        </p>
      </div>
    </div>
    <div class="row adverts-items mt60">
      <div class="col-lg-3 col-sm-6 col-xs-12">
        <img src="../assets/5.png" alt="">
        <h4>防核武专业机房</h4>
        <p class="p1">
          超大规模数据中心遍布全国<br>
          每天防御超过8亿次Web攻击
        </p>
      </div>
      <div class="col-lg-3 col-sm-6 col-xs-12">
        <img src="../assets/6.png" alt="">
        <h4>国家专卖专控领域<br>同级标源供应商</h4>
        <p class="p1">
          多重防伪制标技术<br>
          专业溯源码印刷经验
        </p>
      </div>
      <div class="col-lg-3 col-sm-6 col-xs-12">
        <img src="../assets/7.png" alt="">
        <h4>独家加密送码服务</h4>
        <p class="p1">
          绝不开放专用码成为公共资源<br>
          拒绝一切可能出现的盗用
        </p>
      </div>
      <div class="col-lg-3 col-sm-6 col-xs-12">
        <img src="../assets/8.png" alt="">
        <h4>看见真实的幸福</h4>
        <p class="p1">
          联合中国信息无障碍协会<br>
          实现无障碍溯源服务
        </p>
      </div>
    </div>
    <router-link :to="{ path: 'product', query: { anchor: 'advert' }}" class="more">了解更多</router-link>
  </div>
  <div class="service-con bk1">
    <div class="container">
      <h2 class="aligncenter">更多增值服务</h2>
      <div class="row solution-items">
        <div class="col-lg-6 col-sm-12">
          <p class="p2">时刻把握渠道和消费者动态</p>
          <p class="p3 mt10 h80">实时扫码数据追踪服务，为企业CRM、ERP系统提供实时流通数据</p>
        </div>
        <div class="col-lg-6 col-sm-12">
          <p class="p2">混业数据与市场分析报告</p>
          <p class="p3 mt10 h80">跨地域，跨人群数据全面分析报告，展现全景数据画像</p>
        </div>
      </div>
      <div class="row solution-items">
        <div class="col-lg-6 col-sm-12">
          <p class="p2">进入顶级电商渠道白名单</p>
          <p class="p3 mt10 h80">作为诚信的数据化证据链，推动生产企业终端销售能力被充分认可</p>
        </div>
        <div class="col-lg-6 col-sm-12">
          <p class="p2">同业/大数据维权溯源服务体系</p>
          <p class="p3 mt10 h80">帮助企业实时线上监控，为净化商业环境提供技术支撑</p>
        </div>
      </div>
      <div class="row solution-items">
        <div class="col-lg-6 col-sm-12">
          <p class="p2">专享保险险种服务</p>
          <p class="p3 mt10 h80">通过有效明确主体责任，分担经营风险，保障企业和消费者的权益</p>
        </div>
        <div class="col-lg-6 col-sm-12">
          <p class="p2">与世界领先的认证机构紧密合作</p>
          <p class="p3 mt10 h80">以国际标准服务中国企业，确保消费者享受到更高品质的商品。</p>
        </div>
      </div>
      <router-link :to="{ path: 'product', query: { anchor: 'service' }}" class="more">了解更多</router-link>
    </div>
  </div>
  <div class="scene-con">
    <div class="container">
      <h2 class="aligncenter">混业正品溯源服务场景</h2>
      <div class="row scene-items">
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6 mt60">
          <div class="scene-item">
            <img src="../assets/s1.jpg" alt="">
            <p class="p4">农产品正品溯源</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6 mt60">
          <div class="scene-item">
            <img src="../assets/s2.jpg" alt="">
            <p class="p4">食品正品溯源</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6 mt60">
          <div class="scene-item">
            <img src="../assets/s3.jpg" alt="">
            <p class="p4">化妆品正品溯源</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6 mt60">
          <div class="scene-item">
            <img src="../assets/s4.jpg" alt="">
            <p class="p4">跨境电商溯源体系</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6 mt60">
          <div class="scene-item">
            <img src="../assets/s5.jpg" alt="">
            <p class="p4">微商供应链溯源体系</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6 mt60">
          <div class="scene-item">
            <img src="../assets/s6.jpg" alt="">
            <p class="p4">散养禽畜溯源体系</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="partner-con">
    <div class="container">
      <h2 class="aligncenter">合作伙伴</h2>
      <div class="row partner-items">
        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
          <img src="../assets/c1.png" alt="">
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
          <img src="../assets/c2.png" alt="">
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
          <img src="../assets/c3.png" alt="">
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
          <img src="../assets/c4.png" alt="">
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
          <img src="../assets/c5.png" alt="">
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
          <img src="../assets/c6.png" alt="">
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
          <img src="../assets/c7.png" alt="">
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
          <img src="../assets/c8.png" alt="">
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
          <img src="../assets/c9.png" alt="">
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
          <img src="../assets/c10.png" alt="">
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
          <img src="../assets/c11.png" alt="">
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6">
          <img src="../assets/c12.png" alt="">
        </div>
      </div>
    </div>
  </div>
  <div class="container" v-if="!staticMode">
    <h2 class="aligncenter">立即注册</h2>
      <div class="btns">
        <a href="" class="login-btn fl">登录</a>
        <a href="" class="login-btn fr">注册</a>
      </div>
  </div>
  <nav-footer></nav-footer>
</div>
</template>

<script>
import navHeader from '../components/header.vue'
import navFooter from '../components/footer.vue'
export default {
  name: 'home',
  data () {
    return {
      staticMode:true,
      active:'home'
    }
  },
  created () {

    },
  mounted(){
    var mySwiper = new Swiper('.swiper-container', {
       direction: 'horizontal',
       loop: true,
       pagination: '.swiper-pagination',
       autoplay : 2000
     })
  },
  watch: {
    
  },
  methods: {
    // proService:function(){
    //   this.$router.push('product');
    //   setTimeout(function(){
    //     document.getElementById('service').scrollIntoView()
    //   },50)
    // },
    // proAdvert:function(){
    //   this.$router.push('product');
    //   setTimeout(function(){
    //     document.getElementById('advert').scrollIntoView()
    //   },50)
    // }
  },
  components : {
    'nav-header' : navHeader,
    'nav-footer' : navFooter
  }
}
</script>
<style lang="sass">
  .swiper-slide{
    img{
      width:100%;
      display:block;
    }
  }
  .swiper-pagination-bullet-active{
    background:#fff;
  }
  .adverts-items{
    div{
      margin-top:30px;
      img{
        width:70px;
        height:70px;
        display: block;
        margin:0 auto;
      }
      h4{
        text-align: center;
        font-weight:700;
        font-size:1.3rem;
        margin:20px 0 0 0;
        height:60px;
      }
      .p1{
        text-align:center;
        font-size:1rem;
        line-height:24px;
      }
    }
  }
  .more{
    font-size:2rem;
    color:#0db1be;
    margin:60px auto;
    display:block;
    min-width:140px;
    width:30%;
    text-align:center;
  }
  .bk1{
    background:#f8f8f8;
  }
  .bk2{
    background:#f8f8f8;
  }
  .bk3{
    background:#dcf4f6;
  }
  .service-con{
    width:100%;
  }
  .p2{
    font-size:1.5rem;
    color:#333;
  }
  .p3{
    font-size:1.4rem;
    color:#666666;
  }
  .p4{
    font-size:1.6rem;
    color:#333;
    display: flex;
    justify-content:center;
    align-items:Center;
    height:100%;
    padding:15px 0;
  }
  .scene-item{
    width:80%;
    text-align:center;
    margin:0 auto;
    box-shadow:5px 5px 20px #c4c4c4;
    img{
      display: block;
      width:100%;

    }
  }
  .scene-con{
    margin-bottom:60px;
  }
  .partner-con{
    padding-bottom:60px;
    background:url(../assets/bk2.jpg) no-repeat center center;
    background-size:cover;
  }
  .partner-items{
    div{
      margin-bottom:20px;
      img{
        display:block;
        margin:0 auto;
        width:100%;
        max-width:176px;
      }
    }
  }
  .login-con{
    h2{
      color:#11b3c0;
    }
  }
  .btns{
    &:after{
      content:".";        
      display:block;        
      height:0;        
      clear:both;        
      visibility:hidden; 
    }
    width:60%;
    margin:0 auto 60px;
  }
  .login-btn{
    width:40%;
    height:80px;
    line-height:80px;
    border:2px solid #11b3c0;
    color:#11b3c0;
    text-align:center;
    font-size:2rem;
    display: block;
  }
  a:focus, a:hover{
    color:none;
    text-decoration:none;
  }
</style>



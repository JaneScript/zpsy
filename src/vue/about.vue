<template>
<div>
  <nav-header v-bind:active-nav='active'></nav-header>
  <div class="banner">
    <img src="../assets/about.png" alt="">
  </div>
  <div class="about-con">
    <div class="container">
      <p class="about-title">正品溯源是一家致力于为广大消费者和制造商提供专业正品认证服务的互联网科技公司。总部位于北京，在中国及世界拥有多家分支机构。</p>
      <div class="about-item">
        <p class="aboutp1">愿景：</p>
        <p class="aboutp2">看见真实的幸福</p>
      </div>
      <div class="about-item">
        <p class="aboutp1">使命：</p>
        <p class="aboutp2">改变市场假冒伪劣现象，重塑中国制造的国际形象</p>
      </div>
      <div class="about-item">
        <p class="aboutp1">定位：</p>
        <p class="aboutp2">公正、自律、创新</p>
      </div>
      <div class="about-item">
        <p class="aboutp1">战略：</p>
        <p class="aboutp2">创造性建立规范化标准，连接厂商与消费者，实现经济与社会价值双赢</p>
      </div>
      <div class="about-item">
        <p class="aboutp1">目标：</p>
        <p class="aboutp2">1、国家级混业正品溯源系统；<br>2、以创新实现便捷与可靠；<br>3、在互联网世界建立中国跨境正品溯源标准；</p>
      </div>
    </div>
  </div>
  <div class="about-con bk1">
    <div class="container">
      <p class="about-title">正品溯源专注提供“原创正品”+“防伪溯源”解决方案及其应用，为企业和个人提供“国家级”权威第三方正品服务认证和防伪溯源鉴定方案，以保障商品溯源的权威性、便携性与可靠性。</p>
      <div class="about-item">
        <p class="aboutp3">正品（genuine）：</p>
        <p class="aboutp2">每一个原创正品品牌都应当获得原产地正品保障认可。</p>
      </div>
      <div class="about-item">
        <p class="aboutp3">溯源（tracing）：</p>
        <p class="aboutp2">每一个消费者都有权力对任意原产地商品的流通环节进行追溯。</p>
      </div>
      <p class="about-title">我们是一家第三方服务机构，独立、客观、稳定、可信是我们的基石，“国家级”服务平台将保障我们的权威性。</p>
      <p class="about-title">我们期望未来在生产、流通、消费中，让商品始终充满善意，让人们互相感受信任。</p>
      <p class="about-title">我们相信，市场假冒伪劣环境在相当一段时间内还会存在，正品溯源服务将会任重而道远。</p>
      <p class="about-title">我们相信，这个行业需要改变的不仅是产品和技术，真正变革的方向是如何真正能够让用户看到真实的幸福。</p>
      <p class="about-title">我们相信，更好的正品溯源服务，将会让越来越多的用户加入我们，我们所期盼的真实的幸福就会到来。</p>
      <p class="about-title">我们是立足全球的科技初创企业，将为全球跨境电商提供服务。</p>
    </div>
  </div>
  <div class="contact-con" id="contact-con" name="contact-con">
      <div class="container">
        <h2 class="aligncenter">联系我们</h2>
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div class="contact-item">
              <img src="../assets/contact.png" alt="">
              <p class="p1">合作</p>
              <p class="p2">coo@izheng.org</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div class="contact-item">
              <img src="../assets/mail.png" alt="">
              <p class="p1">建议</p>
              <p class="p2">coo@izheng.org</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div class="contact-item">
              <img src="../assets/phone.png" alt="">
              <p class="p1">电话</p>
              <p class="p2">400-555-8888</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  <nav-footer></nav-footer>
</div> 
</template>

<script>
import navHeader from '../components/header.vue'
import navFooter from '../components/footer.vue'
export default {
  name: 'about',
  data () {
    return {
     active:'about'
    }
  },
  mounted(){
    
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
  .banner{
    img{
      width:100%;
      display: block;
    }
  }
  .about-con{
    padding-top:80px;
  }
  .about-title{
    font-size:1.6rem;
    color:#333;
    margin-bottom:60px;
  }
  .about-item{
    display:flex;
    font-size:1.6rem;
    color:#333;
    margin-bottom:60px;
    .aboutp1{
      color:#11b3c0;
      min-width:60px;
    }
    .aboutp3{
      color:#11b3c0;
      min-width:140px;
    }
  }
</style>



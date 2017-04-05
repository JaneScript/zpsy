<template>
<div class="apps-con">
  <nav-header v-bind:active-nav='active'></nav-header>
  <div class="download-con">
    <img class="downloadbg" src="../assets/pdbg.jpg" alt="">
    <div class="container downloadwrap">
      <div class="row">
        <div class="col-lg-4 col-lg-4 col-sm-4 col-xs-4 hand">
          <img src="../assets/hand.png" alt="">
        </div>
        <div class="col-md-8 col-md-8 col-sm-8 col-xs-8 text">
          <p class="p6">看见真实的幸福？正品溯源应用下载</p>
          <div class="qrcodes hidden-xs">
            <div>
              <img src="../assets/qrcode.jpg" alt="">
              <p>扫描下载正品溯源</p>
            </div>
            <div>
              <img src="../assets/qrcode.jpg" alt="">
              <p>正品溯源官方微信</p>
            </div>
          </div>
          <div class="dllinks">
            <a href=""><img src="../assets/dlbtn1.png" alt=""></a>
            <a href=""><img src="../assets/dlbtn2.png" alt=""></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="function-con">
    <div class="container">
      <h2 class="aligncenter">主要功能</h2>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p class="p2">【扫码识真假】</p>
          <p class="p3">扫描商品外包装上的正品溯源码，即可得知商品是否为正品，信息权威可靠。</p>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p class="p2">【扫码比价格】</p>
          <p class="p3">扫描商品外包装上的正品溯源码，可比较主流电商平台的商品价格。</p>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p class="p2">【免费正品保险】</p>
          <p class="p3">经正品溯源扫码认证为正品的产品，即可获赠正品溯源免费正品保险，如该产品出现问题，将由正品溯源联系保险公司进行相应赔付！</p>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p class="p2">【权威发布】</p>
          <p class="p3">曝光栏第一时间更新全国质监部门权威信息。</p>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p class="p2">【有奖举报】</p>
          <p class="p3">遇到了有问题的商品？欢迎通过举报告诉我们相关信息，举报信息一经确认，即可获得相应奖励。</p>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p class="p2">【码友交流】</p>
          <p class="p3">买到好东西想在朋友面前炫耀？买到不好的东西想要吐槽？想跟其他人一起交流使用心得？你要的这里都有。</p>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p class="p2">【免费福利】</p>
          <p class="p3">天天登录，参加活动，积累免费积分，即可获得实物福利。</p>
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
  name: 'apps',
  data () {
    return {
      active:'apps'
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
.apps-con{
  .download-con{
    position:relative;
    .downloadwrap{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      .row{
        height:100%;
        .hand{
          height:100%;
        }
      }
    }
    .downloadbg{
      width:100%;
      height:100%;
      display: block;
    }
    .hand{
      img{
        height:100%;
      }
    }
    .p6{
      font-size:2.2rem;
      color:#fff;
      font-weight:700;
      margin-top:10%;
    }
    .dllinks{
      width:100%;
      display: flex;
      margin-top:5%;
      a{
        display:block;
        width:35%;
        margin-right:10px;
        text-align: center;
        img{
          max-width:250px;
        }
      }
    }
    .qrcodes{
      width:100%;
      display: flex;
      text-align: center;
      margin-top:2%;
      div{
        width:35%;
        margin-right:10px;
        img{
          width:60%;
          max-width:198px;
        }
        p{
          color:#fff;
          font-size:1.4rem;
        }
      }
    }
  }
}
</style>



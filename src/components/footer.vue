<template>
  <footer>
    <div class="container">
      <div class="row mt40">
        <div class="col-lg-10 col-md-10 col-sm-12 sitemap-div mb30">
          <p class="p5">网站地图</p>
          <div class="row mt20 site-items">
            <div class="col-lg-3 col-sm-6 col-xs-6"><a href="">代理招商</a></div>
            <div class="col-lg-3 col-sm-6 col-xs-6"><a href="">商务合作</a></div>
            <div class="col-lg-3 col-sm-6 col-xs-6"><a href="">CPS推广</a></div>
            <div class="col-lg-3 col-sm-6 col-xs-6"><a href="">云+创业计划</a></div>
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-12 contact-div mb30">
          <p class="p5">关注我们</p>
          <div class="row mt20 pd15-hor">
            <a class="sina" href="">新浪微博</a>
            <div class="weixin">
              <p>关注微信公众号</p>
              <img src="../assets/qrcode.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
      <p class="beian">Copyright ©2013-2017 | Terms, Conditions and Privacy Policy | 京ICP备17013961号-1</p>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  created(){

  }
}
</script>
<style lang="sass">
  footer{
    width:100%;
    background:#2e3134
  }
  .beian{
    line-height:30px;
    border-top:1px solid #fff;
    color:#fff;
  }
  .p5{
    font-size:1rem;
    color:#fff;
  }
  .mt40{
    margin-top:40px
  }
  .site-items{
    div{
      height:40px;
      line-height:40px;
    }
    a{
      text-decoration:none;
      color:#fff;
      text-align: left;
    }
  }
  .sina{
    height:40px;
    line-height:40px;
    display:block;
    color:#fff;
    &:after{

    }
  }
  .weixin{
    p{
      color:#fff;
      line-height:30px;
    }
    img{
      width:80px;
      height:80px;
    }
  }
</style>



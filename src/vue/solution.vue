<template>
  <div>
    <nav-header v-bind:active-nav='active'></nav-header>
    <div class="solu-con">
      <div class="container">
        <h2 class="aligncenter">正品溯源二维码解决方案</h2>
        <img src="../assets/pic33.png" alt="">
      </div>
    </div>
    <div class="ques-con bk1">
      <div class="container">
        <h2 class="aligncenter">常见问题</h2>
        <ul class="ques-list">
          <li>
            <p class="Q"><span>Q：</span>为什么不提供免费版本？</p>
            <p class="A"><span>A：</span>作为独立第三方溯源平台，我们需要有自主的收入来承担运营成本，以确保公正性。</p>
          </li>
          <li>
            <p class="Q"><span>Q：</span>按需购买的用户是否能享受一些优惠政策?</p>
            <p class="A"><span>A：</span>不会，我们只会给您物超所值的高品质技术服务。</p>
          </li>
          <li>
            <p class="Q"><span>Q：</span>如果需要更多的定制服务怎么办？</p>
            <p class="A"><span>A：</span>太好了，请立刻联系我们</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="contact-con">
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
  name: 'solution',
  data () {
    return {
      active:'solution'
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
  .solu-con{
    img{
      width:100%;
      display: block;
    }
  }
  .ques-list{
    li{
      margin-bottom:60px;
    }
    .Q{
      span{
        font-size:2.2rem;
        color:#333;
        font-weight:700;
      }
      font-size:1.8rem;
      color:#333
    }
    .A{
      span{
        font-size:2.2rem;
        color:#333;
        font-weight:700;
      }
      font-size:1.5rem;
      color:#666
    }
  }
  .contact-item{
    border:1px solid #11b3c0;
    margin:0 15px 40px 15px;
    padding:15px 0;
    text-align: center;
    font-size:1.5rem;
    img{
      margin:8px 0;
    }
    .p1{
      font-weight:700;
    }
  }
</style>



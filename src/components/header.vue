<template>
<nav class="navbar navbar-default" role="navigation">
    <div class="container">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse"
                data-target="#example-navbar-collapse">
            <span class="sr-only">切换导航</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#"><img src="../assets/logo.png" alt=""></a>
    </div>
    <div class="collapse navbar-collapse" id="example-navbar-collapse">
        <ul class="nav navbar-nav">
            <li v-bind:class="[{active:activeNav=='home'}]"><router-link :to="{ name: 'home'}">首页</router-link></li>
            <li v-bind:class="{active:activeNav=='product'}"><router-link :to="{ name: 'product'}">产品服务</router-link></li>
            <li v-bind:class="{active:activeNav=='solution'}"><router-link :to="{ name: 'solution'}">解决方案</router-link></li>
            <li v-bind:class="{active:activeNav=='apps'}"><router-link :to="{ name: 'apps'}">APP</router-link></li>
            <li class="dropdown" v-bind:class="{active:activeNav=='about'}">
                <a href="#/about" class="dropdown-toggle" data-toggle="dropdown">
                    关于</b>
                </a>
                <ul class="dropdown-menu">
                    <li><a href="#/about">关于</a></li>
                    <li><a @click="anchor">联系</a></li>
                    <li><a href="#/newslist">新闻</a></li>
                </ul>
            </li>
            <!-- <li><a href="#">登录</a></li>
            <li><a href="#">注册</a></li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    中文 <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                    <li><a href="#">English</a></li>
                    <li><a href="#">コψ</a></li>
                </ul>
            </li> -->
        </ul>
    </div>
    </div>
</nav>
</template>

<script>
export default {
  props: ['activeNav'],
  data () {
    return {
      
    }
  },
  created(){
    
  },
  methods:{
    anchor(){
      this.$router.push('about');
      setTimeout(function(){
        document.getElementById('contact-con').scrollIntoView()
      },10)
    }
  }
}
</script>
<style lang="sass">
  .navbar{
    margin-bottom:0;
  }
  .navbar-default{
    background:#000;
    padding:5px 0;
  }
  .navbar-nav{
    float:right;
  }
  .navbar-brand{
    padding:0 15px;
  }
  .navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover{
    background:none;
    color:#1aeeff;
  }
  .navbar-default .navbar-nav>li>a:focus, .navbar-default .navbar-nav>li>a:hover{
    color:#fff;
  }
  .navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:focus, .navbar-default .navbar-nav>.open>a:hover{
    color:#fff;
    background:none;
  }
  .navbar-default .navbar-nav>li>a{
    color:#fff;
    font-size:18px;
  }
  .navbar-default{
    border:0;
  }
  .navbar-default .navbar-nav .open .dropdown-menu>li>a{
    color:#fff;
    cursor:pointer;
  }
  .navbar-default .navbar-nav .open .dropdown-menu>li>a:focus, .navbar-default .navbar-nav .open .dropdown-menu>li>a:hover{
    color:#fff
  }
  .dropdown-menu{
    background:#000;
  }
  .dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover{
    background:#333;
  }
  .navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover{
    background:#000;
  }
  .navbar-default .navbar-toggle{
    border-color:#fff;
  }
  .navbar-default .navbar-toggle .icon-bar{
    background-color:#fff;
  }
</style>



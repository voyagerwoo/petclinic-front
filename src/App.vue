<template>
  <div id="app">
    <nav class="navbar is-white">
      <div class="navbar-brand">
        <a class="navbar-item" href="#/">
          <h2 class="is-size-4">AK 동물병원</h2>
        </a>

        <div class="navbar-burger burger" data-target="petclinic-navbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="petclinic-navbar" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="#/staff">직원 소개</a>
          <a class="navbar-item" href="#/booking">예약</a>
          <a class="navbar-item" href="#/my-pets">나의 펫</a>
          <a class="navbar-item" href="#/pet-pictures">펫 사진</a>
        </div>

        <div class="navbar-end">
          <a class="navbar-item" href="#/login">로그인</a>
          <a class="navbar-item" href="#/signup">회원가입</a>
        </div>
      </div>
    </nav>
    <div class="container main-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      if(process.env.NODE_ENV === 'development') {
        console.log(`### DEV MODE ###\nROOT API : ${process.env.ROOT_API}`);
      }
    }
  }
</script>

<style>
  @import url('//cdn.jsdelivr.net/font-iropke-batang/1.2/font-iropke-batang.css');

  #app {
    font-family: "Iropke Batang", "IropkeBatang", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
  }
  #app .main-content {
    padding: 1em;
  }
</style>

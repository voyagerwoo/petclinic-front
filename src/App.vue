<template>
  <div id="app">
    <h2><a href="#/">AK 동물병원</a></h2>
    <ul class="app-nav">
      <li><a href="#/staff">직원 소개</a></li>
      <li><a href="#/booking">예약</a></li>
      <li><a href="#/my-pets">나의 펫</a></li>
      <li><a href="#/pet-pictures">펫 사진</a></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('//cdn.jsdelivr.net/font-iropke-batang/1.2/font-iropke-batang.css');
#app {
  font-family: "Iropke Batang","IropkeBatang","Apple SD Gothic Neo","Malgun Gothic",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  max-width: 820px;
  margin: 0 auto;
  text-align: left;
}

#app h2 {
  display: inline-block;
}

#app .app-nav {
  display: inline-block;
}

#app .app-nav li {
  list-style: none;
  display: inline-block;
  margin-left: 1em;
}

#app .app-nav li {
  list-style: none;
  display: inline-block;
}
</style>

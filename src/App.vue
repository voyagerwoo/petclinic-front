<template>
  <div id="app">
    <h2><a href="">AK 동물병원</a></h2>
    <ul>
      <li><a href="#/staff">직원 소개</a></li>
      <li><a href="">예약</a></li>
      <li><a href="">나의 펫</a></li>
      <li><a href="">펫 사진</a></li>
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
#app {
}
</style>

<template>
  <div>
    <h1>AK 직원 소개</h1>

  </div>
</template>

<script>
import restService from '../services/restService'
export default {
  name: 'Staffs',
  created () {
    restService.fetchVets().then(r => console.log(r))
  }
}
</script>

<style scoped>

</style>

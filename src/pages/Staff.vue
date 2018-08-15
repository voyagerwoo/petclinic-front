<template>
  <div>
    <div class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">AK 동물병원 직원소개</h1>
        </div>
      </div>
    </div>

    <div class="row columns is-tablet is-multiline">
      <div class="column is-one-third" v-for="vet in vets" v-bind:key="vet.id+'card'">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="/static/images/no-imagesdf.jpg" alt="Placeholder image" onerror="this.src='/static/images/no-image.jpg'">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{vet.lastName}}{{vet.firstName}}</p>
                <!--TODO <p class="subtitle is-6">@johnsmith</p>-->
              </div>
            </div>

            <div class="content">
              {{vet.description}}
              <p>
                <code>#{{vet.year}}년차</code><code v-for="specialty in vet.specialties" v-bind:key="specialty.id">#{{specialty.name}}</code>
              </p>
              <br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import restService from '../services/restService'
export default {
  name: 'Staffs',
  data: function () {
    return {
      vets: []
    }
  },
  created () {
    restService.fetchVets().then(r => { this.vets = r })
  }
}
</script>

<style scoped>
code {
  margin-left: 5px;
}
</style>

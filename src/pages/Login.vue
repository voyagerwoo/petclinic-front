<template>
  <section>
    <div class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">로그인</h1>
          <p>AK 동물병원에 로그인하고 <br>
            애완동물의 건강을 관리하세요!</p>
        </div>
      </div>
    </div>
    <div class="columns is-tablet is-centered">
      <div class="column is-half">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field is-grouped is-grouped-centered">
          <p class="control">
            <a class="button is-primary">
              로그인
            </a>
          </p>
          <p class="control">
            <a class="button is-light" href="#/signup">
              회원가입
            </a>
          </p>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style scoped>

</style>

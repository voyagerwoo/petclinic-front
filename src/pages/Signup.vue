<template>
  <section>
    <div class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">회원가입</h1>
        </div>
      </div>
    </div>
    <div class="columns is-tablet is-centered">
      <div class="column is-half">
        <div class="field">
          <label class="label">이름</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" placeholder="이름을 입력하세요.">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <!-- TODO 문제가 없을 경우에 check 표시 -->
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
            <p class="help is-success">This username is available</p>
          </div>
        </div>

        <div class="field">
          <label class="label">이메일</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-danger" type="email" placeholder="이메일 주소를 입력하세요.">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <!--TODO 문제가 있을 경우에 check 표시-->
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
            <p class="help is-danger">This email is invalid</p>
          </div>

        </div>
        <div class="field">
          <label class="label">비밀번호</label>
          <div class="control has-icons-left">
            <input class="input" type="password" placeholder="비밀번호를 입력하세요.">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <div class="control has-icons-left">
            <input class="input" type="password" placeholder="비밀번호를 다시한번 입력하세요.">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">전화번호</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="전화번호를 입력하세요.">
            <span class="icon is-small is-left">
              <i class="fas fa-mobile-alt"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox">
              <a href="#">서비스 이용 약관</a>에 동의합니다.
            </label>
          </div>
        </div>

        <div class="field is-grouped is-grouped-centered">
          <p class="control">
            <a class="button is-primary">
              제출
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Signup"
  }
</script>

<style scoped>

</style>

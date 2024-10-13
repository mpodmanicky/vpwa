<!--Martin Podmanicky, 
  Log-in and registration Page.
-->
<template>
  <q-page padding>
    <div class="welcome-page">
      <div class="welcome-text">
        <div class="title">Slack Clone</div>
        <div class="subtitle">Slack brings the <br> team together <br> wherever you are</div>
        <div class="developers-info">Web browser application developed by Martin Podmanicky,<br> Lucas Espitia.</div>
      </div>

      <div class="signup-container">
        <div class="title-sign">Get chatting!</div>
        <LogInTemplate v-if="isLogIn" />
        <RegisterTemplate v-else />

        <div class="control-buttons">
          <q-btn
            color="primary"
            :label="isLogIn ? 'Log In' : 'Register'"
            @click="console.log('clicked...loggin in!')"
          />
          <h6 id="decision">or</h6>
          <q-btn
            color="primary"
            :label="isLogIn ? 'Register' : 'Log in'"
            @click="isLogIn = !isLogIn"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import LogInTemplate from 'src/components/LogInTemplate.vue';
import RegisterTemplate from 'src/components/RegisterTemplate.vue';

const isLogIn = ref(true);

defineOptions({
  name: 'IndexPage'
});
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';

.q-page {
  background-color: $secondary;
  padding-bottom: 80px; 
}

.welcome-page {
  background-color: $secondary;
  @media screen and (max-width: 600px) {
    height: 100%;
  }
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

h1, h3, p {
  margin: 15px 150px;
  @media screen and (max-width: 600px) {
    margin: 15px 15%;  
  }
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
}

p {
  font-weight: 300;
}

.signup-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 50%;
    text-align: right;
  }

  .title-sign {
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: 500;
    text-align: center; 
  }

  .control-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;

    #decision {
      margin: 0 10px;
    }
  }
}

@media (max-width: 768px) {
  .welcome-text .title {
    font-size: 7vw;
  }

  .welcome-text .subtitle {
    font-size: 4vw;
  }
}
</style>

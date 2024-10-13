<!--Martin Podmanicky, 
  Log-in and registration Page.
-->
<template>
  <div class="welcome-page">
    <div class="welcome-text">
      <h1>slack clone</h1>
      <h3>Slack brings the <br> team together <br> wherever you are</h3>
      <p>Web browser application developed by Martin Podmanicky,<br> Lucas Espitia.</p>
    </div>
    <div class="signup-container">
      <h4>Get chatting!</h4>
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

.welcome-text {
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}

.input-field {
  margin: 15px 0;
  color: white;
}
.welcome-page {
  background-color: $secondary;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: white;
  @media screen and (max-width: 600px) {
    height: 100%;
  }
}

h1, h3, p {
  margin: 15px 150px;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  @media screen and (max-width: 600px) {
    margin: 15px 15%;  
  }
}

p {
  font-weight: 300;
}

.signup-container {
  margin: 15px 150px;
  @media screen and (max-width: 600px) {
    margin: 15px 15%;
  }
}

.control-buttons {
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
}

#decision {
  margin: 0;
}

h4 {
  font-weight: 500;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  margin: 15px 0;
}

</style>
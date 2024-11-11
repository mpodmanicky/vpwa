<!-- IndexPage.vue -->
<template>
  <q-page>
    <div class="welcome-page">
      <div class="welcome-text">
        <h1>Slack Clone</h1>
        <h3>
          Slack brings the <br />
          team together <br />
          wherever you are
        </h3>
        <p>
          Web browser application developed by Martin Podmanicky,<br />
          Lucas Espitia.
        </p>
      </div>

      <div class="signup-container">
        <h4>Get chatting!</h4>

        <!-- Using ref to reference LogInTemplate and access validateLogin -->
        <LogInTemplate v-if="isLogIn" ref="loginTemplate" @login="loginUser" />
        <RegisterTemplate v-else ref="registerTemplate" />
        <!-- Add ref here -->

        <div class="control-buttons">
          <!-- Log In or Register button -->
          <q-btn
            color="primary"
            :label="isLogIn ? 'Log In' : 'Register'"
            @click="handleLogin"
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
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import LogInTemplate from "src/components/LogInTemplate.vue";
import RegisterTemplate from "src/components/RegisterTemplate.vue";
const isLogIn = ref(true);
const router = useRouter();

function handleLogin({ email, password }) {
  console.log("Loggin in with....", email, password);
  router.push("/slack");
}
async function registerUser() {
  // create a way to handle text from input i need to emit them
  var user = {
    name:,
    email:,
    password:,
    re_password:,
  };
  // we'll be using fetch
  fetch("http://localhost:3333/register", {
    method: POST,
    "Content-type": "application/json",
    body: JSON.stringify(user),
  })
  .then(response = response.json())
    .then(data => {
      console.log(data)})
    .catch(error => {
      console.log(error)});
};
async function loginUser() {
  var user = {
    email:,
    password:,
  };
  fetch("http://localhost:3333/login", {
    method: POST,
    "Content-type": "application/json",
    body: JSON.stringify(user),
  })
    .then(response => response.json())
    .then(data => {
      //after successful login we prompt the user to mainpage saving user state and loading all the shit
      //channels
      //user
      console.log(data)})
    .catch(error => {
      console.log(error)});
};
defineOptions({
  name: "IndexPage",
});
</script>

<style lang="scss" scoped>
@import "src/css/quasar.variables.scss";

.welcome-page {
  min-height: inherit;
  background-color: $secondary;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.welcome-text {
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}

.input-field {
  margin: 15px 0;
  color: white;
}

h1,
h3,
p {
  margin: 15px 150px;
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
}

p {
  font-weight: 300;
}

.signup-container {
  margin: 15px 150px;
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

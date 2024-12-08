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
        <LogInTemplate
          v-if="isLogIn"
          ref="loginTemplate"
          @login="handleLogin"
        />
        <RegisterTemplate
          v-else
          ref="registerTemplate"
          @register="handleRegister"
        />
        <!-- Add ref here -->

        <div class="control-buttons">
          <!-- Log In or Register button -->
          <!---->
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
import { useRouter } from "vue-router";
import LogInTemplate from "src/components/LogInTemplate.vue";
import RegisterTemplate from "src/components/RegisterTemplate.vue";
const isLogIn = ref(true);
const router = useRouter();
import { store } from 'src/store/store.js'

function handleLogin(credentials) {
  if (credentials.email.value !== "" && credentials.password.value !== "") {
    loginUser(credentials.email, credentials.password);
  }
}

function handleRegister(credentials) {
  if (
    credentials.name.value !== "" &&
    credentials.username.value !== "" &&
    credentials.email.value !== "" &&
    credentials.password.value !== "" &&
    credentials.repassword.value !== ""
  ) {
    registerUser(credentials);
  }
}

async function registerUser(credentials) {
  // create a way to handle text from input i need to emit them
  var user = {
    name: credentials.name.value,
    username: credentials.username.value,
    email: credentials.email.value,
    password: credentials.password.value,
    repassword: credentials.repassword.value,
  };
  console.log(user);
  // we'll be using fetch
  fetch("http://localhost:3333/registerUser", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      if(response.ok) {
      return response.json()
      } else {
      throw new Error ('Registration failed')
      }
    })
    .then((data) => {
      store.username = data.username
      router.replace("slack");
      console.log(store.username);
    })
    .catch((error) => {
      console.log(error);
    });
}
async function loginUser(inputEmail, inputPassword) {
  var user = {
    email: inputEmail.value,
    password: inputPassword.value,
  };
  fetch("http://localhost:3333/loginUser", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error('Login failed')
      }
    })
    .then((data) => {
      store.username = data.username
      router.replace('slack');
      console.log(store.username);
    })
    .catch((error) => {
      console.log(error);
    });
}
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

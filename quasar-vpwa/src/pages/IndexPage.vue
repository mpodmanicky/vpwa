<template>
  <q-page>
    <div class="welcome-page">
      <div class="section welcome-text" id="welcome-section">
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
      <div class="section signup-container" id="signup-section">
        <h4 id="title-signup">Get chatting!</h4>
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

        <div class="control-buttons">
          <div class="separator">
            <span>or</span>
          </div>
          <q-btn
            color="primary"
            :label="isLogIn ? 'Register' : 'Log in'"
            @click="isLogIn = !isLogIn"
            rounded
            style="width:100px; margin-bottom: 10px;"
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
    console.log("Logeando")
    loginUser(credentials.email, credentials.password);
  } else {
    console.log("Empty email or password")
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
    email: inputEmail,
    password: inputPassword,
  };

  console.log("email:", inputEmail, "\npassword:", inputPassword);
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
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: center; 
  min-height: 100vh; 
  padding: 0 50px; 
  background-color: $secondary;
  color: white;
  scroll-behavior: smooth;
  overflow: hidden; 
}


.welcome-text {
  flex: 3; 
  max-width: 70%; 
  margin-left: 5%; 
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}

h1 {
  margin: 0 0 20px;
  font-size: 4rem; 
  font-family: "Roboto", sans-serif;
  font-weight: 700;
}

h3 {
  margin: 0 0 20px;
  font-size: 2rem; 
  font-family: "Roboto", sans-serif;
}

p {
  font-weight: 300;
  margin: 0 0 20px;
  font-size: 1.2rem;
}

.signup-container {
  max-width: 350px;
  flex: 2; 
  padding: 20px;
  background-color: $primary; 
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
}

#title-signup{
  text-align: center; 
}

.control-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.separator {
  background-color: $primary;
  font-size: 15px;
  margin-top: 6px;
  margin-left: 145px;
  width: 10px;
  
}


.control-buttons {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 15px;
}

@media (max-width: 768px) {
  h3 {
    margin-top: 150px;
    margin-bottom: 140px;
  }

  .welcome-page {
    display: flex;
    flex-direction: column; 
    padding: 20px;
  }


  .section {
    flex: 1 0 auto; 
    margin-bottom: 20px; 
  }

  .welcome-text {
    max-width: 100%; 
  
    text-align: center;
  }

  .signup-container {
    margin: auto;
    flex: 0 1 auto; 
    margin-top: 20px;
    align-items: center;
  }
}
@media (max-width: 425px){
  h3 {
    margin-top: 150px;
    margin-bottom: 100px;
  }
}
@media (max-width: 385px) {
  h1{
    font-size: 3rem;
  }
  h3{
    font-size: 2rem;
  }
  .signup-container{
    padding: 10px;
  }
  .separator {
    margin-left: 120px;
  }
}
</style>
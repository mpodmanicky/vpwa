<template>
  <div class="welcome-page">
    <div>
      <h1>slack clone</h1>
      <h3>Slack brings the <br> team together <br> wherever you are</h3>
      <p>Web browser application developed by Martin Podmanicky,<br> Lucas Espitia.</p>
    </div>
    <div class="login-container">
      <div class="input-field">
        <q-input standout dense bg-color="accent" v-model="email" type="email" label="Email"/>
      </div>
      <div class="input-field">
        <q-input standout dense bg-color="accent" v-model="password" type="password" label="Password">
          <!-- <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
          </template> -->
        </q-input>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';

.input-field {
  margin: 15px 0;
  color: white;
}
.welcome-page {
  background-color: $secondary;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

h1, h3, p {
  margin: 15px 150px;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
}

p {
  font-weight: 300;
}

.login-container {
  margin: 15px 150px;
}

</style>
<template>
  <q-input
    v-model="email"
    standout
    dense
    bg-color="accent"
    type="text"
    label="Email"
    style="margin: 15px 0; width: 300px"
    class="inputLogIn"
  />
  <q-input
    v-model="password"
    standout
    dense
    bg-color="accent"
    :type="isPwd ? 'password' : 'text'"
    label="Password"
    style="margin: 15px 0; width: 300px"
    class="inputLogIn"
  >
    <template v-slot:append>
      <q-icon
        :name="isPwd ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="isPwd = !isPwd"
      />
    </template>
  </q-input>

  <q-banner
    v-if="errorMessage"
    :style="{ backgroundColor: 'var(--q-primary)', color: 'red' }"
  >
    {{ errorMessage }}
  </q-banner>

  <q-btn 
    class="bton"
    color="primary" 
    style="width: 100px; position: absolute"
    label="Log In" 
    rounded
    @click="emitCredentials" />
</template>

<script setup>
import { ref } from "vue";
const isPwd = ref(true);
const password = ref("");
const email = ref("");
const errorMessage = ref(null);
const emit = defineEmits(['login']);
function emitCredentials() {
  emit("login", { email: email.value, password: password.value });
}
</script>

<style lang="scss" scoped>

  @media (max-width: 320px) {
    .inputLogIn {
      width: 250px !important;
    }
  }
</style>

<template>
  <q-input
    v-model="email"
    standout
    dense
    bg-color="accent"
    type="text"
    label="Email"
    style="margin: 15px 0; width: 300px"
  />
  <q-input
    v-model="password"
    standout
    dense
    bg-color="accent"
    :type="isPwd ? 'password' : 'text'"
    label="Password"
    style="margin: 15px 0; width: 300px"
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
    color="primary"
    label="Log In"
    @click="emitCredentials"
  />
</template>

<script setup>
import { ref } from "vue";
const isPwd = ref(true);
const password = ref("");
const email = ref("");

function emitCredentials() {
  this.$emit('login', {email: this.email, pasword: this.password});
}
</script>

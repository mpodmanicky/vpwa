<template>
    <q-input v-model="text" standout dense bg-color="accent" type="text" label="Name" style="margin: 15px 0; width: 300px;"/>
    <q-input v-model="email" standout dense bg-color="accent" type="email" label="Email" style="margin: 15px 0;"/>
    <q-input v-model="password" standout dense bg-color="accent" :type=" isPwd ? 'password' : 'text'" label="Password" style="margin: 15px 0;">
        <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility' " class="cursor-pointer" @click="isPwd = !isPwd"/>
        </template>
    </q-input>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        return {
            isPwd: ref(true),
            password: ref(''),
            email: ref(''),
            text: ref('')
        }
    }
}
</script>
<template>
    <q-input v-model="name" standout dense bg-color="accent" type="text" label="Name" style="margin: 15px 0;"/>
    <q-input v-model="surname" standout dense bg-color="accent" type="text" label="Surname" style="margin: 15px 0;"/>
    <q-input v-model="nickname" standout dense bg-color="accent" type="text" label="Nickname" style="margin: 15px 0;"/> 
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
        const isPwd = ref(true);
        const password = ref('');
        const email = ref('');
        const name = ref('');   
        const surname = ref(''); 
        const nickname = ref(''); 

        return {
            isPwd,
            password,
            email,
            name,  
            surname, 
            nickname 
        };
    }
}
</script>
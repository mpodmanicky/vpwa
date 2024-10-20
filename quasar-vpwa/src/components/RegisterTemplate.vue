<!-- RegisterTemplate.vue -->
<template>
    <div>
        <q-input 
            v-model="name" 
            standout 
            dense 
            bg-color="accent" 
            type="text" 
            label="Name" 
            style="margin: 15px 0; width: 300px;"
        />
        <q-input 
            v-model="username" 
            standout 
            dense 
            bg-color="accent" 
            type="text" 
            label="Username" 
            style="margin: 15px 0;"
        /> 
        <q-input 
            v-model="email" 
            standout 
            dense 
            bg-color="accent" 
            type="email" 
            label="Email" 
            style="margin: 15px 0;"
        />
        <q-input 
            v-model="password" 
            standout 
            dense 
            bg-color="accent" 
            :type="isPwd ? 'password' : 'text'" 
            label="Password" 
            style="margin: 15px 0;"
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
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


export default {
    setup() {
        const name = ref('');
        const username = ref('');
        const email = ref('');
        const password = ref('');
        const isPwd = ref(true);
        const errorMessage = ref(null);
        const router = useRouter(); 

        /*
        * Change this logic when the database is ready.
        */

        const validateRegister = () => {
            const emailUsed = 'xxx@example.com';
            const usernameUsed = 'xxx';

            if (!name.value || !username.value || !email.value || !password.value) {
                errorMessage.value = 'All fields are required';
                return false; 
            }

            if (email.value === emailUsed) {
                errorMessage.value = 'Email is already in use';
                return false; 
            }

            if (username.value === usernameUsed) {
                errorMessage.value = 'Username is already in use';
                return false; 
            }
            router.push('/slack'); 
            return true; 
        };

        return {
            isPwd,
            name,
            username,
            email,
            password,
            validateRegister, 
            errorMessage
        };
    }
}
</script>

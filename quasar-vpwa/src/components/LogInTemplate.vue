<template>
    <q-input class="inputField"
        v-model="email" 
        standout 
        dense 
        bg-color="accent" 
        type="text" 
        label="Email" 
        style="margin: 15px 0; width: 300px;" 
    />
    <q-input class="inputField"
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
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const email = ref('');
        const password = ref('');
        const isPwd = ref(true);
        const errorMessage = ref(null);
        const router = useRouter();
        /**
         * Change this to the logic with the database 
         * 
        */
        const validateLogin = () => {
            const validEmail = 'xxx@example.com';
            const validPassword = 'xxx';

            if (email.value === validEmail && password.value === validPassword) {
                errorMessage.value = null;
                router.push('/slack'); 
                return true;
            } else if (email.value && password.value) {
                errorMessage.value = 'Incorrect User or Password';
                return false;
            } else {
                errorMessage.value = 'Please fill in both fields';
                return false;
            }
        };

        return {
            email,
            password,
            isPwd,
            errorMessage,
            validateLogin, 
        };
    }
}
</script>


<template>
    <!--entire div will have margin, kinda like a container. I need avatar, name and message body-->
    <div class="chat">
        <div class="messageTemplate">
            <q-avatar rounded color="teal" text-color="white" icon="person"/>
            <div class="message">
                <div class="userName">
                    {{ username }}
                </div>
                <div class="messageBody">
                    {{ message }}    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    username: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

</script>

<style lang="scss" scoped>
@import "src/css/quasar.variables.scss";

.chat {
    width: 100%;
}

.messageTemplate {
    max-width: 600px;
    display: flex;
    padding: 5px;
    margin: 0 15px 15px 15px;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    border-radius: 10px;
    // for better visualisation i added border to the message body
    //border: 1px solid $primary;
}

.messageBody {
    padding: 5px;
}

.userName {
    margin-left: 5px;
}
</style>
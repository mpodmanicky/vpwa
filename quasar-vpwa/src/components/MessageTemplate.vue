<template>
    <div class="chat">
        <div class="messageTemplate">
            <q-avatar rounded color="teal" text-color="white" icon="person" />
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
    max-width: 600px; /* Max width for each message container */
    display: flex;
    padding: 5px;
    margin: 0 15px 15px 15px; /* Margin for spacing between messages */
    box-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    border-radius: 10px;
}

.message {
    display: flex;
    flex-direction: column; /* Stack username and message body vertically */
    max-width: calc(100% - 40px); /* Adjust for avatar width and padding */
    overflow-wrap: break-word; /* Ensure long words break to the next line */
}

.messageBody {
    padding: 5px;
    overflow-wrap: break-word; /* Allow long words to break */
    word-wrap: break-word; /* Older support for browsers */
    word-break: break-all; /* Break long words or URLs that don't fit */
    white-space: pre-wrap; /* Maintain whitespace and wrap lines */
}

.userName {
    margin-left: 5px;
}
</style>

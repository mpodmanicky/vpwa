<template>
    <div class="commandLine">
        <q-input standout v-model="text" label="CommandLine" @keyup.enter='submitCommand' />
    </div>
</template>

<script setup>
import { ref } from 'vue';
const text = ref('');

const emit = defineEmits(['sendCommand']);
// function to emit commands
function submitCommand() {
    if (text.value.trim()) {
        emit('sendCommand', text.value);
        text.value = '';
    }
}
</script>

<style lang="scss" scoped>

.commandLine{
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
}
</style>
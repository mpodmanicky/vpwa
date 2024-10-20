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
  
  .send-button {
    margin: 0 15px 0px 15px;
  }
  
  .textarea-container {
    max-height: 200px;
    width: 100%;
    overflow-y: auto;
  }

  .scrolling-textarea .q-field__control {
    max-height: 300px; 
    overflow-y: auto;  
  }
  
  .textarea-container::-webkit-scrollbar {
    width: 8px; 
  }
  
  .textarea-container::-webkit-scrollbar-thumb {
    background-color: #20b955; 
    border-radius: 10px; 
  }
  
  .textarea-container::-webkit-scrollbar-track {
    background-color: #e0e0e0;
    border-radius: 10px; 
  }
  </style>
  
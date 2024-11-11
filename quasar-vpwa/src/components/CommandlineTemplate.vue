<template>
    <div class="commandLine">
      <div class="textarea-container">
        <q-input 
            v-model="text" 
            label="Write a message" 
            type="textarea"
            rows="1" 
            autogrow
            filled 
            class="scrolling-textarea"
            :style="{ width: '100%' }"
            @keyup.enter.prevent="submitCommand"
            :disable="!currentChannel || currentChannel === ''"
        />
      </div>  
        <q-btn 
            @click="submitCommand" 
            color="primary" 
            class="send-button" 
            round 
            icon="send"
            :disable="!currentChannel || currentChannel === ''"
         />
    </div>
  </template>
<script setup>
import { ref } from 'vue';

const props = defineProps({
  currentChannel: {
    type: String,
    required: false 
  }
});

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

.commandLine {
  display: flex;
  align-items: center;
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
  
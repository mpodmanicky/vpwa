<!--IN DEVELOPMENT-->
<template>
    <div class="chat-parent q-col q-col-12 full-width" style="overflow-y: auto;">

      <div v-for="(message, index) in messages" :key="index">
       
        <q-chat-message
          :text="[message.text]"
          :name="message.sender"
          :reverse="message.sender === userNickname" 
          :sent="message.sender === userNickname"
          :received="message.sender !== userNickname"
          :avatar="message.avatar"
        />
      </div>
      <div class="row q-pa-md q-mt-md" style="position: sticky; bottom: 0;">
        <q-input
          v-model="newMessage"
          placeholder="Escribe un mensaje"
          filled
          @keyup.enter="sendMessage"
          style="width: 100%;"
        />
      </div>
    </div>
  </template>
  
  <script>



  </script>
  
  <style scoped>
  </style>
  
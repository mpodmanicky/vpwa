<template>
    <q-page padding>
      <div class="chat-page q-gutter-sm">
        <!--ChannelsBox-->
        <div class="channels-box  q-gutter-sm">
          <ChannelsTemplate />
        </div>
        <!--ChatBox-->
        <div class="chat-box q-pa-xs">
          <!-- <ChatTemplate /> -->
        </div>
      </div>
  </q-page>
  </template>
  
  <script setup>
  import ChannelsTemplate from '../components/ChannelsTemplate.vue';
  import ChatTemplate from '../components/ChatTemplate.vue';
  </script>
  
  <style lang="scss" scoped>
  @import 'src/css/quasar.variables.scss';
  .q-page{
    background-color: $secondary;
  }
  .chat-page {
    display: flex;
    flex-direction: row;
    height: 87vh;
    background-color: $secondary;
    
  }
  
  .channels-box {
    width: 200px;  
    justify-content: flex-start;
    border-right: 1px solid black;
    overflow-x: hidden;
    overflow-y: auto;
    @media screen and (max-width: 780px) {  
    width: 150px;
  }
  }
  .chat-box {
    flex: 6;
  }
  </style>
  q
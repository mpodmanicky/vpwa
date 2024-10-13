<template>
    <q-page>
        <div class="chat-page q-gutter-sm">
            <!--ChannelsBox-->
            <div class="channels-box q-pa-xs">
                <ChannelsComponent />
            </div>
            <!--ChatBox-->
            <div class="chat-box q-pa-xs">
                <ChatComponent />
            </div>
        </div>
    </q-page>
</template>    

<script setup>
import ChannelsComponent from 'src/components/ChannelsTemplate.vue';
import ChatComponent from 'src/components/ChatTemplate.vue';
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';

.chat-page {
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: #40095C;
    
}
.side-box {
    width: 80px;
    color: white;
    border-right: 2px black solid;

    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: flex-start;

    overflow-y: auto;
    overflow-x: hidden;
  }
.channels-box {
    flex: 1; 
    
  }
.chat-box{
    flex: 6;
}    

</style>

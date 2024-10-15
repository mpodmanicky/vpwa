<template>
    <q-page>
        <!--The main page templates and components will go right here, all of em' will be responsive
        and modular, to be able to move them anywhere
        all logic is inside each component-->
        ahoj
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

<template>
    <div class="statusBar">
      <q-bar>
  
      </q-bar>
      <div class="statusOptions"></div>
    </div>
    <q-scroll-area class="messageBox">
      <div class="messages">
        <MessageTemplate  v-for="index in 20" :key="index" :channelNumber="index" />
        <!--incoming messages will be displayed on the left side of the chat while outgoing on the right side-->
        <!--div needs to be scrollable
        <MessageTemplate />
        <MessageTemplate />
        <MessageTemplate id="outgoing"></MessageTemplate>
        -->
      </div>
    </q-scroll-area> 
    <div class="commandline"> 
      <CommandlineTemplate />
      
    </div>
</template>

<script setup>
import MessageTemplate from 'src/components/MessageTemplate.vue';
import CommandlineTemplate from 'src/components/CommandlineTemplate.vue';
</script>

<style lang="scss" scoped>
@import "src/css/quasar.variables.scss";

.messageBox{
  width: 100%;
  height: 100%;
}

.statusBar {
  background-color: rgb(81, 65, 102);
  color: white;
}
#channel-name{
  padding: 5px;
  margin-left: 5px;
}

.commandline {
  background-color: rgb(81, 65, 102);
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>
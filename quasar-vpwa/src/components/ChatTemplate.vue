<template>
  <div class="statusBar">
    <p id="channel-name">:channelName</p>
    <div class="statusOptions"></div>
  </div>
  <div class="messages">
    <!--incoming messages will be displayed on the left side of the chat while outgoing on the right side-->
    <!--div needs to be scrollable-->
    <MessageTemplate />
    <MessageTemplate />
    <MessageTemplate id="outgoing"></MessageTemplate>
  </div>
  <div>
    <CommandlineTemplate id="command-line"></CommandlineTemplate>
  </div>
</template>

<script setup>
import MessageTemplate from 'src/components/MessageTemplate.vue';
import CommandlineTemplate from 'src/components/CommandlineTemplate.vue'
</script>

<style lang="scss" scoped>
@import "src/css/quasar.variables.scss";

.statusBar {
  background-color: rgb(81, 65, 102);
  color: white;
}
#channel-name{
  padding: 5px;
  margin-left: 5px;
}
</style>
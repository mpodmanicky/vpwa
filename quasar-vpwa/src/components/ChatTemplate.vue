<template>
  <div class="statusBar">
    <q-bar>

    </q-bar>
    <div class="statusOptions"></div>
  </div>
  <div class="messages">
    <q-infinite-scroll @load="onLoad" reverse>
      <p v-if="messages.length === 0">No messages yet.</p>
      <MessageTemplate v-for="(msg, index) in messages" :key="index" :username="msg.username" :message="msg.text" />
    </q-infinite-scroll>
    <!--incoming messages will be displayed on the left side of the chat while outgoing on the right side-->
    <!--div needs to be scrollable-->
  </div>
  <div class="commandline">
    <CommandlineTemplate @sendCommand="handleCommand" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MessageTemplate from 'src/components/MessageTemplate.vue';
import CommandlineTemplate from 'src/components/CommandlineTemplate.vue';

const messages = ref([]);

function handleCommand(command) {
  messages.value.push({ username: 'User', text: command})
}

function onLoad(index, done) {
  setTimeout(() => {
    messages.value.splice();
    done();
  }, 2000);
}
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

.commandline {
  background-color: rgb(81, 65, 102);
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>
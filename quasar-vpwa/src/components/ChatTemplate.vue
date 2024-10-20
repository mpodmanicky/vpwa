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
      <!-- Dummy div used for scrolling to the newest message -->
      <div ref="newestMessage"></div>
    </q-infinite-scroll>
  </div>
    <!--incoming messages will be displayed on the left side of the chat while outgoing on the right side-->
    <!--div needs to be scrollable-->
  <div class="commandline">
    <CommandlineTemplate @sendCommand="handleCommand" />
  </div>
</template>
<script setup>
import { ref, nextTick } from 'vue';
import MessageTemplate from 'src/components/MessageTemplate.vue';
import CommandlineTemplate from 'src/components/CommandlineTemplate.vue';
const messages = ref([]); // Holds the messages to display
const allMessages = ref([ /* Full array of messages loaded from server */]); // This would be your server-side or full data
const perPage = 5; // Number of messages to load per scroll
const newestMessage = ref(null); // Reference for the newest message div
const emit = defineEmits(['command']);
// Loads more messages when scrolling up
function onLoad() {
  const currentLength = messages.value.length;
  // Check if there are more messages to load
  if (currentLength < allMessages.value.length) {
    // Append more messages from allMessages array
    const moreMessages = allMessages.value.slice(currentLength, currentLength + perPage);
    messages.value.unshift(...moreMessages);
  }
  // Call done to tell Quasar infinite scroll component to stop loading
  // done();
};
// Scrolls to the newest message after adding a new one
function scrollToNewestMessage() {
  nextTick(() => {
    if (newestMessage.value) {
      newestMessage.value.scrollIntoView({ behavior: 'smooth' });
    }
  });
};
function handleCommand(command) {
  const [mainCommand, ...args] = command.split(' ');
  const channelName = args[0];
  switch (mainCommand) {
    case '/create':
      if (channelName) {
        // Emit the command to the parent for creating a channel
        emit('command', { type: 'create', channelName });
      } else {
        console.log('Error: Channel name is required...');
      } break;
    case '/delete':
      if (channelName) {
        if (channelName !== 'General') {
          emit('command', { type: 'delete', channelName });
        } else {
          console.log('General channel cannot be deleted....');
        }
      } break;
    default:
      messages.value.push({ username: 'User', text: command })
      allMessages.value.push({ username: 'User', text: command });
  }
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
.messages {
  height: calc(100vh - 250px);
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
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
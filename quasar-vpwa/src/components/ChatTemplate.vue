<template>
  <div class="statusBar">
    <q-bar>
      <div>
        {{ currentChannel }}
      </div>
    </q-bar>
    <div class="statusOptions"></div>
  </div>
  <div class="messages">
    <q-infinite-scroll @load="onLoad" reverse>
      <p v-if="messages.length === 0">No messages yet.</p>
      <MessageTemplate
        v-for="(msg, index) in messages"
        :key="index"
        :username="msg.username"
        :message="msg.text"
      />
      <!-- Dummy div used for scrolling to the newest message -->
      <div ref="newestMessage"></div>
    </q-infinite-scroll>
  </div>
  <!--incoming messages will be displayed on the left side of the chat while outgoing on the right side-->
  <div class="commandline">
    <CommandlineTemplate
      :currentChannel="currentChannel"
      @sendCommand="handleCommand"
    />
  </div>
</template>
<script setup>
import { ref, nextTick, computed } from "vue";
import MessageTemplate from "src/components/MessageTemplate.vue";
import CommandlineTemplate from "src/components/CommandlineTemplate.vue";
import { store } from "src/store/store.js";

const perPage = 5; // Number of messages to load per scroll
const newestMessage = ref(null); // Reference for the newest message div
const props = defineProps({
  currentChannel: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["command"]);

// Create a ref to store the messages for each channel
const channelMessages = ref({
  // Default channel 'General', it will be dynamically extended with other channels
  General: [],
});

// Get the messages for the current channel dynamically using computed property
const messages = computed(() => {
  return channelMessages.value[props.currentChannel] || [];
});

// Loads more messages when scrolling up
function onLoad() {
  const currentLength = messages.value.length;
  // Check if there are more messages to load for the current channel
  if (currentLength < channelMessages.value[props.currentChannel]?.length) {
    // Get the next set of messages
    const moreMessages = channelMessages.value[props.currentChannel].slice(
      currentLength,
      currentLength + perPage
    );
    messages.value.unshift(...moreMessages); // Add them to the current messages
  }
  // Call done to tell Quasar infinite scroll component to stop loading
  // done();
}

// Scrolls to the newest message after adding a new one
function scrollToNewestMessage() {
  nextTick(() => {
    if (newestMessage.value) {
      newestMessage.value.scrollIntoView({ behavior: "smooth" });
    }
  });
}

function handleCommand(command) {
  const [mainCommand, ...args] = command.split(" ");
  const channelName = args[0];

  switch (mainCommand) {
    case "/create":
      if (channelName) {
        // Emit the command to the parent for creating a channel
        emit("command", { type: "create", channelName });
        // Initialize the new channel messages
        channelMessages.value[channelName] = [];
      } else {
        console.log("Error: Channel name is required...");
      }
      break;

    case "/delete":
      if (channelName) {
        if (channelName !== "General") {
          emit("command", { type: "delete", channelName });
        } else {
          console.log("General channel cannot be deleted....");
        }
      }
      break;

    default:
      // Add the message to the current channel's message array
      if (!channelMessages.value[props.currentChannel]) {
        channelMessages.value[props.currentChannel] = [];
      }
      channelMessages.value[props.currentChannel].push({
        username: store.username,
        text: command,
      });
  }
}
</script>

<style lang="scss" scoped>
@import "src/css/quasar.variables.scss";
.statusBar {
  background-color: rgb(60, 83, 86);
  color: white;
}
#channel-name {
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

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
    <q-infinite-scroll>
      <p v-if="Messages.length === 0">No messages yet.</p>
      <MessageTemplate
        v-for="(msg, index) in messages"
        :key="index"
        :username="msg.username"
        :message="msg.message"
      />
      <div ref="newestMessage"></div>
    </q-infinite-scroll>
  </div>
  <div class="commandline">
    <CommandlineTemplate
      :currentChannel="currentChannel"
      @sendCommand="handleCommand"
    />
  </div>
</template>
<script setup>
import { ref, nextTick, computed, watch, onMounted, onUnmounted } from "vue";
import { useQuasar } from "quasar";
import { io } from "socket.io-client";
import MessageTemplate from "src/components/MessageTemplate.vue";
import CommandlineTemplate from "src/components/CommandlineTemplate.vue";
import { store } from "src/store/store.js";

const $q = useQuasar();
const perPage = 5; // Number of messages to load per scroll
const newestMessage = ref(null); // Reference for the newest message div

const socket = io("http://localhost:3333");

const emit = defineEmits(["command", "message"]);

const props = defineProps({
  currentChannel: {
    type: String,
    required: true,
  },
  channels: {
    type: Array,
    required: true,
  },
  messages: {
    type: Array,
    required: true,
  },
});
const Messages = ref([]);
Messages.value = props.messages;

onMounted(() => {
  watch(
    () => props.channels,
    (newChannels) => {
      if (newChannels.length > 0) {
        props.channels.forEach((channel) => {
          socket.emit("join", channel);
        });
      }
    },
    { immediate: true }
  );
  // listen for messages
  socket.on("receive_message", (data) => {
    if (data.channel === props.currentChannel) {
      Messages.value.push({
        username: data.username,
        message: data.message,
      });
      scrollToNewestMessage();
      // Trigger a notification
      if (data.username !== store.username) {
        $q.notify({
          type: "info",
          message: `${data.username}: ${data.message.substring(0, 50)}...`,
          timeout: 5000,
          position: "top-right",
        });
      }
    }
  });
});

onUnmounted(() => {
  socket.disconnect();
});
const messageText = ref("");
function sendMessage() {
  if (messageText.value.trim()) {
    socket.emit("send_message", {
      channel: props.currentChannel,
      username: store.username,
      message: messageText.value.trim(),
    });

    messageText.value = ""; // Clear input field
  }
}
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
  const visibility = args[1];

  switch (mainCommand) {
    case "/create":
      if (channelName) {
        // Emit the command to the parent for creating a channel
        emit("command", { type: "create", channelName, visibility });
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
    case "/list":
      if (channelName) {
        if (channelName !== "General") {
          emit("command", { type: "list", channelName });
        } else {
          console.log("Channel general is default for all users");
        }
      }
      break;
    case "/join":
      if (channelName) {
        if (channelName !== "General") {
          emit("command", { type: "join", channelName });
        } else {
          console.log("Cannot join channel General...");
        }
      }
      break;
    default:
      // Add the message to the current channel's message array
      messageText.value = command;
      sendMessage();
      console.log(messageText);
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

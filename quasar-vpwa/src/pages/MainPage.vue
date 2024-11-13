<template>
  <q-page>
    <div class="mainApp">
      <!--
                This part is for Pc.
            -->
      <div v-if="$q.screen.gt.sm" class="sideTemplate">
        <SideTemplate
          :channels="channels"
          @addChannel="handleAddChannel"
          @channelSelected="handleChannelSelection"
        />
      </div>
      <!--
                This part is for mobiles
            -->
      <div v-if="$q.screen.lt.md" class="dummyDivResponsive">
        <q-btn flat @click="drawerOpen = !drawerOpen" round dense icon="menu" />
      </div>
      <q-drawer v-model="drawerOpen" side="left" bordered>
        <div class="sideTemplateForMobile">
          <SideTemplate
            :channels="channels"
            @addChannel="handleAddChannel"
            @channelSelected="handleChannelSelection"
          />
        </div>
      </q-drawer>

      <div class="chatTemplate">
        <ChatTemplate
          :currentChannel="currentChannel"
          :messages="channelMessages[currentChannel]"
          @command="handleCommand"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import SideTemplate from "src/components/SideTemplate.vue";
import ChatTemplate from "src/components/ChatTemplate.vue";
import { data } from "autoprefixer";
import { store } from "src/store/store.js";

const drawerOpen = ref(false);
var channelName = ""; //variable for channel name to be able to load from db

const channels = ref(["General"]); //List of channels
const currentChannel = ref("General"); // Current Channel Select
const channelMessages = ref({});
function loadChannels() {
  const username = store.username;
  fetch("http://localhost:3333/channels", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username: username }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to load channels");
      }
    })
    .then((data) => {
      console.log(data.channels);
      for (let i = 0; i < data.channels.length; i++) {
        channels.value.push(data.channels[i].name);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
loadChannels();
//function to select the channel in the SideTemplate
function handleChannelSelection(channelName) {
  currentChannel.value = channelName;
  console.log(`Channel selected: ${channelName}`);
}
//function to handle commands
function handleCommand(command) {
  switch (command.type) {
    case "create":
      channelName = command.channelName.trim();
      create_channel(channelName);
      break;
    case "delete":
      channelName = command.channelName.trim();
      delete_channel(channelName);
      break;
    default:
      console.log("Unknown command....");
  }
}
//function to create channels
function create_channel(channelName) {
  if (!channels.value.includes(channelName)) {
    create();
    console.log(`Channel '${channelName}' created.`);
    currentChannel.value = channelName;
  } else {
    console.log(`Channel '${channelName}' already exists.`);
  }
}
//function to delete channels
function delete_channel(channelName) {
  if (channels.value.includes(channelName)) {
    deleteChannel();
  }
}
function handleAddChannel(channelData) {
  channelName = channelData.channelName;
  create_channel(channelData.channelName);
}

// api calls
function create() {
  fetch("http://localhost:3333/createChannel", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      username: store.username,
      name: channelName,
      visibility: "private",
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error");
      }
    })
    .then((data) => {
      channels.value.push(data.channel);
    })
    .catch((error) => {
      console.log(error);
    });
}
function loadMessages() {
  if (currentChannel.value !== "General") {
  } else {
    console.log("no messages for this channel");
  }
}
function deleteChannel() {
  fetch("http://localhost:3333/deleteChannel", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({username: store.username, name: channelName }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("unable to delete");
      }
    })
    .then((data) => {
      console.log(data.message)
      if (channels.value.includes(channelName)) {
        channels.value = channels.value.filter(
          (channel) => channel !== channelName
        );
        console.log(`Channel '${channelName}' deleted.`);
      } else {
        console.log(`Channel '${channelName}' does not exist.`);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
function addUser() {}
function removeUser() {}
function setNotifications() {}
function setVisibility() {}
function postMessage() {}
</script>

<style lang="scss" scoped>
@import "src/css/quasar.variables.scss";
.mainApp {
  min-height: inherit;
  display: flex;
}
.sideTemplate {
  width: 30%;
}
.sideTemplateForMobile {
  width: 100%;
  height: 100%;
}
.chatTemplate {
  width: 100%;
  position: relative;
}
.dummyDivResponsive {
  background-color: $secondary;
}
</style>

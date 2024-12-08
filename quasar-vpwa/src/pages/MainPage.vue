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
          @deleteChannel="delete_channel"
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
            @deleteChannel="delete_channel"
            @userVisibility="setUserStatus"
          />
        </div>
      </q-drawer>

      <div class="chatTemplate">
        <ChatTemplate
          :channels="channels"
          :currentChannel="currentChannel"
          :messages="channelMessages"
          @command="handleCommand"
        />
      </div>
    </div>
    <!-- User List Modal -->
    <q-dialog v-model="showUserList">
      <q-card>
        <q-card-section>
          <div class="text-h6">Users in Channel: {{ currentChannel }}</div>
        </q-card-section>
        <q-card-section>
          <div v-if="listedUsers.length > 0">
            <q-list>
              <q-item v-for="(user, index) in listedUsers" :key="index">
                <q-item-section>{{ user }}</q-item-section>
              </q-item>
            </q-list>
          </div>
          <div v-else>No users found in this channel.</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" @click="clearListedUsers" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- <div class="chatTemplate">
      <ChatTemplate
        :currentChannel="currentChannel"
        :messages="channelMessages[currentChannel]"
        @command="handleCommand"
      />
</div> -->
  </q-page>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import SideTemplate from "src/components/SideTemplate.vue";
import ChatTemplate from "src/components/ChatTemplate.vue";
import { data } from "autoprefixer";
import { store } from "src/store/store.js";

const URL = "http://localhost:3333/";
const socket = URL + "chat";

const drawerOpen = ref(false);
var channelName = ""; //variable for channel name to be able to load from db
var channelVisibility = ref("private");
const channels = ref(["General"]); //List of channels
const currentChannel = ref("General"); // Current Channel Select
const channelMessages = ref([]);
const showUserList = ref(false);

function handleChannelSelection(channelName) {
  currentChannel.value = channelName;
  loadMessage()
  console.log(`Channel selected: ${channelName}`);
}

function handleAddChannel(channelData) {
  channelName = channelData.channelName;
  channelVisibility.value = channelData.visibility;
  if (!channels.value.includes(channelName)) {
    create();
  }
}

//function to handle commands
function handleCommand(command) {
  switch (command.type) {
    case "create":
      const visibility = command.visibility.trim();
      channelName = command.channelName.trim();
      if (!channels.value.includes(channelName)) {
        if (visibility === "private" || visibility === "public") {
          channelVisibility.value = visibility;
        }
        create();
      }
      break;
    case "delete":
      channelName = command.channelName.trim();
      if (channels.value.includes(channelName)) {
        deleteChannel();
      }
      break;
    case "list":
      channelName = command.channelName.trim();
      if (channels.value.includes(channelName)) {
        listUsers(channelName);
      }
      break;
    case "join":
      channelName = command.channelName.trim();
      if (channels.value.includes(channelName)) {
        throw new Error("Already a member");
      } else {
        addUser();
      }
      break;
    case "invite":
      //invite user to public/private channel
      break;
    case "revoke":
      // revoke membership as owner of channel
      break;
    case "cancel":
      // revoke membership as member
      break;
    case "kick":
      // kick user after 3 kicks
      break;
    default:
      console.log("Unknown command....");
  }
}

const listedUsers = [];
function listUsers(name) {
  fetch(URL + "list", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ channel: name }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error while listing users...");
      }
    })
    .then((data) => {
      data.users.forEach((user) => {
        listedUsers.push(user.username);
      }); // Populate users
      showUserList.value = true; // Show dialog
    })
    .catch((err) => {
      console.log(err);
    });
}

function clearListedUsers() {
  listedUsers.length = 0; // Clear the list
  showUserList.value = false; // Close the dialog
}

function userVisibility(status) {
  const userStatus = status.status;
  store.status = userStatus;
  fetch(URL + "user", {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ username: store.username }),
  })
    .then((response) => {})
    .then((data) => {})
    .catch((err) => {
      console.log(err);
    });
}

function loadChannels() {
  const username = store.username;
  fetch("http://localhost:3333/channel", {
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
        if (!channels.value.includes(data.channels[i].name)) {
          channels.value.push(data.channels[i].name);
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
loadChannels();

function create() {
  fetch("http://localhost:3333/createChannel", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      username: store.username,
      name: channelName,
      visibility: channelVisibility,
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

function deleteChannel() {
  fetch("http://localhost:3333/deleteChannel", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username: store.username, name: channelName }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("unable to delete");
      }
    })
    .then((data) => {
      loadChannels()
    })
    .catch((error) => {
      console.log(error);
    });
}
function addUser() {
  fetch(URL + "joinChannel", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username: store.username, channel: channelName }),
  })
    .then((response) => {
      if (response.ok) {
        loadChannels();
        return response.json();
      } else {
        throw new Error("Error while joining a channel");
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
function removeUser() {}
function setNotifications() {}
function loadMessage() {
  fetch(URL + "messages", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ channel: currentChannel.value }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error while loading messages");
      }
    })
    .then((data) => {
      channelMessages.value.length = 0;
      data.messages.forEach((message) => {
        channelMessages.value = data.messages.map((msg) => ({
          username: msg.user.username,
          message: msg.messageData
        }))
      });
      console.log(channelMessages.value)
    })
    .catch((err) => {
      console.log(err);
    });
}
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

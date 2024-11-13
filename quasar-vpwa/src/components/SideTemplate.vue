<template>
    <div class="sideBar">
        <div class="users">
            <UserTemplate />
        </div>
        <q-scroll-area class="servers">
        <!--
            Button to add a Channel
         -->
        <AddChannelTemplate
             @addChannel="addChannel"
        />
        <div class="channels">
            <ChannelTemplate
            v-for="channel in channels"
            :key="channel"
            :channelName="channel"
            @channelSelected="selectChannel"
            @deleteChannel="handleDeleteChannel"
        />
        </div>
        </q-scroll-area>
    </div>
</template>
<script setup>
import ChannelTemplate from './ChannelTemplate.vue';
import UserTemplate from './UserTemplate.vue';
import AddChannelTemplate from './AddChanelTemplate.vue';


const props = defineProps({
  channels: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['channelSelected', 'addChannel', 'deleteChannel']);

//Just emiting the functions to the father.
function addChannel(channelData) {
  console.log("Channel Name en el padre:", channelData.channelName);
  emit('addChannel', channelData);
}

function selectChannel(channelName) {
  emit('channelSelected', channelName);
}
function handleDeleteChannel(channelName){
  emit('deleteChannel', channelName)
}
</script>

<style lang="scss" scoped>
@import "src/css/quasar.variables.scss";

.sideBar {
    background-color: $secondary;
    display: flex;
    height: 100%;
}

.users {
    box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.5);
    width: 30%;
}

.servers {
    width: 100%;
}

.channels {
    padding: 2px 5px 0 5px;
}
</style>

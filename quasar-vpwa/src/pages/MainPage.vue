<template>
    <q-page>
        <div class="mainApp">
            <div class="sideTemplate">
                <SideTemplate :channels="channels" />
            </div>
            <div class="chatTemplate">
                <ChatTemplate @command="handleCommand"/>
            </div>
        </div>
    </q-page>
</template>    
<script setup>
import { ref } from 'vue';
import SideTemplate from 'src/components/SideTemplate.vue';
import ChatTemplate from 'src/components/ChatTemplate.vue';
const channels = ref(['General']);//initial channel holding info about use
function handleCommand(command) {//function to handle commands
    switch (command.type) {
        case 'create':
            create_channel(command.channelName);
            break;
        case 'delete':
            delete_channel(command.channelName);
            break;
        default:
            console.log('Unknown command....');
    }
};
function create_channel(channelName) {//function to create channels
    if (!channels.value.includes(channelName)) {
    channels.value.push(channelName);
    console.log(`Channel '${channelName}' created.`);
  } else {
    console.log(`Channel '${channelName}' already exists.`);
  }
};
function delete_channel(channelName) {
    if (channels.value.includes(channelName)) {
        channels.value = channels.value.filter(channel => channel !== channelName);
        console.log(`Channel '${channelName}' deleted.`);
    } else {
        console.log(`Channel '${channelName}' does not exist.`);
    }
};
</script>
<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';
.mainApp {
    min-height: inherit;
    display: flex;
}
.sideTemplate {
    width: 30%;
}
.chatTemplate {
    width: 100%;
    position: relative;
}
</style>
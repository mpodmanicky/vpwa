<template>
    <q-page>
        <div class="mainApp">
            <div class="sideTemplate">
                <SideTemplate 
                :channels="channels" 
                @channelSelected="handleChannelSelection" />
            </div>
            <div class="chatTemplate">
                <ChatTemplate 
                :currentChannel="currentChannel"
                :messages="channelMessages[currentChannel]"
                @command="handleCommand" />
            </div>
        </div>
    </q-page>
</template>

<script setup>
    import { ref } from 'vue';
    import { useChannelStore } from 'src/store/channels';
    import SideTemplate from 'src/components/SideTemplate.vue';
    import ChatTemplate from 'src/components/ChatTemplate.vue';
   
    //Store of
    const channelStore = useChannelStore();

    var channelName = ''; //variable for channel name to be able to load from db

    const channels = ref(['General']);  //List of channels
    const currentChannel = ref('General');    // Current Channel Select
    const channelMessages = ref({
    });

    //function to select the channel in the SideTemplate
    function handleChannelSelection(channelName) {
        currentChannel.value = channelName;
        console.log(`Channel selected: ${channelName}`);
    }
    //function to handle commands
    function handleCommand(command) {
        switch (command.type) {
            case 'create':
                channelName = command.channelName;
                create_channel(command.channelName);
                break;
            case 'delete':
                channelName = command.channelName;
                delete_channel(command.channelName);
                break;
            default:
                console.log('Unknown command....');
        }
    };
    //function to create channels
    function create_channel(channelName) {
        if (!channels.value.includes(channelName)) {
        channels.value.push(channelName);
        channelMessages.value[channelName] = [];
        console.log(`Channel '${channelName}' created.`);
        currentChannel.value = channelName
    } else {
        console.log(`Channel '${channelName}' already exists.`);
    }
    };
    //function to delete channels
    function delete_channel(channelName) {
        if (channels.value.includes(channelName)) {
            channels.value = channels.value.filter(channel => channel !== channelName);
            delete channelMessages.value[channelName];
            console.log(`Channel '${channelName}' deleted.`);
             currentChannel.value = ""
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

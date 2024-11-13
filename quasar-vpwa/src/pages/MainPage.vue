<template>
    <q-page>
        <div class="mainApp">
            <!--
                This part is for Pc.
            -->
            <div v-if="$q.screen.gt.sm" class="sideTemplate ">
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
            <q-btn
                flat
                @click="drawerOpen = !drawerOpen"
                round
                dense
                icon="menu"
            />
            </div>
            <q-drawer v-model="drawerOpen" side="left" bordered>
                <div class="sideTemplateForMobile ">
                  <SideTemplate 
                    :channels="channels" 
                    @addChannel="handleAddChannel"
                    @channelSelected="handleChannelSelection" 
                    @deleteChannel="delete_channel"
                  />
                </div>
              </q-drawer>    

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
    import SideTemplate from 'src/components/SideTemplate.vue';
    import ChatTemplate from 'src/components/ChatTemplate.vue';
import { data } from 'autoprefixer';
   
    //Store of
    //const channelStore = useChannelStore();
    const drawerOpen = ref(false);
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
            if(channelName == currentChannel.value){
                currentChannel.value = ""
            }
        } else {
            console.log(`Channel '${channelName}' does not exist.`);
        }
    };
    //function to add the channel from gui
    function handleAddChannel(channelData) {
        create_channel(channelData.channelName)
    }
    //function to delete the channel from the gui
    function handleDeleteChannel(channelName) {
        delete_channel(channelName)
    }

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
    .sideTemplateForMobile{
        width: 100%;
        height: 100%;
    }
    .chatTemplate {
        width: 100%;
        position: relative;
    }
    .dummyDivResponsive{
        background-color: $secondary;
    }
</style>

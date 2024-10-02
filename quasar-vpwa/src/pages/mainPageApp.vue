<template>
    <div class="chat-page q-gutter-sm">
        <!--Sidebar-->
        <div class="side-box q-pa-xs">
            <SidebarComponent />
        </div>
        <!--ChannelsBox-->
        <div class="channels-box q-pa-xs">
            <ChannelsComponent />
        </div>
        <!--ChatBox-->
        <div class="chat-box q-pa-xs">
            <ChatComponent />
        </div>
    </div>
</template>    

<script setup>
import SidebarComponent from './SidebarComponent.vue';
import ChannelsComponent from './ChannelsComponent.vue';
import ChatComponent from './ChatComponent.vue';
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';

.chat-page {
    display: flex;
    height: 100vh;
    width: 100vw;
}
.side-box {
    width: 80px;
    color: white;
  }
.channels-box {
    flex: 3; 
  }
.chat-box{
    flex: 1;
}  

  

</style>

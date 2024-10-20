<template>
    <div class="sideBar">
        <div class="users">
            <UserTemplate />
        </div>
        <div class="servers">
            <ChannelTemplate v-for="channel in channels" :key="channel" :channelName="channel"/>
        </div>
    </div>
</template>
<script setup>
import ChannelTemplate from './ChannelTemplate.vue';
import UserTemplate from './UserTemplate.vue';
const props = defineProps({
    channels: {
        type: Array,
        Required: true
    },
})
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
    padding: 10px; 
}
</style>

<template>
    <div class="sideBar">
        <div class="users">
            <UserTemplate />
        </div>
        <q-scroll-area class="servers">
            <div class="channels"> 
                <ChannelTemplate v-for="index in 20" :key="index" :channelNumber="index" />
            </div>
        </q-scroll-area>
    </div>
</template>

<script setup>
import ChannelTemplate from './ChannelTemplate.vue';
import UserTemplate from './UserTemplate.vue';
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

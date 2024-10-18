<template>
    <div class="sideBar">
        <div class="users">
            <UserTemplate />
        </div>
        <div class="servers">
            <ChannelTemplate />
            <ChannelTemplate />
            <ChannelTemplate />
        </div>
    </div>
</template>

<script setup>
import ChannelTemplate from './ChannelTemplate.vue';
import UserTemplate from './UserTemplate.vue';
</script>

<style lang="scss" scoped>
@import "src/css/quasar.variables.scss";

.sideBar{
    background-color: $secondary;
    display: flex;
    height: 100%;
}
.servers {
    width: 100%;
    box-shadow: 2px 0px 4px rgba(0,0,0,0.5);
}
.users {
    box-shadow: 1px 0px 4px rgba(0,0,0,0.5);
    width: 30%;
}
</style>
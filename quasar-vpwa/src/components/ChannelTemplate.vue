<template>
    <div class="channel" @click="selectChannel">
        <div class="channelTemplate">
            <!--
                Logo, prob in the future the admin can change it
            -->
            <div class="channelLogo">
                <q-avatar rounded color="orange" text-color="white" icon="headphones" />
            </div>
            <!--
                Name, in the future prob the admin can edit the name
            -->
            <div class="channelName">
                <p>{{ channelName }}</p>
            </div>
            <!--
                Menu For each channel
            -->
            <div class="channelOptions">
                <q-btn
                    dense
                    flat
                    round
                    icon="more_vert"
                    @click.stop="toggleMenu"
                />
                <q-menu v-model="openMenu" anchor="top right" self="top left">
                    <div class="menuOptionsChannel">
                      <q-radio v-model="notification_status" val="all" label="All" />
                      <q-radio v-model="notification_status" val="mentions" label="Mentions" />
                      <q-radio v-model="notification_status" val="none" label="None" />
                    </div>
                </q-menu>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
    channelName: {
        type: String,
        required: true,
    }
});

const notification_status = ref("All");
const openMenu = ref(false);
const notificationsEnabled = ref(true);
const emit = defineEmits(['channelSelected', 'deleteChannel']);

function selectChannel() {
    emit('channelSelected', props.channelName);
}
function toggleMenu() {
    openMenu.value = !openMenu.value;
}

function inviteToChannel() {
    openMenu.value = false;
}
function deleteChannel(channelName) {
    emit('deleteChannel', channelName)
    openMenu.value = false;
}
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';

.channelTemplate {
    background-color: rgb(85, 62, 102);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    margin: 5px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    color: white;
}
.channel {
    cursor: pointer;
}
.channelName {
    margin-left: 5px;
}
.channelOptions {

    margin-left: auto;
}
.menuOptionsChannel{
    background-color: $accent;
    display: flex;
    flex-direction: column;
    padding: 10px;
}
</style>

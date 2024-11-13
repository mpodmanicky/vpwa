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
                        <q-list>
                            <q-item clickable v-ripple @click="inviteToChannel">
                                <q-item-section class="text-center q-pt-sm">Invite to the channel</q-item-section>
                            </q-item>
                                <q-separator spaced inset />
                            <q-item clickable v-ripple>
                                <q-item-section>
                                    <q-toggle
                                        v-model="notificationsEnabled"
                                        label="Desactivate notifications"
                                        left-label
                                        right
                                    />
                                </q-item-section>
                            </q-item>
                                <q-separator spaced inset />
                            <q-item clickable v-ripple @click="deleteChannel(channelName)">
                                <q-item-section class="text-negative text-center q-pb-sm">Delete channel</q-item-section>
                            </q-item>
                        </q-list>
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
}
</style>

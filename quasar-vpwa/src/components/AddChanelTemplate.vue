<template>
    <div class="row justify-end">
      <q-btn
        @click="dialogOpen = true"
        round
        ripple
        dense
        icon="add"
        color="yellow-9"
        size="sm"
        class="q-my-xs"
        style="margin-right: 40px; margin-top: 40px;"
      />
    </div>
  
    <q-dialog v-model="dialogOpen" @hide="resetDialog">
        <q-card class="q-card--rounded" style="border-radius: 16px;">
            <div class="menuJoinChannel">
                <q-card-section v-if="!selectionMade">
                    <div class="text-h6">Join or Create a New Channel</div>
                </q-card-section>
                <q-card-section>
                    <q-input
                        v-model="channelName"
                        label="Name of the Channel"
                        filled
                        @keyup.enter="addChannel"
                    />
                    <div class="row items-center q-mt-md">
                        <div class="text-subtitle1 q-mr-md">Public Channel</div>
                        <q-toggle
                            v-model="isPublic"
                            color="primary"
                            left-label
                        />
                    </div>
                    <span v-if="channelNameError" style="color: red; font-size: 12px;">Channel cannot be empty</span>
                </q-card-section>      
                <q-card-actions style="justify-content: space-between;">
                    <q-btn label="Cancel" 
                        color="grey" 
                        @click="closeDialog"
                        style="flex: 1; margin-right: 10px;"
                    />
                    <q-btn
                        label="Join"
                        color="primary"
                        @click="addChannel"
                        style="flex: 1; margin-left: 10px;"
                    />
                </q-card-actions>
            </div>
        </q-card>
    </q-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';

const emit = defineEmits(['addChannel']);

const dialogOpen = ref(false);
const selectionMade = ref(null);
const channelName = ref('');
const isPublic = ref(true);
const channelNameError = ref(false);

function addChannel() {
    console.log("Channel Name in addChannel:", channelName.value); 
    if (channelName.value.trim()) {
        emit('addChannel', {
            channelName: channelName.value, 
            isPublic: isPublic.value  
        });
        closeDialog();
        resetDialog();
    } else {
        channelNameError.value = true; 
    }
}

function resetDialog() {
    selectionMade.value = null;
    channelName.value = ''; 
    isPublic.value = true;
}

function closeDialog() {
    dialogOpen.value = false;
}
</script>

<style lang="scss" scoped>
.menuJoinChannel{
    background-color: $accent;
}
</style>
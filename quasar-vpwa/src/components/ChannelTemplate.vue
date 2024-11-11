<template>
    <div class="channel" @click="selectChannel">
        <div class="channelTemplate">
            <div class="channelLogo">
                <q-avatar rounded color="orange" text-color="white" icon="headphones" />
            </div>
            <div class="channelName">
                <p>{{ channelName }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    channelName: {
        type: String,
        Required: true,
    }
 
});
const emit = defineEmits(['channelSelected']);

function selectChannel() {
    emit('channelSelected', props.channelName);
}
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';

.channelTemplate {
    background-color: rgb(85,62,102);
    box-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    margin: 5px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    color: white;
}
.channel{
    cursor: pointer;
}
.channelName {
    margin-left: 5px;
}
</style>
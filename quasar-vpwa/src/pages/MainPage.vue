<template>
    <q-page>
        <div class="mainApp">
            <div class="sideTemplate">
                <SideTemplate />
            </div>
            <div class="chatTemplate">
                <ChatTemplate />
            </div>
        </div>
    </q-page>
</template>    

<script setup>
import SideTemplate from 'src/components/SideTemplate.vue';
import ChatTemplate from 'src/components/ChatTemplate.vue';
import CommandlineTemplate from 'src/components/CommandlineTemplate.vue';
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';

.mainApp {
    min-height: inherit;
    display: flex;
}

.sideTemplate {
    width: 30%;
    min-height: inherit;
}

.chatTemplate {
    width: 100%;
    min-height: inherit;
}

</style>

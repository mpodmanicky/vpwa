<!--
TASK
[] ADD v-on to both.
[] When v-on activate in avatar, do to open the user configuration options
[] When v-on activate in channel, change the data in the chat component (in DEVELOPMENT)
[] Change the icon in user, when we will have our database
[] Add option, if icon is undefined, use incognite picture   
[] Change the data in the script when we have our database.
-->

<template>
    <!-- Avatar -->
    <div class="shadow-24 profile q-gutter xs">
      <q-avatar
        size="50px"
        color="grey"
        text-color="black"
        icon="NOT DEFINED YET" 
        border="2px solid black"
      >
        A
      </q-avatar>
    </div>
  
    <!-- Channels -->
    <div class="channels q-gutter-xs q-mt-xs">
        <q-avatar
        v-for="(channel, index) in userChannels"
        :key="index"
        size="40px"
        color="secondary"
        rounded
        class="channel-avatar q-md-sm"
        :icon="channel.icon || undefined"        
      >
        {{ channel.icon ? '' : channel.name.charAt(0).toUpperCase() }} <!-- Muestra la inicial si no hay icono -->
      </q-avatar>
    </div>
</template>
  
<script>

export default {
  data() {
    return {
      userIcon: "person", 
      userChannels: [
        { name: "channel1", icon: "channel" },
        { name: "channel2", icon: "channel" },
        { name: "channel3", icon: "channel" }
      ]
    };
  }
};
</script>
<style scoped>
    .channels{
        overflow-y: auto;
    }
    .channel-avatar {
    cursor: pointer;
    transition: transform 0.3s;
    }

    .channel-avatar:hover {
    transform: scale(1.1);
    }
</style>

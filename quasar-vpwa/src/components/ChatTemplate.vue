<template>
    <div class="chat-parent q-col q-col-12 full-width" style="overflow-y: auto;">
        <!-- Render chat messages -->
<!--
    We should connect the message and properties from the database,
    when user do log In.
-->
     <div v-for="(message, index) in messages" :key="index";>
        <!--Message sent by another user-->
        <q-chat-message
            :text="[message.text]"
            :name="message.sender"     
            :reverse="message.sender === userNickname"
            :sent="message.sender === userNickname"
            :received="message.sender !== userNickname"
        /> <!--:avatar="message.avatar"-->
         </div>

    </div>
</template>
<script>


</script>
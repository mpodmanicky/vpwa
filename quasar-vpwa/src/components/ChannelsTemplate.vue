<template>
  <div class="menu-group q-gutter-sm">
    <q-btn 
      id="buttonMyOwngroups"
      icon="groups" 
      @click="handleMyOwnGroupsClick" 
      round 
      class="menu-buttons"
      size="md"
    />
    <q-btn 
      id="buttonMyGroups"
      icon="people"
      @click="handleMyGroupsClick"
      round  
      size="md"
     />
    <q-btn 
      id="buttonAddGroup"
      icon="add_box" 
      @click="handleAddGroupClick" 
      round 
      size="md"
    />
  </div>

</template>

<script setup>

import { ref } from 'vue';

function handleMyOwnGroupsClick() {}
function handleMyGroupsClick() {}
function handleAddGroupClick() {}

</script>

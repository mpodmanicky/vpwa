<!-- 
  TASK
  [] Change the nickname, name and surname when the database is ready.
  [] Implement the v-for for the groups when we have the database. 

-->
<!-- <template>
    <q-layout view="lHh Lpr lFf"  class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title 
              style=" 
                font-weight: 500; 
                font-size: 17px;
                text-shadow: 2px 2px 5px rgba(186, 85, 211, 0.7); 
              "> 
            Slack clone 
          </q-toolbar-title>
          <q-btn flat @click="drawerChannels = !drawerChannels" round dense icon="menu" style="margin-right: 10px;"/>
        </q-toolbar>
      </q-header>
  
      <q-drawer
        v-model="drawerChannels"
        show-if-above
        :width="200"
        :breakpoing="400"
      >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; background-color: var(--q-primary);">
        <q-list padding>
  
        </q-list>
      </q-scroll-area>  
  
      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">Name and Surname</div>
          <div>@Username</div>
        </div>
      </q-img>
  
  
      </q-drawer>
  
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const drawerChannels = ref(false);
  
  defineOptions({
    name: 'MainLayout',
  });
  </script>
  
   -->
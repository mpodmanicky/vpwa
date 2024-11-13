<template>
    <div class="user">
        <q-btn color="$primary"
               text-color="white"
               icon="person"
               class="userBton"
        >
            <q-menu>
                <div class="settings row no-wrap q-pa-md">
                    <div class="column">
                      <div class="text-h6 q-mb-md">Settings</div>
                      <q-toggle
                         v-model="muteNotification" label="Notifications" />
                      <q-toggle v-model="statusOffline" label="Invisible" />
                    </div>

                    <q-separator vertical inset class="q-mx-lg" />

                    <div class="column items-center">
                      <q-avatar
                        color="primary"
                        size="50px"
                        round
                        icon="person"
                        class="custom-avatar"
                      />

                      <div class="text-subtitle1 q-mt-md q-mb-xs">Username</div>

                      <q-btn
                        color="primary"
                        label="Logout"
                        push
                        size="sm"
                        @click="showLogoutDialog"
                      />
                    </div>
                  </div>
            </q-menu>
        </q-btn>

          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center">
            <q-avatar
              color="primary"
              size="50px"
              round
              icon="person"
              class="custom-avatar"
            />

            <div class="text-subtitle1 q-mt-md q-mb-xs">
              {{ store.username }}
            </div>

            <q-btn
              color="primary"
              label="Logout"
              push
              size="sm"
              @click="showLogoutDialog"
            />
          </div>
        </div>
    <q-dialog v-model="logoutDialogVisible" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Are you sure you want to log out?</div>
        </q-card-section>

        <q-card-actions
          class="q-pt-none"
          style="justify-content: space-between"
        >
          <q-btn
            label="Cancel"
            @click="logoutDialogVisible = false"
            color="grey"
            style="flex: 1; margin-right: 10px"
          />
          <q-btn
            label="Log Out"
            @click="handleLogout"
            color="primary"
            style="flex: 1; margin-left: 10px"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { store } from "src/store/store.js";

const muteNotification = ref(true);
const statusOffline = ref(false);
const logoutDialogVisible = ref(false);
const router = useRouter();

const showLogoutDialog = () => {
  logoutDialogVisible.value = true;
};

const handleLogout = () => {
  console.log("Logged out");
  logoutDialogVisible.value = false;
  store.username = '';
  router.replace("/");
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
.userBton {
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
.settings {
  background-color: $accent;
}
.custom-avatar {
  border: 2px solid var(--q-color-primary);
}
</style>

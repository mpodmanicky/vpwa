<!--Root component of the entire app-->

<template>
  <router-view />
</template>

<script setup>
import { watch } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar();
watch(
  () => $q.appVisible,
  (val) => {
    console.log(
      val
        ? $q.notify({
            type: "positive", // Notification type (e.g., positive, negative, warning)
            message: "Welcome back! The app is now visible.",
            timeout: 2000, // Duration in milliseconds
            position: "top-right", // Position on screen
          })
        : "App went in the background"
    );
  }
);
</script>

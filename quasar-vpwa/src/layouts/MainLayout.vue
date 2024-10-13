<template> 
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Slack Clone
        </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <div class="footer-text">
        <p>Lucas Espitia, Martin Podmanicky</p>
        <p>2024</p>
        <p>FIIT, STU in Bratislava</p>
      </div>
    </q-footer>

    <!-- <q-footer class="text-white q-pa-xs footer">
      <div class="text-center footer-content">
        <div class="authors">
          <p>Lucas Espitia and Martin Podmanicky</p>
        </div>
        <div class="contact">
          <p>
            <a href="mailto:xespitiacorredo@stuba.sk" class="email-link">xespitiacorredo@stuba.sk</a>
          </p>
          <p>
            <a href="mailto:xpodmanickym@stuba.sk" class="email-link">xpodmanickym@stuba.sk</a>
          </p>
        </div>
        <div class="copyright">
          <p>&copy; 2024 <strong>FIIT</strong></p>
        </div>
      </div>
    </q-footer> -->
  </q-layout>
</template>

<script setup>
defineOptions({
  name: 'MainLayout',
});
</script>

<style lang="scss" scoped>

.footer-text {
  margin: 10px 10px 0px 10px;
  display: flex;
  justify-content: space-between;
}
</style>
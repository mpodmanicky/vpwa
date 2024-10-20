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

    <q-footer elevated>
      <div class="footer-text">
        <p>Lucas Espitia, Martin Podmanicky</p>
        <p>2024 &copy;</p>
        <p>FIIT, STU in Bratislava</p>
      </div>
    </q-footer>
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
<template> 
  <q-layout view="lHh Lpr lFf" class="layout">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Slack Clone
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="page-container">
      
      <router-view />
  
    </q-page-container>

    <q-footer class="text-white q-pa-xs footer">
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
    </q-footer>
  </q-layout>
</template>

<script setup>
defineOptions({
  name: 'MainLayout',
});
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  flex: 1; 
  min-height: 100vh; 
  overflow-y: auto;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer {
  height: auto;
  padding: 10px 0;
}

.email-link {
  color: white;
  text-decoration: none;
}

.email-link:hover {
  color: blue;
  text-decoration: underline;
}

.email-link:focus {
  outline: none;
}


.footer-content p {
  margin: 5px 0;
  font-size: 16px;
}

@media (max-width: 768px) {
  .footer {
    padding: 5px 0;
  }

  .footer-content p {
    margin: 2px 0;
    font-size: 12px;
  }

  .email-link {
    font-size: 12px;
  }
}
</style>

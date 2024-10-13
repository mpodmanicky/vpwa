// using dynamic loading (on demand) instead of lazy loading

const routes = [
  {
    // Main route for the landing page of our Slack-clone.
    // Re- did the MainLayout which quasar started with.
    // All of our other pages (3) are then dynamically loaded as children of the mainLayout.vue
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/IndexPage.vue')
      },
      {
        path: 'slack', component: () => import('pages/MainPage.vue')
       },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

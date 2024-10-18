// using dynamic loading (on demand) instead of lazy loading

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/IndexPage.vue')  // Página de inicio
      },
      {
        path: 'slack', component: () => import('pages/MainPage.vue')  // Página principal
      },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')  // Página de error
  }
]

export default routes;

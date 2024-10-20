// using dynamic loading (on demand) instead of lazy loading

const routes = [
  {
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
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')  
  }
]

export default routes;

import { createRouter, createWebHistory } from 'vue-router'
import firstPage from './components/pages/newpage.vue'
import secondPage from './components/pages/pagetwo.vue'
import hooks from './components/pages/basic/hooks.vue'
import methods from './components/pages/basic/methods.vue'

export const routes = [
  {
    name: 'home' , 
    path:'/' , 
    component: firstPage , 
   
  },
  {
    name: 'secondpage' , 
    path:'/secondpage' , 
    component: secondPage
  },
  {
    name: 'hooks' , 
    path:'/hooks' , 
    component: hooks
  },
  {
    name: 'methods' , 
    path:'/methods' , 
    component: methods
  },
]

const router = createRouter({
  history: createWebHistory() ,
  routes: routes
})

export default router

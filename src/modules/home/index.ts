import { defineModule } from '@/utils'
import HomePage from './routes/home-page.vue'
import SearchPage from './routes/search-page.vue'

export default defineModule(
  {
  id: 'home',
  name: 'home',
  routes: [
    {
      name: 'home-page',
      path: '/home',
      component: HomePage
    },
    {
      name: 'search-page',
      path: '/home/search',
      component: SearchPage
    },
  ]
},


)
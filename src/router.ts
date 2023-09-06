import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import LoginRoute from '@/routes/login/login-page.vue'
import RegisterRoute from '@/routes/register/register-page.vue'
import { hydrate } from './hydrate'
import { useAppStore } from './stores/app'
import { useAuthStore } from './stores/auth'
import HomeRoute from './modules/home/routes/home-page.vue'
const defaultRoutes: RouteRecordRaw[] = [
  {
    path: '',
    redirect: '/login'
  },
  {
    name: 'login',
    path: '/login',
    component: LoginRoute,
    meta: {
      public: true
    }
  },
  {
    name: 'register',
    path: '/register',
    component: RegisterRoute,
    meta: {
      public: true
    }
  },
  {
    name: 'home',
    path: '/home',
    component: HomeRoute,
    meta: {
      public: true
    }
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: defaultRoutes
})

let firstLoad = true
router.beforeEach(async (to, from) => {
  const authStore = useAuthStore()
  const appStore = useAppStore()
  // First load
  if (firstLoad) {
    firstLoad = false
    // Try hydrate store on first load
    try {
      appStore.hydrate()
    } catch {
      // Ignore error
    }
  }

  // TODO: need to be linked and fixed with authentication, this is just a mock guard to prevent access to unloaded routes
  if (!to.meta.public) {
    if (appStore.hydrated === false) {
      appStore.isHydrating = false
      await hydrate()
      return to.fullPath
    }
  }
  //TODO: add when api and authentication ready
  // if (!to.meta.public) {
  //   if (appStore.hydrated === false) {
  //     appStore.hydrating = false
  //     if (authStore.isAuthenticated) {
  //       try {
  //         await hydrate()
  //       } catch {
  //         // Ignore error
  //       }
  //       return to.fullPath
  //     } else {
  //       if (to.fullPath) {
  //         return '/login?redirect=' + encodeURIComponent(to.fullPath)
  //       } else {
  //         return '/login'
  //       }
  //     }
  //   }
  // }
})

import {type App } from 'vue'
import PublicView from './public-view.vue'
import NavbarView from './navbar-page.vue';

export function registerViews(app: App): void {
  app.component('PublicView', PublicView)
  app.component('NavbarView', NavbarView)
}

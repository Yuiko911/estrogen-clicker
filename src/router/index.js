import UpgradesView from '@/views/UpgradesView.vue'
import AchievementsView from '@/views/AchievementsView.vue'
import SettingsView from '@/views/SettingsView.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: UpgradesView },
    { path: "/achievements", component: AchievementsView },
    { path: "/settings", component: SettingsView },
  ],
})

export default router

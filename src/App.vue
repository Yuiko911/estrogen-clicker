<script setup>
import { useUserStore } from '@/stores/userData';
import { RouterLink, RouterView } from 'vue-router'

const userdata = useUserStore()
</script>

<template>
  <div id="left-panel">
    <div>
      <p>Current count is {{ userdata.savedata.estro }}</p>
      <button @click="userdata.increment">Click</button>
    </div>
  </div>

  <div id="menu-panel">

    <nav>
      <RouterLink to="/">Upgrades</RouterLink> |
      <RouterLink to="/achievements">Achievements</RouterLink> |
      <RouterLink to="/settings">Settings</RouterLink>
    </nav>

    <RouterView />
  </div>

</template>

<style scoped>
#left-panel, #menu-panel {
  width: 50%;
  padding: 10px;
}

#left-panel {
  background-color: blanchedalmond;
  text-align: center;
}

#menu-panel {
  background-color: beige;
}
</style>

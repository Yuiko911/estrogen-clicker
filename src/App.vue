<script setup>

import { RouterLink, RouterView } from 'vue-router'

import TextArea from './components/TextArea.vue';
import Pill from './components/Pill.vue';


	console.log('app')
</script>

<template>
  <div id="left-panel">
    <TextArea id="text-area"/>
    <div id="pill-area"> <Pill/> </div>
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
#left-panel,
#menu-panel {
  width: 50%;
  padding: 10px;
}

#left-panel {
  display: flex;

  flex-direction: column;

  background-color: blanchedalmond;
  text-align: center;
}

#text-area {
  height: fit-content;
}

#pill-area {
  height: fit-content;
  
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;
}

#menu-panel {
  background-color: beige;
}
</style>

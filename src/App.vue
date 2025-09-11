<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore()
</script>

<template>
  <div id="left">
    <div>
      <p>Current count is {{ counter.estro }}</p>
      <button @click="counter.increment">Click</button>
    </div>
  </div>

  <div id="menu">
    <h1>You did it!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque unde soluta ut sed blanditiis adipisci. Totam vel quis quaerat labore! Quidem cum minima incidunt sint necessitatibus pariatur, adipisci optio alias.</p>
  </div>

</template>

<style scoped>

#left {
  width: 50%;
  background-color: blanchedalmond;
}

#menu {
  width: 50%;
  background-color: beige;
}

</style>

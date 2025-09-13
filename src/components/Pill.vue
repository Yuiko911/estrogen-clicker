<script setup>
import { useUserStore } from '@/stores/user-data';

const userdata = useUserStore()
</script>

<template>
  <img @click="userdata.increment" src="@/assets/estrogen.png" alt="estrogen click" id="pill">
</template>

<style scoped>
#pill {
  width: 293px;
  height: 176px;

  filter: drop-shadow(5px 10px #22222222) drop-shadow(5px 15px #22222222);

  animation: 3s ease-in-out 0 bobbing;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

#pill:active {
  scale: 0.95;
  transition: scale 0.1s;
}

@keyframes bobbing {
  from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(10%);
  }
}
</style>
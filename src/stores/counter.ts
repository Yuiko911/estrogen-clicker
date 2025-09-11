import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const estro = ref(0)

  function increment() {
    estro.value++
  }

  return { estro, increment }
})


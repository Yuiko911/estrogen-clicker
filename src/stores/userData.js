import { ref } from 'vue'
import { defineStore } from 'pinia'

// sure
export const useUserStore = (name) =>
  defineStore(`store-${name}`, () => {
    const estro = ref(0)

    function increment() {
      estro.value++
    }

    function saveToLocalStorage() {
      localStorage.setItem(`save-${name}`, estro.value.toString())
    }

    function loadFromLocalStorage() {
      estro.value = localStorage.getItemItem(`save-${name}`)
    }

    return { estro, increment }
  })();





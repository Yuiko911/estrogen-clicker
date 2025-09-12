import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('default', () => {
  const savedata = ref({
    estro: 0
  })
  
  function increment() {
    savedata.value.estro++
  }

  function save() {
    localStorage.setItem('default-estro', JSON.stringify(savedata.value))
  }

  function load() {
    savedata.value = JSON.parse(localStorage.getItem('default-estro'))
  }

  return { savedata, increment, save, load }
})

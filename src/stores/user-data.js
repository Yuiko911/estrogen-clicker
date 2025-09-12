import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import { useGameStore } from './game-data'

export const useUserStore = defineStore('default', () => {

  const gamedata = useGameStore()

  const savedata = ref({
    estrogen: 0,
    upgrades: {
      // Click strength
      blahaj: 0,

      // Autoclick
      mountain_game: 0
    }
  })

  const clickstrength = computed(() => {
    return 1 + savedata.value.upgrades["blahaj"] * 1
  })

  function increment() {
    savedata.value.estrogen += clickstrength.value
  }

  function buyUpgrade(upgrade) {
    if (savedata.value.upgrades[upgrade] === undefined) {
      console.log(`Upgrade ${upgrade} doesn't exist`)
      return
    }

    if (savedata.value.estrogen < gamedata.upgradesprices[upgrade]) {
      return
    }

    savedata.value.estrogen -= gamedata.upgradesprices[upgrade]
    savedata.value.upgrades[upgrade]++
  }

  const save = () => localStorage.setItem('default-estro', JSON.stringify(savedata.value))
  const load = () => savedata.value = JSON.parse(localStorage.getItem('default-estro'))

  return { savedata, increment, buyUpgrade, save, load }
})

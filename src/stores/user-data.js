import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import { useGameStore } from './game-data'

export const useUserStore = defineStore('default', () => {

  const gamedata = useGameStore()

  const savedata = ref({
    estrogen: 0,
    upgrades: {
      shark: 0,

      mountain_game: 0,

      interval_reduced: 0,
    }
  })

  // Put in another file probably
  const produce = () => savedata.value.estrogen += 1 * savedata.value.upgrades.mountain_game

  let interval = computed(() => 1000 / (1 + savedata.value.upgrades.interval_reduced))

  let autoproduction = setInterval(produce, interval.value)

  function updateAutoproduction() {
    clearInterval(autoproduction)
    autoproduction = setInterval(produce, interval.value)
  }


  const clickstrength = computed(() => {
    return 1 + savedata.value.upgrades["shark"] * 1
  })

  function increment() {
    savedata.value.estrogen += clickstrength.value
  }

  function buyUpgrade(upgrade) {
    if (savedata.value.upgrades[upgrade] === undefined) {
      console.log(`Upgrade ${upgrade} doesn't exist`)
      return false
    }

    if (savedata.value.estrogen < gamedata.upgradesprices[upgrade]) {
      return false
    }

    savedata.value.estrogen -= gamedata.upgradesprices[upgrade]
    savedata.value.upgrades[upgrade]++

    updateAutoproduction()

    return true
  }

  const save = () => localStorage.setItem('default-estro', JSON.stringify(savedata.value))
  const load = () => savedata.value = JSON.parse(localStorage.getItem('default-estro'))

  return { savedata, increment, buyUpgrade, save, load }
})

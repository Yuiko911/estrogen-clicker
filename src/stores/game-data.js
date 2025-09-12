import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useUserStore } from './user-data'

export const useGameStore = defineStore('gamedata', () => {
    const userdata = useUserStore()

    function scaleCost(upgrade, scaling) {
        return Math.floor(upgradesbaseprices[upgrade] * Math.pow(scaling, userdata.savedata.upgrades[upgrade]))
    }

    const upgradesbaseprices = {
        blahaj: 10,
        mountain_game: 40
    }

    const upgradesprices = computed(() => {
        return {
            blahaj: scaleCost("blahaj", 1.4),
            mountain_game: scaleCost("mountain_game", 1.4),
        }
    })

    return { upgradesprices }
})
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import { useGameStore } from './game-data'

export const useUserStore = defineStore('default', () => {

	const gamedata = useGameStore()

	const savedata = ref({
		estrogen: 0,
		upgrades: {
			// TODO: Find names
			click: {
				shark: 0,
				click2: 0,
				click3: 0,
			},
			autoclick: {
				mountain_game: 0,
				auto2: 0,
				auto3: 0,
			},
			improvements: {
				two_times_prod: 0,
				interval_reduced: 0,
				better_scaling_cost: 0,
				temp_square_prod: 0,

				autobuy_click: 0,
				autobuy_autoclick: 0,

				end_game: 0,
			}
		}
	})

	// Put in another file probably
	const clickstrength = computed(() => {
		return 1 + savedata.value.upgrades["shark"] * 1
	})
	const produce = () => savedata.value.estrogen += 1 * savedata.value.upgrades.mountain_game

	const produceStrength = computed(() => {
		return Object.entries(savedata.value.upgrades.autoclick)
			.reduce((acc, [key, value]) => {acc + value * 1})
	})

	// Actual clicking
	function increment() {
		savedata.value.estrogen += clickstrength.value
	}

	// Auto production
	let interval = computed(() => 1000 / (1 + savedata.value.upgrades.improvements.interval_reduced))
	let autoproduction = setInterval(produce, interval.value)

	function updateAutoproduction() {
		clearInterval(autoproduction)
		autoproduction = setInterval(produce, interval.value)
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

	// Debug
	const logSave = () => console.log(savedata.value, clickstrength.value, produceStrength.value)


	console.log('userdata')
	return { savedata, increment, buyUpgrade, save, load, logSave }
})

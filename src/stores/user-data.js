import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'

import { useGameStore } from './game-data'

export const useUserStore = defineStore('default', () => {

	const gamedata = useGameStore()

	const savedata = ref({
		estrogen: 0,

		upgrades: {
			// TODO: Find names
			shark: 0,
			clicker: 0,
			click3: 0,

			mountain_game: 0,
			sylveon: 0,
			music_software: 0,

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
	})

	let isTempSquared = ref(false)

	//////////////
	// Strength //
	//////////////
	const roundToOnePlace = (x) => Number(x.toFixed(1))

	const clickstrength = computed(() => {
		return roundToOnePlace((
			(
				(1 + savedata.value.upgrades["shark"])
				* (1 + 0.05 * savedata.value.upgrades["clicker"])
				* (1 + 0 * savedata.value.upgrades["music_software"])
			)
			* Math.pow(2, savedata.value.improvements['two_times_prod'])
		)
			** (1 + isTempSquared.value)
		)
	})

	const producestrength = computed(() => {
		return roundToOnePlace((
			((savedata.value.upgrades["mountain_game"]) * (1 + 0.1 * savedata.value.upgrades["sylveon"]) + (clickstrength.value * 0.1 * savedata.value.upgrades["music_software"]))
			* Math.pow(2, savedata.value.improvements['two_times_prod'])
		) ** (1 + isTempSquared.value)
		)
	})

	/////////////////////
	// Actual clicking //
	/////////////////////
	function increment() {
		savedata.value.estrogen = roundToOnePlace(savedata.value.estrogen + clickstrength.value)
	}

	/////////////////////
	// Auto production //
	/////////////////////
	const produce = () => savedata.value.estrogen = roundToOnePlace(savedata.value.estrogen + producestrength.value)

	let interval = computed(() => 1000 / Math.pow(2, savedata.value.improvements['interval_reduced']))
	let autoproduction = setInterval(produce, interval.value)

	function updateAutoproduction() {
		clearInterval(autoproduction)
		autoproduction = setInterval(produce, interval.value)
	}

	/////////////////////
	// Upgrades prices //
	/////////////////////
	const scaleCost = (upgrade) => {
		return Math.floor(gamedata.upgradesbaseprices[upgrade] * Math.pow(gamedata.upgradesbasescaling[upgrade], savedata.value.upgrades[upgrade]))
	}

	const upgradesprices = computed(() => {
		return {
			shark: scaleCost("shark"),
			clicker: scaleCost("clicker"),
			click3: scaleCost("click3"),

			mountain_game: scaleCost("mountain_game"),
			sylveon: scaleCost("sylveon"),
			music_software: scaleCost("music_software"),
		}
	})

	//////////////
	// Upgrades //
	//////////////
	function canBuyUpgrade(upgrade) {
		if (savedata.value.upgrades[upgrade] === undefined) {
			console.log(`Upgrade ${upgrade} doesn't exist`)
			return false
		}

		if (savedata.value.estrogen < upgradesprices.value[upgrade]) {
			return false
		}

		return true
	}

	function buyUpgrade(upgrade) {
		if (savedata.value.upgrades[upgrade] === undefined) {
			console.log(`Upgrade ${upgrade} doesn't exist`)
			return false
		}

		if (savedata.value.estrogen < upgradesprices.value[upgrade]) {
			return false
		}

		savedata.value.estrogen = roundToOnePlace(savedata.value.estrogen - upgradesprices.value[upgrade])
		savedata.value.upgrades[upgrade]++

		updateAutoproduction()

		return true
	}

	//////////////////
	// Improvements //
	//////////////////
	const improvementsprices = computed(() => {
		return {
			two_times_prod: 0,
			interval_reduced: 0,
			better_scaling_cost: 0,
			temp_square_prod: 0,

			autobuy_click: 0,
			autobuy_autoclick: 0,

			end_game: 0,
		}
	})

	function buyImprovements(improvement) {
		if (savedata.value.improvements[improvement] === undefined) {
			console.log(`Improvement ${improvement} doesn't exist`)
			return false
		}

		if (savedata.value.estrogen < improvementsprices.value[improvement]) {
			return false
		}

		if (gamedata.maximprovementscount[improvement] > 0 && savedata.value.improvements[improvement] >= gamedata.maximprovementscount[improvement]) {
			return false
		}

		if (improvement == 'temp_square_prod' && isTempSquared.value) {
			return false
		}
		
		console.log("buying " + improvement);

		savedata.value.estrogen = roundToOnePlace(savedata.value.estrogen - improvementsprices.value[improvement])
		savedata.value.improvements[improvement]++

		if (improvement == 'temp_square_prod') {
			tempSquareProd()
		}

		updateAutoproduction()

		return true
	}

	/////////////////////////////////
	// Improvements Implementation //
	/////////////////////////////////
	const tempSquareProd = () => {
		if (isTempSquared.value) return

		isTempSquared.value = true
		setTimeout(() => {
			isTempSquared.value = false
		}, 10 * 1000)
	}

	watch(() => savedata.value.estrogen, (value, _) => {
		console.log('e')

		if (savedata.value.improvements['autobuy_click'] >= 1) if (value >= upgradesprices.value['shark']) buyUpgrade('shark')
		if (savedata.value.improvements['autobuy_click'] >= 2) if (value >= upgradesprices.value['clicker']) buyUpgrade('clicker')
		if (savedata.value.improvements['autobuy_click'] >= 3) if (value >= upgradesprices.value['click3']) buyUpgrade('click3')
		
		if (savedata.value.improvements['autobuy_autoclick'] >= 1) if (value >= upgradesprices.value['mountain_game']) buyUpgrade('mountain_game')
		if (savedata.value.improvements['autobuy_autoclick'] >= 2) if (value >= upgradesprices.value['sylveon']) buyUpgrade('sylveon')
		if (savedata.value.improvements['autobuy_autoclick'] >= 3) if (value >= upgradesprices.value['music_software']) buyUpgrade('music_software')
	})

	////////////
	// Saving //
	////////////
	const save = (name) => {
		name = name || 'estro'
		localStorage.setItem(`default-${name}`, JSON.stringify(savedata.value))
	}
	const load = (name) => {
		name = name || 'estro'
		savedata.value = JSON.parse(localStorage.getItem(`default-${name}`))
	}

	// Debug
	const debugInfo = {
		'logSave': () => console.log(savedata.value),
		'giveE': () => savedata.value.estrogen = roundToOnePlace(savedata.value.estrogen + 999999999999999),

		'clickS': clickstrength,
		'produceS': producestrength,

		'isTempSquared': isTempSquared,
	}

	return { savedata, increment, upgradesprices, improvementsprices, canBuyUpgrade, buyUpgrade, buyImprovements, save, load, debugInfo }
})

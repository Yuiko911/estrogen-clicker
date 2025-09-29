import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'

import { useGameStore } from './game-data'

export const useUserStore = defineStore('default', () => {

	const gamedata = useGameStore()

	const savedata = ref(gamedata.defaultsavedata)
	if (savedata.value.start_date == null) savedata.value.start_date = Date.now() 

	let isTempSquared = ref(false)

	//////////////
	// Strength //
	//////////////
	const roundToOnePlace = (x) => Number(x.toFixed(1))

	const clickstrength = computed(() => {
		return roundToOnePlace(
			((
				(1 + savedata.value.upgrades["shark"])
				* (1 + 0.05 * savedata.value.upgrades["clicker"])
				* (1 + 0.15 * savedata.value.coins)

			) * Math.pow(2, savedata.value.improvements['two_times_prod'])
			) ** (1 + isTempSquared.value * 0.1)
		)
	})

	const producestrength = computed(() => {
		return roundToOnePlace((
			((savedata.value.upgrades["mountain_game"]) * (1 + 0.1 * savedata.value.upgrades["sylveon"]) + (clickstrength.value * 0.1 * savedata.value.upgrades["music_software"]))
			* Math.pow(2, savedata.value.improvements['two_times_prod'])
		) ** (1 + isTempSquared.value * 0.1)
		)
	})

	/////////////////////
	// Actual clicking //
	/////////////////////
	function increment() {
		savedata.value.estrogen = roundToOnePlace(savedata.value.estrogen + clickstrength.value)
		savedata.value.total_estrogen = roundToOnePlace(savedata.value.total_estrogen + clickstrength.value);

		if (savedata.value.upgrades['marksman']) {
			if (Math.random() < (0.01 * savedata.value.upgrades['marksman'])) savedata.value.coins++
		}

	}

	/////////////////////
	// Auto production //
	/////////////////////
	const produce = () => {
		savedata.value.estrogen = roundToOnePlace(savedata.value.estrogen + producestrength.value)
		savedata.value.total_estrogen = roundToOnePlace(savedata.value.total_estrogen + producestrength.value)
	}

	let interval = computed(() => 1000 / Math.pow(2, savedata.value.improvements['interval_reduced']))
	let autoproduction = setInterval(produce, interval.value)

	function updateAutoproduction() {
		clearInterval(autoproduction)
		autoproduction = setInterval(produce, interval.value)
	}

	/////////////////////
	// Upgrades prices //
	/////////////////////
	const scaleCostExp = (upgrade) => {
		return Math.floor(gamedata.upgradesbaseprices[upgrade] * Math.pow(gamedata.upgradesbasescaling[upgrade], savedata.value.upgrades[upgrade]))
	}

	const scaleCostExpImp = (improvement) => {
		return Math.floor(gamedata.improvementbaseprices[improvement] * Math.pow(gamedata.improvementbasescaling[improvement], savedata.value.improvements[improvement]))
	}

	const upgradesprices = computed(() => {
		return {
			shark: scaleCostExp("shark"),
			clicker: scaleCostExp("clicker"),
			marksman: scaleCostExp("marksman"),

			mountain_game: scaleCostExp("mountain_game"),
			sylveon: scaleCostExp("sylveon"),
			music_software: scaleCostExp("music_software"),
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
			two_times_prod: scaleCostExpImp('two_times_prod'),
			interval_reduced: scaleCostExpImp('interval_reduced'),
			temp_square_prod: scaleCostExpImp('temp_square_prod'),

			autobuy_click: scaleCostExpImp('autobuy_click'),
			autobuy_autoclick: scaleCostExpImp('autobuy_autoclick'),

			end_game: scaleCostExpImp('end_game'),
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

		if (improvement == 'temp_square_prod') tempSquareProd()

		updateAutoproduction()
		autobuyers()

		// Improvement achievements
		if (savedata.value.improvements['two_times_prod'] >= gamedata.maximprovementscount['two_times_prod']) savedata.value.achievements['all_production'] = true
		if (savedata.value.improvements['interval_reduced'] >= gamedata.maximprovementscount['interval_reduced']) savedata.value.achievements['all_interval'] = true
		if (savedata.value.improvements['autobuy_click'] >= gamedata.maximprovementscount['autobuy_click'] && savedata.value.improvements['autobuy_autoclick'] >= gamedata.maximprovementscount['autobuy_autoclick']) savedata.value.achievements['all_automation'] = true

		if (savedata.value.achievements['all_production'] && savedata.value.achievements['all_interval'] && savedata.value.achievements['all_automation']) savedata.value.achievements['all_improvements'] = true

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

	const autobuyers = (value, _) => {
		if (savedata.value.improvements['autobuy_click'] >= 1) if (value >= upgradesprices.value['shark']) buyUpgrade('shark')
		if (savedata.value.improvements['autobuy_click'] >= 2) if (value >= upgradesprices.value['clicker']) buyUpgrade('clicker')
		if (savedata.value.improvements['autobuy_click'] >= 3) if (value >= upgradesprices.value['marksman']) buyUpgrade('marksman')

		if (savedata.value.improvements['autobuy_autoclick'] >= 1) if (value >= upgradesprices.value['mountain_game']) buyUpgrade('mountain_game')
		if (savedata.value.improvements['autobuy_autoclick'] >= 2) if (value >= upgradesprices.value['sylveon']) buyUpgrade('sylveon')
		if (savedata.value.improvements['autobuy_autoclick'] >= 3) if (value >= upgradesprices.value['music_software']) buyUpgrade('music_software')
	}

	watch(() => savedata.value.estrogen, autobuyers)

	//////////////////
	// Achievements //
	//////////////////
	const sw_estrogencap = watch(() => savedata.value.estrogen, (estrogen, _) => {
		if (estrogen >= 1) savedata.value.achievements['get_1_e'] = true
		if (estrogen >= 100) savedata.value.achievements['get_1e2_e'] = true
		if (estrogen >= 10000) savedata.value.achievements['get_1e4_e'] = true
		if (estrogen >= 100000) savedata.value.achievements['get_1e5_e'] = true
		if (estrogen >= 1000000) savedata.value.achievements['get_1e6_e'] = true
		if (estrogen >= 1000000000) savedata.value.achievements['get_1e9_e'] = true
		if (estrogen >= 1000000000000) {
			savedata.value.achievements['get_1e12_e'] = true
			sw_estrogencap()
		}
	})

	const sw_get_coins = watch(() => savedata.value.coins, (coins, _) => {
		if (coins >= 10) savedata.value.achievements['get_10_coins'] = true
		if (coins >= 100) {
			savedata.value.achievements['get_100_coins'] = true
			sw_get_coins()
		}
	})

	const sw_greater_autoclick = watch(producestrength, (ps, _) => {
		if (ps > clickstrength.value) {
			savedata.value.achievements['greater_autoclick'] = true
			sw_greater_autoclick()
		}
	})
	
	watch(() => savedata.value.upgrades['marksman'], () => savedata.value.achievements['buy_marksman'] = true, {once: true})
	watch(() => savedata.value.upgrades['music_software'], () => savedata.value.achievements['buy_fl_studio'] = true, {once: true})

	watch(() => savedata.value.improvements['end_game'], () => savedata.value.achievements['win'] = true, {once: true})

	////////////
	// Saving //
	////////////
	const save = (name) => {
		name = name || 'estro'
		localStorage.setItem(`savedata-${name}`, JSON.stringify(savedata.value))
	}
	const load = (name) => {
		name = name || 'estro'
		savedata.value = JSON.parse(localStorage.getItem(`savedata-${name}`))

		if (savedata.value === null) savedata.value = gamedata.defaultsavedata

		updateAutoproduction()
	}
	// Debug
	const statsInfo = {
		'clickS': clickstrength,
		'produceS': producestrength,

		'totalE': () => savedata.value.total_estrogen,
		'coins': () => savedata.value.coins,
		'start_date': () => savedata.value.start_date,

		'isTempSquared': isTempSquared,
	}

	return { savedata, increment, upgradesprices, improvementsprices, canBuyUpgrade, buyUpgrade, buyImprovements, save, load, statsInfo }
})

import { defineStore } from 'pinia'

export const useGameStore = defineStore('gamedata', () => {

	const defaultsavedata = {
		estrogen: 0,
		coins: 0,

		total_estrogen: 0,
		start_date: null,

		upgrades: {
			// TODO: Find names
			shark: 0,
			clicker: 0,
			marksman: 0,

			mountain_game: 0,
			sylveon: 0,
			music_software: 0,

		},

		improvements: {
			two_times_prod: 0,
			interval_reduced: 0,
			temp_square_prod: 0,

			autobuy_click: 0,
			autobuy_autoclick: 0,

			end_game: 0,
		},

		achievements: {
			get_1_e: false,
			get_1e2_e: false,
			get_1e4_e: false,
			get_1e5_e: false,
			get_1e6_e: false,
			get_1e9_e: false,
			get_1e12_e: false,

			buy_marksman: false,
			buy_fl_studio: false,

			greater_autoclick: false,

			all_production: false,
			all_interval: false,
			all_automation: false,
			all_improvements: false,

			get_10_coins: false,
			get_100_coins: false,

			win: false,
		}
	}

	const upgradesnames = {
		shark: "Shark",
		clicker: "Clicker",
		marksman: "Marksman",

		mountain_game: "Celeste",
		sylveon: "Sylveon",
		music_software: "FL Studio",
	}

	const improvementsnames = {
		two_times_prod: "x2 Production",
		interval_reduced: "Reduce autoclick interval",
		temp_square_prod: "Temporary ^1.1 to all production",

		autobuy_click: "Autobuy click upgrades",
		autobuy_autoclick: "Autobuy autoclick upgrades",

		end_game: "Win",
	}

	const upgradesdescription = {
		shark: "Add 1 to click strength",
		clicker: "Multiply click strength by x1.05",
		marksman: "When clicking, have a small chance to drop a coin. Each coin gives 15% more estrogen per click",

		mountain_game: "Add 1 to auto-click strength",
		sylveon: "Multiply auto-click strength by x1.1",
		music_software: "Add x0.1 of click strength to auto-click strength",
	}

	const upgradesquotes = {
		shark: "frend :D",
		clicker: "whos a good girl? 🎔",
		marksman: "\"BEHOLD, THE POWER OF AN ANGEL!\" the spare change in my pocket:",

		mountain_game: "Now with even more strawberries and wrist pain !",
		sylveon: "\"IL EST SU JOYEUX ET PLEIN DE BONHUER !!!!\" - oomf",
		music_software: "Stream Frums",
	}

	const upgradesbaseprices = {
		shark: 10,
		clicker: 200,
		marksman: 50000,

		mountain_game: 50,
		sylveon: 500,
		music_software: 10000,
	}

	const improvementbaseprices = {
		two_times_prod: 1500,
		interval_reduced: 5000,
		temp_square_prod: 50000,

		autobuy_click: 6000,
		autobuy_autoclick: 7000,

		end_game: 10_000_000_000_000,
	}

	const upgradesbasescaling = {
		shark: 1.8,
		clicker: 1.8,
		marksman: 1.8,

		mountain_game: 1.5,
		sylveon: 1.5,
		music_software: 1.5,
	}

	const improvementbasescaling = {
		two_times_prod: 4.1,
		interval_reduced: 3.8,
		temp_square_prod: 50,

		autobuy_click: 1.8,
		autobuy_autoclick: 1.8,

		end_game: 0,
	}

	const maximprovementscount = {
		two_times_prod: 10,
		interval_reduced: 5,
		temp_square_prod: -1,

		autobuy_click: 3,
		autobuy_autoclick: 3,

		end_game: -1,
	}

	const achievementstitles = {
		get_1_e: "Have 1 estrogen",
		get_1e2_e: "Have 100 estrogen",
		get_1e4_e: "Have 1000 estrogen",
		get_1e5_e: "Have 10000 estrogen",
		get_1e6_e: "Have 100000 estrogen",
		get_1e9_e: "Have 100000000 estrogen",
		get_1e12_e: "Have 100000000000 estrogen",

		buy_marksman: "Buy a marksman",
		buy_fl_studio: "Get an FL Studio license",

		greater_autoclick: "Have your autoclick strength surpass your click strength",

		all_production: "Buy all 2x production improvements",
		all_interval: "Buy all interval reduction improvements",
		all_automation: "Buy all autobuyers",
		all_improvements: "Buy all improvements",

		get_10_coins: "Have 10 coins",
		get_100_coins: "Have 100 coins",

		win: "Win the game",
	}
	
	const achievementsassets = {
		get_1_e: "/assets/achievements/get_1_e.png",
		get_1e2_e: "/assets/achievements/get_1e2_e.png",
		get_1e4_e: "/assets/achievements/get_1e4_e.png",
		get_1e5_e: "/assets/achievements/get_1e5_e.png",
		get_1e6_e: "/assets/achievements/get_1e6_e.png",
		get_1e9_e: "/assets/achievements/get_1e9_e.png",
		get_1e12_e: "/assets/achievements/get_1e12_e.png",
	
		buy_marksman: "/assets/achievements/buy_marksman.png",
		buy_fl_studio: "/assets/achievements/buy_fl_studio.png",
	
		greater_autoclick: "/assets/achievements/greater_autoclick.png",
	
		all_production: "/assets/achievements/all_production.png",
		all_interval: "/assets/achievements/all_interval.png",
		all_automation: "/assets/achievements/all_automation.png",
		all_improvements: "/assets/achievements/all_improvements.png",
	
		get_10_coins: "/assets/achievements/get_10_coins.png",
		get_100_coins: "/assets/achievements/get_100_coins.png",
	
		win: "/assets/achievements/win.png",
	}

	return {
		defaultsavedata,
		upgradesnames,
		improvementsnames,
		upgradesdescription,
		upgradesquotes,
		upgradesbaseprices,
		improvementbaseprices,
		upgradesbasescaling,
		improvementbasescaling,
		maximprovementscount,
		achievementstitles,
		achievementsassets
	}
})
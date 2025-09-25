import { defineStore } from 'pinia'

export const useGameStore = defineStore('gamedata', () => {

    const upgradesbaseprices = {
        shark: 10,
        clicker: 10,
        click3: 10,

        mountain_game: 50,
        sylveon: 50,
        music_software: 50,
    }

    const upgradesbasescaling = {
        shark: 1.8,
        clicker: 1.8,
        click3: 1.8,

        mountain_game: 1.8,
        sylveon: 1.8,
        music_software: 1.8,
    }

    const maximprovementscount = {
        two_times_prod: 5,
        interval_reduced: 5,
        better_scaling_cost: 5,
        temp_square_prod: -1,

        autobuy_click: 1,
        autobuy_autoclick: 1,

        end_game: -1,
    }

    return { upgradesbaseprices, upgradesbasescaling, maximprovementscount }
})
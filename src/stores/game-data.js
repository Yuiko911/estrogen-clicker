import { defineStore } from 'pinia'

export const useGameStore = defineStore('gamedata', () => {

    const defaultsavedata = {
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
    }

    const upgradesnames = {
        shark: "Shark",
        clicker: "Clicker",
        click3: "???",

        mountain_game: "Celeste",
        sylveon: "Sylveon",
        music_software: "FL Studio",
    }
    
    const upgradesdescription = {
        shark: "Add 1 to click strength",
        clicker: "Multiply click strength by x1.05",
        click3: "TODO",
    
        mountain_game: "Add 1 to auto-click strength",
        sylveon: "Multiply auto-click strength by x1.1",
        music_software: "Add x0.1 of click strength to auto-click strength",
    }

    const upgradesquotes = {
        shark: "frend",
        clicker: "TODO",
        click3: "TODO",
    
        mountain_game: "TODO",
        sylveon: "\"IL EST SU JOYEUX ET PLEIN DE BONHUER !!!!\"",
        music_software: "TODO",
    }

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

        autobuy_click: 3,
        autobuy_autoclick: 3,

        end_game: -1,
    }

    return { defaultsavedata, upgradesnames, upgradesdescription, upgradesquotes, upgradesbaseprices, upgradesbasescaling, maximprovementscount }
})
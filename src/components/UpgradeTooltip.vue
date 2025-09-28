<script setup>
import { useGameStore } from '@/stores/game-data';
import { useUserStore } from '@/stores/user-data';

const userdata = useUserStore()
const gamedata = useGameStore()

const props = defineProps({
    target: String
})

</script>

<template>
    <div class="root">
        <div style="font-weight: bold;">
            {{ gamedata.upgradesnames[target] }}
        </div>
        <div>
            {{ gamedata.upgradesdescription[target] }}
        </div>
        <div style="font-style: italic; color: gray;">
            {{ gamedata.upgradesquotes[target] }}
        </div>
    </div>

</template>

<style scoped>
.root {
    background-color: white;

    border: 3px solid black;
    border-radius: 5px;

    padding: 10px;
}
</style>
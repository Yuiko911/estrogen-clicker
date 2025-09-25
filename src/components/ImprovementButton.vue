<script setup>

import { useGameStore } from '@/stores/game-data';
import { useUserStore } from '@/stores/user-data';

const userdata = useUserStore()
const gamedata = useGameStore()

const props = defineProps({
    image: String,
    target: String
})

</script>

<template>
    <div>
        <button @click="userdata.buyImprovements(target)">
            ({{ userdata.savedata.improvements[target] }}<span v-if="gamedata.maximprovementscount[target] > 0">/{{ gamedata.maximprovementscount[target] }}</span>) <slot></slot> ({{ userdata.improvementsprices[target] }})
        </button>
    </div>
</template>

<style scoped>
</style>
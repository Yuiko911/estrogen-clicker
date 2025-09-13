<script setup>

import { useUserStore } from '@/stores/user-data';
import { useGameStore } from '@/stores/game-data';

const userdata = useUserStore()
const gamedata = useGameStore()

const props = defineProps({
    image: String,
    target: String
})

</script>

<template>
    <div>
        <button @click="userdata.buyUpgrade(target)">
            {{ userdata.savedata.upgrades[target] }}x <slot></slot> ({{ gamedata.upgradesprices[target] }})
        </button>
    </div>
</template>

<style scoped></style>
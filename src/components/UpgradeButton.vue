<script setup>

import { useUserStore } from '@/stores/user-data';

const userdata = useUserStore()

const props = defineProps({
    image: String,
    target: String
})

</script>

<template>
    <div>
        <button @click="userdata.buyUpgrade(target)">
            {{ userdata.savedata.upgrades[target] }}x <slot></slot> ({{ userdata.upgradesprices[target] }})
        </button>
    </div>
</template>

<style scoped>
</style>
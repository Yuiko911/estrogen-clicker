<script setup>
import { useUserStore } from '@/stores/user-data';

const userdata = useUserStore()
</script>

<template>
    <div id="playarea-text">
        <p id="total-count">{{ userdata.savedata.estro }} estrogen</p>
        <p id="persecond-count">{{ userdata.savedata.estro / 7.9 }} estrogen / s</p>
    </div>
</template>

<style scoped>
#total-count {
    font-size: larger;
    font-weight: bold;
}
</style>
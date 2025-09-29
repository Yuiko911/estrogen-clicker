<script setup>
import { useUserStore } from '@/stores/user-data';

// TODO: rename file TextArea already taken

const userdata = useUserStore()
</script>

<template>
    <div id="playarea-text">
        <p id="total-count">{{ userdata.savedata.estrogen }} estrogen</p>
    </div>
</template>

<style scoped>
#total-count {
    font-size: larger;
    font-weight: bold;
}
</style>
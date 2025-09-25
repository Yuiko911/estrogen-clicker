<script setup>
import UpgradeButton from '@/components/UpgradeButton.vue';
import { useUserStore } from '@/stores/user-data';

const userdata = useUserStore()

</script>

<template>

    <h3>click upgrades</h3>
    <UpgradeButton target="shark">Shark</UpgradeButton>
    <button>x1.05 click strength</button>
    
    <h3>autoclick upgrades</h3>
    <UpgradeButton target="mountain_game">Unnamed Mountain Climbing Game</UpgradeButton>
    <button>Autobuy mountain</button>
    <button>autoclick click</button>

    <h3>improvements</h3>
    <button>(0/5) 2x production multiplier</button>

    <br>

    <button>(0/5) Reduce autoclick cooldown</button>
    <button>(0/5) Better scaling cost</button>

    <br>

    <button>Temporary ^2 to all production (price scales a lot)</button>
    <button>Autobuy click upgrades</button>
    <button>Autobuy autoclick upgrades</button>
    <button>Become cis</button>

	<button v-on:click="userdata.logSave">log</button>
</template>

<style scoped></style>
<script setup>
import UpgradeButton from '@/components/UpgradeButton.vue';
import ImprovementButton from '@/components/ImprovementButton.vue';

import { useUserStore } from '@/stores/user-data';

const userdata = useUserStore()

</script>

<template>

    <h3>click upgrades</h3>
        <UpgradeButton target="shark" image="/assets/blahaj.png"></UpgradeButton>
        <UpgradeButton target="clicker" image="/assets/clicker.png">Clicker</UpgradeButton>
        <UpgradeButton target="click3" image="">Click 3</UpgradeButton>

    <h3>autoclick upgrades</h3>
        <UpgradeButton target="mountain_game" image="/assets/mountain-game.png">Unnamed Mountain Climbing Game</UpgradeButton>
        <UpgradeButton target="sylveon" image="/assets/sylveon.png">Sylveon</UpgradeButton>
        <UpgradeButton target="music_software" image="/assets/music-soft.png">Unnamed Music Making Software</UpgradeButton>
    
    <h3>improvements</h3>
        <ImprovementButton target="two_times_prod">2x production multiplier</ImprovementButton>
        
        <br>
        
        <ImprovementButton target="interval_reduced">Reduce autoclick cooldown</ImprovementButton>
        <ImprovementButton target="better_scaling_cost">Better scaling cost</ImprovementButton>
        
        <br>
        
        <ImprovementButton target="temp_square_prod">Temporary ^2 to all production (price scales a lot)</ImprovementButton>
        <ImprovementButton target="autobuy_click">Autobuy click upgrades</ImprovementButton>
        <ImprovementButton target="autobuy_autoclick">Autobuy autoclick upgrades</ImprovementButton>

        <ImprovementButton target="end_game">Become cis</ImprovementButton>

</template>

<style scoped></style>
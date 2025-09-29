<script setup>
import UpgradeButton from '@/components/UpgradeButton.vue';
import ImprovementButton from '@/components/ImprovementButton.vue';

import { useUserStore } from '@/stores/user-data';

const userdata = useUserStore()

</script>

<template>
	<div id="upgrades-root">
		<h3>Click Upgrades</h3>
		<UpgradeButton target="shark" image="/assets/upgrades/blahaj.png"></UpgradeButton>
		<UpgradeButton target="clicker" image="/assets/upgrades/clicker.png"></UpgradeButton>
		<UpgradeButton target="marksman" image="/assets/upgrades/marksman.png"></UpgradeButton>
	
		<h3>Autoclick Upgrades</h3>
		<UpgradeButton target="mountain_game" image="/assets/upgrades/mountain-game.png"></UpgradeButton>
		<UpgradeButton target="sylveon" image="/assets/upgrades/sylveon.png"></UpgradeButton>
		<UpgradeButton target="music_software" image="/assets/upgrades/music-soft.png"></UpgradeButton>
	
		<h3>Improvements</h3>
		<ImprovementButton target="two_times_prod" image="/assets/improvement/two_times_mult.png"></ImprovementButton>
		<ImprovementButton target="interval_reduced" image="/assets/improvement/interval_reduced.png"></ImprovementButton>
		
		<div class="spacer"></div>
		
		<ImprovementButton target="autobuy_click" image="/assets/improvement/autobuy_click.png"></ImprovementButton>
		<ImprovementButton target="autobuy_autoclick" image="/assets/improvement/autobuy_autoclick.png"></ImprovementButton>
		
		<div class="spacer"></div>
		
		<ImprovementButton target="temp_square_prod" image="/assets/improvement/temp_square_prod.png"></ImprovementButton>
		<ImprovementButton target="end_game" image="/assets/improvement/end_game.png"></ImprovementButton>
	</div>

</template>

<style scoped>
#upgrades-root {
	display: flex;
	flex-direction: column;

	text-align: center;
}

.spacer {
	height: 25px;
}
</style>
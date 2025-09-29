<script setup>
import UpgradeButton from '@/components/UpgradeButton.vue';
import ImprovementButton from '@/components/ImprovementButton.vue';

import { useUserStore } from '@/stores/user-data';

const userdata = useUserStore()

</script>

<template>
	<div id="upgrades-root">
		<h3>click upgrades</h3>
		<UpgradeButton target="shark" image="/assets/blahaj.png"></UpgradeButton>
		<UpgradeButton target="clicker" image="/assets/clicker.png"></UpgradeButton>
		<UpgradeButton target="marksman" image="/assets/marksman.png"></UpgradeButton>
	
		<h3>autoclick upgrades</h3>
		<UpgradeButton target="mountain_game" image="/assets/mountain-game.png"></UpgradeButton>
		<UpgradeButton target="sylveon" image="/assets/sylveon.png"></UpgradeButton>
		<UpgradeButton target="music_software" image="/assets/music-soft.png"></UpgradeButton>
	
		<h3>improvements</h3>
		<ImprovementButton target="two_times_prod" image="/assets/two_times_mult.png"></ImprovementButton>
		<ImprovementButton target="interval_reduced" image="/assets/interval_reduced.png"></ImprovementButton>
		
		<div class="spacer"></div>
		
		<ImprovementButton target="autobuy_click" image="/assets/autobuy_click.png"></ImprovementButton>
		<ImprovementButton target="autobuy_autoclick" image="/assets/autobuy_autoclick.png"></ImprovementButton>
		
		<div class="spacer"></div>
		
		<ImprovementButton target="temp_square_prod" image="/assets/temp_square_prod.png"></ImprovementButton>
		<ImprovementButton target="end_game" image="/assets/end_game.png"></ImprovementButton>
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
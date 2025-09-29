<script setup>
import { useGameStore } from '@/stores/game-data';

const gamedata = useGameStore()

const props = defineProps({
	target: String,
	done: Boolean
})

</script>

<template>
	<div id="root-card" :title="gamedata.achievementstitles[target]">
		<img :class="{hidden: done}" :src="gamedata.achievementsassets[target]" alt="">
	</div>
</template>

<style>
#root-card {
	background-color: white;

	/* border: 3px solid black;
	border-radius: 5px; */

	width: 100px;
	height: 100px;
	margin: 10px;
}

#root-card>img {
	/* background-color: blue; */
	width: 100%;
	height: 100%;
}

.hidden {
	filter: grayscale() blur(5px);
}
</style>


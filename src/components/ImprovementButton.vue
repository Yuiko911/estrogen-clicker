<script setup>

import { useGameStore } from '@/stores/game-data';
import { useUserStore } from '@/stores/user-data';
import { computed } from 'vue';

const userdata = useUserStore()
const gamedata = useGameStore()

const props = defineProps({
	image: String,
	target: String
})

let iconimage = props.image || "/assets/placeholder.png"

const isClickable = computed(() => {
	if (gamedata.maximprovementscount[props.target] <= 0) return true
	return userdata.savedata.improvements[props.target] < gamedata.maximprovementscount[props.target]
})


</script>

<template>
	<div id="root" @click="userdata.buyImprovements(target)" :class="{ clickable: isClickable }">
		<img :src="iconimage" alt="upgrade icon">

		<div id="text">
			<div>
				{{ gamedata.improvementsnames[target] }}
			</div>
			<div v-if="isClickable">{{ userdata.improvementsprices[target] }}</div>
		</div>

		<div id="count">
			{{ userdata.savedata.improvements[target] }}<span v-if="gamedata.maximprovementscount[target] > 0">/{{ gamedata.maximprovementscount[target] }}</span>
		</div>
	</div>
</template>

<style scoped>
#root {
	background-color: rgb(233, 233, 233);

	box-shadow: 0px 5px 8px -5px rgb(81, 88, 88);

	height: 55px;

	margin: 10px;
	padding: 5px;

	/* border: 1px solid black; */
	border-radius: 5px;

	display: flex;
	gap: 10px;
}

#root>img {
	height: 100%;

	/* background-color: rebeccapurple; */
}

#text {
	text-align: left;
}

#count {
	/* background-color: rebeccapurple; */
	margin-left: auto;
}

.clickable {
	cursor: pointer;
}
</style>
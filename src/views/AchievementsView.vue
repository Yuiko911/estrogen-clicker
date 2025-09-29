<script setup>
import { useUserStore } from '@/stores/user-data';
import { ref } from 'vue';

import AchievementCard from '@/components/AchievementCard.vue';

const userdata = useUserStore()

const achievements = ref(Object.entries(userdata.savedata.achievements))

</script>

<template>
	<div id="achievements-root">
		<h3>Stats</h3>
		
		<div id="stats">
			<p><span style="text-decoration: underline;">Click strength</span> : {{ userdata.statsInfo['clickS'] }}</p>
			<p><span style="text-decoration: underline;">Autoclick strength</span> : {{ userdata.statsInfo['produceS'] }}</p>
			<p><span style="text-decoration: underline;">Total estrogen</span> : {{ userdata.statsInfo['totalE']() }}</p>
			<p><span style="text-decoration: underline;">Coins</span> : {{ userdata.statsInfo['coins']() }}</p>
			<p><span style="text-decoration: underline;">Game started at</span> : {{ new Date(userdata.statsInfo['start_date']()).toLocaleTimeString() }}</p>
		</div>

		<h3>Achievements</h3>
		<div id="achievements">
			<AchievementCard 
				v-for="achievement in achievements"
				:target="achievement[0]"
				:done="achievement[1]"
			/>
		</div>
	</div>
</template>

<style scoped>
#achievements-root {
	display: flex;
	flex-direction: column;

	text-align: center;
}

#stats, #achievements {
	height: 200px;
}


#achievements {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly
}
</style>
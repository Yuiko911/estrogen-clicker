<script setup>
import { useUserStore } from '@/stores/user-data';
import { ref } from 'vue';

const username = ref('')
const userdata = useUserStore()

const saves = ref([])
saves.value = Object.entries(localStorage).filter((e) => e[0].startsWith("savedata-"))

function loadConfirmationModal() {
	if (confirm("Are you sure ?")) {
		let name = username.value || 'estro'
		userdata.load(name)
	}			
}

</script>

<template>

	<div id="settings-root">
		<h3>File Management</h3>
	
		<div>
			<input placeholder="username" type="text" v-model="username">
		</div>
	
		<div id="saves-buttons">
			<button @click="userdata.save(username)">Save</button>
			<button @click="loadConfirmationModal()">Load</button>
		</div>
	
		<h3>saves</h3>
		<div style="line-height: 2em;" v-for="save in saves">
			{{ save[0].replace("savedata-", "") }} - {{ JSON.parse(save[1])['estrogen'] }} estrogen
		</div>
	</div>
</template>

<style scoped>
#settings-root {
	display: flex;
	flex-direction: column;

	text-align: center;
}

button {
    margin: 5px 5px 5px 0px;
	background-color: rgb(233, 233, 233);
	border-radius: 3px;
	
    box-shadow: 1px 3px 0px rgb(81, 88, 88, 0.3);
}
</style>
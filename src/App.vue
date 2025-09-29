<script setup>

import { RouterLink, RouterView } from 'vue-router'

import TextArea from './components/TextArea.vue';
import Pill from './components/Pill.vue';

// 
//  \    ^^                
//   )  ( ')  <(meow)        /,
//  (  /  )       (bloob)>  <'_)=<
//   \(__)|                  \` 
//  

</script>

<template>
	<div id="left-panel">
		<TextArea id="text-area" />
		<div id="pill-area">
			<Pill />
		</div>
	</div>
	<div id="menu-panel">
		<nav>
			<RouterLink class="nav-panel" to="/">Upgrades</RouterLink>
			<RouterLink class="nav-panel" to="/achievements">Achievements</RouterLink>
			<RouterLink class="nav-panel" to="/settings">Settings</RouterLink>
		</nav>

		<div id="action-panel">
			<RouterView />
		</div>
	</div>
</template>

<style scoped>
#left-panel,
#menu-panel {
	width: 50%;
	padding: 10px;
}

#left-panel {
	display: flex;

	flex-direction: column; 

	/* background-color: blanchedalmond; */
	text-align: center;
}

#text-area {
	height: fit-content;
}

#pill-area {
	height: fit-content;

	flex-grow: 1;

	display: flex;
	justify-content: center;
	align-items: center;
}

#menu-panel {
	/* background-color: white; */

	display: flex;
	flex-direction: column;
}

#menu-panel > nav {
	/* background-color: rgb(255, 237, 237); */
	height: fit-content;

	display: flex;

}

.nav-panel {
	color: black;
	text-decoration: none;

	border: 3px solid black;
	border-radius: 5px;

	padding: 5px 10px;
	margin-right: 15px;
}

.nav-panel:nth-child(1) {background-color: #e9ffff;}
.nav-panel:nth-child(2) {background-color: #f4f8fe;}
.nav-panel:nth-child(3) {background-color: #fff2fe;}

#action-panel {
	background-color: white;

	border: 3px solid black;
	border-radius: 5px;

	overflow-y: auto;

	margin-top: auto;
	height: 90%;
}

</style>

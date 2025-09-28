<script setup>
import { useUserStore } from '@/stores/user-data';
import { ref } from 'vue';

const username = ref('')
const userdata = useUserStore()

const saves = ref([])
saves.value = Object.entries(localStorage).filter((e) => e[0].startsWith("savedata-"))

</script>

<template>

    <h3>file management</h3>

    <div>
        <input placeholder="username" type="text" v-model="username">
    </div>

    <button @click="userdata.save(username)">Save</button>
    <button @click="userdata.load(username)">Load</button>

    <h3>saves</h3>
    <p v-for="save in saves">
        {{ save[0].replace("savedata-", "") }} - {{ JSON.parse(save[1])['estrogen'] }} estrogen
    </p>

    <h3>debug info</h3>
    <button v-on:click="userdata.debugInfo['logSave']">log</button>
    <button v-on:click="userdata.debugInfo['giveE']">cheat</button>
    <button v-on:click="console.log(userdata.debugInfo['isTempSquared'])">statussquare</button>
    <div>click : {{ userdata.debugInfo['clickS'] }}</div>
    <div>auto : {{ userdata.debugInfo['produceS'] }}</div>
</template>

<style scoped>
button {
    margin: 5px 5px 5px 0px;
    background-color: aquamarine;
}
</style>
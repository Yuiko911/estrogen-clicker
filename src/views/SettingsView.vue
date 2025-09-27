<script setup>
import { useUserStore } from '@/stores/user-data';
import { ref } from 'vue';
const username = ref('')

const userdata = useUserStore()

</script>

<template>

    <h3>file management</h3>

    <div>
        <input placeholder="username" type="text" v-model="username">
        <span style="font-style: italic;" v-if="username === ''"> Username can't be empty</span>
    </div>

    <button @click="userdata.save">Save</button>
    <button @click="userdata.load">Load</button>

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
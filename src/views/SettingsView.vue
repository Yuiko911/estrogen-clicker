<script setup>
import { useUserStore } from '@/stores/userData';
import { ref } from 'vue';
const username = ref('')

const userdata = useUserStore()

</script>

<template>
    <h2>Settings</h2>

    <div>
        <input placeholder="username" type="text" v-model="username">
        <span style="font-style: italic;" v-if="username === ''"> Username can't be empty</span>
    </div>

    <button @click="userdata.save">Save</button>
    <button @click="userdata.load">Load</button>
</template>

<style scoped>
button {
    margin: 5px 5px 5px 0px;
    background-color: aquamarine;
}
</style>